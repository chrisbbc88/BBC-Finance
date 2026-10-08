// Einstieg: Daten laden, Rahmen (Navigation, Company Switcher, Suche, Backup) und Routen.

import {
  html, render, useState, useEffect, useRef, useMemo, useStore, useRoute, navigate, toast, attempt, hasNavGuard, showError,
  unloadWarningPaused,
} from './ui/core.js';
import { useErrorBoundary } from './vendor/preact-htm.js';
import { Icon } from './ui/icons.js';
import { Button, DialogHost, ToastHost, EmptyState } from './ui/components.js';
import {
  state, load, byId, activeCompanies, currentCompany, setSetting, assetUrl,
} from './lib/store.js';
import { firstRun } from './lib/seed.js';
import { customerName } from './lib/schema.js';
import { matches, parseNum, norm } from './lib/util.js';
import { money } from './lib/format.js';

import { DashboardView } from './views/dashboard.js';
import { InvoicesView, InvoiceDetailView } from './views/invoices.js';
import { QuotesView, QuoteDetailView } from './views/quotes.js';
import { DocEditorView } from './views/doc-editor.js';
import { CustomersView, CustomerDetailView } from './views/customers.js';
import { ServicesView } from './views/services.js';
import { ExpensesView } from './views/expenses.js';
import { RecurringView } from './views/recurring.js';
import { FinanceView, ReportsView } from './views/reports.js';
import { CompaniesView, CompanyEditView } from './views/companies.js';
import { SettingsView, downloadBackup } from './views/settings.js';
import { AuditView } from './views/audit.js';

const NAV = [
  [{ path: '/', label: 'Dashboard', icon: 'dashboard', exact: true }],
  [
    { path: '/invoices', label: 'Rechnungen', icon: 'invoice' },
    { path: '/quotes', label: 'Angebote', icon: 'quote' },
    { path: '/recurring', label: 'Wiederkehrend', icon: 'repeat' },
  ],
  [
    { path: '/customers', label: 'Kunden', icon: 'customers' },
    { path: '/services', label: 'Leistungen', icon: 'services' },
  ],
  [
    { path: '/expenses', label: 'Ausgaben', icon: 'expense' },
    { path: '/finance', label: 'Finanzübersicht', icon: 'finance' },
    { path: '/reports', label: 'Reports', icon: 'reports' },
  ],
  [
    { path: '/companies', label: 'Unternehmen', icon: 'company' },
    { path: '/settings', label: 'Einstellungen', icon: 'settings' },
    { path: '/audit', label: 'Protokoll', icon: 'log' },
  ],
];

/* ---------- Company Switcher ---------- */

function CompanySwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = currentCompany();
  const companies = activeCompanies();
  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);

  const pick = (id) => { setOpen(false); attempt(() => setSetting('activeCompany', id)); };
  const swatch = (c) => (c
    ? html`<span class="sw" style=${`background:${c.brandColor}`}>${assetUrl(c.logoAssetId) ? html`<img src=${assetUrl(c.logoAssetId)} alt="" />` : ''}</span>`
    : html`<span class="sw sw-all">${companies.slice(0, 4).map((x) => html`<i style=${`background:${x.brandColor}`}></i>`)}</span>`);

  return html`<div class="switcher" ref=${ref}>
    <button type="button" class="switcher-btn" aria-haspopup="listbox" aria-expanded=${open} onClick=${() => setOpen(!open)}>
      ${swatch(current)}
      <span class="switcher-text">
        <span class="switcher-label">Unternehmen</span>
        <span class="switcher-name">${current ? current.name : 'Alle Unternehmen'}</span>
      </span>
      <${Icon} name="chevronDown" size=${16} />
    </button>
    ${open && html`<div class="switcher-list" role="listbox" aria-label="Unternehmen wählen">
      <button type="button" role="option" aria-selected=${!current} class=${`switcher-item${!current ? ' is-on' : ''}`} onClick=${() => pick('all')}>
        ${swatch(null)}<span>Alle Unternehmen</span>${!current && html`<${Icon} name="check" size=${16} />`}
      </button>
      ${companies.map((c) => html`<button type="button" role="option" aria-selected=${current && current.id === c.id} key=${c.id}
          class=${`switcher-item${current && current.id === c.id ? ' is-on' : ''}`} onClick=${() => pick(c.id)}>
        ${swatch(c)}<span>${c.name}</span>${current && current.id === c.id && html`<${Icon} name="check" size=${16} />`}
      </button>`)}
      <a class="switcher-manage" href="#/companies" onClick=${() => setOpen(false)}>Unternehmen verwalten</a>
    </div>`}
  </div>`;
}

/* ---------- Globale Suche ---------- */

function amountHit(q, cents) {
  const n = parseNum(q);
  if (Number.isNaN(n) || cents == null) return false;
  const v = cents / 100;
  return Math.abs(v - n) < 0.005 || (Number.isInteger(n) && Math.floor(Math.abs(v)) === Math.abs(n));
}

function searchAll(q) {
  const out = [];
  const add = (group, items) => { if (items.length) out.push({ group, items: items.slice(0, 5) }); };
  add('Kunden', state.customers
    .filter((c) => matches(q, c.number, c.company, c.firstName, c.lastName, c.contact, c.email, c.city))
    .map((c) => ({ key: c.id, label: customerName(c), sub: [c.number, c.city].filter(Boolean).join(', '), href: `/customers/${c.id}` })));
  const custName = (d) => customerName(byId('customers', d.customerId) || (d.snapshot && d.snapshot.customer));
  add('Rechnungen', state.invoices
    .filter((i) => matches(q, i.number, custName(i), (i.items || []).map((x) => x.name).join(' ')) || amountHit(q, i.totals && i.totals.totalCents))
    .sort((a, b) => (a.issueDate < b.issueDate ? 1 : -1))
    .map((i) => ({
      key: i.id, label: `${i.number || 'Entwurf'}, ${custName(i) || 'ohne Kunde'}`,
      sub: money(i.totals ? i.totals.totalCents : 0, i.currency), href: i.status === 'draft' ? `/invoices/${i.id}/edit` : `/invoices/${i.id}`,
    })));
  add('Angebote', state.quotes
    .filter((i) => matches(q, i.number, custName(i), (i.items || []).map((x) => x.name).join(' ')) || amountHit(q, i.totals && i.totals.totalCents))
    .map((i) => ({
      key: i.id, label: `${i.number || 'Entwurf'}, ${custName(i) || 'ohne Kunde'}`,
      sub: money(i.totals ? i.totals.totalCents : 0, i.currency), href: i.status === 'draft' ? `/quotes/${i.id}/edit` : `/quotes/${i.id}`,
    })));
  add('Leistungen', state.services
    .filter((s) => matches(q, s.name, s.internalName, s.category, s.description))
    .map((s) => ({ key: s.id, label: s.name, sub: money(s.priceCents, s.currency), href: '/services' })));
  add('Ausgaben', state.expenses
    .filter((e) => matches(q, e.vendor, e.description, e.invoiceNumber, e.category) || amountHit(q, e.totalCents))
    .sort((a, b) => ((a.invoiceDate || '') < (b.invoiceDate || '') ? 1 : -1))
    .map((e) => ({ key: e.id, label: e.vendor || 'Beleg', sub: `${e.category || 'Ausgabe'}, ${money(e.totalCents, e.currency)}`, href: '/expenses' })));
  add('Unternehmen', state.companies
    .filter((c) => matches(q, c.name, c.shortName, c.invoicePrefix))
    .map((c) => ({ key: c.id, label: c.name, sub: c.invoicePrefix, href: `/companies/${c.id}` })));
  return out;
}

function GlobalSearch() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inputRef = useRef(null);
  const groups = useMemo(() => (norm(q).trim().length >= 2 ? searchAll(q) : []), [q, state.version]);
  const flat = groups.flatMap((g) => g.items);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); inputRef.current && inputRef.current.focus(); }
    };
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', close);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', close); };
  }, []);

  function go(item) {
    setOpen(false); setQ('');
    if (inputRef.current) inputRef.current.blur();
    navigate(item.href);
  }
  function onKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, flat.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter' && flat[active]) { e.preventDefault(); go(flat[active]); }
    else if (e.key === 'Escape') { setOpen(false); e.target.blur(); }
  }
  let idx = -1;
  return html`<div class="gsearch" ref=${ref} role="search">
    <${Icon} name="search" size=${17} />
    <input ref=${inputRef} class="gsearch-input" type="search" placeholder="Suchen: Kunde, Rechnungsnummer, Betrag, Leistung"
      aria-label="Globale Suche" value=${q}
      onInput=${(e) => { setQ(e.target.value); setOpen(true); setActive(0); }}
      onFocus=${() => setOpen(true)} onKeyDown=${onKey} />
    <kbd class="gsearch-kbd">${/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Strg K'}</kbd>
    ${open && norm(q).trim().length >= 2 && html`<div class="gsearch-list">
      ${groups.length === 0 && html`<div class="gsearch-empty">Nichts gefunden für „${q}“</div>`}
      ${groups.map((g) => html`<div class="gsearch-group" key=${g.group}>
        <div class="gsearch-head">${g.group}</div>
        ${g.items.map((it) => {
          idx += 1;
          const i = idx;
          return html`<button type="button" key=${it.key} class=${`gsearch-item${i === active ? ' is-active' : ''}`}
            onMouseEnter=${() => setActive(i)} onMouseDown=${(e) => { e.preventDefault(); go(it); }}>
            <span>${it.label}</span><span class="cell-sub">${it.sub}</span>
          </button>`;
        })}
      </div>`)}
    </div>`}
  </div>`;
}

/* ---------- Backup-Knopf ---------- */

function BackupButton() {
  const [busy, setBusy] = useState(false);
  const n = state.settings.changesSinceBackup || 0;
  async function run() {
    setBusy(true);
    const size = await attempt(() => downloadBackup(true));
    setBusy(false);
    if (size != null) toast('Backup gespeichert', 'good');
  }
  return html`<button type="button" class=${`backup-btn${n ? ' has-changes' : ''}`} onClick=${run} disabled=${busy}
    title=${n ? `${n} ${n === 1 ? 'Änderung' : 'Änderungen'} seit dem letzten Backup` : 'Alles gesichert'}>
    <${Icon} name=${busy ? 'refresh' : 'download'} class=${busy ? 'spin' : ''} />
    <span>Backup</span>
    ${n > 0 && html`<span class="backup-count" aria-label=${`${n} ungesicherte Änderungen`}>${n > 99 ? '99+' : n}</span>`}
  </button>`;
}

/* ---------- Routen ---------- */

function Route({ route }) {
  const [a, b, c] = route.parts;
  const p = route.params;
  if (!a) return html`<${DashboardView} />`;
  if (a === 'invoices') {
    if (!b) return html`<${InvoicesView} params=${p} />`;
    if (b === 'new') return html`<${DocEditorView} coll="invoices" id="new" params=${p} />`;
    if (c === 'edit') return html`<${DocEditorView} coll="invoices" id=${b} params=${p} />`;
    return html`<${InvoiceDetailView} id=${b} />`;
  }
  if (a === 'quotes') {
    if (!b) return html`<${QuotesView} />`;
    if (b === 'new') return html`<${DocEditorView} coll="quotes" id="new" params=${p} />`;
    if (c === 'edit') return html`<${DocEditorView} coll="quotes" id=${b} params=${p} />`;
    return html`<${QuoteDetailView} id=${b} />`;
  }
  if (a === 'customers') return b ? html`<${CustomerDetailView} id=${b} />` : html`<${CustomersView} />`;
  if (a === 'services') return html`<${ServicesView} />`;
  if (a === 'expenses') return html`<${ExpensesView} />`;
  if (a === 'recurring') return html`<${RecurringView} />`;
  if (a === 'finance') return html`<${FinanceView} />`;
  if (a === 'reports') return html`<${ReportsView} params=${p} />`;
  if (a === 'companies') return b ? html`<${CompanyEditView} id=${b} />` : html`<${CompaniesView} />`;
  if (a === 'settings') return html`<${SettingsView} />`;
  if (a === 'audit') return html`<${AuditView} />`;
  return html`<${EmptyState} title="Seite nicht gefunden" text="Diese Adresse gibt es im Tool nicht."><${Button} onClick=${() => navigate('/')}>Zum Dashboard<//><//>`;
}

function Guarded({ route }) {
  const [error, reset] = useErrorBoundary((err) => { /* eslint-disable-next-line no-console */ console.error(err); });
  useEffect(() => { if (error) reset(); }, [route.raw]);
  if (error) {
    return html`<${EmptyState} icon="warn" title="Diese Ansicht konnte nicht angezeigt werden"
      text=${`Deine Daten sind nicht betroffen. Technische Meldung: ${error.message || error}`}>
      <${Button} onClick=${() => { reset(); navigate('/'); }}>Zum Dashboard<//>
    <//>`;
  }
  // key: jede Adresse bekommt eine frische Ansicht (Editoren starten sauber).
  return html`<${Route} key=${route.raw} route=${route} />`;
}

/* ---------- Rahmen ---------- */

function App() {
  useStore();
  const route = useRoute();
  const [navOpen, setNavOpen] = useState(false);
  const company = currentCompany();
  const companies = activeCompanies();

  useEffect(() => { setNavOpen(false); }, [route.raw]);
  useEffect(() => {
    const t = state.settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }, [state.settings.theme]);
  useEffect(() => {
    const onUnload = (e) => {
      if (unloadWarningPaused()) return;
      const unsaved = hasNavGuard();
      const unbacked = state.settings.warnOnClose !== false && (state.settings.changesSinceBackup || 0) > 0;
      if (unsaved || unbacked) { e.preventDefault(); e.returnValue = ''; }
    };
    window.addEventListener('beforeunload', onUnload);
    return () => window.removeEventListener('beforeunload', onUnload);
  }, []);

  const isActive = (item) => (item.exact ? route.path === item.path : route.path === item.path || route.path.startsWith(`${item.path}/`));
  const reviewCount = state.expenses.filter((e) => e.status === 'review').length;

  return html`
    <div class="brandband" aria-hidden="true">
      ${company
        ? html`<i style=${`background:${company.brandColor}`}></i>`
        : (companies.length ? companies.map((c) => html`<i key=${c.id} style=${`background:${c.brandColor}`}></i>`) : html`<i></i>`)}
    </div>
    <div class=${`shell${navOpen ? ' nav-open' : ''}`} style=${`--brand:${company ? company.brandColor : 'var(--ink)'}`}>
      <aside class="sidebar">
        <a class="wordmark" href="#/">BBC Finance</a>
        <nav aria-label="Hauptnavigation">
          ${NAV.map((group, gi) => html`<ul class="nav-group" key=${gi}>
            ${group.map((item) => html`<li key=${item.path}>
              <a href=${`#${item.path}`} class=${`nav-link${isActive(item) ? ' is-active' : ''}`} aria-current=${isActive(item) ? 'page' : undefined}>
                <${Icon} name=${item.icon} /><span>${item.label}</span>
                ${item.path === '/expenses' && reviewCount > 0 && html`<span class="nav-count" title="Belege zu prüfen">${reviewCount}</span>`}
              </a>
            </li>`)}
          </ul>`)}
        </nav>
        <p class="sidebar-note">Daten liegen lokal in diesem Browser.</p>
      </aside>
      <div class="main">
        <header class="topbar">
          <button type="button" class="nav-toggle" aria-label="Navigation öffnen" aria-expanded=${navOpen} onClick=${() => setNavOpen(!navOpen)}><${Icon} name="menu" size=${20} /></button>
          <${CompanySwitcher} />
          <${GlobalSearch} />
          <div class="topbar-actions">
            <${BackupButton} />
            <${Button} variant="primary" icon="plus" onClick=${() => navigate('/invoices/new')}>Neue Rechnung<//>
          </div>
        </header>
        ${state.settings.demoLoaded && html`<div class="demo-strip">
          Im Tool sind Beispieldaten geladen. <a href="#/settings">In den Einstellungen entfernen</a>
        </div>`}
        <main class="content" id="content">
          <${Guarded} route=${route} />
        </main>
      </div>
      <div class="nav-scrim" onClick=${() => setNavOpen(false)}></div>
    </div>
    <${DialogHost} />
    <${ToastHost} />
  `;
}

async function boot() {
  const root = document.getElementById('app');
  const fromDisk = location.protocol === 'file:';
  try {
    // Antwortet die Browser-Datenbank gar nicht (kommt bei lokal geöffneten Dateien vor), soll die Seite
    // nicht endlos bei „wird geladen“ stehen bleiben.
    let timer;
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('keine Antwort nach 15 Sekunden')), 15000);
    });
    try {
      await Promise.race([(async () => { await load(); await firstRun(); })(), timeout]);
    } finally {
      clearTimeout(timer);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    root.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'boot-error';
    const h = document.createElement('h1');
    h.textContent = 'Das Tool konnte nicht starten';
    const p = document.createElement('p');
    p.textContent = `Die lokale Datenbank dieses Browsers ist nicht erreichbar (${err && err.message ? err.message : err}). `
      + 'Im privaten Modus oder bei gesperrtem Website-Speicher funktioniert das Tool nicht. Deine Backup-Dateien sind davon nicht betroffen.';
    box.append(h, p);
    if (fromDisk) {
      const p2 = document.createElement('p');
      p2.textContent = 'Du hast die Datei direkt von der Festplatte geöffnet. Manche Browser sperren dabei den Speicher. '
        + 'Öffne die index.html in Chrome (Rechtsklick → Öffnen mit) oder verwende die GitHub-Pages-Adresse.';
      box.append(p2);
    }
    root.append(box);
    return;
  }
  root.innerHTML = '';
  render(html`<${App} />`, root);
}

window.addEventListener('unhandledrejection', (e) => { if (e.reason) showError(e.reason); });
boot();
