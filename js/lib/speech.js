// Spracherkennung des Browsers (Web Speech API). Chrome schickt die Aufnahme dafür an Google,
// Safari an Apple. Firefox unterstützt sie nicht. Das Tool selbst speichert keine Aufnahmen.

export function speechSupported() {
  return typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

const ERRORS = {
  'not-allowed': 'Der Browser darf das Mikrofon nicht verwenden. Bitte in den Website-Einstellungen das Mikrofon erlauben.',
  'service-not-allowed': 'Die Spracherkennung ist in diesem Browser gesperrt. In Safari muss auf dem Mac die Diktierfunktion eingeschaltet sein (Systemeinstellungen → Tastatur → Diktierfunktion).',
  network: 'Die Spracherkennung braucht eine Internetverbindung.',
  'audio-capture': 'Es wurde kein Mikrofon gefunden.',
  'language-not-supported': 'Deutsch wird von der Spracherkennung dieses Browsers nicht unterstützt.',
};
export const speechErrorText = (code) => ERRORS[code] || `Die Spracherkennung ist fehlgeschlagen (${code}).`;

/**
 * Startet das Zuhören. onFinal(text) erhält fertig erkannte Sätze, onInterim(text) den Zwischenstand.
 * Gibt eine Funktion zum Beenden zurück.
 */
export function startListening({ lang = 'de-DE', onFinal, onInterim, onEnd, onError }) {
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new Rec();
  rec.lang = lang;
  rec.continuous = true;
  rec.interimResults = true;
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const text = e.results[i][0].transcript;
      if (e.results[i].isFinal) { if (onFinal) onFinal(text.trim()); } else interim += text;
    }
    if (onInterim) onInterim(interim.trim());
  };
  rec.onerror = (e) => { if (e.error !== 'no-speech' && e.error !== 'aborted' && onError) onError(speechErrorText(e.error)); };
  rec.onend = () => { if (onEnd) onEnd(); };
  rec.start();
  return () => { try { rec.stop(); } catch (_) { /* schon beendet */ } };
}

/** Erkannten Text an vorhandenen Text anhängen (mit Leerzeichen, Satzanfang groß). */
export function appendSpoken(current, spoken) {
  const s = String(spoken || '').trim();
  if (!s) return current || '';
  const cur = String(current || '');
  if (!cur.trim()) return s.charAt(0).toUpperCase() + s.slice(1);
  const sep = /[\s\n]$/.test(cur) ? '' : ' ';
  const cap = /[.!?]\s*$/.test(cur) ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  return cur + sep + cap;
}
