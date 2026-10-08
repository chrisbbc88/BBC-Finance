// Beispieldaten zum Ausprobieren. Sie entstehen über dieselben Vorgänge wie echte Daten
// (Nummernvergabe, Zahlungen, Storno …) und lassen sich in den Einstellungen wieder entfernen.

import { state, write, activeCompanies, byId, batch } from './store.js';
import {
  newCustomer, newService, newInvoice, newQuote, newExpense, newRecurring,
} from './schema.js';
import {
  saveCustomer, saveService, finalizeInvoice, addPayment, markInvoiceSent, cancelInvoice,
  createCreditNote, saveExpense, saveRecurring, finalizeQuote, setQuoteStatus, itemFromService,
  saveInvoiceDraft, UserError,
} from './actions.js';
import { fxForDoc, computeTotals } from './calc.js';
import { todayISO, addMonths, addDays, nowISO } from './util.js';
import { transact, ALL_STORES } from './db.js';
import { reload, broadcastChange } from './store.js';

const CUSTOMERS = [
  { company: 'Nordlicht Immobilien GmbH', firstName: 'Jana', lastName: 'Petersen', street: 'Hafenallee', houseNo: '12', zip: '20457', city: 'Hamburg', country: 'Deutschland', email: 'j.petersen@nordlicht-immobilien.example', language: 'de', currency: 'EUR', tags: ['Beispiel', 'Immobilien'] },
  { company: 'Alpenblick Bau AG', firstName: 'Reto', lastName: 'Camenzind', street: 'Seestrasse', houseNo: '48', zip: '8002', city: 'Zürich', country: 'Schweiz', email: 'reto@alpenblick-bau.example', language: 'de', currency: 'EUR', tags: ['Beispiel', 'Bau'] },
  { company: 'Desert Bloom Real Estate LLC', firstName: 'Layla', lastName: 'Haddad', street: 'Sheikh Zayed Road', houseNo: '310', zip: '', city: 'Dubai', country: 'Vereinigte Arabische Emirate', email: 'layla@desertbloom.example', language: 'en', currency: 'USD', tags: ['Beispiel', 'Immobilien'] },
  { company: 'Schulverein Rheinufer e. V.', firstName: 'Markus', lastName: 'Albrecht', street: 'Uferweg', houseNo: '3', zip: '50678', city: 'Köln', country: 'Deutschland', email: 'vorstand@schule-rheinufer.example', language: 'de', currency: 'EUR', tags: ['Beispiel', 'Schule'] },
  { company: 'Kessler & Söhne Tischlerei', firstName: 'Anton', lastName: 'Kessler', street: 'Werkstattgasse', houseNo: '7', zip: '80331', city: 'München', country: 'Deutschland', email: 'info@kessler-tischlerei.example', language: 'de', currency: 'USD', tags: ['Beispiel', 'Handwerk'] },
  { company: 'Harbor Point Consulting Inc.', firstName: 'Grace', lastName: 'Whitfield', street: 'Brickell Avenue', houseNo: '900', zip: '33131', city: 'Miami', region: 'FL', country: 'USA', email: 'grace@harborpoint.example', language: 'en', currency: 'USD', paymentTermDays: 30, tags: ['Beispiel'] },
];

const SERVICES = [
  { name: 'Website-Erstellung', category: 'Website', unit: 'Pauschal', priceCents: 480000, invoiceText: 'Konzeption, Design und Umsetzung der Website inklusive Einrichtung.' },
  { name: 'SEO-Betreuung', category: 'SEO', unit: 'Monat', priceCents: 95000, recurring: true, invoiceText: 'Laufende Suchmaschinenoptimierung inklusive monatlichem Bericht.' },
  { name: 'Website-Wartung', category: 'Website', unit: 'Monat', priceCents: 18000, recurring: true, invoiceText: 'Updates, Sicherungen und kleinere Anpassungen.' },
  { name: 'Hosting', category: 'Hosting', unit: 'Monat', priceCents: 3500, recurring: true, invoiceText: 'Hosting inklusive Domain und E-Mail-Postfächern.' },
  { name: 'Vertriebsberatung', category: 'Beratung', unit: 'Stunde', priceCents: 16000, invoiceText: 'Beratung zu Vertriebsprozess und Vertriebscontrolling.' },
  { name: 'CRM-Einführung', category: 'Beratung', unit: 'Pauschal', priceCents: 320000, invoiceText: 'Auswahl, Einrichtung und Schulung des CRM-Systems.' },
  { name: 'Social-Media-Betreuung', category: 'Social Media', unit: 'Monat', priceCents: 75000, recurring: true, invoiceText: 'Redaktionsplan, Beiträge und Auswertung.' },
];

// [Monate zurück, Tag, Unternehmen, Kunde, [[Leistung, Menge], …], Zahlung, Rabatt %]
const INVOICES = [
  [11, 6, 0, 0, [[0, 1]], 'full', 0], [11, 18, 1, 1, [[4, 12]], 'full', 0],
  [10, 4, 0, 2, [[1, 1], [2, 1]], 'full', 0], [10, 21, 1, 5, [[5, 1]], 'full', 5],
  [9, 3, 0, 0, [[1, 1], [3, 1]], 'full', 0], [9, 15, 0, 3, [[0, 1]], 'full', 10], [9, 25, 1, 1, [[4, 8]], 'full', 0],
  [8, 5, 0, 2, [[1, 1], [2, 1]], 'full', 0], [8, 19, 1, 4, [[4, 6]], 'full', 0],
  [7, 2, 0, 0, [[1, 1], [3, 1]], 'full', 0], [7, 12, 1, 5, [[4, 20]], 'full', 0], [7, 27, 0, 4, [[6, 1]], 'full', 0],
  [6, 4, 0, 2, [[1, 1], [2, 1]], 'full', 0], [6, 16, 1, 1, [[5, 1], [4, 4]], 'full', 0],
  [5, 3, 0, 0, [[1, 1], [3, 1]], 'full', 0], [5, 14, 0, 3, [[2, 3]], 'full', 0], [5, 24, 1, 5, [[4, 14]], 'full', 0],
  [4, 5, 0, 2, [[1, 1], [2, 1], [6, 1]], 'full', 0], [4, 20, 1, 4, [[4, 10]], 'full', 0],
  [3, 2, 0, 0, [[1, 1], [3, 1]], 'full', 0], [3, 11, 0, 1, [[0, 1]], 'full', 0], [3, 23, 1, 5, [[4, 16]], 'full', 0],
  [2, 4, 0, 2, [[1, 1], [2, 1], [6, 1]], 'full', 0], [2, 17, 1, 1, [[4, 9]], 'half', 0], [2, 26, 0, 3, [[2, 3]], 'none', 0],
  [1, 3, 0, 0, [[1, 1], [3, 1]], 'full', 0], [1, 9, 1, 5, [[5, 1]], 'half', 0], [1, 22, 0, 4, [[6, 1], [2, 1]], 'none', 0],
  [0, 1, 0, 2, [[1, 1], [2, 1], [6, 1]], 'none', 0], [0, 3, 1, 1, [[4, 11]], 'none', 0],
];

// [Tage zurück, Unternehmen, Lieferant, Kategorie, Beschreibung, Währung, Netto, Steuer, Zahlungsart]
const EXPENSES = [
  [330, 0, 'Wolkenwerk Hosting', 'Hosting', 'Server-Jahrespaket', 'EUR', 34800, 0, 'Kreditkarte'],
  [300, 1, 'Kanzlei Sommer', 'Beratung', 'Laufende Steuerberatung', 'EUR', 45000, 8550, 'Überweisung'],
  [270, 0, 'Pixelgarten', 'Software', 'Design-Software, Jahresabo', 'USD', 59900, 0, 'Kreditkarte'],
  [240, 0, 'Textwerkstatt Lenz', 'Freelancer', 'Blogbeiträge im Paket', 'EUR', 60000, 0, 'Überweisung'],
  [200, 1, 'Skyline Air', 'Reisen', 'Flug Dubai – Frankfurt', 'AED', 285000, 0, 'Kreditkarte'],
  [180, 0, 'Suchmaschinen-Anzeigen', 'Marketing', 'Kampagnenbudget', 'USD', 80000, 0, 'Kreditkarte'],
  [150, 1, 'Büro am Creek', 'Büro', 'Coworking, Monatsbeitrag', 'AED', 150000, 7500, 'Kreditkarte'],
  [120, 0, 'Pixelgarten', 'Software', 'Stockfotos, Paket', 'USD', 19900, 0, 'Kreditkarte'],
  [95, 0, 'Textwerkstatt Lenz', 'Freelancer', 'Blogbeiträge im Paket', 'EUR', 72000, 0, 'Überweisung'],
  [75, 1, 'Kanzlei Sommer', 'Beratung', 'Laufende Steuerberatung', 'EUR', 45000, 8550, 'Überweisung'],
  [60, 0, 'Suchmaschinen-Anzeigen', 'Marketing', 'Kampagnenbudget', 'USD', 95000, 0, 'Kreditkarte'],
  [45, 1, 'Büro am Creek', 'Büro', 'Coworking, Monatsbeitrag', 'AED', 150000, 7500, 'Kreditkarte'],
  [30, 0, 'Versicherung Nordstern', 'Versicherungen', 'Betriebshaftpflicht', 'EUR', 38000, 0, 'Lastschrift'],
  [18, 0, 'Wolkenwerk Hosting', 'Hosting', 'Zusatzspeicher', 'EUR', 6000, 0, 'Kreditkarte'],
  [9, 1, 'Hausbank', 'Bankgebühren', 'Kontoführung und Auslandsüberweisungen', 'USD', 4500, 0, 'Lastschrift'],
  [4, 0, 'Suchmaschinen-Anzeigen', 'Marketing', 'Kampagnenbudget', 'USD', 70000, 0, 'Kreditkarte'],
];

const demoRate = (monthsBack) => 0.86 + ((monthsBack * 37) % 7) / 100;
const demoFx = (currency, monthsBack, dateISO) => {
  const usdToEur = demoRate(monthsBack);
  const meta = { date: dateISO, fetchedAt: nowISO(), source: 'Beispielkurs' };
  if (currency === 'AED') return { rateToUSD: 0.2723, usdToEur, ...meta, manual: false };
  return fxForDoc(currency, usdToEur, meta);
};

export function loadDemo() {
  return batch(buildDemo);
}

async function buildDemo() {
  if (state.invoices.length || state.customers.length || state.expenses.length || state.services.length) {
    throw new UserError('Beispieldaten lassen sich nur in ein leeres Tool laden.');
  }
  const companies = activeCompanies();
  if (!companies.length) throw new UserError('Lege zuerst ein Unternehmen an.');
  const co = (i) => companies[i % companies.length];
  const today = todayISO();

  const customers = [];
  for (const c of CUSTOMERS) customers.push(await saveCustomer(newCustomer(c)));
  const services = [];
  for (const s of SERVICES) services.push(await saveService(newService({ ...s, currency: 'USD' })));

  const made = [];
  for (const [back, day, ci, ki, lines, pay, discount] of INVOICES) {
    const company = co(ci);
    const customer = customers[ki];
    let issueDate = addMonths(today.slice(0, 8) + '01', -back, day);
    if (issueDate > today) issueDate = today;
    const currency = customer.currency || 'USD';
    const fx = demoFx(currency, back, issueDate);
    const items = lines.map(([si, qty]) => {
      const it = itemFromService(services[si], company);
      const priceCents = currency === 'EUR' ? Math.round((it.priceCents * fx.usdToEur) / 500) * 500 : it.priceCents;
      return { ...it, qty, priceCents };
    });
    const draft = {
      ...newInvoice(company),
      customerId: customer.id, issueDate, serviceDate: issueDate,
      paymentTermDays: customer.paymentTermDays != null && customer.paymentTermDays !== '' ? Number(customer.paymentTermDays) : 14,
      currency, language: customer.language || company.language,
      items, discount: { type: 'pct', value: discount }, fx,
    };
    const inv = await finalizeInvoice(draft);
    made.push({ inv, pay, back });
    if (back > 0 || pay !== 'none') await markInvoiceSent(inv.id, true);
    const total = inv.totals.totalCents;
    if (pay === 'full') {
      const d = addDays(issueDate, 9 + (day % 9));
      await addPayment(inv.id, { date: d > today ? today : d, amountCents: total, method: 'Überweisung', note: '' });
    } else if (pay === 'half') {
      const d = addDays(issueDate, 12);
      await addPayment(inv.id, { date: d > today ? today : d, amountCents: Math.round(total / 2), method: 'Überweisung', note: 'Anzahlung' });
    }
  }

  // Ein Storno und eine Gutschrift, damit beide Fälle sichtbar sind
  const company0 = co(0);
  const mk = async (customer, si, back) => {
    const issueDate = addMonths(today.slice(0, 8) + '01', -back, 14);
    const currency = customer.currency || 'USD';
    const fx = demoFx(currency, back, issueDate);
    const it = itemFromService(services[si], company0);
    return finalizeInvoice({
      ...newInvoice(company0), customerId: customer.id, issueDate, serviceDate: issueDate,
      currency, language: customer.language || 'de', paymentTermDays: 14,
      items: [{ ...it, priceCents: currency === 'EUR' ? Math.round((it.priceCents * fx.usdToEur) / 500) * 500 : it.priceCents }], fx,
    });
  };
  const toCancel = await mk(customers[3], 2, 4);
  await cancelInvoice(toCancel.id, 'Beispiel: doppelt ausgestellt');
  const toCredit = await mk(customers[4], 6, 3);
  await createCreditNote(toCredit.id, 'Beispiel: Leistung wurde nicht erbracht.');

  // Ein Entwurf
  await saveInvoiceDraft({
    ...newInvoice(co(1)), customerId: customers[5].id, currency: 'USD', language: 'en', paymentTermDays: 30,
    items: [{ ...itemFromService(services[4], co(1)), qty: 6 }], fx: demoFx('USD', 0, today),
  });

  // Angebote
  const q1 = await finalizeQuote({
    ...newQuote(co(0)), customerId: customers[1].id, issueDate: addDays(today, -6), validUntil: addDays(today, 24),
    currency: 'EUR', language: 'de', fx: demoFx('EUR', 0, today),
    items: [{ ...itemFromService(services[0], co(0)), priceCents: 420000 }, { ...itemFromService(services[1], co(0)), qty: 6, priceCents: 85000 }],
  });
  await setQuoteStatus(q1.id, 'sent');
  const q2 = await finalizeQuote({
    ...newQuote(co(1)), customerId: customers[5].id, issueDate: addDays(today, -20), validUntil: addDays(today, 10),
    currency: 'USD', language: 'en', fx: demoFx('USD', 0, today),
    items: [{ ...itemFromService(services[5], co(1)) }],
  });
  await setQuoteStatus(q2.id, 'accepted');

  // Ausgaben
  for (const [daysBack, ci, vendor, category, description, currency, net, tax, method] of EXPENSES) {
    const d = addDays(today, -daysBack);
    await saveExpense(newExpense({
      companyId: co(ci).id, vendor, category, description, currency,
      invoiceDate: d, paymentDate: addDays(d, 2) > today ? today : addDays(d, 2),
      netCents: net, taxCents: tax, totalCents: net + tax,
      paymentMethod: method, fx: demoFx(currency, Math.floor(daysBack / 30), d),
    }));
  }

  // Wiederkehrende Rechnungen: eine davon ist heute fällig
  await saveRecurring({
    ...newRecurring(co(0)), name: 'SEO-Betreuung Desert Bloom', customerId: customers[2].id, currency: 'USD', language: 'en',
    interval: 'monthly', nextDate: today, items: [itemFromService(services[1], co(0)), itemFromService(services[2], co(0))],
  });
  await saveRecurring({
    ...newRecurring(co(0)), name: 'Hosting Nordlicht Immobilien', customerId: customers[0].id, currency: 'EUR', language: 'de',
    interval: 'yearly', nextDate: addMonths(today, 4), items: [{ ...itemFromService(services[3], co(0)), qty: 12, priceCents: 3000 }],
  });

  await write(async (w) => {
    await w.setting('demoLoaded', true);
    await w.setting('changesSinceBackup', 0);
  });
  return { invoices: made.length };
}

/**
 * Entfernt alle Bewegungs- und Stammdaten (Kunden, Leistungen, Belege, Ausgaben, Zähler, Protokoll).
 * Unternehmen und Einstellungen bleiben erhalten.
 */
export async function clearData() {
  const keep = new Set(['companies', 'assets', 'settings']);
  await transact(ALL_STORES, async (tx) => {
    for (const s of ALL_STORES) if (!keep.has(s)) await tx.clear(s);
    await tx.put('settings', { key: 'demoLoaded', value: false });
    await tx.put('settings', { key: 'changesSinceBackup', value: 0 });
  });
  await reload();
  broadcastChange();
}

export const hasDemo = () => !!state.settings.demoLoaded;
export { byId, computeTotals };
