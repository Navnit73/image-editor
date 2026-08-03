"use client";

import React from "react";
import Link from "next/link";

interface AppleFooterProps {
  locale?: string;
}

const FOOTER_I18N: Record<string, {
  disclaimers: string[];
  col1Title: string;
  col1Links: { name: string; href: string }[];
  col2Title: string;
  col2Links: { name: string; href: string }[];
  col3Title: string;
  col3Links: { name: string; href: string }[];
  col4Title: string;
  col4Links: { name: string; href: string }[];
  col5Title: string;
  col5Links: { name: string; href: string }[];
  copyright: string;
  privacy: string;
  terms: string;
  legal: string;
}> = {
  en: {
    disclaimers: [
      "1. All image editing operations occur 100% locally in your web browser memory using HTML5 Canvas APIs. Zero image files are uploaded or stored on cloud servers.",
      "2. AI biometric preset compliance is aligned with standard ICAO 2x2 inch and 35x45mm passport photo guidelines.",
    ],
    col1Title: "Tools & Editors",
    col1Links: [
      { name: "Image Cropper", href: "/en/image-cropper" },
      { name: "Image Resizer", href: "/en/resize-image" },
      { name: "Image Compressor", href: "/en/compress-image" },
      { name: "Passport Photo Maker", href: "/en/passport-photo-maker" },
      { name: "Watermark Tool", href: "/en/watermark-image" },
    ],
    col2Title: "AI Studio",
    col2Links: [
      { name: "Background Remover", href: "/en/image-cropper" },
      { name: "AI Face Aligner", href: "/en/passport-photo-maker" },
      { name: "Lossless Export Engine", href: "/en/compress-image" },
    ],
    col3Title: "Languages",
    col3Links: [
      { name: "English (US / Global)", href: "/en" },
      { name: "Português (Brasil)", href: "/pt" },
      { name: "Deutsch (DACH)", href: "/de" },
    ],
    col4Title: "Privacy & Standards",
    col4Links: [
      { name: "Zero Upload Commitment", href: "/en" },
      { name: "Client-Side Processing", href: "/en" },
      { name: "HTML5 Canvas Security", href: "/en" },
    ],
    col5Title: "Apple Design System",
    col5Links: [
      { name: "Action Blue Token (#0066cc)", href: "/en" },
      { name: "17px Body Typography", href: "/en" },
      { name: "Signature Product Shadow", href: "/en" },
      { name: "Edge-to-Edge Tile Rhythm", href: "/en" },
    ],
    copyright: "Copyright © 2026 Apple Image Studio Inc. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    legal: "Legal Info",
  },
  pt: {
    disclaimers: [
      "1. Todas as operações de edição de imagem ocorrem 100% localmente na memória do seu navegador. Nenhum arquivo é enviado para servidores externos.",
      "2. O gerador de fotos biométricas está alinhado com as diretrizes da Polícia Federal (3x4 cm) e Visto Americano (2x2 polegadas).",
    ],
    col1Title: "Ferramentas",
    col1Links: [
      { name: "Cortar Imagem", href: "/pt/cortar-imagem" },
      { name: "Redimensionar Foto", href: "/pt/redimensionar-imagem" },
      { name: "Compactar Foto", href: "/pt/compactar-imagem" },
      { name: "Foto Passaporte", href: "/pt/foto-passaporte" },
      { name: "Marca d'água", href: "/pt/marca-d-agua" },
    ],
    col2Title: "Estúdio IA",
    col2Links: [
      { name: "Removedor de Fundo", href: "/pt/cortar-imagem" },
      { name: "Alinhador Biométrico", href: "/pt/foto-passaporte" },
      { name: "Exportação Sem Perdas", href: "/pt/compactar-imagem" },
    ],
    col3Title: "Idiomas",
    col3Links: [
      { name: "English (US / Global)", href: "/en" },
      { name: "Português (Brasil)", href: "/pt" },
      { name: "Deutsch (DACH)", href: "/de" },
    ],
    col4Title: "Privacidade",
    col4Links: [
      { name: "Compromisso Zero Upload", href: "/pt" },
      { name: "Processamento no Cliente", href: "/pt" },
      { name: "Segurança HTML5 Canvas", href: "/pt" },
    ],
    col5Title: "Sistema de Design Apple",
    col5Links: [
      { name: "Cor Action Blue (#0066cc)", href: "/pt" },
      { name: "Tipografia Corpo 17px", href: "/pt" },
      { name: "Sombra de Produto Única", href: "/pt" },
    ],
    copyright: "Copyright © 2026 Apple Image Studio Inc. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
    legal: "Informações Legais",
  },
  de: {
    disclaimers: [
      "1. Alle Bildbearbeitungen erfolgen zu 100% lokal im Speicher Ihres Browsers via HTML5 Canvas. Keine Bilder werden auf Server hochgeladen.",
      "2. Biometrische Passbilder entsprechen den Vorgaben der Bundesdruckerei (35x45mm) und ICAO-Standard.",
    ],
    col1Title: "Werkzeuge",
    col1Links: [
      { name: "Bild Zuschneiden", href: "/de/bild-zuschneiden" },
      { name: "Bildgröße Ändern", href: "/de/bildgroesse-aendern" },
      { name: "Bild Komprimieren", href: "/de/bild-komprimieren" },
      { name: "Passfoto Generator", href: "/de/passfoto-generator" },
      { name: "Wasserzeichen", href: "/de/wasserzeichen-erstellen" },
    ],
    col2Title: "KI Studio",
    col2Links: [
      { name: "Hintergrund Entfernen", href: "/de/bild-zuschneiden" },
      { name: "Biometrische Schablone", href: "/de/passfoto-generator" },
      { name: "Verlustfreier Export", href: "/de/bild-komprimieren" },
    ],
    col3Title: "Sprachen",
    col3Links: [
      { name: "English (US / Global)", href: "/en" },
      { name: "Português (Brasil)", href: "/pt" },
      { name: "Deutsch (DACH)", href: "/de" },
    ],
    col4Title: "Datenschutz",
    col4Links: [
      { name: "Zero-Upload Garantie", href: "/de" },
      { name: "Client-Side Bearbeitung", href: "/de" },
      { name: "HTML5 Canvas Sicherheit", href: "/de" },
    ],
    col5Title: "Apple Design System",
    col5Links: [
      { name: "Action Blue Akzent (#0066cc)", href: "/de" },
      { name: "17px Fließtext-Typografie", href: "/de" },
      { name: "Produkt-Schatten", href: "/de" },
    ],
    copyright: "Copyright © 2026 Apple Image Studio Inc. Alle Rechte vorbehalten.",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    legal: "Impressum",
  },
};

export function AppleFooter({ locale = "en" }: AppleFooterProps) {
  const content = FOOTER_I18N[locale] || FOOTER_I18N.en;

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#333333] py-16 px-6 md:px-12 border-t border-[#e0e0e0]">
      <div className="max-w-[1024px] mx-auto">
        {/* Footnote Disclaimers */}
        <div className="font-fine-print text-[12px] leading-[1.33] text-[#7a7a7a] space-y-2 pb-8 border-b border-[#e0e0e0]">
          {content.disclaimers.map((note, idx) => (
            <p key={idx}>{note}</p>
          ))}
        </div>

        {/* Directory Column Links - Relaxed leading 2.41 dense-link */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-10">
          <div>
            <h4 className="font-caption-strong text-[14px] font-semibold text-[#1d1d1f] mb-3">
              {content.col1Title}
            </h4>
            <ul className="font-dense-link text-[15px] leading-[2.41] text-[#333333] space-y-0">
              {content.col1Links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline hover:text-[#0066cc] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-caption-strong text-[14px] font-semibold text-[#1d1d1f] mb-3">
              {content.col2Title}
            </h4>
            <ul className="font-dense-link text-[15px] leading-[2.41] text-[#333333] space-y-0">
              {content.col2Links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline hover:text-[#0066cc] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-caption-strong text-[14px] font-semibold text-[#1d1d1f] mb-3">
              {content.col3Title}
            </h4>
            <ul className="font-dense-link text-[15px] leading-[2.41] text-[#333333] space-y-0">
              {content.col3Links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline hover:text-[#0066cc] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-caption-strong text-[14px] font-semibold text-[#1d1d1f] mb-3">
              {content.col4Title}
            </h4>
            <ul className="font-dense-link text-[15px] leading-[2.41] text-[#333333] space-y-0">
              {content.col4Links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline hover:text-[#0066cc] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-caption-strong text-[14px] font-semibold text-[#1d1d1f] mb-3">
              {content.col5Title}
            </h4>
            <ul className="font-dense-link text-[15px] leading-[2.41] text-[#333333] space-y-0">
              {content.col5Links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline hover:text-[#0066cc] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Copyright Section */}
        <div className="pt-8 border-t border-[#e0e0e0] font-fine-print text-[12px] text-[#7a7a7a] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>{content.copyright}</div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">{content.privacy}</a>
            <span className="text-[#e0e0e0]">|</span>
            <a href="#" className="hover:underline">{content.terms}</a>
            <span className="text-[#e0e0e0]">|</span>
            <a href="#" className="hover:underline">{content.legal}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
