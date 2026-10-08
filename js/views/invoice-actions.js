// Rückfragen zu Vorgängen, die von mehreren Ansichten aus erreichbar sind.

import { ask, toast, attempt } from '../ui/core.js';
import { byId, paymentsOf, remindersOf } from '../lib/store.js';
import { deleteInvoice } from '../lib/actions.js';
import { sumPayments } from '../lib/calc.js';
import { money } from '../lib/format.js';

/**
 * Rechnung nach Rückfrage vollständig löschen. Die Rückfrage nennt alles, was mitgelöscht wird.
 * Gibt true zurück, wenn gelöscht wurde.
 */
export async function removeInvoice(inv) {
  const payments = paymentsOf(inv.id);
  const reminders = remindersOf(inv.id);
  const credit = inv.creditNoteId ? byId('invoices', inv.creditNoteId) : null;
  const also = [];
  if (payments.length) {
    also.push(`${payments.length} ${payments.length === 1 ? 'Zahlung' : 'Zahlungen'} über zusammen ${money(sumPayments(payments), inv.currency)}`);
  }
  if (credit) also.push(`Gutschrift ${credit.number}`);
  if (reminders.length) also.push(`${reminders.length} ${reminders.length === 1 ? 'Zahlungserinnerung' : 'Zahlungserinnerungen'}`);
  const ok = await ask({
    title: `Rechnung ${inv.number} löschen?`,
    text: `Die Rechnung wird vollständig aus dem System entfernt und zählt in keiner Auswertung mehr mit. Die Nummer ${inv.number} wird wieder frei: Die nächste Rechnung dieses Nummernkreises bekommt sie. Im Protokoll bleibt der Vorgang mit der letzten Fassung stehen.${also.length ? ' Mitgelöscht werden:' : ''}`,
    list: also.length ? also : null,
    confirmLabel: 'Endgültig löschen', danger: true,
  });
  if (!ok) return false;
  const res = await attempt(() => deleteInvoice(inv.id));
  if (!res) return false;
  toast(res.freed ? `Rechnung gelöscht – ${res.freed} ist wieder frei` : 'Rechnung gelöscht', 'good', 6000);
  return true;
}
