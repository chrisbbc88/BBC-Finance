// Allgemeine Hilfsfunktionen: IDs, Datumsrechnung, Zahlen-Parsing, Zeiträume.
// Keine Abhängigkeiten – läuft im Browser und in Node (Tests).

export const uid = () =>
  (globalThis.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);

export const clone = (v) => (v === undefined ? v : JSON.parse(JSON.stringify(v)));

const pad2 = (n) => String(n).padStart(2, '0');

/** Lokales Datum als YYYY-MM-DD (nicht UTC, sonst verrutscht der Tag um Mitternacht). */
export function toISODate(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
export const todayISO = () => toISODate(new Date());
export const nowISO = () => new Date().toISOString();

export function isISODate(s) {
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
}

export function parseISODate(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(iso, n) {
  const d = parseISODate(iso);
  d.setDate(d.getDate() + Number(n || 0));
  return toISODate(d);
}

/** Monate addieren; der Tag wird auf das Monatsende begrenzt (31.01. + 1 Monat = 28./29.02.). */
export function addMonths(iso, n, anchorDay) {
  const [y, m, d] = iso.split('-').map(Number);
  const day = anchorDay || d;
  const total = (m - 1) + Number(n || 0);
  const ny = y + Math.floor(total / 12);
  const nm = ((total % 12) + 12) % 12;
  const last = new Date(ny, nm + 1, 0).getDate();
  return `${ny}-${pad2(nm + 1)}-${pad2(Math.min(day, last))}`;
}

export function daysBetween(a, b) {
  const ms = parseISODate(b).getTime() - parseISODate(a).getTime();
  return Math.round(ms / 86400000);
}

export const yearOf = (iso) => Number(iso.slice(0, 4));
export const monthOf = (iso) => Number(iso.slice(5, 7));
export const monthKey = (iso) => iso.slice(0, 7);
export const quarterOf = (iso) => Math.floor((monthOf(iso) - 1) / 3) + 1;
export const quarterKey = (iso) => `${yearOf(iso)}-Q${quarterOf(iso)}`;

function monthRange(y, m0) {
  const from = `${y}-${pad2(m0 + 1)}-01`;
  const to = toISODate(new Date(y, m0 + 1, 0));
  return { from, to };
}
function quarterRange(y, q) {
  const from = `${y}-${pad2((q - 1) * 3 + 1)}-01`;
  const to = toISODate(new Date(y, q * 3, 0));
  return { from, to };
}

export const PERIODS = [
  { id: 'month', label: 'Aktueller Monat' },
  { id: 'lastMonth', label: 'Letzter Monat' },
  { id: 'quarter', label: 'Aktuelles Quartal' },
  { id: 'lastQuarter', label: 'Letztes Quartal' },
  { id: 'year', label: 'Aktuelles Jahr' },
  { id: 'lastYear', label: 'Letztes Jahr' },
  { id: 'all', label: 'Gesamter Zeitraum' },
  { id: 'custom', label: 'Frei wählbar' },
];

/** Liefert {from, to} (inklusive) für eine Zeitraum-Vorgabe. */
export function periodRange(id, today = todayISO(), custom = {}) {
  const y = yearOf(today);
  const m0 = monthOf(today) - 1;
  const q = quarterOf(today);
  switch (id) {
    case 'month': return monthRange(y, m0);
    case 'lastMonth': return m0 === 0 ? monthRange(y - 1, 11) : monthRange(y, m0 - 1);
    case 'quarter': return quarterRange(y, q);
    case 'lastQuarter': return q === 1 ? quarterRange(y - 1, 4) : quarterRange(y, q - 1);
    case 'year': return { from: `${y}-01-01`, to: `${y}-12-31` };
    case 'lastYear': return { from: `${y - 1}-01-01`, to: `${y - 1}-12-31` };
    case 'custom': return {
      from: isISODate(custom.from) ? custom.from : '0000-01-01',
      to: isISODate(custom.to) ? custom.to : '9999-12-31',
    };
    case 'all':
    default: return { from: '0000-01-01', to: '9999-12-31' };
  }
}

export const inRange = (iso, r) => !!iso && iso >= r.from && iso <= r.to;

/** Liste der Monats-Schlüssel (YYYY-MM) zwischen zwei Daten, inklusive. */
export function monthsBetween(from, to) {
  const out = [];
  let cur = from.slice(0, 7);
  const end = to.slice(0, 7);
  let guard = 0;
  while (cur <= end && guard++ < 600) {
    out.push(cur);
    const [y, m] = cur.split('-').map(Number);
    cur = m === 12 ? `${y + 1}-01` : `${y}-${pad2(m + 1)}`;
  }
  return out;
}

/** Die letzten n Monate bis einschließlich des Monats von `today`. */
export function lastMonths(n, today = todayISO()) {
  const out = [];
  for (let i = n - 1; i >= 0; i--) out.push(addMonths(today.slice(0, 7) + '-01', -i).slice(0, 7));
  return out;
}

const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
const MONTHS_DE_SHORT = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
export const monthName = (key) => `${MONTHS_DE[Number(key.slice(5, 7)) - 1]} ${key.slice(0, 4)}`;
export const monthShort = (key) => MONTHS_DE_SHORT[Number(key.slice(5, 7)) - 1];

/**
 * Zahl aus Benutzereingabe lesen. Versteht deutsche und englische Schreibweise:
 * "1.234,56" · "1,234.56" · "1234,5" · "1234.5".
 * Ein einzelner Punkt mit genau drei Ziffern dahinter ist mehrdeutig ("1.000"):
 *   – in Geldfeldern (Standard) gilt er wie im Deutschen als Tausenderpunkt → 1000,
 *     außer vor dem Punkt steht nur eine Null ("0.891" ist immer 0,891);
 *   – mit { decimalOnly: true } (Mengen, Prozente, Kurse) ist ein einzelnes Trennzeichen
 *     immer das Dezimalzeichen → 1.
 * Gibt NaN zurück, wenn die Eingabe keine Zahl ist.
 */
export function parseNum(input, opts = {}) {
  if (typeof input === 'number') return input;
  if (input == null) return NaN;
  let s = String(input).trim().replace(/[\s  '’]/g, '').replace(/[€$]/g, '');
  if (s === '') return NaN;
  let neg = false;
  if (/^\(.*\)$/.test(s)) { neg = true; s = s.slice(1, -1); }
  if (s.startsWith('-')) { neg = !neg; s = s.slice(1); }
  else if (s.startsWith('+')) s = s.slice(1);
  if (!/^[\d.,]+$/.test(s)) return NaN;
  const lastDot = s.lastIndexOf('.');
  const lastComma = s.lastIndexOf(',');
  let norm;
  if (lastDot >= 0 && lastComma >= 0) {
    const dec = lastDot > lastComma ? '.' : ',';
    const thou = dec === '.' ? ',' : '.';
    norm = s.split(thou).join('').replace(dec, '.');
  } else if (lastComma >= 0) {
    // Nur Kommas: "1,234,567" sind Tausender, sonst Dezimalkomma.
    norm = /^\d{1,3}(,\d{3}){2,}$/.test(s) ? s.split(',').join('') : s.replace(',', '.');
    if ((norm.match(/\./g) || []).length > 1) return NaN;
  } else if (lastDot >= 0) {
    // Nur Punkte: "12.500.000" sind immer Tausender. "1.000" nur in Geldfeldern; "0.891" nie.
    const dots = (s.match(/\./g) || []).length;
    const grouped = /^\d{1,3}(\.\d{3})+$/.test(s);
    const thousands = grouped && (dots > 1 || (!opts.decimalOnly && !/^0+\./.test(s)));
    norm = thousands ? s.split('.').join('') : s;
    if ((norm.match(/\./g) || []).length > 1) return NaN;
  } else {
    norm = s;
  }
  const n = Number(norm);
  if (!Number.isFinite(n)) return NaN;
  return neg ? -n : n;
}

export const norm = (s) => String(s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');

/** Volltext-Treffer: alle Suchwörter müssen in mindestens einem der Felder vorkommen. */
export function matches(query, ...fields) {
  const q = norm(query).trim();
  if (!q) return true;
  const hay = norm(fields.filter((f) => f != null).join(' \u0001 '));
  return q.split(/\s+/).every((w) => hay.includes(w));
}

export function sortBy(arr, fn, dir = 1) {
  return [...arr].sort((a, b) => {
    const x = fn(a), y = fn(b);
    if (x == null && y == null) return 0;
    if (x == null) return 1;
    if (y == null) return -1;
    if (typeof x === 'number' && typeof y === 'number') return (x - y) * dir;
    return String(x).localeCompare(String(y), 'de', { numeric: true }) * dir;
  });
}

export function groupSum(items, keyFn, valFn) {
  const map = new Map();
  for (const it of items) {
    const k = keyFn(it);
    map.set(k, (map.get(k) || 0) + valFn(it));
  }
  return map;
}

/** Felder vergleichen und nur geänderte zurückgeben – für das Audit-Log. */
export function diffFields(before, after, ignore = []) {
  const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
  const prev = {}, next = {};
  for (const k of keys) {
    if (ignore.includes(k)) continue;
    const a = before ? before[k] : undefined;
    const b = after ? after[k] : undefined;
    if (JSON.stringify(a ?? null) !== JSON.stringify(b ?? null)) {
      prev[k] = a ?? null;
      next[k] = b ?? null;
    }
  }
  return { prev, next, changed: Object.keys(next) };
}

export function safeFileName(s) {
  return String(s || '')
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 150)
    .replace(/[. ]+$/, '');   // kein Punkt vor der Dateiendung („Acme Ltd..pdf“)
}

export function fileSize(bytes) {
  if (bytes == null) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1).replace('.', ',')} MB`;
}

export function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}
