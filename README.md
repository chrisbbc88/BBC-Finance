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

Backup-Dateien nie ins Repository legen – `.gitignore` schließt sie vorsorglich aus.

## Bedienung in Kürze

- **Company Switcher** oben links: bestimmt Absender, Logo, Nummernkreis, Bank, Texte und Standards neuer Belege und filtert alle Listen und Zahlen. Das Farbband am oberen Rand zeigt, in welchem Unternehmen man gerade arbeitet.
- **Rechnung schreiben**: *Neue Rechnung* → Kunde → Leistung → *Rechnung erstellen*. Bis dahin ist alles ein Entwurf. Beim Erstellen werden Nummer, Summen, Wechselkurs sowie Unternehmens- und Kundendaten festgeschrieben. Danach ändert sich der Beleg nicht mehr von selbst – auch nicht, wenn du später Kunden- oder Unternehmensdaten änderst.
- **Korrigieren mit derselben Nummer**: in der Rechnung unter *Mehr → Zurück in den Entwurf*. Die Rechnung behält ihre Nummer, lässt sich ändern und wird neu erstellt – es wird keine neue Nummer vergeben. Solange sie im Entwurf liegt, zählt sie nicht zum Umsatz und gilt nicht als offen; das Dashboard erinnert daran. Die bisherige Fassung bleibt im Verlauf der Rechnung als PDF abrufbar. Nicht möglich, solange Zahlungen eingetragen sind, und nicht bei stornierten oder gutgeschriebenen Rechnungen. Ein solcher Entwurf lässt sich nicht löschen und nicht einem anderen Unternehmen zuordnen, damit keine Nummer verloren geht.
- **Korrigieren mit neuer Nummer**: stornieren (ohne Zahlungen) oder Gutschrift erstellen, dann *Als neue Rechnung kopieren*. Ob eine bereits verschickte Rechnung unter derselben Nummer geändert werden darf oder storniert werden muss, hängt von den Regeln ab, die für das jeweilige Unternehmen gelten – das Tool lässt beides zu und schreibt nichts davon vor.
- **Belege**: unter *Ausgaben* Fotos oder PDFs hineinziehen. Sie landen unter *Zu prüfen*, werden ausgelesen und erst nach deiner Bestätigung gebucht.
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
  ai.js, files.js     Belegerkennung, Datei-Aufbereitung
  backup.js           Export und Wiederherstellung
js/ui/                Bausteine, Diagramme, Belegvorschau
js/views/             eine Datei je Ansicht
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
| `customers` | Kunden, unternehmensübergreifend | – |
| `services` | Leistungskatalog, optional auf ein Unternehmen beschränkt | → `companies` (optional) |
| `invoices` | Rechnungen und Gutschriften mit Positionen, Summen, Kurs, Momentaufnahme | → `companies` (genau eines), → `customers`, → `quotes`, → `recurring`, → `invoices` (Gutschrift ↔ Rechnung) |
| `quotes` | Angebote, gleicher Aufbau | → `companies`, → `customers`, → `invoices` |
| `payments` | Zahlungseingänge und Erstattungen | → `invoices` |
| `reminders` | versendete Zahlungserinnerungen | → `invoices` |
| `expenses` | Ausgaben mit Beträgen, Währung, Kurs | → `companies`, → `attachments` |
| `attachments` / `blobs` | Belegdateien: Metadaten / Inhalt | ← `expenses` |
| `recurring` | Vorlagen für wiederkehrende Rechnungen | → `companies`, → `customers` |
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
node --test tests/core.test.mjs tests/reports.test.mjs
```

32 Tests für Geldrechnung, Nummernkreise, Status, Datumsrechnung, Auswertungen, Kursquellen, Belegerkennung, Export und Backup-Prüfung. Die Abläufe im Browser (Rechnung von der Eingabe bis zur PDF, zurück in den Entwurf und neu erstellen, Angebot → Rechnung, Storno, Gutschrift, Belege, Backup und Wiederherstellung, zwei Tabs gleichzeitig) wurden mit einem ferngesteuerten Chromium durchgespielt – über einen Webserver und direkt von der Festplatte geöffnet. In Safari wurde nicht getestet.

## Grenzen dieser Version

- Kein Login, keine Rollen, kein Steuerberater-Zugang, keine gemeinsamen Daten über Geräte hinweg.
- Kein E-Mail-Versand aus dem Tool, keine automatischen Erinnerungen, kein automatisches Anlegen wiederkehrender Rechnungen – das Tool zeigt, was fällig ist, ausgelöst wird per Klick.
- Gutschriften nur über den vollen Rechnungsbetrag.
- Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Andere Schriften blockieren das Erstellen mit einem Hinweis.
- Die Vorschau zeigt den Beleg als eine fortlaufende Seite; Seitenumbrüche entstehen erst im PDF.
- iPhone-Fotos im HEIC-Format liest nur Safari. In anderen Browsern vorher als JPG oder PDF exportieren.
- Nicht enthalten: Zeiterfassung, Projekte, Kundenportal, Stripe, PayPal, Bankabgleich, DATEV-Export.

Für Login, Rollen und Synchronisation braucht es einen Server mit Datenbank. Die Fachlogik in `js/lib/` hängt nur über `store.js` und `db.js` am Speicher und lässt sich dafür weiterverwenden.
