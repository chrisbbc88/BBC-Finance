// Belegtexte zwischen Deutsch und Englisch übersetzen (Anthropic-API, eigener Key).
// Gesendet werden nur die Texte selbst – keine Beträge, keine Kundendaten außer dem, was in den Texten steht.
// Texte, die schon in der Zielsprache sind, kommen unverändert zurück; die Ausgangssprache erkennt die KI.

import { httpError } from './ai.js';

const API_URL = 'https://api.anthropic.com/v1/messages';
const LANG = { de: 'Deutsch', en: 'Englisch' };

const TOOL = {
  name: 'translations',
  description: 'Gibt die übersetzten Texte zurück, je Text mit derselben id.',
  input_schema: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            text: { type: 'string', description: 'Der Text in der Zielsprache.' },
            source: { type: 'string', enum: ['de', 'en', 'other'], description: 'Erkannte Sprache des Ausgangstextes.' },
          },
          required: ['id', 'text'],
        },
      },
    },
    required: ['items'],
  },
};

const system = (target) => `Du übersetzt Texte auf Rechnungen, Angeboten und Verträgen einer Agentur bzw. Beratung ins ${LANG[target]}.
Regeln:
- Erkenne die Sprache jedes Textes selbst. Ist er schon ${LANG[target]}, gib ihn unverändert zurück.
- Übersetze sinngemäß und geschäftlich, so wie ein Muttersprachler es auf einer Rechnung schreiben würde – kurz, ohne Zusätze.
- Unverändert lassen: Firmen-, Personen- und Produktnamen, Marken (z. B. Google Ads, Leadinfo, SEO, GEO), E-Mail-Adressen, URLs, IBAN, BIC, Steuernummern, Registerangaben, Adressen, Beträge, Zahlen, Daten und Platzhalter in geschweiften Klammern wie {number}.
- Zeilenumbrüche, Aufzählungszeichen und Leerzeilen genau beibehalten.
- Jede id genau einmal zurückgeben.`;

/** Request bauen (exportiert für Tests). texts: [{ id, text }] */
export function buildTranslateRequest({ model, texts, target }) {
  return {
    model,
    max_tokens: Math.min(8000, 400 + texts.reduce((a, t) => a + Math.ceil(t.text.length / 2), 0)),
    system: system(target),
    tools: [TOOL],
    tool_choice: { type: 'tool', name: 'translations' },
    messages: [{ role: 'user', content: `Zielsprache: ${LANG[target]}\n\n${JSON.stringify(texts.map(({ id, text }) => ({ id, text })))}` }],
  };
}

/** Antwort auswerten: { map: { id: text }, sources: { id: 'de'|'en'|'other' } }. Fehlende ids bleiben unübersetzt. */
export function parseTranslateResponse(json, texts) {
  const block = (json && json.content || []).find((b) => b.type === 'tool_use' && b.name === 'translations');
  if (!block || !block.input || !Array.isArray(block.input.items)) throw new Error('Die Übersetzung kam nicht zurück. Bitte noch einmal versuchen.');
  const known = new Set(texts.map((t) => t.id));
  const map = {};
  const sources = {};
  for (const it of block.input.items) {
    if (!it || !known.has(String(it.id)) || typeof it.text !== 'string') continue;
    map[it.id] = it.text;
    if (it.source) sources[it.id] = it.source;
  }
  return { map, sources };
}

/** Texte übersetzen. Leere Texte werden gar nicht erst gesendet. */
export async function translateTexts({ apiKey, model, texts, target }) {
  if (!apiKey) throw new Error('Für die Übersetzung braucht es den API-Key aus den Einstellungen (derselbe wie für Belege).');
  if (!LANG[target]) throw new Error('Unbekannte Zielsprache.');
  const todo = texts.filter((t) => String(t.text || '').trim());
  if (!todo.length) return { map: {}, sources: {}, count: 0 };
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify(buildTranslateRequest({ model, texts: todo, target })),
    });
  } catch (_) {
    throw new Error('Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.');
  }
  let json = null;
  try { json = await res.json(); } catch (_) { /* leer */ }
  if (!res.ok) throw new Error(httpError(res.status, json));
  const out = parseTranslateResponse(json, todo);
  return { ...out, count: Object.keys(out.map).filter((id) => out.map[id] !== (todo.find((t) => t.id === id) || {}).text).length };
}

/** Übersetzbare Texte eines Belegs bzw. einer Vorlage sammeln. */
export function docTexts(doc) {
  const t = [];
  (doc.items || []).forEach((it) => {
    if (it.name) t.push({ id: `i:${it.id}:name`, text: it.name });
    if (it.description) t.push({ id: `i:${it.id}:description`, text: it.description });
  });
  for (const k of ['title', 'intro', 'paymentTerms', 'footer']) if (doc[k]) t.push({ id: `d:${k}`, text: doc[k] });
  return t;
}

/** Übersetzungen in einen Beleg übernehmen (gibt eine Kopie zurück). */
export function applyTexts(doc, map) {
  const out = { ...doc, items: (doc.items || []).map((it) => ({ ...it })) };
  for (const [id, text] of Object.entries(map)) {
    const [kind, a, b] = id.split(':');
    if (kind === 'd' && a in out) out[a] = text;
    if (kind === 'i') { const it = out.items.find((x) => String(x.id) === a); if (it && (b === 'name' || b === 'description')) it[b] = text; }
  }
  return out;
}
