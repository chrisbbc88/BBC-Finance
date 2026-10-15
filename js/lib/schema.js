// Datenmodell: Sammlungen, Vorgabewerte und feste Listen.
// Jede Sammlung entspricht einer Tabelle des relationalen Modells (siehe README).

import { uid, nowISO, todayISO } from './util.js';

// Version 2 (Oktober 2026): Termine und Kundendokumentation. Ältere Backups bleiben einlesbar.
// Version 3 (Oktober 2026): To-dos.
// Version 4 (Oktober 2026): Verträge und hochgeladene Angebote (PDF).
export const SCHEMA_VERSION = 4;
export const DB_NAME = 'bbc-finance';
/** Stand der Anwendung – nach einem Update meldet das Tool einmal, dass alle Daten übernommen wurden. */
export const APP_VERSION = '2026-10-15.2';
/** Kurzer Hinweis auf die Neuerungen dieser Fassung (erscheint einmal nach dem Update). */
export const APP_NEWS = 'Neu: Leistungen mit Nummer und Tarif (Starter/Standard), Import und Export als Excel; Sprachbefehl als kleines Fenster unten rechts.';

/** Sammlungen, die vollständig im Arbeitsspeicher gehalten werden. */
export const COLLECTIONS = [
  'companies', 'customers', 'services', 'invoices', 'quotes', 'payments',
  'expenses', 'attachments', 'recurring', 'reminders', 'rates', 'counters', 'audit', 'assets',
  'appointments', 'notes', 'todos', 'contracts',
];

export const BASE_CURRENCY = 'USD';
export const SECONDARY_CURRENCY = 'EUR';
export const DOC_CURRENCIES = ['USD', 'EUR'];
export const EXPENSE_CURRENCIES = ['USD', 'EUR', 'AED', 'GBP', 'CHF', 'CAD', 'AUD', 'PLN', 'TRY', 'SEK', 'DKK', 'NOK', 'CZK', 'JPY'];

export const LANGUAGES = [
  { id: 'de', label: 'Deutsch' },
  { id: 'en', label: 'Englisch' },
];

export const INVOICE_STATUS = {
  draft: { label: 'Entwurf', tone: 'neutral' },
  issued: { label: 'Erstellt', tone: 'info' },
  sent: { label: 'Versendet', tone: 'info' },
  partial: { label: 'Teilbezahlt', tone: 'warn' },
  paid: { label: 'Bezahlt', tone: 'good' },
  overdue: { label: 'Überfällig', tone: 'bad' },
  cancelled: { label: 'Storniert', tone: 'mute' },
  credited: { label: 'Gutschrift erstellt', tone: 'mute' },
  credit_note: { label: 'Gutschrift', tone: 'neutral' },
};

export const QUOTE_STATUS = {
  draft: { label: 'Entwurf', tone: 'neutral' },
  open: { label: 'Erstellt', tone: 'info' },
  sent: { label: 'Versendet', tone: 'info' },
  accepted: { label: 'Angenommen', tone: 'good' },
  declined: { label: 'Abgelehnt', tone: 'mute' },
  expired: { label: 'Abgelaufen', tone: 'warn' },
  invoiced: { label: 'In Rechnung gestellt', tone: 'good' },
};

export const DEFAULT_EXPENSE_CATEGORIES = [
  'Software', 'Marketing', 'Hosting', 'Personal', 'Freelancer', 'Reisen', 'Büro',
  'Beratung', 'Versicherungen', 'Bankgebühren', 'Steuern', 'Sonstiges',
];

export const DEFAULT_SERVICE_CATEGORIES = [
  'Website', 'SEO', 'Marketing', 'Social Media', 'Beratung', 'Hosting', 'Sonstiges',
];

export const DEFAULT_PAYMENT_METHODS = [
  'Überweisung', 'Kreditkarte', 'PayPal', 'Stripe', 'Lastschrift', 'Bar', 'Sonstige',
];

export const UNITS = ['Stück', 'Stunde', 'Tag', 'Monat', 'Jahr', 'Pauschal', 'Paket'];

/** Tarife einer Leistung. Leer = ohne Tarif. */
export const SERVICE_TIERS = {
  starter: { label: 'Starter', tone: 'good' },
  standard: { label: 'Standard', tone: 'info' },
};

export const INTERVALS = [
  { id: 'monthly', label: 'Monatlich', months: 1 },
  { id: 'quarterly', label: 'Quartalsweise', months: 3 },
  { id: 'semiannual', label: 'Halbjährlich', months: 6 },
  { id: 'yearly', label: 'Jährlich', months: 12 },
  { id: 'custom', label: 'Individuell', months: null },
];

export const REMINDER_LEVELS = [
  { id: 1, label: 'Zahlungserinnerung' },
  { id: 2, label: '1. Mahnung' },
  { id: 3, label: '2. Mahnung' },
];

export const DEFAULT_SETTINGS = {
  userName: '',
  theme: 'auto',                 // auto | light | dark
  activeCompany: 'all',
  displayCurrency: 'USD',        // Anzeigewährung für Dashboard, Finanzübersicht und Reports
  appVersion: '',
  aiApiKey: '',                  // bleibt nur in diesem Browser, wird nie ins Backup geschrieben
  aiModel: 'claude-haiku-5-5',
  shrinkImages: true,
  warnOnClose: true,
  lastBackupAt: null,
  changesSinceBackup: 0,
  demoLoaded: false,
  seeded: false,
  expenseCategories: DEFAULT_EXPENSE_CATEGORIES,
  serviceCategories: DEFAULT_SERVICE_CATEGORIES,
  paymentMethods: DEFAULT_PAYMENT_METHODS,
  reminderDays: [7, 14, 21],     // Tage nach Fälligkeit je Stufe
  emailTemplates: {
    de: {
      invoice: {
        subject: 'Rechnung {NUMBER}',
        body: 'Guten Tag {CONTACT},\n\nanbei erhalten Sie die Rechnung {NUMBER} vom {DATE} über {TOTAL}. Der Betrag ist bis zum {DUE} fällig.\n\nVielen Dank für die Zusammenarbeit.\n\nViele Grüße\n{SENDER}',
      },
      quote: {
        subject: 'Angebot {NUMBER}',
        body: 'Guten Tag {CONTACT},\n\nanbei erhalten Sie das Angebot {NUMBER} vom {DATE} über {TOTAL}. Es ist gültig bis zum {DUE}.\n\nBei Fragen melden Sie sich gern.\n\nViele Grüße\n{SENDER}',
      },
    },
    en: {
      invoice: {
        subject: 'Invoice {NUMBER}',
        body: 'Hello {CONTACT},\n\nplease find attached invoice {NUMBER} dated {DATE} for {TOTAL}. Payment is due by {DUE}.\n\nThank you for your business.\n\nBest regards\n{SENDER}',
      },
      quote: {
        subject: 'Quote {NUMBER}',
        body: 'Hello {CONTACT},\n\nplease find attached quote {NUMBER} dated {DATE} for {TOTAL}. It is valid until {DUE}.\n\nPlease let me know if you have any questions.\n\nBest regards\n{SENDER}',
      },
    },
  },
  appointmentTemplates: {
    de: {
      subject: 'Termin am {DATE} um {TIME} Uhr: {TITLE}',
      body: 'Guten Tag {CONTACT},\n\nhiermit bestätige ich unseren Termin:\n\n{TITLE}\n{DATE}, {TIME} bis {END} Uhr ({TIMEZONE})\n\n{MEETING}\n\n{AGENDA}\n\nIch freue mich auf unser Gespräch.\n\nViele Grüße\n{SENDER}\n{COMPANY}',
    },
    en: {
      subject: 'Meeting on {DATE} at {TIME}: {TITLE}',
      body: 'Hello {CONTACT},\n\nI am pleased to confirm our meeting:\n\n{TITLE}\n{DATE}, {TIME} to {END} ({TIMEZONE})\n\n{MEETING}\n\n{AGENDA}\n\nLooking forward to speaking with you.\n\nBest regards\n{SENDER}\n{COMPANY}',
    },
  },
  reminderTemplates: {
    de: {
      1: {
        subject: 'Zahlungserinnerung zur Rechnung {NUMBER}',
        body: 'Guten Tag {CONTACT},\n\nsicher ist es Ihnen nur entgangen: Die Rechnung {NUMBER} vom {DATE} über {OPEN} war am {DUE} fällig und ist noch offen.\n\nIch freue mich über einen kurzen Ausgleich in den nächsten Tagen. Die Rechnung hänge ich noch einmal an.\n\nSollte sich die Zahlung mit dieser Nachricht überschnitten haben, betrachten Sie sie bitte als gegenstandslos.\n\nViele Grüße\n{SENDER}',
      },
      2: {
        subject: '1. Mahnung zur Rechnung {NUMBER}',
        body: 'Guten Tag {CONTACT},\n\nzur Rechnung {NUMBER} vom {DATE} konnte ich bisher keinen Zahlungseingang feststellen. Der offene Betrag von {OPEN} war am {DUE} fällig.\n\nBitte überweisen Sie den Betrag innerhalb von 7 Tagen.\n\nViele Grüße\n{SENDER}',
      },
      3: {
        subject: '2. Mahnung zur Rechnung {NUMBER}',
        body: 'Guten Tag {CONTACT},\n\ntrotz Erinnerung ist die Rechnung {NUMBER} vom {DATE} weiterhin offen. Der Betrag von {OPEN} ist seit dem {DUE} fällig.\n\nBitte gleichen Sie die Rechnung umgehend aus.\n\nViele Grüße\n{SENDER}',
      },
    },
    en: {
      1: {
        subject: 'Payment reminder for invoice {NUMBER}',
        body: 'Hello {CONTACT},\n\nthis is a friendly reminder that invoice {NUMBER} dated {DATE} for {OPEN} was due on {DUE} and is still open.\n\nI would appreciate payment within the next few days. The invoice is attached again for your reference.\n\nIf your payment has crossed with this message, please disregard it.\n\nBest regards\n{SENDER}',
      },
      2: {
        subject: 'Second reminder for invoice {NUMBER}',
        body: 'Hello {CONTACT},\n\nI have not yet received payment for invoice {NUMBER} dated {DATE}. The open amount of {OPEN} was due on {DUE}.\n\nPlease settle the amount within 7 days.\n\nBest regards\n{SENDER}',
      },
      3: {
        subject: 'Final reminder for invoice {NUMBER}',
        body: 'Hello {CONTACT},\n\ndespite earlier reminders, invoice {NUMBER} dated {DATE} remains unpaid. The amount of {OPEN} has been due since {DUE}.\n\nPlease settle the invoice immediately.\n\nBest regards\n{SENDER}',
      },
    },
  },
};

/* ---------- Fabriken für neue Datensätze ---------- */

const stamp = () => ({ id: uid(), createdAt: nowISO(), updatedAt: nowISO() });

export function newCompany(over = {}) {
  return {
    ...stamp(),
    name: '', shortName: '', legalForm: '', logoAssetId: '', brandColor: '#1E4D8C',
    street: '', zip: '', city: '', region: '', country: '',
    phone: '', email: '', website: '',
    taxId: '', vatId: '', registerInfo: '',
    bankName: '', accountHolder: '', iban: '', bic: '', altBank: '', otherPayment: '',
    invoicePrefix: '', invoicePattern: '{COMPANY} {YEAR} {NUMBER}',
    quotePrefix: '', quotePattern: '{COMPANY} {YEAR} {NUMBER}',
    creditPrefix: '', creditPattern: '{COMPANY} {YEAR} {NUMBER}',
    numberDigits: 3,
    paymentTermDays: 14,
    currency: BASE_CURRENCY,
    showSecondary: true,
    showFxNote: true,
    defaultTaxRate: 0,
    taxLabel: '',
    taxNote: '',
    language: 'de',
    invoiceText: '', quoteText: '', paymentTerms: '', footer: '',
    // Termine: Standard-Meeting dieses Unternehmens
    meetingProvider: '', meetingUrl: '', meetingDetails: '', meetingDuration: 60, meetingTimeZone: '',
    archived: false,
    ...over,
  };
}

export const MEETING_PROVIDERS = [
  { id: 'teams', label: 'Microsoft Teams' },
  { id: 'zoom', label: 'Zoom' },
  { id: 'meet', label: 'Google Meet' },
  { id: 'other', label: 'Anderer Dienst' },
];
export const APPOINTMENT_KINDS = [
  { id: 'video', label: 'Videocall' },
  { id: 'phone', label: 'Telefon' },
  { id: 'onsite', label: 'Vor Ort' },
];
export const APPOINTMENT_STATUS = {
  planned: { label: 'Geplant', tone: 'info' },
  done: { label: 'Stattgefunden', tone: 'good' },
  cancelled: { label: 'Abgesagt', tone: 'mute' },
};
export const NOTE_KINDS = [
  { id: 'note', label: 'Notiz' },
  { id: 'call', label: 'Telefonat' },
  { id: 'email', label: 'E-Mail' },
  { id: 'meeting', label: 'Gespräch' },
  { id: 'task', label: 'Aufgabe' },
];

/** Gängige Zeitzonen für Termine; die Zeitzone dieses Geräts kommt immer dazu. */
export const TIME_ZONES = ['Europe/Berlin', 'Europe/Zurich', 'Europe/Vienna', 'Europe/Madrid', 'Europe/London', 'Asia/Dubai', 'America/New_York', 'America/Los_Angeles', 'UTC'];
export const deviceTimeZone = () => {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (_) { return 'UTC'; }
};

export function newAppointment(company, over = {}) {
  const start = over.start || '10:00';
  const minutes = Number(company && company.meetingDuration) || 60;
  const [h, m] = start.split(':').map(Number);
  const endMin = Math.min(h * 60 + m + minutes, 23 * 60 + 59);
  return {
    ...stamp(),
    companyId: company ? company.id : '',
    customerId: '',
    contactName: '',             // Gesprächspartner, falls (noch) kein Kunde
    title: '',
    date: todayISO(),
    start,
    end: `${String(Math.floor(endMin / 60)).padStart(2, '0')}:${String(endMin % 60).padStart(2, '0')}`,
    timeZone: (company && company.meetingTimeZone) || deviceTimeZone(),
    kind: 'video',
    meetingProvider: company ? company.meetingProvider || '' : '',
    meetingUrl: company ? company.meetingUrl || '' : '',
    meetingDetails: company ? company.meetingDetails || '' : '',
    location: '',
    attendees: '',
    agenda: '',
    language: company ? company.language || 'de' : 'de',
    status: 'planned',
    outcome: '',
    sequence: 0,
    ...over,
  };
}

export function newTodo(over = {}) {
  return {
    ...stamp(),
    title: '',
    due: '',                 // Fälligkeit YYYY-MM-DD, optional
    customerId: '',          // Kontakt bzw. Kunde, optional
    companyId: '',           // Unternehmen, optional
    appointmentId: '',       // stammt aus diesem Termin, optional
    note: '',
    done: false,
    doneAt: null,
    ...over,
  };
}

export function newNote(over = {}) {
  return {
    ...stamp(),
    customerId: '',
    companyId: '',
    date: todayISO(),
    kind: 'note',
    title: '',
    text: '',
    ...over,
  };
}

/**
 * Kontakte: Ein Datensatz in der Sammlung `customers` ist entweder ein Kunde (kind 'customer', Nummer K-…)
 * oder ein Kontakt (kind 'contact', Nummer KO-…). Ältere Datensätze ohne `kind` sind Kunden.
 */
export const CONTACT_KINDS = [
  { id: 'customer', label: 'Kunde' },
  { id: 'contact', label: 'Kontakt' },
];
export const isCustomer = (c) => !c || c.kind !== 'contact';
export const contactKindLabel = (c) => (isCustomer(c) ? 'Kunde' : 'Kontakt');

export function newCustomer(over = {}) {
  return {
    ...stamp(),
    kind: 'customer',
    number: '',
    company: '', contact: '', firstName: '', lastName: '',
    street: '', houseNo: '', zip: '', city: '', region: '', country: '',
    email: '', phone: '', website: '',
    taxId: '', vatId: '',
    language: '', currency: '', paymentTermDays: null,
    notes: '', tags: [], active: true,
    ...over,
  };
}

export function newService(over = {}) {
  return {
    ...stamp(),
    code: '', tier: '',
    name: '', internalName: '', description: '', invoiceText: '',
    category: '', unit: 'Stück', priceCents: 0, currency: BASE_CURRENCY,
    taxRate: null, defaultQty: 1, recurring: false, companyId: '',
    active: true,
    ...over,
  };
}

export function newItem(over = {}) {
  return {
    id: uid(), serviceId: '', name: '', description: '',
    qty: 1, unit: 'Stück', priceCents: 0, discountPct: 0, taxRate: 0,
    ...over,
  };
}

export function newInvoice(company, over = {}) {
  const today = todayISO();
  return {
    ...stamp(),
    type: 'invoice',
    companyId: company ? company.id : '',
    customerId: '',
    number: null,
    status: 'draft',
    issueDate: today,
    serviceDate: today, serviceDateEnd: '',
    paymentTermDays: company ? company.paymentTermDays : 14,
    dueDate: '',
    currency: company ? company.currency : BASE_CURRENCY,
    language: company ? company.language : 'de',
    items: [],
    discount: { type: 'pct', value: 0 },
    intro: company ? company.invoiceText : '',
    paymentTerms: company ? company.paymentTerms : '',
    footer: company ? company.footer : '',
    showSecondary: company ? company.showSecondary : true,
    fx: null,
    totals: null,
    snapshot: null,
    internalNotes: '',
    quoteId: '', recurringId: '', relatedInvoiceId: '',
    finalizedAt: null, sentAt: null, cancelledAt: null, cancelReason: '',
    ...over,
  };
}

export function newQuote(company, over = {}) {
  const today = todayISO();
  return {
    ...stamp(),
    companyId: company ? company.id : '',
    customerId: '',
    number: null,
    status: 'draft',
    issueDate: today,
    validUntil: '',
    currency: company ? company.currency : BASE_CURRENCY,
    language: company ? company.language : 'de',
    items: [],
    discount: { type: 'pct', value: 0 },
    intro: company ? company.quoteText : '',
    paymentTerms: company ? company.paymentTerms : '',
    footer: company ? company.footer : '',
    showSecondary: company ? company.showSecondary : true,
    fx: null, totals: null, snapshot: null,
    internalNotes: '', invoiceId: '',
    finalizedAt: null, sentAt: null, decidedAt: null,
    ...over,
  };
}

/** Bezeichnung eines Angebots für Listen und Protokoll – auch für hochgeladene ohne eigene Nummer. */
export function quoteLabel(q) {
  if (!q) return '';
  if (q.number) return q.number;
  if (q.source === 'upload') return q.refNumber || q.title || 'PDF-Angebot';
  return 'Entwurf';
}

/** Ein außerhalb des Tools erstelltes Angebot (PDF). Es bekommt keine Nummer aus dem Nummernkreis. */
export function newUploadedQuote(company, over = {}) {
  return newQuote(company, {
    source: 'upload', status: 'open', title: '', refNumber: '', attachmentIds: [],
    validUntil: '', intro: '', paymentTerms: '', footer: '',
    ...over,
  });
}

export const CONTRACT_STATUS = {
  open: { label: 'Offen', tone: 'info' },
  signed: { label: 'Unterschrieben', tone: 'good' },
  ended: { label: 'Beendet', tone: 'mute' },
  declined: { label: 'Nicht zustande gekommen', tone: 'mute' },
};
export const CONTRACT_BILLING = [
  { id: 'none', label: 'Keine Angabe' },
  { id: 'once', label: 'Einmalig' },
  { id: 'monthly', label: 'Monatlich' },
  { id: 'quarterly', label: 'Quartalsweise' },
  { id: 'semiannual', label: 'Halbjährlich' },
  { id: 'yearly', label: 'Jährlich' },
];

export function newContract(company, over = {}) {
  return {
    ...stamp(),
    companyId: company ? company.id : '',
    customerId: '',
    title: '',
    refNumber: '',
    status: 'open',
    signedDate: '', startDate: '', endDate: '', noticePeriod: '',
    billing: 'none',
    amountCents: null,
    currency: company ? company.currency : BASE_CURRENCY,
    taxRate: company ? Number(company.defaultTaxRate) || 0 : 0,
    quoteId: '',
    attachmentIds: [],
    notes: '',
    ...over,
  };
}

export function newExpense(over = {}) {
  return {
    ...stamp(),
    companyId: '', status: 'booked',     // booked | review (Beleg wartet auf Prüfung)
    vendor: '', category: '', description: '',
    invoiceNumber: '', invoiceDate: todayISO(), paymentDate: '',
    netCents: 0, taxCents: 0, totalCents: 0,
    currency: BASE_CURRENCY, fx: null,
    paymentMethod: '', attachmentIds: [], note: '',
    ai: null,
    ...over,
  };
}

export function newRecurring(company, over = {}) {
  return {
    ...stamp(),
    name: '',
    companyId: company ? company.id : '',
    customerId: '',
    interval: 'monthly', customMonths: 1,
    startDate: todayISO(), nextDate: todayISO(), endDate: '',
    anchorDay: null,
    active: true,
    currency: company ? company.currency : BASE_CURRENCY,
    language: company ? company.language : 'de',
    items: [],
    discount: { type: 'pct', value: 0 },
    intro: company ? company.invoiceText : '',
    paymentTermDays: company ? company.paymentTermDays : 14,
    servicePeriod: 'month',   // none | month (Leistungszeitraum = Abrechnungsintervall)
    generated: 0, lastRunAt: null,
    ...over,
  };
}

export function customerName(c) {
  if (!c) return '';
  const person = [c.firstName, c.lastName].filter(Boolean).join(' ');
  return c.company || person || c.contact || '';
}
export function customerPerson(c) {
  if (!c) return '';
  return [c.firstName, c.lastName].filter(Boolean).join(' ') || c.contact || '';
}
