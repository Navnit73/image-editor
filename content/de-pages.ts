import { SeoPage } from '../lib/types/seo';

export const dePages: SeoPage[] = [
  {
    slug: 'foto-groesse-aendern',
    metaTitle: 'Kostenlos Fotos verkleinern | Bildgröße online ändern',
    metaDescription: 'Ändern Sie die Größe Ihrer Fotos online und kostenlos. Schnell, sicher und ohne Qualitätsverlust.',
    h1: 'Online Foto-Größe ändern',
    subtitle: 'Ändern Sie schnell die Bildabmessungen, ohne an Qualität zu verlieren.',
    sections: [
      {
        heading: 'Warum unseren Service nutzen?',
        content: 'Er ist unglaublich schnell und läuft komplett in Ihrem Browser für maximale Privatsphäre.'
      }
    ],
    faq: [
      {
        question: 'Ist es kostenlos?',
        answer: 'Ja, absolut kostenlos.'
      }
    ]
  },
  {
    slug: 'passfoto-ersteller',
    metaTitle: 'Passfoto Ersteller | Biometrische Passbilder online machen',
    metaDescription: 'Erstellen Sie biometrische Passfotos online in Sekunden.',
    h1: 'Passfoto Ersteller',
    subtitle: 'Schneiden und formatieren Sie Ihre Fotos ganz einfach für offizielle Dokumente.',
    sections: [
      {
        heading: 'Strenge Vorgaben',
        content: 'Wir halten uns an die strengen 35x45mm Anforderungen für biometrische Passbilder.'
      }
    ],
    faq: [
      {
        question: 'Wie groß sind die Bilder?',
        answer: 'Die Standardgröße beträgt 35x45 mm.'
      }
    ]
  },
  {
    slug: 'anleitung',
    metaTitle: 'Anleitung | Image Editor Studio',
    metaDescription: 'Erfahren Sie, wie Sie unsere kostenlosen Online-Bild-Tools verwenden.',
    h1: 'Anleitung',
    sections: [
      {
        heading: 'Erste Schritte',
        content: `<div class="grid md:grid-cols-2 gap-6 mt-6 not-prose">
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
    </div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Bild hochladen</h3>
    <p class="text-slate-600 dark:text-slate-400">Wählen Sie Ihre Bilddatei aus und ziehen Sie sie in den Upload-Bereich.</p>
  </div>
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
    </div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Einstellungen anpassen</h3>
    <p class="text-slate-600 dark:text-slate-400">Verwenden Sie die rechte Seitenleiste, um Abmessungen zu ändern, den Hintergrund zu entfernen oder Farben anzupassen.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'kontakt',
    metaTitle: 'Kontakt | Image Editor Studio',
    metaDescription: 'Kontaktieren Sie unser Team für Support oder Anfragen.',
    h1: 'Kontakt',
    sections: [
      {
        heading: 'Melden Sie sich',
        content: `<div class="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center not-prose mt-6">
  <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
  </div>
  <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Nehmen Sie Kontakt auf</h3>
  <p class="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">Wir antworten normalerweise innerhalb von 24-48 Stunden auf alle Support-Anfragen. Bitte fügen Sie die Details Ihres Problems hinzu.</p>
  <a href="mailto:support@example.com" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
    support@example.com
  </a>
</div>`
      }
    ]
  },
  {
    slug: 'agb',
    metaTitle: 'Allgemeine Geschäftsbedingungen | Image Editor Studio',
    metaDescription: 'Lesen Sie die AGB für die Nutzung unserer Dienste.',
    h1: 'AGB',
    sections: [
      {
        heading: 'Nutzungsbedingungen',
        content: `<div class="space-y-6 mt-6 not-prose">
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">1</span>
      Zustimmung zu den Bedingungen
    </h3>
    <p class="text-slate-600 dark:text-slate-400 ml-10">Durch den Zugriff und die Nutzung von Image Editor Studio akzeptieren Sie diese Bedingungen und erklären sich damit einverstanden.</p>
  </div>
  <div class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm">2</span>
      Verfügbarkeit des Dienstes
    </h3>
    <p class="text-slate-600 dark:text-slate-400 ml-10">Unsere Tools werden "wie besehen" zur Verfügung gestellt. Wir behalten uns das Recht vor, den Dienst jederzeit zu ändern oder einzustellen.</p>
  </div>
</div>`
      }
    ]
  },
  {
    slug: 'datenschutz',
    metaTitle: 'Datenschutzerklärung | Image Editor Studio',
    metaDescription: 'Unsere Datenschutzerklärung, in der detailliert beschrieben wird, wie wir mit Ihren Daten umgehen.',
    h1: 'Datenschutzerklärung',
    sections: [
      {
        heading: 'Datenschutz',
        content: `<div class="space-y-6 mt-6 not-prose">
  <div class="p-6 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 rounded-r-xl">
    <h3 class="text-lg font-bold text-green-900 dark:text-green-400 mb-2 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z"/></svg>
      100% Lokale Verarbeitung
    </h3>
    <p class="text-green-800 dark:text-green-300/80">Alle Bildbearbeitungen erfolgen sicher in Ihrem lokalen Browser. <strong>Ihre Bilder werden niemals auf Server hochgeladen.</strong></p>
  </div>
  <div class="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-r-xl">
    <h3 class="text-lg font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      Keine Datenerfassung
    </h3>
    <p class="text-blue-800 dark:text-blue-300/80">Wir verfolgen, sammeln oder speichern keine persönlichen Informationen. Es gibt keine Tracking-Cookies im Zusammenhang mit Ihren Dateien.</p>
  </div>
</div>`
      }
    ]
  }
];
