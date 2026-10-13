// Kleine gemeinsame Bausteine der Ansichten.

import { html } from '../ui/core.js';
import { Badge, CompanyDot } from '../ui/components.js';
import { state, byId, paymentsOf, currentCompany } from '../lib/store.js';
import { invoiceStatus, quoteStatus, openCents, toUSD, toEUR, convertCents } from '../lib/calc.js';
import { INVOICE_STATUS, QUOTE_STATUS, customerName } from '../lib/schema.js';
import { money } from '../lib/format.js';
import { todayISO } from '../lib/util.js';

export const storeData = () => ({
  invoices: state.invoices, quotes: state.quotes, payments: state.payments, expenses: state.expenses,
  customers: state.customers, companies: state.companies, services: state.services, recurring: state.recurring,
});

export const scopeCompanyId = () => { const c = currentCompany(); return c ? c.id : null; };

export function statusOf(inv) { return invoiceStatus(inv, paymentsOf(inv.id), todayISO()); }

export function InvoiceBadge({ inv }) {
  const s = statusOf(inv);
  const def = INVOICE_STATUS[s] || INVOICE_STATUS.draft;
  // „Klärung nötig“ steht gelb neben dem Status – z. B. bezahlt, aber mit offener Differenz.
  return html`<span class="badges"><${Badge} tone=${def.tone}>${def.label}<//>${inv.clarify && s !== 'draft' && html`<${Badge} tone="warn" icon="warn">Klärung nötig<//>`}</span>`;
}

export function QuoteBadge({ quote }) {
  const s = quoteStatus(quote, todayISO());
  const def = QUOTE_STATUS[s] || QUOTE_STATUS.draft;
  return html`<${Badge} tone=${def.tone}>${def.label}<//>`;
}

/* ---------- Anzeigewährung ----------
 * Alle Auswertungen rechnen jeden Beleg mit seinem eigenen Kurs in USD und EUR um. Welche der beiden
 * Währungen vorne steht, wählt der Umschalter oben rechts; die andere steht als Zweitwert daneben. */
export const CUR = () => (state.settings.displayCurrency === 'EUR' ? 'EUR' : 'USD');
export const ALT = () => (CUR() === 'USD' ? 'EUR' : 'USD');
/** Wert eines Auswertungsobjekts in der Anzeigewährung: pick(o) liest o.usd/o.eur, pick(o, 'net') liest o.netUSD/o.netEUR. */
export const pick = (o, base = '', cur = CUR()) => {
  if (!o) return 0;
  const v = base ? o[`${base}${cur}`] : o[cur.toLowerCase()];
  return Number(v) || 0;
};
export const pickAlt = (o, base = '') => pick(o, base, ALT());
/** Betrag in der Anzeigewährung formatieren (bzw. in der Zweitwährung). */
export const mc = (cents) => money(cents, CUR());
export const ma = (cents) => money(cents, ALT());
/** Belegbetrag mit dem Kurs des Belegs in die Anzeigewährung umrechnen. */
export const toDisp = (cents, currency, fx) => convertCents(cents, currency, CUR(), fx);

/** Betrag in der Anzeigewährung mit der anderen Währung als Zweitzeile. */
export function Dual({ usd, eur, strong }) {
  const main = CUR() === 'EUR' ? eur : usd;
  const other = CUR() === 'EUR' ? usd : eur;
  return html`<span class="dual">
    <span class=${strong ? 'dual-main strong' : 'dual-main'}>${mc(main)}</span>
    <span class="dual-sub">≈ ${ma(other)}</span>
  </span>`;
}

/** Betrag eines Belegs in Belegwährung, darunter die jeweils andere Währung. */
export function DocAmount({ doc, cents }) {
  const value = cents != null ? cents : (doc.totals ? doc.totals.totalCents : 0);
  const other = doc.currency === 'USD' ? 'EUR' : 'USD';
  const conv = doc.fx ? (other === 'EUR' ? toEUR(value, doc.currency, doc.fx) : toUSD(value, doc.currency, doc.fx)) : null;
  return html`<span class="dual">
    <span class="dual-main">${money(value, doc.currency)}</span>
    ${conv != null && html`<span class="dual-sub">≈ ${money(conv, other)}</span>`}
  </span>`;
}

export function CompanyTag({ id }) {
  const c = byId('companies', id);
  if (!c) return html`<span class="muted-text">–</span>`;
  return html`<span class="co-tag"><${CompanyDot} company=${c} />${c.shortName || c.name}</span>`;
}

export function customerLabel(doc) {
  const c = byId('customers', doc.customerId) || (doc.snapshot && doc.snapshot.customer);
  return customerName(c) || '–';
}

export const invoiceOpen = (inv) => openCents(inv, paymentsOf(inv.id));

export function downloadName(prefix) {
  return `${prefix} ${todayISO()}`;
}
