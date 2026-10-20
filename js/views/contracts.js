// Verträge, hochgeladene Angebote (PDF) und der Ablauf Termin → Angebot → Vertrag → Rechnung je Kontakt.

import { html, useState, useRef, useMemo, useStore, navigate, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, Chips, EmptyState, Modal, TextField, TextArea, SelectField,
  NumberField, NumberInput, DateField, Field, Combobox, Badge, Notice, Panel,
} from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { state, byId, activeCompanies, currentCompany, inScope } from '../lib/store.js';
import {
  newContract, newUploadedQuote, newItem, newRecurring, customerName, CONTRACT_STATUS,
  DOC_CURRENCIES, QUOTE_STATUS, quoteLabel, SERVICE_TIERS,
} from '../lib/schema.js';
import { saveContract, deleteContract, saveUploadedQuote } from '../lib/actions.js';
import {
  BILLING_OPTIONS, PER, isInterval, newContractItem, contractItems, contractSums, contractSummaryText,
  billingOfService, itemsFromQuote, lineNet, invoiceItemsFromContract,
} from '../lib/contractitems.js';
import { preparePdf, attachmentBlob } from '../lib/files.js';
import { fxFor } from '../lib/fx.js';
import { computeTotals, quoteStatus } from '../lib/calc.js';
import { money, date } from '../lib/format.js';
import { matches, todayISO, clone, isISODate, fileSize } from '../lib/util.js';
import { saveBlob } from '../lib/pdf.js';
import { pipelineOf, contractStatus } from '../lib/pipeline.js';
import { CompanyTag, InvoiceBadge, DocAmount, scopeCompanyId } from './shared.js';
import { RecurringModal } from './recurring.js';
import { ReceiptView } from './expenses.js';

/* ---------- Hilfen ---------- */

const CONTRACT_VIEW = {
  ...CONTRACT_STATUS,
  ending: { label: 'Endet bald', tone: 'warn' },
  expired: { label: 'Ende überschritten', tone: 'bad' },
};
const INTERVAL_VERB = { monthly: 'Monatlich', quarterly: 'Quartalsweise', semiannual: 'Halbjährlich', yearly: 'Jährlich' };

export function ContractBadge({ contract }) {
  const def = CONTRACT_VIEW[contractStatus(contract, todayISO())] || CONTRACT_STATUS.open;
  return html`<${Badge} tone=${def.tone}>${def.label}<//>`;
}

/** Kurzfassung der Positionen, z. B. „2.490,00 € einmalig · 149,00 € / Monat“ (netto). */
export function contractAmount(c) {
  return contractSummaryText(c, (cents) => money(cents, c.currency));
}

/** Was aus dem Vertrag schon abgerechnet ist: einmalige Rechnungen und Vorlagen je Intervall. */
export function contractBilling(c) {
  const invoices = state.invoices.filter((i) => i.contractId === c.id && i.type !== 'credit_note');
  const onceInvoices = invoices.filter((i) => i.contractPart === 'once' || i.contractPart === 'all' || (!i.contractPart && !i.recurringId));
  const templates = state.recurring.filter((r) => r.contractId === c.id);
  const templateFor = (b) => templates.filter((r) => (r.contractInterval || r.interval) === b);
  return { invoices, onceInvoices, templates, templateFor };
}

export function contractTerm(c) {
  if (!c.startDate && !c.endDate) return '';
  if (c.startDate && !c.endDate) return `ab ${date(c.startDate)}, unbefristet`;
  if (!c.startDate) return `bis ${date(c.endDate)}`;
  return `${date(c.startDate)} – ${date(c.endDate)}`;
}

const fxSafe = async (currency, iso) => { try { return await fxFor(currency, isISODate(iso) ? iso : todayISO()); } catch (_) { return null; } };

function customerOptions(selectedId) {
  return state.customers
    .filter((c) => c.active !== false || c.id === selectedId)
    .sort((a, b) => customerName(a).localeCompare(customerName(b), 'de'))
    .map((c) => ({ id: c.id, label: customerName(c), sub: [c.number, c.city].filter(Boolean).join(', ') }));
}

/** Unternehmen für einen neuen Vorgang: Switcher, sonst das zuletzt für den Kontakt genutzte, sonst das erste. */
function companyFor(customerId) {
  if (scopeCompanyId()) return byId('companies', scopeCompanyId());
  const docs = [...state.invoices, ...state.quotes].filter((d) => d.customerId === customerId)
    .sort((a, b) => ((a.issueDate || '') < (b.issueDate || '') ? 1 : -1));
  return (docs[0] && byId('companies', docs[0].companyId)) || currentCompany() || activeCompanies()[0] || null;
}

export async function downloadAttachment(id) {
  const meta = byId('attachments', id);
  const blob = await attachmentBlob(id);
  if (!blob) throw new Error('Die Datei ist in diesem Browser nicht vorhanden (z. B. nach einem Backup ohne Dateien).');
  saveBlob(blob, meta ? meta.name : 'Dokument.pdf');
}

/** Neues hochgeladenes Angebot für einen Kontakt. */
export function uploadQuoteFor(customerId = '') {
  const company = customerId ? companyFor(customerId) : (currentCompany() || (activeCompanies().length === 1 ? activeCompanies()[0] : null));
  const c = customerId ? byId('customers', customerId) : null;
  return newUploadedQuote(company, {
    customerId,
    ...(c && c.currency && DOC_CURRENCIES.includes(c.currency) ? { currency: c.currency } : {}),
    ...(c && c.language ? { language: c.language } : {}),
  });
}

/** Neuer Vertrag – aus einem Angebot übernimmt er Bezeichnung, Währung und die Positionen (einmalig oder laufend). */
export function contractFromQuote(quote) {
  const company = byId('companies', quote.companyId);
  const item = (quote.items || []).find((it) => !it.isText);
  return newContract(company, {
    customerId: quote.customerId,
    title: quote.title || (item ? item.name : ''),
    items: itemsFromQuote(quote, (id) => byId('services', id)),
    currency: quote.currency,
    quoteId: quote.id,
  });
}

/** Neuer Vertrag für einen Kontakt; gibt es ein angenommenes Angebot ohne Vertrag, wird es übernommen. */
export function contractFor(customerId) {
  const today = todayISO();
  const withContract = new Set(state.contracts.map((c) => c.quoteId).filter(Boolean));
  const accepted = state.quotes
    .filter((q) => q.customerId === customerId && ['accepted', 'invoiced'].includes(quoteStatus(q, today)) && !withContract.has(q.id))
    .sort((a, b) => ((a.issueDate || '') < (b.issueDate || '') ? 1 : -1))[0];
  if (accepted) return contractFromQuote(accepted);
  return newContract(companyFor(customerId), { customerId });
}

/** Vorbelegte wiederkehrende Vorlage für die laufenden Positionen eines Intervalls. */
export function recurringFromContract(contract, interval) {
  const company = byId('companies', contract.companyId);
  const customer = byId('customers', contract.customerId);
  const start = contract.startDate && contract.startDate > todayISO() ? contract.startDate : todayISO();
  const several = contractSums(contract).intervalIds.length > 1;
  return newRecurring(company, {
    name: `${contract.title} – ${customerName(customer)}${several ? ` (${INTERVAL_VERB[interval].toLowerCase()})` : ''}`,
    customerId: contract.customerId,
    interval,
    startDate: start, nextDate: start, endDate: contract.endDate || '',
    currency: contract.currency,
    ...(customer && customer.language ? { language: customer.language } : {}),
    ...(customer && customer.paymentTermDays != null && customer.paymentTermDays !== '' ? { paymentTermDays: Number(customer.paymentTermDays) } : {}),
    items: invoiceItemsFromContract(contract, interval),
    contractId: contract.id,
    contractInterval: interval,
  });
}

/* ---------- PDF auswählen (Klick oder Ziehen) ---------- */

function PdfDrop({ multiple, onFiles, label, sub }) {
  const ref = useRef(null);
  const [drag, setDrag] = useState(false);
  async function take(list) {
    const files = [];
    for (const f of list) {
      try { files.push(await preparePdf(f)); } catch (err) { toast(err.message, 'bad', 7000); }
    }
    if (files.length) onFiles(multiple ? files : files.slice(0, 1));
  }
  return html`<div class=${`dropzone pdf-drop${drag ? ' is-drag' : ''}`} role="button" tabindex="0"
      onClick=${() => ref.current && ref.current.click()}
      onKeyDown=${(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ref.current.click(); } }}
      onDragOver=${(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave=${() => setDrag(false)}
      onDrop=${(e) => { e.preventDefault(); setDrag(false); take([...(e.dataTransfer.files || [])]); }}>
    <${Icon} name="upload" size=${22} />
    <div><strong>${label}</strong><span class="muted-text">${sub || 'PDF hierher ziehen oder klicken, höchstens 15 MB'}</span></div>
    <input ref=${ref} type="file" class="visually-hidden" accept="application/pdf,.pdf" multiple=${!!multiple} tabindex="-1"
      aria-label=${label}
      onChange=${(e) => { const list = [...e.target.files]; e.target.value = ''; take(list); }} />
  </div>`;
}

/** Liste gespeicherter PDFs mit Ansehen, Herunterladen und (optional) Entfernen. */
function FileList({ ids, onRemove, preview, setPreview }) {
  if (!ids.length) return null;
  return html`<ul class="file-list">
    ${ids.map((aid) => {
      const meta = byId('attachments', aid);
      return html`<li key=${aid}>
        <span class="file-line"><${Icon} name="file" size=${15} /><span class="clamp-1">${meta ? meta.name : 'Datei fehlt'}</span>
          ${meta && html`<span class="muted-text">${fileSize(meta.size)}</span>`}</span>
        <span class="file-actions">
          <button type="button" class="link-btn" onClick=${() => setPreview(preview === aid ? '' : aid)}>${preview === aid ? 'Ausblenden' : 'Ansehen'}</button>
          <button type="button" class="link-btn" onClick=${() => attempt(() => downloadAttachment(aid))}>Herunterladen</button>
          ${onRemove && html`<button type="button" class="link-btn tone-bad" onClick=${() => onRemove(aid)}>Entfernen</button>`}
        </span>
      </li>`;
    })}
  </ul>
  ${preview && ids.includes(preview) && html`<div class="file-preview"><${ReceiptView} attachmentId=${preview} /></div>`}`;
}

function PendingFiles({ files, onRemove }) {
  if (!files.length) return null;
  return html`<ul class="file-list is-new">
    ${files.map((f, i) => html`<li key=${i}>
      <span class="file-line"><${Icon} name="file" size=${15} /><span class="clamp-1">${f.name}</span>
        <span class="muted-text">${fileSize(f.blob.size)} · wird beim Speichern hochgeladen</span></span>
      <span class="file-actions"><button type="button" class="link-btn tone-bad" onClick=${() => onRemove(i)}>Entfernen</button></span>
    </li>`)}
  </ul>`;
}

/* ---------- Angebot hochladen ---------- */

const UPLOAD_STATUS_OPTIONS = ['open', 'sent', 'accepted', 'declined'].map((id) => ({ id, label: QUOTE_STATUS[id].label }));

export function QuoteUploadModal({ quote, onClose, onSaved }) {
  const isNew = !byId('quotes', quote.id);
  const item0 = (quote.items || [])[0];
  const [q, setQ] = useState(() => clone(quote));
  const [amount, setAmount] = useState(item0 ? item0.priceCents : null);
  const [taxRate, setTaxRate] = useState(() => {
    if (item0) return Number(item0.taxRate) || 0;
    const co = byId('companies', quote.companyId);
    return co ? Number(co.defaultTaxRate) || 0 : 0;
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setQ((p) => ({ ...p, [k]: v }));
  const invoiced = q.status === 'invoiced';
  const totals = computeTotals({ items: [newItem({ priceCents: amount || 0, taxRate })], discount: null });

  function pickCompany(id) {
    const co = byId('companies', id);
    setQ((p) => ({ ...p, companyId: id, ...(co && isNew ? { currency: p.customerId && byId('customers', p.customerId) && byId('customers', p.customerId).currency ? p.currency : co.currency } : {}) }));
    if (co && isNew) setTaxRate(Number(co.defaultTaxRate) || 0);
  }
  function pickCustomer(id) {
    const c = byId('customers', id);
    setQ((p) => ({ ...p, customerId: id, ...(c && c.currency && DOC_CURRENCIES.includes(c.currency) ? { currency: c.currency } : {}), ...(c && c.language ? { language: c.language } : {}) }));
  }

  async function submit() {
    if (amount == null) { toast('Bitte den Betrag des Angebots eintragen.', 'bad'); return; }
    setBusy(true);
    const before = byId('quotes', q.id);
    const needFx = !q.fx || !before || before.currency !== q.currency || before.issueDate !== q.issueDate;
    const fx = needFx ? await fxSafe(q.currency, q.issueDate) : q.fx;
    const rec = {
      ...q, fx,
      items: [newItem({ ...(item0 ? { id: item0.id } : {}), name: q.title, qty: 1, unit: 'Pauschale', priceCents: amount, taxRate })],
    };
    const saved = await attempt(() => saveUploadedQuote(rec, file));
    setBusy(false);
    if (!saved) return;
    toast(isNew ? `Angebot „${saved.title}“ hochgeladen` : 'Angebot gespeichert', 'good');
    onClose();
    if (onSaved) onSaved(saved);
  }

  const existing = (q.attachmentIds || []);
  return html`<${Modal} title=${isNew ? 'Angebot hochladen (PDF)' : 'Hochgeladenes Angebot bearbeiten'} size="lg" onClose=${onClose} onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>${isNew ? 'Hochladen' : 'Speichern'}<//>`}>
    <p class="modal-lead">Für Angebote, die du mit einem anderen Programm gestaltet hast – auch ältere. Das PDF bleibt unverändert,
      das Tool merkt sich Kontakt, Betrag und Status. Es bekommt keine Nummer aus deinem Nummernkreis.</p>
    ${file
      ? html`<${PendingFiles} files=${[file]} onRemove=${() => setFile(null)} />`
      : html`<${FileList} ids=${existing} preview=${preview} setPreview=${setPreview} />`}
    <${PdfDrop} label=${file || existing.length ? 'Anderes PDF wählen' : 'PDF des Angebots auswählen'} onFiles=${(f) => setFile(f[0])} />
    <div class="form-grid">
      <${SelectField} class="span-3" label="Unternehmen" value=${q.companyId} onChange=${pickCompany} placeholder="Unternehmen wählen"
        options=${activeCompanies().map((c) => ({ id: c.id, label: c.name }))} />
      <${Field} class="span-3" label="Kontakt" htmlFor="uq-customer">
        <${Combobox} id="uq-customer" options=${customerOptions(q.customerId)} value=${q.customerId} placeholder="Kontakt suchen" onChange=${pickCustomer} />
      <//>
      <${TextField} class="span-4" label="Bezeichnung" value=${q.title} onInput=${set('title')} placeholder="z. B. Website-Relaunch mit SEO-Paket" />
      <${TextField} class="span-2" label="Nummer im Dokument" hint="optional" value=${q.refNumber} onInput=${set('refNumber')} />
      <${DateField} class="span-2" label="Angebotsdatum" value=${q.issueDate} onInput=${set('issueDate')} />
      <${DateField} class="span-2" label="Gültig bis" hint="optional" value=${q.validUntil} onInput=${set('validUntil')} />
      <${SelectField} class="span-2" label="Status" value=${invoiced ? 'invoiced' : q.status} onChange=${set('status')} disabled=${invoiced}
        options=${invoiced ? [{ id: 'invoiced', label: 'Abgerechnet' }] : UPLOAD_STATUS_OPTIONS} />
      <${NumberField} class="span-2" label="Betrag netto" mode="money" value=${amount} allowEmpty onChange=${setAmount} />
      <${NumberField} class="span-2" label="Steuersatz" value=${taxRate} digits=${2} min=${0} max=${100} suffix="%" onChange=${setTaxRate} />
      <${SelectField} class="span-2" label="Währung" value=${q.currency} onChange=${set('currency')} options=${DOC_CURRENCIES} />
      <div class="span-6 upload-sum">Gesamt laut Angaben: <strong>${money(totals.totalCents, q.currency)}</strong>${totals.taxCents ? ` (davon Steuer ${money(totals.taxCents, q.currency)})` : ''}</div>
      <${TextArea} class="span-6" label="Interne Notiz" value=${q.internalNotes} onInput=${set('internalNotes')} rows=${2} />
    </div>
  <//>`;
}

/* ---------- Vertrag ---------- */

/** Positionen eines Vertrags: Leistung aus dem Katalog oder frei, je Position einmalig oder wiederkehrend. */
function ContractItemsEditor({ items, onChange, companyId, currency }) {
  const company = byId('companies', companyId);
  const services = state.services
    .filter((s) => s.active !== false && (!s.companyId || s.companyId === companyId))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'))
    .map((s) => ({
      id: s.id, label: s.name,
      search: `${s.code || ''} ${s.internalName || ''} ${s.category || ''} ${s.tier ? SERVICE_TIERS[s.tier].label : ''}`,
      sub: [s.tier ? SERVICE_TIERS[s.tier].label : '', s.code, `${money(s.priceCents, s.currency)} je ${s.unit}`, s.recurring ? 'laufend' : 'einmalig'].filter(Boolean).join(' · '),
    }));
  const update = (id, patch) => onChange(items.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  const remove = (id) => onChange(items.filter((it) => it.id !== id));
  const add = (billing = 'once') => onChange([...items, newContractItem({
    billing, unit: PER[billing] || 'Pauschal', taxRate: company ? Number(company.defaultTaxRate) || 0 : 0,
  })]);
  function applyService(itemId, sid) {
    const s = byId('services', sid);
    if (!s) return;
    if (s.currency && s.currency !== currency) toast(`„${s.name}“ ist in ${s.currency} hinterlegt, der Vertrag in ${currency}. Bitte den Preis prüfen.`, 'info', 7000);
    update(itemId, {
      serviceId: s.id, name: s.name, description: s.invoiceText || '',
      qty: Number(s.defaultQty) || 1, unit: s.unit || 'Pauschal', priceCents: s.priceCents || 0,
      taxRate: s.taxRate != null && s.taxRate !== '' ? Number(s.taxRate) : (company ? Number(company.defaultTaxRate) || 0 : 0),
      billing: billingOfService(s),
    });
  }
  const sums = contractSums({ items });
  return html`<div class="items ct-items">
    ${items.map((it, i) => html`<div class=${`item ct-item${isInterval(it.billing) ? ' is-recurring' : ''}`} key=${it.id}>
      <div class="item-top">
        <span class="item-pos">${i + 1}</span>
        <div class="item-name">
          <${Combobox} freeText options=${services} text=${it.name} label=${`Vertragsposition ${i + 1}: Leistung`}
            placeholder="Leistung wählen oder Bezeichnung eintippen"
            onText=${(t) => update(it.id, { name: t, serviceId: it.serviceId && byId('services', it.serviceId) && byId('services', it.serviceId).name === t ? it.serviceId : '' })}
            onChange=${(sid) => applyService(it.id, sid)} />
        </div>
        <div class="item-actions">
          <button type="button" class="mini-btn is-danger" title="Position entfernen" aria-label=${`Vertragsposition ${i + 1} entfernen`} onClick=${() => remove(it.id)}><${Icon} name="trash" size=${15} /></button>
        </div>
      </div>
      <div class="item-fields">
        <label class="item-field ct-billing"><span>Abrechnung</span>
          <select class="input select" value=${it.billing} aria-label=${`Vertragsposition ${i + 1}: Abrechnung`}
            onChange=${(e) => { const b = e.target.value; update(it.id, { billing: b, ...(PER[b] && (!it.unit || it.unit === 'Pauschal' || Object.values(PER).includes(it.unit)) ? { unit: PER[b] } : (!PER[b] && Object.values(PER).includes(it.unit) ? { unit: 'Pauschal' } : {})) }); }}>
            ${BILLING_OPTIONS.map((o) => html`<option value=${o.id} selected=${o.id === it.billing}>${o.label}</option>`)}
          </select></label>
        <label class="item-field"><span>Menge</span>
          <${NumberInput} value=${it.qty} digits=${3} onChange=${(v) => update(it.id, { qty: v })} aria-label=${`Vertragsposition ${i + 1}: Menge`} /></label>
        <label class="item-field"><span>Einzelpreis netto</span>
          <${NumberInput} mode="money" value=${it.priceCents} onChange=${(v) => update(it.id, { priceCents: v })} aria-label=${`Vertragsposition ${i + 1}: Einzelpreis`} /></label>
        <label class="item-field"><span>Steuer</span>
          <${NumberInput} value=${it.taxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${(v) => update(it.id, { taxRate: v })} aria-label=${`Vertragsposition ${i + 1}: Steuersatz`} /></label>
        <div class="item-field item-amount"><span>Betrag</span><strong>${money(lineNet(it), currency)}${PER[it.billing] ? html`<small>${' / '}${PER[it.billing]}</small>` : ''}</strong></div>
      </div>
    </div>`)}
    ${!items.length && html`<p class="muted-text ct-empty">Noch keine Positionen. Lege z. B. die Website als einmalige Position und den Website-Service als monatliche Position an.</p>`}
    <div class="items-foot">
      <${Button} icon="plus" onClick=${() => add('once')}>Einmalige Position<//>
      <${Button} icon="repeat" onClick=${() => add('monthly')}>Laufende Position<//>
      ${items.length > 0 && html`<span class="ct-sums">${contractSummaryText({ items }, (x) => money(x, currency))} <span class="muted-text">netto</span></span>`}
    </div>
  </div>`;
}

/** Abrechnungsübersicht im Vertrag: einmalige Positionen als Rechnung, laufende je Intervall als Vorlage. */
function ContractBillingBox({ c, sums, billing, busy, onOnce, onInterval, onClose }) {
  if (!sums.hasOnce && !sums.intervalIds.length) return null;
  return html`<div class="ct-billing-box">
    ${sums.hasOnce && html`<div class="ct-bill-row">
      <div><strong>Einmalig</strong> · ${money(sums.once, c.currency)} netto
        ${billing.onceInvoices.length > 0 && html`<div class="cell-sub">Abgerechnet: ${billing.onceInvoices.map((i, k) => html`${k ? ', ' : ''}<a href=${`#/invoices/${i.id}${i.status === 'draft' ? '/edit' : ''}`} onClick=${onClose}>${i.number || 'Entwurf'}</a>`)}</div>`}
      </div>
      <${Button} small icon="invoice" busy=${busy === 'once'} onClick=${onOnce}>${billing.onceInvoices.length ? 'Weitere Rechnung' : 'Rechnung erstellen'}<//>
    </div>`}
    ${sums.intervalIds.map((b) => {
      const tpl = billing.templateFor(b);
      return html`<div class="ct-bill-row" key=${b}>
        <div><strong>${INTERVAL_VERB[b]}</strong> · ${money(sums.intervals[b], c.currency)} netto / ${PER[b]}
          ${tpl.length > 0 && html`<div class="cell-sub">Vorlage ${tpl.map((r, k) => html`${k ? ', ' : ''}<a href="#/recurring" onClick=${onClose}>„${r.name}“</a> ${r.active ? `– nächste Rechnung ${date(r.nextDate)}` : '– pausiert oder beendet'}`)}</div>`}
        </div>
        <${Button} small icon="repeat" busy=${busy === b} onClick=${() => onInterval(b)}>${tpl.length ? 'Weitere Vorlage' : 'Wiederkehrende Rechnung anlegen'}<//>
      </div>`;
    })}
  </div>`;
}


export function ContractModal({ contract, onClose }) {
  useStore();
  const isNew = !byId('contracts', contract.id);
  const [c, setC] = useState(() => {
    const x = clone(contract);
    x.items = contractItems(contract).map((it) => ({ ...it }));   // ältere Verträge: Betrag als Position
    return x;
  });
  const [files, setFiles] = useState([]);
  const [removeIds, setRemoveIds] = useState([]);
  const [preview, setPreview] = useState('');
  const [busy, setBusy] = useState('');
  const [recurring, setRecurring] = useState(null);
  const set = (k) => (v) => setC((p) => ({ ...p, [k]: v }));

  if (recurring) return html`<${RecurringModal} rec=${recurring} onClose=${onClose} />`;

  const quotes = state.quotes.filter((q) => q.customerId === c.customerId && q.status !== 'draft')
    .sort((a, b) => ((a.issueDate || '') < (b.issueDate || '') ? 1 : -1));
  const invoices = isNew ? [] : state.invoices.filter((i) => i.contractId === c.id).sort((a, b) => ((a.issueDate || '') < (b.issueDate || '') ? 1 : -1));
  const templates = isNew ? [] : state.recurring.filter((r) => r.contractId === c.id);
  const kept = (c.attachmentIds || []).filter((aid) => !removeIds.includes(aid));

  function pickCompany(id) {
    const co = byId('companies', id);
    setC((p) => ({ ...p, companyId: id, ...(co && isNew && !(p.items || []).length ? { currency: co.currency } : {}) }));
  }
  function pickQuote(id) {
    const q = byId('quotes', id);
    if (!q) { setC((p) => ({ ...p, quoteId: '' })); return; }
    const from = contractFromQuote(q);
    setC((p) => ({
      ...p, quoteId: id, companyId: p.companyId || from.companyId,
      title: p.title || from.title,
      ...(!(p.items || []).length ? { items: from.items, currency: from.currency } : {}),
    }));
  }

  async function save() {
    const saved = await attempt(() => saveContract(c, { files, removeIds }));
    if (!saved) return null;
    setC(clone(saved)); setFiles([]); setRemoveIds([]);
    return saved;
  }
  async function submit() {
    setBusy('save');
    const saved = await save();
    setBusy('');
    if (saved) { toast(isNew ? `Vertrag „${saved.title}“ angelegt` : 'Vertrag gespeichert', 'good'); onClose(); }
  }
  async function toInvoice() {
    setBusy('once');
    const saved = await save();
    setBusy('');
    if (!saved) return;
    onClose();
    navigate(`/invoices/new?contract=${saved.id}&part=once`);
  }
  async function toRecurring(interval) {
    setBusy(interval);
    const saved = await save();
    setBusy('');
    if (!saved) return;
    setRecurring(recurringFromContract(saved, interval));
  }
  async function remove() {
    const linked = invoices.length + templates.length;
    const ok = await ask({
      title: 'Vertrag löschen?',
      text: `„${c.title}“ wird samt ${kept.length === 1 ? 'PDF' : `${kept.length} PDFs`} gelöscht.${linked ? ' Verknüpfte Rechnungen und Vorlagen bleiben erhalten.' : ''}`,
      confirmLabel: 'Löschen', danger: true,
    });
    if (!ok) return;
    const done = await attempt(async () => { await deleteContract(c.id); return true; });
    if (done) { toast('Vertrag gelöscht', 'good'); onClose(); }
  }

  const sums = contractSums(c);
  const billingInfo = isNew ? { invoices: [], onceInvoices: [], templates: [], templateFor: () => [] } : contractBilling(c);
  return html`<${Modal} title=${isNew ? 'Neuer Vertrag' : 'Vertrag'} size="xl" onClose=${onClose} onSubmit=${submit}
    footer=${html`
      ${!isNew && html`<${Button} variant="ghost" icon="trash" class="push-left" onClick=${remove}>Löschen<//>`}
      <${Button} onClick=${onClose}>Abbrechen<//>
      <${Button} variant="primary" type="submit" busy=${busy === 'save'}>Speichern<//>`}>
    <div class="form-grid">
      <${SelectField} class="span-3" label="Unternehmen" value=${c.companyId} onChange=${pickCompany} placeholder="Unternehmen wählen"
        options=${activeCompanies().map((co) => ({ id: co.id, label: co.name }))} />
      <${Field} class="span-3" label="Kontakt" htmlFor="ct-customer">
        <${Combobox} id="ct-customer" options=${customerOptions(c.customerId)} value=${c.customerId} placeholder="Kontakt suchen"
          onChange=${(id) => setC((p) => ({ ...p, customerId: id, quoteId: p.customerId === id ? p.quoteId : '' }))} />
      <//>
      <${TextField} class="span-4" label="Bezeichnung" value=${c.title} onInput=${set('title')} placeholder="z. B. SEO-Betreuung 12 Monate" />
      <${TextField} class="span-2" label="Vertragsnummer" hint="optional" value=${c.refNumber} onInput=${set('refNumber')} />
      <${SelectField} class="span-2" label="Status" value=${c.status} onChange=${set('status')}
        options=${Object.entries(CONTRACT_STATUS).map(([id, d]) => ({ id, label: d.label }))} />
      <${DateField} class="span-2" label="Unterschrieben am" value=${c.signedDate} onInput=${set('signedDate')} />
      <${SelectField} class="span-2" label="Aus Angebot" value=${c.quoteId} onChange=${pickQuote} placeholder=${quotes.length ? 'Kein Angebot' : 'Keine Angebote vorhanden'}
        options=${quotes.map((q) => ({ id: q.id, label: `${quoteLabel(q)} · ${date(q.issueDate)} · ${money(q.totals ? q.totals.totalCents : 0, q.currency)}` }))} />
      <${DateField} class="span-2" label="Beginn" value=${c.startDate} onInput=${set('startDate')} />
      <${DateField} class="span-2" label="Ende" hint="leer = unbefristet" value=${c.endDate} onInput=${set('endDate')} min=${c.startDate || undefined} />
      <${TextField} class="span-2" label="Kündigungsfrist" hint="optional" value=${c.noticePeriod} onInput=${set('noticePeriod')} placeholder="z. B. 3 Monate zum Laufzeitende" />
      <${SelectField} class="span-2" label="Währung" value=${c.currency} onChange=${set('currency')} options=${DOC_CURRENCIES} />
      <${TextArea} class="span-6" label="Notizen" value=${c.notes} onInput=${set('notes')} rows=${2} placeholder="z. B. Sonderkonditionen, Ansprechpartner, Verlängerung" />
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${ContractItemsEditor} items=${c.items || []} onChange=${(items) => setC((p) => ({ ...p, items }))} companyId=${c.companyId} currency=${c.currency} />
    ${c.status !== 'declined' && (sums.hasOnce || sums.intervalIds.length > 0) && html`<h3 class="sub-head">Abrechnen</h3>
      <${ContractBillingBox} c=${c} sums=${sums} billing=${billingInfo} busy=${busy} onOnce=${toInvoice} onInterval=${toRecurring} onClose=${onClose} />`}
    <h3 class="sub-head">Vertragsdokumente</h3>
    <${FileList} ids=${kept} preview=${preview} setPreview=${setPreview} onRemove=${(aid) => setRemoveIds((p) => [...p, aid])} />
    <${PendingFiles} files=${files} onRemove=${(i) => setFiles((p) => p.filter((_, j) => j !== i))} />
    ${removeIds.length > 0 && html`<p class="muted-text small">${removeIds.length === 1 ? 'Ein PDF wird' : `${removeIds.length} PDFs werden`} beim Speichern entfernt.
      <button type="button" class="link-btn" onClick=${() => setRemoveIds([])}>Rückgängig</button></p>`}
    <${PdfDrop} multiple label="Vertrag als PDF hinzufügen" sub="Auch mehrere Dateien, z. B. Vertrag und Nachtrag" onFiles=${(f) => setFiles((p) => [...p, ...f])} />
    ${invoices.length > 0 && html`<h3 class="sub-head">Rechnungen zu diesem Vertrag</h3>
      <ul class="plain-list linked-list">
        ${invoices.map((i) => html`<li key=${i.id}><${Icon} name=${i.contractPart && i.contractPart !== 'once' && i.contractPart !== 'all' ? 'repeat' : 'invoice'} size=${14} />
          <a href=${`#/invoices/${i.id}${i.status === 'draft' ? '/edit' : ''}`} onClick=${onClose}>${i.number || 'Entwurf'}</a>
          <span class="muted-text">${date(i.issueDate)}</span> <${DocAmount} doc=${i} /> <${InvoiceBadge} inv=${i} /></li>`)}
      </ul>`}
  <//>`;
}

/* ---------- Übersicht ---------- */

const GROUPS = [
  { id: 'all', label: 'Alle', test: () => true },
  { id: 'open', label: 'Offen', test: (s) => s === 'open' },
  { id: 'running', label: 'Laufend', test: (s) => s === 'signed' || s === 'ending' || s === 'expired' },
  { id: 'ending', label: 'Endet bald', test: (s) => s === 'ending' || s === 'expired' },
  { id: 'closed', label: 'Beendet', test: (s) => s === 'ended' || s === 'declined' },
];

export function ContractsView({ params = {} }) {
  useStore();
  const [q, setQ] = useState('');
  const [group, setGroup] = useState('all');
  const [editing, setEditing] = useState(() => (params.open ? byId('contracts', params.open) || null : null));
  const today = todayISO();
  const showCompany = !currentCompany();
  const scoped = useMemo(() => state.contracts.filter(inScope).map((c) => ({ c, s: contractStatus(c, today) })), [state.version, state.settings.activeCompany]);
  const rows = scoped
    .filter((r) => GROUPS.find((g) => g.id === group).test(r.s))
    .filter((r) => matches(q, r.c.title, r.c.refNumber, customerName(byId('customers', r.c.customerId)), r.c.notes));
  const ending = scoped.filter((r) => r.s === 'ending' || r.s === 'expired').length;

  const columns = [
    {
      key: 'title', label: 'Vertrag', sort: (r) => r.c.title,
      render: (r) => html`<div class="cell-main">${r.c.title}</div>${r.c.refNumber && html`<div class="cell-sub">${r.c.refNumber}</div>`}`,
    },
    { key: 'customer', label: 'Kontakt', sort: (r) => customerName(byId('customers', r.c.customerId)), render: (r) => customerName(byId('customers', r.c.customerId)) || '–' },
    ...(showCompany ? [{ key: 'company', label: 'Unternehmen', render: (r) => html`<${CompanyTag} id=${r.c.companyId} />` }] : []),
    { key: 'term', label: 'Laufzeit', sort: (r) => r.c.endDate || r.c.startDate || '', render: (r) => contractTerm(r.c) || html`<span class="muted-text">–</span>` },
    { key: 'amount', label: 'Betrag netto', align: 'right', sort: (r) => { const x = contractSums(r.c); return x.once + Object.values(x.intervals).reduce((a, v) => a + v, 0); }, render: (r) => contractAmount(r.c) || html`<span class="muted-text">–</span>` },
    { key: 'files', label: 'PDF', align: 'right', render: (r) => ((r.c.attachmentIds || []).length ? html`<span class="file-count" title="Vertragsdokumente"><${Icon} name="file" size=${14} />${r.c.attachmentIds.length}</span>` : '') },
    { key: 'status', label: 'Status', sort: (r) => r.s, render: (r) => html`<${ContractBadge} contract=${r.c} />` },
  ];

  const create = () => setEditing(newContract(currentCompany() || (activeCompanies().length === 1 ? activeCompanies()[0] : null)));
  return html`
    <${PageHeader} title="Verträge" sub="Welcher Kontakt hat welchen Vertrag – mit PDF, Laufzeit und Abrechnung.">
      <${Button} variant="primary" icon="plus" onClick=${create}>Neuer Vertrag<//>
    <//>
    ${ending > 0 && html`<${Notice} tone="warn">${ending === 1 ? 'Ein Vertrag endet' : `${ending} Verträge enden`} in den nächsten 60 Tagen oder ${ending === 1 ? 'hat' : 'haben'} das Enddatum überschritten.<//>`}
    ${state.contracts.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Vertrag, Nummer, Kontakt" />
      <${Chips} label="Status" value=${group} onChange=${setGroup}
        options=${GROUPS.map((g) => ({ id: g.id, label: g.label, count: scoped.filter((r) => g.test(r.s)).length }))} />
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} rowKey=${(r) => r.c.id} initialSort=${{ key: 'term', dir: 'desc' }} onRowClick=${(r) => setEditing(r.c)}
      empty=${state.contracts.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Vertrag." />`
        : html`<${EmptyState} icon="file" title="Noch keine Verträge" text="Lege Verträge mit PDF, Laufzeit und Betrag an – auch ältere. Aus einem Vertrag wird mit einem Klick die Rechnung oder eine wiederkehrende Abrechnung.">
            <${Button} variant="primary" icon="plus" onClick=${create}>Ersten Vertrag anlegen<//>
          <//>`} />
    ${editing && html`<${ContractModal} key=${editing.id} contract=${editing} onClose=${() => setEditing(null)} />`}
  `;
}

/* ---------- Ablauf beim Kontakt ---------- */

const STATE_LABEL = { done: 'Erledigt', active: 'Läuft', todo: 'Offen', skipped: 'Nicht erfasst' };

/**
 * Termin → Angebot → Vertrag → Rechnung. Zeigt je Schritt den Stand und die passenden nächsten Aktionen.
 * on: { appointment(), uploadQuote(), contract(c), openContract(c) }
 */
export function PipelinePanel({ customerId, on }) {
  const today = todayISO();
  const { steps, current } = pipelineOf({
    appointments: state.appointments, quotes: state.quotes, contracts: state.contracts, invoices: state.invoices,
  }, customerId, today);
  const [meeting, quote, contract, invoice] = steps;
  // Unterschriebener Vertrag, dessen einmalige Positionen noch nicht abgerechnet sind bzw. dessen laufende
  // Positionen noch keine Vorlage haben.
  const signed = state.contracts.filter((c) => c.customerId === customerId && c.status === 'signed');
  const onceOpen = signed.find((c) => contractSums(c).hasOnce && !contractBilling(c).onceInvoices.length);
  const recurringOpen = signed.find((c) => contractSums(c).intervalIds.some((b) => !contractBilling(c).templateFor(b).length));

  const body = {
    meeting: html`
      ${meeting.next && html`<p>Nächster Termin: <strong>${date(meeting.next.date)}, ${meeting.next.start} Uhr</strong></p>`}
      ${meeting.last && html`<p class="muted-text">Zuletzt ${date(meeting.last.date)}${meeting.count > 1 ? ` · ${meeting.count} Termine` : ''}</p>`}
      ${!meeting.next && !meeting.last && html`<p class="muted-text">Noch kein Termin.</p>`}
      <div class="flow-actions"><${Button} small icon="calendar" onClick=${on.appointment}>Termin planen<//></div>`,
    quote: html`
      ${quote.latest
        ? html`<p><a href=${`#/quotes/${quote.latest.id}`}>${quoteLabel(quote.latest)}</a>${quote.latest.source === 'upload' && html` <span class="pdf-tag">PDF</span>`}${' · '}${(QUOTE_STATUS[quote.latestStatus] || {}).label || ''}</p>
          <p class="muted-text">${date(quote.latest.issueDate)} · ${money(quote.latest.totals ? quote.latest.totals.totalCents : 0, quote.latest.currency)}${quote.count > 1 ? ` · ${quote.count} Angebote` : ''}</p>`
        : html`<p class="muted-text">${quote.drafts ? `${quote.drafts} ${quote.drafts === 1 ? 'Entwurf' : 'Entwürfe'} in Arbeit.` : 'Noch kein Angebot.'}</p>`}
      <div class="flow-actions">
        <${Button} small icon="quote" onClick=${() => navigate(`/quotes/new?customer=${customerId}`)}>Schreiben<//>
        <${Button} small icon="upload" onClick=${on.uploadQuote}>PDF hochladen<//>
      </div>`,
    contract: html`
      ${contract.latest
        ? html`<p><button type="button" class="link-btn" onClick=${() => on.openContract(contract.latest)}>${contract.latest.title}</button>${' · '}${(CONTRACT_VIEW[contractStatus(contract.latest, today)] || {}).label}</p>
          <p class="muted-text">${[contractTerm(contract.latest), contract.count > 1 ? `${contract.count} Verträge` : ''].filter(Boolean).join(' · ') || ' '}</p>`
        : html`<p class="muted-text">Noch kein Vertrag.</p>`}
      <div class="flow-actions"><${Button} small icon="file" onClick=${() => on.contract(contractFor(customerId))}>Vertrag anlegen<//></div>`,
    invoice: html`
      ${invoice.latest
        ? html`<p><a href=${`#/invoices/${invoice.latest.id}`}>${invoice.latest.number}</a>${' '}<${InvoiceBadge} inv=${invoice.latest} /></p>
          <p class="muted-text">${date(invoice.latest.issueDate)}${invoice.count > 1 ? ` · ${invoice.count} Rechnungen` : ''}</p>`
        : html`<p class="muted-text">${invoice.drafts ? `${invoice.drafts} ${invoice.drafts === 1 ? 'Entwurf' : 'Entwürfe'} in Arbeit.` : 'Noch keine Rechnung.'}</p>`}
      <div class="flow-actions">
        ${onceOpen && html`<${Button} small variant="primary" icon="invoice" onClick=${() => navigate(`/invoices/new?contract=${onceOpen.id}&part=once`)}>Aus Vertrag<//>`}
        ${recurringOpen && html`<${Button} small icon="repeat" onClick=${() => on.openContract(recurringOpen)}>Laufend abrechnen<//>`}
        <${Button} small icon="plus" onClick=${() => navigate(`/invoices/new?customer=${customerId}`)}>Schreiben<//>
      </div>`,
  };

  return html`<${Panel} title="Ablauf" class="flow-panel">
    <ol class="flow">
      ${steps.map((s, i) => html`<li key=${s.id} class=${`flow-step is-${s.state}${current === i ? ' is-current' : ''}`}>
        <div class="flow-head">
          <span class="flow-dot">${s.state === 'done' ? html`<${Icon} name="check" size=${13} />` : i + 1}</span>
          <span class="flow-label">${s.label}</span>
          <span class="flow-state">${current === i ? 'Nächster Schritt' : STATE_LABEL[s.state]}</span>
        </div>
        <div class="flow-body">${body[s.id]}</div>
      </li>`)}
    </ol>
  <//>`;
}

/** Tabelle der Verträge eines Kontakts (Kundenakte). */
export function ContractTable({ customerId, onOpen }) {
  const rows = state.contracts.filter((c) => c.customerId === customerId)
    .sort((a, b) => ((a.startDate || a.createdAt) < (b.startDate || b.createdAt) ? 1 : -1));
  const columns = [
    { key: 'title', label: 'Vertrag', render: (c) => html`<span class="cell-main">${c.title}</span>${c.refNumber && html`<div class="cell-sub">${c.refNumber}</div>`}` },
    { key: 'company', label: 'Unternehmen', render: (c) => html`<${CompanyTag} id=${c.companyId} />` },
    { key: 'term', label: 'Laufzeit', render: (c) => contractTerm(c) || '–' },
    { key: 'amount', label: 'Betrag netto', align: 'right', render: (c) => contractAmount(c) || '–' },
    { key: 'files', label: 'PDF', align: 'right', render: (c) => ((c.attachmentIds || []).length ? html`<span class="file-count"><${Icon} name="file" size=${14} />${c.attachmentIds.length}</span>` : '') },
    { key: 'status', label: 'Status', render: (c) => html`<${ContractBadge} contract=${c} />` },
  ];
  return html`<${DataTable} columns=${columns} rows=${rows} onRowClick=${onOpen}
    empty=${html`<p class="panel-empty">Noch keine Verträge für diesen Kontakt.</p>`} />`;
}
