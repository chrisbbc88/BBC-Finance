// Kunden: Liste, Kundenakte und Formular. Kunden gelten für alle Unternehmen gemeinsam.

import { html, useState, useMemo, useStore, navigate, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, Chips, EmptyState, Modal, TextField, TextArea,
  SelectField, NumberField, Checkbox, Badge, Panel, Stat, KV, Menu, DateField as DateFieldLocal, Field, Segmented,
} from '../ui/components.js';
import { state, byId } from '../lib/store.js';
import {
  newCustomer, customerName, customerPerson, LANGUAGES, DOC_CURRENCIES, INTERVALS, NOTE_KINDS, newNote, newAppointment, APPOINTMENT_STATUS,
  CONTACT_KINDS, isCustomer, quoteLabel,
} from '../lib/schema.js';
import { saveCustomer, deleteCustomer, customerInUse, nextContactNumber, saveNote, deleteNote } from '../lib/actions.js';
import { parseImprint, extractContactAI, normalizeUrl } from '../lib/imprint.js';
import { revenueDocs, receivables, servicesByCustomer } from '../lib/reports.js';
import { matches, todayISO } from '../lib/util.js';
import { money, date, num, unitLabel } from '../lib/format.js';
import { toUSD, toEUR } from '../lib/calc.js';
import { activeCompanies } from '../lib/store.js';
import { Icon } from '../ui/icons.js';
import {
  storeData, scopeCompanyId, InvoiceBadge, QuoteBadge, DocAmount, CompanyTag, CUR, ALT, pick, pickAlt, mc, ma,
} from './shared.js';
import { AppointmentModal, AppointmentList, sortAppointments, documentAppointment } from './appointments.js';
import { TodoList, TodoQuickAdd, TodoModal, byDue } from './todos.js';
import {
  PipelinePanel, ContractModal, ContractTable, QuoteUploadModal, uploadQuoteFor, contractFor,
} from './contracts.js';

/* ---------- Formular ---------- */

const IMPRINT_LABELS = {
  company: 'Unternehmen', firstName: 'Vorname', lastName: 'Nachname', street: 'Straße', houseNo: 'Hausnummer', zip: 'PLZ', city: 'Ort',
  region: 'Region', country: 'Land', email: 'E-Mail', phone: 'Telefon', website: 'Website', taxId: 'Steuer-ID', vatId: 'USt-IdNr.',
};

/** Kontaktdaten aus einem Impressum: Text einfügen (ohne KI, mit KI besser) oder Website-Adresse (mit KI). */
function ImprintImport({ onApply }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState('');
  const hasKey = !!state.settings.aiApiKey;
  async function fromText() {
    if (!text.trim()) { toast('Bitte zuerst den Text des Impressums einfügen.', 'info'); return; }
    setBusy('text');
    let res = null;
    if (hasKey) {
      res = await attempt(() => extractContactAI({ apiKey: state.settings.aiApiKey, model: state.settings.aiModel, text }));
    }
    if (!res) res = parseImprint(text);   // ohne API-Key (oder wenn die KI nicht antwortet): lokale Erkennung
    setBusy('');
    onApply(res);
  }
  async function fromUrl() {
    const u = normalizeUrl(url);
    if (!u) { toast('Bitte die Adresse des Impressums eintragen.', 'info'); return; }
    setBusy('url');
    const res = await attempt(() => extractContactAI({ apiKey: state.settings.aiApiKey, model: state.settings.aiModel, url: u }));
    setBusy('');
    if (res) onApply(res);
  }
  if (!open) {
    return html`<div class="imprint-open"><${Button} small icon="sparkle" onClick=${() => setOpen(true)}>Daten aus Impressum übernehmen<//></div>`;
  }
  return html`<div class="imprint-box">
    <div class="row-between"><strong>Daten aus Impressum übernehmen</strong>
      <${Button} variant="ghost" small icon="x" title="Schließen" onClick=${() => setOpen(false)} /></div>
    <p class="field-hint">Füllt nur Felder, die noch leer sind. Bitte danach kurz prüfen.</p>
    <div class="form-grid">
      <${TextArea} class="span-6" label="Impressum einfügen" value=${text} onInput=${setText} rows=${5}
        placeholder="Text des Impressums hier hineinkopieren"
        hint=${hasKey ? 'Wird mit der KI ausgelesen (API-Key aus den Einstellungen).' : 'Wird direkt im Browser ausgelesen. Mit API-Key in den Einstellungen geht es noch genauer.'} />
      <div class="span-6"><${Button} small variant="primary" busy=${busy === 'text'} onClick=${fromText}>Text auslesen<//></div>
      <${TextField} class="span-4" label="Oder Adresse des Impressums" value=${url} onInput=${setUrl} placeholder="firma.de/impressum"
        hint=${hasKey ? 'Die Seite wird über die Anthropic-API abgerufen und ausgelesen.' : 'Braucht den API-Key aus den Einstellungen – der Browser selbst darf fremde Seiten nicht lesen.'} />
      <div class="span-2 field field-inline"><${Button} small busy=${busy === 'url'} disabled=${!hasKey} onClick=${fromUrl}>Von Website laden<//></div>
    </div>
  </div>`;
}

export function CustomerFormModal({ customer, onClose, onSaved }) {
  const isNew = !customer || !byId('customers', customer.id);
  const [c, setC] = useState(() => ({ ...newCustomer(), ...(customer || {}) }));
  const [tags, setTags] = useState((c.tags || []).join(', '));
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setC((prev) => ({ ...prev, [k]: v }));
  const stored = byId('customers', c.id);
  const hasInvoices = !isNew && state.invoices.some((i) => i.customerId === c.id);
  const kind = isCustomer(c) ? 'customer' : 'contact';
  // Nummer: neue automatische Nummer, wenn sich die Art ändert und die bisherige automatisch vergeben war
  const autoPattern = (k, n) => new RegExp(`^${k === 'contact' ? 'KO' : 'K'}-\\d+$`).test(String(n || ''));
  function pickKind(k) {
    setC((p) => {
      const was = isCustomer(p) ? 'customer' : 'contact';
      if (was === k) return p;
      return { ...p, kind: k, number: autoPattern(was, p.number) ? '' : p.number };
    });
  }

  function applyImprint({ fields, extra }) {
    const filled = [];
    const kept = [];
    setC((p) => {
      const out = { ...p };
      for (const [k, v] of Object.entries(fields)) {
        if (!v) continue;
        if (!String(p[k] || '').trim()) { out[k] = v; filled.push(IMPRINT_LABELS[k] || k); } else if (String(p[k]).trim() !== v) kept.push(IMPRINT_LABELS[k] || k);
      }
      const add = (extra || []).filter((e) => !String(p.notes || '').includes(e));
      if (add.length) { out.notes = [String(p.notes || '').trim(), ...add].filter(Boolean).join('\n'); filled.push('Notizen'); }
      return out;
    });
    setTimeout(() => {
      if (!filled.length) toast(kept.length ? `Nichts übernommen – ${kept.join(', ')} ist schon ausgefüllt.` : 'Im Impressum wurden keine Kontaktdaten erkannt.', 'info', 7000);
      else toast(`Übernommen: ${filled.join(', ')}${kept.length ? `. Nicht überschrieben: ${kept.join(', ')}` : ''}.`, 'good', 8000);
    }, 0);
  }

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
      toast(isNew ? `${isCustomer(saved) ? 'Kunde' : 'Kontakt'} ${saved.number} angelegt` : 'Gespeichert', 'good');
      if (onSaved) onSaved(saved);
      onClose();
    }
  }

  return html`<${Modal} title=${isNew ? 'Neuer Kontakt' : `${kind === 'customer' ? 'Kunde' : 'Kontakt'} bearbeiten`} onClose=${onClose} size="lg" onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Speichern<//>`}>
    <${ImprintImport} onApply=${applyImprint} />
    <div class="form-grid">
      <${Field} class="span-6" label="Art">
        <div class="inline-controls">
          <${Segmented} label="Art des Kontakts" value=${kind} onChange=${pickKind}
            options=${CONTACT_KINDS.map((k) => ({ ...k, label: k.id === 'contact' && hasInvoices ? 'Kontakt (nicht möglich – hat Rechnungen)' : k.label }))} />
          <span class="field-hint">${kind === 'customer' ? 'Kunden erhalten Rechnungen. Nummer K-…' : 'Interessent oder sonstiger Kontakt – Termine, Notizen und Angebote. Nummer KO-…. Wird mit der ersten Rechnung automatisch zum Kunden.'}</span>
        </div>
      <//>
      <${TextField} class="span-4" label="Unternehmen" value=${c.company} onInput=${set('company')} />
      <${TextField} class="span-2" label="Nummer" value=${c.number} onInput=${set('number')}
        placeholder=${nextContactNumber(kind, state.customers.filter((x) => x.id !== c.id))}
        hint=${stored && stored.number && stored.number !== c.number && !c.number ? `Bisher ${stored.number}. Leer = neue Nummer` : 'Leer lassen für automatische Nummer'} />
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
      <div class="span-6"><${Checkbox} label="Aktiv" checked=${c.active !== false} onChange=${set('active')} /></div>
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
  const [kindFilter, setKindFilter] = useState('all');
  const [tag, setTag] = useState('');
  const [editing, setEditing] = useState(null);
  const companyId = scopeCompanyId();
  const stats = useMemo(() => customerStats(companyId), [state.version, companyId]);
  // Neu angelegte Kontakte gleich öffnen (Wert aus der Darstellung vor dem Speichern)
  const editingIsNew = !!editing && !byId('customers', editing.id);
  const services = useMemo(() => servicesByCustomer(storeData(), { companyId }), [state.version, companyId]);

  const allTags = useMemo(() => [...new Set(state.customers.flatMap((c) => c.tags || []))].sort((a, b) => a.localeCompare(b, 'de')), [state.version]);
  const rows = state.customers.filter((c) => {
    if (filter === 'active' && c.active === false) return false;
    if (filter === 'inactive' && c.active !== false) return false;
    if (kindFilter === 'customer' && !isCustomer(c)) return false;
    if (kindFilter === 'contact' && isCustomer(c)) return false;
    if (tag && !(c.tags || []).includes(tag)) return false;
    return matches(q, c.number, c.company, c.firstName, c.lastName, c.contact, c.city, c.country, c.email, (c.tags || []).join(' '),
      (services.get(c.id) || []).map((x) => x.name).join(' '));
  });

  const columns = [
    { key: 'number', label: 'Nr.', sort: (c) => c.number, width: '90px', render: (c) => html`<span class="mono-num">${c.number}</span>` },
    {
      key: 'name', label: 'Name', sort: (c) => customerName(c),
      render: (c) => html`<div class="cell-main">${customerName(c)}</div>
        ${customerPerson(c) && customerPerson(c) !== customerName(c) && html`<div class="cell-sub">${customerPerson(c)}</div>`}`,
    },
    { key: 'kind', label: 'Art', sort: (c) => (isCustomer(c) ? 0 : 1), render: (c) => html`<${Badge} tone=${isCustomer(c) ? 'info' : 'neutral'} icon=${isCustomer(c) ? 'good' : 'customers'}>${isCustomer(c) ? 'Kunde' : 'Kontakt'}<//>` },
    { key: 'city', label: 'Ort', sort: (c) => c.city, render: (c) => [c.city, c.country].filter(Boolean).join(', ') },
    {
      key: 'services', label: 'Leistungen',
      render: (c) => {
        const list = services.get(c.id) || [];
        if (!list.length) return html`<span class="muted-text">–</span>`;
        return html`<div class="svc-tags">${list.slice(0, 3).map((x) => html`<span class="tag" title=${x.running ? 'Läuft (wiederkehrende Vorlage)' : ''}>${x.running ? '↻ ' : ''}${x.name}</span>`)}
          ${list.length > 3 && html`<span class="tag muted-text">+${list.length - 3}</span>`}</div>`;
      },
    },
    {
      key: 'tags', label: 'Tags',
      render: (c) => (c.tags || []).map((t) => html`<span class="tag">${t}</span>`),
    },
    {
      key: 'revenue', label: 'Umsatz', align: 'right', sort: (c) => pick(stats.get(c.id)),
      render: (c) => { const s = stats.get(c.id); return s && pick(s) ? mc(pick(s)) : html`<span class="muted-text">–</span>`; },
    },
    {
      key: 'open', label: 'Offen', align: 'right', sort: (c) => pick(stats.get(c.id), 'open'),
      render: (c) => {
        const s = stats.get(c.id);
        if (!s || !pick(s, 'open')) return html`<span class="muted-text">–</span>`;
        return html`<span class=${pick(s, 'overdue') ? 'tone-bad' : ''}>${mc(pick(s, 'open'))}</span>`;
      },
    },
    { key: 'status', label: '', render: (c) => (c.active === false ? html`<${Badge} tone="mute">Inaktiv<//>` : '') },
  ];

  return html`
    <${PageHeader} title="Kontakte" sub="Kunden und Kontakte – einmal angelegt, für jedes Unternehmen nutzbar. Ein Kontakt wird mit seiner ersten Rechnung automatisch zum Kunden.">
      <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newCustomer({ kind: 'contact' }))}>Neuer Kontakt<//>
    <//>
    ${state.customers.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Name, Nummer, Ort, E-Mail, Leistung" />
      <${Chips} label="Art" value=${kindFilter} onChange=${setKindFilter} options=${[
        { id: 'all', label: 'Alle', count: state.customers.length },
        { id: 'customer', label: 'Kunden', count: state.customers.filter(isCustomer).length },
        { id: 'contact', label: 'Kontakte', count: state.customers.filter((x) => !isCustomer(x)).length },
      ]} />
      <select class="input select filter-select" value=${filter} aria-label="Status" onChange=${(e) => setFilter(e.target.value)}>
        <option value="active">Aktive</option><option value="inactive">Inaktive</option><option value="all">Aktive und inaktive</option>
      </select>
      ${allTags.length > 0 && html`<select class="input select filter-select" value=${tag} aria-label="Nach Tag filtern" onChange=${(e) => setTag(e.target.value)}>
        <option value="">Alle Tags</option>
        ${allTags.map((t) => html`<option value=${t}>${t}</option>`)}
      </select>`}
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} initialSort=${{ key: 'name', dir: 'asc' }}
      onRowClick=${(c) => navigate(`/customers/${c.id}`)}
      empty=${state.customers.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keinen Kontakt." />`
        : html`<${EmptyState} icon="customers" title="Noch keine Kontakte" text="Lege Kunden und Interessenten an – mit Terminen, Notizen, Angeboten und Rechnungen.">
            <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newCustomer({ kind: 'contact' }))}>Ersten Kontakt anlegen<//>
          <//>`} />
    ${editing && html`<${CustomerFormModal} customer=${editing} onClose=${() => setEditing(null)}
      onSaved=${(c) => { if (editingIsNew) navigate(`/customers/${c.id}`); }} />`}
  `;
}

/* ---------- Kundenakte ---------- */

export function CustomerDetailView({ id }) {
  useStore();
  const c = byId('customers', id);
  const [editing, setEditing] = useState(false);
  const [noteEdit, setNoteEdit] = useState(null);
  const [apptEdit, setApptEdit] = useState(null);
  const [todoEdit, setTodoEdit] = useState(null);
  const [contractEdit, setContractEdit] = useState(null);
  const [uploadEdit, setUploadEdit] = useState(null);
  const [showDone, setShowDone] = useState(false);
  if (!c) {
    return html`<${EmptyState} icon="customers" title="Kontakt nicht gefunden" text="Dieser Kontakt existiert nicht mehr.">
      <${Button} onClick=${() => navigate('/customers')}>Zu den Kontakten<//>
    <//>`;
  }
  const today = todayISO();
  const stats = customerStats(null).get(id) || { usd: 0, eur: 0, count: 0, openUSD: 0, openEUR: 0, overdueUSD: 0, overdueEUR: 0, paidUSD: 0, paidEUR: 0 };
  const svcRows = servicesByCustomer(storeData(), { customerId: id }).get(id) || [];
  const notes = state.notes.filter((n) => n.customerId === id);
  const appts = sortAppointments(state.appointments.filter((a) => a.customerId === id));
  const upcoming = appts.filter((a) => a.status === 'planned' && a.date >= today);
  const myTodos = state.todos.filter((t) => t.customerId === id);
  const openTodos = myTodos.filter((t) => !t.done).sort(byDue);
  const doneTodos = myTodos.filter((t) => t.done).sort((a, b) => ((a.doneAt || '') < (b.doneAt || '') ? 1 : -1));
  const invoices = state.invoices.filter((i) => i.customerId === id).sort((a, b) => (a.issueDate < b.issueDate ? 1 : -1));
  const quotes = state.quotes.filter((i) => i.customerId === id).sort((a, b) => (a.issueDate < b.issueDate ? 1 : -1));
  const companyIds = [...new Set([...invoices, ...quotes].map((d) => d.companyId))];

  async function remove() {
    const extra = notes.length || appts.length
      ? ` Mitgelöscht werden ${appts.length} ${appts.length === 1 ? 'Termin' : 'Termine'} und ${notes.length} ${notes.length === 1 ? 'Eintrag' : 'Einträge'} der Kundendokumentation.`
      : '';
    const ok = await ask({ title: `${isCustomer(c) ? 'Kunde' : 'Kontakt'} löschen?`, text: `${customerName(c)} wird endgültig gelöscht.${extra}`, confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteCustomer(id); return true; });
    if (done) { toast('Gelöscht', 'good'); navigate('/customers'); }
  }

  async function switchKind(to) {
    const toCustomer = to === 'customer';
    const ok = await ask({
      title: toCustomer ? `${customerName(c)} zum Kunden machen?` : `${customerName(c)} als Kontakt führen?`,
      text: toCustomer
        ? `Der Kontakt wird Kunde und bekommt eine Kundennummer (${nextContactNumber('customer')}). Das passiert sonst automatisch mit der ersten Rechnung.`
        : `Der Kunde wird als Kontakt geführt und bekommt eine Kontaktnummer (${nextContactNumber('contact')}).`,
      confirmLabel: toCustomer ? 'Zum Kunden machen' : 'Als Kontakt führen',
    });
    if (!ok) return;
    const saved = await attempt(() => saveCustomer({ ...c, kind: to }));
    if (saved) toast(`${toCustomer ? 'Kunde' : 'Kontakt'} ${saved.number}`, 'good');
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
    { key: 'number', label: 'Nummer', render: (i) => html`<a href=${`#/quotes/${i.id}${i.status === 'draft' ? '/edit' : ''}`} class="cell-main">${quoteLabel(i)}</a>${i.source === 'upload' && html` <span class="pdf-tag">PDF</span>`}` },
    { key: 'company', label: 'Unternehmen', render: (i) => html`<${CompanyTag} id=${i.companyId} />` },
    { key: 'date', label: 'Datum', render: (i) => date(i.issueDate) },
    { key: 'valid', label: 'Gültig bis', render: (i) => date(i.validUntil) },
    { key: 'total', label: 'Betrag', align: 'right', render: (i) => html`<${DocAmount} doc=${i} />` },
    { key: 'status', label: 'Status', render: (i) => html`<${QuoteBadge} quote=${i} />` },
  ];

  return html`
    <${PageHeader} title=${customerName(c)} back=${{ href: '#/customers', label: 'Kontakte' }}
      sub=${html`<span class="badges"><${Badge} tone=${isCustomer(c) ? 'info' : 'neutral'} icon=${isCustomer(c) ? 'good' : 'customers'}>${isCustomer(c) ? 'Kunde' : 'Kontakt'}<//>${c.active === false ? html`<${Badge} tone="mute">Inaktiv<//>` : ''}</span>
        <span class="head-meta">${isCustomer(c) ? 'Kundennummer' : 'Kontaktnummer'} ${c.number}${(c.formerNumbers || []).length ? ` (vorher ${c.formerNumbers.join(', ')})` : ''}</span>`}>
      <${Button} icon="edit" onClick=${() => setEditing(true)}>Bearbeiten<//>
      <${Button} variant="primary" icon="plus" onClick=${() => navigate(`/invoices/new?customer=${id}`)}>Rechnung schreiben<//>
      <${Menu} items=${[
        { label: 'Angebot schreiben', icon: 'quote', onClick: () => navigate(`/quotes/new?customer=${id}`) },
        { label: 'Angebot hochladen (PDF)', icon: 'upload', onClick: () => setUploadEdit(uploadQuoteFor(id)) },
        { label: 'Vertrag anlegen', icon: 'file', onClick: () => setContractEdit(contractFor(id)) },
        !isCustomer(c) && { label: 'Zum Kunden machen', icon: 'good', onClick: () => switchKind('customer') },
        isCustomer(c) && !invoices.length && { label: 'Als Kontakt führen', icon: 'customers', onClick: () => switchKind('contact') },
        { label: 'Löschen', icon: 'trash', danger: true, disabled: customerInUse(id), onClick: remove },
      ]} />
    <//>

    <div class="stat-row">
      <${Stat} label="Umsatz gesamt (netto)" value=${mc(pick(stats))} sub=${`≈ ${ma(pickAlt(stats))}, ${stats.count} Rechnungen`} />
      <${Stat} label="Offene Forderungen" value=${mc(pick(stats, 'open'))} sub=${`≈ ${ma(pickAlt(stats, 'open'))}`} />
      <${Stat} label="Davon überfällig" value=${mc(pick(stats, 'overdue'))} tone=${pick(stats, 'overdue') ? 'bad' : ''} sub=${`≈ ${ma(pickAlt(stats, 'overdue'))}`} />
      <${Stat} label="Bezahlt" value=${mc(pick(stats, 'paid'))} sub=${`≈ ${ma(pickAlt(stats, 'paid'))}`} />
    </div>

    <${PipelinePanel} customerId=${id} on=${{
      appointment: () => setApptEdit(newApptFor(c)),
      uploadQuote: () => setUploadEdit(uploadQuoteFor(id)),
      contract: setContractEdit,
      openContract: setContractEdit,
    }} />

    <div class="split">
      <div class="split-main">
        <${Panel} title=${`To-dos${openTodos.length ? ` (${openTodos.length})` : ''}`} action=${doneTodos.length > 0 && html`<button type="button" class="link-btn small"
            onClick=${() => setShowDone(!showDone)}>${showDone ? 'Erledigte ausblenden' : `${doneTodos.length} erledigte zeigen`}</button>`}>
          <${TodoList} items=${openTodos} showCustomer=${false} onEdit=${setTodoEdit} />
          ${showDone && html`<${TodoList} items=${doneTodos} showCustomer=${false} onEdit=${setTodoEdit} />`}
          <${TodoQuickAdd} customerId=${id} />
        <//>
        <${ServiceOverview} rows=${svcRows} />
        <${Panel} title="Termine und Dokumentation" action=${html`<div class="panel-head-actions">
            <${Button} small icon="note" onClick=${() => setNoteEdit(newNote({ customerId: id }))}>Eintrag<//>
            <${Button} small icon="calendar" onClick=${() => setApptEdit(newApptFor(c))}>Termin planen<//>
          </div>`}>
          ${upcoming.length > 0 && html`<h3 class="sub-head">Anstehend</h3>
            <${AppointmentList} items=${upcoming} onOpen=${setApptEdit} compact />`}
          <${CustomerTimeline} notes=${notes} appts=${appts.filter((a) => !(a.status === 'planned' && a.date >= today))}
            onNote=${setNoteEdit} onAppt=${setApptEdit} hasUpcoming=${upcoming.length > 0} />
        <//>
        <${Panel} title="Rechnungen" flush>
          <${DataTable} columns=${invColumns} rows=${invoices} onRowClick=${(i) => navigate(`/invoices/${i.id}`)}
            empty=${html`<p class="panel-empty">Noch keine Rechnungen für diesen Kunden.</p>`} />
        <//>
        <${Panel} title="Angebote" flush action=${html`<div class="panel-head-actions">
            <${Button} small icon="upload" onClick=${() => setUploadEdit(uploadQuoteFor(id))}>PDF hochladen<//>
            <${Button} small icon="quote" onClick=${() => navigate(`/quotes/new?customer=${id}`)}>Schreiben<//>
          </div>`}>
          <${DataTable} columns=${quoteColumns} rows=${quotes} onRowClick=${(i) => navigate(`/quotes/${i.id}${i.status === 'draft' ? '/edit' : ''}`)}
            empty=${html`<p class="panel-empty">Noch keine Angebote für diesen Kontakt.</p>`} />
        <//>
        <${Panel} title="Verträge" flush action=${html`<div class="panel-head-actions">
            <${Button} small icon="file" onClick=${() => setContractEdit(contractFor(id))}>Vertrag anlegen<//>
          </div>`}>
          <${ContractTable} customerId=${id} onOpen=${setContractEdit} />
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
        <${Panel} title="Interne Notizen">
          ${c.notes ? html`<p class="pre">${c.notes}</p>` : html`<p class="muted-text">Keine Notizen. Über „Bearbeiten“ kannst du welche hinterlegen.</p>`}
        <//>
      </aside>
    </div>
    ${editing && html`<${CustomerFormModal} customer=${c} onClose=${() => setEditing(false)} />`}
    ${noteEdit && html`<${NoteModal} note=${noteEdit} onClose=${() => setNoteEdit(null)} />`}
    ${apptEdit && html`<${AppointmentModal} key=${apptEdit.id} appointment=${apptEdit} onClose=${() => setApptEdit(null)} />`}
    ${todoEdit && html`<${TodoModal} key=${todoEdit.id} todo=${todoEdit} onClose=${() => setTodoEdit(null)} />`}
    ${contractEdit && html`<${ContractModal} key=${contractEdit.id} contract=${contractEdit} onClose=${() => setContractEdit(null)} />`}
    ${uploadEdit && html`<${QuoteUploadModal} key=${uploadEdit.id} quote=${uploadEdit} onClose=${() => setUploadEdit(null)} />`}
  `;
}

/** Neuer Termin für einen Kunden: Unternehmen aus dem Switcher, sonst das, über das zuletzt abgerechnet wurde. */
function newApptFor(c) {
  const last = [...state.invoices].filter((i) => i.customerId === c.id).sort((a, b) => (a.issueDate < b.issueDate ? 1 : -1))[0];
  const company = (scopeCompanyId() && byId('companies', scopeCompanyId())) || (last && byId('companies', last.companyId)) || activeCompanies()[0];
  return newAppointment(company, {
    customerId: c.id, attendees: c.email || '', language: c.language || (company && company.language) || 'de',
  });
}

/* ---------- Leistungsübersicht ---------- */

function ServiceOverview({ rows }) {
  const intervalLabel = (id) => (INTERVALS.find((x) => x.id === id) || {}).label || '';
  return html`<${Panel} title="Leistungsübersicht" flush action=${html`<span class="muted-text small">automatisch aus Rechnungen und wiederkehrenden Vorlagen</span>`}>
    ${rows.length
      ? html`<div class="table-wrap"><table class="table table-compact">
          <thead><tr><th>Leistung</th><th>Über</th><th class="r">Rechnungen</th><th class="r">Menge</th><th class="r">${`Umsatz netto (${CUR()})`}</th><th>Zuletzt</th></tr></thead>
          <tbody>${rows.map((r) => html`<tr key=${r.key}>
            <td><div class="cell-main">${r.name}</div>
              ${r.running && html`<div class="cell-sub svc-running"><${Icon} name="repeat" size=${13} />läuft, ${intervalLabel(r.interval).toLowerCase()}</div>`}
              ${r.category && html`<div class="cell-sub">${r.category}</div>`}</td>
            <td>${r.companyIds.map((cid) => html`<div><${CompanyTag} id=${cid} /></div>`)}</td>
            <td class="r">${r.invoices || '–'}</td>
            <td class="r">${r.qty ? `${num(r.qty)}${r.unit ? ` ${unitLabel(r.unit, 'de')}` : ''}` : '–'}</td>
            <td class="r">${pick(r) ? html`${mc(pick(r))}<div class="cell-sub">≈ ${ma(pickAlt(r))}</div>` : '–'}</td>
            <td>${r.last ? date(r.last) : (r.running ? 'noch nicht abgerechnet' : '–')}</td>
          </tr>`)}</tbody>
        </table></div>`
      : html`<p class="panel-empty">Noch keine abgerechneten Leistungen. Sobald du eine Rechnung für diesen Kunden erstellst, erscheinen ihre Leistungen hier.</p>`}
  <//>`;
}

/* ---------- Kundendokumentation ---------- */

const NOTE_ICON = { note: 'note', call: 'phone', email: 'mail', meeting: 'customers', task: 'check' };
const noteKind = (id) => (NOTE_KINDS.find((k) => k.id === id) || NOTE_KINDS[0]).label;

function CustomerTimeline({ notes, appts, onNote, onAppt, hasUpcoming }) {
  const entries = [
    ...notes.map((n) => ({ type: 'note', key: `n-${n.id}`, sort: `${n.date} ${n.createdAt || ''}`, n })),
    ...appts.map((a) => ({ type: 'appt', key: `a-${a.id}`, sort: `${a.date} ${a.start}`, a })),
  ].sort((x, y) => (x.sort < y.sort ? 1 : -1));
  async function removeNote(n) {
    const ok = await ask({ title: 'Eintrag löschen?', text: 'Der Eintrag wird aus der Kundendokumentation entfernt. Im Protokoll bleibt er erhalten.', confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteNote(n.id); return true; });
    if (done) toast('Eintrag gelöscht', 'good');
  }
  if (!entries.length) {
    return hasUpcoming ? null : html`<p class="muted-text">Noch keine Einträge. Halte Telefonate, Gespräche und Vereinbarungen hier fest – oder plane einen Termin.</p>`;
  }
  return html`${hasUpcoming && html`<h3 class="sub-head">Verlauf</h3>`}
    <ol class="timeline-doc">
    ${entries.map((e) => {
      if (e.type === 'note') {
        const n = e.n;
        return html`<li key=${e.key}>
          <span class="tl-icon"><${Icon} name=${NOTE_ICON[n.kind] || 'note'} size=${15} /></span>
          <div>
            <div class="tl-head"><span class="tl-title">${n.title || noteKind(n.kind)}</span>
              <span class="tl-meta">${noteKind(n.kind)} · ${date(n.date)}</span>${n.companyId && html`<${CompanyTag} id=${n.companyId} />`}</div>
            ${n.text && html`<div class="tl-text">${n.text}</div>`}
          </div>
          <div class="tl-actions">
            <${Button} variant="ghost" small icon="edit" title="Eintrag bearbeiten" onClick=${() => onNote(n)} />
            <${Button} variant="ghost" small icon="trash" title="Eintrag löschen" onClick=${() => removeNote(n)} />
          </div>
        </li>`;
      }
      const a = e.a;
      const st = APPOINTMENT_STATUS[a.status] || APPOINTMENT_STATUS.planned;
      const missingDoc = a.status === 'planned';
      return html`<li key=${e.key}>
        <span class="tl-icon"><${Icon} name="calendar" size=${15} /></span>
        <div>
          <div class="tl-head"><span class="tl-title">${a.title}</span>
            <span class="tl-meta">Termin · ${date(a.date)}, ${a.start} Uhr</span>
            <${Badge} tone=${missingDoc ? 'warn' : st.tone}>${missingDoc ? 'Nicht dokumentiert' : st.label}<//>
            <${CompanyTag} id=${a.companyId} /></div>
          ${a.outcome ? html`<div class="tl-text">${a.outcome}</div>` : (a.agenda && html`<div class="tl-text muted-text">${a.agenda}</div>`)}
          ${a.nextSteps && html`<div class="tl-text"><span class="strong">Nächste Schritte:</span> ${a.nextSteps}</div>`}
          ${(() => { const ts = state.todos.filter((t) => t.appointmentId === a.id); return ts.length > 0 && html`<div class="tl-todos">${ts.map((t) => html`<span class=${`tag${t.done ? ' is-done' : ''}`}>${t.done ? '✓' : '○'} ${t.title}</span>`)}</div>`; })()}
        </div>
        <div class="tl-actions">
          ${missingDoc && html`<${Button} small onClick=${() => documentAppointment(a)}>Dokumentieren<//>`}
          <${Button} variant="ghost" small icon="edit" title="Termin öffnen" onClick=${() => onAppt(a)} />
        </div>
      </li>`;
    })}
  </ol>`;
}

export function NoteModal({ note, onClose }) {
  const isNew = !byId('notes', note.id);
  const [n, setN] = useState(() => ({ ...note }));
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setN((p) => ({ ...p, [k]: v }));
  async function submit() {
    setBusy(true);
    const saved = await attempt(() => saveNote(n));
    setBusy(false);
    if (saved) { toast(isNew ? 'Eintrag gespeichert' : 'Eintrag geändert', 'good'); onClose(); }
  }
  return html`<${Modal} title=${isNew ? 'Neuer Eintrag' : 'Eintrag bearbeiten'} onClose=${onClose} onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Speichern<//>`}>
    <div class="form-grid">
      <${SelectField} class="span-2" label="Art" value=${n.kind} onChange=${set('kind')} options=${NOTE_KINDS} />
      <${DateFieldLocal} class="span-2" label="Datum" value=${n.date} onInput=${set('date')} />
      <${SelectField} class="span-2" label="Unternehmen" value=${n.companyId} onChange=${set('companyId')} placeholder="Ohne Zuordnung"
        options=${activeCompanies().map((x) => ({ id: x.id, label: x.name }))} />
      <${TextField} class="span-6" label="Betreff" value=${n.title} onInput=${set('title')} placeholder="z. B. Rückruf wegen Angebot" />
      <${TextArea} class="span-6" label="Notiz" value=${n.text} onInput=${set('text')} rows=${6} />
    </div>
  <//>`;
}
