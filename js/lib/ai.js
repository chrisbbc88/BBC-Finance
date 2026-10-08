// KI-Belegerkennung über die Anthropic-API, direkt aus dem Browser.
// Der API-Key liegt nur in den Einstellungen dieses Browsers. Der Beleg wird ausschließlich
// an api.anthropic.com gesendet; die Antwort kommt als strukturierter Tool-Aufruf zurück.

import { blobToBase64, imageForAI } from './files.js';
import { toCents } from './calc.js';
import { isISODate } from './util.js';
import { EXPENSE_CURRENCIES } from './schema.js';

const API_URL = 'https://api.anthropic.com/v1/messages';

export class AIError extends Error {}

function tool(categories, paymentMethods) {
  return {
    name: 'record_receipt',
    description: 'Erfasst die aus einem Beleg (Rechnung, Quittung, Kassenbon) gelesenen Angaben.',
    input_schema: {
      type: 'object',
      properties: {
        is_receipt: { type: 'boolean', description: 'false, wenn das Dokument kein Beleg über eine Ausgabe ist oder unlesbar ist.' },
        vendor: { type: 'string', description: 'Name des Lieferanten bzw. Händlers, wie er auf dem Beleg steht.' },
        description: { type: 'string', description: 'Kurze Beschreibung der gekauften Leistung oder Ware in der Sprache des Belegs, höchstens 120 Zeichen.' },
        invoice_number: { type: 'string', description: 'Rechnungs- oder Belegnummer. Leer, wenn keine erkennbar ist.' },
        invoice_date: { type: 'string', description: 'Rechnungs- bzw. Belegdatum im Format YYYY-MM-DD. Leer, wenn nicht erkennbar.' },
        payment_date: { type: 'string', description: 'Zahlungsdatum im Format YYYY-MM-DD, nur wenn der Beleg die Zahlung ausdrücklich ausweist. Sonst leer.' },
        currency: { type: 'string', description: 'ISO-4217-Code der Belegwährung, z. B. USD, EUR, AED.' },
        net_amount: { type: 'number', description: 'Nettobetrag ohne Steuer in der Belegwährung.' },
        tax_amount: { type: 'number', description: 'Ausgewiesener Steuerbetrag (USt, VAT, Sales Tax). 0, wenn keine Steuer ausgewiesen ist.' },
        total_amount: { type: 'number', description: 'Gesamtbetrag inklusive Steuer in der Belegwährung.' },
        payment_method: { type: 'string', enum: [...paymentMethods, ''], description: 'Zahlungsart, nur wenn auf dem Beleg erkennbar. Sonst leer.' },
        category: { type: 'string', enum: categories, description: 'Am besten passende Ausgabenkategorie.' },
        uncertain_fields: {
          type: 'array', items: { type: 'string' },
          description: 'Namen der Felder, bei denen die Angabe unsicher oder geschätzt ist.',
        },
      },
      required: ['is_receipt', 'vendor', 'currency', 'net_amount', 'tax_amount', 'total_amount', 'category'],
    },
  };
}

const PROMPT = `Lies diesen Beleg und trage die Angaben über das Tool record_receipt ein.

Regeln:
- Übernimm nur, was auf dem Beleg steht. Rate keine Werte. Ist ein Feld nicht erkennbar, lass es leer und nenne es in uncertain_fields.
- Beträge als Zahl mit Punkt als Dezimaltrenner, ohne Währungszeichen.
- Weist der Beleg keine Steuer aus, ist tax_amount 0 und net_amount gleich total_amount.
- net_amount + tax_amount muss total_amount ergeben. Trinkgeld und Gebühren gehören zum Gesamtbetrag.
- Datumsangaben immer als YYYY-MM-DD. Bei mehrdeutigen Formaten (03/04/2026) entscheide nach Land und Sprache des Belegs und nenne das Feld in uncertain_fields.
- Ist das Dokument kein Beleg oder nicht lesbar, setze is_receipt auf false.`;

/** Baut den Request (exportiert für Tests). */
export function buildRequest({ model, base64, mime, categories, paymentMethods }) {
  const source = { type: 'base64', media_type: mime, data: base64 };
  const fileBlock = mime === 'application/pdf'
    ? { type: 'document', source }
    : { type: 'image', source };
  return {
    model,
    max_tokens: 1024,
    tools: [tool(categories, paymentMethods)],
    tool_choice: { type: 'tool', name: 'record_receipt' },
    messages: [{ role: 'user', content: [fileBlock, { type: 'text', text: PROMPT }] }],
  };
}

const str = (v) => (typeof v === 'string' ? v.trim() : '');
const amount = (v) => (Number.isFinite(Number(v)) ? toCents(Number(v)) : 0);

/** Wandelt die Tool-Antwort in Felder einer Ausgabe um (exportiert für Tests). */
export function parseResponse(json, { categories, paymentMethods }) {
  const block = json && Array.isArray(json.content) ? json.content.find((b) => b.type === 'tool_use') : null;
  if (!block || !block.input || typeof block.input !== 'object') {
    throw new AIError('Die KI hat keine auswertbare Antwort geliefert. Bitte noch einmal versuchen.');
  }
  const r = block.input;
  if (r.is_receipt === false) {
    throw new AIError('Auf dieser Datei wurde kein lesbarer Beleg erkannt. Bitte die Angaben von Hand eintragen.');
  }
  const warnings = [];
  let currency = str(r.currency).toUpperCase();
  if (!EXPENSE_CURRENCIES.includes(currency)) {
    if (currency) warnings.push(`Die Währung ${currency} wird nicht unterstützt – bitte Währung und Beträge prüfen.`);
    currency = '';
  }
  let netCents = amount(r.net_amount);
  let taxCents = amount(r.tax_amount);
  const totalCents = amount(r.total_amount);
  if (totalCents && netCents + taxCents !== totalCents) {
    if (!netCents && taxCents <= totalCents) netCents = totalCents - taxCents;
    else if (Math.abs(netCents + taxCents - totalCents) <= 2) netCents = totalCents - taxCents;
    else warnings.push('Netto und Steuer ergeben nicht den Gesamtbetrag – bitte die Beträge prüfen.');
  }
  const invoiceDate = isISODate(str(r.invoice_date)) ? str(r.invoice_date) : '';
  if (!invoiceDate) warnings.push('Das Belegdatum wurde nicht erkannt.');
  const paymentDate = isISODate(str(r.payment_date)) ? str(r.payment_date) : '';
  const uncertain = Array.isArray(r.uncertain_fields) ? r.uncertain_fields.map(String) : [];
  return {
    fields: {
      vendor: str(r.vendor).slice(0, 200),
      description: str(r.description).slice(0, 300),
      invoiceNumber: str(r.invoice_number).slice(0, 80),
      invoiceDate,
      paymentDate,
      currency,
      netCents, taxCents,
      totalCents: totalCents || netCents + taxCents,
      paymentMethod: paymentMethods.includes(str(r.payment_method)) ? str(r.payment_method) : '',
      category: categories.includes(str(r.category)) ? str(r.category) : '',
    },
    uncertain,
    warnings,
    usage: json.usage || null,
  };
}

function httpError(status, body) {
  const detail = body && body.error && body.error.message ? ` (${body.error.message})` : '';
  if (status === 401) return 'Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.';
  if (status === 403) return `Der API-Key darf diese Anfrage nicht ausführen${detail}.`;
  if (status === 404) return `Das eingestellte KI-Modell wurde nicht gefunden. Bitte in den Einstellungen prüfen${detail}.`;
  if (status === 413) return 'Die Datei ist zu groß für die KI-Erkennung.';
  if (status === 429) return 'Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.';
  if (status === 529 || status >= 500) return 'Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.';
  return `Die KI-Erkennung ist fehlgeschlagen${detail || ` (HTTP ${status})`}.`;
}

/**
 * Liest einen Beleg aus.
 * @returns {{fields, uncertain, warnings, usage}}
 */
export async function extractReceipt(blob, { apiKey, model, categories, paymentMethods }) {
  if (!apiKey) throw new AIError('Für die KI-Erkennung fehlt der API-Key. Du kannst ihn in den Einstellungen eintragen.');
  let payloadBlob = blob;
  let mime = blob.type;
  if (mime !== 'application/pdf') {
    payloadBlob = await imageForAI(blob);
    mime = 'image/jpeg';
  }
  const base64 = await blobToBase64(payloadBlob);
  const body = buildRequest({ model, base64, mime, categories, paymentMethods });
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new AIError('Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.');
  }
  let json = null;
  try { json = await res.json(); } catch (_) { /* leerer Body */ }
  if (!res.ok) throw new AIError(httpError(res.status, json));
  return parseResponse(json, { categories, paymentMethods });
}

/** Kurzer Verbindungstest für die Einstellungen. */
export async function testConnection({ apiKey, model }) {
  if (!apiKey) throw new AIError('Bitte zuerst einen API-Key eintragen.');
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({ model, max_tokens: 8, messages: [{ role: 'user', content: 'Antworte nur mit: OK' }] }),
    });
  } catch (err) {
    throw new AIError('Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.');
  }
  let json = null;
  try { json = await res.json(); } catch (_) { /* leer */ }
  if (!res.ok) throw new AIError(httpError(res.status, json));
  return true;
}
