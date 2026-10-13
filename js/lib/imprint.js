// Kontaktdaten aus einem Impressum übernehmen.
// parseImprint: lokal, ohne KI – erkennt die üblichen Angaben eines deutschsprachigen (oder englischen) Impressums.
// extractContactAI: mit API-Key über die Anthropic-API – aus eingefügtem Text oder direkt von einer Website-Adresse.

const LEGAL_FORM = /\b(GmbH\s*&\s*Co\.?\s*KG|GmbH|gGmbH|mbH|AG|SE|UG(?:\s*\(haftungsbeschränkt\))?|KG|OHG|GbR|PartG(?:\s*mbB)?|e\.\s?K\.?|e\.\s?Kfm\.?|e\.\s?V\.?|e\.\s?U\.?|Ltd\.?|LLC|L\.L\.C\.|FZ-LLC|FZE|FZCO|Inc\.?|Corp\.?|S\.?A\.?|S\.?L\.?|B\.?V\.?|Sàrl|Sarl)(?=$|[\s,.)])/;
const SKIP = /^(impressum|imprint|legal notice|angaben gem(ä|ae)ß|angaben nach|informationen gem(ä|ae)ß|anbieter|kontakt|contact|anschrift|adresse|address|postanschrift|diensteanbieter|herausgeber|betreiber|verantwortlich|inhaltlich verantwortlich|haftung|haftungsausschluss|disclaimer|urheberrecht|datenschutz)\b/i;
const COUNTRIES = {
  deutschland: 'Deutschland', germany: 'Deutschland', österreich: 'Österreich', oesterreich: 'Österreich', austria: 'Österreich',
  schweiz: 'Schweiz', switzerland: 'Schweiz', suisse: 'Schweiz', liechtenstein: 'Liechtenstein', luxemburg: 'Luxemburg', luxembourg: 'Luxemburg',
  niederlande: 'Niederlande', netherlands: 'Niederlande', belgien: 'Belgien', belgium: 'Belgien', frankreich: 'Frankreich', france: 'Frankreich',
  italien: 'Italien', italy: 'Italien', spanien: 'Spanien', spain: 'Spanien', 'vereinigte arabische emirate': 'Vereinigte Arabische Emirate',
  'united arab emirates': 'Vereinigte Arabische Emirate', uae: 'Vereinigte Arabische Emirate', 'united kingdom': 'Vereinigtes Königreich',
  usa: 'USA', 'united states': 'USA',
};
const PREFIX_COUNTRY = { D: 'Deutschland', DE: 'Deutschland', A: 'Österreich', AT: 'Österreich', CH: 'Schweiz' };

const clean = (s) => String(s || '').replace(/[   ]/g, ' ').replace(/[ \t]+/g, ' ').trim();
const afterLabel = (line, label) => clean(line.replace(label, '').replace(/^[\s:.\-–—]+/, ''));

/** Name „Dr. Max Mustermann“ → Vor- und Nachname (Titel bleiben beim Vornamen weg). */
export function splitName(full) {
  const name = clean(full).replace(/\s*\(.*?\)\s*/g, ' ').replace(/^(herr|frau|mr\.?|mrs\.?|ms\.?)\s+/i, '').trim();
  const parts = name.split(/\s+/).filter((p) => !/^(dr\.?|prof\.?|dipl\.?-?\w*\.?|mag\.?|ing\.?|med\.?|rer\.?|nat\.?)$/i.test(p));
  if (!parts.length) return { firstName: '', lastName: '' };
  if (parts.length === 1) return { firstName: '', lastName: parts[0] };
  const particles = /^(von|van|de|der|den|zu|zur|vom|del|la)$/i;
  let i = parts.length - 1;
  while (i > 1 && particles.test(parts[i - 1])) i -= 1;
  return { firstName: parts.slice(0, i).join(' '), lastName: parts.slice(i).join(' ') };
}

/** Erster Name aus „Max Mustermann, Erika Musterfrau und …“. */
const firstPerson = (s) => clean(String(s).split(/,|;|\s+und\s+|\s+and\s+|\s+&\s+|\s+sowie\s+/i)[0]).replace(/[.,;:]+$/, '');

/**
 * Liest die Kontaktdaten aus einem eingefügten Impressum.
 * Ergebnis: { fields: { company, firstName, lastName, street, houseNo, zip, city, country, email, phone, website, taxId, vatId }, extra: [Zeilen für die Notiz] }
 * Nur Gefundenes wird gesetzt; nichts wird geraten.
 */
export function parseImprint(input) {
  const text = String(input || '').replace(/\r/g, '');
  const lines = text.split('\n').map(clean).filter(Boolean);
  const f = {};
  const extra = [];
  const flat = lines.join('\n');

  // E-Mail (auch „name [at] firma [dot] de“)
  const deobf = flat.replace(/\s*[[(]\s*(at|ät)\s*[\])]\s*/gi, '@').replace(/\s*[[(]\s*(dot|punkt)\s*[\])]\s*/gi, '.');
  const mail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.exec(deobf);
  if (mail) f.email = mail[0].toLowerCase();

  // Website
  const web = /\b(?:https?:\/\/)?(?:www\.)[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^\s]*)?/i.exec(flat) || /\bhttps?:\/\/[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*/i.exec(flat);
  if (web) f.website = web[0].replace(/[.,;)]+$/, '');
  else if (f.email && !/@(gmail|gmx|web|yahoo|outlook|hotmail|t-online|icloud|me|aol|freenet|posteo)\./i.test(f.email)) f.website = `www.${f.email.split('@')[1]}`;

  lines.forEach((line, idx) => {
    const next = lines[idx + 1] || '';
    // Telefon (nicht Fax)
    if (!f.phone && /^(tel(efon)?|phone|fon|mobil|mobile|handy|t)\b\.?\s*[:.]?/i.test(line) && !/fax/i.test(line.split(/[:]/)[0])) {
      const m = /(\+?\(?\d[\d\s()/.\-–]{5,}\d)/.exec(line);
      if (m) f.phone = clean(m[1]).replace(/–/g, '-');
    }
    // USt-IdNr. / VAT
    if (!f.vatId && /(ust[\s.-]*id|umsatzsteuer[\s-]*identifikations|umsatzsteuer-id|vat\s*(id|no|number|reg)|uid[\s-]*(nr|nummer)?|mwst|trn\b|tax registration number)/i.test(line)) {
      const vatRe = /\b(DE\s?\d{9}|ATU\s?\d{8}|CHE[-\s]?\d{3}\.?\d{3}\.?\d{3}(?:\s?(?:MWST|TVA|IVA))?|[A-Z]{2}\s?[0-9A-Z]{8,12}|\d{15})\b/;
      // Wert in derselben Zeile – oder, wenn die Zeile nur die Beschriftung ist, in der nächsten
      const m = vatRe.exec(line.replace(/^[^:]*:\s*/, '')) || (/:\s*$|umsatzsteuergesetz:?$|id$/i.test(line) ? vatRe.exec(next) : null);
      if (m) f.vatId = clean(m[1]);
    }
    // Steuernummer
    if (!f.taxId && /^(steuer(-|\s)?(nummer|nr\.?)|st\.?\s*-?nr\.?|tax\s*(id|number))\b/i.test(line) && !/ust|umsatzsteuer|vat/i.test(line)) {
      const m = /([\d][\d\s/]{7,}\d)/.exec(line);
      if (m) f.taxId = clean(m[1]);
    }
    // Vertretung / Inhaber
    if (!f.lastName) {
      const m = /^(geschäftsführ(er|erin|ung|ende gesellschafter(in)?)|vertreten durch|vertretungsberechtigt(e|er)?\s*(gesellschafter(in)?|person)?|inhaber(in)?|owner|managing directors?|ceo|vorstand|vorsitzende[r]?)\b/i.exec(line);
      if (m) {
        let rest = afterLabel(line, m[0]);
        if (!rest) rest = next;
        rest = rest.replace(/^(die|den|der)\s+(geschäftsführ\w*|gesellschafter\w*)\s*:?/i, '').replace(/^(herrn?|frau)\s+/i, '');
        const who = firstPerson(rest);
        if (who && !LEGAL_FORM.test(who) && /^[\p{L}][\p{L}.' -]+$/u.test(who) && who.split(/\s+/).length <= 5) {
          Object.assign(f, splitName(who));
          extra.push(`${/inhaber|owner/i.test(m[0]) ? 'Inhaber' : 'Vertreten durch'}: ${clean(rest)}`);
        }
      }
    }
    // Handelsregister
    if (/(handelsregister|registergericht|amtsgericht|registernummer|register court|commercial register|firmenbuch|\bHR[AB]\s?\d)/i.test(line)) {
      if (!extra.some((e) => e.includes(line))) extra.push(line);
    }
  });

  // Anschrift: Zeile mit PLZ und Ort, davor Straße, davor Firmenname
  const zipRe = /^(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u;
  let zipIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/,\s*(deutschland|germany|österreich|austria|schweiz|switzerland)$/i, '');
    // „Musterstraße 12, 12345 Musterstadt“ in einer Zeile
    const one = /^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?),\s*(?:(D|DE|A|AT|CH)\s?[-–]\s?)?(\d{4,5})\s+([\p{L}][\p{L} .'()/-]{1,60})$/u.exec(line);
    if (one && !SKIP.test(one[1])) {
      f.street = clean(one[1]).replace(/,$/, ''); f.houseNo = clean(one[2]); f.zip = one[4]; f.city = clean(one[5]);
      if (one[3]) f.country = PREFIX_COUNTRY[one[3].toUpperCase()];
      zipIdx = i; break;
    }
    const m = zipRe.exec(line);
    if (m && !/^(tel|fax|phone)/i.test(line)) {
      f.zip = m[2]; f.city = clean(m[3]);
      if (m[1]) f.country = PREFIX_COUNTRY[m[1].toUpperCase()];
      zipIdx = i;
      const prev = lines[i - 1] || '';
      const st = /^(.+?\D)\s+(\d+\s?[a-zA-Z]?(?:\s?[-–/]\s?\d+[a-zA-Z]?)?)$/.exec(prev.replace(/,$/, ''));
      if (st && !SKIP.test(prev) && !LEGAL_FORM.test(prev)) { f.street = clean(st[1]); f.houseNo = clean(st[2]); }
      else if (/^(postfach|p\.?o\.? box)/i.test(prev)) f.street = prev;
      break;
    }
  }
  // Land: ausdrücklich genannt (Zeile nach dem Ort oder eigene Zeile)
  if (!f.country) {
    const cand = [lines[zipIdx + 1], ...lines].filter(Boolean);
    for (const l of cand) {
      const key = l.toLowerCase().replace(/[.,]/g, '').trim();
      if (COUNTRIES[key]) { f.country = COUNTRIES[key]; break; }
    }
  }
  // Firmenname: Zeile mit Rechtsform, sonst die Zeile über der Straße
  const withForm = lines.find((l) => LEGAL_FORM.test(l) && !SKIP.test(l) && l.length < 90 && !/^(sitz|registergericht|handelsregister|amtsgericht|geschäftsführ|vertreten)/i.test(l));
  if (withForm) f.company = withForm.replace(/^(firma|company|unternehmen)\s*:\s*/i, '');
  else if (zipIdx > 0) {
    // Ohne Rechtsform: die nächste schlichte Zeile über der Anschrift (keine Beschriftung, keine Nummern)
    for (let i = (f.street && !lines[zipIdx].includes(',') ? zipIdx - 2 : zipIdx - 1); i >= 0 && i >= zipIdx - 5; i--) {
      const l = lines[i];
      if (!l || SKIP.test(l) || l.includes(':') || /\d{3,}|@|www\./i.test(l)) continue;
      f.company = l;
      break;
    }
  }
  // Ohne Firma, aber mit Inhaber: Name als Firmenname nicht doppeln
  for (const k of Object.keys(f)) if (!f[k]) delete f[k];
  return { fields: f, extra };
}

/* ---------- Mit KI ---------- */

const API_URL = 'https://api.anthropic.com/v1/messages';
const FIELDS = ['company', 'firstName', 'lastName', 'street', 'houseNo', 'zip', 'city', 'region', 'country', 'email', 'phone', 'website', 'taxId', 'vatId'];

const contactTool = {
  name: 'record_contact',
  description: 'Erfasst die Kontaktdaten aus einem Impressum.',
  input_schema: {
    type: 'object',
    properties: {
      company: { type: 'string', description: 'Firmenname inklusive Rechtsform, wie im Impressum.' },
      firstName: { type: 'string', description: 'Vorname der vertretungsberechtigten Person (Geschäftsführer, Inhaber). Leer, wenn keine genannt.' },
      lastName: { type: 'string', description: 'Nachname dieser Person.' },
      street: { type: 'string', description: 'Straße ohne Hausnummer.' },
      houseNo: { type: 'string', description: 'Hausnummer.' },
      zip: { type: 'string' },
      city: { type: 'string' },
      region: { type: 'string', description: 'Bundesland, Kanton oder Emirat, nur wenn genannt.' },
      country: { type: 'string', description: 'Land auf Deutsch, nur wenn genannt oder eindeutig (z. B. aus der Länderkennung vor der PLZ).' },
      email: { type: 'string' },
      phone: { type: 'string', description: 'Telefonnummer (nicht Fax).' },
      website: { type: 'string' },
      taxId: { type: 'string', description: 'Steuernummer, nur wenn genannt.' },
      vatId: { type: 'string', description: 'Umsatzsteuer-Identifikationsnummer bzw. VAT ID / TRN, nur wenn genannt.' },
      register: { type: 'string', description: 'Registerangabe, z. B. „Amtsgericht Köln, HRB 12345“, nur wenn genannt.' },
      found: { type: 'boolean', description: 'false, wenn kein Impressum bzw. keine Kontaktdaten gefunden wurden.' },
    },
    required: ['found'],
  },
};

const RULES = `Regeln:
- Übernimm nur, was im Impressum steht. Rate nichts. Fehlt eine Angabe, lass das Feld leer.
- Bei mehreren Geschäftsführern nimm den ersten.
- Gib die Daten ausschließlich über das Tool record_contact zurück.`;

function headers(apiKey) {
  return {
    'content-type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'anthropic-dangerous-direct-browser-access': 'true',
  };
}

/** Request-Aufbau (exportiert für Tests). */
export function buildContactRequest({ model, text, url }) {
  if (url) {
    return {
      model,
      max_tokens: 1500,
      tools: [{ type: 'web_fetch_20250910', name: 'web_fetch', max_uses: 3, max_content_tokens: 20000 }, contactTool],
      tool_choice: { type: 'auto' },
      messages: [{
        role: 'user',
        content: `Rufe diese Seite ab: ${url}\nIst es nicht das Impressum, suche auf der Seite den Link zum Impressum (Impressum, Imprint, Legal Notice, Kontakt) und rufe ihn ab. Trage danach die Kontaktdaten des Unternehmens über das Tool record_contact ein.\n\n${RULES}`,
      }],
    };
  }
  return {
    model,
    max_tokens: 1000,
    tools: [contactTool],
    tool_choice: { type: 'tool', name: 'record_contact' },
    messages: [{ role: 'user', content: `Hier ist ein Impressum. Trage die Kontaktdaten über das Tool record_contact ein.\n\n${RULES}\n\n---\n${String(text).slice(0, 20000)}` }],
  };
}

/** Antwort → Felder (exportiert für Tests). */
export function parseContactResponse(json) {
  const blocks = (json && Array.isArray(json.content)) ? json.content : [];
  const fetchErr = blocks.find((b) => b.type === 'web_fetch_tool_result' && b.content && b.content.type === 'web_fetch_tool_result_error');
  const tool = blocks.find((b) => b.type === 'tool_use' && b.name === 'record_contact');
  if (!tool || !tool.input) {
    if (fetchErr) {
      const code = fetchErr.content.error_code;
      throw new Error(code === 'url_not_accessible' ? 'Die Seite ließ sich nicht abrufen. Kopiere das Impressum und füge es als Text ein.' : `Die Seite konnte nicht gelesen werden (${code}). Kopiere das Impressum und füge es als Text ein.`);
    }
    throw new Error('Es wurden keine Kontaktdaten gefunden. Kopiere das Impressum und füge es als Text ein.');
  }
  const r = tool.input;
  if (r.found === false) throw new Error('Auf der Seite wurde kein Impressum mit Kontaktdaten gefunden.');
  const fields = {};
  for (const k of FIELDS) {
    const v = typeof r[k] === 'string' ? r[k].trim() : '';
    if (v) fields[k] = v.slice(0, 200);
  }
  if (fields.email) fields.email = fields.email.toLowerCase();
  const extra = [];
  if (typeof r.register === 'string' && r.register.trim()) extra.push(r.register.trim());
  return { fields, extra };
}

function httpError(status, body) {
  const detail = body && body.error && body.error.message ? ` (${body.error.message})` : '';
  if (status === 401) return 'Der API-Key wurde abgelehnt. Bitte in den Einstellungen prüfen.';
  if (status === 429) return 'Zu viele Anfragen oder Guthaben aufgebraucht. Bitte später noch einmal versuchen.';
  if (status >= 500) return 'Der KI-Dienst ist gerade nicht erreichbar. Bitte später noch einmal versuchen.';
  return `Das Auslesen ist fehlgeschlagen${detail || ` (HTTP ${status})`}.`;
}

/** Kontaktdaten per KI aus Text oder von einer Website-Adresse. */
export async function extractContactAI({ apiKey, model, text, url }) {
  if (!apiKey) throw new Error('Dafür braucht es den API-Key aus den Einstellungen.');
  const body = buildContactRequest({ model, text, url });
  let json = null;
  // Server-Werkzeuge (Abruf der Seite) können eine Antwort unterbrechen („pause_turn“) – dann geht es mit derselben Unterhaltung weiter.
  for (let round = 0; round < 3; round++) {
    let res;
    try {
      res = await fetch(API_URL, { method: 'POST', headers: headers(apiKey), body: JSON.stringify(body) });
    } catch (_) {
      throw new Error('Die KI ist nicht erreichbar. Bitte die Internetverbindung prüfen.');
    }
    try { json = await res.json(); } catch (_) { json = null; }
    if (!res.ok) throw new Error(httpError(res.status, json));
    if (json && json.stop_reason === 'pause_turn') {
      body.messages = [...body.messages, { role: 'assistant', content: json.content }];
      continue;
    }
    break;
  }
  return parseContactResponse(json);
}

/** Adresse sinnvoll ergänzen: https:// voran, wenn nur „firma.de/impressum“ eingegeben wurde. */
export function normalizeUrl(u) {
  const s = String(u || '').trim();
  if (!s) return '';
  return /^https?:\/\//i.test(s) ? s : `https://${s}`;
}
