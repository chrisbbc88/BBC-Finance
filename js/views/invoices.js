// Rechnungen: Liste und Detailansicht (Zahlungen, Versand, Erinnerungen, Storno, Gutschrift).

import { html, useState, useMemo, useStore, navigate, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, Chips, EmptyState, Modal, TextField, TextArea,
  SelectField, NumberField, DateField, Panel, KV, Menu, Notice,
} from '../ui/components.js';
import { DocSheet } from '../ui/docview.js';
import { state, byId, paymentsOf, remindersOf, inScope, currentCompany } from '../lib/store.js';
import { REMINDER_LEVELS } from '../lib/schema.js';
import {
  addPayment, addRefund, deletePayment, cancelInvoice, createCreditNote, markInvoiceSent, saveInternalNotes,
} from '../lib/actions.js';
import { buildDocModel } from '../lib/docmodel.js';
import { sumPayments, toUSD } from '../lib/calc.js';
import { money, date, dateTime, rate } from '../lib/format.js';
import { matches, todayISO, periodRange, inRange, PERIODS, daysBetween } from '../lib/util.js';
import {
  statusOf, InvoiceBadge, DocAmount, CompanyTag, customerLabel, invoiceOpen,
} from './shared.js';
import { SendModal, downloadDoc, reminderDueLevel, lastReminder } from './send.js';

/* ---------- Liste ---------- */

const GROUPS = [
  { id: 'all', label: 'Alle', test: () => true },
  { id: 'draft', label: 'Entwürfe', test: (s) => s === 'draft' },
  { id: 'open', label: 'Offen', test: (s) => ['issued', 'sent', 'partial', 'overdue'].includes(s) },
  { id: 'overdue', label: 'Überfällig', test: (s) => s === 'overdue' },
  { id: 'paid', label: 'Bezahlt', test: (s) => s === 'paid' },
  { id: 'void', label: 'Storniert und Gutschriften', test: (s) => ['cancelled', 'credited', 'credit_note'].includes(s) },
];

export function InvoicesView({ params }) {
  useStore();
  const [q, setQ] = useState('');
  const [group, setGroup] = useState(params && GROUPS.some((g) => g.id === params.status) ? params.status : 'all');
  const [period, setPeriod] = useState('all');
  const [reminding, setReminding] = useState(null);
  const showCompany = !currentCompany();
  const today = todayISO();

  const scoped = useMemo(() => state.invoices.filter(inScope).map((inv) => ({ inv, status: statusOf(inv) })), [state.version, state.settings.activeCompany]);
  const range = periodRange(period, today);
  const inPeriod = scoped.filter((r) => period === 'all' || inRange(r.inv.issueDate, range));
  const rows = inPeriod
    .filter((r) => GROUPS.find((g) => g.id === group).test(r.status))
    .filter((r) => matches(q, r.inv.number, customerLabel(r.inv), (byId('companies', r.inv.companyId) || {}).name,
      r.inv.totals ? (r.inv.totals.totalCents / 100).toFixed(2) : '', r.inv.totals ? (r.inv.totals.totalCents / 100).toFixed(2).replace('.', ',') : '',
      (r.inv.items || []).map((i) => i.name).join(' ')));

  const sums = rows.reduce((a, r) => {
    if (r.status === 'draft' || r.status === 'cancelled') return a;
    const t = r.inv.totals ? r.inv.totals.totalCents : 0;
    a.total += toUSD(t, r.inv.currency, r.inv.fx) || 0;
    a.open += toUSD(invoiceOpen(r.inv), r.inv.currency, r.inv.fx) || 0;
    return a;
  }, { total: 0, open: 0 });

  const columns = [
    {
      key: 'number', label: 'Nummer', class: 'nw', sort: (r) => r.inv.number || '',
      render: (r) => html`<span class="cell-main">${r.inv.number || 'Entwurf'}</span>`,
    },
    { key: 'customer', label: 'Kunde', sort: (r) => customerLabel(r.inv), render: (r) => customerLabel(r.inv) },
    ...(showCompany ? [{ key: 'company', label: 'Unternehmen', sort: (r) => (byId('companies', r.inv.companyId) || {}).name || '', render: (r) => html`<${CompanyTag} id=${r.inv.companyId} />` }] : []),
    { key: 'date', label: 'Datum', sort: (r) => r.inv.issueDate, render: (r) => date(r.inv.issueDate) },
    {
      key: 'due', label: 'Fällig', sort: (r) => r.inv.dueDate || '',
      render: (r) => (r.status === 'overdue'
        ? html`<span class="tone-bad">${date(r.inv.dueDate)}</span><div class="cell-sub">seit ${daysBetween(r.inv.dueDate, today)} Tagen</div>`
        : date(r.inv.dueDate)),
    },
    { key: 'total', label: 'Betrag', align: 'right', sort: (r) => toUSD(r.inv.totals ? r.inv.totals.totalCents : 0, r.inv.currency, r.inv.fx) || 0, render: (r) => html`<${DocAmount} doc=${r.inv} />` },
    {
      key: 'open', label: 'Offen', align: 'right', sort: (r) => toUSD(invoiceOpen(r.inv), r.inv.currency, r.inv.fx) || 0,
      render: (r) => { const o = invoiceOpen(r.inv); return o ? money(o, r.inv.currency) : html`<span class="muted-text">–</span>`; },
    },
    { key: 'status', label: 'Status', sort: (r) => r.status, render: (r) => html`<${InvoiceBadge} inv=${r.inv} />` },
    ...(group === 'overdue' ? [{
      key: 'reminder', label: 'Erinnerung',
      render: (r) => {
        const last = lastReminder(r.inv.id);
        const due = reminderDueLevel(r.inv, daysBetween(r.inv.dueDate, today));
        const lvl = (id) => (REMINDER_LEVELS.find((l) => l.id === id) || {}).label || '';
        return html`<${Button} small variant=${due ? 'primary' : 'default'} icon="clock" onClick=${() => setReminding(r.inv)}>${due ? lvl(due) : 'Erinnern'}<//>
          <span class="cell-sub nw">${last ? `Zuletzt: ${lvl(last.level)}, ${date(last.date)}` : 'Noch keine versendet'}</span>`;
      },
    }] : []),
  ];

  const footer = rows.length ? [
    `${rows.length} ${rows.length === 1 ? 'Beleg' : 'Belege'}`, '', ...(showCompany ? [''] : []), '', '',
    html`<span class="strong">${money(sums.total, 'USD')}</span>`, html`<span class="strong">${money(sums.open, 'USD')}</span>`, html`<span class="muted-text">in USD</span>`,
    ...(group === 'overdue' ? [''] : []),
  ] : null;

  return html`
    <${PageHeader} title="Rechnungen">
      <${Button} variant="primary" icon="plus" onClick=${() => navigate('/invoices/new')}>Neue Rechnung<//>
    <//>
    ${state.invoices.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Nummer, Kunde, Betrag, Leistung" />
      <${Chips} label="Status" value=${group} onChange=${setGroup}
        options=${GROUPS.map((g) => ({ id: g.id, label: g.label, count: inPeriod.filter((r) => g.test(r.status)).length }))} />
      <select class="input select filter-select" value=${period} aria-label="Zeitraum" onChange=${(e) => setPeriod(e.target.value)}>
        ${PERIODS.filter((p) => p.id !== 'custom').map((p) => html`<option value=${p.id}>${p.label}</option>`)}
      </select>
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} rowKey=${(r) => r.inv.id} initialSort=${{ key: 'date', dir: 'desc' }} footer=${footer}
      onRowClick=${(r) => navigate(r.inv.status === 'draft' ? `/invoices/${r.inv.id}/edit` : `/invoices/${r.inv.id}`)}
      empty=${state.invoices.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Rechnung." />`
        : html`<${EmptyState} icon="invoice" title="Noch keine Rechnungen" text="Unternehmen wählen, Kunde wählen, Leistung wählen – fertig ist die erste Rechnung.">
            <${Button} variant="primary" icon="plus" onClick=${() => navigate('/invoices/new')}>Erste Rechnung schreiben<//>
          <//>`} />
    ${reminding && html`<${SendModal} doc=${reminding} coll="invoices" mode="reminder" onClose=${() => setReminding(null)} />`}
  `;
}

/* ---------- Zahlung eintragen ---------- */

function PaymentModal({ inv, refund, onClose }) {
  const open = refund ? sumPayments(paymentsOf(inv.id)) : invoiceOpen(inv);
  const [p, setP] = useState({ date: todayISO(), amountCents: open, method: (state.settings.paymentMethods || [])[0] || '', note: '' });
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setP((prev) => ({ ...prev, [k]: v }));
  async function submit() {
    setBusy(true);
    const ok = await attempt(() => (refund ? addRefund(inv.id, p) : addPayment(inv.id, p)));
    setBusy(false);
    if (ok) {
      toast(refund ? 'Erstattung eingetragen' : (p.amountCents >= open ? 'Zahlung eingetragen – Rechnung ist bezahlt' : 'Teilzahlung eingetragen'), 'good');
      onClose();
    }
  }
  return html`<${Modal} title=${`${refund ? 'Erstattung' : 'Zahlung'} zu ${inv.number}`} onClose=${onClose} size="sm" onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>${refund ? 'Erstattung eintragen' : 'Zahlung eintragen'}<//>`}>
    <p class="dialog-text">${refund ? `Eingegangen und noch nicht erstattet sind ${money(open, inv.currency)}.` : `Offen sind ${money(open, inv.currency)}.`}</p>
    <div class="form-grid">
      <${NumberField} class="span-3" label=${`Betrag (${inv.currency})`} mode="money" value=${p.amountCents} onChange=${set('amountCents')} min=${0} />
      <${DateField} class="span-3" label="Zahlungsdatum" value=${p.date} onInput=${set('date')} max=${todayISO()} />
      <${SelectField} class="span-6" label="Zahlungsart" value=${p.method} onChange=${set('method')} options=${state.settings.paymentMethods || []} placeholder="Keine Angabe" />
      <${TextField} class="span-6" label="Notiz" value=${p.note} onInput=${set('note')} />
    </div>
  <//>`;
}

/* ---------- Detail ---------- */

export function History({ entityId }) {
  const rows = state.audit.filter((a) => a.entityId === entityId).sort((a, b) => (a.at < b.at ? 1 : -1));
  if (!rows.length) return html`<p class="muted-text">Noch keine Einträge.</p>`;
  return html`<ol class="timeline">
    ${rows.map((a) => html`<li key=${a.id}>
      <div class="timeline-what">${a.action}</div>
      <div class="timeline-when">${dateTime(a.at)}, ${a.user}</div>
    </li>`)}
  </ol>`;
}

export function InvoiceDetailView({ id }) {
  useStore();
  const inv = byId('invoices', id);
  const [modal, setModal] = useState(null);
  const [notes, setNotes] = useState(inv ? inv.internalNotes || '' : '');
  const [busy, setBusy] = useState('');

  if (!inv) {
    return html`<${EmptyState} icon="invoice" title="Rechnung nicht gefunden" text="Diese Rechnung existiert nicht.">
      <${Button} onClick=${() => navigate('/invoices')}>Zu den Rechnungen<//>
    <//>`;
  }
  if (inv.status === 'draft') { setTimeout(() => navigate(`/invoices/${id}/edit`, { replace: true }), 0); return null; }

  const status = statusOf(inv);
  const payments = [...paymentsOf(id)].sort((a, b) => (a.date < b.date ? -1 : 1));
  const reminders = [...remindersOf(id)].sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
  const paid = sumPayments(payments);
  const open = invoiceOpen(inv);
  const isCredit = inv.type === 'credit_note';
  const model = buildDocModel(inv, 'invoices');
  const related = inv.relatedInvoiceId ? byId('invoices', inv.relatedInvoiceId) : null;
  const creditNote = inv.creditNoteId ? byId('invoices', inv.creditNoteId) : null;
  const quote = inv.quoteId ? byId('quotes', inv.quoteId) : null;
  const canPay = !isCredit && open > 0;
  const canRefund = !isCredit && inv.status === 'credited' && paid > 0;
  const canVoid = !isCredit && ['issued', 'sent'].includes(inv.status);
  const usdEur = inv.fx ? Number(inv.fx.usdToEur) : null;

  async function pdf() {
    setBusy('pdf');
    await attempt(() => downloadDoc(inv, 'invoices'));
    setBusy('');
  }

  async function cancel() {
    if (paid > 0) {
      toast('Zu dieser Rechnung gibt es Zahlungen. Entferne sie zuerst oder erstelle eine Gutschrift.', 'bad');
      return;
    }
    const reason = await ask({
      title: `Rechnung ${inv.number} stornieren?`,
      text: 'Die Rechnung bleibt mit ihrer Nummer erhalten, zählt aber nicht mehr zum Umsatz und ist nicht mehr offen. Das lässt sich nicht rückgängig machen.',
      input: { label: 'Grund (intern)', placeholder: 'z. B. falscher Betrag', multiline: false },
      confirmLabel: 'Stornieren', danger: true,
    });
    if (reason === null) return;
    const ok = await attempt(async () => { await cancelInvoice(id, reason); return true; });
    if (ok) toast('Rechnung storniert', 'good');
  }

  async function credit() {
    const reason = await ask({
      title: `Gutschrift zu ${inv.number} erstellen?`,
      text: `Es entsteht ein eigener Beleg über ${money(-inv.totals.totalCents, inv.currency)} mit eigener Nummer. Die Rechnung gilt danach als ausgeglichen. Das lässt sich nicht rückgängig machen.${paid > 0 ? ` Zu dieser Rechnung sind bereits ${money(paid, inv.currency)} eingegangen – eine Rückzahlung trägst du danach als Erstattung ein.` : ''}`,
      input: { label: 'Text auf der Gutschrift (optional)', placeholder: 'z. B. Grund der Gutschrift', multiline: true },
      confirmLabel: 'Gutschrift erstellen', danger: true,
    });
    if (reason === null) return;
    const rec = await attempt(() => createCreditNote(id, reason));
    if (rec) { toast(`Gutschrift ${rec.number} erstellt`, 'good'); navigate(`/invoices/${rec.id}`); }
  }

  async function removePayment(p) {
    const ok = await ask({
      title: 'Zahlung löschen?',
      text: `Die Zahlung über ${money(p.amountCents, inv.currency)} vom ${date(p.date)} wird entfernt. Der Vorgang bleibt im Protokoll sichtbar.`,
      confirmLabel: 'Zahlung löschen', danger: true,
    });
    if (!ok) return;
    const done = await attempt(async () => { await deletePayment(p.id); return true; });
    if (done) toast('Zahlung gelöscht', 'good');
  }

  async function saveNotes() {
    const ok = await attempt(async () => { await saveInternalNotes('invoices', id, notes); return true; });
    if (ok) toast('Notiz gespeichert', 'good');
  }

  return html`
    <${PageHeader} title=${html`${isCredit ? 'Gutschrift' : 'Rechnung'} ${inv.number}`} back=${{ href: '#/invoices', label: 'Rechnungen' }}
      sub=${html`<${InvoiceBadge} inv=${inv} /> <span class="head-meta">${customerLabel(inv)}</span>`}>
      <${Button} icon="download" busy=${busy === 'pdf'} onClick=${pdf}>PDF<//>
      ${!isCredit && inv.status === 'issued' && html`<${Button} icon="mail" onClick=${() => setModal('send')}>Versenden<//>`}
      ${status === 'overdue' && html`<${Button} icon="clock" onClick=${() => setModal('reminder')}>Erinnern<//>`}
      ${canPay && html`<${Button} variant="primary" icon="money" onClick=${() => setModal('payment')}>Zahlung eintragen<//>`}
      <${Menu} items=${[
        !isCredit && inv.status === 'issued' && { label: 'Als versendet markieren', icon: 'check', onClick: () => attempt(() => markInvoiceSent(id, true)) },
        !isCredit && inv.status === 'sent' && { label: 'Erneut versenden', icon: 'mail', onClick: () => setModal('send') },
        !isCredit && inv.status === 'sent' && { label: 'Versand zurücknehmen', icon: 'undo', onClick: () => attempt(() => markInvoiceSent(id, false)) },
        !isCredit && open > 0 && status !== 'overdue' && { label: 'Zahlungserinnerung', icon: 'clock', onClick: () => setModal('reminder') },
        !isCredit && { label: 'Als neue Rechnung kopieren', icon: 'copy', onClick: () => navigate(`/invoices/new?copy=${id}`) },
        canVoid && { label: 'Gutschrift erstellen', icon: 'undo', danger: true, onClick: credit },
        canVoid && { label: 'Stornieren', icon: 'x', danger: true, onClick: cancel },
      ]} />
    <//>

    ${inv.status === 'cancelled' && html`<${Notice} tone="warn">
      Diese Rechnung wurde am ${dateTime(inv.cancelledAt)} storniert${inv.cancelReason ? ` (${inv.cancelReason})` : ''}. Sie zählt nicht zum Umsatz.
    <//>`}
    ${creditNote && html`<${Notice} tone="info" action=${html`<${Button} small onClick=${() => navigate(`/invoices/${creditNote.id}`)}>Gutschrift öffnen<//>`}>
      Zu dieser Rechnung wurde die Gutschrift ${creditNote.number} erstellt.
    <//>`}
    ${related && html`<${Notice} tone="info" action=${html`<${Button} small onClick=${() => navigate(`/invoices/${related.id}`)}>Rechnung öffnen<//>`}>
      Diese Gutschrift gehört zur Rechnung ${related.number}.
    <//>`}

    <div class="split split-doc">
      <div class="split-main">
        <${DocSheet} model=${model} />
      </div>
      <aside class="split-side">
        <${Panel} title="Stand">
          <${KV} rows=${[
            ['Unternehmen', html`<${CompanyTag} id=${inv.companyId} />`],
            ['Kunde', html`<a href=${`#/customers/${inv.customerId}`}>${customerLabel(inv)}</a>`],
            ['Gesamtbetrag', html`<${DocAmount} doc=${inv} />`],
            !isCredit && ['Bezahlt', money(paid, inv.currency)],
            !isCredit && ['Offen', html`<span class=${status === 'overdue' ? 'tone-bad strong' : 'strong'}>${money(open, inv.currency)}</span>`],
            !isCredit && inv.dueDate && ['Fällig am', html`${date(inv.dueDate)}${status === 'overdue' ? html` <span class="tone-bad">(seit ${daysBetween(inv.dueDate, todayISO())} Tagen)</span>` : ''}`],
            ['Erstellt', dateTime(inv.finalizedAt)],
            inv.sentAt && ['Versendet', dateTime(inv.sentAt)],
            quote && ['Aus Angebot', html`<a href=${`#/quotes/${quote.id}`}>${quote.number}</a>`],
          ]} />
        <//>

        ${!isCredit && html`<${Panel} title="Zahlungen" action=${canPay
            ? html`<${Button} small icon="plus" onClick=${() => setModal('payment')}>Zahlung<//>`
            : (canRefund && html`<${Button} small icon="undo" onClick=${() => setModal('refund')}>Erstattung<//>`)}>
          ${payments.length
            ? html`<ul class="plain-list">
                ${payments.map((p) => html`<li class="row-between" key=${p.id}>
                  <span><span class="strong">${money(p.amountCents, inv.currency)}</span>
                    <span class="cell-sub">${p.amountCents < 0 ? 'Erstattung, ' : ''}${date(p.date)}${p.method ? `, ${p.method}` : ''}${p.note ? ` – ${p.note}` : ''}</span></span>
                  <${Button} variant="ghost" small icon="trash" title="Zahlung löschen" onClick=${() => removePayment(p)} />
                </li>`)}
              </ul>`
            : html`<p class="muted-text">Noch keine Zahlung eingetragen.</p>`}
        <//>`}

        ${reminders.length > 0 && html`<${Panel} title="Zahlungserinnerungen">
          <ul class="plain-list">
            ${reminders.map((r) => html`<li class="row-between" key=${r.id}>
              <span>${(REMINDER_LEVELS.find((l) => l.id === r.level) || {}).label || 'Erinnerung'}</span>
              <span class="muted-text">${date(r.date)}</span>
            </li>`)}
          </ul>
        <//>`}

        <${Panel} title="Wechselkurs">
          ${usdEur
            ? html`<p class="strong">1 USD = ${rate(usdEur)} EUR</p>
                <p class="field-hint">${inv.fx.manual ? inv.fx.source : `Quelle: ${inv.fx.source}`}${inv.fx.date ? `, Stand ${date(inv.fx.date)}` : ''}. Mit der Rechnung festgeschrieben.</p>`
            : html`<p class="muted-text">Kein Kurs gespeichert.</p>`}
        <//>

        <${Panel} title="Interne Notiz">
          <${TextArea} value=${notes} onInput=${setNotes} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Beleg" />
          ${notes !== (inv.internalNotes || '') && html`<div class="panel-actions"><${Button} small variant="primary" onClick=${saveNotes}>Notiz speichern<//></div>`}
        <//>

        <${Panel} title="Verlauf"><${History} entityId=${id} /><//>
      </aside>
    </div>

    ${modal === 'payment' && html`<${PaymentModal} inv=${inv} onClose=${() => setModal(null)} />`}
    ${modal === 'refund' && html`<${PaymentModal} inv=${inv} refund onClose=${() => setModal(null)} />`}
    ${modal === 'send' && html`<${SendModal} doc=${inv} coll="invoices" mode="send" onClose=${() => setModal(null)} />`}
    ${modal === 'reminder' && html`<${SendModal} doc=${inv} coll="invoices" mode="reminder" onClose=${() => setModal(null)} />`}
  `;
}
