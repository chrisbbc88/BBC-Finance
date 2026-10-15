# BBC Finance

Rechnungen, Angebote, Belege und Finanzübersicht für mehrere eigene Unternehmen – als statische Web-App, die auf GitHub Pages läuft und sich auch per Doppelklick auf `index.html` öffnen lässt. Kein Server. Die Daten liegen im Browser; gesichert werden sie über eine JSON-Backup-Datei.

## In fünf Minuten online

1. Auf GitHub ein neues Repository anlegen (zum Beispiel `bbc-finance`). Der Code enthält keine Daten, das Repository darf öffentlich sein.
2. Den **Inhalt dieses Ordners** hochladen: *Add file → Upload files*, alle Dateien und Ordner hineinziehen, *Commit changes*.
3. *Settings → Pages → Build and deployment*: Source **Deploy from a branch**, Branch **main**, Ordner **/ (root)**, *Save*.
4. Nach etwa einer Minute steht die Adresse oben auf der Pages-Seite.

### Ohne GitHub: per Doppelklick

Den Ordner vollständig entpacken und `index.html` doppelklicken. Die Datei braucht die Unterordner `js`, `css` und `fonts` neben sich – einzeln verschoben oder direkt aus dem ZIP geöffnet bleibt sie bei „wird geladen“ stehen.

- **Browser:** am besten Chrome (Rechtsklick → *Öffnen mit*). In Safari startet das Tool ebenfalls, Safari räumt gespeicherte Website-Daten aber strenger auf.
- **Die Daten hängen am Ort.** Was du in der lokal geöffneten Datei einträgst, liegt in einem anderen Speicher als unter der GitHub-Pages-Adresse. Von einem zum anderen kommst du mit der Backup-Datei.
- **Ordner nicht umziehen, ohne vorher ein Backup zu laden.** Je nach Browser hängt der Speicher am Dateipfad.

### Vor dem ersten echten Eintrag: eigene Adresse einrichten

Alle Projektseiten eines GitHub-Kontos teilen sich die Adresse `konto.github.io` – und damit denselben Browser-Speicher. Jede andere Seite unter deinem Konto (auch ein Kundenentwurf mit eingebundenen Fremdskripten) könnte die Finanzdaten und den API-Key lesen.

Empfehlung: dem Repository unter *Settings → Pages → Custom domain* eine eigene Subdomain geben (zum Beispiel `finance.deine-domain.de`, per CNAME-Eintrag auf `konto.github.io`). Dann hat das Tool seinen eigenen Speicher.

Die Daten hängen an der Adresse. Wer später die Adresse wechselt, nimmt sie per Backup-Datei mit – deshalb am besten vor dem Start entscheiden.

## Update einspielen, ohne Daten zu verlieren

Deine Daten liegen im Browser, nicht in den Programmdateien. Ein Update ersetzt nur die Dateien – die Daten bleiben.

1. **Backup laden** (Knopf oben rechts). Nur zur Sicherheit.
2. **Alle Tabs mit BBC Finance schließen.**
3. **Dateien ersetzen** – im selben Ordner bzw. im selben GitHub-Repository. Nicht in einen neuen Ordner entpacken und nicht an eine andere Adresse hochladen, sonst sieht der Browser einen anderen Speicher.
4. **Tool öffnen.** Nach einem Update meldet es einmal, wie viele Rechnungen, Kunden und Ausgaben übernommen wurden.

Neue Funktionen legen beim ersten Start nur zusätzliche, leere Sammlungen an; bestehende Sammlungen werden nicht angefasst. Backups älterer Versionen lassen sich jederzeit einspielen. Ein Backup der neuen Version lehnt eine ältere Version dagegen ab, statt die neuen Daten stillschweigend wegzulassen.

## Was man wissen muss

| Thema | So ist es gelöst |
|---|---|
| **Daten** | IndexedDB im Browser dieses Geräts. Nichts wird an einen Server übertragen. |
| **Sicherung** | *Backup* oben rechts lädt eine JSON-Datei mit allem, inklusive Belegdateien. Der Zähler daneben zeigt Änderungen seit dem letzten Backup. Einspielen unter *Einstellungen*. |
| **Mehrere Geräte** | Jedes Gerät hat seinen eigenen Stand. Übertragen per Backup-Datei. |
| **Browser** | Chrome, Edge oder Firefox. Safari kann Website-Daten nach sieben Tagen ohne Besuch löschen – dort nur mit regelmäßigem Backup verwenden. |
| **Online oder lokal** | Die GitHub-Pages-Adresse und die per Doppelklick geöffnete Datei haben getrennte Datenbestände. Für die tägliche Arbeit einen Weg wählen und dabei bleiben. |
| **Zugriffsschutz** | Keiner. Wer an das Gerät und den Browser kommt, sieht die Daten. Login und Rollen brauchen einen Server. |
| **Wechselkurse** | Frankfurter-API (Referenzkurse der Zentralbanken, ohne Key), Ausweichquelle open.er-api.com. Der Kurs wird beim Erstellen am Beleg festgeschrieben. |
| **Belegerkennung** | Anthropic-API direkt aus dem Browser, mit eigenem Key aus *Einstellungen*. Der Key liegt nur im Browser und steht nie im Backup. |
| **E-Mail** | Das Tool bereitet PDF, Betreff und Text vor und öffnet das E-Mail-Programm. Es verschickt nichts selbst. |
| **Sprache** | Spracherkennung des Browsers (Web Speech API): Chrome schickt die Aufnahme an Google, Safari an Apple; Firefox kann es nicht. Diktieren kostet nichts. Sprachbefehle schicken den erkannten Text und eine kurze Liste der Unternehmen, Kontakte, Leistungen, Termine und offenen To-dos an die Anthropic-API (eigener Key). Das Tool speichert keine Aufnahmen. |
| **PDFs** | Hochgeladene Angebote und Verträge liegen wie Belege im Browser und stehen im Backup (nicht in der Variante *Ohne Dateien*). Angenommen werden nur echte PDF-Dateien bis 15 MB – geprüft wird der Dateiinhalt, nicht die Endung. |
| **Termine** | Kalenderdatei nach RFC 5545 (UTC-Zeiten, eindeutige ID). Eine geänderte Fassung desselben Termins ersetzt beim Empfänger die alte. Keine Synchronisation mit Outlook oder Google – die Datei wird geöffnet oder angehängt. |

Backup-Dateien nie ins Repository legen – `.gitignore` schließt sie vorsorglich aus.

## Bedienung in Kürze

- **Company Switcher** oben links: bestimmt Absender, Logo, Nummernkreis, Bank, Texte und Standards neuer Belege und filtert alle Listen und Zahlen. Das Farbband am oberen Rand zeigt, in welchem Unternehmen man gerade arbeitet.
- **Rechnung schreiben**: *Neue Rechnung* → Kunde → Leistung → *Rechnung erstellen*. Bis dahin ist alles ein Entwurf. Beim Erstellen werden Nummer, Summen, Wechselkurs sowie Unternehmens- und Kundendaten festgeschrieben. Danach ändert sich der Beleg nicht mehr von selbst – auch nicht, wenn du später Kunden- oder Unternehmensdaten änderst.
- **Korrigieren mit derselben Nummer**: in der Rechnung unter *Mehr → Zurück in den Entwurf*. Die Rechnung behält ihre Nummer, lässt sich ändern und wird neu erstellt – es wird keine neue Nummer vergeben. Eingetragene Zahlungen bleiben erhalten. Solange sie im Entwurf liegt, zählt sie nicht zum Umsatz und gilt nicht als offen; das Dashboard erinnert daran. Die bisherige Fassung bleibt im Verlauf der Rechnung als PDF abrufbar.
- **Zahlungen berichtigen**: Stift-Symbol an der Zahlung (Datum, Betrag, Zahlungsart, Notiz) oder Papierkorb zum Löschen.
- **Minderzahlung**: Trägst du weniger ein, als offen ist, lässt sich im selben Dialog „Differenz muss geklärt werden“ ankreuzen. Die Rechnung trägt dann gelb „Klärung nötig“ – in der Rechnung, in der Liste (eigener Filter) und im Dashboard –, bis du die Klärung abhakst. Der Vermerk lässt sich auch ohne Zahlung über *Mehr → Klärung vermerken* setzen.
- **Zurücknehmen**: *Mehr → Stornierung zurücknehmen* und *Mehr → Gutschrift zurücknehmen*. Die Rechnung gilt danach wieder wie vorher; die Gutschrift wird gelöscht und ihre Nummer frei. Eine Erstattung muss vorher entfernt werden.
- **Rechnung löschen**: *Mehr → Rechnung löschen* entfernt die Rechnung vollständig – samt Zahlungen, Erinnerungen und Gutschrift – aus allen Listen und Auswertungen. Ihre Nummer wird wieder frei und als nächste vergeben; bereits vergebene höhere Nummern bleiben unverändert. Im Protokoll bleibt der Vorgang mit der letzten Fassung (als PDF abrufbar) stehen.
- **Korrigieren mit neuer Nummer**: stornieren (ohne Zahlungen) oder Gutschrift erstellen, dann *Als neue Rechnung kopieren*.
- Ob eine bereits verschickte Rechnung geändert oder gelöscht werden darf oder storniert werden muss, hängt von den Regeln ab, die für das jeweilige Unternehmen gelten. Das Tool lässt alle Wege zu und schreibt keinen davon vor.
- **Belege**: unter *Ausgaben* Fotos oder PDFs hineinziehen. Sie landen unter *Zu prüfen*, werden ausgelesen und erst nach deiner Bestätigung gebucht.
- **Anzeigewährung**: Der Umschalter **USD | EUR** oben rechts stellt Dashboard, Finanzübersicht, Reports, Kunden- und Listensummen auf die gewählte Währung um; die andere steht als Zweitwert daneben. Jeder Beleg wird dabei mit seinem eigenen, gespeicherten Kurs umgerechnet. Belege selbst bleiben in ihrer Währung.
- **Kontakte**: Unter *Kontakte* stehen Kunden (Nummer K-…) und Kontakte (Nummer KO-…, z. B. Interessenten). Kontakte bekommen Termine, Notizen und Angebote; mit der ersten Rechnung werden sie automatisch Kunde und erhalten eine K-Nummer (die KO-Nummer bleibt als frühere Nummer vermerkt und wird nie neu vergeben). Umstellen geht auch von Hand (*Mehr → Zum Kunden machen* bzw. *Als Kontakt führen*, Letzteres nur ohne Rechnungen). Selbst vergebene Nummern bleiben beim Umstellen erhalten. Auf Belegen steht die Nummer nur bei Kunden.
- **Impressum übernehmen**: im Kontaktformular *Daten aus Impressum übernehmen*. Eingefügter Text wird direkt im Browser ausgelesen (Firma, Ansprechpartner, Anschrift, Telefon, E-Mail, Website, Steuernummer, USt-IdNr., Registerangabe in die Notizen); mit API-Key übernimmt das die KI genauer. Mit API-Key lässt sich auch die Adresse des Impressums eintragen – die Seite wird dann über die Anthropic-API abgerufen, weil der Browser fremde Seiten nicht lesen darf. Es werden nur leere Felder gefüllt.
- **To-dos**: mit Fälligkeit, optional zu einem Kontakt und Unternehmen. Anlegen und abhaken im Dashboard, im Kontaktprofil, unter *To-dos* oder beim Dokumentieren eines Termins. Überfällige stehen oben und rot; die Navigation zeigt, wie viele heute fällig oder überfällig sind.
- **Termine nachbereiten**: Ist ein geplanter Termin vorbei, fragt das Dashboard nach: *Ja, dokumentieren* (Ergebnis, nächste Schritte, beliebig viele To-dos mit Fälligkeit), *Nein* (als stattgefunden vermerken) oder *Später* (in 1 oder 3 Stunden, morgen früh, in 3 Tagen). Die Dokumentation lässt sich später über den Termin bearbeiten.
- **Leistungsübersicht beim Kunden**: entsteht automatisch aus den erstellten Rechnungen (Gutschriften abgezogen) und aus aktiven wiederkehrenden Vorlagen („läuft, monatlich“). In der Kundenliste zeigt die Spalte *Leistungen* die wichtigsten; die Suche findet Kunden auch über ihre Leistungen.
- **Kundendokumentation**: im Kundenprofil unter *Termine und Dokumentation* – Notizen, Telefonate, E-Mails, Gespräche, Aufgaben mit Datum und optional dem Unternehmen. Abgeschlossene Termine erscheinen dort mit ihrem Ergebnis.
- **Termine**: unter *Termine* (Kalender und Liste) oder beim Kunden über *Termin planen*. Das gewählte Unternehmen bestimmt Meeting-Dienst, Link, Zugangsdaten, Zeitzone und Absender – einzutragen unter *Unternehmen → Termine und Meetings*. Nach dem Anlegen erscheint die Einladung: Text (Vorlage unter *Einstellungen*, Deutsch oder Englisch je nach Kunde), Kalenderdatei (.ics) mit Datum, Uhrzeit, Link und Text, Übergabe an das E-Mail-Programm. Nach dem Termin: *Termin dokumentieren*.
- **Ablauf je Kontakt**: Oben im Kontaktprofil stehen die vier Schritte *Termin → Angebot → Vertrag → Rechnung* mit dem jeweiligen Stand und dem nächsten Schritt, dazu die passenden Knöpfe (Termin planen, Angebot schreiben oder als PDF hochladen, Vertrag anlegen, Rechnung schreiben bzw. *Aus Vertrag*). Bei Bestandskunden, für die ein früherer Schritt nie im Tool erfasst wurde, steht dort „Nicht erfasst“.
- **Angebot als PDF hochladen**: für Angebote, die mit einem anderen Programm gestaltet wurden – auch ältere. Unter *Angebote → PDF hochladen*, im Kontaktprofil oder im Ablauf. Das PDF bleibt unverändert; das Tool merkt sich Unternehmen, Kontakt, Bezeichnung, Nummer im Dokument, Datum, Gültigkeit, Nettobetrag, Steuersatz, Währung und Status. Ein hochgeladenes Angebot bekommt **keine Nummer aus dem Nummernkreis**. Es lässt sich bearbeiten, das PDF ersetzen, als angenommen markieren, in einen Rechnungsentwurf umwandeln (der Angebotsbetrag wird eine Position, die du aufteilen kannst) und – solange keine Rechnung daraus entstanden ist – löschen. *PDF* lädt das Original herunter.
- **Verträge**: unter *Verträge*, im Kontaktprofil oder aus einem angenommenen Angebot (*Vertrag anlegen* übernimmt Bezeichnung, Betrag, Währung und Steuersatz). Gespeichert werden Unternehmen, Kontakt, Bezeichnung, Vertragsnummer, Status (offen, unterschrieben, beendet, nicht zustande gekommen), Unterschriftsdatum, Beginn, Ende (leer = unbefristet), Kündigungsfrist, Abrechnung (einmalig, monatlich, quartalsweise, halbjährlich, jährlich), Nettobetrag je Abrechnung und beliebig viele PDFs (Vertrag, Nachträge). Aus dem Vertrag entsteht mit *Rechnung erstellen* ein Rechnungsentwurf oder mit *Wiederkehrend abrechnen* eine vorbelegte Vorlage; beide bleiben mit dem Vertrag verknüpft. Verträge, die in 60 Tagen enden oder deren Ende überschritten ist, sind markiert; das Dashboard meldet sie 30 Tage vorher. Ein gelöschter Vertrag nimmt seine PDFs mit, Rechnungen und Vorlagen bleiben.
- **Sprache**: Mikrofon-Knopf **in jedem größeren Textfeld** zum Diktieren (Notizen, Dokumentation, Agenda …) und **„Sprechen“ oben rechts** für Sprachbefehle, z. B. „Trag für Nordlicht drei To-dos ein: Angebot bis Freitag, Referenzen, Rückruf Montag“ oder „Termin mit Petersen am Dienstag um zehn über Build Buddy, Thema Relaunch“. Das Tool zeigt vorher, was es anlegen würde; einzelne Punkte lassen sich abwählen, erst *Ausführen* speichert. Möglich sind To-dos, Termine, Notizen, neue Kontakte, Terminnachbereitung und Rechnungs**entwürfe**; Löschen, Stornieren und Zahlungen gehen per Sprache bewusst nicht. Bei Unklarheiten fragt das Tool nach. Sprachbefehle brauchen den API-Key.
- **Wiederkehrend**: Vorlage mit Intervall anlegen; fällige Vorlagen erscheinen im Dashboard und erzeugen per Klick einen Rechnungsentwurf.
- **Zahlungserinnerungen**: überfällige Rechnungen zeigen die fällige Stufe (Tage und Texte in *Einstellungen*).

## Rechenregeln

- Alle Beträge sind ganze Cent, gerundet wird kaufmännisch.
- Preise sind Nettopreise. Steuer wird je Steuersatz auf den rabattierten Nettobetrag gerechnet; ein Belegrabatt wird anteilig auf die Steuersätze verteilt.
- **Umsatz** = Nettobeträge erstellter Rechnungen nach Rechnungsdatum. Entwürfe und stornierte Rechnungen zählen nicht, Gutschriften negativ.
- **Ausgaben** = Nettobeträge gebuchter Ausgaben nach Belegdatum. **Zahlungseingänge** zählen nach Zahlungsdatum.
- USD ist die Hauptwährung, EUR die Zweitwährung. Auswertungen rechnen jeden Beleg mit **seinem** gespeicherten Kurs um, nie mit dem aktuellen.
- Bezahlt, teilbezahlt und überfällig werden aus Zahlungen und Fälligkeit berechnet und nicht gespeichert.
- Das Tool nimmt keine steuerlichen Regeln an. Steuersatz, Steuerbezeichnung und Hinweise auf dem Beleg kommen ausschließlich aus dem Unternehmensprofil.

## Aufbau

```
index.html            Einstieg, Content-Security-Policy; lädt js/app.bundle.js
dev.html              derselbe Einstieg für die Entwicklung; lädt die Quelldateien einzeln (braucht einen Webserver)
css/app.css           Gestaltung (hell und dunkel)
fonts/                Archivo (Oberfläche), Roboto (Belegvorschau)
js/app.bundle.js      alle Quelldateien in einer Datei – das, was der Browser tatsächlich ausführt
js/app.js             Rahmen, Navigation, Company Switcher, Suche, Routen
js/lib/               Fachlogik – ohne Oberfläche, einzeln testbar
  schema.js           Sammlungen, Vorgabewerte, feste Listen
  db.js, store.js     IndexedDB, Arbeitsspeicher, atomare Schreibvorgänge, Audit
  calc.js             Geldrechnung, Summen, Status, Währungsumrechnung
  numbering.js        Belegnummern
  actions.js          alle fachlichen Vorgänge (speichern, erstellen, zahlen, stornieren …)
  reports.js          Auswertungen
  fx.js               Wechselkurse
  docmodel.js         Belegmodell – gemeinsame Quelle für Vorschau und PDF
  pdf.js, export.js   PDF, CSV, Excel
  ai.js, files.js     Belegerkennung, Datei-Aufbereitung, PDF-Prüfung
  pipeline.js         Ablauf Termin → Angebot → Vertrag → Rechnung, Vertragsstatus
  speech.js           Spracherkennung des Browsers (Diktieren)
  voicecmd.js         Sprachbefehle: Kontext, Werkzeuge, Auswertung der KI-Antwort
  backup.js           Export und Wiederherstellung
js/ui/                Bausteine, Diagramme, Belegvorschau
  calendar.js         Zeitzonen, Einladungstext, Kalenderdatei
js/views/             eine Datei je Ansicht (appointments.js: Kalender und Termine, contracts.js: Verträge, PDF-Angebote, Ablauf, voice.js: Sprachbefehle)
js/vendor/            Preact + htm, pdfmake, SheetJS (lokal eingebunden, kein CDN)
tests/                Unit-Tests der Fachlogik
```

Jede Datenänderung läuft über `store.write`: eine IndexedDB-Transaktion, in der auch der Audit-Eintrag entsteht. Schlägt ein Schritt fehl, wird nichts gespeichert. Mehrere offene Tabs gleichen sich ab.

## Nach Änderungen am Code

`index.html` führt nicht die einzelnen Quelldateien aus, sondern `js/app.bundle.js`. Der Grund: Browser laden JavaScript-Module nicht von der Festplatte, eine einzelne klassische Skriptdatei schon. Nach jeder Änderung unter `js/` deshalb neu bündeln und die Bundle-Datei mit hochladen:

```
npm run build
```

Während der Entwicklung geht es ohne Bündeln: `python3 -m http.server 8080` starten und `http://localhost:8080/dev.html` öffnen.

## Datenmodell

Jede Sammlung ist ein IndexedDB-Store und entspricht einer Tabelle. Bei einem späteren Umzug auf PostgreSQL lassen sie sich eins zu eins übernehmen.

| Sammlung | Inhalt | Beziehungen |
|---|---|---|
| `companies` | Unternehmensprofile: Absender, Branding, Bank, Nummernmuster, Standards, Texte | – |
| `assets` | Logos, über ihren Inhalt adressiert | ← `companies.logoAssetId` |
| `customers` | Kontakte, unternehmensübergreifend: Kunden (`kind: 'customer'`, auch ohne Feld) und Kontakte (`kind: 'contact'`) | – |
| `services` | Leistungskatalog, optional auf ein Unternehmen beschränkt | → `companies` (optional) |
| `invoices` | Rechnungen und Gutschriften mit Positionen, Summen, Kurs, Momentaufnahme | → `companies` (genau eines), → `customers`, → `quotes`, → `contracts`, → `recurring`, → `invoices` (Gutschrift ↔ Rechnung) |
| `quotes` | Angebote, gleicher Aufbau; hochgeladene mit `source: 'upload'`, ohne Nummer, mit `refNumber`, `title` und PDF | → `companies`, → `customers`, → `invoices`, → `attachments` |
| `contracts` | Verträge: Status, Laufzeit, Kündigungsfrist, Abrechnung, Betrag, PDFs | → `companies` (genau eines), → `customers`, → `quotes` (optional), → `attachments`; ← `invoices.contractId`, ← `recurring.contractId` |
| `payments` | Zahlungseingänge und Erstattungen | → `invoices` |
| `reminders` | versendete Zahlungserinnerungen | → `invoices` |
| `expenses` | Ausgaben mit Beträgen, Währung, Kurs | → `companies`, → `attachments` |
| `attachments` / `blobs` | Dateien: Metadaten / Inhalt (`ownerType`: expense, quote, contract) | ← `expenses`, `quotes`, `contracts` |
| `recurring` | Vorlagen für wiederkehrende Rechnungen | → `companies`, → `customers`, → `contracts` (optional) |
| `appointments` | Termine: Zeit, Zeitzone, Art, Meeting-Link, Agenda, Status, Ergebnis | → `companies` (genau eines), → `customers` (optional) |
| `todos` | To-dos: Text, Fälligkeit, erledigt | → `customers`, → `companies`, → `appointments` (alle optional) |
| `notes` | Kundendokumentation: Notizen, Telefonate, E-Mails, Gespräche, Aufgaben | → `customers`, → `companies` (optional) |
| `counters` | Zählerstand je Unternehmen, Belegart und Zeitraum | → `companies` |
| `rates` | geladene Wechselkurse | – |
| `settings` | Einstellungen dieses Browsers | – |
| `audit` | Protokoll: Zeitpunkt, Benutzer, Vorgang, vorher, nachher | → beliebiger Datensatz |

Positionen liegen im Beleg (`items`), weil ein Beleg immer als Ganzes gelesen und geschrieben wird. Auf `invoices.number` und `quotes.number` liegt ein eindeutiger Index – doppelte Nummern verhindert die Datenbank selbst.

## Sicherheit

- Content-Security-Policy: Skripte nur aus diesem Ordner (online) beziehungsweise von der eigenen Festplatte (Doppelklick), kein Inline-Skript, kein `eval`; Verbindungen nur zu den Kursdiensten und zur Anthropic-API.
- Alle Texte laufen als Text in die Seite, nie als HTML.
- CSV- und Excel-Export entschärfen Zellen, die mit `=`, `+`, `-` oder `@` beginnen.
- Eine Backup-Datei wird vor dem Einspielen geprüft; schlägt das Einspielen fehl, bleibt der bisherige Stand unverändert.

## Tests

```
npm test
```

56 Tests für Geldrechnung, Impressum-Erkennung, Sprachbefehle, Ablauf und Vertragsstatus, Nummernkreise, Status, Datumsrechnung, Auswertungen, Kursquellen, Belegerkennung, Export und Backup-Prüfung. Die Abläufe im Browser (Rechnung von der Eingabe bis zur PDF, zurück in den Entwurf und neu erstellen, Zahlungen berichtigen, Klärungsvermerk, Storno und Gutschrift zurücknehmen, Rechnung löschen mit Freigabe der Nummer, Termine mit Einladung und Kalenderdatei, Kundendokumentation, Leistungsübersicht, Währungsumschalter, Update einer bestehenden Datenbank ohne Datenverlust, PDF-Angebote und Verträge mit Upload, Vorschau, Download, Ersetzen und Löschen, Rechnung und wiederkehrende Vorlage aus dem Vertrag, Diktieren und Sprachbefehle mit simulierter Spracherkennung und simulierter KI, Angebot → Rechnung, Storno, Gutschrift, Belege, Backup und Wiederherstellung, zwei Tabs gleichzeitig) wurden mit einem ferngesteuerten Chromium durchgespielt – über einen Webserver und direkt von der Festplatte geöffnet. In Safari wurde nicht getestet.

## Grenzen dieser Version

- Kein Login, keine Rollen, kein Steuerberater-Zugang, keine gemeinsamen Daten über Geräte hinweg.
- Kein E-Mail-Versand aus dem Tool, keine automatischen Erinnerungen, kein automatisches Anlegen wiederkehrender Rechnungen – das Tool zeigt, was fällig ist, ausgelöst wird per Klick.
- Gutschriften nur über den vollen Rechnungsbetrag.
- Hochgeladene PDFs werden nicht ausgelesen: Betrag und Daten trägst du selbst ein.
- Sprache: nur Chrome, Edge und Safari (dort muss auf dem Mac die Diktierfunktion eingeschaltet sein). Mit echter Spracherkennung und echter KI wurde nicht getestet, nur simuliert.
- Termine: keine Synchronisation mit Outlook, Google oder Teams und keine Einladung im Namen des Tools – Kalenderdatei und Text gehen über dein eigenes E-Mail-Programm. Keine Serientermine.
- Eine offene Differenz lässt sich vermerken, aber nicht ausbuchen: Die Rechnung bleibt teilbezahlt, bis der Rest als Zahlung eingetragen ist.
- Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Andere Schriften blockieren das Erstellen mit einem Hinweis.
- Die Vorschau zeigt den Beleg als eine fortlaufende Seite; Seitenumbrüche entstehen erst im PDF.
- iPhone-Fotos im HEIC-Format liest nur Safari. In anderen Browsern vorher als JPG oder PDF exportieren.
- Nicht enthalten: Zeiterfassung, Projekte, Kundenportal, Stripe, PayPal, Bankabgleich, DATEV-Export.

Für Login, Rollen und Synchronisation braucht es einen Server mit Datenbank. Die Fachlogik in `js/lib/` hängt nur über `store.js` und `db.js` am Speicher und lässt sich dafür weiterverwenden.
