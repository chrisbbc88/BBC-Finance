// Ablauf Termin → Angebot → Vertrag → Rechnung und Vertragsstatus (ohne Speicher).
import test from 'node:test';
import assert from 'node:assert/strict';
import { pipelineOf, contractEndsSoon, contractOverdue, contractStatus } from '../js/lib/pipeline.js';
import { quoteLabel, newUploadedQuote, newContract } from '../js/lib/schema.js';

const today = '2026-10-15';

test('Neuer Kontakt: alle Schritte offen, nächster Schritt ist der Termin', () => {
  const p = pipelineOf({}, 'c1', today);
  assert.deepEqual(p.steps.map((s) => s.state), ['todo', 'todo', 'todo', 'todo']);
  assert.equal(p.current, 0);
});

test('Geplanter Termin läuft, stattgefundener ist erledigt; abgesagte zählen nicht', () => {
  const data = { appointments: [
    { id: 'a1', customerId: 'c1', date: '2026-10-20', start: '10:00', status: 'planned' },
    { id: 'a2', customerId: 'c1', date: '2026-10-01', start: '09:00', status: 'cancelled' },
    { id: 'a3', customerId: 'c2', date: '2026-10-01', start: '09:00', status: 'done' },
  ] };
  let p = pipelineOf(data, 'c1', today);
  assert.equal(p.steps[0].state, 'active');
  assert.equal(p.steps[0].next.id, 'a1');
  data.appointments.push({ id: 'a4', customerId: 'c1', date: '2026-10-10', start: '09:00', status: 'planned' });
  p = pipelineOf(data, 'c1', today);
  assert.equal(p.steps[0].state, 'done', 'vergangener geplanter Termin gilt als gehalten');
  assert.equal(p.steps[0].last.id, 'a4');
  assert.equal(p.current, 1);
});

test('Angebot: offen → läuft, angenommen → erledigt, nur abgelehnt → offen; Entwürfe zählen als in Arbeit', () => {
  const q = (id, status, extra = {}) => ({ id, customerId: 'c1', status, issueDate: '2026-10-0' + id.slice(1), ...extra });
  assert.equal(pipelineOf({ quotes: [q('q1', 'draft')] }, 'c1', today).steps[1].state, 'active');
  assert.equal(pipelineOf({ quotes: [q('q1', 'declined')] }, 'c1', today).steps[1].state, 'todo');
  assert.equal(pipelineOf({ quotes: [q('q1', 'open', { validUntil: '2026-10-01' })] }, 'c1', today).steps[1].state, 'todo', 'abgelaufen');
  const p = pipelineOf({ quotes: [q('q1', 'declined'), q('q2', 'sent'), q('q3', 'accepted', { source: 'upload' })] }, 'c1', today);
  assert.equal(p.steps[1].state, 'done');
  assert.equal(p.steps[1].latest.id, 'q3');
  assert.equal(p.steps[1].count, 3);
});

test('Vertrag und Rechnung; stornierte Rechnungen und Gutschriften zählen nicht', () => {
  const data = {
    appointments: [{ id: 'a', customerId: 'c1', date: '2026-09-01', start: '09:00', status: 'done' }],
    quotes: [{ id: 'q', customerId: 'c1', status: 'accepted', issueDate: '2026-09-05' }],
    contracts: [{ id: 'k', customerId: 'c1', status: 'open', createdAt: '2026-09-10' }],
    invoices: [{ id: 'i1', customerId: 'c1', status: 'cancelled', issueDate: '2026-09-20' }, { id: 'g', customerId: 'c1', type: 'credit_note', status: 'issued', issueDate: '2026-09-21' }],
  };
  let p = pipelineOf(data, 'c1', today);
  assert.deepEqual(p.steps.map((s) => s.state), ['done', 'done', 'active', 'todo']);
  assert.equal(p.current, 2);
  data.contracts[0].status = 'signed';
  data.invoices.push({ id: 'i2', customerId: 'c1', status: 'paid', issueDate: '2026-10-01' });
  p = pipelineOf(data, 'c1', today);
  assert.deepEqual(p.steps.map((s) => s.state), ['done', 'done', 'done', 'done']);
  assert.equal(p.current, null);
  assert.equal(p.steps[3].latest.id, 'i2');
});

test('Bestandskunde ohne Termin und Angebot: frühere Schritte gelten als nicht erfasst', () => {
  const p = pipelineOf({
    contracts: [{ id: 'k', customerId: 'c1', status: 'signed', createdAt: '2026-01-01' }],
  }, 'c1', today);
  assert.deepEqual(p.steps.map((s) => s.state), ['skipped', 'skipped', 'done', 'todo']);
  assert.equal(p.current, 3);
});

test('Vertragsstatus: endet bald, Ende überschritten, unbefristet', () => {
  const c = (over) => ({ status: 'signed', endDate: '', ...over });
  assert.equal(contractStatus(c({}), today), 'signed');
  assert.ok(contractEndsSoon(c({ endDate: '2026-11-30' }), today));
  assert.ok(!contractEndsSoon(c({ endDate: '2026-11-30' }), today, 30));
  assert.equal(contractStatus(c({ endDate: '2026-11-30' }), today), 'ending');
  assert.ok(contractOverdue(c({ endDate: '2026-10-14' }), today));
  assert.equal(contractStatus(c({ endDate: '2026-10-14' }), today), 'expired');
  assert.equal(contractStatus(c({ status: 'ended', endDate: '2026-10-14' }), today), 'ended');
});

test('Bezeichnung von Angeboten und Vorgaben neuer Datensätze', () => {
  assert.equal(quoteLabel({ number: 'HL-A 2026 001' }), 'HL-A 2026 001');
  assert.equal(quoteLabel({ status: 'draft' }), 'Entwurf');
  assert.equal(quoteLabel({ source: 'upload', refNumber: 'AN-77', title: 'Relaunch' }), 'AN-77');
  assert.equal(quoteLabel({ source: 'upload', title: 'Relaunch' }), 'Relaunch');
  const company = { id: 'co', currency: 'USD', defaultTaxRate: 19, language: 'de' };
  const uq = newUploadedQuote(company);
  assert.equal(uq.source, 'upload');
  assert.equal(uq.number, null);
  assert.equal(uq.status, 'open');
  const k = newContract(company);
  assert.equal(k.taxRate, 19);
  assert.equal(k.billing, 'none');
  assert.equal(k.amountCents, null);
});
