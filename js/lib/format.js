// Formatierung von Geld, Zahlen und Daten – getrennt nach Oberfläche (Deutsch)
// und Dokumentsprache (Deutsch oder Englisch).

import { parseISODate } from './util.js';

const LOCALE = { de: 'de-DE', en: 'en-US' };
const nfCache = new Map();

function nf(locale, opts) {
  const key = locale + JSON.stringify(opts);
  if (!nfCache.has(key)) nfCache.set(key, new Intl.NumberFormat(locale, opts));
  return nfCache.get(key);
}

/** Geldbetrag aus Cent. In der Oberfläche deutsch: 5.000,00 $ · 4.320,50 € */
export function money(cents, currency = 'USD', lang = 'de') {
  if (cents == null || !Number.isFinite(Number(cents))) return '–';
  const value = Number(cents) / 100;
  try {
    return nf(LOCALE[lang] || LOCALE.de, {
      style: 'currency', currency, currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 2, maximumFractionDigits: 2,
    }).format(value);
  } catch (_) {
    return `${value.toFixed(2)} ${currency}`;
  }
}

/** Kompakt für Kacheln und Achsen: 12,9 Tsd. $ */
export function moneyCompact(cents, currency = 'USD') {
  const value = Number(cents) / 100;
  if (Math.abs(value) < 10000) {
    return nf('de-DE', { style: 'currency', currency, currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(value);
  }
  return nf('de-DE', {
    style: 'currency', currency, currencyDisplay: 'narrowSymbol',
    notation: 'compact', maximumFractionDigits: 1,
  }).format(value);
}

/** Englische Dokumente nennen zusätzlich den Währungscode: $5,000.00 USD */
export function moneyDoc(cents, currency, lang) {
  const base = money(cents, currency, lang);
  return lang === 'en' ? `${base} ${currency}` : base;
}

export function num(value, lang = 'de', maxDigits = 3) {
  if (value == null || !Number.isFinite(Number(value))) return '';
  return nf(LOCALE[lang] || LOCALE.de, { maximumFractionDigits: maxDigits }).format(Number(value));
}

export function pct(value, lang = 'de') {
  if (value == null || !Number.isFinite(Number(value))) return '';
  return `${nf(LOCALE[lang] || LOCALE.de, { maximumFractionDigits: 3 }).format(Number(value))}${lang === 'en' ? '%' : ' %'}`;
}

export function rate(value, lang = 'de') {
  if (!Number.isFinite(Number(value))) return '';
  return nf(LOCALE[lang] || LOCALE.de, { minimumFractionDigits: 4, maximumFractionDigits: 4 }).format(Number(value));
}

/** Eingabefeld-Darstellung eines Cent-Betrags: 1234,50 (ohne Tausenderpunkt, gut editierbar). */
export function centsToInput(cents) {
  if (cents == null || cents === '') return '';
  return (Number(cents) / 100).toFixed(2).replace('.', ',');
}
export function numToInput(n, maxDigits = 3) {
  if (n == null || n === '' || !Number.isFinite(Number(n))) return '';
  return String(Number(Number(n).toFixed(maxDigits))).replace('.', ',');
}

export function date(iso, lang = 'de') {
  if (!iso) return '';
  const d = parseISODate(iso.slice(0, 10));
  if (lang === 'en') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export function dateTime(isoTs) {
  if (!isoTs) return '';
  const d = new Date(isoTs);
  return `${d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}, ${d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr`;
}

/* ---------- Beschriftungen auf Dokumenten ---------- */

export const DOC_LABELS = {
  de: {
    invoice: 'Rechnung', quote: 'Angebot', credit_note: 'Gutschrift',
    number_invoice: 'Rechnungsnr.', number_quote: 'Angebotsnr.', number_credit_note: 'Gutschriftsnr.',
    date_invoice: 'Rechnungsdatum', date_quote: 'Angebotsdatum', date_credit_note: 'Datum',
    serviceDate: 'Leistungsdatum', servicePeriod: 'Leistungszeitraum',
    dueDate: 'Fällig am', validUntil: 'Gültig bis', customerNo: 'Kundennr.',
    draft: 'Entwurf', draftMark: 'ENTWURF',
    refInvoice: 'zu Rechnung {NUMBER} vom {DATE}',
    pos: 'Pos.', description: 'Beschreibung', qty: 'Menge', unit: 'Einheit',
    price: 'Einzelpreis', discount: 'Rabatt', tax: 'Steuer', amount: 'Betrag',
    subtotal: 'Zwischensumme', net: 'Nettobetrag', total: 'Gesamtbetrag',
    taxDefault: 'Steuer',
    approx: 'entspricht ca.', fxUsed: 'Verwendeter Wechselkurs',
    payment: 'Zahlungsinformationen', bank: 'Bank', holder: 'Kontoinhaber',
    dueLine: 'Zahlbar bis {DATE}.', validLine: 'Dieses Angebot ist gültig bis {DATE}.',
    vatId: 'USt-IdNr.', taxId: 'Steuernr.', phone: 'Tel.', page: 'Seite {P} von {N}',
  },
  en: {
    invoice: 'Invoice', quote: 'Quote', credit_note: 'Credit note',
    number_invoice: 'Invoice no.', number_quote: 'Quote no.', number_credit_note: 'Credit note no.',
    date_invoice: 'Invoice date', date_quote: 'Quote date', date_credit_note: 'Date',
    serviceDate: 'Service date', servicePeriod: 'Service period',
    dueDate: 'Due date', validUntil: 'Valid until', customerNo: 'Customer no.',
    draft: 'Draft', draftMark: 'DRAFT',
    refInvoice: 'for invoice {NUMBER} dated {DATE}',
    pos: 'No.', description: 'Description', qty: 'Qty', unit: 'Unit',
    price: 'Unit price', discount: 'Discount', tax: 'Tax', amount: 'Amount',
    subtotal: 'Subtotal', net: 'Net amount', total: 'Total', total_invoice: 'Invoice total',
    taxDefault: 'Tax',
    approx: 'approx.', fxUsed: 'Exchange rate used',
    payment: 'Payment details', bank: 'Bank', holder: 'Account holder',
    dueLine: 'Payment due by {DATE}.', validLine: 'This quote is valid until {DATE}.',
    vatId: 'VAT ID', taxId: 'Tax ID', phone: 'Phone', page: 'Page {P} of {N}',
  },
};

const UNIT_EN = {
  'Stück': 'pc.', 'Stunde': 'hour', 'Tag': 'day', 'Monat': 'month', 'Jahr': 'year',
  'Pauschal': 'flat', 'Paket': 'package',
};
export const unitLabel = (unit, lang) => (lang === 'en' && UNIT_EN[unit]) ? UNIT_EN[unit] : (unit || '');

export const fill = (tpl, vars) => String(tpl).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
