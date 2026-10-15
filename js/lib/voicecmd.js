// Sprachbefehle: Der gesprochene (oder getippte) Satz geht mit einer knappen Übersicht über Kontakte,
// Unternehmen, Leistungen, Termine und To-dos an die Anthropic-API. Die KI antwortet ausschließlich
// mit Werkzeug-Aufrufen; daraus entsteht ein Plan, den der Nutzer vor dem Ausführen sieht und bestätigt.
// IDs werden für die KI durch kurze Kürzel ersetzt (K1, U1, L1, T1) – das spart Text und Fehler.

import { customerName, customerPerson } from './schema.js';
import { isISODate } from './util.js';

const API_URL = 'https://api.anthropic.com/v1/messages';
const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const HHMM = /^([01]\d|2[0-3]):[0-5]\d$/;

/* ---------- Kontext ---------- */

/**
 * Baut die Übersicht für die KI und die Zuordnung Kürzel → echte ID.
 * data: { customers, companies, services, appointments, todos }, today: YYYY-MM-DD, timeZone
 */
export function buildContext(data, { today, timeZone, now = new Date() }) {
  const map = {};
  const lines = [];
  const add = (prefix, i, id) => { const k = `${prefix}${i + 1}`; map[k] = id; return k; };
  const companies = data.companies.filter((c) => !c.archived);
  lines.push('UNTERNEHMEN (über welches Konto etwas läuft):');
  companies.forEach((c, i) => lines.push(`${add('U', i, c.id)}: ${c.name}${c.shortName && c.shortName !== c.name ? ` (${c.shortName})` : ''}${c.meetingProvider ? `, Meetings über ${c.meetingProvider}` : ''}`));
  const contacts = data.customers.filter((c) => c.active !== false).slice(0, 600);
  lines.push('', 'KONTAKTE (K = Kürzel; Art: Kunde oder Kontakt/Interessent):');
  contacts.forEach((c, i) => {
    const person = customerPerson(c);
    lines.push(`${add('K', i, c.id)}: ${customerName(c)}${person && person !== customerName(c) ? ` – ${person}` : ''} [${c.kind === 'contact' ? 'Kontakt' : 'Kunde'} ${c.number || ''}]${c.city ? `, ${c.city}` : ''}`);
  });
  const kOf = new Map(Object.entries(map).map(([k, v]) => [v, k]));
  const services = data.services.filter((s) => s.active !== false).slice(0, 200);
  if (services.length) {
    lines.push('', 'LEISTUNGEN (für Rechnungsentwürfe):');
    services.forEach((s, i) => lines.push(`${add('L', i, s.id)}: ${s.name} – ${((s.priceCents || 0) / 100).toFixed(2)} ${s.currency || ''} je ${s.unit || 'Stück'}`));
  }
  const from = new Date(now.getTime() - 14 * 86400000).toISOString().slice(0, 10);
  const until = new Date(now.getTime() + 30 * 86400000).toISOString().slice(0, 10);
  const appts = data.appointments.filter((a) => a.date >= from && a.date <= until)
    .sort((a, b) => (`${a.date}${a.start}` < `${b.date}${b.start}` ? -1 : 1)).slice(0, 80);
  if (appts.length) {
    lines.push('', 'TERMINE (letzte 14 und nächste 30 Tage):');
    appts.forEach((a, i) => lines.push(`${add('T', i, a.id)}: ${a.date} ${a.start}–${a.end}, ${a.title}${a.customerId && kOf.get(a.customerId) ? ` (${kOf.get(a.customerId)})` : ''}, ${a.status === 'done' ? 'dokumentiert' : a.status === 'cancelled' ? 'abgesagt' : 'geplant'}`));
  }
  const todos = data.todos.filter((t) => !t.done).sort((a, b) => ((a.due || '9') < (b.due || '9') ? -1 : 1)).slice(0, 60);
  if (todos.length) {
    lines.push('', 'OFFENE TO-DOS:');
    todos.forEach((t) => lines.push(`- ${t.title}${t.due ? ` (fällig ${t.due})` : ''}${t.customerId && kOf.get(t.customerId) ? ` (${kOf.get(t.customerId)})` : ''}`));
  }
  const d = new Date(`${today}T12:00:00Z`);
  const header = `Heute ist ${WEEKDAYS[d.getUTCDay()]}, ${today}. Zeitzone: ${timeZone}. Uhrzeit jetzt: ${now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', timeZone })}.`;
  return { text: `${header}\n\n${lines.join('\n')}`, map };
}

/* ---------- Werkzeuge ---------- */

const contactRef = { type: 'string', description: 'Kürzel eines Kontakts (K…) oder die ref eines im selben Befehl neu angelegten Kontakts (NEU1 …).' };
const date = { type: 'string', description: 'Datum YYYY-MM-DD. Relative Angaben („Freitag“, „in zwei Wochen“) vom heutigen Datum aus berechnen.' };

export const TOOLS = [
  {
    name: 'create_todos',
    description: 'Legt ein oder mehrere To-dos an.',
    input_schema: {
      type: 'object',
      properties: {
        todos: {
          type: 'array',
          items: {
            type: 'object',
            properties: { title: { type: 'string' }, due: date, contact: contactRef, company: { type: 'string', description: 'Kürzel U…, optional' } },
            required: ['title'],
          },
        },
      },
      required: ['todos'],
    },
  },
  {
    name: 'create_appointment',
    description: 'Plant einen Termin. Meeting-Link und Zugangsdaten setzt das Tool automatisch aus dem Unternehmen.',
    input_schema: {
      type: 'object',
      properties: {
        company: { type: 'string', description: 'Kürzel U… – über welches Unternehmen der Termin läuft. Pflicht; nur raten, wenn es genau ein Unternehmen gibt.' },
        contact: contactRef,
        contact_name: { type: 'string', description: 'Gesprächspartner, falls kein Kontakt passt oder eine bestimmte Person gemeint ist.' },
        title: { type: 'string' },
        date,
        start: { type: 'string', description: 'Beginn HH:MM (24 h).' },
        duration_minutes: { type: 'number', description: 'Dauer in Minuten, wenn genannt.' },
        kind: { type: 'string', enum: ['video', 'phone', 'onsite'], description: 'Standard video.' },
        location: { type: 'string', description: 'Ort bei Vor-Ort-Terminen bzw. Telefonnummer.' },
        agenda: { type: 'string' },
      },
      required: ['company', 'date', 'start'],
    },
  },
  {
    name: 'add_note',
    description: 'Trägt eine Notiz in die Kundendokumentation ein (Telefonat, Gespräch, E-Mail, Notiz).',
    input_schema: {
      type: 'object',
      properties: {
        contact: contactRef,
        kind: { type: 'string', enum: ['note', 'call', 'email', 'meeting', 'task'] },
        title: { type: 'string' },
        text: { type: 'string' },
        date,
      },
      required: ['contact', 'text'],
    },
  },
  {
    name: 'create_contact',
    description: 'Legt einen neuen Kontakt oder Kunden an. Nur, wenn ausdrücklich ein neuer Kontakt gemeint ist und keiner aus der Liste passt.',
    input_schema: {
      type: 'object',
      properties: {
        ref: { type: 'string', description: 'NEU1, NEU2 … – damit andere Aufrufe im selben Befehl darauf verweisen können.' },
        kind: { type: 'string', enum: ['contact', 'customer'], description: 'Standard contact.' },
        company: { type: 'string' }, first_name: { type: 'string' }, last_name: { type: 'string' },
        email: { type: 'string' }, phone: { type: 'string' }, city: { type: 'string' }, notes: { type: 'string' },
      },
      required: ['ref'],
    },
  },
  {
    name: 'document_appointment',
    description: 'Dokumentiert einen Termin aus der Liste: Ergebnis, nächste Schritte, To-dos.',
    input_schema: {
      type: 'object',
      properties: {
        appointment: { type: 'string', description: 'Kürzel T…' },
        outcome: { type: 'string' },
        next_steps: { type: 'string' },
        todos: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, due: date }, required: ['title'] } },
      },
      required: ['appointment'],
    },
  },
  {
    name: 'create_invoice_draft',
    description: 'Legt einen Rechnungsentwurf an (nur Entwurf – erstellt wird er im Tool per Klick).',
    input_schema: {
      type: 'object',
      properties: {
        company: { type: 'string', description: 'Kürzel U…' },
        contact: contactRef,
        items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              service: { type: 'string', description: 'Kürzel L…, wenn eine Leistung passt' },
              name: { type: 'string', description: 'Bezeichnung, wenn keine Leistung passt' },
              quantity: { type: 'number' },
              unit_price: { type: 'number', description: 'Einzelpreis netto, nur wenn genannt' },
            },
          },
        },
      },
      required: ['company', 'contact', 'items'],
    },
  },
  {
    name: 'answer',
    description: 'Antwortet in Textform: auf Fragen („Was steht heute an?“) oder mit einer Rückfrage, wenn etwas unklar ist (z. B. welcher Kontakt gemeint ist).',
    input_schema: { type: 'object', properties: { text: { type: 'string' } }, required: ['text'] },
  },
];

const SYSTEM = `Du bist die Sprachsteuerung von BBC Finance, einem Rechnungs- und CRM-Tool. Der Nutzer spricht Deutsch; der Text stammt aus einer Spracherkennung und kann Hörfehler enthalten.
Setze den Befehl ausschließlich mit den Werkzeugen um. Du darfst mehrere Werkzeuge in einer Antwort aufrufen.
Regeln:
- Verwende nur Kürzel aus der Übersicht. Ordne Namen großzügig zu (Hörfehler, Vor- oder Nachname, Firmenname). Passen mehrere Kontakte gleich gut oder keiner, frage mit answer nach statt zu raten.
- Fehlt beim Termin das Unternehmen und gibt es mehr als eines, frage mit answer nach.
- Datumsangaben immer als YYYY-MM-DD, Uhrzeiten als HH:MM. „Nächste Woche“ ohne Tag = Montag der nächsten Woche.
- To-do-Titel kurz und als Aufgabe formulieren („Angebot schicken“).
- Rechnungen gibt es nur als Entwurf. Löschen, Stornieren und Zahlungen sind nicht per Sprache möglich – erkläre das mit answer.
- Fragen beantwortest du knapp mit answer anhand der Übersicht.`;

export function buildVoiceRequest({ model, text, context }) {
  return {
    model,
    max_tokens: 2000,
    system: SYSTEM,
    tools: TOOLS,
    tool_choice: { type: 'any' },
    messages: [{ role: 'user', content: `${context}\n\n---\nBEFEHL: ${text}` }],
  };
}

/* ---------- Antwort → Plan ---------- */

const real = (map, k, prefix) => (typeof k === 'string' && k.startsWith(prefix) && map[k] ? map[k] : '');
const okDate = (d) => (typeof d === 'string' && isISODate(d) ? d : '');

/**
 * Wandelt die Werkzeug-Aufrufe in einen Plan um. Unbekannte Kürzel werden zu Warnungen statt zu falschen Zuordnungen.
 * Ergebnis: { actions: [{ type, …, warnings }], answers: [text] }
 */
export function parseVoiceResponse(json, map) {
  const blocks = (json && Array.isArray(json.content)) ? json.content.filter((b) => b.type === 'tool_use') : [];
  if (!blocks.length) throw new Error('Der Befehl wurde nicht verstanden. Bitte anders formulieren.');
  const actions = [];
  const answers = [];
  const newRefs = new Set(blocks.filter((b) => b.name === 'create_contact').map((b) => String((b.input || {}).ref || '')));
  const contactOf = (k, warn) => {
    if (!k) return '';
    if (newRefs.has(k)) return `ref:${k}`;
    const id = real(map, k, 'K');
    if (!id) warn.push(`Kontakt „${k}“ nicht gefunden – wird ohne Kontakt angelegt.`);
    return id;
  };
  for (const b of blocks) {
    const r = b.input || {};
    const warnings = [];
    if (b.name === 'answer') { if (r.text) answers.push(String(r.text)); continue; }
    if (b.name === 'create_todos') {
      const items = (Array.isArray(r.todos) ? r.todos : []).filter((t) => t && String(t.title || '').trim()).map((t) => ({
        title: String(t.title).trim(), due: okDate(t.due), customerId: contactOf(t.contact, warnings), companyId: real(map, t.company, 'U'),
      }));
      if (items.length) actions.push({ type: 'todos', items, warnings });
    } else if (b.name === 'create_appointment') {
      const companyId = real(map, r.company, 'U');
      if (!companyId) warnings.push('Unternehmen nicht erkannt – bitte nach dem Anlegen prüfen.');
      if (!okDate(r.date)) warnings.push('Datum nicht erkannt.');
      if (!HHMM.test(String(r.start || ''))) warnings.push('Uhrzeit nicht erkannt.');
      actions.push({
        type: 'appointment', companyId, customerId: contactOf(r.contact, warnings), contactName: String(r.contact_name || '').trim(),
        title: String(r.title || '').trim(), date: okDate(r.date), start: HHMM.test(String(r.start || '')) ? r.start : '',
        duration: Number(r.duration_minutes) > 0 ? Math.min(Math.round(Number(r.duration_minutes)), 600) : 0,
        kind: ['video', 'phone', 'onsite'].includes(r.kind) ? r.kind : 'video', location: String(r.location || '').trim(), agenda: String(r.agenda || '').trim(),
        warnings,
      });
    } else if (b.name === 'add_note') {
      const customerId = contactOf(r.contact, warnings);
      if (!customerId) continue;
      actions.push({
        type: 'note', customerId, kind: ['note', 'call', 'email', 'meeting', 'task'].includes(r.kind) ? r.kind : 'note',
        title: String(r.title || '').trim(), text: String(r.text || '').trim(), date: okDate(r.date), warnings,
      });
    } else if (b.name === 'create_contact') {
      actions.push({
        type: 'contact', ref: String(r.ref || ''), kind: r.kind === 'customer' ? 'customer' : 'contact',
        company: String(r.company || '').trim(), firstName: String(r.first_name || '').trim(), lastName: String(r.last_name || '').trim(),
        email: String(r.email || '').trim().toLowerCase(), phone: String(r.phone || '').trim(), city: String(r.city || '').trim(), notes: String(r.notes || '').trim(),
        warnings,
      });
    } else if (b.name === 'document_appointment') {
      const appointmentId = real(map, r.appointment, 'T');
      if (!appointmentId) { answers.push('Der Termin zum Dokumentieren wurde nicht gefunden.'); continue; }
      actions.push({
        type: 'document', appointmentId, outcome: String(r.outcome || '').trim(), nextSteps: String(r.next_steps || '').trim(),
        todos: (Array.isArray(r.todos) ? r.todos : []).filter((t) => t && String(t.title || '').trim()).map((t) => ({ title: String(t.title).trim(), due: okDate(t.due) })),
        warnings,
      });
    } else if (b.name === 'create_invoice_draft') {
      const companyId = real(map, r.company, 'U');
      const customerId = contactOf(r.contact, warnings);
      if (!companyId || !customerId) { answers.push('Für den Rechnungsentwurf fehlen Unternehmen oder Kunde.'); continue; }
      const items = (Array.isArray(r.items) ? r.items : []).map((it) => ({
        serviceId: real(map, it.service, 'L'), name: String(it.name || '').trim(),
        qty: Number(it.quantity) > 0 ? Number(it.quantity) : 1,
        priceCents: Number.isFinite(Number(it.unit_price)) && it.unit_price != null ? Math.round(Number(it.unit_price) * 100) : null,
      })).filter((it) => it.serviceId || it.name);
      if (items.length) actions.push({ type: 'invoice', companyId, customerId, items, warnings });
    }
  }
  return { actions, answers };
}

function httpError(status, body) {
  const detail = body && body.error && body.error.message ? ` (${body.error.message})` : '';
  if (status === 401) return 'Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.';
  if (status === 404) return `Das eingestellte KI-Modell wurde nicht gefunden${detail}.`;
  if (status === 429) return 'Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.';
  if (status >= 500) return 'Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.';
  return `Der Sprachbefehl ist fehlgeschlagen${detail || ` (HTTP ${status})`}.`;
}

export async function runVoiceCommand({ apiKey, model, text, context, map }) {
  if (!apiKey) throw new Error('Für Sprachbefehle braucht es den API-Key aus den Einstellungen.');
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify(buildVoiceRequest({ model, text, context })),
    });
  } catch (_) {
    throw new Error('Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.');
  }
  let json = null;
  try { json = await res.json(); } catch (_) { /* leer */ }
  if (!res.ok) throw new Error(httpError(res.status, json));
  return { ...parseVoiceResponse(json, map), usage: json.usage || null };
}
