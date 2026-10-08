// Wechselkurse. Quelle ist die Frankfurter-API (Referenzkurse der Zentralbanken, kostenlos,
// ohne API-Key); fällt sie aus, wird open.er-api.com versucht. Ein geladener Kurs wird
// gespeichert, damit ein Dokument immer denselben Kurs zeigt.

import { todayISO, nowISO } from './util.js';
import { all, write } from './store.js';

const TIMEOUT_MS = 8000;

async function getJSON(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

const valid = (r) => Number.isFinite(Number(r)) && Number(r) > 0;

/** Antworten der Anbieter in eine einheitliche Form bringen (exportiert für Tests). */
export const parsers = {
  frankfurterV2(json, base, quote) {
    if (!json || !valid(json.rate)) throw new Error('Unerwartete Antwort');
    return { rate: Number(json.rate), date: json.date || null, source: 'Frankfurter (Zentralbank-Referenzkurse)' };
  },
  frankfurterV1(json, base, quote) {
    const r = json && json.rates && json.rates[quote];
    if (!valid(r)) throw new Error('Unerwartete Antwort');
    return { rate: Number(r), date: json.date || null, source: 'Frankfurter (EZB-Referenzkurse)' };
  },
  erApi(json, base, quote) {
    const r = json && json.result === 'success' && json.rates && json.rates[quote];
    if (!valid(r)) throw new Error('Unerwartete Antwort');
    const date = json.time_last_update_unix
      ? new Date(json.time_last_update_unix * 1000).toISOString().slice(0, 10)
      : null;
    return { rate: Number(r), date, source: 'ExchangeRate-API (open.er-api.com)' };
  },
};

function providers(base, quote, dateISO) {
  const historic = dateISO && dateISO < todayISO();
  const list = [
    {
      url: `https://api.frankfurter.dev/v2/rate/${base}/${quote}${historic ? `?date=${dateISO}` : ''}`,
      parse: parsers.frankfurterV2,
    },
    {
      url: `https://api.frankfurter.dev/v1/${historic ? dateISO : 'latest'}?base=${base}&symbols=${quote}`,
      parse: parsers.frankfurterV1,
    },
  ];
  // Der Ausweich-Anbieter kennt nur den aktuellen Kurs.
  if (!historic) list.push({ url: `https://open.er-api.com/v6/latest/${base}`, parse: parsers.erApi });
  return list;
}

/**
 * Kurs 1 base = x quote laden. dateISO in der Vergangenheit → historischer Kurs dieses Tages.
 * Ergebnis: { base, quote, rate, date, fetchedAt, source, requestedDate }
 */
export async function fetchRate(base, quote, dateISO) {
  if (base === quote) {
    return { base, quote, rate: 1, date: dateISO || todayISO(), fetchedAt: nowISO(), source: 'gleiche Währung' };
  }
  const wanted = dateISO && dateISO < todayISO() ? dateISO : todayISO();
  const hit = cachedRate(base, quote, wanted);
  if (hit) return hit;

  let lastErr = null;
  for (const p of providers(base, quote, dateISO)) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const json = await getJSON(p.url);
      const parsed = p.parse(json, base, quote);
      const row = {
        id: `${base}_${quote}_${wanted}`,
        base, quote,
        rate: parsed.rate,
        date: parsed.date || wanted,
        requestedDate: wanted,
        fetchedAt: nowISO(),
        source: parsed.source,
      };
      // eslint-disable-next-line no-await-in-loop
      await write((w) => w.put('rates', row)).catch(() => {});
      return row;
    } catch (err) {
      lastErr = err;
    }
  }
  const e = new Error('Der Wechselkurs konnte nicht geladen werden. Bitte Internetverbindung prüfen oder den Kurs von Hand eintragen.');
  e.cause = lastErr;
  throw e;
}

/** Für welchen Tag wird der Kurs gebraucht? Vergangene Belegdaten: dieser Tag, sonst heute. */
export function wantedRateDate(dateISO) {
  const today = todayISO();
  return dateISO && dateISO < today ? dateISO : today;
}

/** Heute bereits geladener Kurs (für historische Tage unbegrenzt gültig). */
export function cachedRate(base, quote, wantedDate) {
  const id = `${base}_${quote}_${wantedDate}`;
  const row = all('rates').find((r) => r.id === id);
  if (!row) return null;
  if (wantedDate === todayISO()) {
    // Tageskurs höchstens 6 Stunden wiederverwenden.
    const age = Date.now() - new Date(row.fetchedAt).getTime();
    if (age > 6 * 3600 * 1000) return null;
  }
  return row;
}

/** Zuletzt bekannter Kurs – als Notlösung ohne Internet, klar als solcher gekennzeichnet. */
export function lastKnownRate(base, quote) {
  const rows = all('rates').filter((r) => r.base === base && r.quote === quote);
  if (!rows.length) return null;
  return rows.sort((a, b) => (a.fetchedAt < b.fetchedAt ? 1 : -1))[0];
}

/**
 * Kurs für ein Dokument: liefert { usdToEur, rateToUSD, date, fetchedAt, source, manual:false }.
 * Für USD und EUR genügt der Kurs USD→EUR, andere Währungen (Ausgaben) brauchen zusätzlich Währung→USD.
 */
export async function fxFor(currency, dateISO) {
  const usdEur = await fetchRate('USD', 'EUR', dateISO);
  let rateToUSD = 1;
  let source = usdEur.source;
  if (currency === 'EUR') rateToUSD = 1 / usdEur.rate;
  else if (currency !== 'USD') {
    const r = await fetchRate(currency, 'USD', dateISO);
    rateToUSD = r.rate;
    source = r.source;
  }
  return {
    rateToUSD,
    usdToEur: usdEur.rate,
    date: usdEur.date,
    forDate: wantedRateDate(dateISO),
    forCurrency: currency,
    fetchedAt: usdEur.fetchedAt,
    source,
    manual: false,
  };
}
