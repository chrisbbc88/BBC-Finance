// Kleine gemeinsame Bausteine der Ansichten.

import { html } from '../ui/core.js';
import { Badge, CompanyDot } from '../ui/components.js';
import { state, byId, paymentsOf, currentCompany } from '../lib/store.js';
import { invoiceStatus, quoteStatus, openCents, toUSD, toEUR } from '../lib/calc.js';
import { INVOICE_STATUS, QUOTE_STATUS, customerName } from '../lib/schema.js';
import { money } from '../lib/format.js';
import { todayISO } from '../lib/util.js';

export const storeData = () => ({
  invoices: state.invoices, quotes: state.quotes, payments: state.payments, expenses: state.expenses,
  customers: state.customers, companies: state.companies, services: state.services,
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

/** Betrag in USD mit EUR als Zweitzeile – die Standarddarstellung für Summen im Tool. */
export function Dual({ usd, eur, strong }) {
  return html`<span class="dual">
    <span class=${strong ? 'dual-main strong' : 'dual-main'}>${money(usd, 'USD')}</span>
    <span class="dual-sub">≈ ${money(eur, 'EUR')}</span>
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
