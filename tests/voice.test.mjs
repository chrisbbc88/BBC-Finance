// Sprachbefehle: Kontext, Request und Auswertung der Werkzeug-Aufrufe (ohne Netzwerk).
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildContext, buildVoiceRequest, parseVoiceResponse, TOOLS } from '../js/lib/voicecmd.js';
import { appendSpoken } from '../js/lib/speech.js';

const data = {
  companies: [{ id: 'co-hl', name: 'Hey Lemon', meetingProvider: 'zoom' }, { id: 'co-bbc', name: 'Build Buddy Consulting', shortName: 'BBC' }, { id: 'co-old', name: 'Alt', archived: true }],
  customers: [
    { id: 'c-1', company: 'Nordlicht Immobilien GmbH', firstName: 'Jana', lastName: 'Petersen', number: 'K-0001', city: 'Hamburg' },
    { id: 'c-2', company: 'Interessent AG', kind: 'contact', number: 'KO-0001' },
    { id: 'c-3', company: 'Inaktiv GmbH', active: false },
  ],
  services: [{ id: 's-1', name: 'Beratung', priceCents: 15000, currency: 'EUR', unit: 'Stunde' }],
  appointments: [{ id: 'a-1', date: '2026-10-15', start: '09:00', end: '10:00', title: 'Kickoff', customerId: 'c-1', status: 'planned' }],
  todos: [{ id: 't-1', title: 'Angebot schicken', due: '2026-10-16', customerId: 'c-1', done: false }],
};
const ctx = buildContext(data, { today: '2026-10-15', timeZone: 'Europe/Madrid', now: new Date('2026-10-15T08:00:00Z') });

test('Kontext: Kürzel, Wochentag, keine archivierten oder inaktiven Einträge', () => {
  assert.match(ctx.text, /Heute ist Donnerstag, 2026-10-15/);
  assert.match(ctx.text, /U1: Hey Lemon/);
  assert.match(ctx.text, /K1: Nordlicht Immobilien GmbH – Jana Petersen \[Kunde K-0001\], Hamburg/);
  assert.match(ctx.text, /K2: Interessent AG \[Kontakt KO-0001\]/);
  assert.match(ctx.text, /T1: 2026-10-15 09:00–10:00, Kickoff \(K1\), geplant/);
  assert.match(ctx.text, /Angebot schicken \(fällig 2026-10-16\) \(K1\)/);
  assert.ok(!/Alt|Inaktiv/.test(ctx.text));
  assert.deepEqual([ctx.map.U1, ctx.map.U2, ctx.map.K1, ctx.map.L1, ctx.map.T1], ['co-hl', 'co-bbc', 'c-1', 's-1', 'a-1']);
});

test('Request: Werkzeuge erzwingen, Befehl am Ende', () => {
  const r = buildVoiceRequest({ model: 'm', text: 'Was steht heute an?', context: ctx.text });
  assert.equal(r.tool_choice.type, 'any');
  assert.equal(r.tools.length, TOOLS.length);
  assert.ok(r.messages[0].content.endsWith('BEFEHL: Was steht heute an?'));
});

const tu = (name, input) => ({ type: 'tool_use', id: name, name, input });

test('Plan: To-dos, Termin, neuer Kontakt mit Verweis, Antwort', () => {
  const plan = parseVoiceResponse({ content: [
    tu('create_contact', { ref: 'NEU1', company: 'Neukunde GmbH', email: 'INFO@NEU.EXAMPLE' }),
    tu('create_todos', { todos: [{ title: 'Angebot schicken', due: '2026-10-16', contact: 'K1', company: 'U2' }, { title: 'Erstgespräch vorbereiten', contact: 'NEU1' }, { title: '  ' }] }),
    tu('create_appointment', { company: 'U2', contact: 'K1', date: '2026-10-20', start: '10:00', duration_minutes: 45, agenda: 'Relaunch' }),
    tu('answer', { text: 'Heute: Kickoff um 9 Uhr.' }),
  ] }, ctx.map);
  assert.deepEqual(plan.answers, ['Heute: Kickoff um 9 Uhr.']);
  const [contact, todos, appt] = plan.actions;
  assert.equal(contact.type, 'contact');
  assert.equal(contact.email, 'info@neu.example');
  assert.deepEqual(todos.items.map((t) => [t.title, t.due, t.customerId, t.companyId]), [['Angebot schicken', '2026-10-16', 'c-1', 'co-bbc'], ['Erstgespräch vorbereiten', '', 'ref:NEU1', '']]);
  assert.equal(appt.companyId, 'co-bbc');
  assert.equal(appt.customerId, 'c-1');
  assert.equal(appt.duration, 45);
  assert.equal(appt.kind, 'video');
  assert.deepEqual(appt.warnings, []);
});

test('Plan: unbekannte Kürzel und falsche Angaben werden Warnungen, nichts wird erfunden', () => {
  const plan = parseVoiceResponse({ content: [
    tu('create_todos', { todos: [{ title: 'X', contact: 'K99', due: 'Freitag' }] }),
    tu('create_appointment', { company: 'U9', date: 'morgen', start: '25:00' }),
    tu('document_appointment', { appointment: 'T7' }),
    tu('add_note', { contact: 'K42', text: 'x' }),
  ] }, ctx.map);
  assert.equal(plan.actions[0].items[0].customerId, '');
  assert.equal(plan.actions[0].items[0].due, '');
  assert.match(plan.actions[0].warnings[0], /K99/);
  assert.equal(plan.actions[1].companyId, '');
  assert.equal(plan.actions[1].warnings.length, 3);
  assert.ok(plan.answers.some((a) => /nicht gefunden/.test(a)));
  assert.equal(plan.actions.length, 2, 'Notiz ohne Kontakt wird nicht angelegt');
});

test('Plan: Dokumentation und Rechnungsentwurf', () => {
  const plan = parseVoiceResponse({ content: [
    tu('document_appointment', { appointment: 'T1', outcome: 'Budget steht', next_steps: 'Angebot', todos: [{ title: 'Angebot', due: '2026-10-21' }] }),
    tu('create_invoice_draft', { company: 'U1', contact: 'K1', items: [{ service: 'L1', quantity: 3 }, { name: 'Pauschale', quantity: 1, unit_price: 99.9 }] }),
  ] }, ctx.map);
  assert.equal(plan.actions[0].appointmentId, 'a-1');
  assert.deepEqual(plan.actions[0].todos, [{ title: 'Angebot', due: '2026-10-21' }]);
  assert.deepEqual(plan.actions[1].items, [{ serviceId: 's-1', name: '', qty: 3, priceCents: null }, { serviceId: '', name: 'Pauschale', qty: 1, priceCents: 9990 }]);
});

test('Plan: ohne Werkzeug-Aufruf verständliche Fehlermeldung', () => {
  assert.throws(() => parseVoiceResponse({ content: [{ type: 'text', text: 'Hallo' }] }, ctx.map), /nicht verstanden/);
});

test('Diktat anhängen', () => {
  assert.equal(appendSpoken('', 'angebot schicken'), 'Angebot schicken');
  assert.equal(appendSpoken('Gutes Gespräch.', 'budget steht'), 'Gutes Gespräch. Budget steht');
  assert.equal(appendSpoken('Gutes Gespräch', 'budget steht'), 'Gutes Gespräch budget steht');
  assert.equal(appendSpoken('Zeile\n', 'neu'), 'Zeile\nneu');
});
