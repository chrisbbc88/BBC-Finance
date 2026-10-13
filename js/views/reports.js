// Finanzübersicht und Reports mit Zeitraumfilter und Export (CSV, Excel, PDF).

import { html, useState, useMemo, useStore, navigate, attempt } from '../ui/core.js';
import { Button, PageHeader, Panel, Stat, EmptyState } from '../ui/components.js';
import { ColumnChart, ChartFigure, BarList, markColor } from '../ui/charts.js';
import { state, byId, currentCompany, paymentsOf } from '../lib/store.js';
import {
  revenueDocs, expenseDocs, paymentDocs, receivables, monthlySeries, revenueByPeriod, revenueByCustomer,
  revenueByCompany, revenueByService, revenueByCurrency, expensesByCategory, financeSummary, taxOverview,
  rangeMonths, AGING,
} from '../lib/reports.js';
import { exportCSV, exportXLSX, exportPDF } from '../lib/export.js';
import { money, moneyCompact, date, pct, num } from '../lib/format.js';
import {
  todayISO, periodRange, PERIODS, monthName, monthShort, isISODate,
} from '../lib/util.js';
import { INVOICE_STATUS } from '../lib/schema.js';
import { invoiceStatus, sumPayments } from '../lib/calc.js';
import { storeData, scopeCompanyId, customerLabel, CUR, ALT, pick, pickAlt, mc, ma } from './shared.js';

/* ---------- Zeitraumfilter ---------- */

function usePeriod(initial = 'year') {
  const [period, setPeriod] = useState(initial);
  const [custom, setCustom] = useState({ from: `${todayISO().slice(0, 4)}-01-01`, to: todayISO() });
  const range = periodRange(period, todayISO(), custom);
  return { period, setPeriod, custom, setCustom, range };
}

function periodLabel(p) {
  const def = PERIODS.find((x) => x.id === p.period);
  if (p.period === 'all') return 'Gesamter Zeitraum';
  return `${def ? def.label : ''}: ${date(p.range.from)} bis ${date(p.range.to)}`;
}

function PeriodFilter({ p }) {
  const company = currentCompany();
  return html`<div class="filters">
    <select class="input select filter-select" value=${p.period} aria-label="Zeitraum" onChange=${(e) => p.setPeriod(e.target.value)}>
      ${PERIODS.map((x) => html`<option value=${x.id}>${x.label}</option>`)}
    </select>
    ${p.period === 'custom' && html`
      <input class="input filter-date" type="date" aria-label="Von" value=${p.custom.from} max=${p.custom.to}
        onInput=${(e) => isISODate(e.target.value) && p.setCustom({ ...p.custom, from: e.target.value })} />
      <span class="muted-text">bis</span>
      <input class="input filter-date" type="date" aria-label="Bis" value=${p.custom.to} min=${p.custom.from}
        onInput=${(e) => isISODate(e.target.value) && p.setCustom({ ...p.custom, to: e.target.value })} />`}
    <span class="filter-note">${company ? company.name : 'Alle Unternehmen'}${p.period !== 'all' && p.period !== 'custom' ? html`, ${date(p.range.from)} bis ${date(p.range.to)}` : ''}</span>
  </div>`;
}

const share = (part, total) => (total ? pct(Math.round((part / total) * 1000) / 10) : '–');
// Zellen in der Anzeigewährung (dc) und in der Zweitwährung (da) – Wert für Excel, Text für die Anzeige.
const dc = (c) => ({ v: c / 100, t: mc(c) });
const da = (c) => ({ v: c / 100, t: ma(c) });
const cur = (c, currency) => ({ v: c / 100, t: money(c, currency) });
const dt = (iso) => ({ v: iso || '', t: iso ? date(iso) : '' });
const M = { align: 'right', type: 'money' };
const N = { align: 'right', type: 'number' };

/* ---------- Finanzübersicht ---------- */

export function FinanceView() {
  useStore();
  const p = usePeriod('year');
  const today = todayISO();
  const companyId = scopeCompanyId();
  const company = currentCompany();
  const data = storeData();

  const v = useMemo(() => {
    const scope = { companyId, range: p.range };
    const allMonths = rangeMonths(p.range, data, companyId);
    const months = allMonths.slice(-24);
    return {
      summary: financeSummary(data, scope, today),
      truncated: allMonths.length > months.length,
      series: months.length ? monthlySeries(data, { companyId, months, range: p.range }) : [],
      byCompany: revenueByCompany(data, scope),
      byCustomer: revenueByCustomer(data, scope),
      byService: revenueByService(data, scope),
      byCategory: expensesByCategory(data, scope),
    };
  }, [state.version, companyId, p.range.from, p.range.to]);

  const s = v.summary;
  const series = [
    { id: 'rev', label: 'Einnahmen', color: 'var(--series-1)' },
    { id: 'exp', label: 'Ausgaben', color: 'var(--series-2)' },
  ];
  const groups = v.series.map((m) => ({ key: m.key, label: monthShort(m.key), title: monthName(m.key), values: { rev: pick(m, 'revenue'), exp: pick(m, 'expense') } }));
  const table = {
    columns: ['Monat', 'Einnahmen', 'Ausgaben', 'Gewinn', 'Zahlungseingänge'],
    rows: v.series.map((m) => [monthName(m.key), mc(pick(m, 'revenue')), mc(pick(m, 'expense')), mc(pick(m, 'profit')), mc(pick(m, 'payments'))]),
  };
  const ranked = (rows) => [...rows].sort((a, b) => pick(b) - pick(a));

  return html`
    <${PageHeader} title="Finanzübersicht" sub=${`Einnahmen, Ausgaben und Gewinn im gewählten Zeitraum. Beträge netto in ${CUR()}, ${ALT()} als Zweitwert.`}>
      <${Button} icon="reports" onClick=${() => navigate('/reports')}>Reports und Export<//>
    <//>
    <${PeriodFilter} p=${p} />

    <div class="stat-row stat-row-3">
      <${Stat} label="Einnahmen" value=${mc(pick(s.income))} sub=${`≈ ${ma(pickAlt(s.income))}, ${s.income.count} Rechnungen`} />
      <${Stat} label="Ausgaben" value=${mc(pick(s.expenses))} sub=${`≈ ${ma(pickAlt(s.expenses))}, ${s.expenses.count} Belege`} />
      <${Stat} label="Gewinn" value=${mc(pick(s.profit))} tone=${pick(s.profit) < 0 ? 'bad' : 'good'} sub=${`≈ ${ma(pickAlt(s.profit))}`} />
    </div>
    <div class="stat-row stat-row-3">
      <${Stat} label="Zahlungseingänge" value=${mc(pick(s.payments))} sub=${`≈ ${ma(pickAlt(s.payments))}, ${s.payments.count} Zahlungen`} />
      <${Stat} label="Offene Forderungen (heute)" value=${mc(pick(s.receivables))} sub=${`≈ ${ma(pickAlt(s.receivables))}, ${s.receivables.count} Rechnungen`} href="#/invoices?status=open" />
      <${Stat} label="Steuern (Saldo)" value=${mc(pick(s.taxBalance))}
        sub=${`berechnet ${mc(pick(s.taxCollected))}, in Ausgaben ${mc(pick(s.taxPaid))}`} />
    </div>

    ${v.series.length > 0 && html`<${ChartFigure} title="Einnahmen und Ausgaben je Monat"
      sub=${v.truncated ? `Netto in ${CUR()}. Das Diagramm zeigt die letzten 24 Monate des Zeitraums; die Kennzahlen oben zählen alles.` : `Netto in ${CUR()}`} series=${series} table=${table}>
      <${ColumnChart} groups=${groups} series=${series} mode="grouped" format=${(x) => mc(x)} axisFormat=${(x) => moneyCompact(x, CUR())}
        ariaLabel="Säulendiagramm: Einnahmen und Ausgaben je Monat" />
    <//>`}

    <div class="dash-lists">
      ${!company && html`<${Panel} title="Umsatz pro Unternehmen">
        <${BarList} rows=${ranked(v.byCompany).map((r) => ({ key: r.id, label: r.name, value: pick(r), display: mc(pick(r)), color: markColor(r.color) }))} />
      <//>`}
      <${Panel} title="Umsatz pro Kunde">
        <${BarList} rows=${ranked(v.byCustomer).map((r) => ({ key: r.id, label: r.name, value: pick(r), display: mc(pick(r)), href: `#/customers/${r.id}` }))} />
      <//>
      <${Panel} title="Umsatz pro Leistung">
        <${BarList} rows=${ranked(v.byService).map((r) => ({ key: r.key, label: r.name, value: pick(r), display: mc(pick(r)) }))} />
      <//>
      <${Panel} title="Ausgaben nach Kategorie">
        <${BarList} rows=${ranked(v.byCategory).map((r) => ({ key: r.name, label: r.name, value: pick(r), display: mc(pick(r)), color: 'var(--series-2)' }))} />
      <//>
    </div>
    <p class="footnote">
      Diese Übersicht ist eine Auswertung deiner Rechnungen und Ausgaben – keine Buchhaltung im steuerlichen Sinn.
      Umsatz zählt nach Rechnungsdatum, Zahlungseingänge nach Zahlungsdatum. Fremdwährungen sind mit dem am Beleg gespeicherten Kurs umgerechnet.
    </p>
  `;
}

/* ---------- Reports ---------- */

function periodTable(data, scope, grain, labelFn, first) {
  const rows = revenueByPeriod(data, scope, grain);
  const total = rows.reduce((a, r) => ({ c: a.c + pick(r), a: a.a + pickAlt(r), tax: a.tax + pick(r, 'tax'), count: a.count + r.count }), { c: 0, a: 0, tax: 0, count: 0 });
  return {
    columns: [{ label: first }, { label: 'Belege', ...N }, { label: `Umsatz netto (${CUR()})`, ...M }, { label: `Umsatz netto (${ALT()})`, ...M }, { label: `Steuer (${CUR()})`, ...M }],
    rows: rows.map((r) => [labelFn(r.key), r.count, dc(pick(r)), da(pickAlt(r)), dc(pick(r, 'tax'))]),
    totals: ['Summe', total.count, dc(total.c), da(total.a), dc(total.tax)],
    chart: {
      series: [{ id: 'rev', label: 'Umsatz', color: 'var(--series-1)' }],
      groups: rows.map((r) => ({ key: r.key, label: grain === 'month' ? monthShort(r.key) : labelFn(r.key), title: labelFn(r.key), values: { rev: pick(r) } })),
    },
  };
}

function rankTable(input, first, extra = []) {
  const rows = [...input].sort((a, b) => pick(b) - pick(a));
  const total = rows.reduce((a, r) => ({ c: a.c + pick(r), a: a.a + pickAlt(r) }), { c: 0, a: 0 });
  return {
    columns: [{ label: first }, ...extra.map((e) => e.col), { label: `Umsatz netto (${CUR()})`, ...M }, { label: `Umsatz netto (${ALT()})`, ...M }, { label: 'Anteil', align: 'right' }],
    rows: rows.map((r) => [r.name, ...extra.map((e) => e.cell(r)), dc(pick(r)), da(pickAlt(r)), share(pick(r), total.c)]),
    totals: ['Summe', ...extra.map(() => ''), dc(total.c), da(total.a), ''],
  };
}

function openTable(data, scope, today, onlyOverdue) {
  let rows = receivables(data, { companyId: scope.companyId }, today);
  if (onlyOverdue) rows = rows.filter((r) => r.status === 'overdue');
  const total = rows.reduce((a, r) => a + pick(r, 'open'), 0);
  const aging = AGING.map((b) => ({ ...b, value: rows.filter((r) => r.bucket === b.id).reduce((a, r) => a + pick(r, 'open'), 0), count: rows.filter((r) => r.bucket === b.id).length }));
  return {
    columns: [{ label: 'Nummer' }, { label: 'Kunde' }, { label: 'Unternehmen' }, { label: 'Rechnungsdatum', type: 'date' }, { label: 'Fällig', type: 'date' },
      { label: 'Tage überfällig', ...N }, { label: 'Währung' }, { label: 'Rechnungsbetrag', ...M }, { label: 'Offen', ...M }, { label: `Offen (${CUR()})`, ...M }],
    rows: rows.map((r) => [r.inv.number, customerLabel(r.inv), (byId('companies', r.inv.companyId) || {}).name || '', dt(r.inv.issueDate), dt(r.inv.dueDate),
      r.overdueDays, r.inv.currency, cur(r.inv.totals.totalCents, r.inv.currency), cur(r.openCents, r.inv.currency), dc(pick(r, 'open'))]),
    totals: ['Summe', '', '', '', '', '', '', '', '', dc(total)],
    aging: onlyOverdue ? null : aging,
    note: 'Stichtag heute – unabhängig vom gewählten Zeitraum.',
  };
}

const REPORTS = [
  { id: 'month', label: 'Umsatz nach Monat', build: (d, s) => periodTable(d, s, 'month', monthName, 'Monat') },
  { id: 'quarter', label: 'Umsatz nach Quartal', build: (d, s) => periodTable(d, s, 'quarter', (k) => k.replace('-Q', ', Quartal '), 'Quartal') },
  { id: 'year', label: 'Umsatz nach Jahr', build: (d, s) => periodTable(d, s, 'year', (k) => k, 'Jahr') },
  { id: 'customer', label: 'Umsatz nach Kunde', build: (d, s) => rankTable(revenueByCustomer(d, s), 'Kunde', [{ col: { label: 'Rechnungen', ...N }, cell: (r) => r.count }]) },
  { id: 'company', label: 'Umsatz nach Unternehmen', build: (d, s) => rankTable(revenueByCompany(d, s), 'Unternehmen', [{ col: { label: 'Rechnungen', ...N }, cell: (r) => r.count }]) },
  {
    id: 'service', label: 'Umsatz nach Leistung',
    build: (d, s) => rankTable(revenueByService(d, s), 'Leistung', [
      { col: { label: 'Kategorie' }, cell: (r) => r.category || '' },
      { col: { label: 'Menge', ...N }, cell: (r) => ({ v: Math.round(r.qty * 1000) / 1000, t: num(r.qty) }) },
    ]),
  },
  {
    id: 'currency', label: 'Umsatz nach Währung (USD und EUR)',
    build: (d, s) => {
      const rows = revenueByCurrency(d, s);
      return {
        columns: [{ label: 'Rechnungswährung' }, { label: 'Rechnungen', ...N }, { label: 'Netto', ...M }, { label: 'Steuer', ...M }, { label: 'Brutto', ...M },
          { label: 'Netto in USD', ...M }, { label: 'Netto in EUR', ...M }],
        rows: rows.map((r) => [r.currency, r.count, cur(r.netCents, r.currency), cur(r.taxCents, r.currency), cur(r.totalCents, r.currency), cur(r.usd, 'USD'), cur(r.eur, 'EUR')]),
        totals: ['Summe', rows.reduce((a, r) => a + r.count, 0), '', '', '', cur(rows.reduce((a, r) => a + r.usd, 0), 'USD'), cur(rows.reduce((a, r) => a + r.eur, 0), 'EUR')],
      };
    },
  },
  { id: 'open', label: 'Offene Forderungen', build: (d, s, today) => openTable(d, s, today, false) },
  { id: 'overdue', label: 'Überfällige Rechnungen', build: (d, s, today) => openTable(d, s, today, true) },
  {
    id: 'profit', label: 'Gewinnübersicht',
    build: (d, s) => {
      const months = rangeMonths(s.range, d, s.companyId);
      const rows = months.length ? monthlySeries(d, { companyId: s.companyId, months, range: s.range }) : [];
      const t = rows.reduce((a, r) => ({ rev: a.rev + pick(r, 'revenue'), exp: a.exp + pick(r, 'expense'), alt: a.alt + pickAlt(r, 'profit') }), { rev: 0, exp: 0, alt: 0 });
      return {
        columns: [{ label: 'Monat' }, { label: `Einnahmen (${CUR()})`, ...M }, { label: `Ausgaben (${CUR()})`, ...M }, { label: `Gewinn (${CUR()})`, ...M }, { label: `Gewinn (${ALT()})`, ...M }],
        rows: rows.map((r) => [monthName(r.key), dc(pick(r, 'revenue')), dc(pick(r, 'expense')), dc(pick(r, 'profit')), da(pickAlt(r, 'profit'))]),
        totals: ['Summe', dc(t.rev), dc(t.exp), dc(t.rev - t.exp), da(t.alt)],
        chart: {
          mode: 'grouped',
          series: [{ id: 'rev', label: 'Einnahmen', color: 'var(--series-1)' }, { id: 'exp', label: 'Ausgaben', color: 'var(--series-2)' }],
          groups: rows.slice(-24).map((r) => ({ key: r.key, label: monthShort(r.key), title: monthName(r.key), values: { rev: pick(r, 'revenue'), exp: pick(r, 'expense') } })),
        },
      };
    },
  },
  {
    id: 'costs', label: 'Kostenübersicht',
    build: (d, s) => {
      const rows = [...expensesByCategory(d, s)].sort((a, b) => pick(b) - pick(a));
      const t = rows.reduce((a, r) => ({ c: a.c + pick(r), a: a.a + pickAlt(r), tax: a.tax + pick(r, 'tax'), count: a.count + r.count }), { c: 0, a: 0, tax: 0, count: 0 });
      return {
        columns: [{ label: 'Kategorie' }, { label: 'Belege', ...N }, { label: `Netto (${CUR()})`, ...M }, { label: `Netto (${ALT()})`, ...M }, { label: `Steuer (${CUR()})`, ...M }, { label: 'Anteil', align: 'right' }],
        rows: rows.map((r) => [r.name, r.count, dc(pick(r)), da(pickAlt(r)), dc(pick(r, 'tax')), share(pick(r), t.c)]),
        totals: ['Summe', t.count, dc(t.c), da(t.a), dc(t.tax), ''],
      };
    },
  },
  {
    id: 'tax', label: 'Steuerübersicht',
    build: (d, s) => {
      const t = taxOverview(d, s);
      return {
        columns: [{ label: 'Position' }, { label: 'Währung' }, { label: 'Nettobetrag', ...M }, { label: 'Steuer', ...M }, { label: `Steuer (${CUR()})`, ...M }],
        rows: [
          ...t.collected.map((r) => [`Berechnet in Rechnungen, Satz ${pct(r.rate)}`, r.currency, cur(r.netCents, r.currency), cur(r.taxCents, r.currency), dc(pick(r, 'tax'))]),
          ['In Ausgaben enthaltene Steuer', CUR(), '', '', dc(-pick(t, 'paid'))],
        ],
        totals: ['Saldo', '', '', '', dc(pick(t, 'collected') - pick(t, 'paid'))],
        note: 'Rechnerische Übersicht aus den erfassten Belegen. Ob und wie Steuern anzumelden sind, klärst du mit deiner Steuerberatung.',
      };
    },
  },
  {
    id: 'invoices', label: 'Rechnungsliste',
    build: (d, s, today) => {
      const docs = revenueDocs(d, s).sort((a, b) => (a.date < b.date ? -1 : 1));
      const t = docs.reduce((a, r) => ({ net: a.net + pick(r, 'net'), tax: a.tax + pick(r, 'tax'), total: a.total + pick(r, 'total') }), { net: 0, tax: 0, total: 0 });
      return {
        columns: [{ label: 'Nummer' }, { label: 'Datum', type: 'date' }, { label: 'Kunde' }, { label: 'Unternehmen' }, { label: 'Währung' },
          { label: 'Netto', ...M }, { label: 'Steuer', ...M }, { label: 'Brutto', ...M }, { label: `Netto (${CUR()})`, ...M }, { label: 'Kurs USD/EUR', ...N }, { label: 'Bezahlt', ...M }, { label: 'Status' }],
        rows: docs.map((r) => {
          const inv = r.inv;
          const pays = paymentsOf(inv.id);
          const st = invoiceStatus(inv, pays, today);
          return [inv.number, dt(inv.issueDate), customerLabel(inv), (byId('companies', inv.companyId) || {}).name || '', inv.currency,
            cur(inv.totals.netCents, inv.currency), cur(inv.totals.taxCents, inv.currency), cur(inv.totals.totalCents, inv.currency), dc(pick(r, 'net')),
            inv.fx ? { v: Number(inv.fx.usdToEur), t: num(inv.fx.usdToEur, 'de', 4) } : '',
            cur(sumPayments(pays), inv.currency), (INVOICE_STATUS[st] || {}).label || st];
        }),
        totals: ['Summe', '', '', '', CUR(), dc(t.net), dc(t.tax), dc(t.total), dc(t.net), '', '', ''],
        note: `Die Summenzeile ist in ${CUR()} umgerechnet; die Zeilen zeigen die Beträge in Rechnungswährung.`,
      };
    },
  },
  {
    id: 'payments', label: 'Zahlungseingänge',
    build: (d, s) => {
      const rows = paymentDocs(d, s).sort((a, b) => (a.date < b.date ? -1 : 1));
      return {
        columns: [{ label: 'Datum', type: 'date' }, { label: 'Rechnung' }, { label: 'Kunde' }, { label: 'Zahlungsart' }, { label: 'Währung' }, { label: 'Betrag', ...M }, { label: `Betrag (${CUR()})`, ...M }],
        rows: rows.map((r) => [dt(r.date), r.inv.number, customerLabel(r.inv), r.pay.method || '', r.inv.currency, cur(r.pay.amountCents, r.inv.currency), dc(pick(r))]),
        totals: ['Summe', '', '', '', '', '', dc(rows.reduce((a, r) => a + pick(r), 0))],
      };
    },
  },
  {
    id: 'expenses', label: 'Ausgabenliste',
    build: (d, s) => {
      const rows = expenseDocs(d, s).sort((a, b) => (a.date < b.date ? -1 : 1));
      const t = rows.reduce((a, r) => ({ net: a.net + pick(r, 'net'), tax: a.tax + pick(r, 'tax'), total: a.total + pick(r, 'total') }), { net: 0, tax: 0, total: 0 });
      return {
        columns: [{ label: 'Datum', type: 'date' }, { label: 'Lieferant' }, { label: 'Kategorie' }, { label: 'Beschreibung' }, { label: 'Rechnungsnr.' }, { label: 'Unternehmen' },
          { label: 'Währung' }, { label: 'Netto', ...M }, { label: 'Steuer', ...M }, { label: 'Gesamt', ...M }, { label: `Gesamt (${CUR()})`, ...M }, { label: 'Bezahlt am', type: 'date' }, { label: 'Zahlungsart' }],
        rows: rows.map((r) => {
          const e = r.exp;
          return [dt(e.invoiceDate), e.vendor, e.category, e.description, e.invoiceNumber, (byId('companies', e.companyId) || {}).name || '', e.currency,
            cur(e.netCents, e.currency), cur(e.taxCents, e.currency), cur(e.totalCents, e.currency), dc(pick(r, 'total')), dt(e.paymentDate), e.paymentMethod];
        }),
        totals: ['Summe', '', '', '', '', '', CUR(), dc(t.net), dc(t.tax), dc(t.total), dc(t.total), '', ''],
        note: `Die Summenzeile ist in ${CUR()} umgerechnet; die Zeilen zeigen die Beträge in Belegwährung.`,
      };
    },
  },
];

const cellText = (c) => (c && typeof c === 'object' ? c.t : (c == null ? '' : String(c)));

export function ReportsView({ params }) {
  useStore();
  const [reportId, setReportId] = useState((params && params.r && REPORTS.find((r) => r.id === params.r)) ? params.r : 'month');
  const p = usePeriod('year');
  const [busy, setBusy] = useState('');
  const today = todayISO();
  const companyId = scopeCompanyId();
  const company = currentCompany();
  const data = storeData();
  const report = REPORTS.find((r) => r.id === reportId);
  const table = useMemo(() => report.build(data, { companyId, range: p.range }, today), [state.version, reportId, companyId, p.range.from, p.range.to, CUR()]);

  const stichtag = reportId === 'open' || reportId === 'overdue';
  const subtitle = `${company ? company.name : 'Alle Unternehmen'}, ${stichtag ? `Stichtag ${date(today)}` : periodLabel(p)}`;
  const exportable = {
    title: report.label, subtitle,
    fileName: `${report.label} ${company ? (company.shortName || company.name) : 'Alle Unternehmen'} ${today}`,
    columns: table.columns, rows: table.rows, totals: table.totals,
  };
  async function run(kind) {
    setBusy(kind);
    await attempt(async () => {
      if (kind === 'csv') exportCSV(exportable);
      else if (kind === 'xlsx') await exportXLSX(exportable);
      else await exportPDF(exportable);
    });
    setBusy('');
  }

  return html`
    <${PageHeader} title="Reports" sub="Auswertungen zum Filtern und Exportieren.">
      <${Button} icon="download" busy=${busy === 'csv'} disabled=${!table.rows.length} onClick=${() => run('csv')}>CSV<//>
      <${Button} icon="download" busy=${busy === 'xlsx'} disabled=${!table.rows.length} onClick=${() => run('xlsx')}>Excel<//>
      <${Button} icon="download" busy=${busy === 'pdf'} disabled=${!table.rows.length} onClick=${() => run('pdf')}>PDF<//>
    <//>
    <div class="report-layout">
      <nav class="report-nav" aria-label="Report auswählen">
        ${REPORTS.map((r) => html`<button type="button" class=${`report-link${r.id === reportId ? ' is-on' : ''}`} aria-current=${r.id === reportId ? 'true' : undefined}
          onClick=${() => setReportId(r.id)}>${r.label}</button>`)}
      </nav>
      <div class="report-body">
        <${PeriodFilter} p=${p} />
        ${table.note && html`<p class="footnote">${table.note}</p>`}
        ${table.aging && html`<div class="stat-row stat-row-5">
          ${table.aging.map((b) => html`<${Stat} label=${b.label} value=${mc(b.value)} sub=${`${b.count} ${b.count === 1 ? 'Rechnung' : 'Rechnungen'}`} tone=${b.id !== 'current' && b.value ? 'bad' : ''} />`)}
        </div>`}
        ${table.chart && table.chart.groups.length > 1 && html`<${ChartFigure} title=${report.label} sub=${`Netto in ${CUR()}`} series=${table.chart.series}>
          <${ColumnChart} groups=${table.chart.groups} series=${table.chart.series} mode=${table.chart.mode || 'stacked'}
            format=${(x) => mc(x)} axisFormat=${(x) => moneyCompact(x, CUR())} ariaLabel=${report.label} />
        <//>`}
        ${table.rows.length
          ? html`<div class="table-wrap"><table class="table table-compact report-table">
              <thead><tr>${table.columns.map((c) => html`<th class=${c.align === 'right' ? 'r' : ''}>${c.label}</th>`)}</tr></thead>
              <tbody>${table.rows.map((row) => html`<tr>${row.map((c, i) => html`<td class=${table.columns[i].align === 'right' ? 'r' : ''}>${cellText(c)}</td>`)}</tr>`)}</tbody>
              ${table.totals && html`<tfoot><tr>${table.totals.map((c, i) => html`<td class=${table.columns[i].align === 'right' ? 'r' : ''}>${cellText(c)}</td>`)}</tr></tfoot>`}
            </table></div>`
          : html`<${EmptyState} icon="reports" title="Keine Daten" text="Für diese Auswahl gibt es keine Einträge. Wähle einen anderen Zeitraum oder ein anderes Unternehmen." />`}
      </div>
    </div>
  `;
}
