// Versand von Belegen und Zahlungserinnerungen.
// Ohne Server kann das Tool keine E-Mails selbst verschicken: Es erzeugt die PDF, füllt Betreff und
// Text vor und übergibt beides an das E-Mail-Programm (mailto) oder – wo der Browser es kann – an „Teilen“.

import { html, useState, toast, attempt, pauseUnloadWarning } from '../ui/core.js';
import { Button, Modal, TextField, TextArea, Notice, SelectField } from '../ui/components.js';
import { state, byId, paymentsOf, remindersOf } from '../lib/store.js';
import { buildDocModel } from '../lib/docmodel.js';
import { docDefinition, pdfBlob, saveBlob } from '../lib/pdf.js';
import { moneyDoc, date, fill } from '../lib/format.js';
import { customerPerson, customerName, REMINDER_LEVELS } from '../lib/schema.js';
import { openCents } from '../lib/calc.js';
import { markInvoiceSent, setQuoteStatus, logReminder } from '../lib/actions.js';

export async function downloadDoc(doc, coll) {
  const model = buildDocModel(doc, coll);
  const blob = await pdfBlob(docDefinition(model));
  saveBlob(blob, model.fileName);
  return { blob, model };
}

function templateVars(doc, coll) {
  const company = (doc.snapshot && doc.snapshot.company) || byId('companies', doc.companyId) || {};
  const customer = (doc.snapshot && doc.snapshot.customer) || byId('customers', doc.customerId) || {};
  const lang = doc.language === 'en' ? 'en' : 'de';
  const open = coll === 'invoices' ? openCents(doc, paymentsOf(doc.id)) : 0;
  return {
    lang,
    email: customer.email || '',
    vars: {
      NUMBER: doc.number || '',
      DATE: date(doc.issueDate, lang),
      DUE: date(coll === 'quotes' ? doc.validUntil : doc.dueDate, lang),
      TOTAL: moneyDoc(doc.totals ? doc.totals.totalCents : 0, doc.currency, lang),
      OPEN: moneyDoc(open, doc.currency, lang),
      CONTACT: customerPerson(customer) || customerName(customer),
      CUSTOMER: customerName(customer),
      SENDER: state.settings.userName ? `${state.settings.userName}\n${company.name || ''}` : (company.name || ''),
      COMPANY: company.name || '',
    },
  };
}

/** Nächste sinnvolle Stufe: eine höher als die zuletzt versendete. */
export function nextReminderLevel(invoiceId) {
  const sent = remindersOf(invoiceId);
  const max = sent.reduce((a, r) => Math.max(a, r.level), 0);
  return Math.min(max + 1, REMINDER_LEVELS.length);
}

/**
 * Welche Erinnerungsstufe ist jetzt fällig? 0, wenn (noch) keine.
 * Stufe n ist fällig, sobald die Rechnung so viele Tage überfällig ist, wie in den Einstellungen
 * für Stufe n steht, und diese Stufe noch nicht versendet wurde.
 */
export function reminderDueLevel(inv, overdueDays) {
  if (!(overdueDays > 0)) return 0;
  const days = state.settings.reminderDays || [7, 14, 21];
  const sent = remindersOf(inv.id).reduce((a, r) => Math.max(a, r.level), 0);
  let due = 0;
  REMINDER_LEVELS.forEach((l, i) => { if (overdueDays >= (Number(days[i]) || 0)) due = l.id; });
  return due > sent ? Math.min(sent + 1, due) : 0;
}

export function lastReminder(invoiceId) {
  const sent = [...remindersOf(invoiceId)].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return sent[0] || null;
}

/**
 * mode: 'send' (Beleg versenden) | 'reminder' (Zahlungserinnerung)
 */
export function SendModal({ doc, coll, mode = 'send', onClose }) {
  const { lang, email, vars } = templateVars(doc, coll);
  const [level, setLevel] = useState(() => (mode === 'reminder' ? nextReminderLevel(doc.id) : 0));
  const tplFor = (lvl) => {
    if (mode === 'reminder') return ((state.settings.reminderTemplates || {})[lang] || {})[lvl] || { subject: '', body: '' };
    return ((state.settings.emailTemplates || {})[lang] || {})[coll === 'quotes' ? 'quote' : 'invoice'] || { subject: '', body: '' };
  };
  const [to, setTo] = useState(email);
  const [subject, setSubject] = useState(() => fill(tplFor(level).subject, vars));
  const [body, setBody] = useState(() => fill(tplFor(level).body, vars));
  const [busy, setBusy] = useState('');
  const [pdf, setPdf] = useState(null);
  const canShare = typeof navigator !== 'undefined' && !!navigator.canShare;

  function changeLevel(v) {
    const lvl = Number(v);
    setLevel(lvl);
    setSubject(fill(tplFor(lvl).subject, vars));
    setBody(fill(tplFor(lvl).body, vars));
  }

  async function ensurePdf() {
    if (pdf) return pdf;
    const model = buildDocModel(doc, coll);
    const blob = await pdfBlob(docDefinition(model));
    const out = { blob, name: model.fileName };
    setPdf(out);
    return out;
  }

  async function download() {
    setBusy('pdf');
    await attempt(async () => { const p = await ensurePdf(); saveBlob(p.blob, p.name); });
    setBusy('');
  }

  function openMail() {
    const href = `mailto:${encodeURIComponent(to.trim())}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    pauseUnloadWarning();
    window.location.href = href;
  }

  async function share() {
    setBusy('share');
    await attempt(async () => {
      const p = await ensurePdf();
      const file = new File([p.blob], p.name, { type: 'application/pdf' });
      if (!navigator.canShare({ files: [file] })) {
        throw new Error('Dieser Browser kann die PDF nicht direkt teilen. Bitte PDF herunterladen und im E-Mail-Programm anhängen.');
      }
      try {
        await navigator.share({ files: [file], title: subject, text: body });
      } catch (err) {
        if (err && err.name === 'AbortError') return;
        throw err;
      }
    });
    setBusy('');
  }

  async function markDone() {
    setBusy('done');
    const ok = await attempt(async () => {
      if (mode === 'reminder') await logReminder(doc.id, level, subject);
      else if (coll === 'quotes') await setQuoteStatus(doc.id, 'sent');
      else await markInvoiceSent(doc.id, true);
      return true;
    });
    setBusy('');
    if (ok) {
      toast(mode === 'reminder' ? 'Erinnerung im Verlauf vermerkt' : 'Als versendet markiert', 'good');
      onClose();
    }
  }

  const title = mode === 'reminder' ? `Zahlungserinnerung zu ${doc.number}` : `${coll === 'quotes' ? 'Angebot' : 'Rechnung'} ${doc.number} versenden`;
  return html`<${Modal} title=${title} onClose=${onClose} size="lg"
    footer=${html`
      <${Button} onClick=${onClose}>Schließen<//>
      <${Button} variant="primary" icon="check" busy=${busy === 'done'} onClick=${markDone}>
        ${mode === 'reminder' ? 'Als gesendet vermerken' : 'Als versendet markieren'}
      <//>`}>
    <${Notice} tone="info">
      Das Tool verschickt E-Mails nicht selbst. Lade die PDF herunter, öffne dein E-Mail-Programm mit dem vorbereiteten Text und hänge die PDF an.
    <//>
    <div class="form-grid">
      ${mode === 'reminder' && html`<${SelectField} class="span-2" label="Stufe" value=${level} onChange=${changeLevel}
        options=${REMINDER_LEVELS.map((l) => ({ id: l.id, label: l.label }))} />`}
      <${TextField} class=${mode === 'reminder' ? 'span-4' : 'span-6'} label="Empfänger" type="email" value=${to} onInput=${setTo}
        hint=${email ? '' : 'Beim Kunden ist keine E-Mail-Adresse hinterlegt.'} />
      <${TextField} class="span-6" label="Betreff" value=${subject} onInput=${setSubject} />
      <${TextArea} class="span-6" label="Text" value=${body} onInput=${setBody} rows=${10} />
    </div>
    <div class="send-steps">
      <${Button} icon="download" busy=${busy === 'pdf'} onClick=${download}>PDF herunterladen<//>
      <${Button} icon="mail" onClick=${openMail} disabled=${!to.trim()}>E-Mail-Programm öffnen<//>
      ${canShare && html`<${Button} icon="send" busy=${busy === 'share'} onClick=${share}>Mit PDF teilen<//>`}
    </div>
  <//>`;
}
