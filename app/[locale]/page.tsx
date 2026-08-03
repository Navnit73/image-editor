import React from "react";
import Link from "next/link";
import { getAllToolPagesForLocale } from "@/lib/markdown/getContent";
import { AppleNav } from "@/components/AppleNav";
import { AppleFooter } from "@/components/AppleFooter";
import { ImageEditor } from "@/components/editor/ImageEditor";
import { LOCALES, Locale } from "@/lib/types/i18n";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Lock } from "lucide-react";

interface LocaleHomeProps {
  params: Promise<{
    locale: string;
  }>;
}

const HERO_I18N: Record<string, {
  badge: string;
  headline: string;
  tagline: string;
  toolsHeadline: string;
  toolsSubtext: string;
  privacyBadge: string;
  privacyQuote: string;
  privacySubtext: string;
  privacyCta: string;
  featuresHeadline: string;
}> = {
  en: {
    badge: "AI Powered Web Studio",
    headline: "Pro Image Studio. Hello, AI Intelligence.",
    tagline: "Crop, resize, compress, and craft biometric photos with 100% browser-based privacy.",
    toolsHeadline: "The Image Suite.",
    toolsSubtext: "Explore powerful, single-purpose image editing tools built for speed and precision.",
    privacyBadge: "100% Client-Side Privacy",
    privacyQuote: "“Your images belong to you. Every pixel is processed right inside your browser memory with zero server uploads.”",
    privacySubtext: "Built with modern WebGL and HTML5 Canvas APIs, ensuring absolute privacy for personal, business, and biometric document photos.",
    privacyCta: "Learn About Security",
    featuresHeadline: "Engineered like an artifact.",
  },
  pt: {
    badge: "Estúdio Web com IA",
    headline: "Estúdio de Imagem Pro. Olá, Inteligência IA.",
    tagline: "Corte, redimensione, compacte e crie fotos biométricas com 100% de privacidade no seu navegador.",
    toolsHeadline: "A Suíte de Imagem.",
    toolsSubtext: "Explore ferramentas poderosas criadas para velocidade e máxima precisão visual.",
    privacyBadge: "100% Privacidade no Cliente",
    privacyQuote: "“Suas imagens pertencem a você. Cada pixel é processado na memória do seu navegador com zero uploads.”",
    privacySubtext: "Desenvolvido com APIs modernas de HTML5 Canvas e WebGL, garantindo privacidade total para documentos e fotos pessoais.",
    privacyCta: "Saiba Mais Sobre Segurança",
    featuresHeadline: "Projetado com excelência.",
  },
  de: {
    badge: "KI-Webstudio",
    headline: "Pro Bildstudio. Hallo, KI-Intelligenz.",
    tagline: "Zuschneiden, skalieren, komprimieren und Passbilder erstellen mit 100% Browser-Datenschutz.",
    toolsHeadline: "Die Bildbearbeitungs-Suite.",
    toolsSubtext: "Entdecken Sie leistungsstarke Werkzeuge für maximale Geschwindigkeit und Präzision.",
    privacyBadge: "100% Client-Side Datenschutz",
    privacyQuote: "„Ihre Bilder gehören Ihnen. Jeder Pixel wird direkt in Ihrem Browser verarbeitet – ohne Server-Uploads.“",
    privacySubtext: "Erstellt mit modernen HTML5 Canvas & WebGL Technologien für absoluten Schutz Ihrer persönlichen Fotos.",
    privacyCta: "Mehr Über Sicherheit Erfahren",
    featuresHeadline: "Präzise entwickelt.",
  },
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "de" }];
}

export default async function LocaleHomePage({ params }: LocaleHomeProps) {
  const { locale } = await params;
  const validLocale = (LOCALES[locale as Locale] ? locale : "en") as Locale;
  const i18n = HERO_I18N[validLocale] || HERO_I18N.en;
  const pages = await getAllToolPagesForLocale(validLocale);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-body selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
      {/* Apple Global & Sub Nav Header */}
      <AppleNav currentLocale={validLocale} />

      {/* Hero Section: Dark Product Tile (#272729) */}
      <section className="w-full bg-[#272729] text-white py-[64px] md:py-[80px] px-6 text-center overflow-hidden min-h-[640px] border-b border-white/10 flex flex-col items-center justify-between">
        <div className="max-w-[840px] mx-auto z-10 flex flex-col items-center">
          <span className="font-caption text-[14px] text-[#2997ff] font-semibold uppercase tracking-wider mb-2 inline-block bg-[#2997ff]/10 px-3 py-1 rounded-full border border-[#2997ff]/20">
            {i18n.badge}
          </span>
          <h1 className="font-hero-display text-[40px] sm:text-[52px] md:text-[64px] font-semibold tracking-[-0.28px] leading-[1.05] mb-4 text-white">
            {i18n.headline}
          </h1>
          <p className="font-lead text-[21px] md:text-[26px] font-normal tracking-[0.196px] text-white/80 max-w-[680px] mb-8 leading-[1.35]">
            {i18n.tagline}
          </p>

          <div className="flex items-center gap-4">
            <a href="#editor-demo" className="btn-apple-primary text-[17px] py-3 px-8">
              Launch Live Studio
            </a>
          </div>
        </div>

        {/* Live Interactive Filerobot Editor Container with Apple Product Drop Shadow */}
        <div id="editor-demo" className="mt-12 w-full max-w-[1024px] mx-auto">
          <ImageEditor preset="full" locale={validLocale} />
        </div>
      </section>

      {/* Section 2: Store Utility Cards Grid (Parchment Canvas #f5f5f7) */}
      <section className="w-full py-20 px-6 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-[1024px] mx-auto">
          <div className="mb-12 text-left">
            <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold uppercase tracking-wider block mb-1">
              {i18n.toolsHeadline}
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[44px] font-semibold text-[#1d1d1f]">
              {i18n.toolsSubtext}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/${validLocale}/${page.slug}`}
                className="bg-white border border-[#e0e0e0] rounded-[18px] p-6 flex flex-col justify-between apple-active-scale group hover:border-[#0066cc]/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-caption text-[13px] text-[#7a7a7a] block mb-1 uppercase tracking-wide">
                    {page.frontmatter.toolCategory}
                  </span>
                  <h3 className="font-body-strong text-[18px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors mb-2">
                    {page.frontmatter.title}
                  </h3>
                  <p className="font-caption text-[14px] text-[#7a7a7a] line-clamp-2 leading-[1.45]">
                    {page.frontmatter.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-[#0066cc] font-body text-[15px]">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Feature Highlights (Light Canvas #ffffff) */}
      <section className="w-full py-20 px-6 bg-white border-b border-[#f0f0f0]">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-14">
            <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold uppercase tracking-wider block mb-2">
              Architectural Pillars
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[44px] font-semibold text-[#1d1d1f]">
              {i18n.featuresHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fafafc] border border-[#e0e0e0] rounded-[18px] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-body-strong text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  Zero Server Uploads
                </h3>
                <p className="font-body text-[16px] text-[#7a7a7a] leading-[1.47]">
                  All image editing operations execute 100% locally in your web browser RAM using HTML5 Canvas.
                </p>
              </div>
            </div>

            <div className="bg-[#fafafc] border border-[#e0e0e0] rounded-[18px] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-body-strong text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  Lossless Canvas Export
                </h3>
                <p className="font-body text-[16px] text-[#7a7a7a] leading-[1.47]">
                  Export high-resolution PNG, WebP, and JPG files with zero compression artifacts or watermarks.
                </p>
              </div>
            </div>

            <div className="bg-[#fafafc] border border-[#e0e0e0] rounded-[18px] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-body-strong text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  Biometric Precision
                </h3>
                <p className="font-body text-[16px] text-[#7a7a7a] leading-[1.47]">
                  Integrated alignment guidelines for US 2x2", Schengen 35x45mm, and Brazil RG passport requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Privacy & Environment Quote Card (#272729) */}
      <section className="w-full py-20 px-6 bg-[#272729] text-white flex flex-col items-center text-center">
        <div className="max-w-[840px] flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="font-caption text-[14px] text-white font-medium">
              {i18n.privacyBadge}
            </span>
          </div>

          <h2 className="font-display-lg text-[32px] md:text-[44px] font-semibold leading-[1.12] mb-6">
            {i18n.privacyQuote}
          </h2>
          <p className="font-lead-airy text-[22px] font-light text-white/80 max-w-[680px] mb-8">
            {i18n.privacySubtext}
          </p>

          <a href="#editor-demo" className="btn-apple-primary font-body text-[17px] py-3 px-8">
            {i18n.privacyCta}
          </a>
        </div>
      </section>

      {/* Localized Apple Footer */}
      <AppleFooter locale={validLocale} />
    </div>
  );
}
