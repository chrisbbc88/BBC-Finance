// Baut aus einem Beleg ein neutrales Darstellungsmodell. Vorschau (HTML) und PDF
// rendern beide dieses Modell – so zeigen sie garantiert dieselben Inhalte.

import { byId, assetUrl } from './store.js';
import { computeTotals, convertCents } from './calc.js';
import {
  DOC_LABELS, moneyDoc, money, num, pct, date, rate, unitLabel, fill,
} from './format.js';
import { customerName, customerPerson } from './schema.js';
import { safeFileName } from './util.js';

const US_STYLE = /^(usa?|u\.s\.a?\.?|united states( of america)?|vereinigte staaten( von amerika)?|kanada|canada|australien|australia)$/i;

export function cityLine(a) {
  const zip = String(a.zip || '').trim();
  const city = String(a.city || '').trim();
  const region = String(a.region || '').trim();
  if (US_STYLE.test(String(a.country || '').trim())) {
    return [city ? (region ? `${city},` : city) : '', region, zip].filter(Boolean).join(' ');
  }
  return [zip, city].filter(Boolean).join(' ');
}

const streetLine = (a) => [a.street, a.houseNo].map((s) => String(s || '').trim()).filter(Boolean).join(' ');
const same = (a, b) => String(a || '').trim().toLowerCase() === String(b || '').trim().toLowerCase();

export function docKind(doc, coll) {
  if (coll === 'quotes') return 'quote';
  return doc.type === 'credit_note' ? 'credit_note' : 'invoice';
}

/**
 * @param doc   Rechnung, Gutschrift oder Angebot
 * @param coll  'invoices' | 'quotes'
 * @param opts  { previewNumber } – Nummernvorschau für Entwürfe
 */
export function buildDocModel(doc, coll, opts = {}) {
  const kind = docKind(doc, coll);
  const isDraft = doc.status === 'draft';
  // Erstellte Belege verwenden ausschließlich ihre Momentaufnahme.
  const company = (doc.snapshot && doc.snapshot.company) || byId('companies', doc.companyId) || {};
  const customer = (doc.snapshot && doc.snapshot.customer) || byId('customers', doc.customerId) || null;
  const lang = doc.language === 'en' ? 'en' : 'de';
  const L = DOC_LABELS[lang];
  const cur = doc.currency || 'USD';
  const totals = (!isDraft && doc.totals) ? doc.totals : computeTotals(doc);
  const m = (cents) => money(cents, cur, lang);

  /* Absender und Empfänger */
  const senderLine = [company.name, streetLine(company), cityLine(company)].filter(Boolean).join(' · ');
  const recipient = [];
  if (customer) {
    const person = customerPerson(customer);
    if (customer.company) recipient.push(customer.company);
    if (person && person !== customer.company) recipient.push(person);
    const st = streetLine(customer);
    if (st) recipient.push(st);
    const cl = cityLine(customer);
    if (cl) recipient.push(cl);
    if (customer.country && !same(customer.country, company.country)) recipient.push(customer.country);
  }
  const recipientExtra = [];
  if (customer && customer.vatId) recipientExtra.push(`${L.vatId}: ${customer.vatId}`);

  /* Kopfdaten */
  const number = doc.number || opts.previewNumber || '';
  const meta = [];
  meta.push([L[`number_${kind}`], number || `(${L.draft})`]);
  meta.push([L[`date_${kind}`], date(doc.issueDate, lang)]);
  if (kind !== 'quote' && doc.serviceDate) {
    if (doc.serviceDateEnd && doc.serviceDateEnd !== doc.serviceDate) {
      meta.push([L.servicePeriod, `${date(doc.serviceDate, lang)} – ${date(doc.serviceDateEnd, lang)}`]);
    } else {
      meta.push([L.serviceDate, date(doc.serviceDate, lang)]);
    }
  }
  if (kind === 'invoice' && doc.dueDate) meta.push([L.dueDate, date(doc.dueDate, lang)]);
  if (kind === 'quote' && doc.validUntil) meta.push([L.validUntil, date(doc.validUntil, lang)]);
  if (customer && customer.number) meta.push([L.customerNo, customer.number]);

  let subtitle = '';
  if (kind === 'credit_note' && doc.relatedInvoiceId) {
    const orig = byId('invoices', doc.relatedInvoiceId);
    if (orig) subtitle = fill(L.refInvoice, { NUMBER: orig.number, DATE: date(orig.issueDate, lang) });
  }

  /* Positionen */
  const items = doc.items || [];
  const hasDiscountCol = items.some((it) => Number(it.discountPct) > 0);
  const rates = new Set(items.map((it) => Number(it.taxRate) || 0));
  const hasTaxCol = rates.size > 1;
  const lineById = new Map(totals.lines.map((l) => [l.id, l]));
  const rows = items.map((it, i) => ({
    pos: String(i + 1),
    name: it.name || '',
    description: it.description || '',
    qty: num(it.qty, lang, 3),
    unit: unitLabel(it.unit, lang),
    price: m(it.priceCents),
    discount: Number(it.discountPct) > 0 ? pct(it.discountPct, lang) : '',
    tax: pct(Number(it.taxRate) || 0, lang),
    amount: m(lineById.has(it.id) ? lineById.get(it.id).cents : 0),
  }));

  /* Summen */
  const taxName = String(company.taxLabel || '').trim() || L.taxDefault;
  const taxed = totals.taxGroups.filter((g) => Number(g.rate) !== 0);
  const sums = [];
  const hasDocDiscount = totals.discountCents !== 0;
  if (hasDocDiscount || taxed.length) sums.push({ label: L.subtotal, value: m(totals.subtotalCents) });
  if (hasDocDiscount) {
    const d = doc.discount || {};
    const label = d.type === 'abs' ? L.discount : `${L.discount} ${pct(d.value, lang)}`;
    sums.push({ label, value: m(-totals.discountCents) });
    if (taxed.length) sums.push({ label: L.net, value: m(totals.netCents) });
  }
  for (const g of taxed) {
    const base = taxed.length > 1 ? ` (${m(g.netCents)})` : '';
    sums.push({ label: `${taxName} ${pct(g.rate, lang)}${base}`, value: m(g.taxCents) });
  }
  sums.push({ label: L[`total_${kind}`] || L.total, value: moneyDoc(totals.totalCents, cur, lang), strong: true });

  /* Zweitwährung */
  let secondary = null;
  if (doc.showSecondary && doc.fx && Number(doc.fx.usdToEur) > 0 && (cur === 'USD' || cur === 'EUR')) {
    const other = cur === 'USD' ? 'EUR' : 'USD';
    const conv = convertCents(totals.totalCents, cur, other, doc.fx);
    if (conv != null) {
      const r = cur === 'USD' ? Number(doc.fx.usdToEur) : 1 / Number(doc.fx.usdToEur);
      secondary = {
        line: `${L.approx} ${moneyDoc(conv, other, lang)}`,
        fx: company.showFxNote === false ? '' : `${L.fxUsed}: 1 ${cur} = ${rate(r, lang)} ${other}`,
      };
    }
  }

  /* Hinweise unter den Summen */
  const notes = [];
  if (kind === 'invoice' && doc.dueDate) notes.push(fill(L.dueLine, { DATE: date(doc.dueDate, lang) }));
  if (kind === 'quote' && doc.validUntil) notes.push(fill(L.validLine, { DATE: date(doc.validUntil, lang) }));
  if (kind !== 'credit_note' && String(doc.paymentTerms || '').trim()) notes.push(doc.paymentTerms.trim());
  if (String(company.taxNote || '').trim()) notes.push(company.taxNote.trim());

  /* Zahlungsinformationen (nur Rechnung) */
  let payment = null;
  if (kind === 'invoice') {
    const prow = [];
    if (company.accountHolder) prow.push([L.holder, company.accountHolder]);
    if (company.bankName) prow.push([L.bank, company.bankName]);
    if (company.iban) prow.push(['IBAN', company.iban]);
    if (company.bic) prow.push(['BIC', company.bic]);
    const extra = [company.altBank, company.otherPayment].map((s) => String(s || '').trim()).filter(Boolean);
    if (prow.length || extra.length) payment = { title: L.payment, rows: prow, extra };
  }

  /* Fußzeile */
  const col1 = [company.name, streetLine(company), cityLine(company), company.country].filter(Boolean);
  const col2 = [
    company.phone ? `${L.phone} ${company.phone}` : '',
    company.email, company.website,
  ].filter(Boolean);
  const col3 = [
    company.taxId ? `${L.taxId}: ${company.taxId}` : '',
    company.vatId ? `${L.vatId}: ${company.vatId}` : '',
    company.registerInfo,
  ].filter(Boolean);

  const cname = customerName(customer);
  const fileBase = number
    ? `${number} ${cname}`
    : `${L.draft} ${L[kind]} ${cname}`;

  return {
    kind, lang, isDraft,
    brandColor: /^#[0-9a-f]{6}$/i.test(company.brandColor || '') ? company.brandColor : '#1E4D8C',
    logoUrl: assetUrl(company.logoAssetId),
    companyName: company.name || '',
    title: L[kind], number, subtitle,
    draftMark: isDraft ? L.draftMark : '',
    senderLine, recipient, recipientExtra,
    meta,
    intro: String(doc.intro || '').trim(),
    columns: { discount: hasDiscountCol, tax: hasTaxCol },
    labels: L,
    rows, sums, secondary, notes, payment,
    footerCols: [col1, col2, col3].filter((c) => c.length),
    footerText: String(doc.footer || '').trim(),
    fileName: `${safeFileName(fileBase)}.pdf`,
  };
}

/* ---------- Zeichenvorrat der PDF-Schrift ---------- */

// Die eingebettete Schrift (Roboto) deckt lateinische, griechische und kyrillische Schrift,
// Satzzeichen und Währungszeichen ab. Arabisch, Hebräisch, Chinesisch, Japanisch, Emojis u. a. fehlen.
const PDF_OK = /[\u0009\u000A\u000D -~ -ɏͰ-ϿЀ-ӿḀ-ỿ -⁯₠-₾№™←-↓−≈≠≤≥]/u;

/**
 * Sammelt alle Texte eines Belegmodells und liefert die Zeichen, die im PDF fehlen würden
 * (als kurze Zeichenkette zum Anzeigen) – oder '' wenn alles darstellbar ist.
 */
export function unsupportedPdfChars(model) {
  const texts = [
    model.companyName, model.title, model.number, model.subtitle, model.senderLine, model.intro, model.footerText,
    ...model.recipient, ...model.recipientExtra,
    ...model.meta.flat(),
    ...model.rows.flatMap((r) => [r.name, r.description, r.unit]),
    ...model.sums.flatMap((s) => [s.label, s.value]),
    ...model.notes,
    ...(model.payment ? [...model.payment.rows.flat(), ...model.payment.extra] : []),
    ...model.footerCols.flat(),
  ];
  const missing = new Set();
  for (const t of texts) {
    for (const ch of String(t || '')) {
      if (!PDF_OK.test(ch)) missing.add(ch);
    }
  }
  return [...missing].slice(0, 16).join(' ');
}
