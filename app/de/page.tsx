"use client";

import React, { useState } from "react";
import Link from "next/link";
import PhotoEditor from "../components/editor/PhotoEditor";
import BgRemoverApp from "../components/bg_removal/BgRemoverApp";

const STATS = [
  { value: "100%", label: "Kostenlos", sub: "Keine versteckten Kosten" },
  { value: "0%", label: "Uploads", sub: "Alles lokal im Browser" },
  { value: "5+", label: "Werkzeuge", sub: "In einem Tool vereint" },
  { value: "∞", label: "Bilder", sub: "Unbegrenzte Nutzung" },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: "Bildgröße ändern",
    desc: "Passen Sie Breite, Höhe und Seitenverhältnis Ihrer Bilder präzise an – ideal für Webseiten, Blogs und soziale Netzwerke.",
    tag: "Beliebt",
    tagColor: "bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Hintergrund entfernen",
    desc: "KI-gestützte Hintergrundentfernung in Sekunden. Perfekt für Produktbilder, Bewerbungsfotos und Social-Media-Inhalte.",
    tag: "KI-gestützt",
    tagColor: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    title: "Bilder komprimieren",
    desc: "Reduzieren Sie die Dateigröße ohne sichtbaren Qualitätsverlust. Schnellere Ladezeiten für Ihre Website.",
    tag: "Schnell",
    tagColor: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Helligkeit & Kontrast",
    desc: "Verbessern Sie die Bildqualität mit professionellen Anpassungen für Helligkeit, Kontrast, Sättigung und mehr.",
    tag: "Profi-Tools",
    tagColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    title: "Bild zuschneiden",
    desc: "Schneiden Sie Bilder auf exakte Abmessungen zu oder wählen Sie vordefinierte Formate für Instagram, YouTube und mehr.",
    tag: "Einfach",
    tagColor: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Format konvertieren",
    desc: "Konvertieren Sie Bilder zwischen JPG, PNG und WebP – direkt im Browser, ohne Upload auf einen Server.",
    tag: "Datenschutz",
    tagColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400",
  },
];

const STEPS = [
  { num: "01", title: "Bild hochladen", desc: "Ziehen Sie Ihr Bild in das Feld oder wählen Sie es aus Ihren Dateien." },
  { num: "02", title: "Werkzeug wählen", desc: "Wählen Sie aus unseren professionellen Bearbeitungswerkzeugen." },
  { num: "03", title: "Änderungen anwenden", desc: "Passen Sie Einstellungen an und sehen Sie das Ergebnis in Echtzeit." },
  { num: "04", title: "Herunterladen", desc: "Speichern Sie Ihr fertig bearbeitetes Bild mit einem Klick." },
];

const COMPARE_ROWS = [
  { feature: "Installation erforderlich", ours: false, desktop: true },
  { feature: "Kostenlos nutzbar", ours: true, desktop: false, note: "Oft kostenpflichtig" },
  { feature: "Mobil nutzbar", ours: true, desktop: false, note: "Eingeschränkt" },
  { feature: "Datenschutz (kein Upload)", ours: true, desktop: null, note: "Abhängig" },
  { feature: "Hintergrund entfernen (KI)", ours: true, desktop: true },
  { feature: "Sofort nutzbar", ours: true, desktop: false },
  { feature: "Mehrere Formate", ours: true, desktop: true },
];

const FAQS = [
  {
    q: "Ist das Tool wirklich kostenlos?",
    a: "Ja, alle grundlegenden Funktionen – Bildbearbeitung, Bildgröße ändern, Zuschneiden, Komprimieren und Hintergrund entfernen – sind vollständig kostenlos und ohne Registrierung nutzbar.",
  },
  {
    q: "Werden meine Bilder auf einen Server hochgeladen?",
    a: "Nein. Die gesamte Verarbeitung findet direkt in Ihrem Browser statt. Ihre Bilder verlassen niemals Ihr Gerät. Das garantiert maximale Privatsphäre und Sicherheit.",
  },
  {
    q: "Welche Bildformate werden unterstützt?",
    a: "Wir unterstützen JPG, JPEG, PNG und WebP – die gängigsten Bildformate für Web und Druck. Die Konvertierung zwischen diesen Formaten ist ebenfalls möglich.",
  },
  {
    q: "Kann ich Bilder für soziale Netzwerke optimieren?",
    a: "Ja! Sie können Bilder auf die optimalen Abmessungen für Instagram (1:1, 4:5, 16:9), Facebook, LinkedIn, Pinterest und YouTube zuschneiden und anpassen.",
  },
  {
    q: "Wie gut funktioniert die KI-Hintergrundentfernung?",
    a: "Unsere KI erkennt Personen, Produkte und Objekte zuverlässig und entfernt den Hintergrund in wenigen Sekunden. Für komplexe Bilder können Sie das Ergebnis manuell nachbearbeiten.",
  },
  {
    q: "Gibt es eine Dateigröße-Beschränkung?",
    a: "Da die Verarbeitung lokal in Ihrem Browser stattfindet, ist die maximale Dateigröße von Ihrem Gerät und Browser abhängig. In der Regel funktionieren Bilder bis 20 MB problemlos.",
  },
];

const USECASES = [
  { emoji: "🛒", title: "E-Commerce", desc: "Produktbilder freistellen, auf gleiche Größe bringen und für Online-Shops optimieren." },
  { emoji: "👤", title: "Bewerbung & LinkedIn", desc: "Professionelles Bewerbungsfoto mit neutralem Hintergrund in Minuten erstellen." },
  { emoji: "📱", title: "Social Media", desc: "Bilder perfekt für Instagram, TikTok, Facebook und andere Plattformen zuschneiden." },
  { emoji: "🌐", title: "Webseiten & Blogs", desc: "Bilder komprimieren und optimieren für schnellere Ladezeiten und besseres SEO." },
  { emoji: "📄", title: "Präsentationen", desc: "Bilder auf exakte Abmessungen bringen und für PowerPoint oder Keynote vorbereiten." },
  { emoji: "🎨", title: "Grafikdesign", desc: "Schnelle Bildanpassungen ohne teure Software – direkt im Browser." },
];

export default function GermanHomePage() {
  const [activeTab, setActiveTab] = useState<"editor" | "bg_remover">("editor");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg-root font-sans transition-colors duration-300">
      {/* ── Hero / Header ── */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-10 pb-6">
          {/* Trust badge */}
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-50 dark:bg-lime-900/30 border border-lime-200 dark:border-lime-800 rounded-full text-xs font-semibold text-lime-700 dark:text-lime-400">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
              100% kostenlos · Kein Upload · Keine Registrierung
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Professionelle{" "}
                <span className="text-lime-600 dark:text-lime-500">Bildbearbeitung</span>
                <br />
                direkt im Browser
              </h1>
              <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Bilder bearbeiten, Hintergründe entfernen, Größen anpassen – alles kostenlos, privat und ohne Installation. Ihre Fotos bleiben auf Ihrem Gerät.
              </p>
              {/* Stats row */}
              <div className="mt-6 grid grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black text-slate-900 dark:text-white">{s.value}</div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">{s.label}</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 hidden sm:block">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Werkzeug wählen</p>
              <div className="flex p-1.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm w-full lg:w-auto">
                <button
                  onClick={() => setActiveTab("editor")}
                  className={`flex-1 lg:w-52 py-3 px-5 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === "editor"
                      ? "bg-lime-600 text-white shadow-lg shadow-lime-500/25"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Foto-Editor
                </button>
                <Link
                  href="/de/hintergrund-entfernen"
                  className={`flex-1 text-center lg:w-52 py-3 px-5 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === "bg_remover"
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Hintergrund entfernen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── App Area ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
        <div className={activeTab === "editor" ? "block" : "hidden"}>
          <PhotoEditor />
        </div>
        <div className={activeTab === "bg_remover" ? "block" : "hidden"}>
          <BgRemoverApp />
        </div>
      </div>

      {/* ── SEO + Content Area ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-24 space-y-24">

        {/* ── Features Grid ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">Alle Werkzeuge</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Alles, was Sie für Ihre Bilder brauchen
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Von der einfachen Größenanpassung bis zur KI-gestützten Hintergrundentfernung – alle Werkzeuge in einem Tool.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-lime-400 dark:hover:border-lime-600 hover:shadow-lg hover:shadow-lime-500/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 group-hover:bg-lime-50 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                    {f.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${f.tagColor}`}>{f.tag}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">So funktioniert's</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">In 4 Schritten zum Ergebnis</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* connector line desktop */}
            <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
            {STEPS.map((s, i) => (
              <div key={s.num} className="relative bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-lime-600 dark:bg-lime-600 text-white text-lg font-black flex items-center justify-center mx-auto mb-4 relative z-10">
                  {s.num}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">Anwendungsfälle</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Für jeden Einsatzbereich geeignet</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Ob Privatperson, Freiberufler oder Unternehmen – unser Tool ist für alle nutzbar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USECASES.map((u) => (
              <div key={u.title} className="flex gap-4 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <span className="text-3xl shrink-0 mt-0.5">{u.emoji}</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{u.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">Vergleich</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Online-Tool vs. Desktop-Software
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Warum unser kostenloses Online-Tool für die tägliche Bildbearbeitung oft die bessere Wahl ist.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left p-4 font-semibold text-slate-500 dark:text-slate-400">Funktion</th>
                  <th className="p-4 font-bold text-slate-900 dark:text-white text-center w-36">
                    <span className="inline-block bg-lime-600 text-white px-3 py-1 rounded-lg text-xs">Unser Tool</span>
                  </th>
                  <th className="p-4 font-semibold text-slate-500 dark:text-slate-400 text-center w-36">Desktop-Software</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-100 dark:border-slate-700/50 ${i % 2 === 0 ? "" : "bg-slate-50/50 dark:bg-slate-800/30"}`}>
                    <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.ours ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.desktop === true ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      ) : row.desktop === false ? (
                        <span className="text-slate-400 dark:text-slate-500 text-xs">{row.note || "Nein"}</span>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500 text-xs">{row.note}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">Häufige Fragen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Haben Sie Fragen?</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Privacy Banner ── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #84cc16 0%, transparent 50%), radial-gradient(circle at 80% 50%, #a855f7 0%, transparent 50%)" }} />
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔒</span>
              <h2 className="text-2xl md:text-3xl font-extrabold">Ihre Privatsphäre ist uns wichtig</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Im Gegensatz zu anderen Online-Tools werden Ihre Bilder <strong className="text-white">niemals auf unsere Server hochgeladen</strong>. Alle Berechnungen finden direkt in Ihrem Browser statt – 100% privat, 100% sicher.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: "🛡️", text: "Keine Server-Uploads" },
                { icon: "🚫", text: "Keine Datenspeicherung" },
                { icon: "✅", text: "DSGVO-konform" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-xl">{b.icon}</span>
                  <span className="text-sm font-semibold">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Bereit zum Loslegen?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Kein Konto erforderlich. Kein Download. Einfach öffnen und sofort starten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab("editor")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-lime-600 rounded-2xl shadow-lg shadow-lime-500/30 hover:bg-lime-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Foto-Editor öffnen
            </button>
            <Link
              href="/de/tools"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              Alle Tools entdecken
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}