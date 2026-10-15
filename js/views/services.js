// Leistungen: Katalog wiederkehrender Leistungen und Produkte.

import { html, useState, useRef, useStore, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, EmptyState, Modal, TextField, TextArea,
  SelectField, NumberField, Checkbox, Badge, CompanyDot, Chips, Notice,
} from '../ui/components.js';
import { state, byId, activeCompanies, currentCompany } from '../lib/store.js';
import { newService, UNITS, DOC_CURRENCIES, SERVICE_TIERS } from '../lib/schema.js';
import { saveService, deleteService, importServices } from '../lib/actions.js';
import { parseCatalog, catalogRows } from '../lib/servicecatalog.js';
import { readTableFile, exportRowsXLSX } from '../lib/export.js';
import { matches, todayISO } from '../lib/util.js';
import { money, pct } from '../lib/format.js';
import { scopeCompanyId } from './shared.js';

/**
 * Sortierung nach Nummer, wobei Tarif-Varianten derselben Leistung nebeneinander stehen:
 * HL-WEB-101 (Starter) direkt vor HL-WEB-201 (Standard). Ohne Nummer ans Ende.
 */
export function codeSortKey(s) {
  const code = s.code || '';
  if (!code) return `zzzz ${s.name}`;
  const m = /^(.*-)(\d)(\d{2})$/.exec(code);
  return m ? `${m[1]}${m[3]}-${m[2]}` : code;
}

export function TierBadge({ tier }) {
  const def = SERVICE_TIERS[tier];
  return def ? html`<${Badge} tone=${def.tone}>${def.label}<//>` : null;
}

export function ServiceFormModal({ service, onClose, onSaved }) {
  const isNew = !service || !byId('services', service.id);
  const [s, setS] = useState(() => ({ ...(service || newService()) }));
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setS((prev) => ({ ...prev, [k]: v }));
  const categories = state.settings.serviceCategories || [];
  const units = UNITS.includes(s.unit) || !s.unit ? UNITS : [...UNITS, s.unit];

  async function submit() {
    setBusy(true);
    const saved = await attempt(() => saveService(s));
    setBusy(false);
    if (saved) {
      toast(isNew ? 'Leistung angelegt' : 'Leistung gespeichert', 'good');
      if (onSaved) onSaved(saved);
      onClose();
    }
  }

  return html`<${Modal} title=${isNew ? 'Neue Leistung' : 'Leistung bearbeiten'} onClose=${onClose} size="lg" onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Leistung speichern<//>`}>
    <div class="form-grid">
      <${TextField} class="span-2" label="Leistungsnummer" value=${s.code} onInput=${set('code')} placeholder="z. B. HL-WEB-101" hint="optional, eindeutig" />
      <${TextField} class="span-4" label="Name" value=${s.name} onInput=${set('name')} hint="So erscheint die Leistung auf der Rechnung" />
      <${SelectField} class="span-2" label="Tarif" value=${s.tier || ''} onChange=${set('tier')} placeholder="Ohne Tarif"
        options=${Object.entries(SERVICE_TIERS).map(([id, d]) => ({ id, label: d.label }))} />
      <${TextField} class="span-4" label="Interne Bezeichnung" value=${s.internalName} onInput=${set('internalName')} />
      <${TextArea} class="span-6" label="Beschreibung auf der Rechnung" value=${s.invoiceText} onInput=${set('invoiceText')} rows=${3}
        hint="Wird als Text unter der Position übernommen und kann auf jeder Rechnung angepasst werden" />
      <${TextArea} class="span-6" label="Interne Beschreibung" value=${s.description} onInput=${set('description')} rows=${2} />

      <${NumberField} class="span-2" label="Einzelpreis (netto)" mode="money" value=${s.priceCents} onChange=${set('priceCents')} min=${0} />
      <${SelectField} class="span-1" label="Währung" value=${s.currency} onChange=${set('currency')} options=${DOC_CURRENCIES} />
      <${SelectField} class="span-2" label="Einheit" value=${s.unit} onChange=${set('unit')} options=${units} />
      <${NumberField} class="span-1" label="Menge" value=${s.defaultQty} onChange=${set('defaultQty')} digits=${3} min=${0} />

      <${NumberField} class="span-2" label="Steuersatz" value=${s.taxRate} onChange=${set('taxRate')} digits=${3} min=${0} max=${100}
        allowEmpty suffix="%" placeholder="Wie Unternehmen" hint="Leer: Standardsatz des Unternehmens" />
      <${SelectField} class="span-2" label="Kategorie" value=${s.category} onChange=${set('category')} placeholder="Keine"
        options=${categories.includes(s.category) || !s.category ? categories : [...categories, s.category]} />
      <${SelectField} class="span-2" label="Nur für Unternehmen" value=${s.companyId} onChange=${set('companyId')} placeholder="Alle Unternehmen"
        options=${activeCompanies().map((c) => ({ id: c.id, label: c.name }))} />

      <div class="span-3"><${Checkbox} label="Wiederkehrende Leistung" checked=${s.recurring} onChange=${set('recurring')}
        hint="Zur Kennzeichnung, z. B. Hosting oder Betreuung" /></div>
      <div class="span-3"><${Checkbox} label="Aktiv" checked=${s.active !== false} onChange=${set('active')}
        hint="Inaktive Leistungen erscheinen nicht in der Auswahl" /></div>
    </div>
  <//>`;
}

export function ServicesView() {
  useStore();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [tier, setTier] = useState('all');
  const [editing, setEditing] = useState(null);
  const [importing, setImporting] = useState(null);
  const fileRef = useRef(null);
  const companyId = scopeCompanyId();

  const rows = state.services.filter((s) => {
    if (companyId && s.companyId && s.companyId !== companyId) return false;
    if (cat && s.category !== cat) return false;
    if (tier !== 'all' && (s.tier || '') !== (tier === 'none' ? '' : tier)) return false;
    return matches(q, s.code, s.name, s.internalName, s.description, s.invoiceText, s.category, s.tier && SERVICE_TIERS[s.tier] && SERVICE_TIERS[s.tier].label);
  });
  const scoped = state.services.filter((s) => !(companyId && s.companyId && s.companyId !== companyId));
  const tierCount = (t) => scoped.filter((s) => (s.tier || '') === t).length;
  const hasTiers = scoped.some((s) => s.tier);

  async function pickFile(file) {
    if (!file) return;
    const parsed = await attempt(async () => {
      const rows = await readTableFile(file);
      const res = parseCatalog(rows);
      if (!res.items.length) throw new Error('In der Datei wurden keine Leistungen gefunden. Erwartet wird eine Tabelle mit Überschriften wie „Nr.“, „Name“, „Tarif“, „Preis netto“.');
      if (!res.columns.name) throw new Error('Die Spalte „Name“ fehlt.');
      if (!res.columns.price) throw new Error('Die Spalte „Preis netto“ fehlt.');
      return res;
    });
    if (parsed) setImporting({ ...parsed, fileName: file.name });
  }
  async function exportCatalog() {
    const list = [...rows].sort((a, b) => codeSortKey(a).localeCompare(codeSortKey(b), 'de'));
    await attempt(() => exportRowsXLSX(catalogRows(list, (id) => (byId('companies', id) || {}).name || ''), {
      fileName: `Leistungen ${todayISO()}`, sheet: 'Leistungen', moneyColumns: ['Preis netto'],
    }));
  }
  const cats = [...new Set(state.services.map((s) => s.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de'));

  async function remove(s) {
    const ok = await ask({
      title: 'Leistung löschen?',
      text: `„${s.name}“ wird aus dem Katalog entfernt. Bereits geschriebene Rechnungen bleiben unverändert.`,
      confirmLabel: 'Löschen', danger: true,
    });
    if (!ok) return;
    const done = await attempt(async () => { await deleteService(s.id); return true; });
    if (done) toast('Leistung gelöscht', 'good');
  }

  const columns = [
    { key: 'code', label: 'Nr.', class: 'nw', sort: codeSortKey, render: (s) => (s.code ? html`<span class="mono-code">${s.code}</span>` : html`<span class="muted-text">–</span>`) },
    {
      key: 'name', label: 'Leistung', sort: (s) => s.name,
      render: (s) => html`<div class="cell-main">${s.name}${s.active === false && html` <${Badge} tone="mute">Inaktiv<//>`}</div>
        ${(s.invoiceText || s.internalName) && html`<div class="cell-sub clamp-1">${s.invoiceText || s.internalName}</div>`}`,
    },
    { key: 'tier', label: 'Tarif', sort: (s) => s.tier || 'zzzz', render: (s) => html`<${TierBadge} tier=${s.tier} />` },
    { key: 'category', label: 'Kategorie', sort: (s) => s.category, render: (s) => s.category || html`<span class="muted-text">–</span>` },
    {
      key: 'company', label: 'Unternehmen', sort: (s) => (byId('companies', s.companyId) || {}).name || '',
      render: (s) => {
        const c = byId('companies', s.companyId);
        return c ? html`<span class="co-tag"><${CompanyDot} company=${c} />${c.shortName || c.name}</span>` : html`<span class="muted-text">Alle</span>`;
      },
    },
    { key: 'kind', label: 'Art', sort: (s) => (s.recurring ? 1 : 0), render: (s) => (s.recurring ? 'Wiederkehrend' : 'Einmalig') },
    { key: 'unit', label: 'Einheit', render: (s) => s.unit },
    { key: 'tax', label: 'Steuer', align: 'right', render: (s) => (s.taxRate != null && s.taxRate !== '' ? pct(s.taxRate) : html`<span class="muted-text">Standard</span>`) },
    { key: 'price', label: 'Einzelpreis', align: 'right', sort: (s) => s.priceCents, render: (s) => money(s.priceCents, s.currency) },
    {
      key: 'actions', label: '', align: 'right',
      render: (s) => html`<${Button} variant="ghost" small icon="trash" title=${`${s.name} löschen`} onClick=${() => remove(s)} />`,
    },
  ];

  return html`
    <${PageHeader} title="Leistungen" sub="Preis, Beschreibung und Steuer werden in die Rechnung übernommen und bleiben dort änderbar.">
      <input ref=${fileRef} type="file" class="visually-hidden" accept=".xlsx,.xls,.csv" tabindex="-1" aria-label="Leistungen importieren"
        onChange=${(e) => { const f = e.target.files[0]; e.target.value = ''; pickFile(f); }} />
      <${Button} icon="upload" onClick=${() => fileRef.current && fileRef.current.click()}>Importieren<//>
      ${state.services.length > 0 && html`<${Button} icon="download" onClick=${exportCatalog}>Excel<//>`}
      <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newService({ companyId: '' }))}>Neue Leistung<//>
    <//>
    ${state.services.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Leistung suchen" />
      ${cats.length > 0 && html`<select class="input select filter-select" value=${cat} aria-label="Nach Kategorie filtern" onChange=${(e) => setCat(e.target.value)}>
        <option value="">Alle Kategorien</option>
        ${cats.map((c) => html`<option value=${c}>${c}</option>`)}
      </select>`}
      ${hasTiers && html`<${Chips} label="Tarif" value=${tier} onChange=${setTier} options=${[
        { id: 'all', label: 'Alle', count: scoped.length },
        { id: 'starter', label: 'Starter', count: tierCount('starter') },
        { id: 'standard', label: 'Standard', count: tierCount('standard') },
        ...(tierCount('') ? [{ id: 'none', label: 'Ohne Tarif', count: tierCount('') }] : []),
      ]} />`}
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} initialSort=${{ key: 'code', dir: 'asc' }} onRowClick=${(s) => setEditing(s)}
      empty=${state.services.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`
        : html`<${EmptyState} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newService())}>Erste Leistung anlegen<//>
          <//>`} />
    ${editing && html`<${ServiceFormModal} service=${editing} onClose=${() => setEditing(null)} />`}
    ${importing && html`<${ServiceImportModal} data=${importing} onClose=${() => setImporting(null)} />`}
  `;
}

/* ---------- Import ---------- */

function ServiceImportModal({ data, onClose }) {
  const companies = activeCompanies();
  // Unternehmen aus der Datei erkennen (Name, Kurzname oder Präfix), sonst Switcher
  const named = [...new Set(data.items.map((it) => it.service.company).filter(Boolean))];
  const guess = named.length === 1
    ? companies.find((c) => [c.name, c.shortName, c.invoicePrefix].filter(Boolean).some((x) => x.toLowerCase() === named[0].toLowerCase()))
    : null;
  const [companyId, setCompanyId] = useState((guess || currentCompany() || {}).id || '');
  const [update, setUpdate] = useState(false);
  const [busy, setBusy] = useState(false);
  const existingCodes = new Set(state.services.map((s) => (s.code || '').toLowerCase()).filter(Boolean));
  const valid = data.items.filter((it) => !it.problems.length);
  const bad = data.items.filter((it) => it.problems.length);
  const isExisting = (it) => it.service.code && existingCodes.has(it.service.code.toLowerCase());
  const nNew = valid.filter((it) => !isExisting(it)).length;
  const nExisting = valid.length - nNew;

  async function submit() {
    setBusy(true);
    const res = await attempt(() => importServices(valid.map((it) => it.service), { companyId, update }));
    setBusy(false);
    if (!res) return;
    const parts = [
      res.added && `${res.added} ${res.added === 1 ? 'Leistung' : 'Leistungen'} angelegt`,
      res.updated && `${res.updated} aktualisiert`,
      res.skipped && `${res.skipped} unverändert übersprungen`,
    ].filter(Boolean);
    toast(`${parts.join(', ')}.`, 'good', 7000);
    onClose();
  }

  return html`<${Modal} title="Leistungen importieren" size="xl" onClose=${onClose} onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//>
      <${Button} variant="primary" type="submit" busy=${busy} disabled=${!(nNew || (update && nExisting))}>
        ${nNew ? `${nNew} ${nNew === 1 ? 'Leistung' : 'Leistungen'} anlegen` : 'Übernehmen'}${update && nExisting ? `, ${nExisting} aktualisieren` : ''}<//>`}>
    <p class="modal-lead">${data.fileName}: ${data.items.length} Zeilen gelesen. Bestehende Leistungen werden nie gelöscht.</p>
    <div class="form-grid">
      <${SelectField} class="span-3" label="Gilt für Unternehmen" value=${companyId} onChange=${setCompanyId} placeholder="Alle Unternehmen"
        options=${companies.map((c) => ({ id: c.id, label: c.name }))} hint=${named.length ? `In der Datei: ${named.join(', ')}` : 'Leer: in allen Unternehmen wählbar'} />
      ${nExisting > 0 && html`<div class="span-3 import-update"><${Checkbox} label=${`${nExisting} vorhandene Leistungen mit gleicher Nr. aktualisieren`} checked=${update} onChange=${setUpdate}
        hint="Sonst werden sie übersprungen und bleiben unverändert." /></div>`}
    </div>
    ${bad.length > 0 && html`<${Notice} tone="warn">${bad.length} ${bad.length === 1 ? 'Zeile wird' : 'Zeilen werden'} nicht übernommen:
      ${bad.slice(0, 5).map((it) => html`<div>Zeile ${it.row}: ${it.problems.join(', ')}</div>`)}${bad.length > 5 ? html`<div>…</div>` : ''}<//>`}
    ${data.unknownColumns.length > 0 && html`<p class="muted-text small">Nicht verwendete Spalten: ${data.unknownColumns.join(', ')}</p>`}
    <div class="table-wrap import-preview">
      <table class="table">
        <thead><tr><th>Nr.</th><th>Leistung</th><th>Tarif</th><th>Kategorie</th><th>Art</th><th class="r">Preis netto</th><th></th></tr></thead>
        <tbody>${data.items.map((it) => html`<tr key=${it.row} class=${it.problems.length ? 'is-bad' : ''}>
          <td class="nw"><span class="mono-code">${it.service.code || '–'}</span></td>
          <td><div class="cell-main">${it.service.name || '–'}</div>${it.service.invoiceText && html`<div class="cell-sub clamp-1">${it.service.invoiceText}</div>`}</td>
          <td><${TierBadge} tier=${it.service.tier} /></td>
          <td>${it.service.category}</td>
          <td>${it.service.recurring ? `je ${it.service.unit}` : (it.service.unit === 'Pauschal' ? 'einmalig' : `je ${it.service.unit}`)}</td>
          <td class="r">${money(it.service.priceCents, it.service.currency)}</td>
          <td>${it.problems.length ? html`<span class="tone-bad small">${it.problems[0]}</span>`
            : isExisting(it) ? html`<span class="muted-text small">${update ? 'wird aktualisiert' : 'vorhanden, übersprungen'}</span>`
            : html`<span class="tone-good small">neu</span>`}</td>
        </tr>`)}</tbody>
      </table>
    </div>
  <//>`;
}
