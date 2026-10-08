// Rechenkern für Rechnungen, Angebote und Gutschriften.
// Alle Geldbeträge sind ganze Cent-Beträge (Integer). Zwischenrechnungen laufen
// über BigInt, damit Menge × Preis × Rabatt ohne Gleitkomma-Fehler gerundet wird.

/** Kaufmännisch runden (halbe Einheiten weg von null) bei ganzzahliger Division. */
export function roundDiv(num, den) {
  let n = BigInt(num);
  let d = BigInt(den);
  if (d < 0n) { n = -n; d = -d; }
  const neg = n < 0n;
  if (neg) n = -n;
  const q = (2n * n + d) / (2n * d);
  return Number(neg ? -q : q);
}

/** Skaliert eine Dezimalzahl auf ganze Einheiten (kaufmännisch, halbe weg von null). */
function scaleInt(value, factor) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  // Über toFixed glätten, damit 1.005 × 100 nicht als 100.4999… abgerundet wird.
  const scaled = Number((Math.abs(n) * factor).toFixed(4));
  const r = Math.round(scaled);
  return n < 0 ? -r : r;
}

export const toCents = (amount) => scaleInt(amount, 100);
export const fromCents = (cents) => (Number(cents) || 0) / 100;

const qtyMilli = (q) => scaleInt(q, 1000);   // Menge mit bis zu 3 Nachkommastellen
const pctBp = (p) => scaleInt(p, 100);       // Prozent → Basispunkte
const rateMilli = (r) => scaleInt(r, 1000);  // Prozent → Tausendstel-Prozent

/** Betrag einer Position in Cent: Menge × Einzelpreis, abzüglich Positionsrabatt. */
export function lineTotalCents(item) {
  const q = qtyMilli(item.qty);
  const p = Math.round(Number(item.priceCents) || 0);
  const disc = Math.min(Math.max(pctBp(item.discountPct), 0), 10000);
  return roundDiv(BigInt(q) * BigInt(p) * BigInt(10000 - disc), 1000n * 10000n);
}

/**
 * Verteilt `total` proportional auf `weights`; die Summe der Teile ist exakt `total`.
 * Die Gewichte dürfen gemischte Vorzeichen haben (z. B. eine Abzugsposition): jeder Teil ist
 * total × wᵢ / Σw, gerundet nach dem Verfahren der größten Reste.
 * Ist Σw = 0, gibt es kein Verhältnis – dann wird nach Beträgen verteilt.
 */
export function allocate(total, weights) {
  if (!weights.length) return [];
  const T = BigInt(Math.round(total));
  let ws = weights.map((w) => BigInt(Math.round(w)));
  let sum = ws.reduce((a, w) => a + w, 0n);
  if (sum === 0n) {
    ws = ws.map((w) => (w < 0n ? -w : w));
    sum = ws.reduce((a, w) => a + w, 0n);
    if (sum === 0n) {
      const out = weights.map(() => 0);
      out[0] = Number(T);
      return out;
    }
  }
  // Auf einen nicht negativen Betrag und eine positive Gewichtssumme normieren. So ist das Ergebnis
  // spiegelbildlich: allocate(−T, w) = −allocate(T, w) – wichtig für Gutschriften.
  const abs = (x) => (x < 0n ? -x : x);
  const den = abs(sum);
  const wn = sum < 0n ? ws.map((w) => -w) : ws;
  const Tn = abs(T);
  const floors = [];
  const rems = [];
  wn.forEach((w, i) => {
    const num = Tn * w;
    let q = num / den;
    let r = num % den;
    if (r < 0n) { q -= 1n; r += den; }   // Richtung −∞ teilen, Rest immer 0 ≤ r < den
    floors.push(q);
    rems.push({ i, r });
  });
  let rest = Tn - floors.reduce((a, q) => a + q, 0n);
  rems.sort((x, y) => (x.r === y.r ? x.i - y.i : (x.r > y.r ? -1 : 1)));
  for (let k = 0; rest > 0n && k < rems.length; k++, rest -= 1n) floors[rems[k].i] += 1n;
  if (T < 0n) return floors.map((q) => Number(-q) || 0);
  return floors.map((q) => Number(q) || 0);   // || 0 vermeidet -0
}

/**
 * Berechnet alle Summen eines Dokuments.
 * doc.items[]: { qty, priceCents, discountPct, taxRate }
 * doc.discount: { type: 'pct' | 'abs', value }  (value: Prozent bzw. Cent)
 * Preise sind Nettopreise; Steuer wird je Steuersatz auf den rabattierten Nettobetrag gerechnet.
 */
export function computeTotals(doc) {
  const items = (doc.items || []).filter((it) => !it.isText);
  const lines = items.map((it) => ({
    id: it.id,
    taxRate: Number(it.taxRate) || 0,
    cents: lineTotalCents(it),
  }));
  const subtotalCents = lines.reduce((a, l) => a + l.cents, 0);

  // Dokumentrabatt
  let discountCents = 0;
  const disc = doc.discount || {};
  const dv = Number(disc.value) || 0;
  if (dv > 0) {
    if (disc.type === 'abs') {
      discountCents = Math.round(dv);
      // Ein absoluter Rabatt darf den Betrag nicht über null hinaus drehen.
      if (subtotalCents >= 0) discountCents = Math.min(discountCents, subtotalCents);
      else discountCents = -Math.min(discountCents, -subtotalCents);
    } else {
      const bp = Math.min(pctBp(dv), 10000);
      discountCents = roundDiv(BigInt(subtotalCents) * BigInt(bp), 10000n);
    }
  }

  // Nach Steuersatz gruppieren
  const groupMap = new Map();
  for (const l of lines) {
    const key = rateMilli(l.taxRate);
    const g = groupMap.get(key) || { rate: l.taxRate, rateMilli: key, subtotalCents: 0 };
    g.subtotalCents += l.cents;
    groupMap.set(key, g);
  }
  const groups = [...groupMap.values()].sort((a, b) => a.rateMilli - b.rateMilli);
  const shares = allocate(discountCents, groups.map((g) => g.subtotalCents));
  let taxCents = 0;
  groups.forEach((g, i) => {
    g.discountCents = shares[i] || 0;
    g.netCents = g.subtotalCents - g.discountCents;
    g.taxCents = roundDiv(BigInt(g.netCents) * BigInt(g.rateMilli), 100000n);
    taxCents += g.taxCents;
  });

  // Dokumentrabatt je Steuergruppe auf die Positionen verteilen (für Auswertungen nach Leistung).
  for (const g of groups) {
    const mine = lines.filter((l) => rateMilli(l.taxRate) === g.rateMilli);
    const parts = allocate(g.discountCents, mine.map((l) => l.cents));
    mine.forEach((l, i) => { l.netCents = l.cents - (parts[i] || 0); });
  }

  const netCents = subtotalCents - discountCents;
  return {
    lines,
    subtotalCents,
    discountCents,
    netCents,
    taxCents,
    totalCents: netCents + taxCents,
    taxGroups: groups.map((g) => ({
      rate: g.rate, netCents: g.netCents, taxCents: g.taxCents,
    })),
  };
}

/* ---------- Währungsumrechnung ---------- */

/**
 * fx-Objekt eines Dokuments:
 *   { rateToUSD, usdToEur, date, fetchedAt, source, manual }
 * rateToUSD: 1 Einheit der Dokumentwährung in USD (USD-Dokument: 1)
 * usdToEur:  1 USD in EUR
 */
const roundHalfAway = (x) => {
  const r = Math.round(Math.abs(x));
  return (x < 0 ? -r : r) || 0;
};

/** 1 Einheit der Währung in USD. Für USD und EUR zählt allein der Kurs USD→EUR. */
export function usdPerUnit(currency, fx) {
  if (currency === 'USD') return 1;
  if (!fx) return null;
  if (currency === 'EUR') {
    const r = Number(fx.usdToEur);
    return Number.isFinite(r) && r > 0 ? 1 / r : null;
  }
  const v = Number(fx.rateToUSD);
  return Number.isFinite(v) && v > 0 ? v : null;
}

export function convertCents(cents, currency, target, fx) {
  if (currency === target) return cents;
  if (!fx) return null;
  const r = Number(fx.usdToEur);
  const hasEur = Number.isFinite(r) && r > 0;
  // USD ↔ EUR direkt über den einen gespeicherten Kurs – so kann rateToUSD nie davon abweichen.
  if (currency === 'USD' && target === 'EUR') return hasEur ? roundHalfAway(cents * r) : null;
  if (currency === 'EUR' && target === 'USD') return hasEur ? roundHalfAway(cents / r) : null;
  const perUnit = usdPerUnit(currency, fx);
  if (perUnit == null) return null;
  const usd = cents * perUnit;
  if (target === 'USD') return roundHalfAway(usd);
  if (target === 'EUR') return hasEur ? roundHalfAway(usd * r) : null;
  return null;
}

export const toUSD = (cents, currency, fx) => convertCents(cents, currency, 'USD', fx);
export const toEUR = (cents, currency, fx) => convertCents(cents, currency, 'EUR', fx);

/** Baut das fx-Objekt für ein Dokument in USD oder EUR aus dem Kurs 1 USD = x EUR. */
export function fxForDoc(currency, usdToEur, meta = {}) {
  const r = Number(usdToEur);
  if (!Number.isFinite(r) || r <= 0) return null;
  return {
    rateToUSD: currency === 'USD' ? 1 : (currency === 'EUR' ? 1 / r : Number(meta.rateToUSD) || null),
    usdToEur: r,
    date: meta.date || null,
    forDate: meta.forDate || null,
    forCurrency: currency,
    fetchedAt: meta.fetchedAt || null,
    source: meta.source || '',
    manual: !!meta.manual,
  };
}

/* ---------- Status ---------- */

export const sumPayments = (payments) => (payments || []).reduce((a, p) => a + (Number(p.amountCents) || 0), 0);

/**
 * Angezeigter Rechnungsstatus. Gespeichert werden nur die Grundzustände
 * (draft, issued, sent, cancelled, credited); bezahlt/teilbezahlt/überfällig
 * ergeben sich aus Zahlungen und Fälligkeit und können so nie veralten.
 */
export function invoiceStatus(inv, payments, today) {
  if (inv.type === 'credit_note') return inv.status === 'draft' ? 'draft' : 'credit_note';
  if (inv.status === 'draft' || inv.status === 'cancelled' || inv.status === 'credited') return inv.status;
  const total = inv.totals ? inv.totals.totalCents : 0;
  const paid = sumPayments(payments);
  if (paid >= total) return 'paid';
  if (inv.dueDate && today && inv.dueDate < today) return 'overdue';
  if (paid > 0) return 'partial';
  return inv.status === 'sent' ? 'sent' : 'issued';
}

/** Offener Betrag in Cent (Bruttobetrag minus Zahlungen); 0 bei Entwurf, Storno, Gutschrift. */
export function openCents(inv, payments) {
  if (inv.type === 'credit_note') return 0;
  if (['draft', 'cancelled', 'credited'].includes(inv.status)) return 0;
  const total = inv.totals ? inv.totals.totalCents : 0;
  return Math.max(total - sumPayments(payments), 0);
}

/** Zählt die Rechnung zum Umsatz? Entwürfe und Stornos nicht; Gutschriften mit negativem Betrag. */
export const countsAsRevenue = (inv) => inv.status !== 'draft' && inv.status !== 'cancelled';

export function quoteStatus(q, today) {
  if (['draft', 'accepted', 'declined', 'invoiced'].includes(q.status)) return q.status;
  if (q.validUntil && today && q.validUntil < today) return 'expired';
  return q.status === 'sent' ? 'sent' : 'open';
}
