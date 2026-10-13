// Impressum-Erkennung (ohne KI) und KI-Antworten. Alle Beispieldaten sind erfunden.
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseImprint, splitName, parseContactResponse, buildContactRequest } from '../js/lib/imprint.js';

test('klassisches deutsches Impressum (GmbH, mehrzeilig)', () => {
  const { fields: f, extra } = parseImprint(`Impressum
Angaben gemäß § 5 TMG

Musterbau Rheinland GmbH
Industriestraße 12a
50667 Köln

Vertreten durch:
Dr. Max Mustermann, Erika Musterfrau

Kontakt
Telefon: +49 (0) 221 123456-0
Telefax: +49 (0) 221 123456-99
E-Mail: info@musterbau-rheinland.de

Registereintrag
Eintragung im Handelsregister.
Registergericht: Amtsgericht Köln
Registernummer: HRB 98765

Umsatzsteuer-ID
Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
DE123456789`);
  assert.equal(f.company, 'Musterbau Rheinland GmbH');
  assert.equal(f.street, 'Industriestraße');
  assert.equal(f.houseNo, '12a');
  assert.equal(f.zip, '50667');
  assert.equal(f.city, 'Köln');
  assert.equal(f.firstName, 'Max');
  assert.equal(f.lastName, 'Mustermann');
  assert.equal(f.phone, '+49 (0) 221 123456-0');
  assert.equal(f.email, 'info@musterbau-rheinland.de');
  assert.equal(f.website, 'www.musterbau-rheinland.de');
  assert.ok(extra.some((e) => /HRB 98765/.test(e)));
  assert.equal(f.country, undefined, 'Land wird nicht geraten');
  assert.equal(f.vatId, 'DE123456789', 'USt-IdNr. aus der Zeile nach der Beschriftung');
});

test('USt-IdNr. in einer Zeile, Adresse in einer Zeile, Länderkennung', () => {
  const { fields: f } = parseImprint(`Hey Beispiel UG (haftungsbeschränkt)
Beispielweg 3, D-48683 Ahaus
Geschäftsführer: Jan Peter van der Berg
Tel. 02561 / 98 76 54
Mail: kontakt [at] hey-beispiel [dot] de
www.hey-beispiel.de
USt-IdNr.: DE 987654321
Steuernummer: 302/5813/1234`);
  assert.equal(f.company, 'Hey Beispiel UG (haftungsbeschränkt)');
  assert.equal(f.street, 'Beispielweg');
  assert.equal(f.houseNo, '3');
  assert.equal(f.zip, '48683');
  assert.equal(f.city, 'Ahaus');
  assert.equal(f.country, 'Deutschland');
  assert.equal(f.firstName, 'Jan Peter');
  assert.equal(f.lastName, 'van der Berg');
  assert.equal(f.phone, '02561 / 98 76 54');
  assert.equal(f.email, 'kontakt@hey-beispiel.de');
  assert.equal(f.website, 'www.hey-beispiel.de');
  assert.equal(f.vatId, 'DE 987654321');
  assert.equal(f.taxId, '302/5813/1234');
});

test('Einzelunternehmen mit Inhaber, Österreich, Freemail ergibt keine Website', () => {
  const { fields: f } = parseImprint(`Impressum
Tischlerei Holzmann e.U.
Inhaber: Thomas Holzmann
Lindenallee 7/2
A-4020 Linz
Österreich
Telefon: 0732 123 456
E-Mail: tischlerei.holzmann@gmail.com
UID-Nummer: ATU12345678`);
  assert.equal(f.street, 'Lindenallee');
  assert.equal(f.houseNo, '7/2');
  assert.equal(f.zip, '4020');
  assert.equal(f.city, 'Linz');
  assert.equal(f.country, 'Österreich');
  assert.equal(f.firstName, 'Thomas');
  assert.equal(f.lastName, 'Holzmann');
  assert.equal(f.vatId, 'ATU12345678');
  assert.equal(f.website, undefined);
  assert.equal(f.company, 'Tischlerei Holzmann e.U.');
});

test('Schweiz, AG, CHE-Nummer, Land ausgeschrieben', () => {
  const { fields: f } = parseImprint(`Alpenblick Beispiel AG
Bahnhofstrasse 21
8001 Zürich
Schweiz
Telefon +41 44 123 45 67
info@alpenblick-beispiel.ch
UID: CHE-123.456.789 MWST`);
  assert.equal(f.company, 'Alpenblick Beispiel AG');
  assert.equal(f.street, 'Bahnhofstrasse');
  assert.equal(f.houseNo, '21');
  assert.equal(f.zip, '8001');
  assert.equal(f.city, 'Zürich');
  assert.equal(f.country, 'Schweiz');
  assert.equal(f.vatId, 'CHE-123.456.789 MWST');
  assert.equal(f.phone, '+41 44 123 45 67');
});

test('leerer oder fremder Text liefert nichts Erfundenes', () => {
  assert.deepEqual(parseImprint('').fields, {});
  const { fields } = parseImprint('Wir freuen uns auf Ihren Besuch. Öffnungszeiten Mo–Fr 9–18 Uhr.');
  assert.equal(fields.zip, undefined);
  assert.equal(fields.company, undefined);
});

test('Namen zerlegen', () => {
  assert.deepEqual(splitName('Prof. Dr. Anna Maria Schmidt'), { firstName: 'Anna Maria', lastName: 'Schmidt' });
  assert.deepEqual(splitName('Herr Ludwig von Beethoven'), { firstName: 'Ludwig', lastName: 'von Beethoven' });
  assert.deepEqual(splitName('Müller'), { firstName: '', lastName: 'Müller' });
});

test('KI: Request für Text und für URL', () => {
  const t = buildContactRequest({ model: 'm', text: 'Impressum …' });
  assert.equal(t.tool_choice.name, 'record_contact');
  const u = buildContactRequest({ model: 'm', url: 'https://firma.example/impressum' });
  assert.equal(u.tools[0].type, 'web_fetch_20250910');
  assert.equal(u.tool_choice.type, 'auto');
  assert.ok(u.messages[0].content.includes('https://firma.example/impressum'), 'Die Adresse muss in der Nutzernachricht stehen');
});

test('KI: Antwort auswerten, Fehler beim Abruf melden', () => {
  const ok = parseContactResponse({ content: [
    { type: 'server_tool_use', name: 'web_fetch', input: { url: 'https://x.example' } },
    { type: 'web_fetch_tool_result', content: { type: 'web_fetch_result', url: 'https://x.example' } },
    { type: 'tool_use', name: 'record_contact', input: { found: true, company: 'X GmbH', email: 'INFO@X.EXAMPLE', zip: '12345', register: 'AG Köln, HRB 1', vatId: '' } },
  ] });
  assert.deepEqual(ok.fields, { company: 'X GmbH', email: 'info@x.example', zip: '12345' });
  assert.deepEqual(ok.extra, ['AG Köln, HRB 1']);
  assert.throws(() => parseContactResponse({ content: [{ type: 'web_fetch_tool_result', content: { type: 'web_fetch_tool_result_error', error_code: 'url_not_accessible' } }] }), /nicht abrufen/);
  assert.throws(() => parseContactResponse({ content: [{ type: 'tool_use', name: 'record_contact', input: { found: false } }] }), /kein Impressum/);
});

test('ohne Rechtsform: Firmenname aus der Zeile über der Anschrift, Beschriftungen übersprungen', () => {
  const { fields: f } = parseImprint(`Impressum
Malerbetrieb Sonnenschein
Inhaberin: Petra Sonnenschein
Am Markt 1
46325 Borken
Telefon: 02861 12345`);
  assert.equal(f.company, 'Malerbetrieb Sonnenschein');
  assert.equal(f.firstName, 'Petra');
  assert.equal(f.street, 'Am Markt');
  assert.equal(f.houseNo, '1');
});

test('englisches Imprint (UAE)', () => {
  const { fields: f } = parseImprint(`Legal Notice
Desert Example Trading FZ-LLC
Office 1203, Example Tower
Dubai
United Arab Emirates
Managing Director: Omar Example
Phone: +971 4 123 4567
Email: hello@desert-example.ae
TRN: 100123456700003`);
  assert.equal(f.company, 'Desert Example Trading FZ-LLC');
  assert.equal(f.country, 'Vereinigte Arabische Emirate');
  assert.equal(f.firstName, 'Omar');
  assert.equal(f.lastName, 'Example');
  assert.equal(f.phone, '+971 4 123 4567');
  assert.equal(f.vatId, '100123456700003');
});
