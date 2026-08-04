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
      { name: "Passport Photo Maker", href: "/en/passport-photo-maker" },
      { name: "Decrease Pic Size", href: "/en/decrease-pic-size" },
      { name: "Reduce Image Dimensions", href: "/en/reduce-image-dimensions" },
      { name: "Photo Image Resizer", href: "/en/photo-image-resizer" },
    ],
    col2Title: "AI Studio",
    col2Links: [
      { name: "Increase Image Dimensions", href: "/en/increase-image-dimensions" },
      { name: "Decrease Size in KB", href: "/en/decrease-image-size-in-kb" },
      { name: "Adobe Express Resizer", href: "/en/adobe-express-image-resize" },
    ],
    col3Title: "Company & Trust",
    col3Links: [
      { name: "Privacy Policy", href: "/en/privacy-policy" },
      { name: "GDPR & Security", href: "/en/gdpr-data-security" },
      { name: "Help & FAQ", href: "/en/faq" },
      { name: "Contact Us", href: "/en/contact-us" },
    ],
    col4Title: "Languages",
    col4Links: [
      { name: "English (US / Global)", href: "/en" },
      { name: "Português (Brasil)", href: "/pt" },
      { name: "Deutsch (DACH)", href: "/de" },
    ],
    col5Title: "Privacy Commitments",
    col5Links: [
      { name: "Zero Upload Guarantee", href: "/en/privacy-policy" },
      { name: "Client-Side WebGL", href: "/en/gdpr-data-security" },
      { name: "HTML5 Canvas Security", href: "/en/privacy-policy" },
      { name: "Biometric Standards", href: "/en/passport-photo-maker" },
    ],
    copyright: "Copyright © 2026 PhotoResizer AI. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "GDPR & Security",
    legal: "Contact Support",
  },
  pt: {
    disclaimers: [
      "1. Todas as operações de edição de imagem ocorrem 100% localmente na memória do seu navegador. Nenhum arquivo é enviado para servidores externos.",
      "2. O gerador de fotos biométricas está alinhado com as diretrizes da Polícia Federal (3x4 cm) e Visto Americano (2x2 polegadas).",
    ],
    col1Title: "Ferramentas",
    col1Links: [
      { name: "Cortar Imagem", href: "/pt/cortar-imagem" },
      { name: "Foto Passaporte", href: "/pt/foto-passaporte" },
      { name: "Diminuir Foto", href: "/pt/diminuir-tamanho-da-foto" },
      { name: "Reduzir Dimensões", href: "/pt/reduzir-dimensoes-da-imagem" },
      { name: "Redimensionador", href: "/pt/redimensionador-de-fotos" },
    ],
    col2Title: "Estúdio IA",
    col2Links: [
      { name: "Aumentar Dimensões", href: "/pt/aumentar-dimensoes-da-imagem" },
      { name: "Diminuir Tamanho KB", href: "/pt/diminuir-tamanho-da-imagem-em-kb" },
      { name: "Alternativa Adobe Express", href: "/pt/adobe-express-redimensionar-imagem" },
    ],
    col3Title: "Empresa & Confiança",
    col3Links: [
      { name: "Política de Privacidade", href: "/pt/politica-de-privacidade" },
      { name: "LGPD & Segurança", href: "/pt/gdpr-seguranca-de-dados" },
      { name: "Ajuda & FAQ", href: "/pt/perguntas-frequentes" },
      { name: "Fale Conosco", href: "/pt/fale-conosco" },
    ],
    col4Title: "Idiomas",
    col4Links: [
      { name: "English (US / Global)", href: "/en" },
      { name: "Português (Brasil)", href: "/pt" },
      { name: "Deutsch (DACH)", href: "/de" },
    ],
    col5Title: "Garantia de Privacidade",
    col5Links: [
      { name: "Garantia Zero Upload", href: "/pt/politica-de-privacidade" },
      { name: "Processamento Local", href: "/pt/gdpr-seguranca-de-dados" },
      { name: "Segurança HTML5 Canvas", href: "/pt/politica-de-privacidade" },
      { name: "Fotos Biométricas", href: "/pt/foto-passaporte" },
    ],
    copyright: "Copyright © 2026 PhotoResizer AI. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "LGPD & Segurança",
    legal: "Atendimento ao Cliente",
  },
  de: {
    disclaimers: [
      "1. Alle Bildbearbeitungen erfolgen zu 100% lokal im Speicher Ihres Browsers via HTML5 Canvas. Keine Bilder werden auf Server hochgeladen.",
      "2. Biometrische Passbilder entsprechen den Vorgaben der Bundesdruckerei (35x45mm) und ICAO-Standard.",
    ],
    col1Title: "Werkzeuge",
    col1Links: [
      { name: "Bild Zuschneiden", href: "/de/bild-zuschneiden" },
      { name: "Passfoto Generator", href: "/de/passfoto-generator" },
      { name: "Foto Verkleinern", href: "/de/foto-verkleinern" },
      { name: "Abmessungen Reduzieren", href: "/de/bildabmessungen-reduzieren" },
      { name: "Foto Resizer", href: "/de/foto-resizer-online" },
    ],
    col2Title: "KI Studio",
    col2Links: [
      { name: "Bildgröße Erhöhen", href: "/de/bildgroesse-erhoehen" },
      { name: "Größe in KB Verringern", href: "/de/bildgroesse-in-kb-verringern" },
      { name: "Adobe Express Alternative", href: "/de/adobe-express-bildgroesse-aendern" },
    ],
    col3Title: "Unternehmen & Vertrauen",
    col3Links: [
      { name: "Datenschutzerklärung", href: "/de/datenschutz" },
      { name: "DSGVO & Sicherheit", href: "/de/dsgvo-datensicherheit" },
      { name: "Hilfe & FAQ", href: "/de/faq" },
      { name: "Kontakt", href: "/de/kontakt" },
    ],
    col4Title: "Sprachen",
    col4Links: [
      { name: "English (US / Global)", href: "/en" },
      { name: "Português (Brasil)", href: "/pt" },
      { name: "Deutsch (DACH)", href: "/de" },
    ],
    col5Title: "Datenschutz-Garantie",
    col5Links: [
      { name: "Zero-Upload Garantie", href: "/de/datenschutz" },
      { name: "Client-Side Bearbeitung", href: "/de/dsgvo-datensicherheit" },
      { name: "HTML5 Canvas Sicherheit", href: "/de/datenschutz" },
      { name: "Biometrische Vorgaben", href: "/de/passfoto-generator" },
    ],
    copyright: "Copyright © 2026 PhotoResizer AI. Alle Rechte vorbehalten.",
    privacy: "Datenschutzerklärung",
    terms: "DSGVO & Sicherheit",
    legal: "Kontakt & Support",
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
            <h4 className="font-caption-strong text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              {content.col1Title}
            </h4>
            <ul className="font-fine-print text-[12px] leading-[2.2] text-[#333333] space-y-0">
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
            <h4 className="font-caption-strong text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              {content.col2Title}
            </h4>
            <ul className="font-fine-print text-[12px] leading-[2.2] text-[#333333] space-y-0">
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
            <h4 className="font-caption-strong text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              {content.col3Title}
            </h4>
            <ul className="font-fine-print text-[12px] leading-[2.2] text-[#333333] space-y-0">
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
            <h4 className="font-caption-strong text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              {content.col4Title}
            </h4>
            <ul className="font-fine-print text-[12px] leading-[2.2] text-[#333333] space-y-0">
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
            <h4 className="font-caption-strong text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">
              {content.col5Title}
            </h4>
            <ul className="font-fine-print text-[12px] leading-[2.2] text-[#333333] space-y-0">
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
            <Link href={content.col3Links[0].href} className="hover:underline hover:text-[#0066cc] transition-colors">{content.privacy}</Link>
            <span className="text-[#e0e0e0]">|</span>
            <Link href={content.col3Links[1].href} className="hover:underline hover:text-[#0066cc] transition-colors">{content.terms}</Link>
            <span className="text-[#e0e0e0]">|</span>
            <Link href={content.col3Links[3].href} className="hover:underline hover:text-[#0066cc] transition-colors">{content.legal}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
