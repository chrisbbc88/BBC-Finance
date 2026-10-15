// Ablauf je Kontakt: Termin → Angebot → Vertrag → Rechnung. Reine Auswertung ohne Speichern.

import { quoteStatus } from './calc.js';
import { addDays } from './util.js';

const newestFirst = (key) => (a, b) => ((a[key] || '') < (b[key] || '') ? 1 : (a[key] || '') > (b[key] || '') ? -1 : 0);

/**
 * Stand eines Kontakts in den vier Schritten. Jeder Schritt hat state:
 * 'done' (erreicht), 'active' (läuft gerade), 'todo' (noch nicht begonnen) oder
 * 'skipped' (nicht erfasst, aber ein späterer Schritt ist schon erreicht).
 */
export function pipelineOf(data, customerId, today) {
  const appts = (data.appointments || []).filter((a) => a.customerId === customerId && a.status !== 'cancelled');
  const held = appts.filter((a) => a.status === 'done' || (a.status === 'planned' && a.date < today)).sort(newestFirst('date'));
  const next = appts.filter((a) => a.status === 'planned' && a.date >= today).sort((a, b) => (a.date + a.start < b.date + b.start ? -1 : 1))[0] || null;

  const allQuotes = (data.quotes || []).filter((q) => q.customerId === customerId);
  const quotes = allQuotes.filter((q) => q.status !== 'draft').sort(newestFirst('issueDate'));
  const qs = quotes.map((q) => quoteStatus(q, today));
  const quoteDrafts = allQuotes.length - quotes.length;

  const contracts = (data.contracts || []).filter((c) => c.customerId === customerId).sort(newestFirst('createdAt'));
  const invoicesAll = (data.invoices || []).filter((i) => i.customerId === customerId && i.type !== 'credit_note');
  const invoices = invoicesAll.filter((i) => !['draft', 'cancelled'].includes(i.status)).sort(newestFirst('issueDate'));
  const invoiceDrafts = invoicesAll.filter((i) => i.status === 'draft').length;

  const steps = [
    {
      id: 'meeting', label: 'Termin',
      state: held.length ? 'done' : next ? 'active' : 'todo',
      count: held.length, last: held[0] || null, next,
    },
    {
      id: 'quote', label: 'Angebot',
      state: qs.some((s) => s === 'accepted' || s === 'invoiced') ? 'done'
        : (qs.some((s) => s === 'open' || s === 'sent') || quoteDrafts) ? 'active' : 'todo',
      count: quotes.length, drafts: quoteDrafts, latest: quotes[0] || null, latestStatus: qs[0] || '',
    },
    {
      id: 'contract', label: 'Vertrag',
      state: contracts.some((c) => c.status === 'signed' || c.status === 'ended') ? 'done'
        : contracts.some((c) => c.status === 'open') ? 'active' : 'todo',
      count: contracts.length, latest: contracts[0] || null,
    },
    {
      id: 'invoice', label: 'Rechnung',
      state: invoices.length ? 'done' : invoiceDrafts ? 'active' : 'todo',
      count: invoices.length, drafts: invoiceDrafts, latest: invoices[0] || null,
    },
  ];
  // Der nächste Schritt folgt auf den letzten erreichten. Davor liegende, nie erfasste Schritte
  // (z. B. Bestandskunden ohne Termin im Tool) gelten als übersprungen statt als offen.
  let lastDone = -1;
  steps.forEach((s, i) => { if (s.state === 'done') lastDone = i; });
  steps.forEach((s, i) => { if (i < lastDone && s.state === 'todo') s.state = 'skipped'; });
  const upcoming = steps.findIndex((s, i) => i > lastDone && s.state !== 'done');
  return { steps, current: upcoming === -1 ? null : upcoming };
}

/** Laufender Vertrag, dessen Ende in den nächsten `days` Tagen liegt. */
export function contractEndsSoon(c, today, days = 60) {
  return c.status === 'signed' && !!c.endDate && c.endDate >= today && c.endDate <= addDays(today, days);
}

/** Unterschriebener Vertrag, dessen Enddatum überschritten ist (Status noch nicht auf „Beendet“). */
export function contractOverdue(c, today) {
  return c.status === 'signed' && !!c.endDate && c.endDate < today;
}

/** Anzeige-Status eines Vertrags. */
export function contractStatus(c, today) {
  if (contractOverdue(c, today)) return 'expired';
  if (contractEndsSoon(c, today)) return 'ending';
  return c.status;
}
