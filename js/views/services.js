// Leistungen: Katalog wiederkehrender Leistungen und Produkte.

import { html, useState, useStore, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, SearchInput, EmptyState, Modal, TextField, TextArea,
  SelectField, NumberField, Checkbox, Badge, CompanyDot,
} from '../ui/components.js';
import { state, byId, activeCompanies } from '../lib/store.js';
import { newService, UNITS, DOC_CURRENCIES } from '../lib/schema.js';
import { saveService, deleteService } from '../lib/actions.js';
import { matches } from '../lib/util.js';
import { money, pct } from '../lib/format.js';
import { scopeCompanyId } from './shared.js';

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
      <${TextField} class="span-4" label="Name" value=${s.name} onInput=${set('name')} hint="So erscheint die Leistung auf der Rechnung" />
      <${TextField} class="span-2" label="Interne Bezeichnung" value=${s.internalName} onInput=${set('internalName')} />
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
  const [editing, setEditing] = useState(null);
  const companyId = scopeCompanyId();

  const rows = state.services.filter((s) => {
    if (companyId && s.companyId && s.companyId !== companyId) return false;
    if (cat && s.category !== cat) return false;
    return matches(q, s.name, s.internalName, s.description, s.invoiceText, s.category);
  });
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
    {
      key: 'name', label: 'Leistung', sort: (s) => s.name,
      render: (s) => html`<div class="cell-main">${s.name}${s.active === false && html` <${Badge} tone="mute">Inaktiv<//>`}</div>
        ${(s.internalName || s.invoiceText) && html`<div class="cell-sub clamp-1">${s.internalName || s.invoiceText}</div>`}`,
    },
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
      <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newService({ companyId: '' }))}>Neue Leistung<//>
    <//>
    ${state.services.length > 0 && html`<div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Leistung suchen" />
      ${cats.length > 0 && html`<select class="input select filter-select" value=${cat} aria-label="Nach Kategorie filtern" onChange=${(e) => setCat(e.target.value)}>
        <option value="">Alle Kategorien</option>
        ${cats.map((c) => html`<option value=${c}>${c}</option>`)}
      </select>`}
    </div>`}
    <${DataTable} columns=${columns} rows=${rows} initialSort=${{ key: 'name', dir: 'asc' }} onRowClick=${(s) => setEditing(s)}
      empty=${state.services.length
        ? html`<${EmptyState} icon="search" title="Keine Treffer" text="Zu diesen Filtern gibt es keine Leistung." />`
        : html`<${EmptyState} icon="services" title="Noch keine Leistungen"
            text="Lege wiederkehrende Leistungen wie SEO-Betreuung, Website-Erstellung oder Hosting einmal an und wähle sie in Rechnungen mit einem Klick aus.">
            <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newService())}>Erste Leistung anlegen<//>
          <//>`} />
    ${editing && html`<${ServiceFormModal} service=${editing} onClose=${() => setEditing(null)} />`}
  `;
}
