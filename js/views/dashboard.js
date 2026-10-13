// Dashboard: die Zahlen des gewählten Unternehmens auf einen Blick.

import { html, useMemo, useState, useStore, toast, attempt } from '../ui/core.js';
import { Stat, Panel } from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { ColumnChart, ChartFigure, BarList, markColor } from '../ui/charts.js';
import { state, activeCompanies, currentCompany, inScope } from '../lib/store.js';
import {
  dashboardKpis, monthlySeries, revenueByCustomer, revenueByService, revenueByCompany, receivables,
} from '../lib/reports.js';
import { recurringDue } from '../lib/actions.js';
import { quoteStatus } from '../lib/calc.js';
import { money, moneyCompact, date } from '../lib/format.js';
import {
  todayISO, lastMonths, monthName, monthShort, periodRange, addDays,
} from '../lib/util.js';
import { storeData, scopeCompanyId, customerLabel, CUR, pick, pickAlt, mc, ma } from './shared.js';
import { UpcomingAppointments } from './appointments.js';
import { reminderDueLevel } from './send.js';
import { REMINDER_LEVELS } from '../lib/schema.js';
import { loadDemo } from '../lib/demo.js';

function Onboarding() {
  const companies = activeCompanies();
  const incomplete = companies.filter((c) => !c.street || !c.city);
  const steps = [
    { done: companies.length > 0 && incomplete.length === 0, label: 'Unternehmensdaten ergänzen', text: 'Adresse, Steuerangaben, Bankverbindung und Logo für deine Rechnungen.', href: '#/companies' },
    { done: state.customers.length > 0, label: 'Ersten Kunden anlegen', text: 'Kunden gelten für alle Unternehmen gemeinsam.', href: '#/customers' },
    { done: state.services.length > 0, label: 'Leistungen anlegen', text: 'Wiederkehrende Leistungen mit Preis und Beschreibung.', href: '#/services' },
    { done: state.invoices.length > 0, label: 'Erste Rechnung schreiben', text: 'Unternehmen, Kunde, Leistung – fertig.', href: '#/invoices/new' },
  ];
  const [loading, setLoading] = useState(false);
  async function demo() {
    setLoading(true);
    const ok = await attempt(async () => { await loadDemo(); return true; });
    setLoading(false);
    if (ok) toast('Beispieldaten geladen. Du kannst sie in den Einstellungen wieder entfernen.', 'good', 8000);
  }
  return html`<section class="onboarding">
    <h1>Willkommen bei BBC Finance</h1>
    <p class="lead">Vier Schritte, dann steht hier deine Finanzübersicht.</p>
    <ol class="steps">
      ${steps.map((s, i) => html`<li class=${s.done ? 'is-done' : ''}>
        <a href=${s.href}>
          <span class="step-mark">${s.done ? html`<${Icon} name="check" size=${16} />` : i + 1}</span>
          <span class="step-text"><strong>${s.label}</strong><span>${s.text}</span></span>
          <${Icon} name="chevronRight" size=${16} />
        </a>
      </li>`)}
    </ol>
    <p class="onboarding-alt">
      Erst einmal ansehen, wie es mit Daten aussieht?${' '}
      <button type="button" class="link-btn" disabled=${loading} onClick=${demo}>${loading ? 'Beispieldaten werden geladen …' : 'Beispieldaten laden'}</button>.${' '}
      Schon ein Backup vorhanden?${' '}<a href="#/settings">Backup einspielen</a>.
    </p>
  </section>`;
}

/** Ranglisten nach dem Wert in der Anzeigewährung ordnen. */
const byDisp = (rows) => [...rows].sort((a, b) => pick(b) - pick(a));

export function DashboardView() {
  useStore();
  const today = todayISO();
  const company = currentCompany();
  const companyId = scopeCompanyId();
  const data = storeData();
  const companies = activeCompanies();

  const view = useMemo(() => {
    const months = lastMonths(12, today);
    const year = periodRange('year', today);
    return {
      kpi: dashboardKpis(data, companyId, today),
      months,
      series: monthlySeries(data, { companyId, months }),
      byCustomer: revenueByCustomer(data, { companyId, range: year }),
      byService: revenueByService(data, { companyId, range: year }),
      byCompany: revenueByCompany(data, { range: year }),
      rec: receivables(data, { companyId }, today),
    };
  }, [state.version, companyId, today]);
  const cur = CUR();

  const hasAnything = state.invoices.length || state.expenses.length || state.customers.length || state.services.length;
  if (!hasAnything) return html`<${Onboarding} />`;

  const { kpi } = view;
  const monthLabel = monthName(today.slice(0, 7));

  // Zu erledigen
  const overdue = view.rec.filter((r) => r.status === 'overdue');
  const dueSoon = view.rec.filter((r) => r.status !== 'overdue' && r.inv.dueDate && r.inv.dueDate <= addDays(today, 7));
  const dueRecurring = state.recurring.filter(inScope).filter((r) => recurringDue(r, today));
  const toReview = state.expenses.filter((e) => e.status === 'review' && (inScope(e) || !e.companyId));
  const allDrafts = state.invoices.filter(inScope).filter((i) => i.status === 'draft');
  // Entwürfe mit Nummer waren schon erstellt und warten darauf, neu erstellt zu werden – sie fehlen so lange im Umsatz.
  const reopened = allDrafts.filter((i) => i.number);
  const drafts = allDrafts.filter((i) => !i.number);
  const toClarify = state.invoices.filter(inScope).filter((i) => i.clarify && i.status !== 'draft');
  const expiring = state.quotes.filter(inScope).filter((q) => ['open', 'sent'].includes(quoteStatus(q, today)) && q.validUntil && q.validUntil <= addDays(today, 7));

  // Diagramm: je Unternehmen gestapelt, wenn „Alle“ gewählt ist und es mehrere gibt
  const stackCompanies = !company && companies.length > 1;
  const chartSeries = stackCompanies
    ? companies.map((c) => ({ id: c.id, label: c.shortName || c.name, color: markColor(c.brandColor) }))
    : [{ id: 'rev', label: 'Umsatz', color: 'var(--series-1)' }];
  const groups = view.series.map((m) => ({
    key: m.key, label: monthShort(m.key), title: monthName(m.key),
    values: stackCompanies ? m[`byCompany${CUR()}`] : { rev: pick(m, 'revenue') },
  }));
  const table = {
    columns: ['Monat', ...(stackCompanies ? chartSeries.map((s) => s.label) : []), `Umsatz (${CUR()})`, `Umsatz (${CUR() === 'USD' ? 'EUR' : 'USD'})`],
    rows: view.series.map((m) => [
      monthName(m.key),
      ...(stackCompanies ? chartSeries.map((s) => mc(m[`byCompany${CUR()}`][s.id] || 0)) : []),
      mc(pick(m, 'revenue')), ma(pickAlt(m, 'revenue')),
    ]),
  };

  return html`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${monthLabel}${company ? `, ${company.name}` : ''}</div>
        <div class="hero-figure">${mc(pick(kpi.month))}</div>
        <div class="hero-sub">
          <span>≈ ${ma(pickAlt(kpi.month))}</span>
          <span>netto, ${kpi.month.count} ${kpi.month.count === 1 ? 'Rechnung' : 'Rechnungen'}</span>
          <span>Vormonat ${mc(pick(kpi.lastMonth))}</span>
        </div>
      </div>
    </section>

    <div class="stat-row">
      <${Stat} label="Umsatz Quartal" value=${mc(pick(kpi.quarter))} sub=${`≈ ${ma(pickAlt(kpi.quarter))}`} />
      <${Stat} label="Umsatz Jahr" value=${mc(pick(kpi.year))} sub=${`≈ ${ma(pickAlt(kpi.year))}`} />
      <${Stat} label="Offene Rechnungen" value=${mc(pick(kpi.open))} sub=${`${kpi.open.count} offen, ≈ ${ma(pickAlt(kpi.open))}`} href="#/invoices?status=open" />
      <${Stat} label="Überfällig" value=${mc(pick(kpi.overdue))} tone=${kpi.overdue.count ? 'bad' : ''}
        sub=${`${kpi.overdue.count} überfällig, ≈ ${ma(pickAlt(kpi.overdue))}`} href="#/invoices?status=overdue" />
      <${Stat} label="Bezahlt dieses Jahr" value=${mc(pick(kpi.paid))} sub=${`${kpi.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Stat} label="Rechnung im Schnitt" value=${mc(pick(kpi.average))} sub=${`≈ ${ma(pickAlt(kpi.average))}`} />
      <${Stat} label="Aktive Kunden" value=${String(kpi.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${ChartFigure} title="Umsatz der letzten 12 Monate" sub=${`Netto in ${CUR()}, nach Rechnungsdatum`} series=${chartSeries} table=${table}>
          <${ColumnChart} groups=${groups} series=${chartSeries} mode="stacked"
            format=${(v) => mc(v)} axisFormat=${(v) => moneyCompact(v, CUR())}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${Panel} title="Zu erledigen" class="dash-side">
        ${(overdue.length + dueSoon.length + dueRecurring.length + toReview.length + allDrafts.length + expiring.length + toClarify.length) === 0
          ? html`<p class="muted-text">Alles erledigt. Keine überfälligen Rechnungen, keine offenen Belege.</p>`
          : html`<ul class="todo">
            ${overdue.slice(0, 5).map((r) => html`<li key=${r.inv.id}>
              <a href=${`#/invoices/${r.inv.id}`}>
                <span class="todo-icon tone-bad"><${Icon} name="bad" /></span>
                <span class="todo-text"><strong>${r.inv.number}</strong> ${customerLabel(r.inv)}
                  <span class="cell-sub">seit ${r.overdueDays} ${r.overdueDays === 1 ? 'Tag' : 'Tagen'} überfällig${reminderDueLevel(r.inv, r.overdueDays) ? `, ${(REMINDER_LEVELS.find((l) => l.id === reminderDueLevel(r.inv, r.overdueDays)) || {}).label} fällig` : ''}</span></span>
                <span class="todo-amount">${money(r.openCents, r.inv.currency)}</span>
              </a>
            </li>`)}
            ${overdue.length > 5 && html`<li><a href="#/invoices?status=overdue" class="todo-more">${overdue.length - 5} weitere überfällige Rechnungen</a></li>`}
            ${dueSoon.slice(0, 3).map((r) => html`<li key=${r.inv.id}>
              <a href=${`#/invoices/${r.inv.id}`}>
                <span class="todo-icon tone-warn"><${Icon} name="clock" /></span>
                <span class="todo-text"><strong>${r.inv.number}</strong> ${customerLabel(r.inv)}
                  <span class="cell-sub">fällig am ${date(r.inv.dueDate)}</span></span>
                <span class="todo-amount">${money(r.openCents, r.inv.currency)}</span>
              </a>
            </li>`)}
            ${toClarify.slice(0, 5).map((i) => html`<li key=${`c-${i.id}`}><a href=${`#/invoices/${i.id}`}>
              <span class="todo-icon tone-warn"><${Icon} name="warn" /></span>
              <span class="todo-text"><strong>${i.number}</strong> ${customerLabel(i)}
                <span class="cell-sub">Klärung nötig: ${i.clarify.note}</span></span></a></li>`)}
            ${toClarify.length > 5 && html`<li><a href="#/invoices?status=clarify">
              <span class="todo-icon tone-warn"><${Icon} name="warn" /></span>
              <span class="todo-text"><strong>${toClarify.length - 5} weitere</strong><span class="cell-sub">mit Klärungsbedarf</span></span></a></li>`}
            ${reopened.slice(0, 5).map((i) => html`<li key=${i.id}><a href=${`#/invoices/${i.id}/edit`}>
              <span class="todo-icon tone-warn"><${Icon} name="edit" /></span>
              <span class="todo-text"><strong>${i.number}</strong> ${customerLabel(i)}
                <span class="cell-sub">zurück im Entwurf, noch nicht neu erstellt</span></span></a></li>`)}
            ${dueRecurring.length > 0 && html`<li><a href="#/recurring">
              <span class="todo-icon tone-warn"><${Icon} name="repeat" /></span>
              <span class="todo-text"><strong>${dueRecurring.length} wiederkehrende ${dueRecurring.length === 1 ? 'Rechnung' : 'Rechnungen'}</strong>
                <span class="cell-sub">fällig, Entwürfe anlegen</span></span></a></li>`}
            ${toReview.length > 0 && html`<li><a href="#/expenses">
              <span class="todo-icon"><${Icon} name="expense" /></span>
              <span class="todo-text"><strong>${toReview.length} ${toReview.length === 1 ? 'Beleg' : 'Belege'}</strong>
                <span class="cell-sub">prüfen und buchen</span></span></a></li>`}
            ${drafts.length > 0 && html`<li><a href="#/invoices?status=draft">
              <span class="todo-icon"><${Icon} name="edit" /></span>
              <span class="todo-text"><strong>${drafts.length} ${drafts.length === 1 ? 'Rechnungsentwurf' : 'Rechnungsentwürfe'}</strong>
                <span class="cell-sub">noch nicht erstellt</span></span></a></li>`}
            ${expiring.length > 0 && html`<li><a href="#/quotes">
              <span class="todo-icon"><${Icon} name="quote" /></span>
              <span class="todo-text"><strong>${expiring.length} ${expiring.length === 1 ? 'Angebot läuft' : 'Angebote laufen'}</strong>
                <span class="cell-sub">in den nächsten 7 Tagen ab</span></span></a></li>`}
          </ul>`}
      <//>
    </div>

    <${UpcomingAppointments} />

    <div class="dash-lists">
      <${Panel} title="Umsatz pro Kunde" action=${html`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${BarList} rows=${byDisp(view.byCustomer).map((r) => ({ key: r.id, label: r.name, value: pick(r), display: mc(pick(r)), href: `#/customers/${r.id}` }))} />
      <//>
      <${Panel} title="Umsatz pro Leistung" action=${html`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${BarList} rows=${byDisp(view.byService).map((r) => ({ key: r.key, label: r.name, value: pick(r), display: mc(pick(r)) }))} />
      <//>
      ${!company && html`<${Panel} title="Umsatz pro Unternehmen" action=${html`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${BarList} rows=${byDisp(view.byCompany).map((r) => ({ key: r.id, label: r.name, value: pick(r), display: mc(pick(r)), color: markColor(r.color) }))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in ${CUR()}. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `;
}
