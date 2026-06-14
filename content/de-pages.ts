import { SeoPage } from "../lib/types/seo";

export const dePages: SeoPage[] = [
  {
    slug: "foto-verkleinern",
    metaTitle:
      "Foto verkleinern – Bilder online verkleinern ohne Qualitätsverlust",
    metaDescription:
      "Foto verkleinern leicht gemacht: Unser Online-Tool verkleinert Fotos auf Wunschgröße, komprimiert JPEG/PNG und behält dabei die Bildqualität. Kostenlos, ohne Anmeldung.",
    h1: "Foto verkleinern",
    subtitle:
      "Verkleinere deine Fotos sekundenschnell – behalte die volle Kontrolle über Abmessungen und Dateigröße.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Warum ein spezielles Tool zum Foto verkleinern?",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg">Ein Bild schnell <strong>verkleinern</strong> zu müssen, gehört zum Alltag – ob für den Upload in sozialen Medien, den Versand per E‑Mail oder die Optimierung einer Webseite. Doch wer einfach nur die Pixelmaße reduziert, riskiert verwaschene Details und sichtbare Artefakte. Unser <strong>Foto verkleinern</strong>-Tool geht anders vor: Es kombiniert intelligente Resampling-Algorithmen mit einer optionalen Komprimierung, sodass deine Aufnahmen scharf bleiben und trotzdem deutlich weniger Speicherplatz beanspruchen.</p>
    <p>Anders als ein reiner Bildbetrachter bietet dir unsere Lösung eine live Vorschau im Vergleichsmodus. Du siehst sofort, wie sich die Verkleinerung auf Schärfe, Farben und Details auswirkt. Mit einstellbaren Metriken wie <em>Lanczos3</em> oder <em>bikubischer Interpolation</em> lässt sich das Ergebnis perfekt an den Verwendungszweck anpassen – vom winzigen Profilfoto bis zum hochauflösenden Drucklayout.</p>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
      <h3 class="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">📐 Maßgeschneiderte Verkleinerung</h3>
      <ul class="space-y-2 text-sm text-amber-800 dark:text-amber-200">
        <li class="flex gap-2"><span class="text-amber-600">✓</span> Prozentuale Skalierung oder exakte Pixelwerte</li>
        <li class="flex gap-2"><span class="text-amber-600">✓</span> Seitenverhältnis automatisch beibehalten</li>
        <li class="flex gap-2"><span class="text-amber-600">✓</span> Lange Seite auf Wunschmaß begrenzen</li>
      </ul>
    </div>
    <div class="bg-sky-50 dark:bg-sky-900/20 rounded-xl p-6 border border-sky-200 dark:border-sky-800">
      <h3 class="text-lg font-semibold text-sky-900 dark:text-sky-100 mb-3">⚡ Qualitätserhalt</h3>
      <ul class="space-y-2 text-sm text-sky-800 dark:text-sky-200">
        <li class="flex gap-2"><span class="text-sky-600">✓</span> KI-gestützte Schärfung nach dem Downsampling</li>
        <li class="flex gap-2"><span class="text-sky-600">✓</span> JPEG-Artefakte minimieren</li>
        <li class="flex gap-2"><span class="text-sky-600">✓</span> Exif-Daten optional erhalten</li>
      </ul>
    </div>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border">
    <h3 class="text-lg font-bold mb-4">Foto verkleinern: Schritt für Schritt</h3>
    <ol class="space-y-3 text-sm list-decimal list-inside text-slate-700 dark:text-slate-300">
      <li><strong>Bild hochladen</strong> – per Drag & Drop oder Kamera-Foto.</li>
      <li><strong>Zielgröße festlegen</strong> – Breite und Höhe in px oder mm angeben.</li>
      <li><strong>Qualitätsregler einstellen</strong> – von stark komprimiert bis verlustfrei.</li>
      <li><strong>Vorschau prüfen</strong> – der Vorher‑/Nachher‑Slider zeigt jeden Unterschied.</li>
      <li><strong>Herunterladen</strong> – als JPEG, PNG oder WebP.</li>
    </ol>
  </div>
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Typische Anwendungsfälle für "Foto verkleinern"</h3>
    <table class="min-w-full text-sm">
      <thead class="bg-slate-100 dark:bg-slate-700">
        <tr><th class="p-2 text-left">Zweck</th><th class="p-2 text-left">Empfohlene Größe</th><th class="p-2 text-left">Format</th></tr>
      </thead>
      <tbody class="divide-y">
        <tr><td class="p-2">E‑Mail‑Anhang</td><td class="p-2">max. 1200 px lange Kante</td><td class="p-2">JPEG</td></tr>
        <tr><td class="p-2">Instagram Post</td><td class="p-2">1080 x 1080 px</td><td class="p-2">JPEG</td></tr>
        <tr><td class="p-2">Webseiten‑Banner</td><td class="p-2">1920 x 600 px</td><td class="p-2">WebP</td></tr>
        <tr><td class="p-2">WhatsApp Profilbild</td><td class="p-2">500 x 500 px</td><td class="p-2">JPEG</td></tr>
        <tr><td class="p-2">Druck (10x15 cm)</td><td class="p-2">1800 x 1200 px (300 dpi)</td><td class="p-2">PNG</td></tr>
      </tbody>
    </table>
    <p class="mt-4">Unsere Engine analysiert den Bildinhalt und schlägt selbständig eine optimale Komprimierungsstufe vor, wenn du „Auto“ wählst. So wird ein <strong>Foto verkleinern</strong> zum Ein‑Klick‑Erlebnis – gerade bei ganzen Ordnerstapeln ein unschätzbarer Zeitgewinn.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich mehrere Fotos auf einmal verkleinern?",
        answer:
          "Ja, unser Tool unterstützt Stapelverarbeitung. Du kannst bis zu 20 Bilder gleichzeitig hochladen, die alle mit denselben Einstellungen verkleinert werden. Jedes Bild wird einzeln optimiert und steht sofort zum Download bereit.",
      },
      {
        question: "Wird beim Verkleinern die Bildqualität schlechter?",
        answer:
          "Die reine Verkleinerung der Pixelmaße führt zu einem Detailverlust, aber unsere Schärfungsalgorithmen halten das Bild subjektiv scharf. Zusätzliche Komprimierung kannst du getrennt steuern, um sichtbare Artefakte zu vermeiden.",
      },
      {
        question: "Unterstützt das Tool RAW-Dateien?",
        answer:
          "Direktes Verkleinern von RAW-Formaten (CR2, NEF, ARW) ist nicht möglich. Du musst die RAW-Datei zuerst in JPEG oder PNG konvertieren. Danach kannst du sie bei uns problemlos verkleinern.",
      },
      {
        question: "Verändert das Tool die Metadaten meines Fotos?",
        answer:
          "Standardmäßig bleiben EXIF-Daten wie Aufnahmedatum und Kameramodell erhalten. In den Einstellungen kannst du jedoch wählen, ob du alle Metadaten entfernen möchtest, um die Dateigröße weiter zu reduzieren.",
      },
      {
        question: "Funktioniert das Verkleinern auch auf dem Smartphone?",
        answer:
          "Absolut. Die gesamte Verarbeitung läuft im Browser, daher ist das Tool auf iOS und Android genauso schnell und zuverlässig wie am PC. Eine App ist nicht nötig.",
      },
    ],
  },
  {
    slug: "bild-verkleinern",
    metaTitle: "Bild verkleinern – Online Bilder verkleinern & komprimieren",
    metaDescription:
      "Bild verkleinern ohne Download: Reduziere Bildmaße und Dateigröße gleichzeitig. Perfekt für Webmaster und Blogger. Jetzt kostenlos Bilder verkleinern.",
    h1: "Bild verkleinern",
    subtitle:
      "Verkleinere jedes Bildformat – präzise, schnell und browserbasiert.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Bild verkleinern: Der smarte Allrounder für deine Fotos",
        content: `<div class="space-y-10 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg text-slate-700 dark:text-slate-300">Ein <strong>Bild verkleinern</strong> ist mehr als nur Pixel schrumpfen. Unser Tool versteht, dass du manchmal ein Bild für den Druck, manchmal für eine Website benötigst – und passt die Methodik entsprechend an. Während viele Online-Dienste stumpf herunterrechnen, nutzt unsere Engine eine mehrstufige Skalierung, die Moiré-Effekte und Treppchenbildung unterdrückt. Das Resultat: Dein verkleinertes Bild wirkt, als wäre es nie größer gewesen.</p>
    <p>Besonders praktisch: Du kannst die Zielgröße in Pixeln, Zentimetern oder relativ zur Originalgröße eingeben. Bei einer Eingabe von „50 %“ halbierst du die Länge jeder Seite, die Pixelzahl sinkt um 75 % – ideal für schnelle Stapelverarbeitung. Trotz der vielen Optionen bleibt die Bedienung so einfach wie ein Taschenrechner.</p>
  </div>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border">
      <p class="font-bold text-purple-800 dark:text-purple-200">📱 Mobile first</p>
      <p class="text-sm">Für Instagram Stories auf 1080x1920 verkleinern – mit einem Klick.</p>
    </div>
    <div class="p-5 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl border">
      <p class="font-bold text-green-800 dark:text-green-200">🖨️ Druckreif</p>
      <p class="text-sm">300 dpi erhalten, indem du die Pixelmaße passend zur Ausgabegröße wählst.</p>
    </div>
    <div class="p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-xl border">
      <p class="font-bold text-orange-800 dark:text-orange-200">⏱️ Batch-Modus</p>
      <p class="text-sm">Bis zu 20 Bilder gleichzeitig verkleinern – alle bekommen dieselbe Einstellung.</p>
    </div>
  </div>
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Unterschied: Bild verkleinern vs. Bild komprimieren</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full border">
        <thead>
          <tr><th class="p-2 bg-slate-100 dark:bg-slate-700">Merkmal</th><th class="p-2 bg-slate-100 dark:bg-slate-700">Bild verkleinern</th><th class="p-2 bg-slate-100 dark:bg-slate-700">Bild komprimieren</th></tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="p-2">Auswirkung auf Pixelmaße</td><td class="p-2">Ja – Breite/Höhe werden reduziert</td><td class="p-2">Nein – Maße bleiben unverändert</td></tr>
          <tr><td class="p-2">Dateigröße</td><td class="p-2">Sinkt durch weniger Pixel</td><td class="p-2">Sinkt durch effizientere Kodierung</td></tr>
          <tr><td class="p-2">Qualität</td><td class="p-2">Detailverlust unvermeidlich, aber optimiert</td><td class="p-2">Kaum sichtbare Unterschiede bei moderater Kompression</td></tr>
          <tr><td class="p-2">Typische Anwendung</td><td class="p-2">Bild für Profilfoto, Vorschaubild</td><td class="p-2">Web-Performance, E‑Mail-Versand</td></tr>
        </tbody>
      </table>
    </div>
    <p>In der Praxis kombinieren viele User beide Schritte: Erst das <strong>Bild verkleinern</strong> auf die benötigte Anzeigegröße, dann mit dem Kompressor die Dateiendgröße optimieren.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Zielgröße in Zentimetern angeben?",
        answer:
          "Ja, wähle einfach die Einheit „cm“ im Drop‑down‑Menü. Das Tool rechnet dann mit dem gewünschten DPI‑Wert automatisch die benötigte Pixelzahl um.",
      },
      {
        question: "Werden beim Verkleinern die Proportionen beibehalten?",
        answer:
          "Standardmäßig ist die Seitenverhältnissperre aktiviert. Du kannst sie manuell lösen, wenn du ein Bild bewusst strecken oder stauchen möchtest, aber für die meisten Fälle ist die automatische Beibehaltung empfehlenswert.",
      },
      {
        question: "Wie viele Bilder kann ich gleichzeitig verkleinern?",
        answer:
          "Im Batch‑Modus sind bis zu 20 Bilder auf einmal möglich. Jedes Bild wird individuell skaliert und du bekommst alle Ergebnisse in einem ZIP-Archiv zum Download.",
      },
      {
        question: "Bleibt die Transparenz bei PNG-Dateien erhalten?",
        answer:
          "Ja, wenn du ein PNG mit Alphakanal hochlädst, wird die Transparenz auch nach dem Verkleinern gespeichert. Das funktioniert sowohl mit verlustfreier Kompression als auch mit konvertierten Formaten.",
      },
      {
        question: "Ist das Tool wirklich kostenlos?",
        answer:
          "Vollkommen. Es gibt keine versteckten Kosten, kein Wasserzeichen und keine Pflicht zur Anmeldung. Du kannst unbegrenzt viele Bilder verkleinern und herunterladen.",
      },
    ],
  },
  {
    slug: "bildgroesse-aendern",
    metaTitle: "Bildgröße ändern online – Pixel, cm, mm flexibel einstellen",
    metaDescription:
      "Bildgröße ändern in Echtzeit: Gib deine Wunschmaße ein und erhalte sofort ein perfekt skaliertes Bild. Auch für Millimeter-Angaben geeignet.",
    h1: "Bildgröße ändern",
    subtitle:
      "Exakte Abmessungen für jeden Zweck – vom Passbild bis zum Banner.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Präzise Bildgröße ändern – So funktioniert’s",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ob du ein <strong>Bildgröße ändern</strong> für eine Bewerbung, einen Online-Shop oder ein Poster benötigst – unser Editor rechnet Millimeter, Zentimeter und Pixel in Echtzeit um. Du gibst einfach die gewünschten Werte ein und siehst sofort, wie viel von deinem Bild beschnitten oder hinzugefügt wird. Dank der eingebauten DPI‑Anpassung bleibt dein Bild selbst bei exotischen Maßen wie 35 × 45 mm gestochen scharf.</p>
  </div>
  <div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200">
    <ul class="list-disc list-inside space-y-2 text-indigo-800 dark:text-indigo-200">
      <li>Eingabe in px, cm, mm oder inch</li>
      <li>DPI‑Slider für druckoptimierte Ausgabe</li>
      <li>Verhältnissperre mit optionalem Freistellen</li>
      <li>Vorschau in Originalgröße per Cursor-Hover</li>
    </ul>
  </div>
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein häufiger Fehler beim <strong>Bildgröße ändern</strong> ist das versehentliche Strecken oder Stauchen. Unsere Software warnt dich, wenn das Seitenverhältnis nicht beibehalten wird, und schlägt stattdessen einen intelligenten Beschnitt vor. So entstehen keine unnatürlich verzerrten Gesichter oder gequetschten Logos.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Kann ich die Bildgröße für ein bestimmtes soziales Netzwerk voreinstellen?",
        answer:
          "Ja, wir bieten vordefinierte Presets für Instagram, Facebook, Twitter und viele andere Plattformen. So musst du die Maße nicht manuell suchen.",
      },
      {
        question:
          "Was passiert, wenn mein Bild nicht die gewünschten Proportionen hat?",
        answer:
          "Das Tool zeigt dir eine Live-Vorschau und schlägt einen passenden Beschnitt vor. Du kannst den Ausschnitt frei verschieben und dann auf die exakte Zielgröße skalieren lassen.",
      },
      {
        question: "Wie stelle ich sicher, dass mein Bild druckfähig ist?",
        answer:
          "Gib die Maße in Zentimetern oder Millimetern ein und stelle den DPI‑Wert auf 300. Das Tool berechnet dann automatisch die benötigte Pixelanzahl für den Druck.",
      },
      {
        question:
          "Ändert das Tool die Dateigröße, wenn ich nur die Pixelmaße anpasse?",
        answer:
          "Ja, die Dateigröße sinkt mit der Pixelanzahl. Zusätzlich kannst du über den Qualitätsregler die Kompression anpassen, wenn du mehr Speicherplatz sparen möchtest.",
      },
      {
        question: "Funktioniert die Größenänderung auch bei animierten GIFs?",
        answer:
          "Animierte GIFs können in der Größe geändert werden, jedoch wird die Animation dabei nicht verlangsamt oder beschädigt. Das Ergebnis bleibt ein bewegtes GIF.",
      },
    ],
  },
  {
    slug: "foto-groesse-aendern",
    metaTitle: "Foto Größe ändern – Fotos online skalieren & zuschneiden",
    metaDescription:
      "Foto Größe ändern in wenigen Klicks. Für Social Media, Druck oder Web. Keine Anmeldung, keine Software-Installation.",
    h1: "Foto Größe ändern",
    subtitle:
      "Ändere Fotogrößen direkt im Browser – passgenau für jeden Kanal.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Foto Größe ändern leicht gemacht",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Das <strong>Foto Größe ändern</strong> gehört zu den Basics der Bildbearbeitung, doch viele Programme machen es komplizierter als nötig. Unser Werkzeug konzentriert sich auf das Wesentliche: Wunschmaße eingeben, ggf. zuschneiden, fertig. Du kannst entweder vordefinierte Sets für Facebook, Twitter, LinkedIn & Co. nutzen oder komplett freie Werte wählen.</p>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
    <div class="p-3 bg-white dark:bg-slate-800 rounded shadow-sm"><span class="text-xl font-bold">1080x1080</span><br><span class="text-xs">Instagram</span></div>
    <div class="p-3 bg-white dark:bg-slate-800 rounded shadow-sm"><span class="text-xl font-bold">1200x630</span><br><span class="text-xs">Facebook</span></div>
    <div class="p-3 bg-white dark:bg-slate-800 rounded shadow-sm"><span class="text-xl font-bold">2560x1440</span><br><span class="text-xs">YouTube</span></div>
    <div class="p-3 bg-white dark:bg-slate-800 rounded shadow-sm"><span class="text-xl font-bold">350x350</span><br><span class="text-xs">eBay</span></div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich das Seitenverhältnis meines Fotos frei ändern?",
        answer:
          "Ja, du kannst die Proportionen entsperren und Breite sowie Höhe unabhängig voneinander festlegen. Das Tool warnt dich aber, wenn das Bild dadurch verzerrt werden könnte.",
      },
      {
        question: "Welche vordefinierten Größen gibt es?",
        answer:
          "Wir haben Vorlagen für alle gängigen Plattformen: Instagram Post/Story, Facebook Cover, YouTube Thumbnail, LinkedIn Profilbild, Twitter Header und viele mehr.",
      },
      {
        question:
          "Wird mein Foto nach der Größenänderung automatisch gespeichert?",
        answer:
          "Nein, du musst das fertige Bild manuell herunterladen. So hast du jederzeit die volle Kontrolle und kannst vor dem Speichern noch Änderungen vornehmen.",
      },
      {
        question: "Kann ich die Größe mehrerer Fotos auf einmal ändern?",
        answer:
          "Ja, über die Batch‑Funktion kannst du bis zu 20 Fotos gleichzeitig hochladen und für alle dieselben Abmessungen einstellen. Jedes Bild wird einzeln verarbeitet.",
      },
      {
        question: "Brauche ich für die Größenänderung spezielle Software?",
        answer:
          "Nein, alles läuft direkt im Browser. Du musst nichts installieren, und die Bearbeitung funktioniert auf Windows, Mac, Linux, iOS und Android gleichermaßen.",
      },
    ],
  },
  {
    slug: "bild-komprimieren",
    metaTitle: "Bild komprimieren – JPEG & PNG online komprimieren",
    metaDescription:
      "Bild komprimieren, ohne Qualität einzubüßen. Reduziere die Dateigröße von Fotos um bis zu 80%. Kostenlos und ohne Upload-Limit.",
    h1: "Bild komprimieren",
    subtitle:
      "Weniger Kilobyte, gleicher Look – optimierte Bilder für schnelle Ladezeiten.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Effizientes Bild komprimieren für Web und E-Mail",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein unkomprimiertes Foto von einer modernen Smartphone-Kamera kann schnell 8 MB oder mehr belegen. Bevor du es verschickst oder auf deine Website lädst, solltest du es unbedingt <strong>komprimieren</strong>. Unser Algorithmus analysiert Farbverläufe und Detailbereiche separat und wendet eine adaptive Quantisierung an. Flächige Himmel oder Unschärfe werden stärker komprimiert als scharfe Konturen – das Ergebnis ist ein optisch nahezu unverändertes Bild mit drastisch reduzierter Dateigröße.</p>
  </div>
  <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200">
    <h3 class="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Kompressionsstufen im Vergleich</h3>
    <table class="w-full text-sm">
      <thead><tr class="text-yellow-800"><th class="p-2">Stufe</th><th class="p-2">Dateigröße (Ø)</th><th class="p-2">Sichtbare Qualität</th></tr></thead>
      <tbody>
        <tr><td class="p-2">Leicht (90%)</td><td class="p-2">-20%</td><td class="p-2">Identisch</td></tr>
        <tr><td class="p-2">Mittel (75%)</td><td class="p-2">-50%</td><td class="p-2">Kaum Unterschied</td></tr>
        <tr><td class="p-2">Stark (60%)</td><td class="p-2">-75%</td><td class="p-2">Leichte Artefakte in feinen Mustern</td></tr>
        <tr><td class="p-2">Maximum (40%)</td><td class="p-2">-85%</td><td class="p-2">Sichtbare Klötzchen, nur für Thumbnails</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Kompressionsstärke vorher testen?",
        answer:
          "Ja, der Vorher‑/Nachher‑Vergleich zeigt dir bei jeder Einstellung sofort das voraussichtliche Ergebnis. Du kannst den Schieberegler beliebig bewegen, bis du mit Qualität und Dateigröße zufrieden bist.",
      },
      {
        question: "Werden die Metadaten (EXIF) beim Komprimieren gelöscht?",
        answer:
          "Standardmäßig ja, um die maximale Einsparung zu erzielen. In den erweiterten Optionen kannst du aber festlegen, dass Aufnahmedatum und Kameramodell erhalten bleiben.",
      },
      {
        question: "Unterstützt die Komprimierung auch das WebP-Format?",
        answer:
          "Ja, du kannst sowohl nach JPEG und PNG als auch nach WebP komprimieren. WebP bietet bei gleicher Qualität meist kleinere Dateien und eignet sich besonders für moderne Webseiten.",
      },
      {
        question: "Wird die Auflösung beim Komprimieren verändert?",
        answer:
          "Nein, die Pixelmaße bleiben unverändert. Das Tool reduziert ausschließlich die Dateigröße durch effizientere Kodierung, ohne das Bild zu verkleinern.",
      },
      {
        question: "Gibt es ein Limit für die Dateigröße beim Hochladen?",
        answer:
          "Du kannst Bilder bis zu 50 MB hochladen. Die Komprimierung erfolgt trotzdem schnell und ohne Upload-Limit für die Anzahl der Bilder.",
      },
    ],
  },
  {
    slug: "bildgroesse-reduzieren",
    metaTitle:
      "Bildgröße reduzieren online – Fotos schrumpfen ohne Qualitätsverlust",
    metaDescription:
      "Bildgröße reduzieren: Verkleinere Pixelmaße und Dateigröße gleichzeitig. Unser Tool hilft dir, Speicherplatz freizugeben.",
    h1: "Bildgröße reduzieren",
    subtitle:
      "Schnell Speicherplatz sparen – ein Bild nach dem anderen oder im Stapel.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Bildgröße reduzieren für Festplatte & Cloud",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Wenn deine Fotobibliothek aus allen Nähten platzt, hilft <strong>Bildgröße reduzieren</strong> auf zwei Wegen: Du verkleinerst entweder die Auflösung auf ein für Bildschirme ausreichendes Maß, oder du wendest eine verlustbehaftete Kompression an. Unser Tool erledigt beides parallel und zeigt vor dem Speichern die voraussichtliche Einsparung an.</p>
  </div>
  <div class="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 rounded">
    <p class="text-red-800 dark:text-red-200"><strong>Hinweis:</strong> Erstelle vor einer Massenreduktion unbedingt eine Sicherungskopie. Einmal überschriebene Originale lassen sich nicht wiederherstellen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Reduziert das Tool nur die Pixelmaße oder auch die Dateigröße?",
        answer:
          "Es kann beides. Du entscheidest, ob du nur die Abmessungen verkleinern oder zusätzlich die Kompression erhöhen willst. Beide Wege sparen Speicherplatz.",
      },
      {
        question: "Kann ich die Reduktion rückgängig machen?",
        answer:
          "Nein, sobald du die reduzierte Version herunterlädst und speicherst, sind die Originaldaten verloren. Bewahre deshalb immer eine Sicherungskopie auf.",
      },
      {
        question:
          "Um wie viel Prozent kann ich die Bildgröße typischerweise reduzieren?",
        answer:
          "Das hängt vom Motiv ab, aber oft erreichen wir Einsparungen von 60–80 %, ohne dass das Bild für den Betrachter schlechter aussieht.",
      },
      {
        question: "Ist die Funktion mit allen Bildformaten kompatibel?",
        answer:
          "JPEG, PNG und WebP werden voll unterstützt. Bei PNG-Dateien mit Transparenz bleibt der Alpha-Kanal auch nach der Reduktion erhalten.",
      },
      {
        question:
          "Kann ich die Bildgröße auch für eine ganze Ordnerstruktur reduzieren?",
        answer:
          "Aktuell nur über die Batch‑Funktion, bei der du bis zu 20 Bilder manuell auswählst. Eine automatische Ordnerüberwachung gibt es nicht, um deine Privatsphäre zu schützen.",
      },
    ],
  },
  {
    slug: "foto-resizer",
    metaTitle: "Foto Resizer – Online Fotos skalieren & zuschneiden",
    metaDescription:
      "Der kostenlose Foto Resizer: Ändere die Größe deiner Fotos für jede Plattform. Passbilder, Profilfotos, Banner – alles in einem Tool.",
    h1: "Foto Resizer",
    subtitle:
      "Resize your photos instantly – with a German interface you’ll love.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Foto Resizer – Der universelle Größenwandler",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Foto Resizer</strong> ist mehr als nur ein Verkleinerer. Unser Tool beherrscht das gleichzeitige Skalieren und Beschneiden, das Konvertieren zwischen Formaten und das Anpassen der Auflösung. Du kannst ein 4K‑Foto in ein druckfertiges 10x15‑cm‑Bild verwandeln oder ein rechteckiges Bild quadratisch zuschneiden, ohne den Hauptinhalt zu verlieren.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich mit dem Foto Resizer auch das Bildformat ändern?",
        answer:
          "Ja, du kannst beim Herunterladen zwischen JPEG, PNG und WebP wählen. So skalierst du das Bild und konvertierst es gleichzeitig in das gewünschte Format.",
      },
      {
        question: "Unterstützt der Resizer 4K-Fotos?",
        answer:
          "Ohne Einschränkungen. Selbst hochauflösende Bilder mit mehr als 20 Megapixeln werden schnell verarbeitet und auf jede beliebige Zielgröße herunterskaliert.",
      },
      {
        question: "Kann ich den Ausschnitt interaktiv bestimmen?",
        answer:
          "Ja, ziehe einfach den Rahmen über den gewünschten Bildbereich. Per Klick auf das Seitenverhältnis-Icon rastet der Rahmen in vorgegebenen Formaten ein.",
      },
      {
        question: "Bleibt die Bildqualität bei starker Verkleinerung erhalten?",
        answer:
          "Durch einen Schärfungsfilter nach dem Resampling bleibt der Bildeindruck auch bei extremer Verkleinerung natürlich. Nur bei sehr starker Vergrößerung gibt es unvermeidliche Unschärfe.",
      },
      {
        question: "Muss ich mich registrieren, um den Foto Resizer zu nutzen?",
        answer:
          "Nein, der Service ist vollständig anonym und ohne Anmeldung nutzbar. Deine Bilder werden direkt im Browser verarbeitet und niemals auf einen Server hochgeladen.",
      },
    ],
  },
  {
    slug: "bild-resizer",
    metaTitle: "Bild Resizer online – Bilder skalieren in Echtzeit",
    metaDescription:
      "Bild Resizer mit Live-Vorschau: Ändere die Bildgröße pixelgenau und lade das Ergebnis direkt herunter.",
    h1: "Bild Resizer",
    subtitle:
      "Bildgrößen anpassen war nie einfacher – präzise, flexibel, werbefrei.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Bild Resizer für alle Gelegenheiten",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ob du den <strong>Bild Resizer</strong> für eine Bewerbung, ein Foren‑Avatar oder eine Produktabbildung brauchst – die Bedienung ist identisch: Bild einfügen, neue Maße wählen, speichern. Besonders hilfreich ist die Möglichkeit, die Ausgabegröße in Prozent anzugeben, wenn das Ausgangsformat unbekannt ist.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Skalierung in Prozent angeben?",
        answer:
          "Ja, statt fester Pixelwerte kannst du auch einen Prozentwert wie 50 % eingeben. Das Bild wird dann proportional verkleinert.",
      },
      {
        question: "Was passiert, wenn ich eine Prozentzahl über 100 eingebe?",
        answer:
          "Das Bild wird hochskaliert. Wir empfehlen das aber nur in Ausnahmefällen, da die Qualität leidet. Besser ist es, das Original in höherer Auflösung zu verwenden.",
      },
      {
        question: "Werden bei der Skalierung die Farben verfälscht?",
        answer:
          "Nein, der Bild Resizer arbeitet farbtreu und unterstützt eingebettete Farbprofile wie sRGB oder Adobe RGB.",
      },
      {
        question: "Kann ich die Größe von Screenshots automatisch anpassen?",
        answer:
          "Selbstverständlich. Lade einfach den Screenshot hoch und wähle die gewünschten Abmessungen. Das Tool erkennt das Format und skaliert pixelgenau.",
      },
      {
        question:
          "Gibt es einen Qualitätsunterschied zwischen dem Resizer und einer Desktop-Software?",
        answer:
          "Nein, unsere Browser-Engine verwendet dieselben Resampling-Algorithmen wie professionelle Bildbearbeitungsprogramme. Das Ergebnis ist visuell identisch.",
      },
    ],
  },
  {
    slug: "bild-online-verkleinern",
    metaTitle: "Bild online verkleinern – ohne Download, direkt im Browser",
    metaDescription:
      "Bild online verkleinern ohne Installation. Reduziere Bildgröße und Dateigröße in Sekunden. Funktioniert auf Handy und PC.",
    h1: "Bild online verkleinern",
    subtitle:
      "Keine Software, keine Registrierung – einfach Bild online verkleinern.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Bild online verkleinern – Der schnellste Weg",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Du möchtest ein <strong>Bild online verkleinern</strong>, ohne erst ein Programm herunterladen zu müssen? Genau dafür wurde unser Tool gebaut. Die gesamte Verarbeitung findet in deinem Browser statt – deine Bilder verlassen niemals deinen Rechner. Das schont nicht nur deine Privatsphäre, sondern macht die Bearbeitung auch rasend schnell, weil keine Upload-Wartezeiten entstehen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Werden meine Bilder auf einen Server geladen?",
        answer:
          "Nein, der gesamte Prozess läuft lokal im Browser. Deine Fotos bleiben auf deinem Gerät und werden nicht an Dritte weitergegeben.",
      },
      {
        question: "Funktioniert das auch, wenn ich offline bin?",
        answer:
          "Sobald die Seite einmal geladen wurde, kannst du viele Funktionen auch ohne Internetverbindung nutzen, da die KI-Modelle im Cache gespeichert werden.",
      },
      {
        question: "Gibt es Werbung oder versteckte Kosten?",
        answer:
          "Wir verzichten bewusst auf aufdringliche Werbung und verlangen kein Geld. Das Tool ist werbefinanziert, aber die Anzeigen stören die Bearbeitung nicht.",
      },
      {
        question: "Kann ich das Tool in meinem Firmennetzwerk ohne VPN nutzen?",
        answer:
          "Ja, da keine Daten das Netzwerk verlassen, gibt es keine Sicherheitsbedenken. Es sind keine speziellen Firewall-Freigaben nötig.",
      },
      {
        question: "Welche Browser werden unterstützt?",
        answer:
          "Alle modernen Browser: Chrome, Firefox, Safari und Edge. Für beste Leistung empfehlen wir die jeweils aktuelle Version.",
      },
    ],
  },
  {
    slug: "foto-online-verkleinern",
    metaTitle: "Foto online verkleinern – Schnell & datenschutzfreundlich",
    metaDescription:
      "Foto online verkleinern ohne Registrierung: Lade dein Bild und wähle die gewünschte Größe. Keine Cloud, kein Tracking.",
    h1: "Foto online verkleinern",
    subtitle: "Verkleinere Fotos direkt im Browser – sicher und unkompliziert.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Warum ein Online-Tool für Foto verkleinern?",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Foto online verkleinern</strong> zu können, erspart dir das Jonglieren mit verschiedenen Programmen. Gerade unterwegs, wenn du schnell ein Bild für WhatsApp oder Instagram brauchst, ist eine browserbasierte Lösung Gold wert. Unsere Seite funktioniert auf iOS und Android genauso reibungslos wie am Desktop.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich das Foto direkt nach der Aufnahme verkleinern?",
        answer:
          "Ja, über die Kamera-Schaltfläche nimmst du ein Foto auf und bearbeitest es sofort. So entfällt der Umweg über die Galerie.",
      },
      {
        question:
          "Wird mein Foto automatisch gelöscht, nachdem ich es verkleinert habe?",
        answer:
          "Da alles lokal läuft, wird nichts auf einem Server gespeichert. Sobald du das Browser-Tab schließt, sind alle temporären Daten weg.",
      },
      {
        question: "Unterstützt die Seite auch Live-Fotos von iPhones?",
        answer:
          "Live-Fotos werden als normales Standbild behandelt. Der Bewegungsteil geht verloren, das Einzelbild kann aber problemlos verkleinert werden.",
      },
      {
        question:
          "Wie kann ich sicherstellen, dass das verkleinerte Foto die richtige DPI hat?",
        answer:
          "Im Einstellungsmenü kannst du den DPI-Wert festlegen. Für den Druck sind 300 dpi ideal, für Bildschirme reichen 72 dpi.",
      },
      {
        question:
          "Kann ich während des Verkleinerns auch den Bildausschnitt ändern?",
        answer:
          "Ja, das integrierte Freistellwerkzeug erlaubt dir, den Bildausschnitt vor der Größenänderung zu bestimmen.",
      },
    ],
  },
  {
    slug: "minimize-photo-size",
    metaTitle: "Minimize Photo Size – Reduce Image Dimensions & File Size",
    metaDescription:
      "Minimize photo size online: shrink picture dimensions and file weight in one step. Free, fast, no sign-up.",
    h1: "Minimize Photo Size",
    subtitle: "Shrink your photos without sacrificing sharpness.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "How Our Tool Helps You Minimize Photo Size",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>When you need to <strong>minimize photo size</strong> for email, social media, or web galleries, our tool offers a precise two-in-one solution: downscale resolution and apply smart compression. Even if the interface is primarily in German, the controls are intuitive enough for English speakers. Simply drag your image, set the target width in pixels, adjust the quality slider, and download a perfectly optimized JPEG, PNG, or WebP.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Does the tool work with HEIC images from iPhones?",
        answer:
          "Yes, HEIC files are fully supported. You can minimize both dimensions and file size, and optionally convert them to JPEG or PNG.",
      },
      {
        question:
          "Can I minimize the photo size without changing the dimensions?",
        answer:
          "Yes, use the 'Compress only' mode. It keeps the original resolution and reduces the file size by optimizing the encoding.",
      },
      {
        question: "Is there a limit on the number of photos I can resize?",
        answer:
          "No, you can process an unlimited number of images. Each batch can contain up to 20 photos for simultaneous resizing.",
      },
      {
        question: "Will minimizing the size affect print quality?",
        answer:
          "If you reduce pixel dimensions, print quality may suffer. We recommend keeping at least 300 DPI for print and only minimizing file size via compression.",
      },
      {
        question: "How secure is my photo when using this online tool?",
        answer:
          "All processing is done locally in your browser. Your images are never uploaded to any server, ensuring complete privacy.",
      },
    ],
  },
  {
    slug: "photo-cropper-online",
    metaTitle: "Photo Cropper Online – Zuschneiden & gleichzeitig verkleinern",
    metaDescription:
      "Photo cropper online mit integriertem Resizer: Wähle den Bildausschnitt und skaliere ihn direkt auf dein Wunschformat.",
    h1: "Photo Cropper Online",
    subtitle:
      "Präzises Freistellen plus Größenänderung in einem Arbeitsschritt.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Der Photo Cropper Online mit eingebautem Resizer",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Photo Cropper Online</strong> ist erst dann wirklich praktisch, wenn du den zugeschnittenen Bereich auch gleich auf die benötigte Größe bringen kannst. Unser Tool erlaubt dir, einen freien oder festen Rahmen (z. B. 4:3, 1:1) aufzuziehen und dann die Ausgabeauflösung unabhängig vom Original festzulegen. So entsteht aus einem 4000x3000‑Schnappschuss im Handumdrehen ein scharfes 800x800‑Profilbild.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich das Seitenverhältnis beim Zuschneiden frei wählen?",
        answer:
          "Ja, du kannst beliebige Verhältnisse wie 4:5, 16:9 oder 1:1 einstellen oder den Rahmen komplett frei ziehen.",
      },
      {
        question:
          "Ist es möglich, den zugeschnittenen Bereich sofort zu verkleinern?",
        answer:
          "Genau das ist der Vorteil: Nach dem Zuschneiden gibst du eine Zielgröße an und das Tool skaliert nur diesen Ausschnitt, ohne den Rest des Bildes zu verändern.",
      },
      {
        question:
          "Kann ich ein zugeschnittenes Bild in verschiedenen Formaten speichern?",
        answer:
          "Ja, du wählst beim Download zwischen JPEG, PNG und WebP. So erhältst du einen perfekt zugeschnittenen und formatierten Output.",
      },
      {
        question: "Gibt es eine Rasterhilfe für bessere Bildkomposition?",
        answer:
          "Ja, du kannst die Drittel-Regel-Linien oder ein goldenes Spiralen-Overlay einblenden, um das Motiv harmonisch zu platzieren.",
      },
      {
        question: "Bleibt der zugeschnittene Bereich verlustfrei?",
        answer:
          "Solange du das Ergebnis als PNG ohne zusätzliche Kompression speicherst, ist der Ausschnitt verlustfrei. Bei JPEG wird je nach Qualitätseinstellung komprimiert.",
      },
    ],
  },
  {
    slug: "photo-image-resizer",
    metaTitle: "Photo Image Resizer – Resize & Crop Images Online",
    metaDescription:
      "Free photo image resizer: Change picture dimensions, compress, and convert formats. Works without installation.",
    h1: "Photo Image Resizer",
    subtitle: "Resize any image – from passport photos to web banners.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Photo Image Resizer für internationale Nutzer",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Our <strong>photo image resizer</strong> is built for users who need to change picture dimensions quickly. Despite the German interface, all functions are self-explanatory: upload, enter new size, compress if needed, download. It supports bulk resizing for up to 20 images at once.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Can I resize an image to exact millimeters?",
        answer:
          "Yes, switch the unit to mm and enter the desired dimensions. The tool calculates the corresponding pixels based on the DPI setting.",
      },
      {
        question: "Does the resizer preserve transparency?",
        answer:
          "Yes, if you upload a PNG with transparency, the resized output will also have an alpha channel, provided you keep the PNG format.",
      },
      {
        question: "Is there an API I can use to automate resizing?",
        answer:
          "Currently we offer a web interface only. An API for developers is planned and will be announced on our blog.",
      },
      {
        question: "How large can the input image be?",
        answer:
          "We support files up to 50 MB. Very large panoramas may take a few seconds but are handled without problems.",
      },
      {
        question: "Can I resize images in a ZIP archive?",
        answer:
          "Not directly. You need to extract the images first and then upload them via the batch upload.",
      },
    ],
  },
  {
    slug: "foto",
    metaTitle:
      "Foto online bearbeiten – Bilder optimieren, verkleinern, freistellen",
    metaDescription:
      "Kostenlose Fotobearbeitung im Browser: Foto verkleinern, zuschneiden, komprimieren, Hintergrund entfernen. Jetzt ausprobieren.",
    h1: "Foto",
    subtitle: "Dein Schweizer Taschenmesser für alle Fotobearbeitungen.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Alles, was du mit deinem Foto anstellen kannst",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Unter dem Begriff <strong>Foto</strong> bündeln wir sämtliche Werkzeuge: Du kannst dein Foto verkleinern, komprimieren, drehen, spiegeln, zuschneiden und sogar den Hintergrund entfernen – alles auf derselben Oberfläche. Anders als spezialisierte Einzelseiten musst du dein Bild nicht mehrmals hochladen, sondern bearbeitest es in einer durchgehenden Session.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich mehrere Bearbeitungen hintereinander vornehmen?",
        answer:
          "Ja, alle Änderungen werden in der Session gespeichert. Du kannst z. B. erst den Hintergrund entfernen und das Ergebnis dann noch zuschneiden und verkleinern.",
      },
      {
        question: "Wird mein Originalfoto überschrieben?",
        answer:
          "Nein, die Bearbeitung erstellt eine Kopie. Dein Original bleibt unverändert auf deinem Gerät, solange du die Datei nicht manuell ersetzt.",
      },
      {
        question: "Welche Werkzeuge sind im Foto-Tool vereint?",
        answer:
          "Verkleinern, Zuschneiden, Drehen, Spiegeln, Komprimieren, Formatkonvertierung und KI-gestützte Hintergrundentfernung.",
      },
      {
        question: "Kann ich den Bearbeitungsstand zwischenspeichern?",
        answer:
          "Nicht als Projektdatei, aber du kannst Zwischenergebnisse herunterladen und später erneut hochladen, um weiterzuarbeiten.",
      },
      {
        question: "Unterstützt das Tool RAW-Dateien?",
        answer:
          "RAW-Formate werden nicht direkt unterstützt. Bitte konvertiere sie vorher in JPEG oder PNG.",
      },
    ],
  },
  {
    slug: "bild",
    metaTitle:
      "Bild online bearbeiten – Verkleinern, komprimieren, konvertieren",
    metaDescription:
      "Bildbearbeitung direkt im Browser: Verkleinere, komprimiere und konvertiere jedes Bild. Kostenlos und ohne Werbung.",
    h1: "Bild",
    subtitle: "Das universelle Bild-Tool für alle Größen und Formate.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Dein Bild im Mittelpunkt",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Bild</strong> zu bearbeiten bedeutet heute weit mehr als nur Größenanpassung. Ob du es für einen Blog optimierst, in ein PDF einbetten oder als Profilbild nutzen möchtest – unser Editor bietet dir für jeden Zweck die passenden Einstellungen. Mit dem integrierten Formatkonverter wechselst du mühelos zwischen JPEG, PNG und WebP.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Welche Formate kann ich mit dem Bild-Tool öffnen?",
        answer:
          "JPEG, PNG, WebP und HEIC. Andere Formate wie TIFF oder BMP können vor dem Öffnen konvertiert werden müssen.",
      },
      {
        question:
          "Kann ich die Helligkeit oder den Kontrast meines Bildes anpassen?",
        answer:
          "Das Bild-Tool konzentriert sich auf Größe, Kompression und Hintergrund. Für Farbkorrekturen empfehlen wir spezialisierte Editoren.",
      },
      {
        question: "Wie sicher sind meine Bilder?",
        answer:
          "Extrem sicher. Alle Bearbeitungen passieren lokal im Browser, kein Bild wird auf einen Server hochgeladen.",
      },
      {
        question: "Gibt es eine Undo-Funktion?",
        answer:
          "Ja, du kannst jeden Schritt rückgängig machen (Strg+Z), solange du die Session nicht neu lädst.",
      },
      {
        question:
          "Kann ich ein Bild auch in ein anderes Dateiformat konvertieren?",
        answer:
          "Ja, beim Download wählst du das gewünschte Zielformat. So wird aus einem PNG blitzschnell ein JPEG.",
      },
    ],
  },
  {
    slug: "bearbeiten",
    metaTitle:
      "Bilder bearbeiten online – Foto-Editor mit allen wichtigen Funktionen",
    metaDescription:
      "Bilder bearbeiten direkt im Browser: Verkleinern, zuschneiden, drehen, Hintergrund entfernen. Kostenlos und ohne Anmeldung.",
    h1: "Bearbeiten",
    subtitle: "Fotos bearbeiten wie ein Profi – ohne Vorkenntnisse.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Bilder bearbeiten in nur einem Fenster",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Der Menüpunkt <strong>Bearbeiten</strong> fasst alle Werkzeuge zusammen, die du für eine schnelle Bildoptimierung brauchst. Drehe dein Bild, wenn es auf dem Kopf steht, schneide störende Ränder weg oder passe die Helligkeit an – alles ohne ein separates Programm starten zu müssen. Die Änderungen werden live angezeigt und lassen sich jederzeit rückgängig machen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Kann ich mit dem Bearbeiten-Tool auch rote Augen korrigieren?",
        answer:
          "Nein, dafür fehlt eine spezielle Funktion. Du kannst aber den Hintergrund entfernen und das Bild anderweitig optimieren.",
      },
      {
        question: "Gibt es Filter oder Effekte?",
        answer:
          "Wir verzichten bewusst auf verspielte Filter, um die Ladezeit gering zu halten und die Kernfunktionen schlank zu halten.",
      },
      {
        question: "Wie kann ich mein Bild drehen?",
        answer:
          "Nutze die Drehen-Schaltfläche. Du kannst 90°-Schritte ausführen oder das Bild mit einem Schieberegler frei um bis zu 45° rotieren und automatisch begradigen lassen.",
      },
      {
        question: "Sind alle Bearbeitungsfunktionen kostenlos?",
        answer:
          "Ja, es gibt keine Einschränkungen. Selbst die KI-gestützte Hintergrundentfernung ist unbegrenzt nutzbar.",
      },
      {
        question: "Kann ich das bearbeitete Bild direkt teilen?",
        answer:
          "Eine direkte Teilen-Funktion gibt es nicht, aber du kannst das Bild herunterladen und dann in der gewünschten App teilen.",
      },
    ],
  },
  {
    slug: "zuschneiden",
    metaTitle: "Bild zuschneiden online – Fotos freistellen & Rahmen wählen",
    metaDescription:
      "Bild zuschneiden auf jedes Format: 1:1, 4:3, 16:9 oder frei. Sofortige Vorschau, keine Qualitätseinbußen.",
    h1: "Zuschneiden",
    subtitle: "Perfekte Bildausschnitte – Millimetergenau und ohne Aufwand.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Präzises Zuschneiden von Bildern",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Das <strong>Zuschneiden</strong> ist eine der häufigsten Bearbeitungen. Unser Tool bietet nicht nur die klassischen Seitenverhältnisse, sondern auch die Möglichkeit, anhand einer goldenen Spirale oder Drittel‑Regel‑Gitterlinien harmonische Ausschnitte zu finden. Nach dem Zuschnitt kannst du die Auflösung des Ergebnisses sofort anpassen – ideal, wenn du nur einen bestimmten Bildteil in hoher Qualität benötigst.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich das Seitenverhältnis sperren?",
        answer:
          "Ja, klicke auf das Schloss-Symbol, um ein festes Verhältnis wie 1:1 oder 16:9 zu wählen. Der Rahmen behält dann diese Proportionen.",
      },
      {
        question: "Kann ich den Zuschnitt pixelgenau festlegen?",
        answer:
          "Ja, du kannst die Ausgabegröße in Pixeln direkt eingeben und den Rahmen entsprechend positionieren. So erhältst du einen exakten Ausschnitt.",
      },
      {
        question: "Was passiert mit dem Rest des Bildes?",
        answer:
          "Der Bereich außerhalb des Rahmens wird unwiderruflich abgeschnitten. Du solltest das Original behalten, falls du später einen anderen Ausschnitt benötigst.",
      },
      {
        question: "Gibt es eine Hilfslinie für die Bildkomposition?",
        answer:
          "Ja, aktiviere die Drittel-Regel-Linien oder die goldene Spirale. Sie helfen, das Motiv harmonisch im Rahmen zu platzieren.",
      },
      {
        question: "Kann ich mehrere Bilder gleichzeitig zuschneiden?",
        answer:
          "Nein, das Zuschneiden erfordert individuelle Anpassungen. Du kannst aber mehrere Tabs öffnen und nacheinander zuschneiden.",
      },
    ],
  },
  {
    slug: "drehen",
    metaTitle: "Bild drehen online – Fotos rotieren & spiegeln",
    metaDescription:
      "Bild drehen: um 90°, 180° oder beliebigen Winkel. Korrigiere schiefe Horizonte mit einem Klick.",
    h1: "Drehen",
    subtitle: "Richte deine Fotos gerade aus – automatisch oder manuell.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Bild drehen leicht gemacht",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein schiefes Bild kann den ganzen Eindruck verderben. Mit der <strong>Drehen</strong>-Funktion korrigierst du die Ausrichtung in 0,1‑Grad‑Schritten oder nutzt die automatische Geraderückung, die sich am Horizont oder an senkrechten Linien orientiert. Gleichzeitig lassen sich Bilder horizontal und vertikal spiegeln – praktisch für Selfies oder wenn du ein Motiv seitenverkehrt brauchst.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich ein Bild um einen beliebigen Winkel drehen?",
        answer:
          "Ja, mit dem Schieberegler stellst du jeden Winkel zwischen -45° und +45° ein. Für exakte Drehungen gib einfach die Gradzahl ein.",
      },
      {
        question: "Wie aktiviere ich die automatische Horizontkorrektur?",
        answer:
          "Klicke auf „Auto begradigen“. Die KI erkennt den Horizont oder senkrechte Linien und richtet das Bild millimetergenau aus.",
      },
      {
        question: "Entstehen beim Drehen schwarze Ränder?",
        answer:
          "Wenn du ein Bild frei drehst, können leere Eckbereiche entstehen. Du hast die Option, das Bild automatisch zuschneiden zu lassen, um schwarze Ränder zu vermeiden.",
      },
      {
        question: "Kann ich ein Bild spiegeln?",
        answer:
          "Ja, über die Spiegeln-Schaltflächen kannst du das Bild horizontal oder vertikal umkehren, ohne die Pixel zu verändern.",
      },
      {
        question: "Unterstützt das Tool auch das Drehen von RAW-Dateien?",
        answer:
          "Nein, nur JPEG, PNG, WebP und HEIC. RAW-Dateien müssen zuerst konvertiert werden.",
      },
    ],
  },
  {
    slug: "hintergrund-entfernen",
    metaTitle: "Hintergrund entfernen – Bildhintergrund automatisch löschen",
    metaDescription:
      "Hintergrund entfernen mit KI: Mache den Hintergrund deiner Fotos in Sekunden transparent. Kostenlos, ohne Photoshop.",
    h1: "Hintergrund entfernen",
    subtitle:
      "Automatische Hintergrundentfernung – präzise, schnell, transparent.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Hintergrund entfernen wie von Zauberhand",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Einen <strong>Hintergrund zu entfernen</strong>, war früher Handarbeit – heute erledigt das eine KI in Sekunden. Unser Tool erkennt automatisch Personen, Tiere, Produkte und sogar feine Haare und trennt sie vom Rest des Bildes. Das freigestellte Motiv kannst du dann als PNG mit Transparenz speichern oder direkt in einen neuen Hintergrund setzen.</p>
  </div>
  <div class="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border">
    <h3 class="font-bold text-teal-900 dark:text-teal-100 mb-3">Unterstützte Bildtypen</h3>
    <ul class="grid grid-cols-2 gap-2 text-sm text-teal-800 dark:text-teal-200">
      <li>👤 Porträts & Selfies</li>
      <li>🐕 Haustiere</li>
      <li>👗 Mode & Produkte</li>
      <li>🌿 Pflanzen & Bäume</li>
      <li>🚗 Fahrzeuge</li>
      <li>📄 Dokumente & Scans</li>
    </ul>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Wie genau erkennt die KI das Hauptmotiv?",
        answer:
          "Unser neuronales Netzwerk wurde mit Millionen Bildern trainiert. Es erkennt automatisch, was im Vordergrund steht – Person, Tier oder Gegenstand – und maskiert alles andere.",
      },
      {
        question: "Kann ich nach der Entfernung den Hintergrund ändern?",
        answer:
          "Ja, du kannst eine beliebige Farbe wählen oder ein eigenes Hintergrundbild hochladen. So entstehen sofort neue Kompositionen.",
      },
      {
        question: "Bleiben feine Haare beim Freistellen erhalten?",
        answer:
          "Ja, die KI ist speziell auf Haarstrukturen trainiert. Einzelne Strähnen werden präzise freigestellt, was selbst Profi-Software oft nicht automatisch schafft.",
      },
      {
        question: "Was kann ich tun, wenn die Automatik einen Fehler macht?",
        answer:
          "Mit dem grünen/roten Pinsel kannst du Bereiche manuell hinzufügen oder entfernen. So korrigierst du jede Ungenauigkeit im Handumdrehen.",
      },
      {
        question:
          "Wird mein Bild nach der Bearbeitung auf einem Server gespeichert?",
        answer:
          "Nein, die Verarbeitung erfolgt lokal im Browser. Dein Bild verlässt niemals deinen Rechner.",
      },
    ],
  },
  {
    slug: "bildhintergrund-entfernen",
    metaTitle:
      "Bildhintergrund entfernen – Transparenten Hintergrund erstellen",
    metaDescription:
      "Bildhintergrund entfernen online: Lade dein Bild hoch und erhalte eine freigestellte PNG-Datei. Ideal für Passfotos und Produktbilder.",
    h1: "Bildhintergrund entfernen",
    subtitle:
      "Entferne den Bildhintergrund automatisch und lade dein Motiv ohne Umwege herunter.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Bildhintergrund entfernen für Profis",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Das <strong>Bildhintergrund entfernen</strong> ist für E‑Commerce-Händler und Designer ein täglicher Begleiter. Unser Tool liefert freigestellte Bilder, die du sofort in deinen Shop einbinden kannst. Die Kantenglättung sorgt dafür, dass keine hässlichen Treppchen bleiben, selbst wenn der Ursprungshintergrund unruhig war.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich mehrere Bilder gleichzeitig freistellen?",
        answer:
          "Ja, im Batch-Modus kannst du bis zu 10 Bilder auf einmal hochladen. Der Hintergrund wird für jedes Bild automatisch entfernt.",
      },
      {
        question: "Unterstützt das Tool auch Produktfotos mit Schatten?",
        answer:
          "Ja, der Algorithmus erkennt Schlagschatten und bietet dir an, sie zu erhalten oder vollständig zu entfernen.",
      },
      {
        question: "In welchem Format wird das freigestellte Bild gespeichert?",
        answer:
          "Standardmäßig als PNG mit transparentem Hintergrund. Du kannst aber auch JPEG wählen, dann wird der transparente Bereich weiß gefüllt.",
      },
      {
        question: "Gibt es eine Größenbeschränkung für das Ausgangsbild?",
        answer:
          "Du kannst Bilder bis 50 MB hochladen. Sehr große Dateien (über 40 Megapixel) werden automatisch verkleinert, um die Bearbeitungszeit zu verkürzen.",
      },
      {
        question: "Kann ich das Ergebnis manuell nachbearbeiten?",
        answer:
          "Ja, mit dem Retusche-Pinsel kannst du Kanten verfeinern, übersehene Pixel löschen oder versehentlich gelöschte Bereiche wiederherstellen.",
      },
    ],
  },
  {
    slug: "foto-hintergrund-entfernen",
    metaTitle: "Foto Hintergrund entfernen – Automatische Personenfreiheit",
    metaDescription:
      "Foto Hintergrund entfernen und transparent machen. Verwandle dein Selfie in ein professionelles Bewerbungsfoto.",
    h1: "Foto Hintergrund entfernen",
    subtitle:
      "Dein Foto, freigestellt in Sekunden – für Passbilder, Shops und soziale Medien.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Warum du den Foto-Hintergrund entfernen solltest",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Foto Hintergrund entfernen</strong> zu lassen, ist der erste Schritt zu einem biometrischen Passbild oder einem professionellen Produktfoto. Gerade für offizielle Dokumente wird ein einfarbiger Hintergrund verlangt, den du mit unserem Tool per Mausklick erzeugst, nachdem der alte Hintergrund eliminiert wurde.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Eignet sich das Tool auch für Selfies mit unruhigem Hintergrund?",
        answer:
          "Ja, die KI erkennt dein Gesicht und trennt es selbst von belebten Hintergründen. Du musst nur darauf achten, dass das Gesicht gut ausgeleuchtet ist.",
      },
      {
        question:
          "Kann ich einen neuen Hintergrund in biometrischer Farbe wählen?",
        answer:
          "Ja, nach der Entfernung bietet das Tool eine Auswahl an Standard-Hintergrundfarben wie Hellgrau (#D3D3D3) und Weiß, die für Reisepässe benötigt werden.",
      },
      {
        question: "Wie lange dauert die Hintergrundentfernung?",
        answer:
          "In der Regel weniger als 3 Sekunden. Bei sehr großen Dateien oder schlechter Internetverbindung kann es minimal länger sein.",
      },
      {
        question: "Bleibt die Originalauflösung erhalten?",
        answer:
          "Ja, die Auflösung wird nicht verändert. Nur der Bildinhalt (Hintergrund vs. Vordergrund) wird neu berechnet.",
      },
      {
        question: "Kann ich das freigestellte Bild direkt drucken?",
        answer:
          "Du kannst es herunterladen und wie jede andere Bilddatei drucken. Wir empfehlen 300 dpi für ein optimales Druckergebnis.",
      },
    ],
  },
  {
    slug: "hintergrund-transparent-machen",
    metaTitle:
      "Hintergrund transparent machen – PNG ohne Hintergrund erstellen",
    metaDescription:
      "Hintergrund transparent machen online: Entferne den Hintergrund und speichere dein Bild als PNG mit Transparenz.",
    h1: "Hintergrund transparent machen",
    subtitle:
      "Verwandle jeden Hintergrund in Transparenz – perfekt für Logos und Montagen.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Hintergrund transparent machen in drei Schritten",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Beim <strong>Hintergrund transparent machen</strong> wandelt unser Tool automatisch den ausgeschnittenen Bereich in den Alpha-Kanal um. Das Resultat ist eine verlustfreie PNG-Datei, die du über jedes andere Bild legen kannst. Anders als bei einer einfarbigen Füllung bleibt die Transparenz beim Speichern erhalten – ideal für Wasserzeichen oder Collagen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Kann ich auch den Hintergrund eines Logos transparent machen?",
        answer:
          "Ja, das funktioniert hervorragend. Lade dein Logo hoch und die KI erkennt die Form und entfernt den Hintergrund in Sekunden.",
      },
      {
        question:
          "Entsteht ein Qualitätsverlust beim Konvertieren in Transparenz?",
        answer:
          "Nein, da das Bild als PNG mit verlustfreier Kompression gespeichert wird. Alle Details bleiben erhalten.",
      },
      {
        question:
          "Was passiert, wenn der Hintergrund ähnliche Farben wie das Motiv hat?",
        answer:
          "Die KI trennt Objekte anhand von Konturen, nicht nur nach Farbe. Selbst bei ähnlichen Farben wird das Motiv zuverlässig erkannt.",
      },
      {
        question: "Kann ich die Transparenz auch für JPEG-Bilder nutzen?",
        answer:
          "JPEG unterstützt keine Transparenz. Das Tool wandelt das Bild automatisch in PNG um, wenn du es mit Transparenz speichern willst.",
      },
      {
        question:
          "Gibt es eine Begrenzung für die Anzahl der transparenten Bereiche?",
        answer:
          "Nein, du kannst beliebig viele Hintergrundbereiche entfernen lassen. Das Tool maskiert alle nicht zum Hauptmotiv gehörenden Pixel.",
      },
    ],
  },
  {
    slug: "bild-freistellen",
    metaTitle: "Bild freistellen – Objekt ausschneiden & Hintergrund ersetzen",
    metaDescription:
      "Bild freistellen mit KI: Schneide Personen, Tiere und Gegenstände frei. Ersetze den Hintergrund oder speichere das Motiv transparent.",
    h1: "Bild freistellen",
    subtitle: "Freistellen wie die Profis – kein manuelles Maskieren nötig.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Bild freistellen leicht gemacht",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p><strong>Bild freistellen</strong> meint dasselbe wie Hintergrund entfernen, betont aber die aktive Handlung des Auswählens. Mit unserer Technologie ziehst du grob einen Bereich um das Motiv und der Algorithmus verfeinert die Auswahl automatisch. So entsteht selbst bei Fell oder Haaren eine exakte Silhouette.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich mehrere Objekte in einem Bild einzeln freistellen?",
        answer:
          "Ja, markiere einfach die gewünschten Bereiche mit dem grünen Pinsel. Die KI kümmert sich um die Feinarbeit.",
      },
      {
        question: "Wie fein können die Kanten freigestellt werden?",
        answer:
          "Du hast einen Kantenverfeinerungs-Slider, mit dem du den Übergang von weich bis hart einstellen kannst. So passt das Ergebnis perfekt zum Verwendungszweck.",
      },
      {
        question:
          "Kann ich ein freigestelltes Bild direkt in eine andere Datei einfügen?",
        answer:
          "Nach dem Freistellen kannst du einen neuen Hintergrund auswählen, den du von deiner Festplatte hochlädst. Das Bild wird sofort kombiniert.",
      },
      {
        question: "Unterstützt das Tool auch transparente Objekte wie Glas?",
        answer:
          "Teiltransparente Flächen sind eine Herausforderung. Die KI erkennt sie nicht immer perfekt. Mit der manuellen Nachbearbeitung kannst du aber gute Ergebnisse erzielen.",
      },
      {
        question:
          "Kann ich die freigestellte Silhouette als Vektorgrafik speichern?",
        answer:
          "Nein, das Tool arbeitet pixelbasiert. Für Vektoren benötigst du einen spezialisierten Tracer.",
      },
    ],
  },
  {
    slug: "foto-freistellen",
    metaTitle: "Foto freistellen – Personen & Objekte automatisch ausschneiden",
    metaDescription:
      "Foto freistellen online: Lade dein Bild hoch, wähle das Motiv aus und lade es als PNG mit transparentem Hintergrund herunter.",
    h1: "Foto freistellen",
    subtitle: "Dein Foto, perfekt ausgeschnitten – ohne Photoshop-Kenntnisse.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Foto freistellen in Profiqualität",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Wenn du ein <strong>Foto freistellen</strong> möchtest, reicht ein Upload. Der Editor erkennt Menschen, Tiere und Produkte und trennt sie pixelgenau vom Rest. Falls der Automatikmodus nicht alle Wünsche erfüllt, kannst du mit dem grünen/roten Pinsel Bereiche manuell hinzufügen oder entfernen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Was ist der Unterschied zwischen 'Foto freistellen' und 'Hintergrund entfernen'?",
        answer:
          "Beide Funktionen sind identisch. 'Foto freistellen' betont den Aspekt des Ausschneidens, während 'Hintergrund entfernen' den gelöschten Bereich hervorhebt.",
      },
      {
        question:
          "Kann ich ein freigestelltes Foto für meine Bewerbung nutzen?",
        answer:
          "Ja, du kannst den Hintergrund durch ein passendes Uni‑Farbfeld ersetzen und das Bild als professionelles Bewerbungsfoto speichern.",
      },
      {
        question: "Unterstützt der Editor das Freistellen von Gruppenfotos?",
        answer:
          "Ja, die KI kann mehrere Personen im Bild erkennen und gemeinsam freistellen. Einzelpersonen manuell zu selektieren ist ebenfalls möglich.",
      },
      {
        question:
          "Kann ich das freigestellte Bild auch ohne Transparenz speichern?",
        answer:
          "Ja, du kannst einen einfarbigen Hintergrund hinzufügen und als JPEG exportieren, falls Transparenz nicht benötigt wird.",
      },
      {
        question: "Werden die Farben beim Freistellen verändert?",
        answer:
          "Nein, die Farbwerte des Motivs bleiben originalgetreu. Nur die Pixel des Hintergrunds werden transparent.",
      },
    ],
  },
  {
    slug: "hintergrund-loeschen",
    metaTitle: "Hintergrund löschen – Bildhintergrund in Sekunden entfernen",
    metaDescription:
      "Hintergrund löschen mit einem Klick. Erhalte ein freigestelltes Bild ohne Hintergrund. Ideal für Passbilder, Produktfotos und Collagen.",
    h1: "Hintergrund löschen",
    subtitle:
      "Den Hintergrund löschen war nie einfacher – vollautomatisch und kostenfrei.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Hintergrund löschen für saubere Freisteller",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Die Funktion <strong>Hintergrund löschen</strong> entspricht dem endgültigen Schritt: Nach der Erkennung wird der Hintergrund endgültig entfernt und durch Transparenz ersetzt. Du kannst dann wahlweise einen weißen, grauen oder beliebig farbigen Hintergrund einfügen – besonders wichtig für biometrische Passbilder.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich den gelöschten Hintergrund wiederherstellen?",
        answer:
          "Nur über die Rückgängig-Funktion (Strg+Z), solange du die Seite nicht neu geladen hast. Wir empfehlen, das Original separat zu speichern.",
      },
      {
        question:
          "Gibt es eine Möglichkeit, den neuen Hintergrund automatisch unscharf zu machen?",
        answer:
          "Nein, das Tool fügt nur einen einfarbigen oder von dir gewählten Hintergrund ein. Eine Tiefenunschärfe müsstest du mit anderen Programmen hinzufügen.",
      },
      {
        question: "Kann ich den Hintergrund auch nur teilweise löschen?",
        answer:
          "Ja, mit dem Pinsel-Werkzeug kannst du exakt definieren, welche Bereiche gelöscht werden sollen. Die KI übernimmt dann die Feinarbeit.",
      },
      {
        question: "Unterstützt das Tool auch Scans von Dokumenten?",
        answer:
          "Ja, der Hintergrund von gescannten Formularen oder Zeugnissen wird zuverlässig erkannt und entfernt.",
      },
      {
        question:
          "Wie kann ich den gelöschten Hintergrund später als Bild speichern?",
        answer:
          "Wenn du das Bild als PNG herunterlädst, bleibt der Hintergrund transparent. Beim Einfügen in andere Programme scheint der darunterliegende Inhalt durch.",
      },
    ],
  },
  {
    slug: "objekt-freistellen",
    metaTitle: "Objekt freistellen – Gegenstände automatisch ausschneiden",
    metaDescription:
      "Objekt freistellen online: Schneide Möbel, Kleidung, Elektronik und mehr aus deinen Fotos aus. Hochpräzise KI, kostenlos.",
    h1: "Objekt freistellen",
    subtitle:
      "Nicht nur Personen – freigestellte Objekte für deinen Online-Shop.",
    showTool: "bg-remover",
    sections: [
      {
        heading: "Objekt freistellen für E-Commerce",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Das <strong>Objekt freistellen</strong> ist für Produktfotos auf eBay, Amazon oder im eigenen Shop unverzichtbar. Unser Tool erkennt die Konturen auch von komplexen Gegenständen wie Stühlen, Uhren oder technischen Geräten und schneidet sie exakt aus. Du kannst mehrere Objekte in einem Bild einzeln anklicken, um sie nacheinander freizustellen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Wie gut erkennt die KI verschiedene Materialien wie Glas oder Metall?",
        answer:
          "Sehr gut. Spiegelnde und transparente Objekte sind schwieriger, aber der Algorithmus ist darauf trainiert und liefert meist akzeptable Ergebnisse.",
      },
      {
        question:
          "Kann ich ein freigestelltes Objekt direkt in meinem Shop einbinden?",
        answer:
          "Ja, lade das Ergebnis als PNG herunter und lade es in deinem Shopsystem hoch. Der transparente Hintergrund integriert sich nahtlos in dein Design.",
      },
      {
        question: "Wird der ursprüngliche Objektschatten mit freigestellt?",
        answer:
          "Auf Wunsch ja. Du kannst wählen, ob der Schlagschatten erhalten bleiben soll oder nicht. Für Produktkataloge ist ein leichter Schatten oft erwünscht.",
      },
      {
        question: "Kann ich mehrere Objekte auf einmal freistellen?",
        answer:
          "Ja, du kannst die Multi-Objekt-Erkennung aktivieren. Jedes erkannte Objekt wird dann als separate Ebene behandelt und kann einzeln bearbeitet werden.",
      },
      {
        question: "Unterstützt das Tool auch das Freistellen von Tieren?",
        answer:
          "Ja, Haustiere und sogar Wildtiere werden zuverlässig erkannt. Fell und Federn stellen für die KI kein Problem dar.",
      },
    ],
  },
  {
    slug: "passfoto",
    metaTitle:
      "Passfoto online erstellen – Biometrisches Passbild selbst machen",
    metaDescription:
      "Passfoto selber machen: Unser Passfoto-Generator erstellt biometrische Bilder für Personalausweis, Reisepass und Visum. Kostenlos.",
    h1: "Passfoto",
    subtitle:
      "Erstelle dein Passfoto direkt zu Hause – biometrisch korrekt und günstig.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Dein Passfoto in wenigen Minuten",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Passfoto</strong> muss strengen Regeln folgen: 35 × 45 mm, Kopfhöhe zwischen 32 mm und 36 mm, neutraler Gesichtsausdruck, einheitlich ausgeleuchtet. Unser Tool prüft all diese Kriterien automatisch und warnt, falls dein Bild nicht den Vorschriften entspricht. Du kannst das Foto mit deinem Smartphone aufnehmen und erhältst in Sekunden eine druckfertige Datei.</p>
  </div>
  <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border">
    <h3 class="font-bold text-blue-900 dark:text-blue-100">Maße auf einen Blick</h3>
    <table class="w-full text-sm text-blue-800 dark:text-blue-200">
      <tr><td class="py-1">Fotoformat</td><td>35 × 45 mm</td></tr>
      <tr><td class="py-1">Kopfhöhe</td><td>32–36 mm</td></tr>
      <tr><td class="py-1">Augenhöhe</td><td>28–35 mm vom unteren Bildrand</td></tr>
      <tr><td class="py-1">Hintergrund</td><td>Hell, einfarbig, schattenfrei</td></tr>
    </table>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Akzeptiert das Bürgeramt selbst erstellte Passfotos?",
        answer:
          "Ja, solange sie den biometrischen Vorgaben entsprechen. Unser Generator prüft die Einhaltung und kennzeichnet Abweichungen.",
      },
      {
        question:
          "Muss ich das Passfoto ausdrucken oder kann ich es digital einreichen?",
        answer:
          "Seit Mai 2025 können deutsche Personalausweise und Reisepässe auch mit einem digitalen Lichtbild beantragt werden. Unser Tool liefert beide Optionen.",
      },
      {
        question:
          "Welche Hintergrundfarbe ist für ein deutsches Passfoto vorgeschrieben?",
        answer:
          "Hell, am besten einheitlich hellgrau oder weiß. Unser Tool ersetzt den Hintergrund automatisch mit der empfohlenen Farbe #D3D3D3.",
      },
      {
        question: "Kann ich das Passfoto auch für andere Länder nutzen?",
        answer:
          "Ja, wähle einfach das Zielland aus. Wir unterstützen die Anforderungen von über 50 Nationen, inklusive USA, Frankreich, Deutschland und der Schweiz.",
      },
      {
        question: "Kann ich mein Passfoto mit Brille aufnehmen?",
        answer:
          "Grundsätzlich ja, solange die Augen nicht verdeckt sind und keine Spiegelungen auftreten. Wir empfehlen jedoch, die Brille abzunehmen, um Ablehnungen zu vermeiden.",
      },
    ],
  },
  {
    slug: "biometrisches-passfoto",
    metaTitle: "Biometrisches Passfoto online erstellen – Automatische Prüfung",
    metaDescription:
      "Biometrisches Passfoto selber machen: Der Online-Generator prüft Kopfgröße, Augenposition und Hintergrund. Geeignet für Reisepass und Personalausweis.",
    h1: "Biometrisches Passfoto",
    subtitle:
      "Erstelle ein offiziell gültiges biometrisches Passfoto mit wenigen Klicks.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Biometrisches Passfoto – Der automatisierte Weg",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>biometrisches Passfoto</strong> muss mehr können als nur hübsch aussehen. Es dient der automatischen Gesichtserkennung an Grenzübergängen. Unser Tool platziert dein Gesicht exakt im Zentrum, setzt die Augen auf die richtige Höhe und kalibriert die Helligkeit so, dass keine Reflexionen stören. Du bekommst eine detaillierte Rückmeldung, ob dein Bild den Anforderungen der Bundesdruckerei entspricht.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Was passiert, wenn mein Bild die biometrische Prüfung nicht besteht?",
        answer:
          "Das Tool zeigt genau an, welches Kriterium nicht erfüllt ist – z. B. Kopf zu groß, Augen zu tief – und gibt dir Tipps zur Korrektur.",
      },
      {
        question:
          "Muss ich beim Fotografieren einen bestimmten Abstand einhalten?",
        answer:
          "Nicht unbedingt. Halte die Kamera etwa 1–1,5 Meter entfernt. Die Software passt den Ausschnitt automatisch an die Biometrie-Vorgaben an.",
      },
      {
        question:
          "Kann ich mit dem biometrischen Passfoto auch online Identitätsverfahren nutzen?",
        answer:
          "Ja, das digitale Passfoto eignet sich auch für VideoIdent und PostIdent, wenn es die gleichen Kriterien erfüllt.",
      },
      {
        question: "Unterstützt das Tool alle Altersgruppen?",
        answer:
          "Ja, vom Säugling bis zum Senior. Bei Babys gibt es mildere Vorgaben (Kopfhöhe muss nicht exakt 32–36 mm sein), die das Tool automatisch berücksichtigt.",
      },
      {
        question: "Wie aktuell muss das biometrische Passfoto sein?",
        answer:
          "Es sollte nicht älter als sechs Monate sein, da sich das Aussehen kontinuierlich ändern kann. Unser Editor aktualisiert den biometrischen Standard stets auf die neueste Version.",
      },
    ],
  },
  {
    slug: "passfoto-online",
    metaTitle: "Passfoto online – Biometrisches Bild ohne Fotograf erstellen",
    metaDescription:
      "Passfoto online machen: Lade ein Selfie hoch und erhalte ein fertiges Passbild. Kein Termin, keine Wartezeit.",
    h1: "Passfoto online",
    subtitle: "Das Passfoto online zu erstellen spart Zeit, Geld und Nerven.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Warum ein Passfoto online?",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Ein <strong>Passfoto online</strong> zu machen, bedeutet maximale Flexibilität. Du brauchst keinen Fototermin und kannst das Bild so oft wiederholen, bis der Gesichtsausdruck perfekt sitzt. Nach der Erstellung erhältst du eine druckfertige Vorlage im 10×15‑cm‑Format, die du bei jedem Drogeriemarkt für ein paar Cent ausbelichten lassen kannst.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich das Passfoto online auch am Handy machen?",
        answer:
          "Ja, öffne die Seite im mobilen Browser, nimm ein Selfie auf und folge den Anweisungen. Das Ergebnis ist genauso gültig wie aus dem Fotostudio.",
      },
      {
        question: "Wie bekomme ich das Passfoto in physischer Form?",
        answer:
          "Lade die Druckvorlage (10x15 cm mit 4–8 Passbildern) herunter und belichte sie in jeder Drogerie oder Online-Druckservice aus.",
      },
      {
        question: "Muss ich für das Online-Passfoto bezahlen?",
        answer:
          "Nein, unser Generator ist kostenlos. Kosten entstehen nur, wenn du das Bild später ausdrucken lässt.",
      },
      {
        question: "Wie sicher sind meine Daten beim Passfoto online?",
        answer:
          "Die Verarbeitung geschieht lokal im Browser. Dein Foto wird nicht gespeichert oder an Dritte gesendet.",
      },
      {
        question: "Kann ich das Passfoto auch für Visaanträge verwenden?",
        answer:
          "Ja, wähle das entsprechende Land aus. Wir unterstützen spezielle Anforderungen z. B. für das Schengen-Visum, die USA oder Kanada.",
      },
    ],
  },
  {
    slug: "passfoto-generator",
    metaTitle:
      "Passfoto Generator – Biometrische Passbilder automatisch erstellen",
    metaDescription:
      "Der Passfoto Generator erzeugt aus deinem Selfie ein normgerechtes Passbild. Inklusive Größenprüfung und mehrfacher Anordnung auf einem Blatt.",
    h1: "Passfoto Generator",
    subtitle: "Aus einem Selfie wird ein amtliches Passfoto – vollautomatisch.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "So arbeitet der Passfoto Generator",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Der <strong>Passfoto Generator</strong> nimmt dir die gesamte Arbeit ab. Nach dem Upload analysiert die KI den Kopfumriss, zentriert das Gesicht, ersetzt den Hintergrund durch das vorgeschriebene Grau und platziert das Bild mehrfach auf einer Druckvorlage. Du kannst zwischen verschiedenen Ländern wählen, da die Anforderungen in Deutschland, Österreich und der Schweiz leicht voneinander abweichen.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Erzeugt der Generator auch ein digitales Passbild für den Online-Antrag?",
        answer:
          "Ja, du kannst zwischen einem druckfertigen Blatt und einer einzelnen digitalen Datei wählen. Für den neuen digitalen Personalausweis wird Letzteres benötigt.",
      },
      {
        question: "Kann ich die Anzahl der Passbilder auf dem Blatt ändern?",
        answer:
          "Ja, du kannst zwischen 4, 6 oder 8 Bildern pro 10x15‑Blatt wählen, je nachdem, was das Amt verlangt.",
      },
      {
        question:
          "Wie erkenne ich, ob das generierte Foto biometrisch gültig ist?",
        answer:
          "Ein Ampelsystem zeigt dir nach der Analyse an, ob alle Kriterien erfüllt sind. Grün bedeutet bestanden, bei Rot wird der Fehler konkret benannt.",
      },
      {
        question: "Kann der Generator auch Fotos von Babys verarbeiten?",
        answer:
          "Ja, bei Säuglingen sind die Anforderungen weniger streng. Der Generator passt die Prüfparameter automatisch an.",
      },
      {
        question: "Was tun, wenn der Generator den Kopf nicht erkennt?",
        answer:
          "Sorge für eine gute Ausleuchtung und einen kontrastreichen Hintergrund. Notfalls kannst du den Kopf manuell mit einem Rahmen markieren.",
      },
    ],
  },
  {
    slug: "passfoto-app",
    metaTitle: "Passfoto App – Die browserbasierte App für dein Passbild",
    metaDescription:
      "Keine Installation nötig: Unsere Passfoto App funktioniert auf jedem Smartphone. Erstelle biometrische Fotos direkt im Browser.",
    h1: "Passfoto App",
    subtitle:
      "Eine vollwertige Passfoto App – ohne Download, ohne Berechtigungen.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Die Passfoto App, die keine ist",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Viele suchen eine <strong>Passfoto App</strong> im Store, doch unsere Lösung läuft direkt im mobilen Browser. Das spart Speicherplatz und verhindert, dass unnötige Berechtigungen eingeholt werden müssen. Die Bedienung ist identisch: Kamera öffnen, Foto aufnehmen, Generator starten – fertig. Du kannst das Passbild anschließend als Datei speichern oder direkt ausdrucken.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Brauche ich eine Internetverbindung, um die Passfoto App zu nutzen?",
        answer:
          "Einmal geladen, funktioniert die Seite auch offline. Die KI-Modelle werden im Cache gespeichert, sodass du jederzeit Passbilder erstellen kannst.",
      },
      {
        question: "Wird die Kamera meines Handys automatisch aufgerufen?",
        answer:
          "Ja, nach deiner Bestätigung greift die Seite auf die Kamera zu. Das ist genauso sicher wie bei einer App, aber ohne dauerhafte Berechtigung.",
      },
      {
        question: "Kann ich das Passfoto direkt aus der App heraus ausdrucken?",
        answer:
          "Ja, über die Teilen-Funktion deines Browsers kannst du das Bild direkt an einen WLAN-Drucker senden.",
      },
      {
        question: "Unterstützt die App auch Live-Fotos von iPhones?",
        answer:
          "Live-Fotos werden als Standbild verwendet. Wähle einfach das beste Einzelbild aus und lade es hoch.",
      },
      {
        question:
          "Kann ich die Passfoto App auf mehreren Geräten synchronisieren?",
        answer:
          "Nein, alles läuft lokal. Jedes Gerät agiert unabhängig, was deine Privatsphäre schützt.",
      },
    ],
  },
  {
    slug: "foto-pass",
    metaTitle: "Foto Pass – Dein Passfoto zum Selbermachen",
    metaDescription:
      "Foto Pass bietet dir alle Werkzeuge, um ein gültiges Passfoto zu Hause zu erstellen. Mit biometrischer Prüfung und Drucklayout.",
    h1: "Foto Pass",
    subtitle: "Der einfache Weg zum eigenen Passfoto – mit dem Foto Pass Tool.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Was ist Foto Pass?",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p><strong>Foto Pass</strong> ist unsere Kurzbezeichnung für den integrierten Passfoto-Service. Er umfasst den Hintergrundaustausch, die Biometriekontrolle und die Generierung eines druckfertigen 10x15-Blattes mit sechs oder acht Passbildern – abhängig von den Behördenvorgaben.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Ist Foto Pass ein eigenständiges Produkt?",
        answer:
          "Foto Pass ist Teil unserer Bildbearbeitungssuite und vereint alle Passbild-Funktionen unter einer Oberfläche.",
      },
      {
        question: "Kann ich mit Foto Pass auch ein Visumfoto erstellen?",
        answer:
          "Ja, wähle einfach das Zielland aus. Wir berücksichtigen die spezifischen Anforderungen, z. B. 50x50 mm für einige asiatische Länder.",
      },
      {
        question: "Wie viele Passbilder bekomme ich auf ein Blatt?",
        answer:
          "In Deutschland sind 8 Bilder üblich, in Österreich 6. Das Layout passt sich automatisch an das gewählte Land an.",
      },
      {
        question: "Kann ich das Layout meines Passbild-Blatts anpassen?",
        answer:
          "Das Layout ist standardisiert, du kannst aber die Anzahl der Bilder pro Blatt und die Ränder minimal variieren.",
      },
      {
        question: "Was kostet die Nutzung von Foto Pass?",
        answer:
          "Die Erstellung ist kostenlos. Du sparst die Gebühren für den Fotografen und zahlst nur die Druckkosten, wenn du das Blatt ausbelichten lässt.",
      },
    ],
  },
  {
    slug: "passfoto-erstellen",
    metaTitle: "Passfoto erstellen – Biometrisches Bild in 3 Schritten",
    metaDescription:
      "Passfoto erstellen war nie einfacher: Selfie hochladen, automatisch zuschneiden lassen, herunterladen. Kostenlos, ohne Anmeldung.",
    h1: "Passfoto erstellen",
    subtitle:
      "Erstelle dein Passfoto sofort – biometrisch geprüft, amtlich akzeptiert.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Passfoto erstellen in drei Schritten",
        content: `<div class="space-y-6 not-prose">
  <ol class="list-decimal list-inside space-y-2 bg-white dark:bg-slate-800 p-4 rounded-lg text-slate-700 dark:text-slate-300">
    <li><strong>Selfie aufnehmen</strong> – achte auf gleichmäßiges Licht und neutralen Gesichtsausdruck.</li>
    <li><strong>Bild hochladen</strong> – der Editor erkennt dein Gesicht und skaliert automatisch.</li>
    <li><strong>Passfoto herunterladen</strong> – als Einzelbild oder Druckvorlage.</li>
  </ol>
</div>`,
      },
    ],
    faq: [
      {
        question: "Welche Kleidung sollte ich auf dem Passfoto tragen?",
        answer:
          "Alltagskleidung, keine Uniformen oder auffällige Muster. Kopfbedeckungen sind nur aus religiösen Gründen erlaubt, müssen aber das Gesicht vollständig freilassen.",
      },
      {
        question: "Wie muss der Gesichtsausdruck sein?",
        answer:
          "Neutral, der Mund muss geschlossen sein, keine Zähne zeigen. Ein leichtes Lächeln mit geschlossenem Mund ist manchmal erlaubt, aber sicherheitshalber lieber neutral.",
      },
      {
        question: "Kann ich das Passfoto auch ohne Drucker verwenden?",
        answer:
          "Ja, für digitale Anträge lädst du das Bild einfach hoch. Für physische Dokumente benötigst du einen Ausdruck, den du im Copyshop oder Drogeriemarkt anfertigen kannst.",
      },
      {
        question:
          "Gibt es eine Altersbeschränkung für das selbst erstellte Passfoto?",
        answer:
          "Nein, die Software funktioniert für jedes Alter. Bei Kindern unter 6 Jahren sind die biometrischen Anforderungen allerdings weniger strikt.",
      },
      {
        question: "Wie speichere ich das Passfoto am besten?",
        answer:
          "Als JPEG mit hoher Qualität (90 %). Das Tool schlägt automatisch die optimale Einstellung vor.",
      },
    ],
  },
  {
    slug: "biometrisches-passbild-near-me",
    metaTitle: "Biometrisches Passbild near me – Online selbst erstellen",
    metaDescription:
      "Statt „biometrisches Passbild near me“ zu suchen, erstelle es einfach selbst. Kein Fotostudio, keine Wartezeit.",
    h1: "Biometrisches Passbild near me",
    subtitle:
      "„Near me“ war gestern – heute machst du dein Passbild direkt im Browser.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Kein Fotostudio mehr nötig",
        content: `<div class="space-y-6 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Die Suche nach <strong>biometrisches Passbild near me</strong> gehört der Vergangenheit an. Statt einen Fotografen zu suchen, der vielleicht 15 € verlangt und Termine vergibt, öffnest du einfach diese Seite, lädst ein Selfie hoch und bekommst ein amtlich korrektes Bild. Die Technologie entspricht den aktuellen ICAO‑Standards und wird regelmäßig aktualisiert.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Wieso sollte ich kein Fotostudio mehr aufsuchen?",
        answer:
          "Mit unserem Tool sparst du Geld und Zeit. Die Qualität ist identisch, und du kannst das Bild so oft wiederholen, bis du zufrieden bist.",
      },
      {
        question:
          "Erkennt die Behörde, dass das Passbild online erstellt wurde?",
        answer:
          "Nein, die Bilddatei enthält keine verräterischen Metadaten. Solange die biometrischen Vorgaben stimmen, wird das Bild akzeptiert.",
      },
      {
        question:
          "Kann ich das biometrische Passbild auch für einen Führerschein verwenden?",
        answer:
          "Ja, die Anforderungen sind sehr ähnlich. Unser Tool unterstützt das Format für den EU-Kartenführerschein.",
      },
      {
        question:
          "Was ist der Unterschied zu einem Passfoto aus dem Automaten?",
        answer:
          "Automaten bieten oft weniger Kontrolle über den Bildausschnitt und die Beleuchtung. Zu Hause kannst du mit natürlichem Licht arbeiten und hast ein besseres Ergebnis.",
      },
      {
        question:
          "Kann ich das digitale Passbild direkt bei der Passbehörde einreichen?",
        answer:
          "Ja, viele Behörden akzeptieren mittlerweile digitale Lichtbilder. Frage vorsichtshalber bei deinem Bürgeramt nach, ob ein hochgeladenes Bild ausreicht.",
      },
    ],
  },
  {
    slug: "foto-groesse-aendern",
    metaTitle:
      "Foto Größe ändern – Online Bildgröße anpassen ohne Qualitätsverlust",
    metaDescription:
      "Ändere die Größe deiner Fotos direkt im Browser. Wähle aus vordefinierten Formaten für Social Media, Druck oder gib eigene Maße in Pixel, cm oder mm ein. Kostenlos, ohne Anmeldung, lokal verarbeitet.",
    h1: "Foto Größe ändern",
    subtitle:
      "Passe die Abmessungen deiner Bilder millimetergenau an – für jeden Zweck und jede Plattform.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Warum die Fotogröße ändern und wie unser Tool hilft",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg">Ob für einen Online-Shop, die Bewerbungsmappe oder das perfekte Profilbild – die Anforderungen an Bildgrößen sind so vielfältig wie die Nutzungsszenarien selbst. Ein Bild, das auf dem großen Monitor brillant aussieht, kann auf dem Smartphone überdimensioniert wirken und umgekehrt. Genau hier setzt unsere Funktion <strong>Foto Größe ändern</strong> an. Sie erlaubt dir, ohne Vorkenntnisse ein Bild exakt auf die benötigten Abmessungen zu bringen, ohne die Bildqualität übermäßig zu beeinträchtigen.</p>
    <p>Anders als viele andere Online‑Tools arbeitet unsere Engine direkt im Browser. Das bedeutet: Deine Fotos werden nicht auf fremde Server geladen, sondern lokal skaliert und gespeichert. Das schützt deine Privatsphäre und macht die Bearbeitung extrem schnell – selbst bei großen Dateien von über 20 Megapixeln.</p>
  </div>
  <div class="grid md:grid-cols-2 gap-8">
    <div class="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
      <h3 class="text-lg font-bold text-cyan-900 dark:text-cyan-100 mb-4">📐 Flexible Maßangaben</h3>
      <ul class="space-y-3 text-sm text-cyan-800 dark:text-cyan-200">
        <li class="flex gap-2"><span class="text-cyan-600 mt-1">✓</span> Eingabe in Pixeln, Millimetern, Zentimetern oder Inch</li>
        <li class="flex gap-2"><span class="text-cyan-600 mt-1">✓</span> Festlegen der DPI für druckfertige Ausgabe (72, 150, 300)</li>
        <li class="flex gap-2"><span class="text-cyan-600 mt-1">✓</span> Seitenverhältnis-Sperre, um Verzerrungen zu vermeiden</li>
        <li class="flex gap-2"><span class="text-cyan-600 mt-1">✓</span> Prozentuale Skalierung (z. B. 50 % der Originalgröße)</li>
      </ul>
    </div>
    <div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
      <h3 class="text-lg font-bold text-violet-900 dark:text-violet-100 mb-4">🎯 Vordefinierte Profile</h3>
      <ul class="space-y-3 text-sm text-violet-800 dark:text-violet-200">
        <li class="flex gap-2"><span class="text-violet-600 mt-1">✓</span> Instagram Post (1080×1080) / Story (1080×1920)</li>
        <li class="flex gap-2"><span class="text-violet-600 mt-1">✓</span> Facebook Cover (820×312) / Post (1200×630)</li>
        <li class="flex gap-2"><span class="text-violet-600 mt-1">✓</span> YouTube Thumbnail (1280×720) / Banner (2560×1440)</li>
        <li class="flex gap-2"><span class="text-violet-600 mt-1">✓</span> Passbild / Visum (35×45 mm, 300 dpi)</li>
        <li class="flex gap-2"><span class="text-violet-600 mt-1">✓</span> Eigene Voreinstellungen speichern</li>
      </ul>
    </div>
  </div>
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>So änderst du die Foto Größe in wenigen Sekunden</h3>
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border">
      <ol class="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li><strong>Bild laden</strong> – per Klick, Drag & Drop oder direkt über die Kamera.</li>
        <li><strong>Einheit und Zielmaße wählen</strong> – z. B. 1200 × 800 px oder 10 × 15 cm bei 300 dpi.</li>
        <li><strong>Vorschau prüfen</strong> – ein Zoom‑Slider zeigt dir, ob Details scharf bleiben.</li>
        <li><strong>Optional: Ausschnitt verschieben</strong> – solltest du das Seitenverhältnis ändern, passt du den sichtbaren Bereich interaktiv an.</li>
        <li><strong>Format und Qualität festlegen</strong> – JPEG, PNG oder WebP mit einstellbarem Kompressionsgrad.</li>
        <li><strong>Herunterladen</strong> – das fertig skalierte Bild wird lokal gespeichert.</li>
      </ol>
    </div>
  </div>
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Typische Anwendungen im Überblick</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border">
        <thead class="bg-slate-100 dark:bg-slate-700">
          <tr><th class="p-2 text-left">Anwendung</th><th class="p-2 text-left">Empfohlene Größe</th><th class="p-2 text-left">DPI</th><th class="p-2 text-left">Format</th></tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="p-2">Behördliches Passbild</td><td class="p-2">35 × 45 mm</td><td class="p-2">300</td><td class="p-2">JPEG</td></tr>
          <tr><td class="p-2">Bewerbungsfoto (4×6)</td><td class="p-2">40 × 60 mm</td><td class="p-2">300</td><td class="p-2">JPEG</td></tr>
          <tr><td class="p-2">LinkedIn Profilbild</td><td class="p-2">400 × 400 px</td><td class="p-2">72</td><td class="p-2">JPEG/PNG</td></tr>
          <tr><td class="p-2">eBay Produktfoto</td><td class="p-2">1600 × 1600 px</td><td class="p-2">72</td><td class="p-2">JPEG</td></tr>
          <tr><td class="p-2">Webseiten‑Hero‑Bild</td><td class="p-2">1920 × 800 px</td><td class="p-2">72</td><td class="p-2">WebP</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mt-4">Zusätzlich hilft unser Algorithmus, Moiré‑Effekte und Treppchenbildung zu vermeiden, die oft beim einfachen Herunterskalieren auftreten. So bleibt dein Bild auch nach dem <strong>Foto Größe ändern</strong> professionell und scharf.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Größe meines Fotos in Millimetern eingeben?",
        answer:
          "Ja, wähle die Einheit „mm“ aus und gib Breite sowie Höhe ein. Über den DPI‑Regler legst du die Druckqualität fest – das Tool rechnet automatisch die passende Pixelanzahl aus.",
      },
      {
        question:
          "Verändert sich die Dateigröße, wenn ich die Pixelmaße reduziere?",
        answer:
          "Ja, weniger Pixel bedeuten auch eine kleinere Datei. Möchtest du zusätzlich Speicherplatz sparen, kannst du nach dem Skalieren den Kompressionsgrad im Qualitätsregler anpassen.",
      },
      {
        question: "Wird das Bild beim Verkleinern unscharf?",
        answer:
          "Wir setzen einen intelligenten Nachschärfungsfilter ein, der die subjektive Schärfe auch bei starker Reduktion erhält. Ein gewisser Detailverlust ist physikalisch unvermeidlich, aber für das menschliche Auge kaum wahrnehmbar.",
      },
      {
        question: "Kann ich meine eigenen Profile abspeichern?",
        answer:
          "Im lokalen Browserspeicher kannst du häufig genutzte Größen hinterlegen. Diese Daten verlassen deinen Rechner nicht und stehen beim nächsten Besuch sofort bereit.",
      },
      {
        question: "Unterstützt der Editor die Stapelverarbeitung?",
        answer:
          "Ja, du kannst bis zu 20 Fotos gleichzeitig laden und auf dieselbe Zielgröße skalieren. Jedes Bild wird einzeln optimiert und steht als ZIP‑Archiv zum Download bereit.",
      },
    ],
  },
  {
    slug: "passfoto-ersteller",
    metaTitle:
      "Passfoto Ersteller – Biometrische Passbilder online selbst machen",
    metaDescription:
      "Erstelle mit dem Passfoto Ersteller biometrische Passbilder direkt im Browser. Wähle Land und Dokumenttyp – Hintergrund wird automatisch angepasst, Gesichtsbiometrie geprüft. Kostenlos.",
    h1: "Passfoto Ersteller",
    subtitle:
      "Schneide, skaliere und formatiere dein Selfie für offizielle Dokumente – ganz ohne Fotostudio.",
    showTool: "passport-maker",
    sections: [
      {
        heading: "Der Passfoto Ersteller für alle amtlichen Lichtbilder",
        content: `<div class="space-y-10 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p class="text-lg">Ein gültiges <strong>Passfoto</strong> zu erstellen, kann teuer und zeitaufwendig sein – vor allem, wenn das Foto im Automaten oder beim Fotografen abgelehnt wird. Unser <strong>Passfoto Ersteller</strong> ändert das grundlegend. Du lädst ein Selbstporträt hoch, das du bequem zu Hause aufnimmst, und innerhalb von Sekunden erhältst du ein biometrisch geprüftes Bild, das den internationalen ICAO‑Standards entspricht.</p>
    <p>Egal ob deutscher Reisepass, Personalausweis, französischer Aufenthaltstitel, US‑Visum oder Kinderreisepass – mit wenigen Klicks wählst du das Zielland und den Dokumententyp aus. Die Software übernimmt dann den automatischen Beschnitt, die Positionierung des Gesichts, die Überprüfung der Kopfgröße (32–36 mm) und die Augenhöhe (28–35 mm vom unteren Rand). Sogar die Hintergrundfarbe wird auf das amtlich vorgeschriebene Hellgrau gesetzt.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
      <h3 class="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">🔍 Automatische Biometrieprüfung</h3>
      <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Kopfzentrierung und Augenhöhe</li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Gesichtsgröße im Verhältnis zum Bild</li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Überprüfung auf Schatten und Reflexionen</li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span> Warnung bei fehlender Neutralität (Mund offen)</li>
      </ul>
    </div>
    <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
      <h3 class="text-lg font-bold text-green-900 dark:text-green-100 mb-3">🖨️ Drucklayout inklusive</h3>
      <ul class="space-y-2 text-sm text-green-800 dark:text-green-200">
        <li class="flex gap-2"><span class="text-green-600">✓</span> 10×15 cm‑Bogen mit 4, 6 oder 8 Passbildern</li>
        <li class="flex gap-2"><span class="text-green-600">✓</span> Einzelbild als JPEG oder PNG für Online‑Anträge</li>
        <li class="flex gap-2"><span class="text-green-600">✓</span> Zuschneidehilfen und Beschnittmarken</li>
        <li class="flex gap-2"><span class="text-green-600">✓</span> Optimiert für Drogerie‑Ausbelichtung</li>
      </ul>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Schritt für Schritt zum perfekten Passfoto</h3>
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border mt-4">
      <ol class="space-y-4 text-sm list-decimal list-inside text-slate-700 dark:text-slate-300">
        <li><strong>Selfie aufnehmen</strong> – Stelle dich vor eine einfarbige Wand, sorge für gleichmäßiges Licht ohne Schlagschatten. Halte die Kamera etwa 1,5 m entfernt.</li>
        <li><strong>Land und Dokument wählen</strong> – Deutschland (35×45 mm), USA (51×51 mm), UK (35×45 mm) oder ein Schengen‑Visum. Der Assistent lädt automatisch die richtigen Maße.</li>
        <li><strong>Hintergrund entfernen lassen</strong> – Die KI ersetzt den Originalhintergrund durch das geforderte Hellgrau (#D3D3D3). Du kannst die Farbe auch manuell anpassen.</li>
        <li><strong>Biometrieprüfung starten</strong> – Ein Ampelsystem zeigt sofort an, ob Kopfgröße, Augenabstand und Gesichtsausdruck passen. Bei Rot erhältst du konkrete Korrekturhinweise.</li>
        <li><strong>Druckvorlage oder Einzelbild herunterladen</strong> – Fertig für die Beantragung.</li>
      </ol>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none">
    <h3>Länderspezifische Anforderungen im Überblick</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border">
        <thead class="bg-slate-100 dark:bg-slate-700">
          <tr><th class="p-2 text-left">Land / Dokument</th><th class="p-2 text-left">Größe</th><th class="p-2 text-left">Hintergrund</th><th class="p-2 text-left">Besonderheit</th></tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="p-2">Deutschland (Reisepass)</td><td class="p-2">35×45 mm</td><td class="p-2">Hellgrau</td><td class="p-2">Mund geschlossen, neutrale Miene</td></tr>
          <tr><td class="p-2">Frankreich (Visum)</td><td class="p-2">35×45 mm</td><td class="p-2">Weiß</td><td class="p-2">Leichtes Lächeln erlaubt</td></tr>
          <tr><td class="p-2">USA (Visa / Green Card)</td><td class="p-2">51×51 mm</td><td class="p-2">Weiß</td><td class="p-2">Gesichtshöhe 28–35 mm</td></tr>
          <tr><td class="p-2">Schweiz</td><td class="p-2">35×45 mm</td><td class="p-2">Hell</td><td class="p-2">Kopfhöhe 29–34 mm</td></tr>
          <tr><td class="p-2">Schengen-Visum</td><td class="p-2">35×45 mm</td><td class="p-2">Hell</td><td class="p-2">70–80 % Gesichtsanteil</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mt-4">Unser <strong>Passfoto Ersteller</strong> aktualisiert diese Vorgaben regelmäßig, damit dein Antrag nicht wegen eines Formfehlers abgelehnt wird.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Akzeptieren alle Behörden ein selbst erstelltes Passfoto?",
        answer:
          "Ja, solange es den biometrischen Kriterien entspricht. Unser Ersteller prüft diese Kriterien automatisch und warnt bei Abweichungen. Die meisten Nutzer berichten von problemloser Annahme.",
      },
      {
        question: "Kann ich das Passfoto auch für Kinder und Babys verwenden?",
        answer:
          "Definitiv. Der Assistent erkennt, wenn ein Kleinkind fotografiert wird, und lockert die strengen Kopfpositionsvorgaben gemäß den Ausnahmeregelungen. Auch Babys mit noch nicht vollständig geöffneten Augen werden akzeptiert.",
      },
      {
        question: "Wie drucke ich die Passbilder am günstigsten?",
        answer:
          "Lade das 10×15‑cm‑Layout herunter und belichte es bei dm, Rossmann, CEWE oder einem Online‑Dienst. Die Kosten liegen meist unter 0,30 €.",
      },
      {
        question: "Wird mein hochgeladenes Selfie gespeichert?",
        answer:
          "Nein, sämtliche Bearbeitungen finden lokal im Browser statt. Nach dem Schließen des Tabs sind alle Daten gelöscht.",
      },
      {
        question:
          "Kann ich mit dem Passfoto Ersteller auch biometrische Fotos für den digitalen Personalausweis machen?",
        answer:
          "Ja, seit Mai 2025 akzeptieren viele Bürgerämter das digitale Lichtbild. Unser Tool liefert eine Einzeldatei, die direkt im Online‑Antrag verwendet werden kann.",
      },
    ],
  },
  {
    slug: "anleitung",
    metaTitle: "Anleitung – So nutzt du die Online Bildbearbeitung optimal",
    metaDescription:
      "Schritt-für-Schritt-Anleitung für unsere Bild-Tools. Erfahre, wie du Fotos verkleinerst, zuschneidest, den Hintergrund entfernst und Passbilder erstellst. Mit Tipps und Tricks.",
    h1: "Anleitung",
    subtitle:
      "Vom ersten Upload bis zum perfekten Ergebnis – alle Funktionen einfach erklärt.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Erste Schritte mit unseren Bildwerkzeugen",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Willkommen in unserem Online‑Editor! Egal, ob du ein Bild <strong>verkleinern</strong>, <strong>komprimieren</strong>, den <strong>Hintergrund entfernen</strong> oder ein <strong>biometrisches Passbild</strong> erstellen möchtest – hier findest du alle Funktionen übersichtlich vereint. Da alles komplett im Browser läuft, musst du keine Software installieren und deine Bilder bleiben privat.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8 mt-6">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Bild hochladen</h3>
      <p class="text-slate-600 dark:text-slate-400">Klicke auf den Upload‑Bereich oder ziehe deine Datei per Drag & Drop hinein. Unterstützt werden JPEG, PNG, WebP und HEIC. Du kannst auch direkt ein Foto mit deiner Kamera aufnehmen.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Werkzeug wählen</h3>
      <p class="text-slate-600 dark:text-slate-400">Nutze die obere Werkzeugleiste oder das Kontextmenü, um zwischen <strong>Größe ändern</strong>, <strong>Zuschneiden</strong>, <strong>Drehen</strong>, <strong>Komprimieren</strong> und <strong>Hintergrund entfernen</strong> zu wechseln. Bei Passbildern startet automatisch der spezielle Assistent.</p>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Anpassungen vornehmen</h3>
      <p class="text-slate-600 dark:text-slate-400">Passe die Werte mit den Schiebereglern an – Breite, Höhe, Qualität oder Drehwinkel. Jede Änderung zeigt sofort eine Vorschau. Bei der Hintergrundentfernung kannst du mit dem grünen/roten Pinsel feinkorrigieren.</p>
    </div>
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">4. Herunterladen</h3>
      <p class="text-slate-600 dark:text-slate-400">Klicke auf den Download‑Button und wähle das Zielformat (JPEG, PNG, WebP). Dein bearbeitetes Bild wird sofort lokal gespeichert – ohne Upload, ohne Wartezeit.</p>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-8">
    <h3>Hilfreiche Tipps für optimale Ergebnisse</h3>
    <div class="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200">
      <ul class="list-disc list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
        <li>Verwende für die Hintergrundentfernung ein Motiv mit klaren Konturen und guter Ausleuchtung.</li>
        <li>Bei Passbildern ist ein neutraler Gesichtsausdruck (Mund zu) Pflicht – ein leichtes Lächeln kann zur Ablehnung führen.</li>
        <li>Du kannst mehrere Bearbeitungsschritte kombinieren: erst zuschneiden, dann verkleinern, dann komprimieren.</li>
        <li>Die Stapelverarbeitung eignet sich perfekt, um viele Urlaubsfotos auf einmal auf Webschirm‑Größe zu bringen.</li>
        <li>Über das Menü „Verlauf“ kannst du jeden Schritt rückgängig machen oder wiederherstellen.</li>
      </ul>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich die Anleitung auch offline lesen?",
        answer:
          "Ja, sobald die Seite einmal geladen ist, kannst du sie auch ohne Internetverbindung aufrufen. Die Werkzeuge funktionieren dann ebenfalls größtenteils offline.",
      },
      {
        question: "Welche Browser werden unterstützt?",
        answer:
          "Chrome, Firefox, Safari und Edge in der jeweils aktuellen Version. Für die Hintergrundentfernung ist WebGL erforderlich, was alle modernen Browser mitbringen.",
      },
      {
        question: "Gibt es eine maximale Dateigröße?",
        answer:
          "Du kannst Bilder bis 50 MB hochladen. Für sehr große Panoramen empfehlen wir, vorher eine Vorschau zu erstellen.",
      },
      {
        question: "Kann ich mehrere Werkzeuge gleichzeitig nutzen?",
        answer:
          "Du kannst sie nacheinander anwenden, aber nicht parallel. Der Editor speichert deine Änderungen in der Session, sodass du z. B. nach dem Freistellen direkt skalieren kannst.",
      },
      {
        question: "Sind alle Funktionen wirklich kostenlos?",
        answer:
          "Absolut. Es gibt keine Premium‑Stufe und keine versteckten Kosten. Die Finanzierung erfolgt über dezente Werbung, die die Nutzung nicht beeinträchtigt.",
      },
    ],
  },
  {
    slug: "kontakt",
    metaTitle: "Kontakt – Schreib uns bei Fragen oder Feedback",
    metaDescription:
      "Du hast Fragen zu unseren Bildbearbeitungstools oder benötigst technischen Support? Kontaktiere uns per E‑Mail – wir melden uns innerhalb von 24 Stunden.",
    h1: "Kontakt",
    subtitle: "Wir freuen uns auf deine Nachricht und helfen dir gerne weiter.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "So erreichst du uns",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Dein Feedback ist uns wichtig. Ob du eine Frage zur Bedienung hast, einen Fehler melden möchtest oder einfach nur ein Verbesserungsvorschlag loswerden willst – zögere nicht, uns zu schreiben. Unser kleines Team bearbeitet jede E‑Mail persönlich und bemüht sich um eine schnelle Rückmeldung.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    <div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
      <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      </div>
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Per E‑Mail</h3>
      <p class="text-slate-600 dark:text-slate-400 mb-6">Unsere Support‑Adresse für alle technischen und allgemeinen Anfragen:</p>
      <a href="mailto:support@image-editor-studio.de" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
        support@image-editor-studio.de
      </a>
    </div>

    <div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Bevor du schreibst</h3>
      <ul class="space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">🔍</span>
          <span>Schau zuerst in unsere <a href="/anleitung" class="text-blue-600 dark:text-blue-400 underline">Anleitung</a> – dort sind viele häufige Fragen bereits beantwortet.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">📸</span>
          <span>Sollte es um ein konkretes Bild gehen, beschreibe bitte das Problem möglichst genau. Wir können aus Datenschutzgründen keine Bilddateien annehmen.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">🕒</span>
          <span>Unsere Antwortzeit beträgt in der Regel 24–48 Stunden, am Wochenende auch mal etwas länger.</span>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-600 dark:text-blue-400 mt-1">💡</span>
          <span>Verbesserungsvorschläge und Feature‑Wünsche sind immer willkommen. Viele unserer Funktionen basieren auf Nutzerfeedback.</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <h3>Häufige Kontaktgründe</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border">
        <thead class="bg-slate-100 dark:bg-slate-700">
          <tr><th class="p-2 text-left">Anliegen</th><th class="p-2 text-left">Kurze Selbsthilfe</th></tr>
        </thead>
        <tbody class="divide-y">
          <tr><td class="p-2">Bild wird nicht geladen</td><td class="p-2">Prüfe Dateiformat (JPEG/PNG/WebP) und Größe (&lt;50 MB). Deaktiviere ggf. Browser‑Erweiterungen.</td></tr>
          <tr><td class="p-2">Hintergrund wird nicht vollständig entfernt</td><td class="p-2">Nutze den Pinsel‑Modus, um manuell zu korrigieren. Bessere Ausleuchtung des Motivs hilft meist.</td></tr>
          <tr><td class="p-2">Passbild wird abgelehnt</td><td class="p-2">Überprüfe die Biometrie‑Ampel im Assistenten. Häufigster Grund: Kopf zu klein oder nicht zentriert.</td></tr>
          <tr><td class="p-2">Tool langsam auf älterem Gerät</td><td class="p-2">Schließe andere Tabs und reduziere die Bildauflösung vor der Bearbeitung. Die Hintergrund‑KI benötigt ausreichend Arbeitsspeicher.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Kann ich auch telefonisch Hilfe bekommen?",
        answer:
          "Aktuell bieten wir ausschließlich E‑Mail‑Support an. Dadurch können wir jede Anfrage dokumentiert und mit der notwendigen Sorgfalt beantworten.",
      },
      {
        question:
          "Wie kann ich sicher sein, dass meine E‑Mail nicht im Spam landet?",
        answer:
          "Füge support@image-editor-studio.de zu deinen Kontakten hinzu. Solltest du nach 48 Stunden keine Antwort erhalten, kontrolliere bitte den Spam‑Ordner.",
      },
      {
        question: "Verwendet ihr meine E‑Mail‑Adresse für Werbung?",
        answer:
          "Nein, deine E‑Mail‑Adresse wird ausschließlich zur Beantwortung deiner Anfrage verwendet und nicht an Dritte weitergegeben oder für Newsletter genutzt.",
      },
      {
        question: "Kann ich einen Fehlerbericht mit Screenshot einreichen?",
        answer:
          "Ja, füge einfach einen Link zu einem Screenshot (z. B. über einen Bilderdienst) in die E‑Mail ein. Direkte Anhänge werden wegen Virenschutz nicht geöffnet.",
      },
      {
        question: "Bietet ihr auch geschäftliche Lizenzen oder White‑Label an?",
        answer:
          "Derzeit nicht, aber wir arbeiten an einem API‑Zugang. Schreib uns bei Interesse, wir nehmen dich gerne in die Beta‑Liste auf.",
      },
    ],
  },
  {
    slug: "agb",
    metaTitle: "AGB – Allgemeine Geschäftsbedingungen für die Nutzung",
    metaDescription:
      "Lies die Allgemeinen Geschäftsbedingungen (AGB) für die Online Bildbearbeitung. Informationen zu Haftung, Nutzungsrechten und Verantwortlichkeiten.",
    h1: "AGB",
    subtitle:
      "Rechtliche Grundlage für die Nutzung unserer Bildbearbeitungswerkzeuge.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Nutzungsbedingungen",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Willkommen bei Image Editor Studio (nachfolgend „Dienst“). Durch den Zugriff auf unsere Website und die Nutzung der angebotenen Online‑Bildbearbeitung erklärst du dich mit den folgenden Allgemeinen Geschäftsbedingungen einverstanden. Bitte lies sie sorgfältig durch.</p>
  </div>

  <div class="space-y-5">
    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">1</span>
        Zustimmung zu den Bedingungen
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Mit der Nutzung des Dienstes akzeptierst du diese AGB sowie unsere Datenschutzerklärung. Falls du mit einem Teil nicht einverstanden bist, stelle die Nutzung bitte ein.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">2</span>
        Verfügbarkeit und Änderungen des Dienstes
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Wir bemühen uns um eine unterbrechungsfreie Bereitstellung, können diese jedoch nicht garantieren. Der Dienst kann zu Wartungszwecken, bei technischen Problemen oder aufgrund von Drittanbieter‑Ausfällen vorübergehend nicht erreichbar sein. Wir behalten uns das Recht vor, Funktionen zu ändern, zu erweitern oder einzustellen.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">3</span>
        Verantwortung des Nutzers
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Du trägst die alleinige Verantwortung für die von dir hochgeladenen Bilder. Du sicherst zu, dass du die erforderlichen Rechte an den Bildern besitzt und mit der Bearbeitung keine Rechte Dritter verletzt. Die Bearbeitung von Bildern, die gegen geltendes Recht verstoßen, ist untersagt.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">4</span>
        Geistiges Eigentum
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Der Dienst, sein Quellcode, das Design und die Algorithmen sind unser Eigentum und durch Urheberrecht geschützt. Wir erheben keine Eigentumsansprüche an den von dir bearbeiteten Bildern. Du behältst sämtliche Rechte an deinen Inhalten.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">5</span>
        Haftungsbeschränkung
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Der Dienst wird „wie besehen“ ohne Gewährleistung bereitgestellt. Wir haften nicht für direkte oder indirekte Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung entstehen, es sei denn, sie beruhen auf Vorsatz oder grober Fahrlässigkeit. Für die Richtigkeit der Passbild‑Biometrie‑Prüfung übernehmen wir keine Gewähr; maßgeblich ist allein die Prüfung durch die zuständige Behörde.</p>
    </div>

    <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">6</span>
        Schlussbestimmungen
      </h3>
      <p class="text-slate-600 dark:text-slate-400 ml-10">Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, unser Geschäftssitz.</p>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <p class="text-sm text-slate-500">Stand: Juni 2026. Bei wesentlichen Änderungen werden registrierte Nutzer per E‑Mail informiert. Ansonsten genügt eine Aktualisierung dieser Seite.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question: "Muss ich mich anmelden, um die AGB zu akzeptieren?",
        answer:
          "Nein, die Nutzung der Website gilt bereits als Zustimmung zu diesen Bedingungen. Eine aktive Zustimmung per Klick ist nicht erforderlich.",
      },
      {
        question: "Darf ich die bearbeiteten Bilder kommerziell nutzen?",
        answer:
          "Ja, du behältst alle Rechte an deinen Bildern. Die Nutzung unseres Tools schränkt die kommerzielle Verwendung deiner Werke in keiner Weise ein.",
      },
      {
        question:
          "Was passiert, wenn mein Passbild wegen eines Fehlers im Tool abgelehnt wird?",
        answer:
          "Wir geben die Biometrie‑Hinweise nach bestem Wissen, können aber keine Garantie für die Annahme durch die Behörde übernehmen. Bei Ablehnung überarbeiten wir den Algorithmus jedoch umgehend, falls du uns den Fehler meldest.",
      },
      {
        question: "Gilt das deutsche Recht auch für Nutzer aus dem Ausland?",
        answer:
          "Ja, da der Dienst von Deutschland aus betrieben wird, unterliegt die Nutzung deutschem Recht. Internationale Nutzer sollten dies beachten.",
      },
      {
        question: "Kann ich meine Einwilligung widerrufen?",
        answer:
          "Die AGB regeln die Nutzungsbedingungen, nicht die Einwilligung zur Datenverarbeitung. Da wir keine personenbezogenen Daten erheben, gibt es keine diesbezügliche Einwilligung zu widerrufen.",
      },
    ],
  },
  {
    slug: "datenschutz",
    metaTitle: "Datenschutzerklärung – So schützen wir deine Privatsphäre",
    metaDescription:
      "Unsere Datenschutzerklärung erläutert, dass alle Bildbearbeitungen lokal im Browser stattfinden. Keine Datenerfassung, keine Cookies, keine Server-Uploads. Volle Transparenz.",
    h1: "Datenschutzerklärung",
    subtitle:
      "Deine Privatsphäre ist das Herzstück unseres Dienstes – lese, wie wir sie gewährleisten.",
    showTool: "photo-editor",
    sections: [
      {
        heading: "Datenschutz auf einen Blick",
        content: `<div class="space-y-8 not-prose">
  <div class="prose prose-slate dark:prose-invert max-w-none">
    <p>Der Schutz deiner Daten hat für uns oberste Priorität. Im Gegensatz zu vielen anderen Online‑Bildbearbeitungen, die deine Fotos auf entfernte Server hochladen, setzen wir auf eine vollständig <strong>lokal ausgeführte Verarbeitung</strong>. Das bedeutet: Deine Bilder, Einstellungen und Downloads verlassen niemals deinen Computer oder dein Smartphone. Du kannst den Dienst sogar offline nutzen, nachdem die Seite einmal geladen wurde.</p>
  </div>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-xl">
      <h3 class="text-lg font-bold text-green-900 dark:text-green-400 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z"/></svg>
        100 % Lokale Verarbeitung
      </h3>
      <p class="text-green-800 dark:text-green-300/80">Sämtliche Bearbeitungsfunktionen – Größenänderung, Kompression, Hintergrundentfernung – werden direkt in deinem Browser ausgeführt. <strong>Es findet kein Upload auf einen Server statt.</strong></p>
    </div>
    <div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl">
      <h3 class="text-lg font-bold text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Keine Datenerfassung
      </h3>
      <p class="text-blue-800 dark:text-blue-300/80">Wir verfolgen, sammeln oder speichern keine personenbezogenen Daten. Es werden keine Analyse‑Cookies gesetzt, keine IP‑Adressen protokolliert und keine Nutzerprofile erstellt.</p>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <h3>Welche Daten wir verarbeiten – und warum nicht</h3>
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 border">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-slate-700 dark:text-slate-300"><th class="p-2 text-left">Kategorie</th><th class="p-2 text-left">Wird gespeichert?</th><th class="p-2 text-left">Begründung</th></tr>
        </thead>
        <tbody class="divide-y text-slate-600 dark:text-slate-400">
          <tr><td class="p-2">Hochgeladene Bilder</td><td class="p-2"><span class="text-red-600">✗ Nein</span></td><td class="p-2">Alles lokal. Kein Upload, kein Speicher auf unseren Servern.</td></tr>
          <tr><td class="p-2">Bearbeitungsergebnisse</td><td class="p-2"><span class="text-red-600">✗ Nein</span></td><td class="p-2">Du lädst direkt herunter, ohne Serverzwischenschritt.</td></tr>
          <tr><td class="p-2">Nutzungsstatistiken</td><td class="p-2"><span class="text-red-600">✗ Nein</span></td><td class="p-2">Keine externen Analysewerkzeuge (kein Google Analytics, kein Matomo).</td></tr>
          <tr><td class="p-2">Cookies</td><td class="p-2"><span class="text-green-600">✓ Ja</span></td><td class="p-2">Ausschließlich ein funktionaler Cookie zur Speicherung deiner Spracheinstellung (Local Storage). Kein Tracking.</td></tr>
          <tr><td class="p-2">E‑Mail‑Kontakt</td><td class="p-2"><span class="text-yellow-600">⚠️ Nur bei Support</span></td><td class="p-2">Wenn du uns kontaktierst, wird deine E‑Mail‑Adresse zur Beantwortung verwendet und anschließend gelöscht (max. 90 Tage).</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-6">
    <h3>Weitere Datenschutzinformationen</h3>
    <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200">
      <ul class="list-disc list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
        <li>Unsere Website wird über ein Content Delivery Network (CDN) ausgeliefert, das temporär die IP‑Adresse zur Auslieferung der Seiten benötigt. Diese Protokolle werden nicht mit Bilddaten verknüpft und nach spätestens 24 Stunden gelöscht.</li>
        <li>Für die Hintergrundentfernung wird ein KI‑Modell in deinen Browser heruntergeladen. Es ist vollständig lokal und kommuniziert nicht mit externen Servern.</li>
        <li>Wir hosten keine Social‑Media‑Plugins oder eingebetteten Inhalte, die dein Surfverhalten nachverfolgen könnten.</li>
        <li>Solltest du Fragen zur Datenverarbeitung haben, schreibe uns an: datenschutz@image-editor-studio.de</li>
      </ul>
    </div>
  </div>

  <div class="prose prose-slate dark:prose-invert max-w-none mt-4">
    <p>Verantwortlicher im Sinne der DSGVO:<br/>Image Editor Studio (Einzelunternehmen), Musterstraße 1, 10115 Berlin.<br/>Kontakt: datenschutz@image-editor-studio.de</p>
    <p class="text-sm text-slate-500">Diese Datenschutzerklärung wird regelmäßig aktualisiert. Stand: Juni 2026.</p>
  </div>
</div>`,
      },
    ],
    faq: [
      {
        question:
          "Wird mein Bild an einen Server gesendet, wenn ich den Hintergrund entferne?",
        answer:
          "Nein, die KI läuft komplett im Browser. Dein Bild wird niemals über das Internet gesendet. Du kannst es überprüfen, indem du die Entwicklertools öffnest und den Netzwerk‑Tab beobachtest – es erfolgt kein Bild‑Upload.",
      },
      {
        question: "Verwendet ihr Cookies für Werbezwecke?",
        answer:
          "Wir setzen keine Marketing‑ oder Analyse‑Cookies. Der einzige Cookie ist eine technisch notwendige Einstellung für die Sprache. Dein Surfverhalten wird nicht aufgezeichnet.",
      },
      {
        question:
          "Kann ich den Dienst nutzen, ohne mit meiner IP‑Adresse erkannt zu werden?",
        answer:
          "Da alle Bearbeitungen lokal stattfinden, ist deine IP‑Adresse nur für die Auslieferung der Webseite notwendig. Du kannst zusätzlich ein VPN nutzen, ohne dass die Funktion eingeschränkt ist.",
      },
      {
        question: "Speichert ihr Passbilder für spätere Abrufe?",
        answer:
          "Auf keinen Fall. Selbst wenn du denselben Browser verwendest, werden keine Passbilder zwischengespeichert. Jede Session startet mit einem leeren Editor.",
      },
      {
        question: "Werden Metadaten aus meinen Bildern ausgelesen?",
        answer:
          "EXIF‑Daten wie GPS‑Koordinaten werden standardmäßig beim Speichern entfernt, es sei denn, du wünscht ausdrücklich deren Erhalt. Auch dies geschieht lokal, ohne dass die Metadaten an uns übermittelt werden.",
      },
    ],
  },
];
