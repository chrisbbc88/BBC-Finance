// Termine: Kalender (Monat und Liste), Termin anlegen und bearbeiten, Einladungstext und Kalenderdatei.

import { html, useState, useEffect, useMemo, useStore, navigate, toast, attempt, ask, pauseUnloadWarning } from '../ui/core.js';
import {
  Button, PageHeader, Modal, TextField, TextArea, SelectField, DateField, Segmented, Combobox, Field, Notice, Menu, Badge, Panel,
  EmptyState, Chips,
} from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { state, byId, activeCompanies, currentCompany, inScope } from '../lib/store.js';
import {
  newAppointment, customerName, customerPerson, MEETING_PROVIDERS, APPOINTMENT_KINDS, APPOINTMENT_STATUS, TIME_ZONES, deviceTimeZone, LANGUAGES,
} from '../lib/schema.js';
import { saveAppointment, setAppointmentStatus, deleteAppointment, completeAppointment, snoozeFollowUp } from '../lib/actions.js';
import { TodoList } from './todos.js';
import {
  invitationText, buildIcs, appointmentTimes, tzShort, timeIn, dateIn, longDate, providerLabel, needsFollowUp,
} from '../lib/calendar.js';
import { saveBlob } from '../lib/pdf.js';
import { date } from '../lib/format.js';
import { todayISO, addDays, safeFileName, matches } from '../lib/util.js';
import { CompanyTag } from './shared.js';
import { CustomerFormModal } from './customers.js';

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

export const sortAppointments = (list) => [...list].sort((a, b) => (`${a.date} ${a.start}` < `${b.date} ${b.start}` ? -1 : 1));
const companyColor = (id) => (byId('companies', id) || {}).brandColor || 'var(--ink-2)';

function apptCustomerLabel(a) {
  const c = byId('customers', a.customerId);
  return c ? customerName(c) : (a.contactName || '');
}

/** Uhrzeit des Termins – und, wenn die Zeitzone von diesem Gerät abweicht, die Ortszeit hier. */
function timeLabel(a, withLocal = true) {
  const base = `${a.start}–${a.end}`;
  if (!withLocal || !a.timeZone || a.timeZone === deviceTimeZone()) return base;
  const { start } = appointmentTimes(a);
  const local = timeIn(start, deviceTimeZone());
  const localDate = dateIn(start, deviceTimeZone());
  if (local === a.start && localDate === a.date) return `${base} ${tzShort(a.timeZone, start)}`;
  return `${base} ${tzShort(a.timeZone, start)} (bei dir ${local}${localDate !== a.date ? `, ${date(localDate)}` : ''})`;
}

function tzOptions(current) {
  const list = [...new Set([deviceTimeZone(), ...TIME_ZONES, current].filter(Boolean))];
  const now = new Date();
  return list.map((tz) => ({ id: tz, label: `${tz.replace(/_/g, ' ')} (${tzShort(tz, now)})${tz === deviceTimeZone() ? ', dieses Gerät' : ''}` }));
}

/* ---------- Termin anlegen und bearbeiten ---------- */

/**
 * Formular für einen Termin. `appointment` ist ein bestehender oder vorbelegter neuer Termin.
 * Nach dem Anlegen öffnet sich die Einladung (Text und Kalenderdatei).
 */
export function AppointmentModal({ appointment, onClose }) {
  const isNew = !byId('appointments', appointment.id);
  const [a, setA] = useState(() => ({ ...appointment }));
  const [busy, setBusy] = useState(false);
  const [newCustomer, setNewCustomer] = useState(null);
  const [invite, setInvite] = useState(null);
  const companies = activeCompanies();
  const set = (k) => (v) => setA((p) => ({ ...p, [k]: v }));

  const customerOptions = state.customers
    .filter((c) => c.active !== false || c.id === a.customerId)
    .sort((x, y) => customerName(x).localeCompare(customerName(y), 'de'))
    .map((c) => ({ id: c.id, label: customerName(c), sub: [c.kind === 'contact' ? 'Kontakt' : 'Kunde', c.number, c.city].filter(Boolean).join(', '), search: `${c.firstName} ${c.lastName} ${c.contact} ${c.email}` }));

  function pickCompany(id) {
    const next = byId('companies', id);
    const old = byId('companies', a.companyId);
    setA((p) => {
      const out = { ...p, companyId: id };
      if (!next) return out;
      // Meeting-Angaben des bisherigen Unternehmens durch die des neuen ersetzen – eigene Eingaben bleiben.
      const fromOld = (k, ok) => !p[k] || (old && String(p[k]) === String(old[ok] || ''));
      if (fromOld('meetingProvider', 'meetingProvider')) out.meetingProvider = next.meetingProvider || '';
      if (fromOld('meetingUrl', 'meetingUrl')) out.meetingUrl = next.meetingUrl || '';
      if (fromOld('meetingDetails', 'meetingDetails')) out.meetingDetails = next.meetingDetails || '';
      if (next.meetingTimeZone && (!p.timeZone || (old && p.timeZone === (old.meetingTimeZone || deviceTimeZone())))) out.timeZone = next.meetingTimeZone;
      const cust = byId('customers', p.customerId);
      if (!(cust && cust.language)) out.language = next.language || 'de';
      return out;
    });
  }

  function pickCustomer(id) {
    const c = byId('customers', id);
    const prev = byId('customers', a.customerId);
    setA((p) => ({
      ...p,
      customerId: id || '',
      attendees: (!p.attendees || (prev && p.attendees === prev.email)) ? ((c && c.email) || '') : p.attendees,
      language: c && c.language ? c.language : p.language,
    }));
  }

  function setStart(v) {
    // Beginn verschieben: die Dauer bleibt gleich.
    setA((p) => {
      const toMin = (t) => { const [h, m] = String(t || '0:0').split(':').map(Number); return h * 60 + m; };
      const dur = Math.max(toMin(p.end) - toMin(p.start), 15);
      const endMin = Math.min(toMin(v) + dur, 23 * 60 + 59);
      const end = /^\d\d:\d\d$/.test(v) ? `${String(Math.floor(endMin / 60)).padStart(2, '0')}:${String(endMin % 60).padStart(2, '0')}` : p.end;
      return { ...p, start: v, end };
    });
  }

  async function submit() {
    setBusy(true);
    const saved = await attempt(() => saveAppointment(a));
    setBusy(false);
    if (!saved) return;
    toast(isNew ? 'Termin angelegt' : 'Termin gespeichert', 'good');
    if (isNew) setInvite(saved); else onClose(saved);
  }

  async function remove() {
    const ok = await ask({ title: 'Termin löschen?', text: `„${a.title || 'Termin'}“ am ${date(a.date)} wird gelöscht. Im Protokoll bleibt der Vorgang stehen.`, confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteAppointment(a.id); return true; });
    if (done) { toast('Termin gelöscht', 'good'); onClose(); }
  }

  if (invite) return html`<${InviteModal} appointment=${invite} justCreated onClose=${() => onClose(invite)} />`;

  const cust = byId('customers', a.customerId);
  const stored = byId('appointments', a.id);
  return html`<${Modal} title=${isNew ? 'Neuer Termin' : 'Termin bearbeiten'} onClose=${() => onClose()} size="lg" onSubmit=${submit}
    footer=${html`
      ${!isNew && html`<${Menu} label="Mehr" items=${[
        { label: 'Einladung und Kalenderdatei', icon: 'mail', onClick: () => setInvite(stored || a) },
        stored && { label: stored.status === 'done' ? 'Dokumentation bearbeiten' : 'Termin dokumentieren', icon: 'edit', onClick: () => { onClose(); documentAppointment(stored); } },
        stored && stored.status === 'planned' && { label: 'Termin absagen', icon: 'x', onClick: () => cancelAppointment(stored, onClose) },
        stored && stored.status !== 'planned' && { label: 'Wieder als geplant führen', icon: 'undo', onClick: async () => { await attempt(() => setAppointmentStatus(stored.id, 'planned')); onClose(); } },
        { label: 'Termin löschen', icon: 'trash', danger: true, onClick: remove },
      ]} />`}
      <span class="spacer"></span>
      <${Button} onClick=${() => onClose()}>Abbrechen<//>
      <${Button} variant="primary" type="submit" busy=${busy}>${isNew ? 'Termin anlegen' : 'Speichern'}<//>`}>
    ${stored && stored.status !== 'planned' && html`<${Notice} tone=${stored.status === 'done' ? 'good' : 'warn'}>
      ${stored.status === 'done' ? 'Dieser Termin hat stattgefunden.' : 'Dieser Termin ist abgesagt.'}
      ${stored.outcome ? html`<div class="pre notice-sub">${stored.outcome}</div>` : ''}
      ${stored.nextSteps ? html`<div class="pre notice-sub">Nächste Schritte: ${stored.nextSteps}</div>` : ''}
    <//>`}
    <div class="form-grid">
      <${SelectField} class="span-2" label="Über Unternehmen" value=${a.companyId} onChange=${pickCompany}
        placeholder="Unternehmen wählen" options=${companies.map((c) => ({ id: c.id, label: c.name }))}
        hint="Bestimmt Meeting-Link und Absender" />
      <${Field} class="span-2" label="Kontakt" htmlFor="appt-customer">
        <${Combobox} id="appt-customer" options=${customerOptions} value=${a.customerId} placeholder="Kontakt suchen (optional)"
          onChange=${pickCustomer} onCreate=${(text) => setNewCustomer({ company: text, kind: 'contact' })} createLabel="als Kontakt anlegen" />
      <//>
      <${TextField} class="span-2" label="Gesprächspartner" value=${a.contactName} onInput=${set('contactName')}
        placeholder=${cust ? (customerPerson(cust) || customerName(cust)) : 'Name'} hint="Für die Anrede in der Einladung" />
      <${TextField} class="span-6" label="Titel" value=${a.title} onInput=${set('title')}
        placeholder=${cust ? `Termin mit ${customerName(cust)}` : 'z. B. Erstgespräch, Strategie-Call'} />
      <${DateField} class="span-2" label="Datum" value=${a.date} onInput=${set('date')} />
      <${TextField} class="span-1" label="Beginn" type="time" value=${a.start} onInput=${setStart} />
      <${TextField} class="span-1" label="Ende" type="time" value=${a.end} onInput=${set('end')} />
      <${SelectField} class="span-2" label="Zeitzone" value=${a.timeZone} onChange=${set('timeZone')} options=${tzOptions(a.timeZone)}
        hint=${a.timeZone !== deviceTimeZone() && a.date && /^\d\d:\d\d$/.test(a.start || '') && timeIn(appointmentTimes(a).start, deviceTimeZone()) !== a.start ? `Bei dir: ${timeIn(appointmentTimes(a).start, deviceTimeZone())} Uhr` : ''} />
      <${Field} class="span-4" label="Art">
        <${Segmented} label="Art des Termins" value=${a.kind} onChange=${set('kind')} options=${APPOINTMENT_KINDS} />
      <//>
      <${Field} class="span-2" label="Sprache der Einladung">
        <${Segmented} label="Sprache der Einladung" value=${a.language || 'de'} onChange=${set('language')} options=${LANGUAGES} />
      <//>
      ${a.kind === 'video' && html`
        <${SelectField} class="span-2" label="Dienst" value=${a.meetingProvider} onChange=${set('meetingProvider')}
          placeholder="Bitte wählen" options=${MEETING_PROVIDERS} />
        <${TextField} class="span-4" label="Meeting-Link" value=${a.meetingUrl} onInput=${set('meetingUrl')} placeholder="https://…"
          hint=${!a.meetingUrl && a.companyId ? 'Einen Standard-Link je Unternehmen trägst du unter Unternehmen → Termine und Meetings ein.' : ''} />
        <${TextArea} class="span-6" label="Zugangsdaten" value=${a.meetingDetails} onInput=${set('meetingDetails')} rows=${2}
          placeholder="z. B. Meeting-ID, Kenncode, Einwahlnummer" />`}
      ${a.kind === 'phone' && html`<${TextField} class="span-6" label="Telefon" value=${a.location} onInput=${set('location')} placeholder="z. B. Ich rufe Sie an unter +49 …" />`}
      ${a.kind === 'onsite' && html`<${TextField} class="span-6" label="Ort" value=${a.location} onInput=${set('location')} placeholder="Adresse oder Treffpunkt" />`}
      <${TextField} class="span-6" label="E-Mail der Teilnehmer" value=${a.attendees} onInput=${set('attendees')}
        hint="Mehrere Adressen mit Komma trennen. Wird für die Einladung verwendet." />
      <${TextArea} class="span-6" label="Themen / Agenda" value=${a.agenda} onInput=${set('agenda')} rows=${3}
        hint="Steht in der Einladung und in der Kalenderdatei" />
    </div>
    ${newCustomer && html`<${CustomerFormModal} customer=${{ ...newCustomer }} onClose=${() => setNewCustomer(null)}
      onSaved=${(c) => pickCustomer(c.id)} />`}
  <//>`;
}

/* ---------- Termin dokumentieren ----------
 * Ein Fenster für Ergebnis, nächste Schritte und To-dos. Von überall aufrufbar über documentAppointment(appt);
 * angezeigt wird es vom AppointmentDocHost im Rahmen der App. */

let docState = null;
const docListeners = new Set();
const setDocState = (v) => { docState = v; for (const l of docListeners) l(v); };

function documentAppointment(appt, done) { setDocState({ appt, done }); }

export function AppointmentDocHost() {
  const [d, setD] = useState(docState);
  useEffect(() => { docListeners.add(setD); return () => docListeners.delete(setD); }, []);
  if (!d) return null;
  return html`<${DocumentModal} key=${d.appt.id} appointment=${d.appt}
    onClose=${(rec) => { setDocState(null); if (rec && d.done) d.done(rec); }} />`;
}

function DocumentModal({ appointment, onClose }) {
  const a = byId('appointments', appointment.id) || appointment;
  const [outcome, setOutcome] = useState(a.outcome || '');
  const [nextSteps, setNextSteps] = useState(a.nextSteps || '');
  const defaultDue = addDays(todayISO(), 7);
  const [rows, setRows] = useState([{ key: 1, title: '', due: defaultDue }]);
  const [busy, setBusy] = useState(false);
  const existing = state.todos.filter((t) => t.appointmentId === a.id);
  const setRow = (key, patch) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  const addRow = () => setRows((rs) => [...rs, { key: Math.max(0, ...rs.map((r) => r.key)) + 1, title: '', due: defaultDue }]);
  async function submit() {
    setBusy(true);
    const res = await attempt(() => completeAppointment(a.id, { outcome, nextSteps, todos: rows }));
    setBusy(false);
    if (!res) return;
    toast(res.todos.length ? `Termin dokumentiert, ${res.todos.length} ${res.todos.length === 1 ? 'To-do' : 'To-dos'} angelegt` : 'Termin dokumentiert', 'good');
    onClose(res.appointment);
  }
  return html`<${Modal} title="Termin dokumentieren" onClose=${() => onClose()} size="lg" onSubmit=${submit}
    footer=${html`<${Button} onClick=${() => onClose()}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Speichern<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${companyColor(a.companyId)}`}></span>
      <div><div class="strong">${a.title}</div>
        <div class="muted-text">${longDate(a.date)}, ${a.start}–${a.end}${apptCustomerLabel(a) ? ` · ${apptCustomerLabel(a)}` : ''}</div></div>
    </div>
    <div class="form-grid">
      <${TextArea} class="span-6" label="Ergebnis / kurzes Statement" value=${outcome} onInput=${setOutcome} rows=${3}
        placeholder="Was wurde besprochen, wie ist es gelaufen?" />
      <${TextArea} class="span-6" label="Nächste Schritte" value=${nextSteps} onInput=${setNextSteps} rows=${2}
        placeholder="z. B. Angebot bis Freitag, Folgetermin in zwei Wochen" />
    </div>
    <h3 class="sub-head">To-dos aus diesem Termin</h3>
    ${existing.length > 0 && html`<${TodoList} items=${existing} showCustomer=${false} />`}
    <div class="doc-todos">
      ${rows.map((r, i) => html`<div class="doc-todo" key=${r.key}>
        <input class="input" placeholder="To-do, z. B. Angebot schicken" aria-label=${`To-do ${i + 1}`} value=${r.title}
          onInput=${(e) => setRow(r.key, { title: e.target.value })}
          onKeyDown=${(e) => { if (e.key === 'Enter') { e.preventDefault(); if (r.title.trim()) addRow(); } }} />
        <input class="input" type="date" aria-label=${`To-do ${i + 1}: fällig am`} value=${r.due} onInput=${(e) => setRow(r.key, { due: e.target.value })} />
        <${Button} variant="ghost" small icon="trash" title="Zeile entfernen" disabled=${rows.length === 1 && !r.title}
          onClick=${() => setRows((rs) => (rs.length === 1 ? [{ key: r.key + 1, title: '', due: defaultDue }] : rs.filter((x) => x.key !== r.key)))} />
      </div>`)}
      <${Button} small icon="plus" onClick=${addRow}>Weiteres To-do<//>
    </div>
    <p class="field-hint">To-dos erscheinen beim Kontakt, im Dashboard und unter „To-dos“. Leere Zeilen werden ignoriert.</p>
  <//>`;
}

/* ---------- Nachfrage nach abgelaufenen Terminen ---------- */

export const followUpAppointments = (now = new Date()) => sortAppointments(state.appointments.filter(inScope).filter((a) => needsFollowUp(a, now)));

async function noNotes(a) {
  const rec = await attempt(() => setAppointmentStatus(a.id, 'done', ''));
  if (rec) toast('Als stattgefunden vermerkt', 'good');
}
async function snooze(a, hours) {
  const until = hours === 'morning'
    ? (() => { const d = new Date(); d.setDate(d.getDate() + 1); d.setHours(9, 0, 0, 0); return d; })()
    : new Date(Date.now() + hours * 3600000);
  const rec = await attempt(() => snoozeFollowUp(a.id, until.toISOString()));
  if (rec) toast(`Erinnerung verschoben auf ${until.toLocaleString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })} Uhr`, 'good');
}

/** Dashboard: Termine, die vorbei sind – Ergebnis und To-dos eintragen? */
export function FollowUpPanel() {
  const items = followUpAppointments();
  if (!items.length) return null;
  return html`<section class="followups" aria-label="Termine nachbereiten">
    <div class="followups-head"><${Icon} name="calendar" /><strong>${items.length === 1 ? 'Ein Termin ist vorbei' : `${items.length} Termine sind vorbei`}</strong>
      <span class="muted-text">Möchtest du Ergebnis, nächste Schritte oder To-dos festhalten?</span></div>
    <ul>
      ${items.slice(0, 5).map((a) => html`<li key=${a.id}>
        <span class="followup-what" style=${`--chip:${companyColor(a.companyId)}`}>
          <span class="strong">${a.title}</span>
          <span class="cell-sub">${date(a.date)}, ${a.start}–${a.end}${apptCustomerLabel(a) ? ` · ${apptCustomerLabel(a)}` : ''}</span>
        </span>
        <span class="followup-actions">
          <${Button} small variant="primary" icon="edit" onClick=${() => documentAppointment(a)}>Ja, dokumentieren<//>
          <${Button} small onClick=${() => noNotes(a)}>Nein<//>
          <${Menu} small label="Später" icon="clock" items=${[
            { label: 'In einer Stunde', onClick: () => snooze(a, 1) },
            { label: 'In drei Stunden', onClick: () => snooze(a, 3) },
            { label: 'Morgen früh', onClick: () => snooze(a, 'morning') },
            { label: 'In drei Tagen', onClick: () => snooze(a, 72) },
          ]} />
        </span>
      </li>`)}
    </ul>
    ${items.length > 5 && html`<p class="cell-sub">und ${items.length - 5} weitere im Kalender</p>`}
  </section>`;
}

async function cancelAppointment(appt, done) {
  const reason = await ask({
    title: 'Termin absagen?',
    text: 'Der Termin bleibt im Kalender sichtbar, als abgesagt markiert. Eine neue Kalenderdatei mit dem Status „abgesagt“ kannst du danach über die Einladung erzeugen.',
    input: { label: 'Grund (optional)', value: '', multiline: false },
    confirmLabel: 'Absagen', danger: true,
  });
  if (reason === null) return;
  const rec = await attempt(() => setAppointmentStatus(appt.id, 'cancelled', reason));
  if (rec) { toast('Termin abgesagt', 'good'); if (done) done(rec); }
}

/* ---------- Einladung und Kalenderdatei ---------- */

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch (_) { /* Rückfall unten */ }
  const ta = document.createElement('textarea');
  ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
  ta.remove();
  return ok;
}

export function icsFileName(appt) {
  return `${safeFileName(`Termin ${appt.date} ${appt.start.replace(':', '-')} ${apptCustomerLabel(appt) || appt.title || ''}`.trim())}.ics`;
}

export function InviteModal({ appointment, onClose, justCreated }) {
  const company = byId('companies', appointment.companyId);
  const customer = byId('customers', appointment.customerId);
  const initial = useMemo(() => invitationText(appointment, { company, customer, settings: state.settings }), [appointment.id, appointment.updatedAt]);
  const [to, setTo] = useState(appointment.attendees || (customer && customer.email) || '');
  const [subject, setSubject] = useState(initial.subject);
  const [body, setBody] = useState(initial.body);
  const [busy, setBusy] = useState('');
  const canShare = typeof navigator !== 'undefined' && !!navigator.canShare;

  const icsBlob = () => new Blob([buildIcs(appointment, { summary: subject, description: body })], { type: 'text/calendar;charset=utf-8' });
  function downloadIcs() { saveBlob(icsBlob(), icsFileName(appointment)); }
  async function copy() {
    const ok = await copyText(`${subject}\n\n${body}`);
    toast(ok ? 'Text kopiert' : 'Kopieren hat nicht geklappt – bitte den Text markieren und kopieren.', ok ? 'good' : 'bad');
  }
  function openMail() {
    const href = `mailto:${encodeURIComponent(to.trim()).replace(/%2C/g, ',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    pauseUnloadWarning();
    window.location.href = href;
  }
  async function share() {
    setBusy('share');
    await attempt(async () => {
      const file = new File([icsBlob()], icsFileName(appointment), { type: 'text/calendar' });
      if (!navigator.canShare({ files: [file] })) throw new Error('Dieser Browser kann die Kalenderdatei nicht direkt teilen. Bitte herunterladen und anhängen.');
      try { await navigator.share({ files: [file], title: subject, text: body }); } catch (err) { if (!err || err.name !== 'AbortError') throw err; }
    });
    setBusy('');
  }

  return html`<${Modal} title=${justCreated ? 'Termin angelegt – Einladung' : 'Einladung und Kalenderdatei'} onClose=${onClose} size="lg"
    footer=${html`<${Button} variant="primary" onClick=${onClose}>Fertig<//>`}>
    <div class="invite-head">
      <span class="invite-dot" style=${`background:${company ? company.brandColor : 'var(--ink-2)'}`}></span>
      <div>
        <div class="strong">${appointment.title}</div>
        <div class="muted-text">${longDate(appointment.date)}, ${timeLabel(appointment)}${company ? ` · über ${company.name}` : ''}${appointment.kind === 'video' && appointment.meetingProvider ? ` · ${providerLabel(appointment.meetingProvider)}` : ''}</div>
      </div>
    </div>
    <${Notice} tone="info">
      Das Tool verschickt nichts selbst. Die Kalenderdatei (.ics) enthält Datum, Uhrzeit, Link und den Text unten – öffne sie, um den Termin in deinen Kalender zu übernehmen, oder hänge sie an die E-Mail an.
    <//>
    <div class="form-grid">
      <${TextField} class="span-6" label="Empfänger" value=${to} onInput=${setTo} hint=${to ? '' : 'Keine E-Mail-Adresse hinterlegt.'} />
      <${TextField} class="span-6" label="Betreff" value=${subject} onInput=${setSubject} />
      <${TextArea} class="span-6" label="Text" value=${body} onInput=${setBody} rows=${12} hint="Änderungen hier gelten auch für die Kalenderdatei." />
    </div>
    <div class="send-steps">
      <${Button} icon="calendar" onClick=${downloadIcs}>Kalenderdatei herunterladen<//>
      <${Button} icon="copy" onClick=${copy}>Text kopieren<//>
      <${Button} icon="mail" onClick=${openMail} disabled=${!to.trim()}>E-Mail-Programm öffnen<//>
      ${canShare && html`<${Button} icon="send" busy=${busy === 'share'} onClick=${share}>Teilen<//>`}
    </div>
  <//>`;
}

/* ---------- Kalender ---------- */

function monthMatrix(year, month) {
  const first = new Date(Date.UTC(year, month, 1));
  const offset = (first.getUTCDay() + 6) % 7;   // Montag = 0
  const start = new Date(Date.UTC(year, month, 1 - offset));
  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start.getTime() + i * 86400000);
    days.push({ iso: d.toISOString().slice(0, 10), inMonth: d.getUTCMonth() === month });
  }
  // Letzte Woche weglassen, wenn sie ganz im Folgemonat liegt.
  return days.slice(35).every((d) => !d.inMonth) ? days.slice(0, 35) : days;
}

function ApptChip({ a, onOpen }) {
  const st = a.status;
  return html`<button type="button" class=${`cal-chip${st === 'cancelled' ? ' is-cancelled' : ''}${st === 'done' ? ' is-done' : ''}`}
    style=${`--chip:${companyColor(a.companyId)}`} onClick=${(e) => { e.stopPropagation(); onOpen(a); }}
    title=${`${a.start}–${a.end} ${a.title}${apptCustomerLabel(a) ? ` (${apptCustomerLabel(a)})` : ''}`}>
    <span class="cal-chip-time">${a.start}</span><span class="cal-chip-title">${a.title}</span>
  </button>`;
}

export function AppointmentsView({ params }) {
  useStore();
  const today = todayISO();
  const [view, setView] = useState('month');
  const [cursor, setCursor] = useState(() => ({ y: Number(today.slice(0, 4)), m: Number(today.slice(5, 7)) - 1 }));
  const [editing, setEditing] = useState(() => (params && params.open && byId('appointments', params.open)) ? byId('appointments', params.open) : null);
  const [showPast, setShowPast] = useState(false);
  const [q, setQ] = useState('');
  const company = currentCompany();

  const list = sortAppointments(state.appointments.filter(inScope))
    .filter((a) => !q || matches(q, a.title, apptCustomerLabel(a), a.agenda, a.outcome));
  const byDate = new Map();
  for (const a of list) { if (!byDate.has(a.date)) byDate.set(a.date, []); byDate.get(a.date).push(a); }

  function create(dateISO) {
    const c = company || (activeCompanies().length === 1 ? activeCompanies()[0] : activeCompanies()[0]);
    setEditing(newAppointment(c, { date: dateISO || today }));
  }
  const shift = (n) => setCursor((c) => { const d = new Date(Date.UTC(c.y, c.m + n, 1)); return { y: d.getUTCFullYear(), m: d.getUTCMonth() }; });
  const days = monthMatrix(cursor.y, cursor.m);
  const upcoming = list.filter((a) => a.date >= today);
  const past = list.filter((a) => a.date < today).reverse();

  return html`
    <${PageHeader} title="Termine" sub=${company ? `Termine über ${company.name}` : 'Alle Termine aller Unternehmen'}>
      <${Segmented} label="Ansicht" value=${view} onChange=${setView} options=${[{ id: 'month', label: 'Monat' }, { id: 'list', label: 'Liste' }]} />
      <${Button} variant="primary" icon="plus" onClick=${() => create(today)}>Neuer Termin<//>
    <//>
    ${view === 'month' ? html`
      <div class="cal-toolbar">
        <${Button} small icon="chevronLeft" title="Vorheriger Monat" onClick=${() => shift(-1)} />
        <h2 class="cal-title">${MONTHS[cursor.m]} ${cursor.y}</h2>
        <${Button} small icon="chevronRight" title="Nächster Monat" onClick=${() => shift(1)} />
        <${Button} small onClick=${() => setCursor({ y: Number(today.slice(0, 4)), m: Number(today.slice(5, 7)) - 1 })}>Heute<//>
        <span class="cal-legend">${activeCompanies().map((c) => html`<span class="cal-legend-item"><i style=${`background:${c.brandColor}`}></i>${c.shortName || c.name}</span>`)}</span>
      </div>
      <div class="cal" role="grid" aria-label=${`Kalender ${MONTHS[cursor.m]} ${cursor.y}`}>
        ${WEEKDAYS.map((w) => html`<div class="cal-wd" role="columnheader">${w}</div>`)}
        ${days.map((d) => {
          const items = byDate.get(d.iso) || [];
          return html`<div role="gridcell" class=${`cal-day${d.inMonth ? '' : ' is-out'}${d.iso === today ? ' is-today' : ''}`}
            onClick=${() => create(d.iso)} title="Termin an diesem Tag anlegen">
            <span class="cal-num">${Number(d.iso.slice(8, 10))}</span>
            ${items.slice(0, 3).map((a) => html`<${ApptChip} key=${a.id} a=${a} onOpen=${setEditing} />`)}
            ${items.length > 3 && html`<button type="button" class="cal-more" onClick=${(e) => { e.stopPropagation(); setView('list'); }}>+${items.length - 3} weitere</button>`}
          </div>`;
        })}
      </div>
      <p class="footnote">Klick auf einen Tag legt dort einen Termin an. Die Farbe zeigt, über welches Unternehmen der Termin läuft.</p>
    ` : html`
      <div class="filters">
        <input class="input filter-select" type="search" placeholder="Termine durchsuchen" aria-label="Termine durchsuchen" value=${q} onInput=${(e) => setQ(e.target.value)} />
        <${Chips} label="Zeitraum" value=${showPast ? 'past' : 'next'} onChange=${(v) => setShowPast(v === 'past')}
          options=${[{ id: 'next', label: 'Anstehend', count: upcoming.length }, { id: 'past', label: 'Vergangen', count: past.length }]} />
      </div>
      ${(showPast ? past : upcoming).length
        ? html`<${AppointmentList} items=${showPast ? past : upcoming} onOpen=${setEditing} showCustomer />`
        : html`<${EmptyState} icon="calendar" title=${showPast ? 'Keine vergangenen Termine' : 'Keine anstehenden Termine'}
            text="Termine legst du hier oder direkt beim Kontakt an.">
            <${Button} variant="primary" icon="plus" onClick=${() => create(today)}>Termin anlegen<//>
          <//>`}
    `}
    ${editing && html`<${AppointmentModal} key=${editing.id} appointment=${editing} onClose=${() => setEditing(null)} />`}
  `;
}

/** Terminliste (Kalender-Liste, Kundenakte, Dashboard). */
export function AppointmentList({ items, onOpen, showCustomer, compact }) {
  const today = todayISO();
  let lastDate = '';
  return html`<ul class=${`appt-list${compact ? ' is-compact' : ''}`}>
    ${items.map((a) => {
      const head = a.date !== lastDate && !compact;
      lastDate = a.date;
      const st = APPOINTMENT_STATUS[a.status] || APPOINTMENT_STATUS.planned;
      return html`${head && html`<li class="appt-date" key=${`d-${a.date}`}>${a.date === today ? 'Heute, ' : (a.date === addDays(today, 1) ? 'Morgen, ' : '')}${longDate(a.date)}</li>`}
        <li key=${a.id}>
          <button type="button" class="appt-row" onClick=${() => onOpen(a)} style=${`--chip:${companyColor(a.companyId)}`}>
            <span class="appt-time">${compact ? html`${date(a.date)}<br />` : ''}${a.start}–${a.end}</span>
            <span class="appt-main">
              <span class="appt-title">${a.title}${a.status !== 'planned' ? html` <${Badge} tone=${st.tone}>${st.label}<//>` : ''}</span>
              <span class="cell-sub">${[showCustomer && apptCustomerLabel(a), a.kind === 'video' ? (providerLabel(a.meetingProvider) || 'Videocall') : (APPOINTMENT_KINDS.find((k) => k.id === a.kind) || {}).label,
                a.timeZone !== deviceTimeZone() ? timeLabel(a).replace(`${a.start}–${a.end} `, '') : ''].filter(Boolean).join(' · ')}</span>
            </span>
            <span class="appt-co"><${CompanyTag} id=${a.companyId} /></span>
          </button>
        </li>`;
    })}
  </ul>`;
}

/** Dashboard: die nächsten Termine (14 Tage). */
export function UpcomingAppointments() {
  const [editing, setEditing] = useState(null);
  const today = todayISO();
  const until = addDays(today, 14);
  const now = new Date();
  const items = sortAppointments(state.appointments.filter(inScope)
    .filter((a) => a.status === 'planned' && a.date >= today && a.date <= until && appointmentTimes(a).end > now)).slice(0, 6);
  if (!items.length) {
    return html`<${Panel} title="Nächste Termine" class="dash-appts" action=${html`<a class="panel-link" href="#/appointments">Kalender</a>`}>
      <p class="muted-text">Keine Termine in den nächsten 14 Tagen.</p>
    <//>`;
  }
  return html`<${Panel} title="Nächste Termine" class="dash-appts" action=${html`<a class="panel-link" href="#/appointments">Kalender</a>`}>
    <${AppointmentList} items=${items} onOpen=${setEditing} showCustomer />
    ${editing && html`<${AppointmentModal} key=${editing.id} appointment=${editing} onClose=${() => setEditing(null)} />`}
  <//>`;
}

export { documentAppointment, apptCustomerLabel, timeLabel };
