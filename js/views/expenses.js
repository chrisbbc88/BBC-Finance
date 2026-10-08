// Ausgaben: Belege hochladen, per KI auslesen, prüfen und buchen.

import { html, useState, useEffect, useRef, useMemo, useStore, toast, attempt, ask, showError } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, EmptyState, Modal, TextField, TextArea,
  SelectField, NumberField, DateField, Notice, NumberInput, Field,
} from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { state, byId, activeCompanies, currentCompany, inScope } from '../lib/store.js';
import { newExpense, EXPENSE_CURRENCIES } from '../lib/schema.js';
import { saveExpense, deleteExpense, addAttachment, removeAttachment } from '../lib/actions.js';
import { prepareReceipt, attachmentBlob } from '../lib/files.js';
import { extractReceipt } from '../lib/ai.js';
import { fxFor, wantedRateDate } from '../lib/fx.js';
import { toUSD } from '../lib/calc.js';
import { money, date } from '../lib/format.js';
import {
  matches, todayISO, nowISO, periodRange, inRange, PERIODS, isISODate, fileSize, clone,
} from '../lib/util.js';
import { saveBlob } from '../lib/pdf.js';
import { CompanyTag } from './shared.js';

/* ---------- KI-Lauf ---------- */

// Laufende Erkennungen (nur Anzeige; der Stand selbst steht am Datensatz).
const reading = new Set();
const readingListeners = new Set();
const notifyReading = () => readingListeners.forEach((fn) => fn(new Set(reading)));
function useReading() {
  const [s, setS] = useState(new Set(reading));
  useEffect(() => { readingListeners.add(setS); return () => readingListeners.delete(setS); }, []);
  return s;
}

const aiSettings = () => ({
  apiKey: state.settings.aiApiKey,
  model: state.settings.aiModel,
  categories: state.settings.expenseCategories || [],
  paymentMethods: state.settings.paymentMethods || [],
});

/** Liest den ersten Beleg einer Ausgabe aus und gibt die erkannten Felder zurück (ohne zu speichern). */
async function readReceipt(attachmentId) {
  const blob = await attachmentBlob(attachmentId);
  if (!blob) throw new Error('Die Belegdatei wurde nicht gefunden.');
  return extractReceipt(blob, aiSettings());
}

async function fxSafe(currency, dateISO) {
  try { return await fxFor(currency, isISODate(dateISO) ? dateISO : todayISO()); } catch (_) { return null; }
}

/** Beleg hochladen → Ausgabe „zu prüfen“ anlegen → (mit API-Key) automatisch auslesen. */
async function importReceipt(file) {
  const prepared = await prepareReceipt(file, { shrink: state.settings.shrinkImages !== false });
  const company = currentCompany() || (activeCompanies().length === 1 ? activeCompanies()[0] : null);
  let expense = newExpense({
    status: 'review', companyId: company ? company.id : '', invoiceDate: '',
    description: '', vendor: '', ai: { status: state.settings.aiApiKey ? 'pending' : 'none' },
  });
  const meta = await addAttachment({ blob: prepared.blob, name: prepared.name, ownerType: 'expense', ownerId: expense.id });
  expense.attachmentIds = [meta.id];
  expense = await saveExpense(expense);
  if (!state.settings.aiApiKey) return expense;

  reading.add(expense.id); notifyReading();
  try {
    const result = await readReceipt(meta.id);
    const f = result.fields;
    const currency = f.currency || expense.currency;
    const fx = await fxSafe(currency, f.invoiceDate);
    const current = byId('expenses', expense.id);
    if (current && current.status === 'review') {
      expense = await saveExpense({
        ...current, ...f, currency, fx,
        ai: { status: 'done', at: nowISO(), model: state.settings.aiModel, uncertain: result.uncertain, warnings: result.warnings },
      });
    }
  } catch (err) {
    const current = byId('expenses', expense.id);
    if (current) await saveExpense({ ...current, ai: { status: 'error', message: err.message, at: nowISO() } }).catch(() => {});
    throw err;
  } finally {
    reading.delete(expense.id); notifyReading();
  }
  return expense;
}

/* ---------- Beleganzeige ---------- */

function ReceiptView({ attachmentId }) {
  const [url, setUrl] = useState('');
  const [missing, setMissing] = useState(false);
  const meta = byId('attachments', attachmentId);
  useEffect(() => {
    let objectUrl = '';
    let alive = true;
    setUrl(''); setMissing(false);
    attachmentBlob(attachmentId).then((blob) => {
      if (!alive) return;
      if (!blob) { setMissing(true); return; }
      objectUrl = URL.createObjectURL(blob);
      setUrl(objectUrl);
    }).catch(() => alive && setMissing(true));
    return () => { alive = false; if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, [attachmentId]);

  async function download() {
    const blob = await attachmentBlob(attachmentId);
    if (blob) saveBlob(blob, meta ? meta.name : 'Beleg');
  }
  if (missing || !meta) {
    return html`<div class="receipt receipt-missing"><${Icon} name="file" size=${26} />
      <p>Die Belegdatei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).</p></div>`;
  }
  return html`<div class="receipt">
    <div class="receipt-frame">
      ${!url ? html`<p class="muted-text">Beleg wird geladen …</p>`
        : meta.mime === 'application/pdf'
          ? html`<iframe class="receipt-pdf" src=${url} title=${meta.name}></iframe>`
          : html`<img class="receipt-img" src=${url} alt=${`Beleg ${meta.name}`} />`}
    </div>
    <div class="receipt-meta">
      <span class="clamp-1">${meta.name}</span>
      <span class="muted-text">${fileSize(meta.size)}</span>
      <button type="button" class="link-btn" onClick=${download}>Herunterladen</button>
    </div>
  </div>`;
}

/* ---------- Formular ---------- */

function ExpenseModal({ expense, onClose }) {
  const isNew = !byId('expenses', expense.id);
  const wasReview = expense.status === 'review';
  const [e, setE] = useState(() => {
    const c = clone(expense);
    if (!c.invoiceDate && !wasReview) c.invoiceDate = todayISO();
    if (!c.companyId) {
      const comp = currentCompany() || (activeCompanies().length === 1 ? activeCompanies()[0] : null);
      if (comp) c.companyId = comp.id;
    }
    return c;
  });
  const [busy, setBusy] = useState('');
  const [fxErr, setFxErr] = useState('');
  const [fxNonce, setFxNonce] = useState(0);
  const added = useRef([]);
  const fileRef = useRef(null);
  const set = (k) => (v) => setE((p) => ({ ...p, [k]: v }));
  const attId = (e.attachmentIds || [])[0];
  const ai = e.ai || {};
  const uncertain = new Set(ai.uncertain || []);

  // Wechselkurs zum Belegdatum laden (außer er wurde von Hand gesetzt)
  const fxKey = `${e.currency}|${e.invoiceDate}`;
  useEffect(() => {
    let alive = true;
    if (!isISODate(e.invoiceDate)) return undefined;
    if (e.fx && e.fx.manual) return undefined;
    // Passt der gespeicherte Kurs schon zu Währung und Datum, bleibt er unangetastet (auch ohne Internet).
    const fits = (fx, p) => !!fx && fx.forCurrency === p.currency && fx.forDate === wantedRateDate(p.invoiceDate);
    if (fits(e.fx, e)) return undefined;
    setFxErr('');
    const cur = e.currency;
    const wanted = e.invoiceDate;
    fxFor(cur, wanted)
      .then((fx) => { if (alive) setE((p) => ((p.currency === cur && p.invoiceDate === wanted && !(p.fx && p.fx.manual)) ? { ...p, fx } : p)); })
      .catch((err) => {
        if (!alive) return;
        // Ein Kurs für eine andere Währung oder ein anderes Datum darf nicht stehen bleiben.
        setE((p) => ((p.fx && !p.fx.manual && p.fx.forDate && !fits(p.fx, p)) ? { ...p, fx: null } : p));
        setFxErr(err.message);
      });
    return () => { alive = false; };
  }, [fxKey, fxNonce]);

  function setAmount(k, v) {
    setE((p) => {
      const n = { ...p, [k]: v };
      if (k === 'totalCents') n.netCents = (v || 0) - (p.taxCents || 0);
      else n.totalCents = (n.netCents || 0) + (n.taxCents || 0);
      return n;
    });
  }
  function setRate(k, v) {
    if (!(v > 0)) return;
    setE((p) => {
      const base = p.fx || { rateToUSD: p.currency === 'USD' ? 1 : null, usdToEur: null };
      const fx = { ...base, [k]: v, manual: true, source: 'Von Hand eingetragen', date: todayISO(), fetchedAt: nowISO() };
      if (p.currency === 'USD') fx.rateToUSD = 1;
      if (p.currency === 'EUR' && k === 'usdToEur') fx.rateToUSD = 1 / v;
      return { ...p, fx };
    });
  }

  async function attach(file) {
    if (!file) return;
    setBusy('file');
    const meta = await attempt(async () => {
      const prepared = await prepareReceipt(file, { shrink: state.settings.shrinkImages !== false });
      return addAttachment({ blob: prepared.blob, name: prepared.name, ownerType: 'expense', ownerId: e.id });
    });
    setBusy('');
    if (meta) { added.current.push(meta.id); setE((p) => ({ ...p, attachmentIds: [meta.id, ...(p.attachmentIds || [])] })); }
  }

  async function detach() {
    const ok = await ask({ title: 'Beleg entfernen?', text: 'Die Belegdatei wird gelöscht.', confirmLabel: 'Entfernen', danger: true });
    if (!ok) return;
    const idToRemove = attId;
    await attempt(() => removeAttachment(idToRemove));
    setE((p) => ({ ...p, attachmentIds: (p.attachmentIds || []).filter((x) => x !== idToRemove) }));
    // Ist die Ausgabe schon gespeichert, den Verweis sofort mit entfernen.
    const stored = byId('expenses', e.id);
    if (stored) await attempt(() => saveExpense({ ...stored, attachmentIds: (stored.attachmentIds || []).filter((x) => x !== idToRemove) }));
  }

  async function runAI() {
    if (!attId) return;
    setBusy('ai');
    try {
      const result = await readReceipt(attId);
      const f = result.fields;
      setE((p) => ({
        ...p, ...f,
        currency: f.currency || p.currency,
        fx: null,
        ai: { status: 'done', at: nowISO(), model: state.settings.aiModel, uncertain: result.uncertain, warnings: result.warnings },
      }));
      setFxNonce((n) => n + 1);   // Kurs auch dann neu laden, wenn Währung und Datum gleich geblieben sind
      toast('Beleg ausgelesen – bitte die Angaben prüfen.', 'good');
    } catch (err) {
      showError(err);
    }
    setBusy('');
  }

  async function close() {
    // Dateien wieder entfernen, die in diesem Formular angehängt, aber nie mitgespeichert wurden.
    const stored = byId('expenses', e.id);
    const kept = new Set(stored ? stored.attachmentIds || [] : []);
    for (const aid of added.current) if (!kept.has(aid)) await removeAttachment(aid).catch(() => {});
    onClose();
  }

  async function submit() {
    setBusy('save');
    const saved = await attempt(() => saveExpense({ ...e, status: 'booked' }));
    setBusy('');
    if (saved) { toast(wasReview ? 'Beleg geprüft und gebucht' : 'Ausgabe gespeichert', 'good'); onClose(); }
  }

  async function remove() {
    const ok = await ask({ title: 'Ausgabe löschen?', text: 'Die Ausgabe und ihre Belegdatei werden endgültig gelöscht.', confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteExpense(e.id); return true; });
    if (done) { toast('Ausgabe gelöscht', 'good'); onClose(); }
  }

  const mark = (name) => (uncertain.has(name) ? 'Von der KI als unsicher markiert – bitte prüfen' : '');
  const usd = e.fx ? toUSD(e.totalCents, e.currency, e.fx) : (e.currency === 'USD' ? e.totalCents : null);
  const cats = state.settings.expenseCategories || [];
  const methods = state.settings.paymentMethods || [];

  return html`<${Modal} title=${isNew ? 'Neue Ausgabe' : (wasReview ? 'Beleg prüfen und buchen' : 'Ausgabe bearbeiten')} onClose=${close} size="xl" onSubmit=${submit}
    footer=${html`
      ${!isNew && html`<${Button} variant="ghost" icon="trash" onClick=${remove} class="push-left">Löschen<//>`}
      <${Button} onClick=${close}>Abbrechen<//>
      <${Button} variant="primary" type="submit" busy=${busy === 'save'}>${wasReview ? 'Prüfen und buchen' : 'Ausgabe speichern'}<//>`}>
    <div class="expense-form">
      <div class="expense-receipt">
        ${attId
          ? html`<${ReceiptView} attachmentId=${attId} />
              <div class="receipt-actions">
                <${Button} small icon="sparkle" busy=${busy === 'ai'} disabled=${!state.settings.aiApiKey} onClick=${runAI}
                  title=${state.settings.aiApiKey ? '' : 'Trage zuerst in den Einstellungen einen API-Key ein'}>Mit KI auslesen<//>
                <${Button} small variant="ghost" icon="trash" onClick=${detach}>Beleg entfernen<//>
              </div>
              ${!state.settings.aiApiKey && html`<p class="field-hint">Für das automatische Auslesen fehlt der API-Key. <a href="#/settings">Zu den Einstellungen</a></p>`}`
          : html`<button type="button" class="dropzone dropzone-small" onClick=${() => fileRef.current && fileRef.current.click()}>
              <${Icon} name="upload" size=${22} />
              <span>${busy === 'file' ? 'Wird hochgeladen …' : 'Beleg anhängen (Foto oder PDF)'}</span>
            </button>`}
        <input ref=${fileRef} type="file" class="visually-hidden" accept="image/*,application/pdf" tabindex="-1"
          onChange=${(ev) => { attach(ev.target.files[0]); ev.target.value = ''; }} />
      </div>
      <div class="expense-fields">
        ${ai.status === 'done' && html`<${Notice} tone="info">
          Von der KI vorausgefüllt. Bitte alle Angaben mit dem Beleg vergleichen, bevor du buchst.
          ${(ai.warnings || []).length > 0 && html`<ul class="notice-list">${ai.warnings.map((w) => html`<li>${w}</li>`)}</ul>`}
        <//>`}
        ${ai.status === 'error' && html`<${Notice} tone="warn">Automatisches Auslesen fehlgeschlagen: ${ai.message}<//>`}
        <div class="form-grid">
          <${SelectField} class="span-3" label="Unternehmen" value=${e.companyId} onChange=${set('companyId')} placeholder="Unternehmen wählen"
            options=${activeCompanies().map((c) => ({ id: c.id, label: c.name }))} />
          <${SelectField} class="span-3" label="Kategorie" value=${e.category} onChange=${set('category')} placeholder="Keine"
            options=${cats.includes(e.category) || !e.category ? cats : [...cats, e.category]} hint=${mark('category')} />
          <${TextField} class="span-4" label="Lieferant" value=${e.vendor} onInput=${set('vendor')} hint=${mark('vendor')} />
          <${TextField} class="span-2" label="Rechnungsnummer" value=${e.invoiceNumber} onInput=${set('invoiceNumber')} hint=${mark('invoice_number')} />
          <${TextField} class="span-6" label="Beschreibung" value=${e.description} onInput=${set('description')} />
          <${DateField} class="span-3" label="Rechnungsdatum" value=${e.invoiceDate} onInput=${set('invoiceDate')} hint=${mark('invoice_date')} />
          <${DateField} class="span-3" label="Zahlungsdatum" value=${e.paymentDate} onInput=${set('paymentDate')} hint=${mark('payment_date')} />
          <${SelectField} class="span-2" label="Währung" value=${e.currency} hint=${mark('currency')}
            onChange=${(v) => setE((p) => ({ ...p, currency: v, fx: null }))} options=${EXPENSE_CURRENCIES} />
          <${NumberField} class="span-2" label="Nettobetrag" mode="money" value=${e.netCents} onChange=${(v) => setAmount('netCents', v)} hint=${mark('net_amount')} />
          <${NumberField} class="span-2" label="Steuer" mode="money" value=${e.taxCents} onChange=${(v) => setAmount('taxCents', v)} hint=${mark('tax_amount')} />
          <${NumberField} class="span-3" label="Gesamtbetrag" mode="money" value=${e.totalCents} onChange=${(v) => setAmount('totalCents', v)}
            hint=${mark('total_amount') || (usd != null && e.currency !== 'USD' ? `≈ ${money(usd, 'USD')}` : '')} />
          <${SelectField} class="span-3" label="Zahlungsart" value=${e.paymentMethod} onChange=${set('paymentMethod')} placeholder="Keine Angabe"
            options=${methods.includes(e.paymentMethod) || !e.paymentMethod ? methods : [...methods, e.paymentMethod]} />
          <${Field} class="span-6" label="Wechselkurs" error=${fxErr && !(e.fx && e.fx.usdToEur) ? fxErr : ''}
            hint=${e.fx ? `${e.fx.manual ? e.fx.source : `Quelle: ${e.fx.source}`}${e.fx.date ? `, Stand ${date(e.fx.date)}` : ''}` : 'Wird zum Rechnungsdatum geladen.'}>
            <div class="fx-row">
              ${e.currency !== 'USD' && e.currency !== 'EUR' && html`
                <span class="fx-eq">1 ${e.currency} =</span>
                <${NumberInput} class="fx-input" value=${e.fx ? e.fx.rateToUSD : null} digits=${6} min=${0} max=${100000} allowEmpty aria-label=${`1 ${e.currency} in US-Dollar`}
                  onChange=${(v) => setRate('rateToUSD', v)} />
                <span class="fx-eq">USD,</span>`}
              <span class="fx-eq">1 USD =</span>
              <${NumberInput} class="fx-input" value=${e.fx ? e.fx.usdToEur : null} digits=${6} min=${0} max=${100} allowEmpty aria-label="1 US-Dollar in Euro"
                onChange=${(v) => setRate('usdToEur', v)} />
              <span class="fx-eq">EUR</span>
            </div>
          <//>
          <${TextArea} class="span-6" label="Notiz" value=${e.note} onInput=${set('note')} rows=${2} />
        </div>
      </div>
    </div>
  <//>`;
}

/* ---------- Übersicht ---------- */

export function ExpensesView() {
  useStore();
  const readingNow = useReading();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [period, setPeriod] = useState('year');
  const [editing, setEditing] = useState(null);
  const [drag, setDrag] = useState(false);
  const [uploading, setUploading] = useState(0);
  const fileRef = useRef(null);
  const showCompany = !currentCompany();
  const today = todayISO();

  const scoped = useMemo(() => state.expenses.filter((e) => inScope(e) || (!e.companyId && e.status === 'review')), [state.version, state.settings.activeCompany]);
  const review = scoped.filter((e) => e.status === 'review').sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  const range = periodRange(period, today);
  const booked = scoped.filter((e) => e.status === 'booked');
  const rows = booked
    .filter((e) => period === 'all' || inRange(e.invoiceDate, range))
    .filter((e) => !cat || e.category === cat)
    .filter((e) => matches(q, e.vendor, e.description, e.invoiceNumber, e.category, e.note, (e.totalCents / 100).toFixed(2), (e.totalCents / 100).toFixed(2).replace('.', ',')));
  const cats = [...new Set(booked.map((e) => e.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de'));
  const sums = rows.reduce((a, e) => {
    a.net += toUSD(e.netCents, e.currency, e.fx) || 0;
    a.tax += toUSD(e.taxCents, e.currency, e.fx) || 0;
    a.total += toUSD(e.totalCents, e.currency, e.fx) || 0;
    return a;
  }, { net: 0, tax: 0, total: 0 });

  async function handleFiles(fileList) {
    const files = [...fileList];
    if (!files.length) return;
    if (!activeCompanies().length) { toast('Lege zuerst ein Unternehmen an.', 'bad'); return; }
    setUploading((n) => n + files.length);
    let ok = 0;
    for (const file of files) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await importReceipt(file);
        ok += 1;
      } catch (err) {
        showError(err);
      } finally {
        setUploading((n) => n - 1);
      }
    }
    if (ok) toast(ok === 1 ? 'Beleg hochgeladen – bitte prüfen und buchen.' : `${ok} Belege hochgeladen – bitte prüfen und buchen.`, 'good');
  }

  const columns = [
    { key: 'date', label: 'Datum', sort: (e) => e.invoiceDate, render: (e) => date(e.invoiceDate) },
    {
      key: 'vendor', label: 'Lieferant', sort: (e) => e.vendor,
      render: (e) => html`<div class="cell-main">${e.vendor}</div>${e.description && html`<div class="cell-sub clamp-1">${e.description}</div>`}`,
    },
    { key: 'category', label: 'Kategorie', sort: (e) => e.category, render: (e) => e.category || html`<span class="muted-text">–</span>` },
    ...(showCompany ? [{ key: 'company', label: 'Unternehmen', render: (e) => html`<${CompanyTag} id=${e.companyId} />` }] : []),
    {
      key: 'file', label: 'Beleg',
      render: (e) => ((e.attachmentIds || []).length ? html`<span class="has-file" title="Beleg vorhanden"><${Icon} name="file" size=${16} /></span>` : html`<span class="muted-text">–</span>`),
    },
    { key: 'net', label: 'Netto', align: 'right', sort: (e) => toUSD(e.netCents, e.currency, e.fx) || 0, render: (e) => money(e.netCents, e.currency) },
    { key: 'tax', label: 'Steuer', align: 'right', render: (e) => (e.taxCents ? money(e.taxCents, e.currency) : html`<span class="muted-text">–</span>`) },
    {
      key: 'total', label: 'Gesamt', align: 'right', sort: (e) => toUSD(e.totalCents, e.currency, e.fx) || 0,
      render: (e) => html`<span class="dual"><span class="dual-main">${money(e.totalCents, e.currency)}</span>
        ${e.currency !== 'USD' && html`<span class="dual-sub">≈ ${money(toUSD(e.totalCents, e.currency, e.fx), 'USD')}</span>`}</span>`,
    },
    { key: 'paid', label: 'Bezahlt am', sort: (e) => e.paymentDate || '', render: (e) => (e.paymentDate ? date(e.paymentDate) : html`<span class="muted-text">offen</span>`) },
  ];
  const footer = rows.length ? [
    `${rows.length} ${rows.length === 1 ? 'Ausgabe' : 'Ausgaben'}`, '', '', ...(showCompany ? [''] : []), '',
    html`<span class="strong">${money(sums.net, 'USD')}</span>`, html`<span class="strong">${money(sums.tax, 'USD')}</span>`,
    html`<span class="strong">${money(sums.total, 'USD')}</span>`, html`<span class="muted-text">in USD</span>`,
  ] : null;

  return html`
    <${PageHeader} title="Ausgaben" sub="Beleg fotografieren oder als PDF ablegen – die Angaben werden ausgelesen und du bestätigst sie nur noch.">
      <${Button} icon="plus" onClick=${() => setEditing(newExpense())}>Ausgabe von Hand<//>
      <${Button} variant="primary" icon="upload" onClick=${() => fileRef.current && fileRef.current.click()}>Belege hochladen<//>
    <//>

    <div class=${`dropzone${drag ? ' is-drag' : ''}`}
      onDragOver=${(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave=${() => setDrag(false)}
      onDrop=${(e) => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files); }}>
      <${Icon} name="upload" size=${24} />
      <div>
        <strong>${uploading > 0 ? `${uploading} ${uploading === 1 ? 'Beleg wird' : 'Belege werden'} verarbeitet …` : 'Belege hierher ziehen'}</strong>
        <span>Fotos (JPG, PNG) und PDF, mehrere auf einmal möglich. ${state.settings.aiApiKey ? 'Die KI liest Lieferant, Datum, Beträge und Währung aus.' : html`Für das automatische Auslesen fehlt noch der API-Key (<a href="#/settings">Einstellungen</a>).`}</span>
      </div>
      <input ref=${fileRef} type="file" class="visually-hidden" multiple accept="image/*,application/pdf" tabindex="-1"
        onChange=${(e) => { handleFiles(e.target.files); e.target.value = ''; }} />
    </div>

    ${review.length > 0 && html`<section class="review">
      <h2>Zu prüfen <span class="count">${review.length}</span></h2>
      <ul class="review-list">
        ${review.map((e) => {
          const isReading = readingNow.has(e.id);
          const ai = e.ai || {};
          return html`<li key=${e.id}>
            <button type="button" class="review-item" onClick=${() => setEditing(e)} disabled=${isReading}>
              <span class="review-icon"><${Icon} name=${isReading ? 'refresh' : 'file'} class=${isReading ? 'spin' : ''} /></span>
              <span class="review-text">
                <span class="cell-main">${e.vendor || (byId('attachments', (e.attachmentIds || [])[0]) || {}).name || 'Beleg'}</span>
                <span class="cell-sub">${isReading ? 'Wird ausgelesen …'
                  : ai.status === 'error' ? `Nicht ausgelesen: ${ai.message}`
                  : ai.status === 'done' ? `${e.invoiceDate ? date(e.invoiceDate) : 'Datum fehlt'}, ${e.category || 'ohne Kategorie'}`
                  : 'Angaben von Hand eintragen'}</span>
              </span>
              <span class="review-amount">${e.totalCents ? money(e.totalCents, e.currency) : ''}</span>
              <span class="review-go">${isReading ? '' : 'Prüfen'}</span>
            </button>
          </li>`;
        })}
      </ul>
    </section>`}

    ${booked.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Lieferant, Beschreibung, Betrag" />
      <select class="input select filter-select" value=${period} aria-label="Zeitraum" onChange=${(e) => setPeriod(e.target.value)}>
        ${PERIODS.filter((p) => p.id !== 'custom').map((p) => html`<option value=${p.id}>${p.label}</option>`)}
      </select>
      ${cats.length > 0 && html`<select class="input select filter-select" value=${cat} aria-label="Kategorie" onChange=${(e) => setCat(e.target.value)}>
        <option value="">Alle Kategorien</option>
        ${cats.map((c) => html`<option value=${c}>${c}</option>`)}
      </select>`}
    </div>`}
    ${(booked.length > 0 || review.length === 0) && html`<${DataTable} columns=${columns} rows=${rows} initialSort=${{ key: 'date', dir: 'desc' }} footer=${footer} onRowClick=${(e) => setEditing(e)}
      empty=${booked.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="In diesem Zeitraum oder mit diesen Filtern gibt es keine Ausgabe." />`
        : html`<${EmptyState} icon="expense" title="Noch keine Ausgaben" text="Lade deinen ersten Beleg hoch oder trage eine Ausgabe von Hand ein." />`} />`}
    ${editing && html`<${ExpenseModal} expense=${editing} onClose=${() => setEditing(null)} />`}
  `;
}
