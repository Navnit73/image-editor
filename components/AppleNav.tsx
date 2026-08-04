"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOCALES, Locale } from "@/lib/types/i18n";
import { Globe } from "lucide-react";

interface AppleNavProps {
  currentLocale?: string;
  activeToolTitle?: string;
}

const NAV_I18N: Record<string, {
  store: string;
  crop: string;
  passport: string;
  subnavTitle: string;
  tryFree: string;
}> = {
  en: {
    store: "All Tools",
    crop: "Crop Image",
    passport: "Passport Photo",
    subnavTitle: "Pro Image Studio",
    tryFree: "Try Free",
  },
  pt: {
    store: "Todas as Ferramentas",
    crop: "Cortar Imagem",
    passport: "Foto Passaporte",
    subnavTitle: "Estúdio de Imagem Pro",
    tryFree: "Experimentar Grátis",
  },
  de: {
    store: "Alle Werkzeuge",
    crop: "Bild Zuschneiden",
    passport: "Passfoto Generator",
    subnavTitle: "Pro Bildstudio",
    tryFree: "Kostenlos Testen",
  },
};

export function AppleNav({ currentLocale = "en", activeToolTitle }: AppleNavProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const localeKey = LOCALES[currentLocale as Locale] ? currentLocale : "en";
  const i18n = NAV_I18N[localeKey] || NAV_I18N.en;

  const cropSlug = localeKey === "pt" ? "cortar-imagem" : localeKey === "de" ? "bild-zuschneiden" : "image-cropper";
  const passportSlug = localeKey === "pt" ? "foto-passaporte" : localeKey === "de" ? "passfoto-generator" : "passport-photo-maker";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Global Nav - 44px height, Surface Black #000000 */}
      <nav className="h-[44px] bg-[#000000] text-white flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-[1024px] flex items-center justify-between font-nav-link text-[12px] tracking-[-0.12px]">
          {/* Apple Logo Icon */}
          <Link href={`/${localeKey}`} className="hover:opacity-70 transition-opacity flex items-center gap-1.5" aria-label="photoresizerai.com">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.83.13-9.67-1.92-14.52-6.14-3.32-2.81-7.27-7.61-11.85-14.41-6.42-9.58-11.45-20.2-15.09-31.86-3.64-11.66-5.46-22.56-5.46-32.7 0-14.53 3.63-26.27 10.88-35.22 7.26-8.96 16.29-13.49 27.09-13.6 5.09 0 10.37 1.25 15.84 3.76 5.47 2.5 9.38 3.76 11.73 3.76 2.13 0 5.99-1.21 11.58-3.64 5.59-2.43 10.74-3.57 15.46-3.44 11.8.63 21.05 4.96 27.75 13-10.42 6.33-15.51 15.04-15.27 26.13.25 11.49 4.67 20.81 13.27 27.97 3.91 3.25 8.37 5.72 13.38 7.41-2.47 7.26-5.74 14.5-9.81 21.72zM119.22 31.62c0-7.26 2.62-14.15 7.86-20.67 5.24-6.52 11.77-10.45 19.59-11.8 0.13.88.2 1.76.2 2.64 0 7.37-2.67 14.33-8.01 20.87-5.34 6.54-11.95 10.47-19.84 11.78-.13-.88-.2-1.75-.2-2.63z" />
            </svg>
            <span className="font-semibold text-[13px] tracking-tight">PhotoResizer AI</span>
          </Link>

          {/* Desktop Tool Links */}
          <div className="hidden md:flex items-center space-x-6 text-[#cccccc]">
            <Link href={`/${localeKey}`} className="hover:text-white transition-colors">{i18n.store}</Link>
            <Link href={`/${localeKey}/${cropSlug}`} className="hover:text-white transition-colors">{i18n.crop}</Link>
            <Link href={`/${localeKey}/${passportSlug}`} className="hover:text-white transition-colors">{i18n.passport}</Link>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-[#cccccc] hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-full border border-white/10 hover:border-white/30"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase text-[11px] font-semibold">{localeKey}</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#1d1d1f] border border-white/20 rounded-[12px] shadow-2xl py-2 z-50">
                {Object.values(LOCALES).map((loc) => (
                  <Link
                    key={loc.code}
                    href={`/${loc.code}`}
                    onClick={() => setIsLangOpen(false)}
                    className={`flex items-center justify-between px-4 py-2 text-[12px] text-white/80 hover:bg-white/10 hover:text-white transition-colors ${
                      loc.code === localeKey ? "text-[#2997ff] font-semibold" : ""
                    }`}
                  >
                    <span>{loc.nativeName}</span>
                    <span>{loc.flag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

    
    </header>
  );
}
