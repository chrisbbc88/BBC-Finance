// Fachliche Vorgänge. Jede Funktion ändert Daten ausschließlich über store.write –
// also atomar und mit Audit-Eintrag.

import { write, state, byId, all, paymentsOf } from './store.js';
import {
  newInvoice, newItem, customerName, INTERVALS, DOC_CURRENCIES,
} from './schema.js';
import {
  computeTotals, sumPayments, openCents, invoiceStatus, fxForDoc,
} from './calc.js';
import { buildDocModel, unsupportedPdfChars } from './docmodel.js';
import { wantedRateDate } from './fx.js';
import { nextNumber, counterKey, numberingOf, validatePattern, formatNumber } from './numbering.js';
import {
  uid, nowISO, todayISO, addDays, addMonths, clone, diffFields, isISODate,
} from './util.js';

const touch = (rec) => ({ ...rec, updatedAt: nowISO() });

export class UserError extends Error {}
const fail = (msg) => { throw new UserError(msg); };
const KIND_LABEL = { invoice: 'Rechnungen', quote: 'Angebote', credit: 'Gutschriften' };

/** Plausibles Belegdatum: verhindert Tippfehler wie das Jahr 0202 oder 20226. */
export const plausibleDate = (iso) => isISODate(iso) && iso >= '2000-01-01' && iso <= '2100-12-31';

/* ---------- Unternehmen ---------- */

export async function saveCompany(company, logoDataUrl) {
  for (const kind of ['invoicePattern', 'quotePattern', 'creditPattern']) {
    const err = validatePattern(company[kind]);
    if (err) fail(err);
  }
  if (!String(company.name || '').trim()) fail('Bitte einen Unternehmensnamen eintragen.');
  if (!String(company.invoicePrefix || '').trim() && String(company.invoicePattern).includes('{COMPANY}')) {
    fail('Bitte ein Rechnungsnummern-Präfix eintragen (z. B. HL).');
  }
  for (const other of all('companies')) {
    if (other.id === company.id || other.archived) continue;
    for (const kind of ['invoice', 'quote', 'credit']) {
      const a = numberingOf(company, kind);
      const b = numberingOf(other, kind);
      if (a.pattern.includes('{COMPANY}') && a.pattern === b.pattern
        && String(a.prefix).trim().toLowerCase() === String(b.prefix).trim().toLowerCase()) {
        fail(`${other.name} verwendet für ${KIND_LABEL[kind]} bereits das Präfix „${b.prefix}“. Jedes Unternehmen braucht einen eigenen Nummernkreis.`);
      }
    }
  }
  const before = byId('companies', company.id);
  let rec = touch(company);
  let asset = null;
  if (logoDataUrl) {
    asset = { id: await hashString(logoDataUrl), dataUrl: logoDataUrl, createdAt: nowISO() };
    rec = { ...rec, logoAssetId: asset.id };
  }
  const d = diffFields(before, rec, ['updatedAt', 'createdAt']);
  await write(async (w) => {
    if (asset) await w.put('assets', asset);
    await w.put('companies', rec);
    await w.audit({
      action: before ? 'Unternehmensdaten geändert' : 'Unternehmen angelegt',
      entity: 'companies', entityId: rec.id, label: rec.name, prev: before ? d.prev : null, next: d.next,
    });
  });
  return rec;
}

export async function archiveCompany(id, archived) {
  const c = byId('companies', id);
  if (!c) return;
  const rec = touch({ ...c, archived });
  await write(async (w) => {
    await w.put('companies', rec);
    if (archived && state.settings.activeCompany === id) await w.setting('activeCompany', 'all');
    await w.audit({
      action: archived ? 'Unternehmen archiviert' : 'Unternehmen reaktiviert',
      entity: 'companies', entityId: id, label: c.name,
    });
  });
}

export function companyInUse(id) {
  return all('invoices').some((r) => r.companyId === id)
    || all('quotes').some((r) => r.companyId === id)
    || all('expenses').some((r) => r.companyId === id)
    || all('recurring').some((r) => r.companyId === id);
}

export async function deleteCompany(id) {
  const c = byId('companies', id);
  if (!c) return;
  if (companyInUse(id)) fail('Dieses Unternehmen hat bereits Belege und kann nur archiviert werden.');
  await write(async (w) => {
    await w.del('companies', id);
    if (state.settings.activeCompany === id) await w.setting('activeCompany', 'all');
    await w.audit({ action: 'Unternehmen gelöscht', entity: 'companies', entityId: id, label: c.name, prev: stripLarge(c) });
  });
}

async function hashString(str) {
  if (globalThis.crypto && crypto.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return 'asset-' + [...new Uint8Array(buf)].slice(0, 12).map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  return 'asset-' + uid();
}

const stripLarge = (o) => { const c = clone(o); delete c.snapshot; return c; };

/* ---------- Kunden ---------- */

export function nextCustomerNumber() {
  let max = 0;
  for (const c of all('customers')) {
    const m = /^K-(\d+)$/.exec(c.number || '');
    if (m) max = Math.max(max, Number(m[1]));
  }
  return `K-${String(max + 1).padStart(4, '0')}`;
}

export async function saveCustomer(customer) {
  if (!customerName(customer)) fail('Bitte ein Unternehmen oder einen Namen eintragen.');
  const before = byId('customers', customer.id);
  const rec = touch({ ...customer });
  if (!String(rec.number || '').trim()) rec.number = nextCustomerNumber();
  const dup = all('customers').find((c) => c.id !== rec.id && c.number === rec.number);
  if (dup) fail(`Die Kundennummer ${rec.number} ist bereits vergeben (${customerName(dup)}).`);
  const d = diffFields(before, rec, ['updatedAt', 'createdAt']);
  await write(async (w) => {
    await w.put('customers', rec);
    await w.audit({
      action: before ? 'Kunde geändert' : 'Kunde angelegt',
      entity: 'customers', entityId: rec.id, label: customerName(rec), prev: before ? d.prev : null, next: d.next,
    });
  });
  return rec;
}

export function customerInUse(id) {
  return all('invoices').some((r) => r.customerId === id)
    || all('quotes').some((r) => r.customerId === id)
    || all('recurring').some((r) => r.customerId === id);
}

export async function deleteCustomer(id) {
  const c = byId('customers', id);
  if (!c) return;
  if (customerInUse(id)) fail('Zu diesem Kunden gibt es Belege. Er kann auf „inaktiv“ gesetzt, aber nicht gelöscht werden.');
  await write(async (w) => {
    await w.del('customers', id);
    await w.audit({ action: 'Kunde gelöscht', entity: 'customers', entityId: id, label: customerName(c), prev: c });
  });
}

/* ---------- Leistungen ---------- */

export async function saveService(service) {
  if (!String(service.name || '').trim()) fail('Bitte einen Namen für die Leistung eintragen.');
  const before = byId('services', service.id);
  const rec = touch(service);
  const d = diffFields(before, rec, ['updatedAt', 'createdAt']);
  await write(async (w) => {
    await w.put('services', rec);
    await w.audit({
      action: before ? 'Leistung geändert' : 'Leistung angelegt',
      entity: 'services', entityId: rec.id, label: rec.name, prev: before ? d.prev : null, next: d.next,
    });
  });
  return rec;
}

export async function deleteService(id) {
  const s = byId('services', id);
  if (!s) return;
  await write(async (w) => {
    await w.del('services', id);
    await w.audit({ action: 'Leistung gelöscht', entity: 'services', entityId: id, label: s.name, prev: s });
  });
}

/** Position aus einer Leistung vorbelegen; alles bleibt auf dem Beleg änderbar. */
export function itemFromService(service, company) {
  return newItem({
    serviceId: service.id,
    name: service.name,
    description: service.invoiceText || service.description || '',
    qty: Number(service.defaultQty) || 1,
    unit: service.unit || 'Stück',
    priceCents: service.priceCents || 0,
    taxRate: service.taxRate != null && service.taxRate !== ''
      ? Number(service.taxRate)
      : Number(company && company.defaultTaxRate) || 0,
  });
}

/* ---------- Rechnungen ---------- */

export function dueDateOf(doc) {
  if (!isISODate(doc.issueDate)) return '';
  return addDays(doc.issueDate, Number(doc.paymentTermDays) || 0);
}

function prepareDraft(doc) {
  const rec = touch({ ...doc });
  rec.items = (rec.items || []).map((it) => ({ ...it }));
  if ('paymentTermDays' in rec) rec.dueDate = dueDateOf(rec);
  // Der Kurs USD→EUR ist die einzige Quelle; rateToUSD wird daraus passend zur Belegwährung abgeleitet.
  if (rec.fx && DOC_CURRENCIES.includes(rec.currency)) rec.fx = fxForDoc(rec.currency, rec.fx.usdToEur, rec.fx);
  rec.totals = computeTotals(rec);
  return rec;
}

/**
 * Ein Entwurf trägt nur dann eine Nummer, wenn er aus einer bereits erstellten Rechnung entstanden ist
 * („Zurück in den Entwurf“). Nummer, Unternehmen und Vorgeschichte kommen dann immer aus der Datenbank –
 * nie aus dem, was der Editor mitschickt.
 */
function keepReserved(rec, inDb) {
  const reserved = !!(inDb && inDb.status === 'draft' && inDb.number);
  if (reserved && rec.companyId !== inDb.companyId) {
    throw new UserError(`Die Rechnung trägt bereits die Nummer ${inDb.number}. Das Unternehmen lässt sich deshalb nicht mehr wechseln.`);
  }
  rec.number = reserved ? inDb.number : null;
  for (const k of ['reopened', 'revision', 'firstFinalizedAt', 'numberRef']) {
    if (reserved && inDb[k] != null) rec[k] = clone(inDb[k]); else delete rec[k];
  }
  return reserved;
}

export async function saveInvoiceDraft(inv) {
  const before = byId('invoices', inv.id);
  if (before && before.status !== 'draft') fail('Diese Rechnung ist bereits erstellt und kann nicht mehr geändert werden.');
  if (inv.status !== 'draft') fail('Nur Entwürfe können gespeichert werden.');
  const rec = prepareDraft(inv);
  await write(async (w) => {
    const inDb = await w.get('invoices', rec.id);
    if (inDb && inDb.status !== 'draft') throw new UserError('Diese Rechnung wurde inzwischen erstellt und kann nicht mehr geändert werden.');
    keepReserved(rec, inDb);
    await w.put('invoices', rec);
    if (before && before.fx && rec.fx && rec.fx.manual && Number(before.fx.usdToEur) !== Number(rec.fx.usdToEur)) {
      await w.audit({
        action: 'Wechselkurs geändert', entity: 'invoices', entityId: rec.id, label: rec.number || 'Entwurf',
        prev: { usdToEur: before.fx.usdToEur, fxSource: before.fx.source }, next: { usdToEur: rec.fx.usdToEur, fxSource: rec.fx.source },
      });
    }
    await w.audit({
      action: before ? 'Rechnungsentwurf geändert' : 'Rechnungsentwurf angelegt',
      entity: 'invoices', entityId: rec.id,
      label: `${rec.number ? `${rec.number} (Entwurf)` : 'Entwurf'}, ${customerName(byId('customers', rec.customerId)) || 'ohne Kunde'}`,
      prev: before ? { totalCents: before.totals && before.totals.totalCents } : null,
      next: { totalCents: rec.totals.totalCents },
    });
  });
  return rec;
}

export async function deleteInvoiceDraft(id) {
  const inv = byId('invoices', id);
  if (!inv) return;
  // Ein Entwurf mit Nummer war schon einmal erstellt – er wird wie eine erstellte Rechnung gelöscht (Nummer wird frei).
  if (inv.number || inv.status !== 'draft') { await deleteInvoice(id); return; }
  await write(async (w) => {
    const inDb = await w.get('invoices', id);
    if (inDb && (inDb.status !== 'draft' || inDb.number)) throw new UserError('Diese Rechnung wurde inzwischen erstellt. Bitte die Seite neu öffnen.');
    await w.del('invoices', id);
    await unlinkOnDelete(w, inv);
    await w.audit({ action: 'Rechnungsentwurf gelöscht', entity: 'invoices', entityId: id, label: 'Entwurf', prev: stripLarge(inv) });
  });
}

/**
 * Rechnung vollständig aus dem System entfernen – samt Zahlungen, Zahlungserinnerungen und einer
 * dazugehörigen Gutschrift. Die Nummern werden wieder frei. Im Protokoll bleibt der Vorgang mit der
 * letzten Fassung des Belegs stehen.
 */
export async function deleteInvoice(id) {
  const inv = byId('invoices', id);
  if (!inv) return null;
  if (inv.type === 'credit_note') return removeCreditNote(id);
  if (inv.status === 'draft' && !inv.number) { await deleteInvoiceDraft(id); return { number: '' }; }
  return write(async (w) => {
    const fresh = await w.get('invoices', id);
    if (!fresh) return null;
    const pays = await w.allByIndex('payments', 'invoiceId', id);
    const rems = await w.allByIndex('reminders', 'invoiceId', id);
    const credit = fresh.creditNoteId ? await w.get('invoices', fresh.creditNoteId) : null;
    if (credit) {
      await w.del('invoices', credit.id);
      await releaseNumber(w, credit, 'credit');
    }
    for (const p of pays) await w.del('payments', p.id);
    for (const r of rems) await w.del('reminders', r.id);
    await w.del('invoices', id);
    const freed = await releaseNumber(w, fresh, 'invoice');
    await unlinkOnDelete(w, fresh);
    const snapCustomer = (fresh.snapshot && fresh.snapshot.customer) || (await w.get('customers', fresh.customerId));
    await w.audit({
      action: 'Rechnung gelöscht', entity: 'invoices', entityId: id, label: fresh.number,
      prev: {
        number: fresh.number, status: fresh.status, totalCents: fresh.totals ? fresh.totals.totalCents : 0, currency: fresh.currency,
        issueDate: fresh.issueDate, customer: customerName(snapCustomer) || '',
        ...(pays.length ? { paymentsDeleted: pays.length, paidCents: sumPayments(pays) } : {}),
        ...(rems.length ? { remindersDeleted: rems.length } : {}),
        ...(credit ? { creditNote: credit.number } : {}),
        // Vollständige letzte Fassung samt allem, was mitgelöscht wurde.
        doc: clone(fresh), related: { payments: pays, reminders: rems, creditNote: credit || null },
      },
      next: { freedNumber: freed || '' },
    });
    return { number: fresh.number, freed, payments: pays.length, reminders: rems.length, creditNumber: credit ? credit.number : '' };
  });
}

/** Prüft, ob ein Beleg vollständig genug zum Erstellen ist. Gibt eine Liste von Hinweisen zurück. */
export function validateDoc(doc, kind = 'invoice') {
  const problems = [];
  const company = byId('companies', doc.companyId);
  if (!company) problems.push('Unternehmen auswählen');
  if (!byId('customers', doc.customerId)) problems.push('Kunde auswählen');
  if (!isISODate(doc.issueDate)) problems.push(kind === 'quote' ? 'Angebotsdatum eintragen' : 'Rechnungsdatum eintragen');
  else if (!plausibleDate(doc.issueDate)) problems.push('Belegdatum prüfen – das Jahr sieht nach einem Tippfehler aus');
  const items = (doc.items || []);
  if (!items.length) problems.push('Mindestens eine Position hinzufügen');
  if (items.some((it) => !String(it.name || '').trim())) problems.push('Jede Position braucht eine Bezeichnung');
  if (kind === 'invoice') {
    if (doc.serviceDate && !isISODate(doc.serviceDate)) problems.push('Leistungsdatum prüfen');
    if (doc.serviceDateEnd && doc.serviceDate && doc.serviceDateEnd < doc.serviceDate) problems.push('Das Ende des Leistungszeitraums liegt vor dem Beginn');
  }
  if (kind === 'quote' && doc.validUntil && doc.issueDate && doc.validUntil < doc.issueDate) {
    problems.push('„Gültig bis“ liegt vor dem Angebotsdatum');
  }
  if (!doc.fx || !(Number(doc.fx.usdToEur) > 0)) problems.push('Wechselkurs laden oder eintragen');
  else if (!doc.fx.manual && doc.fx.forDate && isISODate(doc.issueDate) && doc.fx.forDate !== wantedRateDate(doc.issueDate)) {
    problems.push('Der Wechselkurs gehört zu einem anderen Datum – bitte den Tageskurs neu laden oder von Hand eintragen');
  }
  if (!DOC_CURRENCIES.includes(doc.currency)) problems.push('Währung wählen');
  if (company && byId('customers', doc.customerId)) {
    // Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Alles andere würde im PDF fehlen.
    const missing = unsupportedPdfChars(buildDocModel(doc, kind === 'quote' ? 'quotes' : 'invoices'));
    if (missing) problems.push(`Diese Zeichen kann die PDF nicht darstellen: ${missing} – bitte in lateinischer Schrift eintragen`);
  }
  if (company) {
    const err = validatePattern(numberingOf(company, kind === 'quote' ? 'quote' : 'invoice').pattern);
    if (err) problems.push(err);
  }
  return problems;
}

/** Vorschau der nächsten Nummer (verbindlich vergeben wird sie erst beim Erstellen). */
export async function peekNumber(company, kind, dateISO) {
  if (!company || !isISODate(dateISO)) return '';
  const { pattern } = numberingOf(company, kind);
  if (validatePattern(pattern)) return '';
  const key = counterKey(company.id, kind, pattern, dateISO);
  const counter = byId('counters', key);
  const used = new Set([...all('invoices'), ...all('quotes')].map((d) => d.number).filter(Boolean));
  const { number } = await nextNumber(company, kind, dateISO, counter ? counter.last : 0, (n) => used.has(n));
  return number;
}

/** Nummer innerhalb der laufenden Transaktion vergeben – die Datenbank ist die Quelle der Wahrheit. */
async function assignNumber(w, company, kind, dateISO) {
  const { pattern } = numberingOf(company, kind);
  const key = counterKey(company.id, kind, pattern, dateISO);
  const counter = (await w.get('counters', key)) || { key, companyId: company.id, kind, last: 0 };
  const { number, n } = await nextNumber(company, kind, dateISO, counter.last, async (candidate) => (
    !!(await w.byIndex('invoices', 'number', candidate)) || !!(await w.byIndex('quotes', 'number', candidate))
  ));
  await w.put('counters', { ...counter, last: n, updatedAt: nowISO() });
  return { number, ref: { key, n } };
}

/**
 * Nummer eines gelöschten Belegs wieder freigeben: Der Zähler geht auf den Stand vor dieser Nummer zurück,
 * der nächste Beleg dieses Nummernkreises bekommt sie also wieder. Später vergebene Nummern bleiben, wie sie
 * sind – beim Weiterzählen werden belegte Nummern übersprungen.
 * Gibt die freigegebene Nummer zurück oder null, wenn sich der Zählerstand nicht zuordnen ließ.
 */
async function releaseNumber(w, doc, kind) {
  if (!doc || !doc.number) return null;
  let ref = doc.numberRef && doc.numberRef.key && Number(doc.numberRef.n) > 0 ? doc.numberRef : null;
  if (!ref) {
    // Ältere Belege kennen ihren Zählerstand nicht: aus Muster und Belegdatum zurückrechnen.
    const company = await w.get('companies', doc.companyId);
    if (!company || !isISODate(doc.issueDate)) return null;
    const { prefix, pattern, digits } = numberingOf(company, kind);
    if (validatePattern(pattern)) return null;
    const key = counterKey(company.id, kind, pattern, doc.issueDate);
    const c = await w.get('counters', key);
    if (!c) return null;
    for (let n = Number(c.last) || 0; n >= 1; n--) {
      if (formatNumber(pattern, { prefix, dateISO: doc.issueDate, n, digits }) === doc.number) { ref = { key, n }; break; }
    }
    if (!ref) return null;
  }
  const counter = await w.get('counters', ref.key);
  if (!counter) return null;
  if ((Number(counter.last) || 0) >= ref.n) await w.put('counters', { ...counter, last: ref.n - 1, updatedAt: nowISO() });
  return doc.number;
}

/** Verknüpfungen lösen, wenn eine Rechnung (Entwurf oder erstellt) gelöscht wird. */
async function unlinkOnDelete(w, inv) {
  // Stammt sie aus einer wiederkehrenden Vorlage und war sie deren letzter Lauf,
  // wird der Termin zurückgestellt – sonst ginge der Abrechnungszeitraum verloren.
  if (inv.recurringId) {
    const rec = await w.get('recurring', inv.recurringId);
    if (rec && rec.nextDate === addMonths(inv.issueDate, intervalMonths(rec), rec.anchorDay)) {
      await w.put('recurring', touch({
        ...rec, nextDate: inv.issueDate, generated: Math.max(0, (rec.generated || 0) - 1),
        active: rec.endedByRun ? true : rec.active, endedByRun: false,
      }));
    }
  }
  // Stammt sie aus einem Angebot, wird die Verknüpfung gelöst; das Angebot gilt wieder als angenommen.
  if (inv.quoteId) {
    const q = await w.get('quotes', inv.quoteId);
    if (q && q.invoiceId === inv.id) {
      await w.put('quotes', touch({ ...q, invoiceId: '', status: q.status === 'invoiced' ? 'accepted' : q.status }));
    }
  }
}

export async function setCounter(company, kind, dateISO, last) {
  const { pattern } = numberingOf(company, kind);
  const key = counterKey(company.id, kind, pattern, dateISO);
  const before = byId('counters', key);
  const value = Math.max(0, Math.floor(Number(last) || 0));
  await write(async (w) => {
    await w.put('counters', { key, companyId: company.id, kind, last: value, updatedAt: nowISO() });
    await w.audit({
      action: 'Nummernkreis angepasst', entity: 'companies', entityId: company.id,
      label: `${company.name}, ${KIND_LABEL[kind] || kind}`, prev: { last: before ? before.last : 0 }, next: { last: value },
    });
  });
}

function snapshotOf(company, customer) {
  return { company: clone(company), customer: clone(customer), at: nowISO() };
}

/**
 * Rechnung erstellen (finalisieren): Nummer vergeben, Summen und Wechselkurs festschreiben,
 * Unternehmens- und Kundendaten als Momentaufnahme sichern. Danach ist der Beleg unveränderlich.
 */
export async function finalizeInvoice(draft) {
  const problems = validateDoc(draft, 'invoice');
  if (problems.length) fail(`Die Rechnung kann noch nicht erstellt werden: ${problems.join(', ')}.`);
  const company = byId('companies', draft.companyId);
  const customer = byId('customers', draft.customerId);
  const existing = byId('invoices', draft.id);
  if (existing && existing.status !== 'draft') fail('Diese Rechnung ist bereits erstellt.');
  const rec = prepareDraft(draft);
  return write(async (w) => {
    const inDb = await w.get('invoices', rec.id);
    if (inDb && inDb.status !== 'draft') throw new UserError('Diese Rechnung wurde bereits in einem anderen Fenster erstellt.');
    // War die Rechnung schon einmal erstellt, behält sie ihre Nummer – es wird keine neue vergeben.
    const again = keepReserved(rec, inDb);
    const was = again ? (rec.reopened || {}) : null;
    if (!again) {
      const assigned = await assignNumber(w, company, 'invoice', rec.issueDate);
      rec.number = assigned.number;
      rec.numberRef = assigned.ref;
    }
    rec.status = 'issued';
    rec.finalizedAt = nowISO();
    rec.sentAt = null;
    rec.snapshot = snapshotOf(company, customer);
    if (again) {
      rec.revision = (Number(rec.revision) || 0) + 1;
      delete rec.reopened;
    }
    await w.put('invoices', rec);
    await w.audit({
      action: again ? 'Rechnung geändert und neu erstellt' : 'Rechnung erstellt', entity: 'invoices', entityId: rec.id, label: rec.number,
      prev: again ? {
        totalCents: was.totalCents, currency: was.currency, issueDate: was.issueDate, customer: was.customer, usdToEur: was.usdToEur,
      } : undefined,
      next: {
        number: rec.number, totalCents: rec.totals.totalCents, currency: rec.currency,
        ...(again ? { issueDate: rec.issueDate, customer: customerName(customer) } : {}),
        usdToEur: rec.fx.usdToEur, fxSource: rec.fx.source, fxManual: rec.fx.manual,
      },
    });
    if (rec.quoteId) {
      const q = await w.get('quotes', rec.quoteId);
      if (q && q.status !== 'invoiced') await w.put('quotes', touch({ ...q, status: 'invoiced', invoiceId: rec.id }));
    }
    return rec;
  });
}

/**
 * Erstellte Rechnung zurück in den Entwurf setzen. Sie behält ihre Nummer (die damit weiter vergeben
 * ist), lässt sich ändern und wird mit derselben Nummer neu erstellt. Die bisherige Fassung bleibt
 * vollständig im Protokoll erhalten – eine erstellte Rechnung ändert sich so nie unbemerkt.
 * Eingetragene Zahlungen bleiben an der Rechnung und gelten nach dem Neu-Erstellen wieder.
 * Nicht für stornierte oder gutgeschriebene Belege – dort zuerst Storno bzw. Gutschrift zurücknehmen.
 */
export async function reopenInvoice(id) {
  const inv = byId('invoices', id);
  if (!inv) fail('Rechnung nicht gefunden.');
  if (inv.type === 'credit_note') fail('Eine Gutschrift lässt sich nicht zurück in den Entwurf setzen.');
  if (!['issued', 'sent'].includes(inv.status)) fail('Diese Rechnung lässt sich nicht zurück in den Entwurf setzen.');
  return write(async (w) => {
    const fresh = await w.get('invoices', id);
    if (!fresh || fresh.type === 'credit_note' || !['issued', 'sent'].includes(fresh.status)) {
      throw new UserError('Die Rechnung wurde zwischenzeitlich geändert und lässt sich nicht zurück in den Entwurf setzen.');
    }
    const snapCustomer = (fresh.snapshot && fresh.snapshot.customer) || (await w.get('customers', fresh.customerId));
    const summary = {
      totalCents: fresh.totals ? fresh.totals.totalCents : 0, currency: fresh.currency, issueDate: fresh.issueDate,
      customer: customerName(snapCustomer) || '', usdToEur: fresh.fx ? fresh.fx.usdToEur : null,
    };
    const at = nowISO();
    const rec = touch({
      ...fresh,
      status: 'draft', sentAt: null, finalizedAt: null,
      firstFinalizedAt: fresh.firstFinalizedAt || fresh.finalizedAt || null,
      reopened: { at, finalizedAt: fresh.finalizedAt || null, wasSent: fresh.status === 'sent', sentAt: fresh.sentAt || null, ...summary },
    });
    // Der Entwurf zeigt wieder die aktuellen Unternehmens- und Kundendaten; die Momentaufnahme entsteht beim Erstellen neu.
    delete rec.snapshot;
    await w.put('invoices', rec);
    await w.audit({
      action: 'Rechnung zurück in den Entwurf gesetzt', entity: 'invoices', entityId: id, label: fresh.number,
      // `doc` ist die vollständige bisherige Fassung (mit Momentaufnahme) – daraus lässt sich ihre PDF jederzeit wieder erzeugen.
      prev: { status: fresh.status, ...summary, doc: clone(fresh) },
      next: { status: 'draft' },
    });
    return rec;
  });
}

export async function markInvoiceSent(id, sent = true) {
  const inv = byId('invoices', id);
  if (!inv || !['issued', 'sent'].includes(inv.status)) return;
  const rec = touch({ ...inv, status: sent ? 'sent' : 'issued', sentAt: sent ? nowISO() : null });
  await write(async (w) => {
    await w.put('invoices', rec);
    await w.audit({
      action: sent ? 'Rechnung versendet' : 'Versand zurückgenommen', entity: 'invoices', entityId: id, label: inv.number,
      prev: { status: inv.status }, next: { status: rec.status },
    });
  });
}

export async function saveInternalNotes(coll, id, internalNotes) {
  const doc = byId(coll, id);
  if (!doc) return;
  await write(async (w) => {
    await w.put(coll, touch({ ...doc, internalNotes }));
    await w.audit({
      action: 'Interne Notiz geändert', entity: coll, entityId: id, label: doc.number || 'Entwurf',
      prev: { internalNotes: doc.internalNotes }, next: { internalNotes },
    });
  });
}

export async function addPayment(invoiceId, { date, amountCents, method, note, clarify }) {
  const inv = byId('invoices', invoiceId);
  if (!inv) fail('Rechnung nicht gefunden.');
  if (inv.type === 'credit_note' || ['draft', 'cancelled', 'credited'].includes(inv.status)) {
    fail('Zu diesem Beleg können keine Zahlungen erfasst werden.');
  }
  if (!isISODate(date)) fail('Bitte ein gültiges Zahlungsdatum eintragen.');
  const amount = Math.round(Number(amountCents));
  if (!(amount > 0)) fail('Bitte einen Zahlungsbetrag größer als null eintragen.');
  if (amount > openCents(inv, paymentsOf(invoiceId))) fail('Der Betrag ist höher als der offene Rechnungsbetrag.');
  const payment = {
    id: uid(), invoiceId, companyId: inv.companyId, customerId: inv.customerId,
    date, amountCents: amount, currency: inv.currency, method: method || '', note: note || '',
    createdAt: nowISO(),
  };
  await write(async (w) => {
    // Stand aus der Datenbank, nicht aus dem Arbeitsspeicher: zwei gleichzeitige Zahlungen dürfen nicht überzahlen.
    const fresh = await w.get('invoices', invoiceId);
    const existing = await w.allByIndex('payments', 'invoiceId', invoiceId);
    if (!fresh || fresh.type === 'credit_note' || ['draft', 'cancelled', 'credited'].includes(fresh.status)) {
      throw new UserError('Zu diesem Beleg können keine Zahlungen erfasst werden.');
    }
    if (amount > openCents(fresh, existing)) throw new UserError('Der Betrag ist höher als der offene Rechnungsbetrag.');
    await w.put('payments', payment);
    const after = [...existing, payment];
    await w.audit({
      action: 'Zahlung eingetragen', entity: 'invoices', entityId: invoiceId, label: inv.number,
      prev: { status: invoiceStatus(fresh, existing, todayISO()), paidCents: sumPayments(existing) },
      next: { status: invoiceStatus(fresh, after, todayISO()), paidCents: sumPayments(after), amountCents: amount, date, method },
    });
    const why = String(clarify || '').trim();
    if (why) {
      await w.put('invoices', touch({ ...fresh, clarify: { note: why, at: nowISO() } }));
      await w.audit({
        action: 'Klärung vermerkt', entity: 'invoices', entityId: invoiceId, label: inv.number,
        prev: fresh.clarify ? { note: fresh.clarify.note } : null, next: { note: why },
      });
    }
  });
  return payment;
}

/** Zahlung oder Erstattung nachträglich berichtigen (Datum, Betrag, Zahlungsart, Notiz). */
export async function updatePayment(paymentId, { date, amountCents, method, note }) {
  const known = byId('payments', paymentId);
  if (!known) fail('Zahlung nicht gefunden.');
  if (!isISODate(date)) fail('Bitte ein gültiges Zahlungsdatum eintragen.');
  const amount = Math.round(Number(amountCents));
  if (!(amount > 0)) fail('Bitte einen Betrag größer als null eintragen.');
  return write(async (w) => {
    const cur = await w.get('payments', paymentId);
    if (!cur) throw new UserError('Diese Zahlung gibt es nicht mehr.');
    const isRefund = cur.amountCents < 0;
    const inv = await w.get('invoices', cur.invoiceId);
    const others = (await w.allByIndex('payments', 'invoiceId', cur.invoiceId)).filter((x) => x.id !== paymentId);
    const signed = isRefund ? -amount : amount;
    const sum = sumPayments(others) + signed;
    if (sum < 0) {
      throw new UserError(isRefund
        ? 'Der Betrag ist höher als die eingegangenen Zahlungen.'
        : 'Zu dieser Rechnung gibt es eine Erstattung, die dann höher wäre als die Zahlungen. Bitte zuerst die Erstattung anpassen.');
    }
    const total = inv && inv.totals ? inv.totals.totalCents : null;
    if (!isRefund && total != null && sum > total) throw new UserError('Mit diesem Betrag wäre mehr bezahlt, als die Rechnung ausweist.');
    const rec = { ...cur, date, amountCents: signed, method: method || '', note: note || '', updatedAt: nowISO() };
    const d = diffFields(cur, rec, ['updatedAt', 'createdAt']);
    if (!Object.keys(d.next).length) return rec;
    await w.put('payments', rec);
    await w.audit({
      action: isRefund ? 'Erstattung geändert' : 'Zahlung geändert', entity: 'invoices', entityId: cur.invoiceId, label: inv ? inv.number : '',
      prev: d.prev, next: d.next,
    });
    return rec;
  });
}

/* ---------- Klärungsvermerk ---------- */

/** Rechnung als „Klärung nötig“ kennzeichnen, z. B. weil der Kunde weniger überwiesen hat. */
export async function setClarification(invoiceId, note) {
  const text = String(note || '').trim();
  if (!text) fail('Bitte kurz notieren, was zu klären ist.');
  return write(async (w) => {
    const fresh = await w.get('invoices', invoiceId);
    if (!fresh || fresh.status === 'draft') throw new UserError('Zu diesem Beleg lässt sich keine Klärung vermerken.');
    const rec = touch({ ...fresh, clarify: { note: text, at: (fresh.clarify && fresh.clarify.at) || nowISO() } });
    await w.put('invoices', rec);
    await w.audit({
      action: fresh.clarify ? 'Klärungsvermerk geändert' : 'Klärung vermerkt', entity: 'invoices', entityId: invoiceId, label: fresh.number,
      prev: fresh.clarify ? { note: fresh.clarify.note } : null, next: { note: text },
    });
    return rec;
  });
}

export async function resolveClarification(invoiceId, result) {
  return write(async (w) => {
    const fresh = await w.get('invoices', invoiceId);
    if (!fresh || !fresh.clarify) return fresh;
    const rec = touch({ ...fresh });
    delete rec.clarify;
    await w.put('invoices', rec);
    await w.audit({
      action: 'Klärung erledigt', entity: 'invoices', entityId: invoiceId, label: fresh.number,
      prev: { note: fresh.clarify.note }, next: { result: String(result || '').trim() },
    });
    return rec;
  });
}

/**
 * Erstattung an den Kunden nach einer Gutschrift: wird als negative Zahlung geführt,
 * höchstens bis zur Summe der bisher eingegangenen Zahlungen.
 */
export async function addRefund(invoiceId, { date, amountCents, method, note }) {
  const inv = byId('invoices', invoiceId);
  if (!inv) fail('Rechnung nicht gefunden.');
  if (inv.status !== 'credited') fail('Erstattungen lassen sich nur zu Rechnungen mit Gutschrift erfassen.');
  if (!isISODate(date)) fail('Bitte ein gültiges Datum eintragen.');
  const amount = Math.round(Number(amountCents));
  if (!(amount > 0)) fail('Bitte einen Betrag größer als null eintragen.');
  const refund = {
    id: uid(), invoiceId, companyId: inv.companyId, customerId: inv.customerId,
    date, amountCents: -amount, currency: inv.currency, method: method || '', note: note || '', kind: 'refund',
    createdAt: nowISO(),
  };
  await write(async (w) => {
    const existing = await w.allByIndex('payments', 'invoiceId', invoiceId);
    if (amount > sumPayments(existing)) throw new UserError('Der Betrag ist höher als die eingegangenen Zahlungen.');
    await w.put('payments', refund);
    await w.audit({
      action: 'Erstattung eingetragen', entity: 'invoices', entityId: invoiceId, label: inv.number,
      prev: { paidCents: sumPayments(existing) }, next: { paidCents: sumPayments(existing) - amount, amountCents: -amount, date, method },
    });
  });
  return refund;
}

export async function deletePayment(paymentId) {
  const p = byId('payments', paymentId);
  if (!p) return;
  const inv = byId('invoices', p.invoiceId);
  await write(async (w) => {
    // Eine Zahlung, der schon eine Erstattung gegenübersteht, kann nicht einzeln entfernt werden.
    const rest = (await w.allByIndex('payments', 'invoiceId', p.invoiceId)).filter((x) => x.id !== paymentId);
    if (sumPayments(rest) < 0) throw new UserError('Zu dieser Zahlung gibt es bereits eine Erstattung. Bitte zuerst die Erstattung entfernen.');
    await w.del('payments', paymentId);
    await w.audit({
      action: p.amountCents < 0 ? 'Erstattung gelöscht' : 'Zahlung gelöscht', entity: 'invoices', entityId: p.invoiceId, label: inv ? inv.number : '',
      prev: { amountCents: p.amountCents, date: p.date, method: p.method, note: p.note },
    });
  });
}

export async function cancelInvoice(id, reason) {
  const inv = byId('invoices', id);
  if (!inv) return;
  if (inv.type === 'credit_note') fail('Eine Gutschrift kann nicht storniert werden.');
  if (!['issued', 'sent'].includes(inv.status)) fail('Diese Rechnung kann nicht storniert werden.');
  if (sumPayments(paymentsOf(id)) > 0) fail('Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.');
  await write(async (w) => {
    const fresh = await w.get('invoices', id);
    const pays = await w.allByIndex('payments', 'invoiceId', id);
    if (!fresh || !['issued', 'sent'].includes(fresh.status)) throw new UserError('Die Rechnung wurde zwischenzeitlich geändert und kann nicht storniert werden.');
    if (sumPayments(pays) > 0) throw new UserError('Zu dieser Rechnung gibt es Zahlungen. Bitte zuerst die Zahlungen entfernen oder eine Gutschrift erstellen.');
    const rec = touch({ ...fresh, status: 'cancelled', statusBeforeCancel: fresh.status, cancelledAt: nowISO(), cancelReason: reason || '' });
    await w.put('invoices', rec);
    await w.audit({
      action: 'Rechnung storniert', entity: 'invoices', entityId: id, label: inv.number,
      prev: { status: inv.status }, next: { status: 'cancelled', reason: reason || '' },
    });
  });
}

/** Stornierung zurücknehmen: Die Rechnung gilt wieder wie vor dem Storno und zählt wieder zum Umsatz. */
export async function uncancelInvoice(id) {
  return write(async (w) => {
    const fresh = await w.get('invoices', id);
    if (!fresh || fresh.status !== 'cancelled') throw new UserError('Diese Rechnung ist nicht storniert.');
    const status = ['issued', 'sent'].includes(fresh.statusBeforeCancel) ? fresh.statusBeforeCancel : (fresh.sentAt ? 'sent' : 'issued');
    const rec = touch({ ...fresh, status });
    delete rec.statusBeforeCancel; delete rec.cancelledAt; delete rec.cancelReason;
    await w.put('invoices', rec);
    await w.audit({
      action: 'Stornierung zurückgenommen', entity: 'invoices', entityId: id, label: fresh.number,
      prev: { status: 'cancelled', reason: fresh.cancelReason || '' }, next: { status },
    });
    return rec;
  });
}

/**
 * Gutschrift über den vollen Rechnungsbetrag: eigener, sofort erstellter Beleg mit negativen Mengen.
 * Die ursprüngliche Rechnung bleibt unverändert erhalten und bekommt den Status „Gutschrift erstellt“.
 */
export async function createCreditNote(invoiceId, reason) {
  const inv = byId('invoices', invoiceId);
  if (!inv) fail('Rechnung nicht gefunden.');
  if (inv.type === 'credit_note' || !['issued', 'sent'].includes(inv.status)) fail('Für diesen Beleg kann keine Gutschrift erstellt werden.');
  const company = byId('companies', inv.companyId);
  if (!company) fail('Das Unternehmen dieser Rechnung existiert nicht mehr.');
  const today = todayISO();
  const credit = {
    ...newInvoice(company),
    type: 'credit_note',
    customerId: inv.customerId,
    issueDate: today,
    serviceDate: inv.serviceDate, serviceDateEnd: inv.serviceDateEnd,
    paymentTermDays: 0, dueDate: '',
    currency: inv.currency, language: inv.language,
    items: inv.items.map((it) => ({ ...it, id: uid(), qty: -Number(it.qty) })),
    discount: clone(inv.discount),
    intro: reason || '',
    paymentTerms: '', footer: inv.footer,
    showSecondary: inv.showSecondary,
    fx: clone(inv.fx),
    relatedInvoiceId: inv.id,
    status: 'issued',
  };
  credit.totals = computeTotals(credit);
  return write(async (w) => {
    const fresh = await w.get('invoices', inv.id);
    if (!fresh || !['issued', 'sent'].includes(fresh.status)) throw new UserError('Die Rechnung wurde zwischenzeitlich geändert.');
    const assigned = await assignNumber(w, company, 'credit', credit.issueDate);
    credit.number = assigned.number;
    credit.numberRef = assigned.ref;
    credit.finalizedAt = nowISO();
    credit.snapshot = { company: clone(company), customer: clone(inv.snapshot ? inv.snapshot.customer : byId('customers', inv.customerId)), at: nowISO() };
    await w.put('invoices', credit);
    await w.put('invoices', touch({ ...fresh, status: 'credited', statusBeforeCredit: fresh.status, creditNoteId: credit.id }));
    await w.audit({
      action: 'Gutschrift erstellt', entity: 'invoices', entityId: inv.id, label: `${credit.number} zu ${inv.number}`,
      prev: { status: fresh.status }, next: { status: 'credited', creditNote: credit.number, totalCents: credit.totals.totalCents, reason: reason || '' },
    });
    return credit;
  });
}

/**
 * Gutschrift zurücknehmen: Der Gutschriftsbeleg wird gelöscht, seine Nummer wird frei, und die Rechnung
 * gilt wieder wie vorher. `anyId` ist die Gutschrift selbst oder die Rechnung, zu der sie gehört.
 * Nicht möglich, solange eine Erstattung eingetragen ist.
 */
export async function removeCreditNote(anyId) {
  const doc = byId('invoices', anyId);
  if (!doc) fail('Beleg nicht gefunden.');
  const creditId = doc.type === 'credit_note' ? doc.id : doc.creditNoteId;
  if (!creditId) fail('Zu dieser Rechnung gibt es keine Gutschrift.');
  return write(async (w) => {
    const credit = await w.get('invoices', creditId);
    if (!credit || credit.type !== 'credit_note') throw new UserError('Diese Gutschrift gibt es nicht mehr.');
    const orig = credit.relatedInvoiceId ? await w.get('invoices', credit.relatedInvoiceId) : null;
    if (orig) {
      const pays = await w.allByIndex('payments', 'invoiceId', orig.id);
      if (pays.some((p) => p.amountCents < 0)) {
        throw new UserError(`Zur Rechnung ${orig.number} ist eine Erstattung eingetragen. Entferne sie zuerst – danach lässt sich die Gutschrift zurücknehmen.`);
      }
    }
    await w.del('invoices', creditId);
    const freed = await releaseNumber(w, credit, 'credit');
    let status = '';
    if (orig && orig.status === 'credited') {
      status = ['issued', 'sent'].includes(orig.statusBeforeCredit) ? orig.statusBeforeCredit : (orig.sentAt ? 'sent' : 'issued');
      const rec = touch({ ...orig, status });
      delete rec.creditNoteId; delete rec.statusBeforeCredit;
      await w.put('invoices', rec);
    }
    await w.audit({
      action: 'Gutschrift zurückgenommen', entity: 'invoices', entityId: orig ? orig.id : creditId,
      label: orig ? `${credit.number} zu ${orig.number}` : credit.number,
      prev: { status: orig ? orig.status : 'credit_note', creditNote: credit.number, totalCents: credit.totals ? credit.totals.totalCents : 0, doc: clone(credit) },
      next: { ...(status ? { status } : {}), freedNumber: freed || '' },
    });
    return { creditNumber: credit.number, invoiceId: orig ? orig.id : '', invoiceNumber: orig ? orig.number : '' };
  });
}

/** Neuer Entwurf mit denselben Positionen (z. B. zum Korrigieren nach einem Storno). */
export function duplicateAsDraft(inv) {
  const company = byId('companies', inv.companyId);
  return {
    ...newInvoice(company),
    customerId: inv.customerId,
    currency: inv.currency, language: inv.language,
    items: inv.items.map((it) => ({ ...it, id: uid() })),
    discount: clone(inv.discount),
    intro: inv.intro, paymentTerms: inv.paymentTerms, footer: inv.footer,
    paymentTermDays: inv.paymentTermDays || (company ? company.paymentTermDays : 14),
    showSecondary: inv.showSecondary,
  };
}

/* ---------- Angebote ---------- */

export async function saveQuoteDraft(quote) {
  const before = byId('quotes', quote.id);
  if (before && before.status !== 'draft') fail('Dieses Angebot ist bereits erstellt und kann nicht mehr geändert werden.');
  const rec = prepareDraft(quote);
  await write(async (w) => {
    const inDb = await w.get('quotes', rec.id);
    if (inDb && inDb.status !== 'draft') throw new UserError('Dieses Angebot wurde inzwischen erstellt und kann nicht mehr geändert werden.');
    await w.put('quotes', rec);
    await w.audit({
      action: before ? 'Angebotsentwurf geändert' : 'Angebotsentwurf angelegt',
      entity: 'quotes', entityId: rec.id,
      label: `Entwurf, ${customerName(byId('customers', rec.customerId)) || 'ohne Kunde'}`,
      next: { totalCents: rec.totals.totalCents },
    });
  });
  return rec;
}

export async function deleteQuote(id) {
  const q = byId('quotes', id);
  if (!q) return;
  if (q.status !== 'draft') fail('Erstellte Angebote bleiben erhalten. Du kannst sie als abgelehnt markieren.');
  await write(async (w) => {
    const inDb = await w.get('quotes', id);
    if (inDb && inDb.status !== 'draft') throw new UserError('Dieses Angebot wurde inzwischen erstellt und kann nicht gelöscht werden.');
    await w.del('quotes', id);
    await w.audit({ action: 'Angebotsentwurf gelöscht', entity: 'quotes', entityId: id, label: 'Entwurf', prev: stripLarge(q) });
  });
}

export async function finalizeQuote(draft) {
  const problems = validateDoc(draft, 'quote');
  if (problems.length) fail(`Das Angebot kann noch nicht erstellt werden: ${problems.join(', ')}.`);
  const company = byId('companies', draft.companyId);
  const customer = byId('customers', draft.customerId);
  const existing = byId('quotes', draft.id);
  if (existing && existing.status !== 'draft') fail('Dieses Angebot ist bereits erstellt.');
  const rec = prepareDraft(draft);
  return write(async (w) => {
    const inDb = await w.get('quotes', rec.id);
    if (inDb && inDb.status !== 'draft') throw new UserError('Dieses Angebot wurde bereits in einem anderen Fenster erstellt.');
    const assigned = await assignNumber(w, company, 'quote', rec.issueDate);
    rec.number = assigned.number;
    rec.numberRef = assigned.ref;
    rec.status = 'open';
    rec.finalizedAt = nowISO();
    rec.snapshot = snapshotOf(company, customer);
    await w.put('quotes', rec);
    await w.audit({
      action: 'Angebot erstellt', entity: 'quotes', entityId: rec.id, label: rec.number,
      next: { number: rec.number, totalCents: rec.totals.totalCents, currency: rec.currency },
    });
    return rec;
  });
}

const QUOTE_ACTIONS = {
  open: 'Angebot wieder geöffnet', sent: 'Angebot versendet',
  accepted: 'Angebot angenommen', declined: 'Angebot abgelehnt',
};

export async function setQuoteStatus(id, status) {
  const q = byId('quotes', id);
  if (!q || q.status === 'draft' || q.status === 'invoiced') return;
  if (!QUOTE_ACTIONS[status]) return;
  const rec = touch({
    ...q, status,
    sentAt: status === 'sent' ? nowISO() : q.sentAt,
    decidedAt: ['accepted', 'declined'].includes(status) ? nowISO() : null,
  });
  await write(async (w) => {
    await w.put('quotes', rec);
    await w.audit({
      action: QUOTE_ACTIONS[status], entity: 'quotes', entityId: id, label: q.number,
      prev: { status: q.status }, next: { status },
    });
  });
}

/** Angebot in einen Rechnungsentwurf übernehmen. Der Entwurf wird gespeichert und zurückgegeben. */
export async function convertQuoteToInvoice(quoteId) {
  const q = byId('quotes', quoteId);
  if (!q) fail('Angebot nicht gefunden.');
  if (q.status === 'draft') fail('Bitte das Angebot zuerst erstellen.');
  if (q.invoiceId && byId('invoices', q.invoiceId)) fail('Zu diesem Angebot gibt es bereits eine Rechnung.');
  const company = byId('companies', q.companyId);
  if (!company) fail('Das Unternehmen dieses Angebots existiert nicht mehr.');
  const customer = byId('customers', q.customerId);
  const draft = prepareDraft({
    ...newInvoice(company),
    customerId: q.customerId,
    currency: q.currency, language: q.language,
    items: q.items.map((it) => ({ ...it, id: uid() })),
    discount: clone(q.discount),
    paymentTermDays: (customer && customer.paymentTermDays != null && customer.paymentTermDays !== '')
      ? Number(customer.paymentTermDays) : company.paymentTermDays,
    showSecondary: q.showSecondary,
    quoteId: q.id,
  });
  await write(async (w) => {
    const fresh = await w.get('quotes', q.id);
    if (!fresh || fresh.status === 'draft') throw new UserError('Das Angebot wurde zwischenzeitlich geändert.');
    if (fresh.invoiceId && await w.get('invoices', fresh.invoiceId)) throw new UserError('Zu diesem Angebot gibt es bereits eine Rechnung.');
    await w.put('invoices', draft);
    await w.put('quotes', touch({ ...fresh, status: fresh.status === 'declined' ? fresh.status : 'accepted', invoiceId: draft.id, decidedAt: fresh.decidedAt || nowISO() }));
    await w.audit({
      action: 'Angebot in Rechnung umgewandelt', entity: 'quotes', entityId: q.id, label: q.number,
      next: { invoiceDraftId: draft.id },
    });
  });
  return draft;
}

/* ---------- Ausgaben und Belege ---------- */

export async function saveExpense(expense) {
  const before = byId('expenses', expense.id);
  const rec = touch({ ...expense });
  if (rec.status !== 'review') {
    if (!byId('companies', rec.companyId)) fail('Bitte ein Unternehmen auswählen.');
    if (!plausibleDate(rec.invoiceDate)) fail('Bitte ein gültiges Rechnungsdatum eintragen.');
    if (Math.round(rec.netCents || 0) + Math.round(rec.taxCents || 0) !== Math.round(rec.totalCents || 0)) {
      fail('Netto und Steuer ergeben nicht den Gesamtbetrag. Bitte die Beträge prüfen.');
    }
    if (!String(rec.vendor || '').trim()) fail('Bitte einen Lieferanten eintragen.');
    if (rec.paymentDate && !plausibleDate(rec.paymentDate)) fail('Bitte das Zahlungsdatum prüfen.');
    if (!(rec.fx && Number(rec.fx.rateToUSD) > 0 && Number(rec.fx.usdToEur) > 0)) fail('Bitte den Wechselkurs laden oder eintragen.');
  }
  const d = diffFields(before, rec, ['updatedAt', 'createdAt', 'ai']);
  await write(async (w) => {
    await w.put('expenses', rec);
    await w.audit({
      action: before ? (before.status === 'review' && rec.status === 'booked' ? 'Beleg geprüft und gebucht' : 'Ausgabe geändert') : 'Ausgabe angelegt',
      entity: 'expenses', entityId: rec.id, label: rec.vendor || 'Beleg',
      prev: before ? d.prev : null, next: d.next,
    });
  });
  return rec;
}

export async function deleteExpense(id) {
  const e = byId('expenses', id);
  if (!e) return;
  await write(async (w) => {
    for (const aid of e.attachmentIds || []) {
      await w.del('attachments', aid);
      await w.blobDel(aid);
    }
    await w.del('expenses', id);
    await w.audit({ action: 'Ausgabe gelöscht', entity: 'expenses', entityId: id, label: e.vendor || 'Beleg', prev: e });
  });
}

/** Belegdatei speichern (Metadaten in `attachments`, Inhalt als Blob). */
export async function addAttachment({ blob, name, ownerType, ownerId }) {
  const meta = {
    id: uid(), name: name || 'Beleg', mime: blob.type || 'application/octet-stream',
    size: blob.size, ownerType: ownerType || '', ownerId: ownerId || '', createdAt: nowISO(),
  };
  await write(async (w) => {
    await w.blobPut(meta.id, blob);
    await w.put('attachments', meta);
  });
  return meta;
}

export async function removeAttachment(id) {
  await write(async (w) => {
    await w.del('attachments', id);
    await w.blobDel(id);
  });
}

/* ---------- Wiederkehrende Rechnungen ---------- */

export function intervalMonths(rec) {
  const def = INTERVALS.find((i) => i.id === rec.interval);
  if (def && def.months) return def.months;
  return Math.max(1, Math.floor(Number(rec.customMonths) || 1));
}

export async function saveRecurring(rec) {
  if (!String(rec.name || '').trim()) fail('Bitte der Vorlage einen Namen geben.');
  if (!byId('companies', rec.companyId)) fail('Bitte ein Unternehmen auswählen.');
  if (!byId('customers', rec.customerId)) fail('Bitte einen Kunden auswählen.');
  if (!(rec.items || []).length) fail('Bitte mindestens eine Position hinzufügen.');
  if (!isISODate(rec.nextDate)) fail('Bitte das Datum der nächsten Rechnung eintragen.');
  if (rec.endDate && !isISODate(rec.endDate)) fail('Bitte das Enddatum prüfen.');
  const before = byId('recurring', rec.id);
  const out = touch({ ...rec });
  if (!out.anchorDay || !before || before.nextDate !== out.nextDate) out.anchorDay = Number(out.nextDate.slice(8, 10));
  out.totals = computeTotals(out);
  await write(async (w) => {
    await w.put('recurring', out);
    await w.audit({
      action: before ? 'Wiederkehrende Rechnung geändert' : 'Wiederkehrende Rechnung angelegt',
      entity: 'recurring', entityId: out.id, label: out.name,
    });
  });
  return out;
}

export async function deleteRecurring(id) {
  const r = byId('recurring', id);
  if (!r) return;
  await write(async (w) => {
    await w.del('recurring', id);
    await w.audit({ action: 'Wiederkehrende Rechnung gelöscht', entity: 'recurring', entityId: id, label: r.name, prev: r });
  });
}

export const recurringDue = (rec, today = todayISO()) => !!rec && rec.active
  && isISODate(rec.nextDate) && rec.nextDate <= today
  && (!rec.endDate || rec.nextDate <= rec.endDate);

/** Hat die Vorlage ihr Enddatum überschritten? */
export const recurringEnded = (rec) => !!rec.endDate && isISODate(rec.nextDate) && rec.nextDate > rec.endDate;

/**
 * Erzeugt aus der Vorlage einen Rechnungsentwurf und rückt den nächsten Termin weiter.
 * Vor dem Termin geht das nur mit { early: true } (bewusste Entscheidung des Nutzers).
 */
export async function runRecurring(id, { early = false } = {}) {
  const rec = byId('recurring', id);
  if (!rec) fail('Vorlage nicht gefunden.');
  if (recurringEnded(rec)) fail('Diese Vorlage hat ihr Enddatum erreicht.');
  if (!rec.active) fail('Diese Vorlage ist pausiert.');
  if (!early && rec.nextDate > todayISO()) fail('Die nächste Rechnung dieser Vorlage ist noch nicht fällig.');
  const company = byId('companies', rec.companyId);
  const customer = byId('customers', rec.customerId);
  if (!company || !customer) fail('Unternehmen oder Kunde der Vorlage existiert nicht mehr.');
  const months = intervalMonths(rec);
  const issueDate = rec.nextDate;
  const periodEnd = addDays(addMonths(issueDate, months, rec.anchorDay), -1);
  const draft = prepareDraft({
    ...newInvoice(company),
    customerId: rec.customerId,
    issueDate,
    serviceDate: issueDate,
    serviceDateEnd: rec.servicePeriod === 'month' ? periodEnd : '',
    currency: rec.currency, language: rec.language,
    items: rec.items.map((it) => ({ ...it, id: uid() })),
    discount: clone(rec.discount),
    intro: rec.intro,
    paymentTermDays: rec.paymentTermDays,
    recurringId: rec.id,
  });
  const next = addMonths(issueDate, months, rec.anchorDay);
  const ends = !!rec.endDate && next > rec.endDate;
  const updated = touch({
    ...rec,
    nextDate: next,
    generated: (rec.generated || 0) + 1,
    lastRunAt: nowISO(),
    active: ends ? false : rec.active,
    endedByRun: ends,
  });
  await write(async (w) => {
    // Hat ein anderes Fenster diesen Termin schon erzeugt, darf er nicht doppelt entstehen.
    const fresh = await w.get('recurring', rec.id);
    if (!fresh || fresh.nextDate !== rec.nextDate || !fresh.active) throw new UserError('Dieser Termin wurde bereits erzeugt.');
    await w.put('invoices', draft);
    await w.put('recurring', updated);
    await w.audit({
      action: 'Wiederkehrende Rechnung erzeugt', entity: 'recurring', entityId: rec.id, label: rec.name,
      next: { invoiceDraftId: draft.id, issueDate, nextDate: next },
    });
  });
  return draft;
}

/* ---------- Zahlungserinnerungen ---------- */

export async function logReminder(invoiceId, level, note) {
  const inv = byId('invoices', invoiceId);
  if (!inv) return null;
  const rem = { id: uid(), invoiceId, level, date: todayISO(), note: note || '', createdAt: nowISO() };
  await write(async (w) => {
    await w.put('reminders', rem);
    await w.audit({
      action: 'Zahlungserinnerung versendet', entity: 'invoices', entityId: invoiceId, label: inv.number,
      next: { level, date: rem.date },
    });
  });
  return rem;
}
