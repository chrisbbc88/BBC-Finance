// Auswertungen gegen einen kleinen, von Hand nachgerechneten Datenbestand prüfen.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeTotals, fxForDoc } from '../js/lib/calc.js';
import {
  revenueDocs, dashboardKpis, receivables, financeSummary, revenueByCustomer, revenueByService,
  revenueByCompany, revenueByCurrency, monthlySeries, expensesByCategory, taxOverview, revenueByPeriod, paymentDocs,
} from '../js/lib/reports.js';
import { parsers } from '../js/lib/fx.js';
import { buildRequest, parseResponse, AIError } from '../js/lib/ai.js';
import { toCSV } from '../js/lib/export.js';
import { inspectBackup, cleanSettings, BACKUP_FORMAT } from '../js/lib/backup.js';

const TODAY = '2026-10-08';
const inv = (o) => {
  const doc = { type: 'invoice', status: 'issued', discount: { type: 'pct', value: 0 }, ...o };
  doc.totals = computeTotals(doc);
  return doc;
};
const item = (id, qty, priceCents, taxRate = 0, serviceId = '') => ({ id, qty, priceCents, taxRate, serviceId, name: id });

const FX = 0.8; // 1 USD = 0,80 EUR  →  1 EUR = 1,25 USD
const data = {
  companies: [{ id: 'hl', name: 'Hey Lemon', brandColor: '#fc0' }, { id: 'bbc', name: 'BBC', brandColor: '#00f' }],
  customers: [{ id: 'c1', company: 'Alpha GmbH', active: true }, { id: 'c2', company: 'Beta Inc.', active: true }, { id: 'c3', company: 'Gamma', active: false }],
  services: [{ id: 's1', name: 'SEO', category: 'SEO' }, { id: 's2', name: 'Website', category: 'Web' }],
  quotes: [],
  invoices: [
    // Oktober: USD 1.000 netto, bezahlt
    inv({ id: 'i1', number: 'HL 1', companyId: 'hl', customerId: 'c1', issueDate: '2026-10-02', dueDate: '2026-10-16', currency: 'USD', fx: fxForDoc('USD', FX), items: [item('a', 1, 100000, 0, 's1')] }),
    // Oktober: EUR 800 netto + 19 % = 952 EUR brutto → 1.000 USD netto, 1.190 USD brutto; halb bezahlt
    inv({ id: 'i2', number: 'BBC 1', companyId: 'bbc', customerId: 'c2', issueDate: '2026-10-05', dueDate: '2026-10-19', currency: 'EUR', fx: fxForDoc('EUR', FX), items: [item('b', 2, 40000, 19, 's2')] }),
    // September: USD 500, überfällig seit 2026-09-20
    inv({ id: 'i3', number: 'HL 2', companyId: 'hl', customerId: 'c2', issueDate: '2026-09-06', dueDate: '2026-09-20', currency: 'USD', fx: fxForDoc('USD', FX), items: [item('c', 5, 10000, 0, 's1')] }),
    // Juli: USD 300 – storniert, zählt nicht
    inv({ id: 'i4', number: 'HL 3', companyId: 'hl', customerId: 'c1', issueDate: '2026-07-10', dueDate: '2026-07-24', currency: 'USD', status: 'cancelled', fx: fxForDoc('USD', FX), items: [item('d', 1, 30000)] }),
    // August: USD 200 mit Gutschrift im Oktober (−200)
    inv({ id: 'i5', number: 'HL 4', companyId: 'hl', customerId: 'c1', issueDate: '2026-08-10', dueDate: '2026-08-24', currency: 'USD', status: 'credited', fx: fxForDoc('USD', FX), items: [item('e', 1, 20000, 0, 's2')] }),
    inv({ id: 'i6', number: 'HL GS 1', type: 'credit_note', companyId: 'hl', customerId: 'c1', issueDate: '2026-10-07', currency: 'USD', fx: fxForDoc('USD', FX), relatedInvoiceId: 'i5', items: [item('f', -1, 20000, 0, 's2')] }),
    // Entwurf – zählt nicht
    inv({ id: 'i7', number: null, companyId: 'hl', customerId: 'c1', issueDate: '2026-10-08', currency: 'USD', status: 'draft', fx: fxForDoc('USD', FX), items: [item('g', 1, 999900)] }),
    // Vorjahr
    inv({ id: 'i8', number: 'HL 0', companyId: 'hl', customerId: 'c1', issueDate: '2025-12-15', dueDate: '2025-12-29', currency: 'USD', fx: fxForDoc('USD', FX), items: [item('h', 1, 70000, 0, 's1')] }),
  ],
  payments: [
    { id: 'p1', invoiceId: 'i1', date: '2026-10-06', amountCents: 100000 },
    { id: 'p2', invoiceId: 'i2', date: '2026-10-07', amountCents: 47600 },
    { id: 'p3', invoiceId: 'i8', date: '2026-01-05', amountCents: 70000 },
  ],
  expenses: [
    { id: 'e1', status: 'booked', companyId: 'hl', category: 'Software', vendor: 'A', invoiceDate: '2026-10-03', currency: 'USD', netCents: 10000, taxCents: 0, totalCents: 10000, fx: { rateToUSD: 1, usdToEur: FX } },
    { id: 'e2', status: 'booked', companyId: 'bbc', category: 'Reisen', vendor: 'B', invoiceDate: '2026-10-04', currency: 'AED', netCents: 100000, taxCents: 5000, totalCents: 105000, fx: { rateToUSD: 0.25, usdToEur: FX } },
    { id: 'e3', status: 'review', companyId: 'hl', category: 'Software', vendor: 'C', invoiceDate: '2026-10-04', currency: 'USD', netCents: 99900, taxCents: 0, totalCents: 99900, fx: { rateToUSD: 1, usdToEur: FX } },
    { id: 'e4', status: 'booked', companyId: 'hl', category: 'Software', vendor: 'A', invoiceDate: '2026-09-03', currency: 'EUR', netCents: 8000, taxCents: 1520, totalCents: 9520, fx: { rateToUSD: 1.25, usdToEur: FX } },
  ],
};

test('Umsatzbelege: Entwurf und Storno zählen nicht, Gutschrift negativ', () => {
  const docs = revenueDocs(data, { range: { from: '2026-01-01', to: '2026-12-31' } });
  assert.deepEqual(docs.map((d) => d.inv.id).sort(), ['i1', 'i2', 'i3', 'i5', 'i6']);
  const i2 = docs.find((d) => d.inv.id === 'i2');
  assert.equal(i2.inv.totals.totalCents, 95200);
  assert.equal(i2.netUSD, 100000);
  assert.equal(i2.netEUR, 80000);
  assert.equal(i2.taxUSD, 19000);
  assert.equal(i2.totalUSD, 119000);
  assert.equal(docs.find((d) => d.inv.id === 'i6').netUSD, -20000);
});

test('Dashboard-Kennzahlen', () => {
  const k = dashboardKpis(data, null, TODAY);
  assert.equal(k.month.usd, 100000 + 100000 - 20000);        // i1 + i2 − Gutschrift
  assert.equal(k.month.eur, 80000 + 80000 - 16000);
  assert.equal(k.lastMonth.usd, 50000);
  assert.equal(k.quarter.usd, 180000);
  assert.equal(k.year.usd, 180000 + 50000 + 20000);          // + i3 + i5
  assert.equal(k.open.count, 2);                              // i2 (Rest) und i3
  assert.equal(k.open.usd, 59500 + 50000);                    // 476 EUR offen = 595 USD
  assert.equal(k.overdue.count, 1);
  assert.equal(k.overdue.usd, 50000);
  assert.equal(k.paid.count, 1);                              // nur i1 (2026)
  assert.equal(k.paid.usd, 100000);
  assert.equal(k.average.count, 3);                           // i1, i2, i3 (ohne Gutschrift und gutgeschriebene)
  assert.equal(k.average.usd, Math.round(250000 / 3));
  assert.equal(k.activeCustomers, 2);
  const hl = dashboardKpis(data, 'hl', TODAY);
  assert.equal(hl.month.usd, 80000);
  assert.equal(hl.open.usd, 50000);
  assert.equal(hl.activeCustomers, 2);
  assert.equal(dashboardKpis(data, 'bbc', TODAY).activeCustomers, 1);
});

test('Offene Posten und Altersstruktur', () => {
  const rec = receivables(data, {}, TODAY);
  assert.deepEqual(rec.map((r) => r.inv.id), ['i3', 'i2']);
  assert.equal(rec[0].status, 'overdue');
  assert.equal(rec[0].overdueDays, 18);
  assert.equal(rec[0].bucket, 'd30');
  assert.equal(rec[1].status, 'partial');
  assert.equal(rec[1].openCents, 47600);
  assert.equal(rec[1].bucket, 'current');
});

test('Finanzübersicht Oktober', () => {
  const s = financeSummary(data, { range: { from: '2026-10-01', to: '2026-10-31' } }, TODAY);
  assert.equal(s.income.usd, 180000);
  assert.equal(s.income.count, 2);
  assert.equal(s.expenses.usd, 10000 + 25000);                // e1 + e2 (1.000 AED × 0,25); e3 ungeprüft
  assert.equal(s.expenses.count, 2);
  assert.equal(s.profit.usd, 145000);
  assert.equal(s.profit.eur, 144000 - 28000);
  assert.equal(s.payments.usd, 100000 + 59500);
  assert.equal(s.receivables.usd, 109500);
  assert.equal(s.taxCollected.usd, 19000);
  assert.equal(s.taxPaid.usd, 1250);
  assert.equal(s.taxBalance.usd, 17750);
});

test('Umsatz nach Kunde, Unternehmen, Leistung, Währung – Summen stimmen überein', () => {
  const scope = { range: { from: '2026-01-01', to: '2026-12-31' } };
  const total = revenueDocs(data, scope).reduce((a, d) => a + d.netUSD, 0);
  assert.equal(total, 250000);
  const sum = (rows) => rows.reduce((a, r) => a + r.usd, 0);
  const byCustomer = revenueByCustomer(data, scope);
  assert.equal(sum(byCustomer), total);
  assert.deepEqual(byCustomer.map((r) => [r.name, r.usd]), [['Beta Inc.', 150000], ['Alpha GmbH', 100000]]);
  const byCompany = revenueByCompany(data, scope);
  assert.equal(sum(byCompany), total);
  assert.deepEqual(byCompany.map((r) => [r.id, r.usd]), [['hl', 150000], ['bbc', 100000]]);
  const byService = revenueByService(data, scope);
  assert.equal(sum(byService), total);
  assert.deepEqual(byService.map((r) => [r.name, r.usd]), [['SEO', 150000], ['Website', 100000]]);
  const byCurrency = revenueByCurrency(data, scope);
  assert.equal(sum(byCurrency), total);
  assert.deepEqual(byCurrency.map((r) => [r.currency, r.netCents, r.count]), [['USD', 150000, 3], ['EUR', 80000, 1]]);
});

test('Monatsreihe und Perioden', () => {
  const s = monthlySeries(data, { months: ['2026-08', '2026-09', '2026-10'] });
  assert.deepEqual(s.map((m) => m.revenueUSD), [20000, 50000, 180000]);
  assert.deepEqual(s.map((m) => m.expenseUSD), [0, 10000, 35000]);
  assert.deepEqual(s.map((m) => m.profitUSD), [20000, 40000, 145000]);
  assert.deepEqual(s[2].byCompany, { hl: 80000, bbc: 100000 });
  const q = revenueByPeriod(data, { range: { from: '2026-01-01', to: '2026-12-31' } }, 'quarter');
  assert.deepEqual(q.map((r) => [r.key, r.usd]), [['2026-Q3', 70000], ['2026-Q4', 180000]]);
  const y = revenueByPeriod(data, {}, 'year');
  assert.deepEqual(y.map((r) => [r.key, r.usd]), [['2025', 70000], ['2026', 250000]]);
});

test('Kosten, Steuern, Zahlungseingänge', () => {
  const scope = { range: { from: '2026-01-01', to: '2026-12-31' } };
  assert.deepEqual(expensesByCategory(data, scope).map((r) => [r.name, r.usd, r.count]), [['Reisen', 25000, 1], ['Software', 20000, 2]]);
  const t = taxOverview(data, scope);
  assert.equal(t.collectedUSD, 19000);
  assert.equal(t.paidUSD, 1250 + 1900);
  assert.deepEqual(t.collected.filter((r) => r.rate === 19).map((r) => [r.currency, r.netCents, r.taxCents]), [['EUR', 80000, 15200]]);
  const pay = paymentDocs(data, scope);
  assert.equal(pay.reduce((a, p) => a + p.usd, 0), 100000 + 59500 + 70000);
  assert.equal(paymentDocs(data, { companyId: 'bbc', range: scope.range }).length, 1);
});

test('Wechselkurs-Antworten der Anbieter', () => {
  assert.deepEqual(parsers.frankfurterV2({ date: '2026-10-08', base: 'USD', quote: 'EUR', rate: 0.89153 }, 'USD', 'EUR'),
    { rate: 0.89153, date: '2026-10-08', source: 'Frankfurter (Zentralbank-Referenzkurse)' });
  assert.equal(parsers.frankfurterV1({ amount: 1, base: 'USD', date: '2026-10-07', rates: { EUR: 0.89469 } }, 'USD', 'EUR').rate, 0.89469);
  const er = parsers.erApi({ result: 'success', time_last_update_unix: 1791331352, rates: { EUR: 0.888741 } }, 'USD', 'EUR');
  assert.equal(er.rate, 0.888741);
  assert.equal(er.date, '2026-10-07');
  assert.throws(() => parsers.frankfurterV2({ status: 422, message: 'invalid currency' }, 'USD', 'XXX'));
  assert.throws(() => parsers.frankfurterV1({ rates: {} }, 'USD', 'EUR'));
  assert.throws(() => parsers.erApi({ result: 'error' }, 'USD', 'EUR'));
  assert.throws(() => parsers.frankfurterV2({ rate: 0 }, 'USD', 'EUR'));
});

test('KI-Belegerkennung: Anfrage und Auswertung der Antwort', () => {
  const cats = ['Software', 'Reisen', 'Sonstiges'];
  const methods = ['Kreditkarte', 'Bar'];
  const reqImg = buildRequest({ model: 'claude-haiku-5-5', base64: 'AAAA', mime: 'image/jpeg', categories: cats, paymentMethods: methods });
  assert.equal(reqImg.messages[0].content[0].type, 'image');
  assert.deepEqual(reqImg.messages[0].content[0].source, { type: 'base64', media_type: 'image/jpeg', data: 'AAAA' });
  assert.deepEqual(reqImg.tool_choice, { type: 'tool', name: 'record_receipt' });
  assert.deepEqual(reqImg.tools[0].input_schema.properties.category.enum, cats);
  const reqPdf = buildRequest({ model: 'm', base64: 'BBBB', mime: 'application/pdf', categories: cats, paymentMethods: methods });
  assert.equal(reqPdf.messages[0].content[0].type, 'document');
  assert.equal(reqPdf.messages[0].content[0].source.media_type, 'application/pdf');

  const resp = (input) => ({ content: [{ type: 'tool_use', name: 'record_receipt', input }], usage: { input_tokens: 1 } });
  const ok = parseResponse(resp({
    is_receipt: true, vendor: ' Pixelgarten ', description: 'Jahresabo', invoice_number: 'R-77', invoice_date: '2026-09-30', payment_date: '',
    currency: 'eur', net_amount: 100, tax_amount: 19, total_amount: 119, payment_method: 'Kreditkarte', category: 'Software', uncertain_fields: ['invoice_date'],
  }), { categories: cats, paymentMethods: methods });
  assert.deepEqual(ok.fields, {
    vendor: 'Pixelgarten', description: 'Jahresabo', invoiceNumber: 'R-77', invoiceDate: '2026-09-30', paymentDate: '',
    currency: 'EUR', netCents: 10000, taxCents: 1900, totalCents: 11900, paymentMethod: 'Kreditkarte', category: 'Software',
  });
  assert.deepEqual(ok.uncertain, ['invoice_date']);
  assert.deepEqual(ok.warnings, []);

  // Netto fehlt → aus Gesamt und Steuer ergänzt; unbekannte Kategorie und Zahlungsart verworfen; kaputtes Datum gemeldet
  const fixed = parseResponse(resp({ is_receipt: true, vendor: 'X', currency: 'USD', net_amount: 0, tax_amount: 7, total_amount: 107, category: 'Erfunden', payment_method: 'Scheck', invoice_date: '30.09.2026' }), { categories: cats, paymentMethods: methods });
  assert.equal(fixed.fields.netCents, 10000);
  assert.equal(fixed.fields.category, '');
  assert.equal(fixed.fields.paymentMethod, '');
  assert.equal(fixed.fields.invoiceDate, '');
  assert.equal(fixed.warnings.length, 1);

  const mismatch = parseResponse(resp({ is_receipt: true, vendor: 'X', currency: 'USD', net_amount: 50, tax_amount: 5, total_amount: 80, category: 'Reisen', invoice_date: '2026-01-01' }), { categories: cats, paymentMethods: methods });
  assert.ok(mismatch.warnings.some((w) => w.includes('Netto und Steuer')));
  const badCur = parseResponse(resp({ is_receipt: true, vendor: 'X', currency: 'XYZ', net_amount: 1, tax_amount: 0, total_amount: 1, category: 'Reisen', invoice_date: '2026-01-01' }), { categories: cats, paymentMethods: methods });
  assert.equal(badCur.fields.currency, '');
  assert.throws(() => parseResponse(resp({ is_receipt: false, vendor: '', currency: '', net_amount: 0, tax_amount: 0, total_amount: 0, category: 'Reisen' }), { categories: cats, paymentMethods: methods }), AIError);
  assert.throws(() => parseResponse({ content: [{ type: 'text', text: 'hi' }] }, { categories: cats, paymentMethods: methods }), AIError);
});

test('CSV-Export: Semikolon, Dezimalkomma, Schutz vor Formeln', () => {
  const csv = toCSV({
    columns: [{ label: 'Kunde' }, { label: 'Betrag' }],
    rows: [['Müller; Söhne "GmbH"', { v: 1234.5, t: '1.234,50 $' }], ['=HYPERLINK("x")', { v: -5, t: '-5,00 $' }]],
    totals: ['Summe', { v: 1229.5, t: '' }],
  });
  const lines = csv.replace('﻿', '').trim().split('\r\n');
  assert.equal(lines[0], 'Kunde;Betrag');
  assert.equal(lines[1], '"Müller; Söhne ""GmbH""";1234,5');
  assert.equal(lines[2], '"\'=HYPERLINK(""x"")";-5');
  assert.equal(lines[3], 'Summe;1229,5');
  assert.ok(csv.startsWith('﻿'));
});

test('Backup-Prüfung weist fremde und beschädigte Dateien ab', () => {
  assert.throws(() => inspectBackup({ foo: 1 }), /keine Backup-Datei/);
  assert.throws(() => inspectBackup({ format: BACKUP_FORMAT, schemaVersion: 99, data: {} }), /neueren Version/);
  const co = [{ id: 'c' }];
  const totals = { totalCents: 1, netCents: 1, taxCents: 0 };
  const base = (data) => ({ format: BACKUP_FORMAT, schemaVersion: 1, data: { companies: co, ...data } });
  assert.throws(() => inspectBackup(base({ invoices: [{ number: 'x' }] })), /ohne Schlüssel/);
  assert.throws(() => inspectBackup(base({ invoices: [{ id: 'a', number: 'HL 1', status: 'issued', items: [], totals }, { id: 'b', number: 'HL 1', status: 'issued', items: [], totals }] })), /doppelt/);
  assert.throws(() => inspectBackup({ format: BACKUP_FORMAT, schemaVersion: 1, data: [] }), /keine Daten/);
  assert.throws(() => inspectBackup({ format: BACKUP_FORMAT, schemaVersion: 1, data: {} }), /kein Unternehmen/);
  assert.throws(() => inspectBackup(base({ invoices: [{ id: 'a', number: 'HL 1', status: 'issued', items: 'x', totals }] })), /Positionsliste/);
  assert.throws(() => inspectBackup(base({ invoices: [{ id: 'a', number: 'HL 1', status: 'issued', items: [], totals: null }] })), /ohne Summen/);
  assert.throws(() => inspectBackup(base({ payments: [{ id: 'p', invoiceId: 'a', amountCents: '5' }] })), /Zahlung/);
  assert.throws(() => inspectBackup(base({ assets: [{ id: 'x', dataUrl: 'javascript:alert(1)' }] })), /Logo/);
  const info = inspectBackup({ ...base({ invoices: [{ id: 'a', number: null, status: 'draft', items: [] }, { id: 'b', number: null, status: 'draft', items: [] }], counters: [{ key: 'k' }] }), exportedAt: '2026-10-08T10:00:00Z', includesFiles: true, files: { a: 'data:,x' } });
  assert.equal(info.counts.invoices, 2);
  assert.equal(info.fileCount, 1);
});

test('Einstellungen aus einem Backup: nur bekannte Schlüssel mit passendem Typ', () => {
  const raw = JSON.parse('{"__proto__":{"polluted":"yes"},"expenseCategories":"x","paymentMethods":["Bar",5],"serviceCategories":["A","B"],"reminderDays":[1,2,"3"],"theme":"neon","userName":"Chris","aiApiKey":"sk-geheim","changesSinceBackup":99,"unbekannt":1,"shrinkImages":"ja","warnOnClose":false,"emailTemplates":[]}');
  const out = cleanSettings(raw);
  assert.deepEqual(out, { userName: 'Chris', warnOnClose: false, serviceCategories: ['A', 'B'] });
  assert.equal({}.polluted, undefined);
  assert.deepEqual(cleanSettings(null), {});
});
