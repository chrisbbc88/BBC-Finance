// Positionen eines Vertrags: jede Position ist einmalig oder wird in einem Intervall abgerechnet
// (z. B. Website einmalig, Website-Service monatlich). Reine Umwandlung ohne Speichern.

import { uid } from './util.js';

export const BILLING_OPTIONS = [
  { id: 'once', label: 'Einmalig' },
  { id: 'monthly', label: 'Monatlich' },
  { id: 'quarterly', label: 'Quartalsweise' },
  { id: 'semiannual', label: 'Halbjährlich' },
  { id: 'yearly', label: 'Jährlich' },
];
export const PER = { monthly: 'Monat', quarterly: 'Quartal', semiannual: 'Halbjahr', yearly: 'Jahr' };
export const INTERVAL_ORDER = ['monthly', 'quarterly', 'semiannual', 'yearly'];
export const isInterval = (b) => !!PER[b];
const billingLabel = (b) => (BILLING_OPTIONS.find((o) => o.id === b) || BILLING_OPTIONS[0]).label;

export function newContractItem(over = {}) {
  return { id: uid(), serviceId: '', name: '', description: '', qty: 1, unit: 'Pauschal', priceCents: 0, taxRate: 0, billing: 'once', ...over };
}

/**
 * Positionen eines Vertrags. Ältere Verträge hatten nur einen Betrag mit einer Abrechnungsart –
 * sie werden hier als eine Position gelesen, ohne den gespeicherten Datensatz zu ändern.
 */
export function contractItems(c) {
  if (!c) return [];
  if (Array.isArray(c.items) && c.items.length) return c.items;
  if (c.amountCents != null && c.amountCents !== '') {
    const billing = isInterval(c.billing) ? c.billing : 'once';
    return [newContractItem({
      id: `legacy-${c.id || 'x'}`, name: c.title || 'Vertragsleistung', qty: 1,
      unit: PER[billing] || 'Pauschal', priceCents: Math.round(Number(c.amountCents)) || 0,
      taxRate: Number(c.taxRate) || 0, billing,
    })];
  }
  return [];
}

export const lineNet = (it) => Math.round((Number(it.qty) || 0) * (Number(it.priceCents) || 0));

/** Netto-Summen: { once, intervals: { monthly: …, yearly: … }, hasOnce, intervalIds } */
export function contractSums(c) {
  const out = { once: 0, intervals: {}, hasOnce: false, intervalIds: [] };
  for (const it of contractItems(c)) {
    if (isInterval(it.billing)) out.intervals[it.billing] = (out.intervals[it.billing] || 0) + lineNet(it);
    else { out.once += lineNet(it); out.hasOnce = true; }
  }
  out.intervalIds = INTERVAL_ORDER.filter((b) => b in out.intervals);
  return out;
}

/** Kurztext, z. B. „2.490,00 € einmalig · 149,00 € / Monat“ (netto). `fmt(cents)` formatiert Geld. */
export function contractSummaryText(c, fmt) {
  const s = contractSums(c);
  const parts = [];
  if (s.hasOnce) parts.push(`${fmt(s.once)} einmalig`);
  for (const b of s.intervalIds) parts.push(`${fmt(s.intervals[b])} / ${PER[b]}`);
  return parts.join(' · ');
}

/** Abrechnung einer Leistung aus dem Katalog ableiten. */
export function billingOfService(s) {
  if (!s || !s.recurring) return 'once';
  if (/jahr/i.test(s.unit || '') && !/halb/i.test(s.unit || '')) return 'yearly';
  if (/halbjahr/i.test(s.unit || '')) return 'semiannual';
  if (/quartal/i.test(s.unit || '')) return 'quarterly';
  return 'monthly';
}

/** Abrechnung einer Belegposition ohne Leistung: nach der Einheit. */
function billingOfUnit(unit) {
  const u = String(unit || '').toLowerCase();
  if (u === 'monat') return 'monthly';
  if (u === 'quartal') return 'quarterly';
  if (u === 'halbjahr') return 'semiannual';
  if (u === 'jahr') return 'yearly';
  return 'once';
}

/** Positionen aus einem Angebot übernehmen. `serviceById(id)` liefert die Leistung zum Ableiten der Abrechnung. */
export function itemsFromQuote(quote, serviceById = () => null) {
  return (quote.items || []).filter((it) => !it.isText).map((it) => {
    const svc = it.serviceId ? serviceById(it.serviceId) : null;
    const disc = Number(it.discountPct) || 0;
    return newContractItem({
      serviceId: it.serviceId || '', name: it.name || '', description: it.description || '',
      qty: Number(it.qty) || 1, unit: it.unit || 'Pauschal',
      priceCents: disc ? Math.round((Number(it.priceCents) || 0) * (1 - disc / 100)) : Math.round(Number(it.priceCents) || 0),
      taxRate: Number(it.taxRate) || 0,
      billing: quote.source === 'upload' ? 'once' : (svc ? billingOfService(svc) : billingOfUnit(it.unit)),
    });
  });
}

/**
 * Rechnungspositionen aus einem Vertrag. part: 'once' (einmalige Positionen), ein Intervall wie
 * 'monthly', oder 'all'. Die Vertragsnummer wird bei Positionen ohne eigenen Text ergänzt.
 */
export function invoiceItemsFromContract(c, part = 'once') {
  return contractItems(c)
    .filter((it) => (part === 'all' ? true : part === 'once' ? !isInterval(it.billing) : it.billing === part))
    .map((it) => ({
      id: uid(), serviceId: it.serviceId || '', name: it.name, discountPct: 0,
      description: it.description || (c.refNumber ? `Gemäß Vertrag ${c.refNumber}` : ''),
      qty: Number(it.qty) || 1, unit: it.unit || (PER[it.billing] || 'Pauschal'),
      priceCents: Math.round(Number(it.priceCents) || 0), taxRate: Number(it.taxRate) || 0,
    }));
}

/** Prüft Positionen; gibt eine Fehlermeldung oder '' zurück. */
export function validateContractItems(items) {
  for (const [i, it] of (items || []).entries()) {
    if (!String(it.name || '').trim()) return `Position ${i + 1}: Bitte eine Bezeichnung eintragen.`;
    if (!(Number(it.qty) > 0)) return `Position ${i + 1}: Die Menge muss größer als 0 sein.`;
    if (!(Number(it.priceCents) >= 0)) return `Position ${i + 1}: Bitte den Preis prüfen.`;
    if (!BILLING_OPTIONS.some((o) => o.id === it.billing)) return `Position ${i + 1}: Unbekannte Abrechnung.`;
  }
  return '';
}

export { billingLabel };
