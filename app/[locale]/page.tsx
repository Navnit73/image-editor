import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllToolPagesForLocale } from "@/lib/markdown/getContent";
import { AppleNav } from "@/components/AppleNav";
import { AppleFooter } from "@/components/AppleFooter";
import { ImageEditor } from "@/components/editor/ImageEditor";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolFaq } from "@/components/content/ToolFaq";
import { constructHomeMetadata } from "@/lib/seo/generateMetadata";
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateHomeSoftwareApplicationSchema,
  generateHomeFaqSchema,
} from "@/lib/seo/schemas";
import { LOCALES, Locale } from "@/lib/types/i18n";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Lock, Check, Star, Users, Award, ShieldAlert } from "lucide-react";

interface LocaleHomeProps {
  params: Promise<{
    locale: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

const HERO_I18N: Record<
  string,
  {
    badge: string;
    headline: string;
    tagline: string;
    trustPills: string[];
    secondaryCta: string;
    editorLabel: string;
    toolsHeadline: string;
    toolsSubtext: string;
    privacyBadge: string;
    privacyQuote: string;
    privacySubtext: string;
    privacyCta: string;
    featuresHeadline: string;
    seoArticleHeadline: string;
    homeFaqs: Array<{ question: string; answer: string }>;
    seoArticles: Array<{ title: string; content: string[] }>;
  }
> = {
  en: {
    badge: "Free Online AI Image Studio",
    headline: "Free Online AI Image Editor & Photo Resizer",
    tagline:
      "Edit images online, crop photos, compress file size, convert formats (PNG to JPG), and create biometric passport photos — 100% inside your browser memory. No server uploads.",
    trustPills: ["Zero server uploads", "No account needed", "Free, unlimited exports"],
    secondaryCta: "Explore search guides",
    editorLabel: "Local session — nothing leaves this tab",
    toolsHeadline: "The Complete Image Suite.",
    toolsSubtext:
      "From a free online AI image editor and photo resizer to a passport photo generator and image compressor, each tool does one job with precision.",
    privacyBadge: "100% Client-Side Privacy",
    privacyQuote: "“Your images belong to you. Every pixel is processed right inside your browser memory with zero server uploads.”",
    privacySubtext: "Built with modern WebGL and HTML5 Canvas APIs, ensuring absolute privacy for personal, business, and biometric document photos.",
    privacyCta: "Learn About Security Architecture",
    featuresHeadline: "Built for speed, precision, and privacy.",
    seoArticleHeadline: "Free Online AI Image Editor: Guide to Resizing, Cropping & Compressing Photos",
    homeFaqs: [
      {
        question: "Is PhotoResizer AI completely free to use?",
        answer: "Yes! PhotoResizer AI is 100% free for all editing, cropping, compression, and passport photo tasks with zero watermarks or limits.",
      },
      {
        question: "Are my photos uploaded or stored on any server?",
        answer: "No, never. All image processing takes place 100% locally inside your web browser RAM using HTML5 Canvas and WebGL technology.",
      },
      {
        question: "How do I resize an image online without losing quality?",
        answer: "Our smart online image resizer uses high-fidelity bicubic resampling algorithms to adjust dimensions while maintaining sharp edges and pixel clarity.",
      },
      {
        question: "How to crop images for Instagram, LinkedIn, and social media?",
        answer: "Select the Image Cropper tool, choose your aspect ratio preset (1:1 square, 4:5 portrait, or 16:9 widescreen), align your image, and click export.",
      },
      {
        question: "Can I create official passport photos for US, Schengen, or Brazil?",
        answer: "Yes! Our Passport Photo Maker provides official aspect ratio templates and facial alignment guides for US 2x2\", Schengen 35x45mm, and Brazil 3x4cm standards.",
      },
      {
        question: "How to convert PNG to JPG or WebP formats?",
        answer: "Drop your image into the editor, select your target export format (JPG, PNG, or WebP), adjust compression level, and click export.",
      },
      {
        question: "Can I batch resize multiple images at once?",
        answer: "Yes, our client-side engine allows you to process multiple image files sequentially in seconds right within your browser.",
      },
      {
        question: "Which image file formats are supported?",
        answer: "PhotoResizer AI supports JPG, JPEG, PNG, WebP, SVG, and HEIC image files.",
      },
    ],
    seoArticles: [
      {
        title: "Free Online AI Image Editor & Photo Resizer: Why Local Browser Processing Matters",
        content: [
          "Most online photo resizer tools ask you to upload your files to remote cloud servers before performing any edits. You upload a picture, it gets stored on an external server queue, and you hope it gets deleted later. For a casual photo, that might be acceptable. For a biometric passport photo, a scanned government ID, or a confidential document, server uploads carry significant privacy risks.",
          "PhotoResizer AI operates on a radically different architecture. As a true online AI image editor and free photo editor, every crop, resize, and compression task executes 100% locally inside your own web browser using HTML5 Canvas and WebGL APIs. Your image is decoded directly into your device's RAM, edited there, and saved back to your computer — it never touches a remote server or database.",
          "There is no private mode to toggle and no upload step to bypass. The architecture itself prohibits server-side data retention because the editor code runs exclusively on your device. Whether you are creating a US passport photo, cropping an image for Instagram, or compressing product shots for your online store, PhotoResizer AI guarantees absolute data privacy.",
        ],
      },
      {
        title: "How to Resize Images Online Without Losing Quality",
        content: [
          "Oversized image files slow down website loading speeds and consume precious device storage. A single uncompressed product photo can weigh several megabytes, hurting your Google Core Web Vitals score. Using our free photo resizer and image resizer online, you can reduce photo dimensions and compress file sizes by up to 80% while keeping visual quality sharp.",
          "Whether you need to resize jpg, resize png, or convert heavy images to WebP, our online image editor handles format conversion seamlessly alongside dimension adjustments. You can target specific file weight limits (such as under 200KB for official portals) without introducing muddy compression artifacts.",
        ],
      },
      {
        title: "Passport Photo Maker: US 2x2\", Schengen 35x45mm & Biometric Standards",
        content: [
          "A passport photo resizer requires exact millimeter and pixel precision. Different passport offices enforce strict biometric specifications. For example, a US passport photo requires an exact 2x2 inch square (600x600 px at 300 DPI) with specific eye-level positioning, while a Schengen visa requires a 35x45mm photo.",
          "Our passport photo maker embeds these precise document standards directly into the interactive cropping canvas. Select your target document standard, align your head and eyes using built-in guide overlays, and export a high-resolution, submission-ready passport photo in seconds.",
        ],
      },
    ],
  },
  pt: {
    badge: "Estúdio de Imagem IA Grátis",
    headline: "Editor de Imagem IA Grátis e Redimensionador de Fotos",
    tagline:
      "Edite imagens online, corte fotos, diminua o tamanho do arquivo, converta PNG para JPG e crie fotos de passaporte — 100% no seu navegador. Sem uploads.",
    trustPills: ["Zero uploads", "Sem cadastro", "Exportações gratuitas e ilimitadas"],
    secondaryCta: "Ver guias de pesquisa",
    editorLabel: "Sessão local — nada sai desta aba",
    toolsHeadline: "A Suíte de Imagem Completa.",
    toolsSubtext:
      "Do editor de imagem IA e redimensionador de fotos ao gerador de fotos biométricas e compressor, cada ferramenta entrega máxima precisão.",
    privacyBadge: "100% Privacidade no Cliente",
    privacyQuote: "“Suas imagens pertencem a você. Cada pixel é processado na memória do seu navegador com zero uploads.”",
    privacySubtext: "Desenvolvido com APIs modernas de HTML5 Canvas e WebGL, garantindo privacidade total para documentos e fotos pessoais.",
    privacyCta: "Conheça a Arquitetura de Segurança",
    featuresHeadline: "Projetado com velocidade e privacidade.",
    seoArticleHeadline: "Editor de Imagem IA Grátis: Guia Completo para Redimensionar e Compactar Fotos",
    homeFaqs: [
      {
        question: "O PhotoResizer AI é totalmente gratuito?",
        answer: "Sim! Todas as ferramentas de edição, corte, compressão e foto para passaporte são 100% gratuitas e sem marcas d'água.",
      },
      {
        question: "Minhas fotos são enviadas para algum servidor?",
        answer: "Não. Todas as operações de edição ocorrem 100% localmente no navegador do seu dispositivo via HTML5 Canvas.",
      },
      {
        question: "Como redimensionar foto online sem perder qualidade?",
        answer: "Nosso redimensionador utiliza algoritmos avançados de reamostragem bicúbica para ajustar as dimensões mantendo a nitidez dos pixels.",
      },
      {
        question: "Como cortar imagens para Instagram ou LinkedIn?",
        answer: "Selecione a ferramenta Cortar Imagem, escolha a proporção (1:1 quadrado, 4:5 retrato ou 16:9 paisagem), ajuste e exporte.",
      },
      {
        question: "Posso criar fotos biométricas para Passaporte, Visto ou RG?",
        answer: "Sim! O gerador possui modelos oficiais para Visto Americano (2x2\"), Passaporte Europeu (35x45mm) e documento brasileiro (3x4 cm).",
      },
      {
        question: "Como converter PNG para JPG ou WebP?",
        answer: "Carregue sua foto no editor, escolha o formato de saída desejado e clique em exportar.",
      },
      {
        question: "Quais formatos de arquivo são suportados?",
        answer: "O PhotoResizer AI suporta arquivos de imagem JPG, JPEG, PNG, WebP, SVG e HEIC.",
      },
    ],
    seoArticles: [
      {
        title: "Editor de Imagem IA Grátis e Redimensionador de Fotos: Processamento Seguro no Navegador",
        content: [
          "A maioria dos sites de editar fotos online solicita o envio dos seus arquivos para servidores desconhecidos. A foto sai do seu dispositivo e você precisa torcer para que seja excluída depois. Para uma foto comum, isso pode parecer inofensivo. Para fotos de documentos, passaporte ou arquivos confidenciais, o risco de privacidade é real.",
          "O PhotoResizer AI utiliza uma arquitetura 100% local. Como um verdadeiro editor de imagem IA grátis e redimensionador de fotos online, cada operação é executada direto na memória RAM do seu navegador via HTML5 Canvas e WebGL. O arquivo nunca é enviado para nenhum servidor remoto.",
        ],
      },
      {
        title: "Como Redimensionar Fotos e Comprimir Imagens Sem Perder Qualidade",
        content: [
          "Fotos pesadas deixam sites lentos e ocupam espaço desnecessário no celular. Com o nosso redimensionador de fotos online, você pode diminuir a dimensão de arquivos JPG e PNG e reduzir o tamanho em KB em até 80% mantendo a imagem nítida.",
        ],
      },
    ],
  },
  de: {
    badge: "Kostenloses KI Bildstudio",
    headline: "Kostenloser KI Bildeditor & Foto Resizer Online",
    tagline:
      "Bilder online bearbeiten, Fotos zuschneiden, Dateigröße komprimieren, PNG in JPG umwandeln und Passfotos erstellen — 100% lokal im Browser. Ohne Uploads.",
    trustPills: ["Keine Uploads", "Kein Konto nötig", "Kostenlos, unbegrenzt exportieren"],
    secondaryCta: "Such-Anleitungen ansehen",
    editorLabel: "Lokale Sitzung — nichts verlässt diesen Tab",
    toolsHeadline: "Die Komplette Bildbearbeitungs-Suite.",
    toolsSubtext:
      "Vom kostenlosen KI Bildeditor und Foto Resizer bis zum Passfoto Generator — jedes Werkzeug arbeitet mit Höchstpräzision.",
    privacyBadge: "100% Client-Side Datenschutz",
    privacyQuote: "„Ihre Bilder gehören Ihnen. Jeder Pixel wird direkt in Ihrem Browser verarbeitet – ohne Server-Uploads.“",
    privacySubtext: "Erstellt mit modernen HTML5 Canvas & WebGL Technologien für absoluten Schutz Ihrer persönlichen Fotos.",
    privacyCta: "Mehr Über Sicherheitsarchitektur Erfahren",
    featuresHeadline: "Präzise entwickelt für Tempo und Datenschutz.",
    seoArticleHeadline: "Kostenloser KI Bildeditor: Anleitung zum Bildgröße Ändern & Komprimieren",
    homeFaqs: [
      {
        question: "Ist PhotoResizer AI wirklich kostenlos?",
        answer: "Ja! Alle Werkzeuge zum Bearbeiten, Zuschneiden, Komprimieren und Passfoto-Erstellen sind 100% kostenlos ohne Wasserzeichen.",
      },
      {
        question: "Werden meine Fotos auf einen Server hochgeladen?",
        answer: "Nein, niemals. Alle Bildverarbeitungen erfolgen zu 100% lokal im Arbeitsspeicher Ihres Browsers über HTML5 Canvas und WebGL.",
      },
      {
        question: "Wie ändere ich die Bildgröße online ohne Qualitätsverlust?",
        answer: "Unser Foto Resizer nutzt hochwertige Resampling-Algorithmen, um die Maße anzupassen und die Schärfe zu bewahren.",
      },
      {
        question: "Wie schneide ich Bilder für Instagram oder LinkedIn zu?",
        answer: "Wählen Sie das Bild Zuschneiden Werkzeug, stellen Sie das Seitenverhältnis ein und laden Sie das Ergebnis herunter.",
      },
      {
        question: "Kann ich amtliche Passfotos für US-Visum oder EU-Pass erstellen?",
        answer: "Ja! Der Passfoto Generator bietet Vorlagen für US 2x2 Zoll und EU 35x45mm mit Ausrichtungslinien.",
      },
      {
        question: "Welche Dateiformate werden unterstützt?",
        answer: "PhotoResizer AI unterstützt JPG, JPEG, PNG, WebP, SVG und HEIC Bilddateien.",
      },
    ],
    seoArticles: [
      {
        title: "Kostenloser KI Bildeditor & Foto Resizer: Warum Lokale Browser-Verarbeitung Sicherer Ist",
        content: [
          "Die meisten Online-Tools verlangen zuerst einen Upload Ihrer Bilder auf fremde Server. PhotoResizer AI funktioniert anders: Als kostenloser KI Bildeditor und Foto Resizer online läuft jede Bearbeitung zu 100% lokal in Ihrem Browser über HTML5 Canvas & WebGL.",
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "de" }];
}

export async function generateMetadata({ params }: LocaleHomeProps): Promise<Metadata> {
  const { locale } = await params;
  return constructHomeMetadata(locale);
}

export default async function LocaleHomePage({ params }: LocaleHomeProps) {
  const { locale } = await params;
  const validLocale = (LOCALES[locale as Locale] ? locale : "en") as Locale;
  const i18n = HERO_I18N[validLocale] || HERO_I18N.en;
  const pages = await getAllToolPagesForLocale(validLocale);

  const websiteSchema = generateWebSiteSchema(BASE_URL, validLocale);
  const organizationSchema = generateOrganizationSchema(BASE_URL);
  const appSchema = generateHomeSoftwareApplicationSchema(BASE_URL, validLocale);
  const faqSchema = generateHomeFaqSchema(i18n.homeFaqs);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-body selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
      {/* Inject Comprehensive Structured Data Schemas */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={appSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Global Navigation */}
      <AppleNav currentLocale={validLocale} />

      {/* Hero Section */}
      <section className="relative w-full bg-[#272729] text-white pt-[88px] pb-[64px] md:pt-[112px] md:pb-[88px] px-6 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full opacity-[0.22] blur-[130px]"
          style={{ background: "radial-gradient(circle, #2997ff 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-[880px] mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-caption text-[13px] text-[#2997ff] uppercase tracking-wider mb-5 bg-white/[0.06] border border-white/10 rounded-full py-1.5 px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
            {i18n.badge}
          </span>

          <h1 className="font-hero-display text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.28px] leading-[1.08] mb-5 text-white">
            {i18n.headline}
          </h1>

          <p className="font-lead text-[18px] md:text-[22px] font-normal tracking-[0.196px] text-white/70 max-w-[720px] mb-9 leading-[1.4]">
            {i18n.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="#editor-container"
              className="btn-apple-primary bg-[#2997ff] text-white hover:bg-[#0071e3] transition-colors text-[17px] py-3.5 px-8 rounded-full font-medium"
            >
              Launch Live Studio
            </a>
            <a
              href="#seo-articles"
              className="inline-flex items-center gap-1.5 text-[17px] text-white/80 hover:text-white transition-colors py-3.5 px-2 font-medium"
            >
              {i18n.secondaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {i18n.trustPills.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[13px] text-white/70 bg-[rgba(210,210,215,0.12)] border border-white/10 rounded-full py-1.5 px-3.5"
              >
                <Check className="w-3.5 h-3.5 text-[#2997ff]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Live Interactive Editor Window */}
        <div id="editor-container" className="relative z-10 mt-16 w-full max-w-[1000px] mx-auto">
          <div className="rounded-[18px] product-shadow overflow-hidden bg-[#1d1d1f] border border-white/10">
            <ImageEditor preset="full" locale={validLocale} />
          </div>
        </div>
      </section>

      {/* E-E-A-T Trust & Security Metrics Section */}
      <section className="w-full py-16 px-6 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-[18px] bg-[#fafafc] border border-[#e0e0e0]/60">
              <Users className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
              <div className="font-display-lg text-[28px] md:text-[32px] font-bold text-[#1d1d1f]">10M+</div>
              <div className="font-fine-print text-[13px] text-[#7a7a7a] font-medium">Images Processed</div>
            </div>
            <div className="p-6 rounded-[18px] bg-[#fafafc] border border-[#e0e0e0]/60">
              <ShieldCheck className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
              <div className="font-display-lg text-[28px] md:text-[32px] font-bold text-[#1d1d1f]">100%</div>
              <div className="font-fine-print text-[13px] text-[#7a7a7a] font-medium">Browser RAM Privacy</div>
            </div>
            <div className="p-6 rounded-[18px] bg-[#fafafc] border border-[#e0e0e0]/60">
              <Star className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
              <div className="font-display-lg text-[28px] md:text-[32px] font-bold text-[#1d1d1f]">4.9 / 5.0</div>
              <div className="font-fine-print text-[13px] text-[#7a7a7a] font-medium">1,280+ Verified Reviews</div>
            </div>
            <div className="p-6 rounded-[18px] bg-[#fafafc] border border-[#e0e0e0]/60">
              <Zap className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
              <div className="font-display-lg text-[28px] md:text-[32px] font-bold text-[#1d1d1f]">0 Bytes</div>
              <div className="font-fine-print text-[13px] text-[#7a7a7a] font-medium">Server Data Storage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="w-full py-[80px] md:py-[100px] px-6 bg-[#f5f5f7]">
        <div className="max-w-[1024px] mx-auto">
          <div className="mb-14 text-center">
            <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold uppercase tracking-wider block mb-2">
              {i18n.toolsHeadline}
            </span>
            <h2 className="font-display-lg text-[34px] md:text-[40px] font-semibold text-[#1d1d1f] leading-[1.1]">
              {i18n.toolsSubtext}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/${validLocale}/${page.slug}`}
                className="bg-white border border-[#e0e0e0]/60 rounded-[18px] p-6 flex flex-col justify-between apple-active-scale group transition-colors"
                title={page.frontmatter.title}
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-caption text-[12px] text-[#7a7a7a] block mb-1 uppercase tracking-wide">
                    {page.frontmatter.toolCategory}
                  </span>
                  <h3 className="font-body-strong text-[18px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors mb-2">
                    {page.frontmatter.title}
                  </h3>
                  <p className="font-caption text-[14px] text-[#7a7a7a] line-clamp-2 leading-[1.43]">
                    {page.frontmatter.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-[#0066cc] font-body text-[17px]">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="w-full py-[80px] md:py-[100px] px-6 bg-white">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-14">
            <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold uppercase tracking-wider block mb-2">
              Architectural Pillars
            </span>
            <h2 className="font-display-lg text-[34px] md:text-[40px] font-semibold text-[#1d1d1f] leading-[1.1]">
              {i18n.featuresHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fafafc] border border-[#e0e0e0]/60 rounded-[18px] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-body-strong text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  Zero Server Uploads
                </h3>
                <p className="font-body text-[17px] text-[#7a7a7a] leading-[1.47]">
                  All image editing operations execute 100% locally in your web browser RAM using HTML5 Canvas.
                </p>
              </div>
            </div>

            <div className="bg-[#fafafc] border border-[#e0e0e0]/60 rounded-[18px] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-body-strong text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  Lossless Canvas Export
                </h3>
                <p className="font-body text-[17px] text-[#7a7a7a] leading-[1.47]">
                  Export high-resolution PNG, WebP, and JPG files with zero compression artifacts or watermarks.
                </p>
              </div>
            </div>

            <div className="bg-[#fafafc] border border-[#e0e0e0]/60 rounded-[18px] p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[14px] bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-body-strong text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  Biometric Precision
                </h3>
                <p className="font-body text-[17px] text-[#7a7a7a] leading-[1.47]">
                  Integrated alignment guidelines for US 2x2", Schengen 35x45mm, and Brazil RG passport requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section */}
      <section id="seo-articles" className="w-full py-[80px] md:py-[100px] px-6 bg-[#f5f5f7]">
        <article className="max-w-[840px] mx-auto">
          <h2 className="font-display-lg text-[30px] md:text-[38px] text-center text-[#1d1d1f] font-semibold mb-12 tracking-tight leading-[1.15]">
            {i18n.seoArticleHeadline}
          </h2>

          <div className="space-y-8">
            {i18n.seoArticles.map((article, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-[18px] border border-[#e0e0e0]/60">
                <h3 className="font-body-strong text-[21px] md:text-[24px] mb-4 text-[#1d1d1f] tracking-tight">
                  {article.title}
                </h3>
                <div className="space-y-4">
                  {article.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="font-body text-[17px] text-[#333333] leading-[1.47]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Homepage FAQ Section with FAQPage Schema */}
      <ToolFaq faq={i18n.homeFaqs} />

      {/* Privacy Quote Section */}
      <section className="w-full py-[80px] md:py-[100px] px-6 bg-[#272729] text-white flex flex-col items-center text-center">
        <div className="max-w-[840px] flex flex-col items-center">
          <span className="font-caption text-[14px] text-[#2997ff] font-semibold uppercase tracking-wider mb-4 inline-block">
            {i18n.privacyBadge}
          </span>

          <h2 className="font-display-lg text-[32px] md:text-[40px] font-semibold leading-[1.1] mb-6 text-white tracking-tight">
            {i18n.privacyQuote}
          </h2>
          <p className="font-lead-airy text-[22px] md:text-[24px] font-light text-white/80 max-w-[680px] mb-10 leading-[1.5]">
            {i18n.privacySubtext}
          </p>

          <a href="#editor-container" className="btn-apple-primary bg-[#2997ff] text-white hover:bg-[#0071e3] font-body text-[17px] py-3.5 px-8">
            {i18n.privacyCta}
          </a>
        </div>
      </section>

      {/* Localized Footer */}
      <AppleFooter locale={validLocale} />
    </div>
  );
}