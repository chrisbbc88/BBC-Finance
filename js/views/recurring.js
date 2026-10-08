// Wiederkehrende Rechnungen: Vorlagen mit Intervall. Fällige Vorlagen erzeugen Rechnungsentwürfe.

import { html, useState, useStore, navigate, toast, attempt, ask } from '../ui/core.js';
import {
  Button, PageHeader, DataTable, EmptyState, Modal, TextField, TextArea, SelectField, NumberField,
  DateField, Checkbox, Badge, Field, Combobox, Notice,
} from '../ui/components.js';
import { state, byId, activeCompanies, currentCompany, inScope } from '../lib/store.js';
import { newRecurring, customerName, INTERVALS, DOC_CURRENCIES, LANGUAGES } from '../lib/schema.js';
import { saveRecurring, deleteRecurring, runRecurring, recurringDue, recurringEnded, intervalMonths } from '../lib/actions.js';
import { computeTotals } from '../lib/calc.js';
import { money, date } from '../lib/format.js';
import { todayISO, clone } from '../lib/util.js';
import { ItemsEditor } from './doc-editor.js';
import { CompanyTag } from './shared.js';

export function intervalLabel(rec) {
  const def = INTERVALS.find((i) => i.id === rec.interval);
  if (rec.interval === 'custom') {
    const m = intervalMonths(rec);
    return m === 1 ? 'Jeden Monat' : `Alle ${m} Monate`;
  }
  return def ? def.label : '';
}

function RecurringModal({ rec, onClose }) {
  const isNew = !byId('recurring', rec.id);
  const [r, setR] = useState(() => clone(rec));
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setR((p) => ({ ...p, [k]: v }));
  const company = byId('companies', r.companyId);
  const totals = computeTotals(r);
  const customers = state.customers
    .filter((c) => c.active !== false || c.id === r.customerId)
    .sort((a, b) => customerName(a).localeCompare(customerName(b), 'de'))
    .map((c) => ({ id: c.id, label: customerName(c), sub: [c.number, c.city].filter(Boolean).join(', ') }));

  function pickCompany(id) {
    const c = byId('companies', id);
    setR((p) => ({
      ...p, companyId: id,
      ...(c && isNew ? { currency: c.currency, language: c.language, paymentTermDays: c.paymentTermDays, intro: p.intro || c.invoiceText } : {}),
    }));
  }
  function pickCustomer(id) {
    const c = byId('customers', id);
    setR((p) => ({
      ...p, customerId: id,
      ...(c && c.language ? { language: c.language } : {}),
      ...(c && c.currency && DOC_CURRENCIES.includes(c.currency) ? { currency: c.currency } : {}),
      ...(c && c.paymentTermDays != null && c.paymentTermDays !== '' ? { paymentTermDays: Number(c.paymentTermDays) } : {}),
    }));
  }
  async function submit() {
    setBusy(true);
    const saved = await attempt(() => saveRecurring(r));
    setBusy(false);
    if (saved) { toast('Vorlage gespeichert', 'good'); onClose(); }
  }

  return html`<${Modal} title=${isNew ? 'Neue wiederkehrende Rechnung' : 'Wiederkehrende Rechnung bearbeiten'} onClose=${onClose} size="xl" onSubmit=${submit}
    footer=${html`<${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Vorlage speichern<//>`}>
    <div class="form-grid">
      <${TextField} class="span-6" label="Name der Vorlage" value=${r.name} onInput=${set('name')} placeholder="z. B. SEO-Betreuung Musterfirma" />
      <${SelectField} class="span-3" label="Unternehmen" value=${r.companyId} onChange=${pickCompany} placeholder="Unternehmen wählen"
        options=${activeCompanies().map((c) => ({ id: c.id, label: c.name }))} />
      <${Field} class="span-3" label="Kunde" htmlFor="rec-customer">
        <${Combobox} id="rec-customer" options=${customers} value=${r.customerId} placeholder="Kunde suchen" onChange=${pickCustomer} />
      <//>
      <${SelectField} class="span-2" label="Intervall" value=${r.interval} onChange=${set('interval')} options=${INTERVALS.map((i) => ({ id: i.id, label: i.label }))} />
      ${r.interval === 'custom' && html`<${NumberField} class="span-2" label="Alle … Monate" value=${r.customMonths} digits=${0} min=${1} max=${60} onChange=${set('customMonths')} />`}
      <${DateField} class="span-2" label="Nächste Rechnung am" value=${r.nextDate} onInput=${set('nextDate')} />
      <${DateField} class="span-2" label="Endet am (optional)" value=${r.endDate} onInput=${set('endDate')} min=${r.nextDate} />
      <${NumberField} class="span-2" label="Zahlungsziel" value=${r.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${set('paymentTermDays')} />
      <${SelectField} class="span-2" label="Währung" value=${r.currency} onChange=${set('currency')} options=${DOC_CURRENCIES} />
      <${SelectField} class="span-2" label="Belegsprache" value=${r.language} onChange=${set('language')} options=${LANGUAGES} />
      <div class="span-6">
        <${Checkbox} label="Leistungszeitraum auf die Rechnung schreiben" checked=${r.servicePeriod === 'month'}
          onChange=${(v) => set('servicePeriod')(v ? 'month' : 'none')}
          hint="Vom Rechnungsdatum bis zum Tag vor der nächsten Rechnung" />
      </div>
    </div>
    <h3 class="sub-head">Positionen</h3>
    <${ItemsEditor} doc=${r} company=${company} onChange=${(items) => setR((p) => ({ ...p, items }))}
      onNewService=${() => toast('Neue Leistungen legst du unter „Leistungen“ an.', 'info')} />
    <div class="totals totals-single">
      <dl class="totals-list">
        <div class="is-total"><dt>Betrag je Rechnung</dt><dd>${money(totals.totalCents, r.currency)}</dd></div>
      </dl>
    </div>
    <div class="form-grid">
      <${TextArea} class="span-6" label="Einleitung auf der Rechnung" value=${r.intro} onInput=${set('intro')} rows=${2} />
      <div class="span-6"><${Checkbox} label="Vorlage ist aktiv" checked=${r.active} onChange=${set('active')} /></div>
    </div>
  <//>`;
}

export function RecurringView() {
  useStore();
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState('');
  const today = todayISO();
  const rows = state.recurring.filter(inScope);
  const due = rows.filter((r) => recurringDue(r, today));
  const showCompany = !currentCompany();

  async function run(rec, open) {
    const early = rec.nextDate > today;
    if (early) {
      const ok = await ask({
        title: 'Schon jetzt erzeugen?',
        text: `Die nächste Rechnung dieser Vorlage ist erst am ${date(rec.nextDate)} fällig. Der Entwurf erhält dieses Datum, und der Termin rückt um ein Intervall weiter. Löschst du den Entwurf wieder, wird der Termin zurückgestellt.`,
        confirmLabel: 'Entwurf anlegen',
      });
      if (!ok) return null;
    }
    setBusy(rec.id);
    const draft = await attempt(() => runRecurring(rec.id, { early }));
    setBusy('');
    if (draft) {
      toast(`Rechnungsentwurf für ${customerName(byId('customers', rec.customerId))} angelegt`, 'good');
      if (open) navigate(`/invoices/${draft.id}/edit`);
    }
    return draft;
  }
  async function runAll() {
    setBusy('all');
    let n = 0;
    for (const rec of due) {
      // Eine Vorlage kann mehrere Termine im Rückstand sein – alle nachholen.
      let guard = 0;
      // eslint-disable-next-line no-await-in-loop
      while (recurringDue(byId('recurring', rec.id), today) && guard++ < 36) {
        // eslint-disable-next-line no-await-in-loop
        const d = await attempt(() => runRecurring(rec.id));
        if (!d) break;
        n += 1;
      }
    }
    setBusy('');
    if (n) { toast(`${n} ${n === 1 ? 'Rechnungsentwurf' : 'Rechnungsentwürfe'} angelegt`, 'good'); navigate('/invoices?status=draft'); }
  }
  async function remove(rec) {
    const ok = await ask({ title: 'Vorlage löschen?', text: `„${rec.name}“ wird gelöscht. Bereits erzeugte Rechnungen bleiben erhalten.`, confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteRecurring(rec.id); return true; });
    if (done) toast('Vorlage gelöscht', 'good');
  }

  const columns = [
    {
      key: 'name', label: 'Vorlage', sort: (r) => r.name,
      render: (r) => html`<div class="cell-main">${r.name}</div><div class="cell-sub">${customerName(byId('customers', r.customerId)) || 'Kunde fehlt'}</div>`,
    },
    ...(showCompany ? [{ key: 'company', label: 'Unternehmen', render: (r) => html`<${CompanyTag} id=${r.companyId} />` }] : []),
    { key: 'interval', label: 'Intervall', render: (r) => intervalLabel(r) },
    {
      key: 'next', label: 'Nächste Rechnung', sort: (r) => r.nextDate,
      render: (r) => (recurringEnded(r) ? html`<span class="muted-text">beendet</span>`
        : !r.active ? html`<span class="muted-text">–</span>`
        : recurringDue(r, today) ? html`<span class="tone-warn">${date(r.nextDate)}</span><div class="cell-sub">fällig</div>` : date(r.nextDate)),
    },
    { key: 'amount', label: 'Betrag', align: 'right', sort: (r) => (r.totals ? r.totals.totalCents : 0), render: (r) => money(r.totals ? r.totals.totalCents : 0, r.currency) },
    { key: 'count', label: 'Erzeugt', align: 'right', render: (r) => r.generated || 0 },
    { key: 'status', label: 'Status', render: (r) => (recurringEnded(r) ? html`<${Badge} tone="mute">Beendet<//>` : r.active ? html`<${Badge} tone="good">Aktiv<//>` : html`<${Badge} tone="mute">Pausiert<//>`) },
    {
      key: 'actions', label: '', align: 'right',
      render: (r) => html`<div class="row-actions">
        <${Button} small icon="invoice" busy=${busy === r.id} disabled=${!!busy || !r.active || recurringEnded(r)}
          title=${recurringEnded(r) ? 'Die Vorlage hat ihr Enddatum erreicht' : (!r.active ? 'Die Vorlage ist pausiert' : '')}
          onClick=${() => run(r, true)}>Jetzt erzeugen<//>
        <${Button} variant="ghost" small icon="trash" title=${`${r.name} löschen`} onClick=${() => remove(r)} />
      </div>`,
    },
  ];

  return html`
    <${PageHeader} title="Wiederkehrende Rechnungen" sub="Vorlagen für Retainer, Hosting oder Wartung. Zum Termin legst du daraus mit einem Klick den Rechnungsentwurf an.">
      <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newRecurring(currentCompany() || (activeCompanies().length === 1 ? activeCompanies()[0] : null)))}>Neue Vorlage<//>
    <//>
    ${due.length > 0 && html`<${Notice} tone="warn" action=${html`<${Button} small variant="primary" busy=${busy === 'all'} disabled=${!!busy} onClick=${runAll}>Alle Entwürfe anlegen<//>`}>
      ${due.length === 1 ? 'Eine Vorlage ist fällig.' : `${due.length} Vorlagen sind fällig.`}${' '}
      Die Entwürfe erscheinen unter Rechnungen und werden erst mit „Rechnung erstellen“ verbindlich.
    <//>`}
    <${DataTable} columns=${columns} rows=${rows} initialSort=${{ key: 'next', dir: 'asc' }} onRowClick=${(r) => setEditing(r)}
      empty=${html`<${EmptyState} icon="repeat" title="Noch keine wiederkehrenden Rechnungen"
        text="Lege eine Vorlage an, zum Beispiel für die monatliche SEO-Betreuung. Das Tool zeigt dir, wann die nächste Rechnung fällig ist.">
        <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newRecurring(currentCompany() || (activeCompanies().length === 1 ? activeCompanies()[0] : null)))}>Erste Vorlage anlegen<//>
      <//>`} />
    ${editing && html`<${RecurringModal} rec=${editing} onClose=${() => setEditing(null)} />`}
  `;
}
