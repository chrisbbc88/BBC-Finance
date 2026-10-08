// Auswertungen. Reine Funktionen über die Datensammlungen – ohne Zugriff auf den Store,
// damit sie sich mit festen Testdaten prüfen lassen.
//
// Begriffe:
//   Umsatz      = Nettobeträge erstellter Rechnungen nach Rechnungsdatum (Gutschriften negativ,
//                 stornierte Rechnungen und Entwürfe zählen nicht).
//   Ausgaben    = Nettobeträge gebuchter Ausgaben nach Rechnungsdatum des Belegs.
//   Zahlungen   = tatsächlich eingetragene Zahlungseingänge nach Zahlungsdatum.
// Alle Summen werden mit dem am Beleg gespeicherten Wechselkurs in USD und EUR umgerechnet.

import {
  toUSD, toEUR, countsAsRevenue, openCents, sumPayments, invoiceStatus, allocate,
} from './calc.js';
import {
  inRange, monthKey, quarterKey, yearOf, daysBetween, periodRange, monthsBetween,
} from './util.js';
import { customerName } from './schema.js';

const inCompany = (row, companyId) => !companyId || row.companyId === companyId;

function paymentIndex(payments) {
  const m = new Map();
  for (const p of payments) {
    if (!m.has(p.invoiceId)) m.set(p.invoiceId, []);
    m.get(p.invoiceId).push(p);
  }
  return m;
}

/** Umsatzwirksame Belege im Zeitraum, mit umgerechneten Beträgen. */
export function revenueDocs(data, { companyId, range } = {}) {
  const out = [];
  for (const inv of data.invoices) {
    if (!countsAsRevenue(inv) || !inv.totals) continue;
    if (!inCompany(inv, companyId)) continue;
    if (range && !inRange(inv.issueDate, range)) continue;
    const t = inv.totals;
    const netUSD = toUSD(t.netCents, inv.currency, inv.fx) || 0;
    const netEUR = toEUR(t.netCents, inv.currency, inv.fx) || 0;
    const taxUSD = toUSD(t.taxCents, inv.currency, inv.fx) || 0;
    const taxEUR = toEUR(t.taxCents, inv.currency, inv.fx) || 0;
    // Brutto = Netto + Steuer – auch nach der Umrechnung, damit Zeilen und Summen aufgehen.
    out.push({
      inv, date: inv.issueDate, netUSD, netEUR, taxUSD, taxEUR,
      totalUSD: netUSD + taxUSD, totalEUR: netEUR + taxEUR,
    });
  }
  return out;
}

export function expenseDocs(data, { companyId, range } = {}) {
  const out = [];
  for (const e of data.expenses) {
    if (e.status !== 'booked') continue;
    if (!inCompany(e, companyId)) continue;
    if (range && !inRange(e.invoiceDate, range)) continue;
    const netUSD = toUSD(e.netCents, e.currency, e.fx) || 0;
    const netEUR = toEUR(e.netCents, e.currency, e.fx) || 0;
    const taxUSD = toUSD(e.taxCents, e.currency, e.fx) || 0;
    const taxEUR = toEUR(e.taxCents, e.currency, e.fx) || 0;
    out.push({
      exp: e, date: e.invoiceDate, netUSD, netEUR, taxUSD, taxEUR,
      totalUSD: netUSD + taxUSD, totalEUR: netEUR + taxEUR,
    });
  }
  return out;
}

export function paymentDocs(data, { companyId, range } = {}) {
  const invById = new Map(data.invoices.map((i) => [i.id, i]));
  const out = [];
  for (const p of data.payments) {
    const inv = invById.get(p.invoiceId);
    if (!inv) continue;
    if (!inCompany(inv, companyId)) continue;
    if (range && !inRange(p.date, range)) continue;
    out.push({
      pay: p, inv, date: p.date,
      usd: toUSD(p.amountCents, inv.currency, inv.fx) || 0,
      eur: toEUR(p.amountCents, inv.currency, inv.fx) || 0,
    });
  }
  return out;
}

const sum = (arr, key) => arr.reduce((a, r) => a + (r[key] || 0), 0);

/** Offene Posten zum Stichtag „heute“ (unabhängig vom Zeitraum). */
export function receivables(data, { companyId } = {}, today) {
  const pidx = paymentIndex(data.payments);
  const rows = [];
  for (const inv of data.invoices) {
    if (!inCompany(inv, companyId)) continue;
    const pays = pidx.get(inv.id) || [];
    const open = openCents(inv, pays);
    if (open <= 0) continue;
    const status = invoiceStatus(inv, pays, today);
    const overdueDays = inv.dueDate && inv.dueDate < today ? daysBetween(inv.dueDate, today) : 0;
    rows.push({
      inv, status, overdueDays,
      openCents: open,
      paidCents: sumPayments(pays),
      openUSD: toUSD(open, inv.currency, inv.fx) || 0,
      openEUR: toEUR(open, inv.currency, inv.fx) || 0,
      bucket: overdueDays <= 0 ? 'current' : overdueDays <= 30 ? 'd30' : overdueDays <= 60 ? 'd60' : overdueDays <= 90 ? 'd90' : 'd90plus',
    });
  }
  rows.sort((a, b) => (a.inv.dueDate || '9999') < (b.inv.dueDate || '9999') ? -1 : 1);
  return rows;
}

export const AGING = [
  { id: 'current', label: 'Nicht fällig' },
  { id: 'd30', label: '1–30 Tage' },
  { id: 'd60', label: '31–60 Tage' },
  { id: 'd90', label: '61–90 Tage' },
  { id: 'd90plus', label: 'Über 90 Tage' },
];

/** Kennzahlen für das Dashboard. */
export function dashboardKpis(data, companyId, today) {
  const month = periodRange('month', today);
  const quarter = periodRange('quarter', today);
  const year = periodRange('year', today);
  const lastMonth = periodRange('lastMonth', today);
  const yearDocs = revenueDocs(data, { companyId, range: year });
  const pick = (range) => yearDocs.filter((d) => inRange(d.date, range));
  const monthDocs = pick(month);
  const quarterDocs = pick(quarter);
  const lastMonthDocs = revenueDocs(data, { companyId, range: lastMonth });
  const rec = receivables(data, { companyId }, today);
  const overdue = rec.filter((r) => r.status === 'overdue');

  // Bezahlte Rechnungen des laufenden Jahres (nach Rechnungsdatum)
  const pidx = paymentIndex(data.payments);
  const invoicesOnly = yearDocs.filter((d) => d.inv.type !== 'credit_note' && d.inv.status !== 'credited');
  const paid = invoicesOnly.filter((d) => invoiceStatus(d.inv, pidx.get(d.inv.id) || [], today) === 'paid');

  // Aktive Kunden: als aktiv markiert; mit Unternehmensfilter nur solche mit Belegen dieses Unternehmens
  let activeCustomers = data.customers.filter((c) => c.active !== false);
  if (companyId) {
    const ids = new Set([
      ...data.invoices.filter((i) => i.companyId === companyId).map((i) => i.customerId),
      ...(data.quotes || []).filter((q) => q.companyId === companyId).map((q) => q.customerId),
    ]);
    activeCustomers = activeCustomers.filter((c) => ids.has(c.id));
  }

  return {
    month: { usd: sum(monthDocs, 'netUSD'), eur: sum(monthDocs, 'netEUR'), count: monthDocs.length },
    lastMonth: { usd: sum(lastMonthDocs, 'netUSD'), eur: sum(lastMonthDocs, 'netEUR') },
    quarter: { usd: sum(quarterDocs, 'netUSD'), eur: sum(quarterDocs, 'netEUR') },
    year: { usd: sum(yearDocs, 'netUSD'), eur: sum(yearDocs, 'netEUR') },
    open: { count: rec.length, usd: sum(rec, 'openUSD'), eur: sum(rec, 'openEUR') },
    overdue: { count: overdue.length, usd: sum(overdue, 'openUSD'), eur: sum(overdue, 'openEUR') },
    paid: { count: paid.length, usd: sum(paid, 'totalUSD'), eur: sum(paid, 'totalEUR') },
    average: {
      usd: invoicesOnly.length ? Math.round(sum(invoicesOnly, 'netUSD') / invoicesOnly.length) : 0,
      eur: invoicesOnly.length ? Math.round(sum(invoicesOnly, 'netEUR') / invoicesOnly.length) : 0,
      count: invoicesOnly.length,
    },
    activeCustomers: activeCustomers.length,
  };
}

/**
 * Zeitreihe: Umsatz, Ausgaben und Gewinn je Monat (USD und EUR).
 * Mit `range` zählen nur Belege innerhalb genau dieses Zeitraums (auch bei angebrochenen Monaten).
 */
export function monthlySeries(data, { companyId, months, range: exact }) {
  const whole = { from: `${months[0]}-01`, to: `${months[months.length - 1]}-31` };
  const range = exact
    ? { from: exact.from > whole.from ? exact.from : whole.from, to: exact.to < whole.to ? exact.to : whole.to }
    : whole;
  const rev = revenueDocs(data, { companyId, range });
  const exp = expenseDocs(data, { companyId, range });
  const pay = paymentDocs(data, { companyId, range });
  return months.map((key) => {
    const r = rev.filter((d) => monthKey(d.date) === key);
    const e = exp.filter((d) => monthKey(d.date) === key);
    const p = pay.filter((d) => monthKey(d.date) === key);
    const byCompany = {};
    for (const d of r) byCompany[d.inv.companyId] = (byCompany[d.inv.companyId] || 0) + d.netUSD;
    return {
      key,
      revenueUSD: sum(r, 'netUSD'), revenueEUR: sum(r, 'netEUR'),
      expenseUSD: sum(e, 'netUSD'), expenseEUR: sum(e, 'netEUR'),
      profitUSD: sum(r, 'netUSD') - sum(e, 'netUSD'), profitEUR: sum(r, 'netEUR') - sum(e, 'netEUR'),
      paymentsUSD: sum(p, 'usd'), paymentsEUR: sum(p, 'eur'),
      taxUSD: sum(r, 'taxUSD'),
      invoices: r.length,
      byCompany,
    };
  });
}

function bucketize(docs, keyFn) {
  const m = new Map();
  for (const d of docs) {
    const k = keyFn(d.date);
    const b = m.get(k) || { key: k, usd: 0, eur: 0, taxUSD: 0, count: 0 };
    b.usd += d.netUSD; b.eur += d.netEUR; b.taxUSD += d.taxUSD; b.count += 1;
    m.set(k, b);
  }
  return [...m.values()].sort((a, b) => (a.key < b.key ? -1 : 1));
}

export function revenueByPeriod(data, scope, grain) {
  const docs = revenueDocs(data, scope);
  if (grain === 'quarter') return bucketize(docs, quarterKey);
  if (grain === 'year') return bucketize(docs, (d) => String(yearOf(d)));
  return bucketize(docs, monthKey);
}

export function revenueByCustomer(data, scope) {
  const cust = new Map(data.customers.map((c) => [c.id, c]));
  const m = new Map();
  for (const d of revenueDocs(data, scope)) {
    const id = d.inv.customerId;
    const snap = d.inv.snapshot && d.inv.snapshot.customer;
    const b = m.get(id) || { id, name: customerName(cust.get(id) || snap) || 'Unbekannt', usd: 0, eur: 0, count: 0 };
    b.usd += d.netUSD; b.eur += d.netEUR;
    if (d.inv.type !== 'credit_note') b.count += 1;
    m.set(id, b);
  }
  return [...m.values()].sort((a, b) => b.usd - a.usd);
}

export function revenueByCompany(data, scope) {
  const comp = new Map(data.companies.map((c) => [c.id, c]));
  const m = new Map();
  for (const d of revenueDocs(data, scope)) {
    const id = d.inv.companyId;
    const c = comp.get(id);
    const b = m.get(id) || { id, name: c ? c.name : 'Unbekannt', color: c ? c.brandColor : '#888888', usd: 0, eur: 0, count: 0 };
    b.usd += d.netUSD; b.eur += d.netEUR;
    if (d.inv.type !== 'credit_note') b.count += 1;
    m.set(id, b);
  }
  return [...m.values()].sort((a, b) => b.usd - a.usd);
}

/** Umsatz je Leistung: Positionen nach verknüpfter Leistung, sonst nach Bezeichnung. */
export function revenueByService(data, scope) {
  const svc = new Map(data.services.map((s) => [s.id, s]));
  const m = new Map();
  for (const d of revenueDocs(data, scope)) {
    const lines = new Map((d.inv.totals.lines || []).map((l) => [l.id, l]));
    const items = (d.inv.items || []).filter((it) => lines.has(it.id));
    const nets = items.map((it) => { const l = lines.get(it.id); return l.netCents != null ? l.netCents : l.cents; });
    // Den umgerechneten Belegbetrag auf die Positionen verteilen – so stimmt die Summe
    // je Leistung auf den Cent mit dem Umsatz je Beleg überein.
    const partsUSD = allocate(d.netUSD, nets);
    const partsEUR = allocate(d.netEUR, nets);
    items.forEach((it, idx) => {
      const s = it.serviceId ? svc.get(it.serviceId) : null;
      const key = s ? `s:${s.id}` : `n:${String(it.name || '').trim().toLowerCase()}`;
      const b = m.get(key) || {
        key, name: s ? s.name : (it.name || 'Ohne Bezeichnung'), category: s ? s.category : '', usd: 0, eur: 0, qty: 0,
      };
      b.usd += partsUSD[idx] || 0;
      b.eur += partsEUR[idx] || 0;
      b.qty += Number(it.qty) || 0;
      m.set(key, b);
    });
  }
  return [...m.values()].sort((a, b) => b.usd - a.usd);
}

/** Umsatz in der jeweiligen Rechnungswährung (ohne Umrechnung). */
export function revenueByCurrency(data, scope) {
  const m = new Map();
  for (const d of revenueDocs(data, scope)) {
    const c = d.inv.currency;
    const b = m.get(c) || { currency: c, netCents: 0, taxCents: 0, totalCents: 0, usd: 0, eur: 0, count: 0 };
    b.netCents += d.inv.totals.netCents;
    b.taxCents += d.inv.totals.taxCents;
    b.totalCents += d.inv.totals.totalCents;
    b.usd += d.netUSD; b.eur += d.netEUR;
    if (d.inv.type !== 'credit_note') b.count += 1;
    m.set(c, b);
  }
  return [...m.values()].sort((a, b) => b.usd - a.usd);
}

export function expensesByCategory(data, scope) {
  const m = new Map();
  for (const d of expenseDocs(data, scope)) {
    const k = d.exp.category || 'Ohne Kategorie';
    const b = m.get(k) || { name: k, usd: 0, eur: 0, taxUSD: 0, count: 0 };
    b.usd += d.netUSD; b.eur += d.netEUR; b.taxUSD += d.taxUSD; b.count += 1;
    m.set(k, b);
  }
  return [...m.values()].sort((a, b) => b.usd - a.usd);
}

export function expensesByVendor(data, scope) {
  const m = new Map();
  for (const d of expenseDocs(data, scope)) {
    const k = d.exp.vendor || 'Ohne Lieferant';
    const b = m.get(k) || { name: k, usd: 0, eur: 0, count: 0 };
    b.usd += d.netUSD; b.eur += d.netEUR; b.count += 1;
    m.set(k, b);
  }
  return [...m.values()].sort((a, b) => b.usd - a.usd);
}

/** Finanzübersicht für einen Zeitraum. */
export function financeSummary(data, scope, today) {
  const rev = revenueDocs(data, scope);
  const exp = expenseDocs(data, scope);
  const pay = paymentDocs(data, scope);
  const rec = receivables(data, { companyId: scope.companyId }, today);
  const incomeUSD = sum(rev, 'netUSD');
  const incomeEUR = sum(rev, 'netEUR');
  const expenseUSD = sum(exp, 'netUSD');
  const expenseEUR = sum(exp, 'netEUR');
  return {
    income: { usd: incomeUSD, eur: incomeEUR, count: rev.filter((d) => d.inv.type !== 'credit_note').length },
    expenses: { usd: expenseUSD, eur: expenseEUR, count: exp.length },
    profit: { usd: incomeUSD - expenseUSD, eur: incomeEUR - expenseEUR },
    payments: { usd: sum(pay, 'usd'), eur: sum(pay, 'eur'), count: pay.length },
    receivables: { usd: sum(rec, 'openUSD'), eur: sum(rec, 'openEUR'), count: rec.length },
    taxCollected: { usd: sum(rev, 'taxUSD'), eur: sum(rev, 'taxEUR') },
    taxPaid: { usd: sum(exp, 'taxUSD'), eur: sum(exp, 'taxEUR') },
    taxBalance: { usd: sum(rev, 'taxUSD') - sum(exp, 'taxUSD'), eur: sum(rev, 'taxEUR') - sum(exp, 'taxEUR') },
  };
}

/** Steuerübersicht: berechnete Steuer je Steuersatz (in Rechnungswährung getrennt) und gezahlte Steuer. */
export function taxOverview(data, scope) {
  const m = new Map();
  for (const d of revenueDocs(data, scope)) {
    const groups = d.inv.totals.taxGroups || [];
    // Den umgerechneten Steuerbetrag des Belegs auf die Steuersätze verteilen – so stimmt die Summe
    // auf den Cent mit der Finanzübersicht überein.
    const taxParts = allocate(d.taxUSD, groups.map((g) => g.taxCents));
    const netParts = allocate(d.netUSD, groups.map((g) => g.netCents));
    groups.forEach((g, i) => {
      const key = `${g.rate}|${d.inv.currency}`;
      const b = m.get(key) || { rate: g.rate, currency: d.inv.currency, netCents: 0, taxCents: 0, netUSD: 0, taxUSD: 0 };
      b.netCents += g.netCents; b.taxCents += g.taxCents;
      b.netUSD += netParts[i] || 0;
      b.taxUSD += taxParts[i] || 0;
      m.set(key, b);
    });
  }
  const collected = [...m.values()].sort((a, b) => (a.rate - b.rate) || a.currency.localeCompare(b.currency));
  const exp = expenseDocs(data, scope);
  return {
    collected,
    collectedUSD: collected.reduce((a, r) => a + r.taxUSD, 0),
    paidUSD: sum(exp, 'taxUSD'),
  };
}

export function rangeMonths(range, data, companyId) {
  // Für „Gesamter Zeitraum“ den tatsächlichen Datenbereich bestimmen.
  let from = range.from, to = range.to;
  if (from < '1900' || to > '2200') {
    const invById = new Map(data.invoices.map((i) => [i.id, i]));
    const dates = [
      ...data.invoices.filter((i) => countsAsRevenue(i) && inCompany(i, companyId)).map((i) => i.issueDate),
      ...data.expenses.filter((e) => e.status === 'booked' && inCompany(e, companyId)).map((e) => e.invoiceDate),
      ...data.payments.filter((p) => invById.has(p.invoiceId) && inCompany(invById.get(p.invoiceId), companyId)).map((p) => p.date),
    ].filter(Boolean).sort();
    if (!dates.length) return [];
    if (from < '1900') from = dates[0];
    if (to > '2200') to = dates[dates.length - 1];
  }
  return monthsBetween(from, to);
}
