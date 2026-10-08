// Editor für Rechnungs- und Angebotsentwürfe mit Live-Vorschau.

import {
  html, useState, useEffect, useRef, useMemo, useStore, navigate, navigateForce, setNavGuard, clearNavGuard,
  confirmLeave, toast, attempt, ask,
} from '../ui/core.js';
import {
  Button, PageHeader, Panel, SelectField, DateField, NumberField, NumberInput, TextArea, Field,
  Combobox, Segmented, Checkbox, Notice, EmptyState, Menu,
} from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { DocSheet } from '../ui/docview.js';
import { state, byId, activeCompanies, currentCompany } from '../lib/store.js';
import {
  newInvoice, newQuote, newItem, customerName, LANGUAGES, DOC_CURRENCIES, UNITS, newCustomer, newService,
} from '../lib/schema.js';
import {
  saveInvoiceDraft, finalizeInvoice, deleteInvoiceDraft, saveQuoteDraft, finalizeQuote, deleteQuote,
  itemFromService, dueDateOf, validateDoc, peekNumber, duplicateAsDraft,
} from '../lib/actions.js';
import { computeTotals, convertCents, fxForDoc, lineTotalCents } from '../lib/calc.js';
import { fxFor, lastKnownRate, wantedRateDate } from '../lib/fx.js';
import { buildDocModel } from '../lib/docmodel.js';
import { money, date, rate, pct } from '../lib/format.js';
import { clone, todayISO, nowISO, addDays, isISODate } from '../lib/util.js';
import { CustomerFormModal } from './customers.js';
import { ServiceFormModal } from './services.js';

const KIND = {
  invoices: {
    one: 'Rechnung', newTitle: 'Neue Rechnung', editTitle: 'Rechnungsentwurf', list: '/invoices', listLabel: 'Rechnungen',
    finalize: 'Rechnung erstellen', dateLabel: 'Rechnungsdatum', numberKind: 'invoice',
  },
  quotes: {
    one: 'Angebot', newTitle: 'Neues Angebot', editTitle: 'Angebotsentwurf', list: '/quotes', listLabel: 'Angebote',
    finalize: 'Angebot erstellen', dateLabel: 'Angebotsdatum', numberKind: 'quote',
  },
};

function customerDefaults(doc, customer, company, coll) {
  const next = { ...doc, customerId: customer ? customer.id : '' };
  if (!customer) return next;
  if (customer.language) next.language = customer.language;
  else if (company) next.language = company.language;
  if (customer.currency && DOC_CURRENCIES.includes(customer.currency)) next.currency = customer.currency;
  else if (company) next.currency = company.currency;
  if (coll === 'invoices') {
    next.paymentTermDays = (customer.paymentTermDays != null && customer.paymentTermDays !== '')
      ? Number(customer.paymentTermDays)
      : (company ? company.paymentTermDays : doc.paymentTermDays);
  }
  return next;
}

function initialDoc(coll, id, params) {
  if (id && id !== 'new') {
    const existing = byId(coll, id);
    return existing ? clone(existing) : null;
  }
  const companies = activeCompanies();
  const company = currentCompany() || (companies.length === 1 ? companies[0] : null);
  let doc;
  if (coll === 'invoices' && params.copy && byId('invoices', params.copy)) {
    doc = duplicateAsDraft(byId('invoices', params.copy));
  } else if (coll === 'invoices') {
    doc = newInvoice(company);
  } else if (params.copy && byId('quotes', params.copy)) {
    const src = byId('quotes', params.copy);
    const srcCompany = byId('companies', src.companyId) || company;
    doc = newQuote(srcCompany, {
      validUntil: addDays(todayISO(), 30),
      customerId: src.customerId, currency: src.currency, language: src.language,
      items: src.items.map((it) => ({ ...it, id: newItem().id })),
      discount: clone(src.discount), intro: src.intro, paymentTerms: src.paymentTerms, footer: src.footer,
      showSecondary: src.showSecondary,
    });
  } else {
    doc = newQuote(company, { validUntil: addDays(todayISO(), 30) });
  }
  if (params.customer && byId('customers', params.customer)) {
    doc = customerDefaults(doc, byId('customers', params.customer), byId('companies', doc.companyId), coll);
  }
  return doc;
}

/* ---------- Positionen ---------- */

function ItemsEditor({ doc, company, onChange, onNewService }) {
  const [focusId, setFocusId] = useState(null);
  const wrap = useRef(null);
  const items = doc.items || [];
  const cur = doc.currency;

  useEffect(() => {
    if (!focusId || !wrap.current) return;
    const el = wrap.current.querySelector(`[data-item="${focusId}"] .combo-input`);
    if (el) el.focus();
    setFocusId(null);
  }, [focusId, items.length]);

  const services = useMemo(() => state.services
    .filter((s) => s.active !== false && (!s.companyId || s.companyId === doc.companyId))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'))
    .map((s) => ({
      id: s.id, label: s.name, search: `${s.internalName} ${s.category}`,
      sub: `${money(s.priceCents, s.currency)} je ${s.unit}`,
    })), [state.version, doc.companyId]);

  const update = (id, patch) => onChange(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  const remove = (id) => onChange(items.filter((it) => it.id !== id));
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }
  function add() {
    const it = newItem({ taxRate: Number(company && company.defaultTaxRate) || 0 });
    onChange([...items, it]);
    setFocusId(it.id);
  }
  function applyService(itemId, serviceId) {
    const s = byId('services', serviceId);
    if (!s) return;
    const filled = itemFromService(s, company);
    let priceCents = filled.priceCents;
    if (s.currency && s.currency !== cur) {
      const fx = doc.fx ? fxForDoc(s.currency, doc.fx.usdToEur) : null;
      const conv = fx ? convertCents(priceCents, s.currency, cur, fx) : null;
      if (conv != null) {
        priceCents = conv;
        toast(`Preis von ${s.currency} in ${cur} umgerechnet – bitte prüfen.`, 'info');
      } else {
        toast(`Die Leistung ist in ${s.currency} hinterlegt. Bitte den Preis in ${cur} prüfen.`, 'info');
      }
    }
    update(itemId, { ...filled, id: itemId, priceCents });
  }

  return html`<div class="items" ref=${wrap}>
    ${items.map((it, i) => html`<div class="item" key=${it.id} data-item=${it.id}>
      <div class="item-top">
        <span class="item-pos">${i + 1}</span>
        <div class="item-name">
          <${Combobox} freeText options=${services} text=${it.name} label=${`Position ${i + 1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${(t) => update(it.id, { name: t, serviceId: it.serviceId && byId('services', it.serviceId) && byId('services', it.serviceId).name === t ? it.serviceId : '' })}
            onChange=${(sid) => applyService(it.id, sid)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn" title="Nach oben" aria-label=${`Position ${i + 1} nach oben`} disabled=${i === 0} onClick=${() => move(i, -1)}><${Icon} name="arrowUp" size=${15} /></button>
          <button type="button" class="mini-btn" title="Nach unten" aria-label=${`Position ${i + 1} nach unten`} disabled=${i === items.length - 1} onClick=${() => move(i, 1)}><${Icon} name="arrowDown" size=${15} /></button>
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Position ${i + 1} entfernen`} onClick=${() => remove(it.id)}><${Icon} name="trash" size=${15} /></button>
        </div>
      </div>
      <textarea class="input textarea item-desc" rows=${Math.min(6, Math.max(1, String(it.description || '').split('\n').length))}
        placeholder="Beschreibung (optional)" aria-label=${`Position ${i + 1}: Beschreibung`}
        value=${it.description} onInput=${(e) => update(it.id, { description: e.target.value })}></textarea>
      <div class="item-fields">
        <label class="item-field"><span>Menge</span>
          <${NumberInput} value=${it.qty} digits=${3} onChange=${(v) => update(it.id, { qty: v })} aria-label=${`Position ${i + 1}: Menge`} /></label>
        <label class="item-field"><span>Einheit</span>
          <input class="input" list="unit-list" value=${it.unit} aria-label=${`Position ${i + 1}: Einheit`}
            onInput=${(e) => update(it.id, { unit: e.target.value })} /></label>
        <label class="item-field"><span>Einzelpreis</span>
          <${NumberInput} mode="money" value=${it.priceCents} onChange=${(v) => update(it.id, { priceCents: v })} aria-label=${`Position ${i + 1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Rabatt</span>
          <${NumberInput} value=${it.discountPct} digits=${2} min=${0} max=${100} suffix="%" onChange=${(v) => update(it.id, { discountPct: v })} aria-label=${`Position ${i + 1}: Rabatt in Prozent`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${NumberInput} value=${it.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${(v) => update(it.id, { taxRate: v })} aria-label=${`Position ${i + 1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${money(lineTotalCents(it), cur)}</strong></div>
      </div>
    </div>`)}
    <datalist id="unit-list">${UNITS.map((u) => html`<option value=${u}></option>`)}</datalist>
    <div class="items-foot">
      <${Button} icon="plus" onClick=${add}>Position hinzufügen<//>
      <${Button} variant="ghost" icon="services" onClick=${onNewService}>Neue Leistung im Katalog anlegen<//>
    </div>
  </div>`;
}

export { ItemsEditor };

/* ---------- Editor ---------- */

export function DocEditorView({ coll, id, params }) {
  useStore();
  const K = KIND[coll];
  const [doc, setDocRaw] = useState(() => initialDoc(coll, id, params || {}));
  const [dirty, setDirty] = useState(!id || id === 'new' ? false : false);
  const [fxState, setFxState] = useState({ loading: false, error: '' });
  const [previewNumber, setPreviewNumber] = useState('');
  const [busy, setBusy] = useState('');
  const [problems, setProblems] = useState([]);
  const [modal, setModal] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const fxReq = useRef(0);

  const setDoc = (fn) => { setDocRaw(fn); setDirty(true); };
  const set = (k) => (v) => setDoc((d) => ({ ...d, [k]: v }));

  useEffect(() => {
    if (dirty) setNavGuard(confirmLeave); else clearNavGuard();
    return () => clearNavGuard();
  }, [dirty]);

  const company = doc ? byId('companies', doc.companyId) : null;
  const customer = doc ? byId('customers', doc.customerId) : null;

  // Wechselkurs laden, sobald Währung oder Belegdatum feststehen – außer er wurde von Hand gesetzt.
  const fxKey = doc ? `${doc.currency}|${doc.issueDate}` : '';
  async function loadFx(force) {
    if (!doc || !isISODate(doc.issueDate)) return;
    if (!force && doc.fx && doc.fx.manual) return;
    // Jede Anfrage bekommt eine Nummer: kommt eine ältere Antwort später an, wird sie verworfen.
    const token = ++fxReq.current;
    const cur = doc.currency;
    const wanted = doc.issueDate;
    setFxState({ loading: true, error: '' });
    try {
      const fx = await fxFor(cur, wanted);
      if (token !== fxReq.current) return;
      setDocRaw((d) => ((d.currency === cur && d.issueDate === wanted) ? { ...d, fx } : d));
      if (force) setDirty(true);
      setFxState({ loading: false, error: '' });
    } catch (err) {
      if (token !== fxReq.current) return;
      // Ein automatisch geladener Kurs für ein anderes Datum darf nicht stehen bleiben.
      setDocRaw((d) => ((d.fx && !d.fx.manual && d.fx.forDate && isISODate(d.issueDate) && d.fx.forDate !== wantedRateDate(d.issueDate)) ? { ...d, fx: null } : d));
      setFxState({ loading: false, error: err.message });
    }
  }
  useEffect(() => { if (doc && doc.status === 'draft') loadFx(false); }, [fxKey]);

  useEffect(() => {
    let alive = true;
    if (!doc || !company) { setPreviewNumber(''); return undefined; }
    peekNumber(company, K.numberKind, doc.issueDate).then((n) => { if (alive) setPreviewNumber(n); }).catch(() => { if (alive) setPreviewNumber(''); });
    return () => { alive = false; };
  }, [doc && doc.companyId, doc && doc.issueDate, state.version]);

  if (!doc) {
    return html`<${EmptyState} title=${`${K.one} nicht gefunden`} text="Dieser Entwurf existiert nicht mehr.">
      <${Button} onClick=${() => navigate(K.list)}>Zur Übersicht<//>
    <//>`;
  }
  if (doc.status !== 'draft') {
    // Erstellte Belege werden nie im Editor geöffnet.
    setTimeout(() => navigateForce(`${K.list}/${doc.id}`), 0);
    return null;
  }

  const totals = computeTotals(doc);
  // Der Kurs USD→EUR ist die einzige Quelle; die Ableitung für die Belegwährung entsteht immer frisch.
  const fxNow = doc.fx ? fxForDoc(doc.currency, doc.fx.usdToEur, doc.fx) : null;
  const view = { ...doc, fx: fxNow, totals, dueDate: coll === 'invoices' ? dueDateOf(doc) : '' };
  const model = buildDocModel(view, coll, { previewNumber });
  const other = doc.currency === 'USD' ? 'EUR' : 'USD';
  const secondary = fxNow ? convertCents(totals.totalCents, doc.currency, other, fxNow) : null;
  const companies = activeCompanies();
  const isSaved = !!byId(coll, doc.id);

  const customerOptions = state.customers
    .filter((c) => c.active !== false || c.id === doc.customerId)
    .sort((a, b) => customerName(a).localeCompare(customerName(b), 'de'))
    .map((c) => ({ id: c.id, label: customerName(c), sub: [c.number, c.city].filter(Boolean).join(', '), search: `${c.firstName} ${c.lastName} ${c.contact} ${c.email}` }));

  function pickCompany(cid) {
    const next = byId('companies', cid);
    const old = byId('companies', doc.companyId);
    if (!next) { setDoc((d) => ({ ...d, companyId: '' })); return; }
    const introKey = coll === 'quotes' ? 'quoteText' : 'invoiceText';
    const same = (a, b) => String(a || '') === String(b || '');
    setDoc((d) => {
      const cust = byId('customers', d.customerId);
      const out = { ...d, companyId: cid };
      if (!d.intro || (old && same(d.intro, old[introKey]))) out.intro = next[introKey] || '';
      if (!d.paymentTerms || (old && same(d.paymentTerms, old.paymentTerms))) out.paymentTerms = next.paymentTerms || '';
      if (!d.footer || (old && same(d.footer, old.footer))) out.footer = next.footer || '';
      if (!(cust && cust.language)) out.language = next.language;
      if (!(cust && cust.currency)) out.currency = next.currency;
      if (coll === 'invoices' && !(cust && cust.paymentTermDays != null && cust.paymentTermDays !== '')) out.paymentTermDays = next.paymentTermDays;
      out.showSecondary = next.showSecondary;
      // Positionen, deren Steuersatz vom bisherigen Unternehmen stammt (freie Positionen und Leistungen
      // ohne eigenen Satz), bekommen den Standardsatz des neuen Unternehmens.
      const oldRate = old ? Number(old.defaultTaxRate) || 0 : 0;
      const newRate = Number(next.defaultTaxRate) || 0;
      out.items = d.items.map((it) => {
        const svc = it.serviceId ? byId('services', it.serviceId) : null;
        const inherited = !svc || svc.taxRate == null || svc.taxRate === '';
        return inherited && (Number(it.taxRate) || 0) === oldRate ? { ...it, taxRate: newRate } : it;
      });
      return out;
    });
    const cust = byId('customers', doc.customerId);
    if (doc.items.length && !(cust && cust.currency) && next.currency !== doc.currency) {
      toast(`Währung auf ${next.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`, 'info', 7000);
    }
  }

  function pickCustomer(cid) {
    const cust = byId('customers', cid);
    const before = doc.currency;
    const after = customerDefaults(doc, cust, byId('companies', doc.companyId), coll);
    setDoc((d) => customerDefaults(d, cust, byId('companies', d.companyId), coll));
    if (doc.items.length && after.currency !== before) {
      toast(`Währung auf ${after.currency} umgestellt – die Preise der Positionen wurden nicht umgerechnet.`, 'info', 7000);
    }
  }

  function pickCurrency(cur) {
    if (cur === doc.currency) return;
    if (doc.items.length) toast('Währung geändert – die Preise der Positionen wurden nicht umgerechnet.', 'info');
    setDoc((d) => ({ ...d, currency: cur, fx: d.fx ? fxForDoc(cur, d.fx.usdToEur, d.fx) : d.fx }));
  }

  function setManualRate(v) {
    if (!(v > 0)) return;
    fxReq.current += 1;   // eine noch laufende Abfrage darf den Handkurs nicht überschreiben
    setFxState({ loading: false, error: '' });
    setDoc((d) => ({
      ...d,
      fx: fxForDoc(d.currency, v, { manual: true, source: 'Von Hand eingetragen', date: todayISO(), fetchedAt: nowISO() }),
    }));
  }

  function useLastKnown() {
    const r = lastKnownRate('USD', 'EUR');
    if (!r) return;
    setDoc((d) => ({
      ...d,
      fx: fxForDoc(d.currency, r.rate, { manual: true, source: `Letzter bekannter Kurs (${r.source})`, date: r.date, fetchedAt: r.fetchedAt }),
    }));
    setFxState({ loading: false, error: '' });
  }

  async function saveDraft() {
    setBusy('save');
    const saved = await attempt(() => (coll === 'invoices' ? saveInvoiceDraft(doc) : saveQuoteDraft(doc)));
    setBusy('');
    if (!saved) return;
    setDocRaw(clone(saved));
    setDirty(false);
    setProblems([]);
    toast('Entwurf gespeichert', 'good');
    if (id === 'new' || !id) { clearNavGuard(); navigate(`${K.list}/${saved.id}/edit`, { replace: true }); }
  }

  async function finalize() {
    if (fxState.loading) { toast('Der Wechselkurs wird noch geladen – bitte einen Moment warten.', 'info'); return; }
    const list = validateDoc(view, coll === 'quotes' ? 'quote' : 'invoice');
    setProblems(list);
    if (list.length) { toast('Es fehlen noch Angaben – siehe Hinweise oben.', 'bad'); return; }
    const ok = await ask({
      title: `${K.finalize}?`,
      text: coll === 'invoices'
        ? `Die Rechnung erhält die Nummer ${previewNumber} und lässt sich danach nicht mehr ändern. Der Wechselkurs wird festgeschrieben.`
        : `Das Angebot erhält die Nummer ${previewNumber} und lässt sich danach nicht mehr ändern.`,
      list: [
        `${customerName(customer)}`,
        `${money(totals.totalCents, doc.currency)}${secondary != null ? ` (≈ ${money(secondary, other)})` : ''}`,
      ],
      confirmLabel: K.finalize,
    });
    if (!ok) return;
    setBusy('finalize');
    const rec = await attempt(() => (coll === 'invoices' ? finalizeInvoice(view) : finalizeQuote(view)));
    setBusy('');
    if (!rec) return;
    setDirty(false);
    toast(`${K.one} ${rec.number} erstellt`, 'good');
    navigateForce(`${K.list}/${rec.id}`);
  }

  async function removeDraft() {
    const ok = await ask({ title: 'Entwurf löschen?', text: 'Der Entwurf wird endgültig gelöscht.', confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await (coll === 'invoices' ? deleteInvoiceDraft(doc.id) : deleteQuote(doc.id)); return true; });
    if (done) { toast('Entwurf gelöscht', 'good'); navigateForce(K.list); }
  }

  const usdEur = doc.fx ? Number(doc.fx.usdToEur) : null;
  const period = !!doc.serviceDateEnd;

  return html`
    <${PageHeader} title=${isSaved ? K.editTitle : K.newTitle} back=${{ href: `#${K.list}`, label: K.listLabel }}
      sub=${previewNumber ? `Nächste Nummer: ${previewNumber}` : (company ? '' : 'Wähle zuerst das Unternehmen, das den Beleg ausstellt.')}>
      <${Button} class="only-narrow" icon="eye" onClick=${() => setShowPreview(!showPreview)}>${showPreview ? 'Formular' : 'Vorschau'}<//>
      ${isSaved && html`<${Menu} items=${[{ label: 'Entwurf löschen', icon: 'trash', danger: true, onClick: removeDraft }]} />`}
      <${Button} icon="check" onClick=${saveDraft} busy=${busy === 'save'} disabled=${!!busy}>Entwurf speichern<//>
      <${Button} variant="primary" icon="invoice" onClick=${finalize} busy=${busy === 'finalize'} disabled=${!!busy}>${K.finalize}<//>
    <//>

    ${problems.length > 0 && html`<${Notice} tone="warn">
      <strong>Vor dem Erstellen fehlt noch:</strong>
      <ul class="notice-list">${problems.map((p) => html`<li>${p}</li>`)}</ul>
    <//>`}

    <div class=${`editor${showPreview ? ' show-preview' : ''}`}>
      <div class="editor-form">
        <${Panel} title="Aussteller und Kunde">
          <div class="form-grid">
            <${SelectField} class="span-3" label="Unternehmen" value=${doc.companyId} onChange=${pickCompany}
              placeholder=${companies.length ? 'Unternehmen wählen' : 'Noch kein Unternehmen angelegt'}
              options=${companies.map((c) => ({ id: c.id, label: c.name }))} />
            <${Field} class="span-3" label="Kunde" htmlFor="doc-customer">
              <${Combobox} id="doc-customer" options=${customerOptions} value=${doc.customerId} placeholder="Kunde suchen"
                autoFocus=${!!doc.companyId && !doc.customerId}
                onChange=${pickCustomer}
                onCreate=${(text) => setModal({ type: 'customer', seed: text })} createLabel="als Kunde anlegen" />
            <//>
            <${DateField} class="span-2" label=${K.dateLabel} value=${doc.issueDate} onInput=${set('issueDate')} />
            ${coll === 'invoices' && html`
              <${DateField} class="span-2" label=${period ? 'Leistung von' : 'Leistungsdatum'} value=${doc.serviceDate} onInput=${set('serviceDate')} />
              ${period
                ? html`<${DateField} class="span-2" label="Leistung bis" value=${doc.serviceDateEnd} onInput=${set('serviceDateEnd')} min=${doc.serviceDate} />`
                : html`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${() => set('serviceDateEnd')(doc.serviceDate || doc.issueDate)}>Zeitraum statt Datum angeben</button></div>`}
              <${NumberField} class="span-2" label="Zahlungsziel" value=${doc.paymentTermDays} digits=${0} min=${0} max=${365}
                suffix="Tage" onChange=${set('paymentTermDays')}
                hint=${view.dueDate ? `Fällig am ${date(view.dueDate)}` : ''} />
              ${period && html`<div class="span-2 field field-inline"><button type="button" class="link-btn" onClick=${() => set('serviceDateEnd')('')}>Nur ein Leistungsdatum</button></div>`}
            `}
            ${coll === 'quotes' && html`<${DateField} class="span-2" label="Gültig bis" value=${doc.validUntil} onInput=${set('validUntil')} min=${doc.issueDate} />`}
            <${SelectField} class="span-2" label="Währung" value=${doc.currency} onChange=${pickCurrency} options=${DOC_CURRENCIES} />
            <${SelectField} class="span-2" label="Belegsprache" value=${doc.language} onChange=${set('language')} options=${LANGUAGES} />
          </div>
        <//>

        <${Panel} title="Positionen">
          <${ItemsEditor} doc=${doc} company=${company} onChange=${(items) => setDoc((d) => ({ ...d, items }))}
            onNewService=${() => setModal({ type: 'service' })} />
          <div class="totals">
            <div class="totals-discount">
              <span class="field-label">Rabatt auf den gesamten Beleg</span>
              <div class="inline-controls">
                <${Segmented} label="Art des Rabatts" value=${doc.discount.type} options=${[{ id: 'pct', label: '%' }, { id: 'abs', label: doc.currency }]}
                  onChange=${(t) => setDoc((d) => ({ ...d, discount: { type: t, value: 0 } }))} />
                ${doc.discount.type === 'abs'
                  ? html`<${NumberInput} mode="money" value=${doc.discount.value} min=${0} aria-label="Rabattbetrag"
                      onChange=${(v) => setDoc((d) => ({ ...d, discount: { type: 'abs', value: v } }))} />`
                  : html`<${NumberInput} value=${doc.discount.value} digits=${2} min=${0} max=${100} suffix="%" aria-label="Rabatt in Prozent"
                      onChange=${(v) => setDoc((d) => ({ ...d, discount: { type: 'pct', value: v } }))} />`}
              </div>
            </div>
            <dl class="totals-list">
              <div><dt>Zwischensumme</dt><dd>${money(totals.subtotalCents, doc.currency)}</dd></div>
              ${totals.discountCents !== 0 && html`<div><dt>Rabatt</dt><dd>${money(-totals.discountCents, doc.currency)}</dd></div>`}
              ${totals.taxGroups.filter((g) => g.rate !== 0).map((g) => html`<div><dt>${(company && company.taxLabel) || 'Steuer'} ${pct(g.rate)}</dt><dd>${money(g.taxCents, doc.currency)}</dd></div>`)}
              <div class="is-total"><dt>Gesamtbetrag</dt><dd>${money(totals.totalCents, doc.currency)}</dd></div>
              ${secondary != null && html`<div class="is-secondary"><dt>entspricht ca.</dt><dd>${money(secondary, other)}</dd></div>`}
            </dl>
          </div>
        <//>

        <${Panel} title="Wechselkurs">
          ${fxState.error && html`<${Notice} tone="warn" action=${lastKnownRate('USD', 'EUR') && html`<${Button} small onClick=${useLastKnown}>Letzten bekannten Kurs verwenden<//>`}>
            ${fxState.error}
          <//>`}
          <div class="fx-row">
            <span class="fx-eq">1 USD =</span>
            <${NumberInput} value=${usdEur} digits=${6} min=${0} max=${100} allowEmpty class="fx-input" aria-label="Wechselkurs: 1 US-Dollar in Euro"
              onChange=${setManualRate} />
            <span class="fx-eq">EUR</span>
            <${Button} small icon="refresh" busy=${fxState.loading} onClick=${() => loadFx(true)}>Tageskurs laden<//>
          </div>
          <p class="field-hint">
            ${doc.fx
              ? html`${doc.fx.manual ? doc.fx.source : `Quelle: ${doc.fx.source}`}${doc.fx.date ? `, Stand ${date(doc.fx.date)}` : ''}.
                  ${doc.currency === 'EUR' && usdEur ? ` Das entspricht 1 EUR = ${rate(1 / usdEur)} USD.` : ''}`
              : (fxState.loading ? 'Kurs wird geladen …' : 'Noch kein Kurs vorhanden.')}
            ${' '}Der Kurs wird beim Erstellen festgeschrieben und ändert sich danach nicht mehr.
          </p>
          <${Checkbox} label=${`Betrag zusätzlich in ${other} auf dem Beleg zeigen`} checked=${doc.showSecondary} onChange=${set('showSecondary')} />
        <//>

        <${Panel} title="Texte auf dem Beleg">
          <div class="form-grid">
            <${TextArea} class="span-6" label="Einleitung" value=${doc.intro} onInput=${set('intro')} rows=${2} />
            <${TextArea} class="span-6" label=${coll === 'invoices' ? 'Zahlungsbedingungen' : 'Bedingungen'} value=${doc.paymentTerms} onInput=${set('paymentTerms')} rows=${2} />
            <${TextArea} class="span-6" label="Fußzeile" value=${doc.footer} onInput=${set('footer')} rows=${2} />
          </div>
        <//>

        <${Panel} title="Interne Notiz">
          <${TextArea} value=${doc.internalNotes} onInput=${set('internalNotes')} rows=${2} placeholder="Erscheint nicht auf dem Beleg" aria-label="Interne Notiz" />
        <//>
      </div>

      <div class="editor-preview">
        <div class="preview-sticky">
          <div class="preview-bar">
            <span>Vorschau</span>
            <span class="muted-text">${model.fileName}</span>
          </div>
          <${DocSheet} model=${model} />
        </div>
      </div>
    </div>

    ${modal && modal.type === 'customer' && html`<${CustomerFormModal}
      customer=${newCustomer({ company: modal.seed || '' })} onClose=${() => setModal(null)}
      onSaved=${(c) => setDoc((d) => customerDefaults(d, c, byId('companies', d.companyId), coll))} />`}
    ${modal && modal.type === 'service' && html`<${ServiceFormModal}
      service=${newService({ companyId: '', currency: doc.currency })} onClose=${() => setModal(null)}
      onSaved=${(s) => setDoc((d) => ({ ...d, items: [...d.items, itemFromService(s, byId('companies', d.companyId))] }))} />`}
  `;
}
