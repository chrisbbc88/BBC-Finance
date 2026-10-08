// Erststart: legt die beiden Unternehmensprofile als leere Hüllen an.
// Bewusst ohne Adresse, Steuer- und Bankdaten – die trägt der Nutzer selbst ein.

import { state, write } from './store.js';
import { newCompany } from './schema.js';
import { saveCompany } from './actions.js';

export async function seedCompanies() {
  if (state.companies.length) return;
  await saveCompany(newCompany({
    name: 'Hey Lemon', shortName: 'Hey Lemon', invoicePrefix: 'HL', quotePrefix: 'HL A', creditPrefix: 'HL GS', brandColor: '#E9B800',
  }));
  await saveCompany(newCompany({
    name: 'Build Buddy Consulting', shortName: 'BBC', invoicePrefix: 'BBC', quotePrefix: 'BBC A', creditPrefix: 'BBC GS', brandColor: '#1F4E79',
  }));
  await write(async (w) => {
    await w.setting('seeded', true);
    await w.setting('changesSinceBackup', 0);
  });
}

export async function firstRun() {
  if (state.settings.seeded || state.companies.length) return;
  await seedCompanies();
}
