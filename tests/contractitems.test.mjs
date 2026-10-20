// Vertragspositionen: einmalig und wiederkehrend, ältere Verträge, Übernahme aus Angeboten, Rechnungspositionen.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  contractItems, contractSums, contractSummaryText, itemsFromQuote, invoiceItemsFromContract, billingOfService, validateContractItems, newContractItem,
} from '../js/lib/contractitems.js';

const fmt = (c) => `${(c / 100).toFixed(2)} €`;

test('Älterer Vertrag mit einem Betrag wird als eine Position gelesen', () => {
  const legacy = { id: 'k1', title: 'SEO-Betreuung', amountCents: 95000, billing: 'monthly', taxRate: 19 };
  const items = contractItems(legacy);
  assert.equal(items.length, 1);
  assert.deepEqual([items[0].name, items[0].priceCents, items[0].billing, items[0].unit, items[0].taxRate], ['SEO-Betreuung', 95000, 'monthly', 'Monat', 19]);
  assert.equal(contractItems({ amountCents: 5000, billing: 'none', title: 'X' })[0].billing, 'once');
  assert.deepEqual(contractItems({ title: 'leer' }), []);
  // Positionen haben Vorrang vor dem alten Betrag
  assert.equal(contractItems({ ...legacy, items: [newContractItem({ name: 'Neu' })] })[0].name, 'Neu');
});

test('Summen und Kurztext: einmalig und je Intervall', () => {
  const c = { items: [
    newContractItem({ name: 'Website', priceCents: 199000, billing: 'once' }),
    newContractItem({ name: 'Einrichtung', priceCents: 14900, billing: 'once' }),
    newContractItem({ name: 'Website-Service', priceCents: 14900, billing: 'monthly' }),
    newContractItem({ name: 'Hosting', qty: 12, priceCents: 1600, billing: 'yearly' }),
  ] };
  const s = contractSums(c);
  assert.equal(s.once, 213900);
  assert.deepEqual(s.intervals, { monthly: 14900, yearly: 19200 });
  assert.deepEqual(s.intervalIds, ['monthly', 'yearly']);
  assert.equal(contractSummaryText(c, fmt), '2139.00 € einmalig · 149.00 € / Monat · 192.00 € / Jahr');
});

test('Aus dem Angebot: Abrechnung aus der Leistung bzw. Einheit, Rabatt im Preis', () => {
  const services = { s1: { recurring: true, unit: 'Monat' }, s2: { recurring: false, unit: 'Pauschal' }, s3: { recurring: true, unit: 'Jahr' } };
  const items = itemsFromQuote({ items: [
    { serviceId: 's2', name: 'Website', qty: 1, unit: 'Pauschal', priceCents: 199000, taxRate: 19 },
    { serviceId: 's1', name: 'Service', qty: 1, unit: 'Monat', priceCents: 14900, taxRate: 19, discountPct: 10 },
    { serviceId: 's3', name: 'Domain', qty: 1, unit: 'Jahr', priceCents: 2000 },
    { name: 'Betreuung frei', qty: 2, unit: 'Monat', priceCents: 5000 },
    { isText: true, name: 'Hinweis' },
  ] }, (id) => services[id]);
  assert.deepEqual(items.map((i) => i.billing), ['once', 'monthly', 'yearly', 'monthly']);
  assert.equal(items[1].priceCents, 13410);
  assert.equal(itemsFromQuote({ source: 'upload', items: [{ name: 'PDF', qty: 1, unit: 'Monat', priceCents: 1 }] })[0].billing, 'once');
  assert.equal(billingOfService({ recurring: true, unit: 'Quartal' }), 'quarterly');
  assert.equal(billingOfService({ recurring: true, unit: 'Halbjahr' }), 'semiannual');
});

test('Rechnungspositionen je Teil, Vertragsnummer als Text', () => {
  const c = { refNumber: 'V-1', items: [
    newContractItem({ name: 'Website', priceCents: 100, billing: 'once' }),
    newContractItem({ name: 'Service', priceCents: 50, billing: 'monthly', unit: 'Monat', description: 'Pflege' }),
  ] };
  assert.deepEqual(invoiceItemsFromContract(c, 'once').map((i) => [i.name, i.description]), [['Website', 'Gemäß Vertrag V-1']]);
  assert.deepEqual(invoiceItemsFromContract(c, 'monthly').map((i) => [i.name, i.description, i.unit]), [['Service', 'Pflege', 'Monat']]);
  assert.equal(invoiceItemsFromContract(c, 'yearly').length, 0);
  assert.equal(invoiceItemsFromContract(c, 'all').length, 2);
});

test('Prüfung der Positionen', () => {
  assert.equal(validateContractItems([newContractItem({ name: 'A', priceCents: 0 })]), '');
  assert.match(validateContractItems([newContractItem({ name: '' })]), /Position 1: Bitte eine Bezeichnung/);
  assert.match(validateContractItems([newContractItem({ name: 'A' }), newContractItem({ name: 'B', qty: 0 })]), /Position 2: Die Menge/);
  assert.match(validateContractItems([newContractItem({ name: 'A', billing: 'weekly' })]), /Unbekannte Abrechnung/);
});
