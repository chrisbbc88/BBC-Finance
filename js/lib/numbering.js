// Belegnummern: Muster mit Platzhaltern, eigener Zähler je Unternehmen, Belegart und Zeitraum.

export const PLACEHOLDERS = ['{COMPANY}', '{YEAR}', '{MONTH}', '{NUMBER}'];

export const KINDS = {
  invoice: { prefix: 'invoicePrefix', pattern: 'invoicePattern', label: 'Rechnung' },
  quote: { prefix: 'quotePrefix', pattern: 'quotePattern', label: 'Angebot' },
  credit: { prefix: 'creditPrefix', pattern: 'creditPattern', label: 'Gutschrift' },
};

export function validatePattern(pattern) {
  const p = String(pattern || '');
  if (!p.includes('{NUMBER}')) return 'Das Muster braucht den Platzhalter {NUMBER}.';
  const unknown = (p.match(/\{[^}]*\}/g) || []).filter((t) => !PLACEHOLDERS.includes(t));
  if (unknown.length) return `Unbekannter Platzhalter: ${unknown.join(', ')}`;
  if ((p.match(/\{NUMBER\}/g) || []).length > 1) return '{NUMBER} darf nur einmal vorkommen.';
  return '';
}

/** Der Zähler beginnt neu, sobald Jahr bzw. Monat im Muster vorkommen und wechseln. */
export function scopeOf(pattern, dateISO) {
  const p = String(pattern || '');
  const y = dateISO.slice(0, 4);
  const m = dateISO.slice(5, 7);
  if (p.includes('{MONTH}')) return p.includes('{YEAR}') ? `${y}-${m}` : `M${m}-${y}`;
  if (p.includes('{YEAR}')) return y;
  return 'all';
}

export function counterKey(companyId, kind, pattern, dateISO) {
  return `${companyId}:${kind}:${scopeOf(pattern, dateISO)}`;
}

export function formatNumber(pattern, { prefix, dateISO, n, digits }) {
  const d = Math.min(Math.max(Number(digits) || 3, 1), 10);
  const values = {
    '{COMPANY}': String(prefix || '').trim(),
    '{YEAR}': dateISO.slice(0, 4),
    '{MONTH}': dateISO.slice(5, 7),
    '{NUMBER}': String(n).padStart(d, '0'),
  };
  // Ein Durchlauf mit Funktions-Ersetzung: Zeichen wie „$“ oder Platzhalter im Präfix bleiben wörtlich.
  return String(pattern)
    .replace(/\{(COMPANY|YEAR|MONTH|NUMBER)\}/g, (m) => values[m])
    .replace(/\s+/g, ' ')
    .trim();
}

export function numberingOf(company, kind) {
  const k = KINDS[kind];
  // Gutschriften ohne eigenes Präfix nutzen das Rechnungspräfix mit Zusatz „GS“.
  let prefix = company[k.prefix];
  if (kind === 'credit' && !String(prefix || '').trim()) {
    prefix = `${String(company.invoicePrefix || '').trim()} GS`.trim();
  }
  if (kind === 'quote' && !String(prefix || '').trim()) {
    prefix = `${String(company.invoicePrefix || '').trim()} A`.trim();
  }
  return {
    prefix,
    pattern: company[k.pattern] || '{COMPANY} {YEAR} {NUMBER}',
    digits: company.numberDigits || 3,
  };
}

/**
 * Nächste freie Nummer bestimmen.
 * `last` ist der zuletzt vergebene Zählerstand, `isTaken(number)` prüft auf Duplikate
 * (darf synchron oder asynchron sein).
 */
export async function nextNumber(company, kind, dateISO, last, isTaken) {
  const { prefix, pattern, digits } = numberingOf(company, kind);
  const err = validatePattern(pattern);
  if (err) throw new Error(err);
  let n = Number(last) || 0;
  for (let tries = 0; tries < 100000; tries++) {
    n += 1;
    const number = formatNumber(pattern, { prefix, dateISO, n, digits });
    // eslint-disable-next-line no-await-in-loop
    if (!(await isTaken(number))) return { number, n };
  }
  throw new Error('Es konnte keine freie Belegnummer gefunden werden.');
}
