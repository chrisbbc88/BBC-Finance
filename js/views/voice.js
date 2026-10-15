// Sprachbefehle: sprechen (oder tippen) → Vorschau → ausführen.

import { html, useState, useEffect, useRef, navigate, toast, attempt } from '../ui/core.js';
import { Button, Modal, Notice, MicButton } from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { state, byId } from '../lib/store.js';
import {
  newTodo, newAppointment, newNote, newCustomer, newInvoice, newItem, customerName, deviceTimeZone, NOTE_KINDS, APPOINTMENT_KINDS, DOC_CURRENCIES,
} from '../lib/schema.js';
import {
  saveTodo, saveAppointment, saveNote, saveCustomer, completeAppointment, saveInvoiceDraft, itemFromService,
} from '../lib/actions.js';
import { buildContext, runVoiceCommand } from '../lib/voicecmd.js';
import { speechSupported, startListening, appendSpoken } from '../lib/speech.js';
import { date, money } from '../lib/format.js';
import { todayISO } from '../lib/util.js';
import { InviteModal } from './appointments.js';

const kindLabel = (list, id) => (list.find((k) => k.id === id) || {}).label || '';
const compName = (id) => (byId('companies', id) || {}).name || '';
function contactLabel(id, plan) {
  if (!id) return '';
  if (id.startsWith('ref:')) {
    const c = plan.actions.find((a) => a.type === 'contact' && a.ref === id.slice(4));
    return c ? `${customerName(c) || 'neuer Kontakt'} (neu)` : 'neuer Kontakt';
  }
  return customerName(byId('customers', id));
}
const addMinutes = (hhmm, min) => {
  const [h, m] = hhmm.split(':').map(Number);
  const t = Math.min(h * 60 + m + min, 23 * 60 + 59);
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

/** Plan ausführen – in der Reihenfolge: neue Kontakte zuerst, dann alles andere. Gibt die Ergebnisse zurück. */
export async function executePlan(plan) {
  const results = [];
  const refs = {};
  const resolve = (id) => (id && id.startsWith('ref:') ? refs[id.slice(4)] || '' : id || '');
  const ordered = [...plan.actions.filter((a) => a.type === 'contact'), ...plan.actions.filter((a) => a.type !== 'contact')];
  for (const a of ordered) {
    if (a.off) continue;
    try {
      if (a.type === 'contact') {
        const c = await saveCustomer(newCustomer({ kind: a.kind, company: a.company, firstName: a.firstName, lastName: a.lastName, email: a.email, phone: a.phone, city: a.city, notes: a.notes }));
        refs[a.ref] = c.id;
        results.push({ ok: true, text: `${a.kind === 'customer' ? 'Kunde' : 'Kontakt'} ${customerName(c)} (${c.number}) angelegt`, href: `/customers/${c.id}` });
      } else if (a.type === 'todos') {
        const items = a.items.filter((t) => !t.off);
        for (const t of items) await saveTodo(newTodo({ title: t.title, due: t.due, customerId: resolve(t.customerId), companyId: t.companyId }));
        if (items.length) results.push({ ok: true, text: `${items.length} ${items.length === 1 ? 'To-do' : 'To-dos'} angelegt`, href: '/todos' });
      } else if (a.type === 'appointment') {
        const company = byId('companies', a.companyId);
        const base = newAppointment(company, { start: a.start || '10:00' });
        const customer = byId('customers', resolve(a.customerId));
        const appt = await saveAppointment({
          ...base, customerId: customer ? customer.id : '', contactName: a.contactName, title: a.title, date: a.date || todayISO(),
          end: a.duration ? addMinutes(a.start, a.duration) : base.end, kind: a.kind, location: a.location, agenda: a.agenda,
          attendees: customer && customer.email ? customer.email : '', language: customer && customer.language ? customer.language : base.language,
        });
        results.push({ ok: true, text: `Termin „${appt.title}“ am ${date(appt.date)} um ${appt.start} Uhr angelegt`, appointment: appt });
      } else if (a.type === 'note') {
        const n = await saveNote(newNote({ customerId: resolve(a.customerId), kind: a.kind, title: a.title, text: a.text, date: a.date || todayISO() }));
        results.push({ ok: true, text: `Notiz bei ${customerName(byId('customers', n.customerId))} eingetragen`, href: `/customers/${n.customerId}` });
      } else if (a.type === 'document') {
        const res = await completeAppointment(a.appointmentId, { outcome: a.outcome, nextSteps: a.nextSteps, todos: a.todos.filter((t) => !t.off) });
        results.push({ ok: true, text: `Termin „${res.appointment.title}“ dokumentiert${res.todos.length ? `, ${res.todos.length} To-dos` : ''}`, href: res.appointment.customerId ? `/customers/${res.appointment.customerId}` : '/appointments' });
      } else if (a.type === 'invoice') {
        const company = byId('companies', a.companyId);
        const customer = byId('customers', resolve(a.customerId));
        const draft = newInvoice(company);
        draft.customerId = customer.id;
        if (customer.currency && DOC_CURRENCIES.includes(customer.currency)) draft.currency = customer.currency;
        if (customer.language) draft.language = customer.language;
        if (customer.paymentTermDays != null && customer.paymentTermDays !== '') draft.paymentTermDays = Number(customer.paymentTermDays);
        draft.items = a.items.map((it) => {
          const svc = it.serviceId ? byId('services', it.serviceId) : null;
          const item = svc ? itemFromService(svc, company) : newItem({ name: it.name, taxRate: Number(company.defaultTaxRate) || 0 });
          return { ...item, qty: it.qty, ...(it.priceCents != null ? { priceCents: it.priceCents } : {}), ...(it.name && !svc ? { name: it.name } : {}) };
        });
        const saved = await saveInvoiceDraft(draft);
        results.push({ ok: true, text: `Rechnungsentwurf für ${customerName(customer)} angelegt (${money(saved.totals.totalCents, saved.currency)})`, href: `/invoices/${saved.id}/edit` });
      }
    } catch (err) {
      results.push({ ok: false, text: err.message || String(err) });
    }
  }
  return results;
}

function ActionCard({ a, plan, onToggle, onToggleItem }) {
  const head = (icon, title) => html`<div class="voice-action-head">
    <input type="checkbox" checked=${!a.off} onChange=${onToggle} aria-label=${`${title} ausführen`} />
    <${Icon} name=${icon} size=${16} /><span>${title}</span></div>`;
  let body = null;
  let title = '';
  if (a.type === 'todos') {
    title = `${a.items.length} ${a.items.length === 1 ? 'To-do' : 'To-dos'}`;
    body = html`<ul>${a.items.map((t, i) => html`<li key=${i}><label>
      <input type="checkbox" checked=${!t.off} onChange=${() => onToggleItem(i)} />
      <span><strong>${t.title}</strong>${t.due ? ` · bis ${date(t.due)}` : ''}${t.customerId ? ` · ${contactLabel(t.customerId, plan)}` : ''}${t.companyId ? ` · ${compName(t.companyId)}` : ''}</span></label></li>`)}</ul>`;
    return html`<div class=${`voice-action${a.off ? ' is-off' : ''}`}>${head('check', title)}${body}${warn(a)}</div>`;
  }
  if (a.type === 'appointment') {
    title = `Termin: ${a.title || (a.customerId ? `Termin mit ${contactLabel(a.customerId, plan)}` : 'ohne Titel')}`;
    body = html`<ul>
      <li>${a.date ? date(a.date) : '–'}, ${a.start || '–'} Uhr${a.duration ? `, ${a.duration} Min.` : ''} · ${kindLabel(APPOINTMENT_KINDS, a.kind)}</li>
      <li>Über ${compName(a.companyId) || '–'}${a.customerId ? ` · mit ${contactLabel(a.customerId, plan)}` : ''}${a.contactName ? ` (${a.contactName})` : ''}</li>
      ${a.location && html`<li>${a.location}</li>`}
      ${a.agenda && html`<li>Themen: ${a.agenda}</li>`}</ul>`;
    return html`<div class=${`voice-action${a.off ? ' is-off' : ''}`}>${head('calendar', title)}${body}${warn(a)}</div>`;
  }
  if (a.type === 'note') {
    return html`<div class=${`voice-action${a.off ? ' is-off' : ''}`}>${head('note', `${kindLabel(NOTE_KINDS, a.kind)} bei ${contactLabel(a.customerId, plan)}`)}
      <ul><li>${a.title && html`<strong>${a.title}: </strong>`}${a.text}</li></ul>${warn(a)}</div>`;
  }
  if (a.type === 'contact') {
    return html`<div class=${`voice-action${a.off ? ' is-off' : ''}`}>${head('customers', `Neuer ${a.kind === 'customer' ? 'Kunde' : 'Kontakt'}: ${customerName(a) || '–'}`)}
      <ul><li>${[a.firstName && `${a.firstName} ${a.lastName}`, a.email, a.phone, a.city].filter(Boolean).join(' · ') || 'keine weiteren Angaben'}</li></ul>${warn(a)}</div>`;
  }
  if (a.type === 'document') {
    const appt = byId('appointments', a.appointmentId);
    return html`<div class=${`voice-action${a.off ? ' is-off' : ''}`}>${head('edit', `Termin dokumentieren: ${appt ? `${appt.title}, ${date(appt.date)}` : ''}`)}
      <ul>${a.outcome && html`<li>Ergebnis: ${a.outcome}</li>`}${a.nextSteps && html`<li>Nächste Schritte: ${a.nextSteps}</li>`}
        ${a.todos.map((t, i) => html`<li key=${i}><label><input type="checkbox" checked=${!t.off} onChange=${() => onToggleItem(i)} />
          <span>To-do: <strong>${t.title}</strong>${t.due ? ` · bis ${date(t.due)}` : ''}</span></label></li>`)}</ul>${warn(a)}</div>`;
  }
  if (a.type === 'invoice') {
    return html`<div class=${`voice-action${a.off ? ' is-off' : ''}`}>${head('invoice', `Rechnungsentwurf für ${contactLabel(a.customerId, plan)} über ${compName(a.companyId)}`)}
      <ul>${a.items.map((it, i) => { const s = it.serviceId ? byId('services', it.serviceId) : null; return html`<li key=${i}>${it.qty} × ${s ? s.name : it.name}${it.priceCents != null ? ` à ${money(it.priceCents, (byId('companies', a.companyId) || {}).currency || 'USD')}` : (s ? ` à ${money(s.priceCents, s.currency || 'USD')}` : '')}</li>`; })}</ul>
      <p class="field-hint">Nur Entwurf – du prüfst und erstellst ihn danach im Editor.</p>${warn(a)}</div>`;
  }
  return null;
}
const warn = (a) => (a.warnings && a.warnings.length ? html`<p class="field-hint tone-warn">${a.warnings.join(' ')}</p>` : null);

export function VoiceModal({ onClose }) {
  const [text, setText] = useState('');
  const [interim, setInterim] = useState('');
  const [listening, setListening] = useState(false);
  const [busy, setBusy] = useState('');
  const [plan, setPlan] = useState(null);
  const [results, setResults] = useState(null);
  const [invite, setInvite] = useState(null);
  const stopRef = useRef(null);
  const textRef = useRef('');
  textRef.current = text;
  const hasKey = !!state.settings.aiApiKey;
  const canSpeak = speechSupported();

  function listen() {
    if (listening) { if (stopRef.current) stopRef.current(); return; }
    try {
      stopRef.current = startListening({
        onFinal: (t) => setText((cur) => appendSpoken(cur, t)),
        onInterim: setInterim,
        onEnd: () => { setListening(false); setInterim(''); stopRef.current = null; },
        onError: (m) => toast(m, 'bad', 8000),
      });
      setListening(true);
      setPlan(null); setResults(null);
    } catch (err) { toast(err.message || String(err), 'bad'); }
  }
  useEffect(() => { if (canSpeak && hasKey) listen(); return () => { if (stopRef.current) stopRef.current(); }; }, []);

  async function understand() {
    if (stopRef.current) stopRef.current();
    const t = textRef.current.trim();
    if (!t) { toast('Bitte zuerst etwas sagen oder eintippen.', 'info'); return; }
    setBusy('ai');
    const ctx = buildContext({
      customers: state.customers, companies: state.companies, services: state.services, appointments: state.appointments, todos: state.todos,
    }, { today: todayISO(), timeZone: deviceTimeZone() });
    const res = await attempt(() => runVoiceCommand({ apiKey: state.settings.aiApiKey, model: state.settings.aiModel, text: t, context: ctx.text, map: ctx.map }));
    setBusy('');
    if (res) { setPlan(res); setResults(null); }
  }
  async function run() {
    setBusy('run');
    const res = await executePlan(plan);
    setBusy('');
    setResults(res);
    setPlan(null);
    const ok = res.filter((r) => r.ok).length;
    if (ok) toast(`${ok} ${ok === 1 ? 'Eintrag' : 'Einträge'} angelegt`, 'good');
  }
  const toggle = (i) => setPlan((p) => ({ ...p, actions: p.actions.map((a, j) => (j === i ? { ...a, off: !a.off } : a)) }));
  const toggleItem = (i, k) => setPlan((p) => ({
    ...p,
    actions: p.actions.map((a, j) => {
      if (j !== i) return a;
      const key = a.type === 'todos' ? 'items' : 'todos';
      return { ...a, [key]: a[key].map((t, n) => (n === k ? { ...t, off: !t.off } : t)) };
    }),
  }));
  const active = plan ? plan.actions.filter((a) => !a.off).length : 0;

  if (invite) return html`<${InviteModal} appointment=${invite} justCreated onClose=${() => setInvite(null)} />`;

  return html`<${Modal} title="Sprachbefehl" onClose=${onClose} size="lg"
    footer=${html`
      <${Button} onClick=${onClose}>${results ? 'Schließen' : 'Abbrechen'}<//>
      ${!results && !plan && html`<${Button} variant="primary" icon="sparkle" busy=${busy === 'ai'} disabled=${!hasKey || !text.trim()} onClick=${understand}>Verstehen<//>`}
      ${plan && html`<${Button} onClick=${() => setPlan(null)}>Ändern<//>`}
      ${plan && plan.actions.length > 0 && html`<${Button} variant="primary" icon="check" busy=${busy === 'run'} disabled=${!active} onClick=${run}>Ausführen<//>`}
      ${results && html`<${Button} variant="primary" icon="mic" onClick=${() => { setText(''); setResults(null); listen(); }}>Nächster Befehl<//>`}`}>
    ${!hasKey && html`<${Notice} tone="warn">Sprachbefehle laufen über die Anthropic-API. Trage dafür unter Einstellungen den API-Key ein (derselbe wie für die Belegerkennung).<//>`}
    ${!results && !plan && html`
      <div class="voice-stage">
        ${canSpeak
          ? html`<${MicButton} small=${false} onText=${(t) => setText((cur) => appendSpoken(cur, t))} label="Sprechen" />`
          : html`<p class="muted-text">Dieser Browser hat keine Spracherkennung (Chrome oder Safari verwenden). Du kannst den Befehl auch eintippen.</p>`}
        ${listening ? html`<span class="strong">Ich höre zu …</span>` : (canSpeak && html`<span class="muted-text">Auf das Mikrofon tippen und sprechen</span>`)}
        ${interim && html`<span class="mic-interim">${interim}</span>`}
      </div>
      <textarea class="input textarea" rows="3" aria-label="Befehl" placeholder="Was soll ich tun?" value=${text} onInput=${(e) => setText(e.target.value)}></textarea>
      <ul class="voice-examples">
        <li>„Trag für Nordlicht Immobilien drei To-dos ein: Angebot schicken bis Freitag, Referenzen raussuchen, Rückruf Montag.“</li>
        <li>„Termin mit Frau Petersen nächsten Dienstag um 10 Uhr über Build Buddy Consulting, eine Stunde, Thema Website-Relaunch.“</li>
        <li>„Den Termin von heute mit Alpenblick dokumentieren: Budget steht, nächste Woche Angebot. To-do: Angebot bis Mittwoch.“</li>
        <li>„Was steht heute an?“</li>
      </ul>`}
    ${plan && html`
      <p class="muted-text">„${text}“</p>
      ${plan.answers.map((t) => html`<div class="voice-answer">${t}</div>`)}
      ${plan.actions.length > 0 && html`<p class="field-hint">Bitte prüfen. Abgewählte Punkte werden nicht angelegt.</p>`}
      <div class="voice-plan">
        ${plan.actions.map((a, i) => html`<${ActionCard} key=${i} a=${a} plan=${plan} onToggle=${() => toggle(i)} onToggleItem=${(k) => toggleItem(i, k)} />`)}
      </div>`}
    ${results && html`<ul class="voice-done">
      ${results.map((r) => html`<li class=${r.ok ? '' : 'tone-bad'}>${r.ok ? '✓' : '✕'} ${r.text}
        ${r.href && html` · <a href=${`#${r.href}`} onClick=${onClose}>Öffnen</a>`}
        ${r.appointment && html` · <button type="button" class="link-btn" onClick=${() => setInvite(r.appointment)}>Einladung</button>`}</li>`)}
    </ul>`}
  <//>`;
}

/** Knopf oben in der Leiste. */
export function VoiceButton() {
  const [open, setOpen] = useState(false);
  return html`
    <button type="button" class="backup-btn voice-btn" onClick=${() => setOpen(true)} title="Sprachbefehl: To-dos, Termine, Notizen per Sprache">
      <${Icon} name="mic" /><span>Sprechen</span>
    </button>
    ${open && html`<${VoiceModal} onClose=${() => setOpen(false)} />`}`;
}
export { navigate };
