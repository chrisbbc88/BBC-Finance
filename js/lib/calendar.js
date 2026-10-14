// Termine: Zeitzonen, Einladungstext und Kalenderdatei (.ics, RFC 5545).
// Ohne Server und ohne Bibliothek – Zeitzonen rechnet der Browser über Intl.

import { MEETING_PROVIDERS, customerName, customerPerson } from './schema.js';
import { fill } from './format.js';

const pad = (n) => String(n).padStart(2, '0');

/** Abweichung einer Zeitzone von UTC in Minuten zu einem Zeitpunkt. */
function tzOffsetMinutes(utcMs, tz) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const p = Object.fromEntries(dtf.formatToParts(new Date(utcMs)).map((x) => [x.type, x.value]));
  const asUtc = Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day), Number(p.hour) % 24, Number(p.minute), Number(p.second));
  return Math.round((asUtc - utcMs) / 60000);
}

export function validTimeZone(tz) {
  try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch (_) { return false; }
}

/** Ortszeit (Datum + HH:MM) in einer Zeitzone → echter Zeitpunkt. */
export function zonedToUtc(dateISO, time, tz) {
  const [y, mo, d] = String(dateISO).split('-').map(Number);
  const [h, mi] = String(time || '00:00').split(':').map(Number);
  const guess = Date.UTC(y, mo - 1, d, h || 0, mi || 0);
  if (!validTimeZone(tz)) return new Date(guess);
  const off1 = tzOffsetMinutes(guess, tz);
  let ts = guess - off1 * 60000;
  const off2 = tzOffsetMinutes(ts, tz);
  if (off2 !== off1) ts = guess - off2 * 60000;
  return new Date(ts);
}

/** Kurzbezeichnung der Zeitzone zum Termin, z. B. „MESZ“ oder „GMT+4“. */
export function tzShort(tz, when, lang = 'de') {
  if (!validTimeZone(tz)) return tz || '';
  try {
    const p = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'de-DE', { timeZone: tz, timeZoneName: 'short' }).formatToParts(when);
    const name = (p.find((x) => x.type === 'timeZoneName') || {}).value || tz;
    return name;
  } catch (_) { return tz; }
}

/** Uhrzeit eines Zeitpunkts in einer Zeitzone als HH:MM. */
export function timeIn(when, tz) {
  try {
    return new Intl.DateTimeFormat('de-DE', { timeZone: tz, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(when);
  } catch (_) { return ''; }
}

/** Datum eines Zeitpunkts in einer Zeitzone als YYYY-MM-DD. */
export function dateIn(when, tz) {
  try {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(when).map((x) => [x.type, x.value]));
    return `${p.year}-${p.month}-${p.day}`;
  } catch (_) { return ''; }
}

export function longDate(dateISO, lang = 'de') {
  const [y, m, d] = String(dateISO).split('-').map(Number);
  if (!y) return '';
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(y, m - 1, d)));
}

export const providerLabel = (id) => (MEETING_PROVIDERS.find((p) => p.id === id) || {}).label || '';
export const isWebLink = (s) => /^https?:\/\/\S+$/i.test(String(s || '').trim());

/**
 * Muss nach diesem Termin nachgefragt werden? Geplant, vorbei und nicht auf später verschoben.
 */
export function needsFollowUp(appt, now = new Date()) {
  if (!appt || appt.status !== 'planned') return false;
  const { end } = appointmentTimes(appt);
  if (end > now) return false;
  return !appt.followUpAt || new Date(appt.followUpAt) <= now;
}

export function appointmentTimes(appt) {
  const start = zonedToUtc(appt.date, appt.start, appt.timeZone);
  let end = zonedToUtc(appt.date, appt.end || appt.start, appt.timeZone);
  if (end <= start) end = new Date(start.getTime() + 60 * 60000);
  return { start, end };
}

/** Textbaustein zum Ort bzw. Meeting – je nach Art des Termins. */
function meetingBlock(appt, lang) {
  const en = lang === 'en';
  const details = String(appt.meetingDetails || '').trim();
  const url = String(appt.meetingUrl || '').trim();
  if (appt.kind === 'video') {
    const prov = providerLabel(appt.meetingProvider) || (en ? 'video call' : 'Videocall');
    if (!url && !details) return en ? `We will meet via ${prov}. I will send you the link separately.` : `Wir sprechen per ${prov}. Den Link schicke ich Ihnen separat.`;
    return [en ? `Join via ${prov}:` : `Teilnahme per ${prov}:`, url, details].filter(Boolean).join('\n');
  }
  if (appt.kind === 'phone') {
    const where = String(appt.location || '').trim();
    return en ? `Phone call${where ? `: ${where}` : ''}` : `Telefonat${where ? `: ${where}` : ''}`;
  }
  const where = String(appt.location || '').trim();
  return where ? (en ? `Location: ${where}` : `Ort: ${where}`) : '';
}

/** Ansprechpartner für die Anrede. */
export function appointmentContact(appt, customer) {
  return String(appt.contactName || '').trim() || (customer ? (customerPerson(customer) || customerName(customer)) : '');
}

/**
 * Einladungstext (Betreff und Text) aus der Vorlage in den Einstellungen.
 * Platzhalter: {CONTACT} {CUSTOMER} {TITLE} {DATE} {TIME} {END} {TIMEZONE} {MEETING} {LINK} {ACCESS} {PROVIDER} {LOCATION} {AGENDA} {SENDER} {COMPANY}
 */
export function invitationText(appt, { company, customer, settings }) {
  const lang = appt.language === 'en' ? 'en' : 'de';
  const tpl = ((settings && settings.appointmentTemplates) || {})[lang] || { subject: '', body: '' };
  const { start } = appointmentTimes(appt);
  const agenda = String(appt.agenda || '').trim();
  const title = String(appt.title || '').trim() || (lang === 'en' ? 'Meeting' : 'Gespräch');
  const vars = {
    CONTACT: appointmentContact(appt, customer),
    CUSTOMER: customer ? customerName(customer) : String(appt.contactName || ''),
    TITLE: title,
    DATE: longDate(appt.date, lang),
    TIME: appt.start || '',
    END: appt.end || '',
    TIMEZONE: tzShort(appt.timeZone, start, lang),
    MEETING: meetingBlock(appt, lang),
    LINK: String(appt.meetingUrl || '').trim(),
    ACCESS: String(appt.meetingDetails || '').trim(),
    PROVIDER: providerLabel(appt.meetingProvider),
    LOCATION: String(appt.location || '').trim(),
    AGENDA: agenda ? `${lang === 'en' ? 'Agenda' : 'Themen'}:\n${agenda}` : '',
    SENDER: (settings && settings.userName) || '',
    COMPANY: company ? company.name : '',
  };
  const tidy = (s) => s
    .replace(/[ \t]+,/g, ',')            // „Guten Tag ,“ ohne Namen
    .split('\n').map((l) => l.replace(/\s+$/, '')).join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return { subject: tidy(fill(tpl.subject, vars)).replace(/\n/g, ' '), body: tidy(fill(tpl.body, vars)), vars };
}

/* ---------- Kalenderdatei ---------- */

const icsStamp = (d) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
const icsText = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');

/** Zeilen nach RFC 5545 auf höchstens 75 Byte falten (UTF-8, ohne Zeichen zu zerteilen). */
function fold(line) {
  const enc = new TextEncoder();
  const out = [];
  let cur = '';
  let bytes = 0;
  for (const ch of line) {
    const b = enc.encode(ch).length;
    const limit = out.length ? 74 : 75;
    if (bytes + b > limit) { out.push(cur); cur = ''; bytes = 0; }
    cur += ch; bytes += b;
  }
  out.push(cur);
  return out.map((l, i) => (i ? ` ${l}` : l)).join('\r\n');
}

/** Kalenderdatei für einen Termin. Gleiche UID + höhere SEQUENCE ersetzt beim Empfänger die alte Fassung. */
export function buildIcs(appt, { summary, description }) {
  const { start, end } = appointmentTimes(appt);
  const url = String(appt.meetingUrl || '').trim();
  const location = appt.kind === 'video' ? (isWebLink(url) ? url : providerLabel(appt.meetingProvider)) : String(appt.location || '').trim();
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BBC Finance//Termine//DE',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${appt.id}@bbc-finance`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SEQUENCE:${Number(appt.sequence) || 0}`,
    `SUMMARY:${icsText(summary)}`,
    description ? `DESCRIPTION:${icsText(description)}` : '',
    location ? `LOCATION:${icsText(location)}` : '',
    isWebLink(url) ? `URL:${url}` : '',
    `STATUS:${appt.status === 'cancelled' ? 'CANCELLED' : 'CONFIRMED'}`,
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${icsText(summary)}`,
    'TRIGGER:-PT15M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);
  return `${lines.map(fold).join('\r\n')}\r\n`;
}
