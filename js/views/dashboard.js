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
import { storeData, scopeCompanyId, customerLabel } from './shared.js';
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

  const hasAnything = state.invoices.length || state.expenses.length || state.customers.length || state.services.length;
  if (!hasAnything) return html`<${Onboarding} />`;

  const { kpi } = view;
  const monthLabel = monthName(today.slice(0, 7));

  // Zu erledigen
  const overdue = view.rec.filter((r) => r.status === 'overdue');
  const dueSoon = view.rec.filter((r) => r.status !== 'overdue' && r.inv.dueDate && r.inv.dueDate <= addDays(today, 7));
  const dueRecurring = state.recurring.filter(inScope).filter((r) => recurringDue(r, today));
  const toReview = state.expenses.filter((e) => e.status === 'review' && (inScope(e) || !e.companyId));
  const drafts = state.invoices.filter(inScope).filter((i) => i.status === 'draft');
  const expiring = state.quotes.filter(inScope).filter((q) => ['open', 'sent'].includes(quoteStatus(q, today)) && q.validUntil && q.validUntil <= addDays(today, 7));

  // Diagramm: je Unternehmen gestapelt, wenn „Alle“ gewählt ist und es mehrere gibt
  const stackCompanies = !company && companies.length > 1;
  const chartSeries = stackCompanies
    ? companies.map((c) => ({ id: c.id, label: c.shortName || c.name, color: markColor(c.brandColor) }))
    : [{ id: 'rev', label: 'Umsatz', color: 'var(--series-1)' }];
  const groups = view.series.map((m) => ({
    key: m.key, label: monthShort(m.key), title: monthName(m.key),
    values: stackCompanies ? m.byCompany : { rev: m.revenueUSD },
  }));
  const table = {
    columns: ['Monat', ...(stackCompanies ? chartSeries.map((s) => s.label) : []), 'Umsatz (USD)', 'Umsatz (EUR)'],
    rows: view.series.map((m) => [
      monthName(m.key),
      ...(stackCompanies ? chartSeries.map((s) => money(m.byCompany[s.id] || 0, 'USD')) : []),
      money(m.revenueUSD, 'USD'), money(m.revenueEUR, 'EUR'),
    ]),
  };

  return html`
    <section class="hero">
      <div class="hero-main">
        <div class="hero-label">Umsatz ${monthLabel}${company ? `, ${company.name}` : ''}</div>
        <div class="hero-figure">${money(kpi.month.usd, 'USD')}</div>
        <div class="hero-sub">
          <span>≈ ${money(kpi.month.eur, 'EUR')}</span>
          <span>netto, ${kpi.month.count} ${kpi.month.count === 1 ? 'Rechnung' : 'Rechnungen'}</span>
          <span>Vormonat ${money(kpi.lastMonth.usd, 'USD')}</span>
        </div>
      </div>
    </section>

    <div class="stat-row">
      <${Stat} label="Umsatz Quartal" value=${money(kpi.quarter.usd, 'USD')} sub=${`≈ ${money(kpi.quarter.eur, 'EUR')}`} />
      <${Stat} label="Umsatz Jahr" value=${money(kpi.year.usd, 'USD')} sub=${`≈ ${money(kpi.year.eur, 'EUR')}`} />
      <${Stat} label="Offene Rechnungen" value=${money(kpi.open.usd, 'USD')} sub=${`${kpi.open.count} offen, ≈ ${money(kpi.open.eur, 'EUR')}`} href="#/invoices?status=open" />
      <${Stat} label="Überfällig" value=${money(kpi.overdue.usd, 'USD')} tone=${kpi.overdue.count ? 'bad' : ''}
        sub=${`${kpi.overdue.count} überfällig, ≈ ${money(kpi.overdue.eur, 'EUR')}`} href="#/invoices?status=overdue" />
      <${Stat} label="Bezahlt dieses Jahr" value=${money(kpi.paid.usd, 'USD')} sub=${`${kpi.paid.count} Rechnungen`} href="#/invoices?status=paid" />
      <${Stat} label="Rechnung im Schnitt" value=${money(kpi.average.usd, 'USD')} sub=${`≈ ${money(kpi.average.eur, 'EUR')}`} />
      <${Stat} label="Aktive Kunden" value=${String(kpi.activeCustomers)} href="#/customers" />
    </div>

    <div class="dash-grid">
      <div class="dash-main">
        <${ChartFigure} title="Umsatz der letzten 12 Monate" sub="Netto in USD, nach Rechnungsdatum" series=${chartSeries} table=${table}>
          <${ColumnChart} groups=${groups} series=${chartSeries} mode="stacked"
            format=${(v) => money(v, 'USD')} axisFormat=${(v) => moneyCompact(v, 'USD')}
            ariaLabel="Säulendiagramm: Umsatz der letzten zwölf Monate" />
        <//>
      </div>
      <${Panel} title="Zu erledigen" class="dash-side">
        ${(overdue.length + dueSoon.length + dueRecurring.length + toReview.length + drafts.length + expiring.length) === 0
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

    <div class="dash-lists">
      <${Panel} title="Umsatz pro Kunde" action=${html`<a class="panel-link" href="#/reports?r=customer">Report</a>`}>
        <${BarList} rows=${view.byCustomer.map((r) => ({ key: r.id, label: r.name, value: r.usd, display: money(r.usd, 'USD'), href: `#/customers/${r.id}` }))} />
      <//>
      <${Panel} title="Umsatz pro Leistung" action=${html`<a class="panel-link" href="#/reports?r=service">Report</a>`}>
        <${BarList} rows=${view.byService.map((r) => ({ key: r.key, label: r.name, value: r.usd, display: money(r.usd, 'USD') }))} />
      <//>
      ${!company && html`<${Panel} title="Umsatz pro Unternehmen" action=${html`<a class="panel-link" href="#/reports?r=company">Report</a>`}>
        <${BarList} rows=${view.byCompany.map((r) => ({ key: r.id, label: r.name, value: r.usd, display: money(r.usd, 'USD'), color: markColor(r.color) }))} />
      <//>`}
    </div>
    <p class="footnote">Ranglisten: laufendes Jahr, netto in USD. Fremdwährungen sind mit dem Kurs der jeweiligen Rechnung umgerechnet.</p>
  `;
}
