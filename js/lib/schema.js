// Datenmodell: Sammlungen, Vorgabewerte und feste Listen.
// Jede Sammlung entspricht einer Tabelle des relationalen Modells (siehe README).

import { uid, nowISO, todayISO } from './util.js';

export const SCHEMA_VERSION = 1;
export const DB_NAME = 'bbc-finance';

/** Sammlungen, die vollständig im Arbeitsspeicher gehalten werden. */
export const COLLECTIONS = [
  'companies', 'customers', 'services', 'invoices', 'quotes', 'payments',
  'expenses', 'attachments', 'recurring', 'reminders', 'rates', 'counters', 'audit', 'assets',
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
    archived: false,
    ...over,
  };
}

export function newCustomer(over = {}) {
  return {
    ...stamp(),
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
