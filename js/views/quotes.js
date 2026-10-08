// Angebote: Liste und Detailansicht, Umwandlung in eine Rechnung.

import { html, useState, useMemo, useStore, navigate, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, Chips, EmptyState, Panel, KV, Menu, Notice, TextArea,
} from '../ui/components.js';
import { DocSheet } from '../ui/docview.js';
import { state, byId, inScope, currentCompany } from '../lib/store.js';
import { setQuoteStatus, convertQuoteToInvoice, saveInternalNotes } from '../lib/actions.js';
import { buildDocModel } from '../lib/docmodel.js';
import { quoteStatus, toUSD } from '../lib/calc.js';
import { date, dateTime } from '../lib/format.js';
import { matches, todayISO } from '../lib/util.js';
import { QuoteBadge, DocAmount, CompanyTag, customerLabel } from './shared.js';
import { SendModal, downloadDoc } from './send.js';
import { History } from './invoices.js';

const GROUPS = [
  { id: 'all', label: 'Alle', test: () => true },
  { id: 'draft', label: 'Entwürfe', test: (s) => s === 'draft' },
  { id: 'open', label: 'Offen', test: (s) => s === 'open' || s === 'sent' },
  { id: 'accepted', label: 'Angenommen', test: (s) => s === 'accepted' || s === 'invoiced' },
  { id: 'closed', label: 'Abgelehnt oder abgelaufen', test: (s) => s === 'declined' || s === 'expired' },
];

export function QuotesView() {
  useStore();
  const [q, setQ] = useState('');
  const [group, setGroup] = useState('all');
  const showCompany = !currentCompany();
  const today = todayISO();
  const scoped = useMemo(() => state.quotes.filter(inScope).map((quote) => ({ quote, status: quoteStatus(quote, today) })), [state.version, state.settings.activeCompany]);
  const rows = scoped
    .filter((r) => GROUPS.find((g) => g.id === group).test(r.status))
    .filter((r) => matches(q, r.quote.number, customerLabel(r.quote), (r.quote.items || []).map((i) => i.name).join(' ')));

  const columns = [
    { key: 'number', label: 'Nummer', class: 'nw', sort: (r) => r.quote.number || '', render: (r) => html`<span class="cell-main">${r.quote.number || 'Entwurf'}</span>` },
    { key: 'customer', label: 'Kunde', sort: (r) => customerLabel(r.quote), render: (r) => customerLabel(r.quote) },
    ...(showCompany ? [{ key: 'company', label: 'Unternehmen', render: (r) => html`<${CompanyTag} id=${r.quote.companyId} />` }] : []),
    { key: 'date', label: 'Datum', sort: (r) => r.quote.issueDate, render: (r) => date(r.quote.issueDate) },
    { key: 'valid', label: 'Gültig bis', sort: (r) => r.quote.validUntil || '', render: (r) => date(r.quote.validUntil) },
    { key: 'total', label: 'Betrag', align: 'right', sort: (r) => toUSD(r.quote.totals ? r.quote.totals.totalCents : 0, r.quote.currency, r.quote.fx) || 0, render: (r) => html`<${DocAmount} doc=${r.quote} />` },
    { key: 'status', label: 'Status', sort: (r) => r.status, render: (r) => html`<${QuoteBadge} quote=${r.quote} />` },
  ];

  return html`
    <${PageHeader} title="Angebote" sub="Ein angenommenes Angebot wird mit einem Klick zur Rechnung.">
      <${Button} variant="primary" icon="plus" onClick=${() => navigate('/quotes/new')}>Neues Angebot<//>
    <//>
    ${state.quotes.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Nummer, Kunde, Leistung" />
      <${Chips} label="Status" value=${group} onChange=${setGroup}
        options=${GROUPS.map((g) => ({ id: g.id, label: g.label, count: scoped.filter((r) => g.test(r.status)).length }))} />
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} rowKey=${(r) => r.quote.id} initialSort=${{ key: 'date', dir: 'desc' }}
      onRowClick=${(r) => navigate(r.quote.status === 'draft' ? `/quotes/${r.quote.id}/edit` : `/quotes/${r.quote.id}`)}
      empty=${state.quotes.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es kein Angebot." />`
        : html`<${EmptyState} icon="quote" title="Noch keine Angebote" text="Schreibe ein Angebot mit Gültigkeitsdatum und wandle es nach der Zusage in eine Rechnung um.">
            <${Button} variant="primary" icon="plus" onClick=${() => navigate('/quotes/new')}>Erstes Angebot schreiben<//>
          <//>`} />
  `;
}

export function QuoteDetailView({ id }) {
  useStore();
  const quote = byId('quotes', id);
  const [modal, setModal] = useState(null);
  const [notes, setNotes] = useState(quote ? quote.internalNotes || '' : '');
  const [busy, setBusy] = useState('');

  if (!quote) {
    return html`<${EmptyState} icon="quote" title="Angebot nicht gefunden" text="Dieses Angebot existiert nicht.">
      <${Button} onClick=${() => navigate('/quotes')}>Zu den Angeboten<//>
    <//>`;
  }
  if (quote.status === 'draft') { setTimeout(() => navigate(`/quotes/${id}/edit`, { replace: true }), 0); return null; }

  const status = quoteStatus(quote, todayISO());
  const model = buildDocModel(quote, 'quotes');
  const invoice = quote.invoiceId ? byId('invoices', quote.invoiceId) : null;
  const undecided = ['open', 'sent', 'expired'].includes(status);

  async function pdf() {
    setBusy('pdf');
    await attempt(() => downloadDoc(quote, 'quotes'));
    setBusy('');
  }
  async function setStatus(s, msg) {
    const ok = await attempt(async () => { await setQuoteStatus(id, s); return true; });
    if (ok) toast(msg, 'good');
  }
  async function convert() {
    const ok = await ask({
      title: 'In Rechnung umwandeln?',
      text: `Aus dem Angebot ${quote.number} entsteht ein Rechnungsentwurf mit denselben Positionen. Du kannst ihn vor dem Erstellen noch anpassen.`,
      confirmLabel: 'Rechnungsentwurf anlegen',
    });
    if (!ok) return;
    setBusy('convert');
    const draft = await attempt(() => convertQuoteToInvoice(id));
    setBusy('');
    if (draft) { toast('Rechnungsentwurf angelegt', 'good'); navigate(`/invoices/${draft.id}/edit`); }
  }
  async function saveNotes() {
    const ok = await attempt(async () => { await saveInternalNotes('quotes', id, notes); return true; });
    if (ok) toast('Notiz gespeichert', 'good');
  }

  return html`
    <${PageHeader} title=${`Angebot ${quote.number}`} back=${{ href: '#/quotes', label: 'Angebote' }}
      sub=${html`<${QuoteBadge} quote=${quote} /> <span class="head-meta">${customerLabel(quote)}</span>`}>
      <${Button} icon="download" busy=${busy === 'pdf'} onClick=${pdf}>PDF<//>
      ${status === 'open' && html`<${Button} icon="mail" onClick=${() => setModal('send')}>Versenden<//>`}
      ${!invoice && status !== 'declined' && html`<${Button} variant="primary" icon="invoice" busy=${busy === 'convert'} onClick=${convert}>In Rechnung umwandeln<//>`}
      <${Menu} items=${[
        undecided && { label: 'Als angenommen markieren', icon: 'check', onClick: () => setStatus('accepted', 'Angebot angenommen') },
        undecided && { label: 'Als abgelehnt markieren', icon: 'x', onClick: () => setStatus('declined', 'Angebot abgelehnt') },
        status === 'sent' && { label: 'Erneut versenden', icon: 'mail', onClick: () => setModal('send') },
        ['accepted', 'declined'].includes(status) && !invoice && { label: 'Wieder öffnen', icon: 'undo', onClick: () => setStatus('open', 'Angebot wieder geöffnet') },
        { label: 'Als neues Angebot kopieren', icon: 'copy', onClick: () => navigate(`/quotes/new?copy=${id}`) },
      ]} />
    <//>

    ${invoice && html`<${Notice} tone="info" action=${html`<${Button} small onClick=${() => navigate(`/invoices/${invoice.id}${invoice.status === 'draft' ? '/edit' : ''}`)}>Rechnung öffnen<//>`}>
      Zu diesem Angebot gibt es ${invoice.status === 'draft' ? 'einen Rechnungsentwurf' : `die Rechnung ${invoice.number}`}.
    <//>`}
    ${status === 'expired' && html`<${Notice} tone="warn">Dieses Angebot ist seit dem ${date(quote.validUntil)} abgelaufen.<//>`}

    <div class="split split-doc">
      <div class="split-main"><${DocSheet} model=${model} /></div>
      <aside class="split-side">
        <${Panel} title="Stand">
          <${KV} rows=${[
            ['Unternehmen', html`<${CompanyTag} id=${quote.companyId} />`],
            ['Kunde', html`<a href=${`#/customers/${quote.customerId}`}>${customerLabel(quote)}</a>`],
            ['Angebotssumme', html`<${DocAmount} doc=${quote} />`],
            ['Gültig bis', date(quote.validUntil)],
            ['Erstellt', dateTime(quote.finalizedAt)],
            quote.sentAt && ['Versendet', dateTime(quote.sentAt)],
            quote.decidedAt && ['Entschieden', dateTime(quote.decidedAt)],
          ]} />
        <//>
        <${Panel} title="Interne Notiz">
          <${TextArea} value=${notes} onInput=${setNotes} rows=${3} aria-label="Interne Notiz" placeholder="Erscheint nicht auf dem Angebot" />
          ${notes !== (quote.internalNotes || '') && html`<div class="panel-actions"><${Button} small variant="primary" onClick=${saveNotes}>Notiz speichern<//></div>`}
        <//>
        <${Panel} title="Verlauf"><${History} entityId=${id} /><//>
      </aside>
    </div>
    ${modal === 'send' && html`<${SendModal} doc=${quote} coll="quotes" mode="send" onClose=${() => setModal(null)} />`}
  `;
}
