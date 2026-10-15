// Leistungskatalog importieren und exportieren (Excel, CSV, JSON). Reine Umwandlung ohne Speichern.
// Eine Zeile = eine Leistung. Erkannt werden die Spalten über ihre Überschrift (Groß-/Kleinschreibung egal).

import { DOC_CURRENCIES, SERVICE_TIERS } from './schema.js';
import { parseNum } from './util.js';
import { toCents } from './calc.js';

/** Spalten in der Reihenfolge des Exports; `keys` sind die akzeptierten Überschriften. */
export const CATALOG_COLUMNS = [
  { field: 'code', label: 'Nr.', keys: ['nr', 'nr.', 'nummer', 'leistungsnummer', 'code', 'artikelnummer'] },
  { field: 'name', label: 'Name', keys: ['name', 'leistung', 'bezeichnung'] },
  { field: 'tier', label: 'Tarif', keys: ['tarif', 'tier', 'paket'] },
  { field: 'category', label: 'Kategorie', keys: ['kategorie', 'category'] },
  { field: 'unit', label: 'Einheit', keys: ['einheit', 'unit'] },
  { field: 'price', label: 'Preis netto', keys: ['preis netto', 'preis', 'einzelpreis', 'einzelpreis netto', 'price'] },
  { field: 'currency', label: 'Währung', keys: ['währung', 'waehrung', 'currency'] },
  { field: 'kind', label: 'Art', keys: ['art', 'abrechnung', 'wiederkehrend'] },
  { field: 'qty', label: 'Menge', keys: ['menge', 'standardmenge', 'qty'] },
  { field: 'taxRate', label: 'Steuersatz %', keys: ['steuersatz %', 'steuersatz', 'steuer', 'ust', 'mwst'] },
  { field: 'invoiceText', label: 'Rechnungstext', keys: ['rechnungstext', 'beschreibung auf der rechnung', 'text'] },
  { field: 'internalName', label: 'Interne Bezeichnung', keys: ['interne bezeichnung', 'intern'] },
  { field: 'description', label: 'Interne Beschreibung', keys: ['interne beschreibung', 'beschreibung', 'notiz'] },
  { field: 'company', label: 'Unternehmen', keys: ['unternehmen', 'firma', 'company'] },
  { field: 'active', label: 'Aktiv', keys: ['aktiv', 'active'] },
];

const norm = (s) => String(s == null ? '' : s).trim().toLowerCase().replace(/\s+/g, ' ');
const str = (v) => (v == null ? '' : String(v).trim());

function tierOf(v) {
  const s = norm(v);
  if (!s) return '';
  if (s === 's' || s.startsWith('start')) return 'starter';
  if (s === 'std' || s.startsWith('stand')) return 'standard';
  return null;
}
function kindOf(v) {
  const s = norm(v);
  if (!s) return null;
  if (['einmalig', 'einmal', 'nein', 'no', 'false', '0', 'once'].includes(s)) return false;
  if (['wiederkehrend', 'laufend', 'monatlich', 'ja', 'yes', 'true', '1', 'x'].includes(s) || s.startsWith('wieder')) return true;
  return null;
}
function yesNo(v) {
  const s = norm(v);
  if (!s) return true;
  return !['nein', 'no', 'false', '0', 'inaktiv'].includes(s);
}

/**
 * Zeilen (Objekte mit Spaltenüberschriften als Schlüssel) in Leistungen umwandeln.
 * Gibt { items: [{ row, service, problems: [] }], unknownColumns: [] } zurück.
 * Ein Service hat die Felder des Datenmodells ohne id/companyId; `company` bleibt als Text zur Zuordnung.
 */
export function parseCatalog(rows) {
  const header = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  const map = {};
  const unknownColumns = [];
  for (const h of header) {
    const col = CATALOG_COLUMNS.find((c) => c.keys.includes(norm(h)));
    if (col && !map[col.field]) map[col.field] = h; else if (!col) unknownColumns.push(h);
  }
  const get = (row, field) => (map[field] != null ? row[map[field]] : undefined);
  const items = [];
  rows.forEach((row, i) => {
    const name = str(get(row, 'name'));
    const code = str(get(row, 'code'));
    if (!name && !code && Object.values(row).every((v) => str(v) === '')) return;   // Leerzeile
    const problems = [];
    if (!name) problems.push('Name fehlt');
    const tier = tierOf(get(row, 'tier'));
    if (tier === null) problems.push(`Tarif „${str(get(row, 'tier'))}“ unbekannt (Starter oder Standard)`);
    const rawPrice = get(row, 'price');
    const price = typeof rawPrice === 'number' ? rawPrice : parseNum(str(rawPrice));
    if (str(rawPrice) === '' || Number.isNaN(price)) problems.push('Preis fehlt oder ist keine Zahl');
    else if (price < 0) problems.push('Preis ist negativ');
    const currency = str(get(row, 'currency')).toUpperCase() || 'EUR';
    if (!DOC_CURRENCIES.includes(currency)) problems.push(`Währung ${currency} wird für Rechnungen nicht unterstützt (USD oder EUR)`);
    const kind = kindOf(get(row, 'kind'));
    const unit = str(get(row, 'unit')) || 'Stück';
    const rawQty = get(row, 'qty');
    const qty = str(rawQty) === '' ? 1 : (typeof rawQty === 'number' ? rawQty : parseNum(str(rawQty)));
    if (Number.isNaN(qty) || qty < 0) problems.push('Menge ist keine Zahl');
    const rawTax = get(row, 'taxRate');
    let taxRate = null;
    if (str(rawTax) !== '') {
      taxRate = typeof rawTax === 'number' ? rawTax : parseNum(str(rawTax).replace('%', ''));
      if (Number.isNaN(taxRate) || taxRate < 0 || taxRate > 100) { problems.push('Steuersatz ist ungültig'); taxRate = null; }
    }
    items.push({
      row: i + 2,   // Zeile in der Tabelle (1 = Überschrift)
      problems,
      service: {
        code, name, tier: tier || '',
        category: str(get(row, 'category')),
        unit,
        priceCents: Number.isNaN(price) ? 0 : toCents(price),
        currency: DOC_CURRENCIES.includes(currency) ? currency : 'EUR',
        recurring: kind == null ? /monat|jahr|quartal/i.test(unit) : kind,
        defaultQty: Number.isNaN(qty) ? 1 : qty,
        taxRate,
        invoiceText: str(get(row, 'invoiceText')),
        internalName: str(get(row, 'internalName')),
        description: str(get(row, 'description')),
        company: str(get(row, 'company')),
        active: yesNo(get(row, 'active')),
      },
    });
  });
  // Doppelte Nummern innerhalb der Datei
  const seen = new Map();
  for (const it of items) {
    const c = it.service.code;
    if (!c) continue;
    if (seen.has(c)) it.problems.push(`Nr. ${c} steht doppelt in der Datei (Zeile ${seen.get(c)})`);
    else seen.set(c, it.row);
  }
  return { items, unknownColumns, columns: map };
}

/** Datensätze für den Export in derselben Spaltenstruktur. */
export function catalogRows(services, companyName = () => '') {
  return services.map((s) => ({
    'Nr.': s.code || '',
    Name: s.name,
    Tarif: s.tier ? SERVICE_TIERS[s.tier].label : '',
    Kategorie: s.category || '',
    Einheit: s.unit || '',
    'Preis netto': (s.priceCents || 0) / 100,
    Währung: s.currency || '',
    Art: s.recurring ? 'Wiederkehrend' : 'Einmalig',
    Menge: s.defaultQty == null ? 1 : s.defaultQty,
    'Steuersatz %': s.taxRate == null || s.taxRate === '' ? '' : s.taxRate,
    Rechnungstext: s.invoiceText || '',
    'Interne Bezeichnung': s.internalName || '',
    'Interne Beschreibung': s.description || '',
    Unternehmen: companyName(s.companyId),
    Aktiv: s.active === false ? 'Nein' : 'Ja',
  }));
}
