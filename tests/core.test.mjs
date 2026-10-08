// Unit-Tests der Rechen- und Nummernlogik. Start: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  roundDiv, toCents, lineTotalCents, allocate, computeTotals, convertCents, fxForDoc,
  invoiceStatus, openCents, quoteStatus,
} from '../js/lib/calc.js';
import { formatNumber, scopeOf, validatePattern, nextNumber, counterKey, numberingOf } from '../js/lib/numbering.js';
import { parseNum, addMonths, addDays, periodRange, monthsBetween, isISODate, daysBetween } from '../js/lib/util.js';
import { money, moneyDoc, date } from '../js/lib/format.js';

test('roundDiv rundet kaufmännisch, auch negativ', () => {
  assert.equal(roundDiv(5, 10), 1);
  assert.equal(roundDiv(4, 10), 0);
  assert.equal(roundDiv(15, 10), 2);
  assert.equal(roundDiv(-5, 10), -1);
  assert.equal(roundDiv(-15, 10), -2);
  assert.equal(roundDiv(-14, 10), -1);
});

test('toCents ohne Gleitkommafehler', () => {
  assert.equal(toCents(1.005), 101);
  assert.equal(toCents(19.99), 1999);
  assert.equal(toCents(0.1 + 0.2), 30);
  assert.equal(toCents(-1.005), -101);
  assert.equal(toCents(5000), 500000);
  assert.equal(toCents('abc'), 0);
});

test('Positionsbetrag: Menge × Preis − Rabatt', () => {
  assert.equal(lineTotalCents({ qty: 1, priceCents: 500000 }), 500000);
  assert.equal(lineTotalCents({ qty: 2.5, priceCents: 9900 }), 24750);
  assert.equal(lineTotalCents({ qty: 1.15, priceCents: 100 }), 115);
  assert.equal(lineTotalCents({ qty: 3, priceCents: 3333, discountPct: 10 }), 8999); // 99.99 − 10 % = 89.991
  assert.equal(lineTotalCents({ qty: 0.333, priceCents: 1000 }), 333);
  assert.equal(lineTotalCents({ qty: -2, priceCents: 1050 }), -2100);
  assert.equal(lineTotalCents({ qty: 1, priceCents: 1000, discountPct: 100 }), 0);
  assert.equal(lineTotalCents({ qty: 1, priceCents: 1000, discountPct: 150 }), 0);
});

test('allocate verteilt exakt', () => {
  assert.deepEqual(allocate(100, [1, 1, 1]), [34, 33, 33]);
  assert.equal(allocate(1001, [3, 7]).reduce((a, b) => a + b, 0), 1001);
  assert.deepEqual(allocate(-100, [1, 1, 1]), [-34, -33, -33]);
  assert.deepEqual(allocate(50, [0, 0]), [50, 0]);
  assert.deepEqual(allocate(0, [5, 5]), [0, 0]);
});

test('Summen ohne Steuer und Rabatt', () => {
  const t = computeTotals({ items: [{ id: 'a', qty: 1, priceCents: 500000, taxRate: 0 }] });
  assert.equal(t.subtotalCents, 500000);
  assert.equal(t.discountCents, 0);
  assert.equal(t.taxCents, 0);
  assert.equal(t.totalCents, 500000);
});

test('Summen mit 19 % Steuer und 10 % Rabatt', () => {
  const t = computeTotals({
    items: [
      { id: 'a', qty: 10, priceCents: 9500, taxRate: 19 },   // 950,00
      { id: 'b', qty: 1, priceCents: 4999, taxRate: 19 },    // 49,99
    ],
    discount: { type: 'pct', value: 10 },
  });
  assert.equal(t.subtotalCents, 99999);
  assert.equal(t.discountCents, 10000);       // 9999,9 → 10000
  assert.equal(t.netCents, 89999);
  assert.equal(t.taxCents, 17100);            // 899,99 × 19 % = 170,9981 → 171,00
  assert.equal(t.totalCents, 107099);
  assert.equal(t.lines.reduce((a, l) => a + l.netCents, 0), t.netCents);
});

test('Gemischte Steuersätze: Rabatt wird anteilig verteilt', () => {
  const t = computeTotals({
    items: [
      { id: 'a', qty: 1, priceCents: 10000, taxRate: 19 },
      { id: 'b', qty: 1, priceCents: 20000, taxRate: 7 },
      { id: 'c', qty: 1, priceCents: 5000, taxRate: 0 },
    ],
    discount: { type: 'abs', value: 3500 },
  });
  assert.equal(t.subtotalCents, 35000);
  assert.equal(t.discountCents, 3500);
  const g = Object.fromEntries(t.taxGroups.map((x) => [x.rate, x]));
  assert.equal(g[19].netCents, 9000);
  assert.equal(g[7].netCents, 18000);
  assert.equal(g[0].netCents, 4500);
  assert.equal(g[19].taxCents, 1710);
  assert.equal(g[7].taxCents, 1260);
  assert.equal(t.totalCents, 31500 + 1710 + 1260);
  assert.equal(t.taxGroups.reduce((a, x) => a + x.netCents, 0), t.netCents);
});

test('Absoluter Rabatt wird auf die Zwischensumme begrenzt', () => {
  const t = computeTotals({ items: [{ id: 'a', qty: 1, priceCents: 1000, taxRate: 0 }], discount: { type: 'abs', value: 5000 } });
  assert.equal(t.discountCents, 1000);
  assert.equal(t.totalCents, 0);
});

test('Gutschrift ist exakt das Negativ der Rechnung', () => {
  const items = [
    { id: 'a', qty: 3, priceCents: 3333, discountPct: 7.5, taxRate: 19 },
    { id: 'b', qty: 1.25, priceCents: 8999, taxRate: 7 },
    { id: 'c', qty: 2, priceCents: 1, taxRate: 19 },
  ];
  for (const discount of [{ type: 'pct', value: 12.5 }, { type: 'abs', value: 777 }, { type: 'pct', value: 0 }]) {
    const pos = computeTotals({ items, discount });
    const neg = computeTotals({ items: items.map((i) => ({ ...i, qty: -i.qty })), discount });
    for (const k of ['subtotalCents', 'discountCents', 'netCents', 'taxCents', 'totalCents']) {
      assert.equal(neg[k] + pos[k], 0, `${k} bei ${JSON.stringify(discount)}`);
      assert.ok(!Object.is(neg[k], -0), `${k} darf nicht -0 sein`);
    }
  }
});

test('Textzeilen und leere Dokumente', () => {
  const t = computeTotals({ items: [] });
  assert.equal(t.totalCents, 0);
  assert.deepEqual(t.taxGroups, []);
  assert.equal(computeTotals({}).totalCents, 0);
});

test('Währungsumrechnung mit gespeichertem Kurs', () => {
  const usd = fxForDoc('USD', 0.8641);
  assert.equal(convertCents(500000, 'USD', 'EUR', usd), 432050);
  assert.equal(convertCents(500000, 'USD', 'USD', usd), 500000);
  const eur = fxForDoc('EUR', 0.8641);
  assert.equal(convertCents(432050, 'EUR', 'EUR', eur), 432050);
  assert.equal(convertCents(432050, 'EUR', 'USD', eur), 500000);
  assert.equal(convertCents(100, 'USD', 'EUR', null), null);
  assert.equal(fxForDoc('USD', 0), null);
  // Ausgabe in AED: 1 AED = 0.27229 USD, 1 USD = 0.86215 EUR
  const aed = { rateToUSD: 0.27229, usdToEur: 0.86215 };
  assert.equal(convertCents(100000, 'AED', 'USD', aed), 27229);
  assert.equal(convertCents(100000, 'AED', 'EUR', aed), 23475);
});

test('Rechnungsstatus aus Zahlungen und Fälligkeit', () => {
  const inv = { status: 'issued', dueDate: '2026-10-20', totals: { totalCents: 500000 } };
  assert.equal(invoiceStatus(inv, [], '2026-10-08'), 'issued');
  assert.equal(invoiceStatus({ ...inv, status: 'sent' }, [], '2026-10-08'), 'sent');
  assert.equal(invoiceStatus(inv, [{ amountCents: 250000 }], '2026-10-08'), 'partial');
  assert.equal(openCents(inv, [{ amountCents: 250000 }]), 250000);
  assert.equal(invoiceStatus(inv, [{ amountCents: 250000 }, { amountCents: 250000 }], '2026-10-08'), 'paid');
  assert.equal(openCents(inv, [{ amountCents: 250000 }, { amountCents: 250000 }]), 0);
  assert.equal(invoiceStatus(inv, [], '2026-10-21'), 'overdue');
  assert.equal(invoiceStatus(inv, [], '2026-10-20'), 'issued');   // am Fälligkeitstag noch nicht überfällig
  assert.equal(invoiceStatus(inv, [{ amountCents: 1 }], '2026-10-21'), 'overdue');
  assert.equal(invoiceStatus({ ...inv, status: 'draft' }, [], '2026-12-01'), 'draft');
  assert.equal(invoiceStatus({ ...inv, status: 'cancelled' }, [], '2026-12-01'), 'cancelled');
  assert.equal(openCents({ ...inv, status: 'cancelled' }, []), 0);
  assert.equal(openCents({ ...inv, status: 'credited' }, []), 0);
  assert.equal(invoiceStatus({ ...inv, type: 'credit_note' }, [], '2026-12-01'), 'credit_note');
});

test('Angebotsstatus', () => {
  assert.equal(quoteStatus({ status: 'open', validUntil: '2026-10-01' }, '2026-10-08'), 'expired');
  assert.equal(quoteStatus({ status: 'sent', validUntil: '2026-10-31' }, '2026-10-08'), 'sent');
  assert.equal(quoteStatus({ status: 'accepted', validUntil: '2026-10-01' }, '2026-10-08'), 'accepted');
  assert.equal(quoteStatus({ status: 'open' }, '2026-10-08'), 'open');
});

test('Nummernmuster', () => {
  assert.equal(formatNumber('{COMPANY} {YEAR} {NUMBER}', { prefix: 'HL', dateISO: '2026-10-08', n: 1, digits: 3 }), 'HL 2026 001');
  assert.equal(formatNumber('{COMPANY}-{YEAR}{MONTH}-{NUMBER}', { prefix: 'BBC', dateISO: '2026-03-08', n: 42, digits: 4 }), 'BBC-202603-0042');
  assert.equal(formatNumber('{COMPANY} {YEAR} {NUMBER}', { prefix: 'HL', dateISO: '2026-10-08', n: 1234, digits: 3 }), 'HL 2026 1234');
  assert.equal(validatePattern('{COMPANY} {YEAR}'), 'Das Muster braucht den Platzhalter {NUMBER}.');
  assert.equal(validatePattern('{COMPANY} {JAHR} {NUMBER}'), 'Unbekannter Platzhalter: {JAHR}');
  assert.equal(validatePattern('{COMPANY} {YEAR} {NUMBER}'), '');
  assert.equal(scopeOf('{COMPANY} {YEAR} {NUMBER}', '2026-10-08'), '2026');
  assert.equal(scopeOf('{COMPANY} {YEAR}{MONTH} {NUMBER}', '2026-10-08'), '2026-10');
  assert.equal(scopeOf('RE-{NUMBER}', '2026-10-08'), 'all');
  assert.equal(counterKey('c1', 'invoice', '{COMPANY} {YEAR} {NUMBER}', '2027-01-02'), 'c1:invoice:2027');
});

test('Nächste Nummer überspringt vergebene Nummern', async () => {
  const company = { invoicePrefix: 'HL', invoicePattern: '{COMPANY} {YEAR} {NUMBER}', numberDigits: 3 };
  const taken = new Set(['HL 2026 001', 'HL 2026 002', 'HL 2026 004']);
  const a = await nextNumber(company, 'invoice', '2026-10-08', 0, (n) => taken.has(n));
  assert.deepEqual(a, { number: 'HL 2026 003', n: 3 });
  const b = await nextNumber(company, 'invoice', '2026-10-08', 3, async (n) => taken.has(n));
  assert.deepEqual(b, { number: 'HL 2026 005', n: 5 });
  assert.equal(numberingOf({ invoicePrefix: 'HL', numberDigits: 3 }, 'credit').prefix, 'HL GS');
  assert.equal(numberingOf({ invoicePrefix: 'HL', quotePrefix: 'HL-A' }, 'quote').prefix, 'HL-A');
});

test('Zahlen-Eingabe deutsch und englisch', () => {
  assert.equal(parseNum('1.234,56'), 1234.56);
  assert.equal(parseNum('1,234.56'), 1234.56);
  assert.equal(parseNum('1234,5'), 1234.5);
  assert.equal(parseNum('1234.5'), 1234.5);
  assert.equal(parseNum('1.000'), 1000);
  assert.equal(parseNum('12.500.000'), 12500000);
  assert.equal(parseNum('1.5'), 1.5);
  assert.equal(parseNum('0,5'), 0.5);
  assert.equal(parseNum('5 000,00 €'), 5000);
  assert.equal(parseNum('$5,000.00'), 5000);
  assert.equal(parseNum('-12,5'), -12.5);
  assert.equal(parseNum('(12,50)'), -12.5);
  assert.ok(Number.isNaN(parseNum('')));
  assert.ok(Number.isNaN(parseNum('abc')));
  assert.ok(Number.isNaN(parseNum('1.2.3')));
  assert.equal(parseNum(7), 7);
  // Mehrdeutiger Punkt: nie Tausender, wenn nur eine Null davor steht
  assert.equal(parseNum('0.891'), 0.891);
  assert.equal(parseNum('0.125'), 0.125);
  assert.equal(parseNum('0.050'), 0.05);
  assert.equal(parseNum('00.500'), 0.5);
  // Mengen, Prozente, Kurse: ein einzelnes Trennzeichen ist immer dezimal
  assert.equal(parseNum('7.125', { decimalOnly: true }), 7.125);
  assert.equal(parseNum('1.000', { decimalOnly: true }), 1);
  assert.equal(parseNum('1,000', { decimalOnly: true }), 1);
  assert.equal(parseNum('1.234,5', { decimalOnly: true }), 1234.5);
  assert.equal(parseNum('12.500.000', { decimalOnly: true }), 12500000);
  assert.equal(parseNum('0,89153', { decimalOnly: true }), 0.89153);
});

test('allocate mit gemischten Vorzeichen (Abzugsposition) und Spiegelung', () => {
  assert.deepEqual(allocate(1000, [15000, -5000]), [1500, -500]);
  assert.deepEqual(allocate(-1000, [-15000, 5000]), [-1500, 500]);
  assert.deepEqual(allocate(-100, [1, 1, 1]), [-34, -33, -33]);
  // 150,00 zu 19 % und −50,00 zu 7 %, 10 % Belegrabatt → Netto 135,00 / −45,00
  const t = computeTotals({
    items: [{ id: 'a', qty: 1, priceCents: 15000, taxRate: 19 }, { id: 'b', qty: -1, priceCents: 5000, taxRate: 7 }],
    discount: { type: 'pct', value: 10 },
  });
  const g = Object.fromEntries(t.taxGroups.map((x) => [x.rate, x]));
  assert.equal(g[19].netCents, 13500);
  assert.equal(g[7].netCents, -4500);
  assert.equal(t.taxCents, 2565 - 315);
  assert.equal(t.totalCents, 11250);
});

test('USD und EUR rechnen nur über den einen Kurs – ein falsches rateToUSD wirkt nicht', () => {
  assert.equal(convertCents(100000, 'EUR', 'USD', { rateToUSD: 1, usdToEur: 0.9 }), 111111);
  assert.equal(convertCents(100000, 'USD', 'EUR', { rateToUSD: 123, usdToEur: 0.9 }), 90000);
  assert.equal(convertCents(-250, 'USD', 'EUR', { usdToEur: 0.01 }), -3);     // −2,5 → −3 (kaufmännisch)
  assert.ok(!Object.is(convertCents(-1, 'USD', 'EUR', { usdToEur: 0.1 }), -0));
  assert.equal(convertCents(100, 'EUR', 'USD', { usdToEur: 0 }), null);
});

test('Datumsrechnung', () => {
  assert.equal(addMonths('2026-01-31', 1), '2026-02-28');
  assert.equal(addMonths('2024-01-31', 1), '2024-02-29');
  assert.equal(addMonths('2026-02-28', 1, 31), '2026-03-31');
  assert.equal(addMonths('2026-11-15', 3), '2027-02-15');
  assert.equal(addMonths('2026-03-15', -3), '2025-12-15');
  assert.equal(addDays('2026-12-25', 14), '2027-01-08');
  assert.equal(addDays('2026-03-01', -1), '2026-02-28');
  assert.equal(daysBetween('2026-10-01', '2026-10-08'), 7);
  assert.ok(isISODate('2024-02-29'));
  assert.ok(!isISODate('2026-02-29'));
  assert.ok(!isISODate('08.10.2026'));
  assert.deepEqual(periodRange('month', '2026-10-08'), { from: '2026-10-01', to: '2026-10-31' });
  assert.deepEqual(periodRange('lastMonth', '2026-01-08'), { from: '2025-12-01', to: '2025-12-31' });
  assert.deepEqual(periodRange('quarter', '2026-10-08'), { from: '2026-10-01', to: '2026-12-31' });
  assert.deepEqual(periodRange('lastQuarter', '2026-02-08'), { from: '2025-10-01', to: '2025-12-31' });
  assert.deepEqual(periodRange('lastYear', '2026-10-08'), { from: '2025-01-01', to: '2025-12-31' });
  assert.deepEqual(monthsBetween('2025-11-15', '2026-02-01'), ['2025-11', '2025-12', '2026-01', '2026-02']);
});

test('Formatierung', () => {
  assert.equal(money(500000, 'USD', 'en'), '$5,000.00');
  assert.equal(moneyDoc(500000, 'USD', 'en'), '$5,000.00 USD');
  assert.equal(moneyDoc(432050, 'EUR', 'en'), '€4,320.50 EUR');
  assert.equal(money(432050, 'EUR', 'de').replace(/ /g, ' '), '4.320,50 €');
  assert.equal(money(500000, 'USD', 'de').replace(/ /g, ' '), '5.000,00 $');
  assert.equal(date('2026-10-08', 'de'), '08.10.2026');
  assert.equal(date('2026-10-08', 'en'), 'Oct 8, 2026');
});
