// Protokoll: nachvollziehbare Historie aller wichtigen Änderungen.

import { html, useState, useMemo, useStore } from '../ui/core.js';
import { PageHeader, SearchInput, EmptyState, Button } from '../ui/components.js';
import { state } from '../lib/store.js';
import { dateTime } from '../lib/format.js';
import { matches } from '../lib/util.js';
import { exportCSV } from '../lib/export.js';

const ENTITY = {
  invoices: 'Rechnungen', quotes: 'Angebote', customers: 'Kunden', services: 'Leistungen',
  expenses: 'Ausgaben', companies: 'Unternehmen', recurring: 'Wiederkehrend', system: 'System',
};

const FIELD = {
  status: 'Status', totalCents: 'Betrag', amountCents: 'Betrag', paidCents: 'Bezahlt', number: 'Nummer', usdToEur: 'Kurs USD/EUR',
  fxSource: 'Kursquelle', fxManual: 'Kurs von Hand', reason: 'Grund', date: 'Datum', method: 'Zahlungsart', level: 'Stufe',
  currency: 'Währung', name: 'Name', company: 'Unternehmen', email: 'E-Mail', iban: 'IBAN', bic: 'BIC', last: 'Zählerstand',
  creditNote: 'Gutschrift', internalNotes: 'Interne Notiz', vendor: 'Lieferant', category: 'Kategorie', note: 'Notiz',
  netCents: 'Netto', taxCents: 'Steuer', invoiceDate: 'Rechnungsdatum', paymentDate: 'Zahlungsdatum', priceCents: 'Preis',
  logoAssetId: 'Logo', brandColor: 'Markenfarbe', invoicePrefix: 'Präfix Rechnungen', invoicePattern: 'Muster Rechnungen',
  defaultTaxRate: 'Standard-Steuersatz', paymentTermDays: 'Zahlungsziel', accountHolder: 'Kontoinhaber', bankName: 'Bank',
  street: 'Straße', zip: 'PLZ', city: 'Ort', country: 'Land', taxId: 'Steuernummer', vatId: 'USt-IdNr.', active: 'Aktiv',
  issueDate: 'Belegdatum', customer: 'Kunde', nextDate: 'Nächster Termin', invoiceDraftId: 'Rechnungsentwurf', counts: 'Umfang',
};

function show(key, value) {
  if (value == null || value === '') return '–';
  if (/Cents$/.test(key) && typeof value === 'number') return (value / 100).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (typeof value === 'boolean') return value ? 'Ja' : 'Nein';
  if (key === 'logoAssetId') return value ? 'gesetzt' : '–';
  if (typeof value === 'object') { const s = JSON.stringify(value); return s.length > 140 ? `${s.slice(0, 140)} …` : s; }
  const s = String(value);
  return s.length > 140 ? `${s.slice(0, 140)} …` : s;
}

function Changes({ entry }) {
  const keys = [...new Set([...Object.keys(entry.prev || {}), ...Object.keys(entry.next || {})])]
    .filter((k) => !['id', 'createdAt', 'updatedAt', 'items', 'totals', 'snapshot', 'fx', 'ai', 'attachmentIds', 'doc'].includes(k));
  if (!keys.length) return html`<span class="muted-text">–</span>`;
  return html`<ul class="changes">
    ${keys.slice(0, 8).map((k) => html`<li key=${k}>
      <span class="changes-key">${FIELD[k] || k}</span>
      ${entry.prev && k in entry.prev && html`<span class="changes-old">${show(k, entry.prev[k])}</span>`}
      ${entry.next && k in entry.next && html`<span class="changes-new">${show(k, entry.next[k])}</span>`}
    </li>`)}
    ${keys.length > 8 && html`<li class="muted-text">und ${keys.length - 8} weitere Felder</li>`}
  </ul>`;
}

export function AuditView() {
  useStore();
  const [q, setQ] = useState('');
  const [entity, setEntity] = useState('');
  const [limit, setLimit] = useState(200);
  const all = useMemo(() => [...state.audit].sort((a, b) => (a.at < b.at ? 1 : -1)), [state.version]);
  const rows = all.filter((a) => (!entity || a.entity === entity) && matches(q, a.action, a.label, a.user));

  function exportAll() {
    exportCSV({
      title: 'Protokoll', fileName: `Protokoll ${new Date().toISOString().slice(0, 10)}`,
      columns: [{ label: 'Zeitpunkt' }, { label: 'Benutzer' }, { label: 'Vorgang' }, { label: 'Bereich' }, { label: 'Betrifft' }, { label: 'Vorher' }, { label: 'Nachher' }],
      rows: rows.map((a) => [a.at, a.user, a.action, ENTITY[a.entity] || a.entity, a.label, a.prev ? JSON.stringify(a.prev) : '', a.next ? JSON.stringify(a.next) : '']),
    });
  }

  return html`
    <${PageHeader} title="Protokoll" sub="Wer hat wann was geändert – mit vorherigem und neuem Wert.">
      <${Button} icon="download" disabled=${!rows.length} onClick=${exportAll}>CSV<//>
    <//>
    <div class="filters">
      <${SearchInput} value=${q} onInput=${setQ} placeholder="Vorgang, Nummer, Name" />
      <select class="input select filter-select" value=${entity} aria-label="Bereich" onChange=${(e) => setEntity(e.target.value)}>
        <option value="">Alle Bereiche</option>
        ${Object.entries(ENTITY).map(([k, v]) => html`<option value=${k}>${v}</option>`)}
      </select>
      <span class="filter-note">${rows.length} ${rows.length === 1 ? 'Eintrag' : 'Einträge'}</span>
    </div>
    ${rows.length === 0
      ? html`<${EmptyState} icon="log" title="Keine Einträge" text="Sobald du Daten anlegst oder änderst, erscheint hier der Verlauf." />`
      : html`<div class="table-wrap"><table class="table table-compact audit-table">
          <thead><tr><th style="width:170px">Zeitpunkt</th><th>Vorgang</th><th>Betrifft</th><th>Änderung (vorher, nachher)</th><th>Benutzer</th></tr></thead>
          <tbody>
            ${rows.slice(0, limit).map((a) => html`<tr key=${a.id}>
              <td class="nw">${dateTime(a.at)}</td>
              <td><span class="cell-main">${a.action}</span><div class="cell-sub">${ENTITY[a.entity] || a.entity}</div></td>
              <td>${a.label}</td>
              <td><${Changes} entry=${a} /></td>
              <td>${a.user}</td>
            </tr>`)}
          </tbody>
        </table></div>`}
    ${rows.length > limit && html`<div class="button-row center"><${Button} onClick=${() => setLimit(limit + 300)}>Weitere Einträge zeigen<//></div>`}
  `;
}
