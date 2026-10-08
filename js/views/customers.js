// Kunden: Liste, Kundenakte und Formular. Kunden gelten für alle Unternehmen gemeinsam.

import { html, useState, useMemo, useStore, navigate, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, Chips, EmptyState, Modal, TextField, TextArea,
  SelectField, NumberField, Checkbox, Badge, Panel, Stat, KV, Menu,
} from '../ui/components.js';
import { state, byId } from '../lib/store.js';
import { newCustomer, customerName, customerPerson, LANGUAGES, DOC_CURRENCIES } from '../lib/schema.js';
import { saveCustomer, deleteCustomer, customerInUse, nextCustomerNumber } from '../lib/actions.js';
import { revenueDocs, receivables } from '../lib/reports.js';
import { matches, todayISO } from '../lib/util.js';
import { money, date } from '../lib/format.js';
import { toUSD, toEUR } from '../lib/calc.js';
import {
  storeData, scopeCompanyId, InvoiceBadge, QuoteBadge, DocAmount, CompanyTag,
} from './shared.js';

/* ---------- Formular ---------- */

export function CustomerFormModal({ customer, onClose, onSaved }) {
  const isNew = !customer || !byId('customers', customer.id);
  const [c, setC] = useState(() => ({ ...(customer || newCustomer()) }));
  const [tags, setTags] = useState((c.tags || []).join(', '));
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setC((prev) => ({ ...prev, [k]: v }));

  async function submit() {
    setBusy(true);
    const rec = {
      ...c,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      paymentTermDays: c.paymentTermDays === '' ? null : c.paymentTermDays,
    };
    const saved = await attempt(() => saveCustomer(rec));
    setBusy(false);
    if (saved) {
      toast(isNew ? 'Kunde angelegt' : 'Kunde gespeichert', 'good');
      if (onSaved) onSaved(saved);
      onClose();
    }
  }

  return html`<${Modal} title=${isNew ? 'Neuer Kunde' : 'Kunde bearbeiten'} onClose=${onClose} size="lg" onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Kunde speichern<//>`}>
    <div class="form-grid">
      <${TextField} class="span-4" label="Unternehmen" value=${c.company} onInput=${set('company')} />
      <${TextField} class="span-2" label="Kundennummer" value=${c.number} onInput=${set('number')} placeholder=${nextCustomerNumber()}
        hint="Leer lassen für automatische Nummer" />
      <${TextField} class="span-3" label="Vorname" value=${c.firstName} onInput=${set('firstName')} />
      <${TextField} class="span-3" label="Nachname" value=${c.lastName} onInput=${set('lastName')} />
      <${TextField} class="span-6" label="Ansprechpartner (falls abweichend)" value=${c.contact} onInput=${set('contact')} />

      <${TextField} class="span-4" label="Straße" value=${c.street} onInput=${set('street')} />
      <${TextField} class="span-2" label="Hausnummer" value=${c.houseNo} onInput=${set('houseNo')} />
      <${TextField} class="span-2" label="PLZ" value=${c.zip} onInput=${set('zip')} />
      <${TextField} class="span-4" label="Ort" value=${c.city} onInput=${set('city')} />
      <${TextField} class="span-3" label="Bundesland / Region" value=${c.region} onInput=${set('region')} />
      <${TextField} class="span-3" label="Land" value=${c.country} onInput=${set('country')} />

      <${TextField} class="span-3" label="E-Mail" type="email" value=${c.email} onInput=${set('email')} />
      <${TextField} class="span-3" label="Telefon" value=${c.phone} onInput=${set('phone')} />
      <${TextField} class="span-6" label="Website" value=${c.website} onInput=${set('website')} />

      <${TextField} class="span-3" label="Steuer-ID" value=${c.taxId} onInput=${set('taxId')} />
      <${TextField} class="span-3" label="USt-IdNr. / VAT ID" value=${c.vatId} onInput=${set('vatId')} />

      <${SelectField} class="span-2" label="Belegsprache" value=${c.language} onChange=${set('language')}
        placeholder="Wie Unternehmen" options=${LANGUAGES} />
      <${SelectField} class="span-2" label="Währung" value=${c.currency} onChange=${set('currency')}
        placeholder="Wie Unternehmen" options=${DOC_CURRENCIES} />
      <${NumberField} class="span-2" label="Zahlungsziel (Tage)" value=${c.paymentTermDays} onChange=${set('paymentTermDays')}
        digits=${0} min=${0} max=${365} allowEmpty placeholder="Wie Unternehmen" />

      <${TextField} class="span-6" label="Tags" value=${tags} onInput=${setTags} hint="Mehrere Tags mit Komma trennen" />
      <${TextArea} class="span-6" label="Notizen (intern)" value=${c.notes} onInput=${set('notes')} rows=${3} />
      <div class="span-6"><${Checkbox} label="Kunde ist aktiv" checked=${c.active !== false} onChange=${set('active')} /></div>
    </div>
  <//>`;
}

/* ---------- Kennzahlen je Kunde ---------- */

export function customerStats(companyId) {
  const data = storeData();
  const today = todayISO();
  const stats = new Map();
  const get = (id) => {
    if (!stats.has(id)) stats.set(id, { usd: 0, eur: 0, count: 0, openUSD: 0, openEUR: 0, overdueUSD: 0, overdueEUR: 0, paidUSD: 0, paidEUR: 0, last: '' });
    return stats.get(id);
  };
  for (const d of revenueDocs(data, { companyId })) {
    const s = get(d.inv.customerId);
    s.usd += d.netUSD; s.eur += d.netEUR;
    if (d.inv.type !== 'credit_note') s.count += 1;
    if (d.date > s.last) s.last = d.date;
  }
  for (const r of receivables(data, { companyId }, today)) {
    const s = get(r.inv.customerId);
    s.openUSD += r.openUSD; s.openEUR += r.openEUR;
    if (r.status === 'overdue') { s.overdueUSD += r.openUSD; s.overdueEUR += r.openEUR; }
  }
  for (const p of state.payments) {
    const inv = byId('invoices', p.invoiceId);
    if (!inv || (companyId && inv.companyId !== companyId)) continue;
    const s = get(inv.customerId);
    s.paidUSD += toUSD(p.amountCents, inv.currency, inv.fx) || 0;
    s.paidEUR += toEUR(p.amountCents, inv.currency, inv.fx) || 0;
  }
  return stats;
}

/* ---------- Liste ---------- */

export function CustomersView() {
  useStore();
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('active');
  const [tag, setTag] = useState('');
  const [editing, setEditing] = useState(null);
  const companyId = scopeCompanyId();
  const stats = useMemo(() => customerStats(companyId), [state.version, companyId]);

  const allTags = useMemo(() => [...new Set(state.customers.flatMap((c) => c.tags || []))].sort((a, b) => a.localeCompare(b, 'de')), [state.version]);
  const rows = state.customers.filter((c) => {
    if (filter === 'active' && c.active === false) return false;
    if (filter === 'inactive' && c.active !== false) return false;
    if (tag && !(c.tags || []).includes(tag)) return false;
    return matches(q, c.number, c.company, c.firstName, c.lastName, c.contact, c.city, c.country, c.email, (c.tags || []).join(' '));
  });

  const columns = [
    { key: 'number', label: 'Nr.', sort: (c) => c.number, width: '90px', render: (c) => html`<span class="mono-num">${c.number}</span>` },
    {
      key: 'name', label: 'Kunde', sort: (c) => customerName(c),
      render: (c) => html`<div class="cell-main">${customerName(c)}</div>
        ${customerPerson(c) && customerPerson(c) !== customerName(c) && html`<div class="cell-sub">${customerPerson(c)}</div>`}`,
    },
    { key: 'city', label: 'Ort', sort: (c) => c.city, render: (c) => [c.city, c.country].filter(Boolean).join(', ') },
    {
      key: 'tags', label: 'Tags',
      render: (c) => (c.tags || []).map((t) => html`<span class="tag">${t}</span>`),
    },
    {
      key: 'revenue', label: 'Umsatz', align: 'right', sort: (c) => (stats.get(c.id) || {}).usd || 0,
      render: (c) => { const s = stats.get(c.id); return s && s.usd ? money(s.usd, 'USD') : html`<span class="muted-text">–</span>`; },
    },
    {
      key: 'open', label: 'Offen', align: 'right', sort: (c) => (stats.get(c.id) || {}).openUSD || 0,
      render: (c) => {
        const s = stats.get(c.id);
        if (!s || !s.openUSD) return html`<span class="muted-text">–</span>`;
        return html`<span class=${s.overdueUSD ? 'tone-bad' : ''}>${money(s.openUSD, 'USD')}</span>`;
      },
    },
    { key: 'status', label: '', render: (c) => (c.active === false ? html`<${Badge} tone="mute">Inaktiv<//>` : '') },
  ];

  return html`
    <${PageHeader} title="Kunden" sub="Ein Kunde wird einmal angelegt und kann von jedem Unternehmen abgerechnet werden.">
      <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newCustomer())}>Neuer Kunde<//>
    <//>
    ${state.customers.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Name, Nummer, Ort, E-Mail" />
      <${Chips} label="Status" value=${filter} onChange=${setFilter} options=${[
        { id: 'active', label: 'Aktiv' }, { id: 'inactive', label: 'Inaktiv' }, { id: 'all', label: 'Alle' },
      ]} />
      ${allTags.length > 0 && html`<select class="input select filter-select" value=${tag} aria-label="Nach Tag filtern" onChange=${(e) => setTag(e.target.value)}>
        <option value="">Alle Tags</option>
        ${allTags.map((t) => html`<option value=${t}>${t}</option>`)}
      </select>`}
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} initialSort=${{ key: 'name', dir: 'asc' }}
      onRowClick=${(c) => navigate(`/customers/${c.id}`)}
      empty=${state.customers.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kunden." />`
        : html`<${EmptyState} icon="customers" title="Noch keine Kunden" text="Lege deinen ersten Kunden an – danach kannst du ihn in jeder Rechnung auswählen.">
            <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newCustomer())}>Ersten Kunden anlegen<//>
          <//>`} />
    ${editing && html`<${CustomerFormModal} customer=${editing} onClose=${() => setEditing(null)}
      onSaved=${(c) => { if (!byId('customers', editing.id)) navigate(`/customers/${c.id}`); }} />`}
  `;
}

/* ---------- Kundenakte ---------- */

export function CustomerDetailView({ id }) {
  useStore();
  const c = byId('customers', id);
  const [editing, setEditing] = useState(false);
  if (!c) {
    return html`<${EmptyState} icon="customers" title="Kunde nicht gefunden" text="Dieser Kunde existiert nicht mehr.">
      <${Button} onClick=${() => navigate('/customers')}>Zur Kundenliste<//>
    <//>`;
  }
  const today = todayISO();
  const stats = customerStats(null).get(id) || { usd: 0, eur: 0, count: 0, openUSD: 0, openEUR: 0, overdueUSD: 0, overdueEUR: 0, paidUSD: 0, paidEUR: 0 };
  const invoices = state.invoices.filter((i) => i.customerId === id).sort((a, b) => (a.issueDate < b.issueDate ? 1 : -1));
  const quotes = state.quotes.filter((i) => i.customerId === id).sort((a, b) => (a.issueDate < b.issueDate ? 1 : -1));
  const companyIds = [...new Set([...invoices, ...quotes].map((d) => d.companyId))];

  // Bisher gebuchte Leistungen (aus erstellten Rechnungen)
  const svc = new Map();
  for (const inv of invoices) {
    if (inv.status === 'draft' || inv.status === 'cancelled' || inv.type === 'credit_note') continue;
    for (const it of inv.items || []) {
      const key = it.serviceId || `n:${it.name}`;
      const row = svc.get(key) || { name: it.name, times: 0, last: '' };
      row.times += 1;
      if (inv.issueDate > row.last) row.last = inv.issueDate;
      svc.set(key, row);
    }
  }
  const services = [...svc.values()].sort((a, b) => b.times - a.times);

  async function remove() {
    const ok = await ask({ title: 'Kunde löschen?', text: `${customerName(c)} wird endgültig gelöscht.`, confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteCustomer(id); return true; });
    if (done) { toast('Kunde gelöscht', 'good'); navigate('/customers'); }
  }

  const address = [
    [c.street, c.houseNo].filter(Boolean).join(' '),
    [c.zip, c.city].filter(Boolean).join(' '),
    [c.region, c.country].filter(Boolean).join(', '),
  ].filter(Boolean);

  const invColumns = [
    { key: 'number', label: 'Nummer', render: (i) => html`<a href=${`#/invoices/${i.id}`} class="cell-main">${i.number || 'Entwurf'}</a>` },
    { key: 'company', label: 'Unternehmen', render: (i) => html`<${CompanyTag} id=${i.companyId} />` },
    { key: 'date', label: 'Datum', render: (i) => date(i.issueDate) },
    { key: 'due', label: 'Fällig', render: (i) => date(i.dueDate) },
    { key: 'total', label: 'Betrag', align: 'right', render: (i) => html`<${DocAmount} doc=${i} />` },
    { key: 'status', label: 'Status', render: (i) => html`<${InvoiceBadge} inv=${i} />` },
  ];
  const quoteColumns = [
    { key: 'number', label: 'Nummer', render: (i) => html`<a href=${`#/quotes/${i.id}`} class="cell-main">${i.number || 'Entwurf'}</a>` },
    { key: 'company', label: 'Unternehmen', render: (i) => html`<${CompanyTag} id=${i.companyId} />` },
    { key: 'date', label: 'Datum', render: (i) => date(i.issueDate) },
    { key: 'valid', label: 'Gültig bis', render: (i) => date(i.validUntil) },
    { key: 'total', label: 'Betrag', align: 'right', render: (i) => html`<${DocAmount} doc=${i} />` },
    { key: 'status', label: 'Status', render: (i) => html`<${QuoteBadge} quote=${i} />` },
  ];

  return html`
    <${PageHeader} title=${customerName(c)} back=${{ href: '#/customers', label: 'Kunden' }}
      sub=${html`<span>Kundennummer ${c.number}</span>${c.active === false ? html`<${Badge} tone="mute">Inaktiv<//>` : ''}`}>
      <${Button} icon="edit" onClick=${() => setEditing(true)}>Bearbeiten<//>
      <${Button} variant="primary" icon="plus" onClick=${() => navigate(`/invoices/new?customer=${id}`)}>Rechnung schreiben<//>
      <${Menu} items=${[
        { label: 'Angebot schreiben', icon: 'quote', onClick: () => navigate(`/quotes/new?customer=${id}`) },
        { label: 'Kunde löschen', icon: 'trash', danger: true, disabled: customerInUse(id), onClick: remove },
      ]} />
    <//>

    <div class="stat-row">
      <${Stat} label="Umsatz gesamt (netto)" value=${money(stats.usd, 'USD')} sub=${`≈ ${money(stats.eur, 'EUR')}, ${stats.count} Rechnungen`} />
      <${Stat} label="Offene Forderungen" value=${money(stats.openUSD, 'USD')} sub=${`≈ ${money(stats.openEUR, 'EUR')}`} />
      <${Stat} label="Davon überfällig" value=${money(stats.overdueUSD, 'USD')} tone=${stats.overdueUSD ? 'bad' : ''} sub=${`≈ ${money(stats.overdueEUR, 'EUR')}`} />
      <${Stat} label="Bezahlt" value=${money(stats.paidUSD, 'USD')} sub=${`≈ ${money(stats.paidEUR, 'EUR')}`} />
    </div>

    <div class="split">
      <div class="split-main">
        <${Panel} title="Rechnungen" flush>
          <${DataTable} columns=${invColumns} rows=${invoices} onRowClick=${(i) => navigate(`/invoices/${i.id}`)}
            empty=${html`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${Panel} title="Angebote" flush>
          <${DataTable} columns=${quoteColumns} rows=${quotes} onRowClick=${(i) => navigate(`/quotes/${i.id}`)}
            empty=${html`<p class="panel-empty">Noch keine Angebote für diesen Kunden.</p>`} />
        <//>
      </div>
      <aside class="split-side">
        <${Panel} title="Kontakt">
          <${KV} rows=${[
            ['Ansprechpartner', customerPerson(c)],
            ['Adresse', address.length ? html`${address.map((l) => html`<div>${l}</div>`)}` : ''],
            ['E-Mail', c.email && html`<a href=${`mailto:${c.email}`}>${c.email}</a>`],
            ['Telefon', c.phone],
            ['Website', c.website],
            ['Steuer-ID', c.taxId],
            ['USt-IdNr.', c.vatId],
            ['Belegsprache', c.language ? (LANGUAGES.find((l) => l.id === c.language) || {}).label : 'Wie Unternehmen'],
            ['Währung', c.currency || 'Wie Unternehmen'],
            ['Zahlungsziel', c.paymentTermDays != null && c.paymentTermDays !== '' ? `${c.paymentTermDays} Tage` : 'Wie Unternehmen'],
            ['Tags', (c.tags || []).length ? (c.tags || []).map((t) => html`<span class="tag">${t}</span>`) : ''],
          ]} />
        <//>
        <${Panel} title="Abgerechnet über">
          ${companyIds.length
            ? html`<ul class="plain-list">${companyIds.map((cid) => html`<li><${CompanyTag} id=${cid} /></li>`)}</ul>`
            : html`<p class="muted-text">Noch keine Belege.</p>`}
        <//>
        <${Panel} title="Gebuchte Leistungen">
          ${services.length
            ? html`<ul class="plain-list">${services.slice(0, 12).map((s) => html`<li class="row-between">
                <span>${s.name}</span><span class="muted-text">${s.times}×, zuletzt ${date(s.last)}</span></li>`)}</ul>`
            : html`<p class="muted-text">Noch keine abgerechneten Leistungen.</p>`}
        <//>
        <${Panel} title="Interne Notizen">
          ${c.notes ? html`<p class="pre">${c.notes}</p>` : html`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${editing && html`<${CustomerFormModal} customer=${c} onClose=${() => setEditing(false)} />`}
  `;
}
