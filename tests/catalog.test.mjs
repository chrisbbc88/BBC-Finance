// Leistungskatalog: Spaltenerkennung, Tarife, Prüfungen und Export (ohne Speicher).
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCatalog, catalogRows } from '../js/lib/servicecatalog.js';

test('Spalten werden über ihre Überschrift erkannt, Werte normalisiert', () => {
  const { items, unknownColumns, columns } = parseCatalog([
    { 'Nr.': 'HL-WEB-101', NAME: 'One-Pager', Tarif: 'Starter', Kategorie: 'Website', Einheit: 'Pauschal', 'Preis netto': 999, Währung: 'eur', Art: 'Einmalig', Menge: '', 'Steuersatz %': '', Rechnungstext: '1 Seite', Extra: 'x' },
    { 'Nr.': 'HL-SEO-201', NAME: 'Standort-SEO', Tarif: 'standard', Kategorie: 'SEO', Einheit: 'Monat', 'Preis netto': '479,00', Währung: '', Art: '', Menge: '1', 'Steuersatz %': '19 %', Rechnungstext: '' },
  ]);
  assert.deepEqual(unknownColumns, ['Extra']);
  assert.equal(columns.name, 'NAME');
  const [a, b] = items.map((i) => i.service);
  assert.deepEqual([a.code, a.tier, a.priceCents, a.currency, a.recurring, a.defaultQty, a.taxRate], ['HL-WEB-101', 'starter', 99900, 'EUR', false, 1, null]);
  assert.deepEqual([b.tier, b.priceCents, b.currency, b.recurring, b.taxRate], ['standard', 47900, 'EUR', true, 19]);
  assert.ok(items.every((i) => i.problems.length === 0));
});

test('Fehlerhafte Zeilen werden markiert, Leerzeilen übersprungen', () => {
  const { items } = parseCatalog([
    { 'Nr.': 'A-1', Name: '', 'Preis netto': 10, Tarif: '' },
    { 'Nr.': '', Name: '', 'Preis netto': '', Tarif: '' },
    { 'Nr.': 'A-2', Name: 'X', 'Preis netto': 'teuer', Tarif: 'Premium' },
    { 'Nr.': 'A-3', Name: 'Y', 'Preis netto': 5, Währung: 'AED' },
    { 'Nr.': 'A-3', Name: 'Z', 'Preis netto': 0, Tarif: 'S' },
  ]);
  assert.equal(items.length, 4);
  assert.match(items[0].problems.join(), /Name fehlt/);
  assert.match(items[1].problems.join(), /Tarif „Premium“ unbekannt/);
  assert.match(items[1].problems.join(), /Preis fehlt/);
  assert.match(items[2].problems.join(), /AED/);
  assert.match(items[3].problems.join(), /doppelt/);
  assert.equal(items[3].service.tier, 'starter');
  assert.equal(items[3].service.priceCents, 0);
});

test('Export und erneuter Import ergeben dieselben Leistungen', () => {
  const services = [{ code: 'HL-ADS-101', name: 'Ads – Einrichtung', tier: 'starter', category: 'Anzeigen', unit: 'Pauschal', priceCents: 74900, currency: 'EUR', recurring: false, defaultQty: 1, taxRate: null, invoiceText: 'Setup', internalName: 'Ads S', description: 'intern', companyId: 'co', active: true }];
  const rows = catalogRows(services, () => 'Hey Lemon');
  assert.equal(rows[0].Tarif, 'Starter');
  assert.equal(rows[0]['Preis netto'], 749);
  const back = parseCatalog(rows).items[0].service;
  for (const k of ['code', 'name', 'tier', 'category', 'unit', 'priceCents', 'currency', 'recurring', 'defaultQty', 'taxRate', 'invoiceText', 'internalName', 'description', 'active']) {
    assert.deepEqual(back[k], services[0][k], k);
  }
  assert.equal(back.company, 'Hey Lemon');
});
