import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllToolPagesForLocale } from "@/lib/markdown/getContent";
import { AppleNav } from "@/components/AppleNav";
import { AppleFooter } from "@/components/AppleFooter";
import { ImageEditor } from "@/components/editor/ImageEditor";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructHomeMetadata } from "@/lib/seo/generateMetadata";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/seo/schemas";
import { LOCALES, Locale } from "@/lib/types/i18n";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Lock } from "lucide-react";

interface LocaleHomeProps {
  params: Promise<{
    locale: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

// Expanded dictionary with long-form SEO articles injected directly into the page architecture.
const HERO_I18N: Record<
  string,
  {
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
    seoArticleHeadline: string;
    seoArticles: Array<{ title: string; content: string[] }>;
  }
> = {
  en: {
    badge: "AI Powered Web Studio",
    headline: "Pro Image Studio. Hello, AI Intelligence.",
    tagline: "Crop, resize, compress, and craft biometric photos with 100% browser-based privacy. Zero server uploads.",
    toolsHeadline: "The Image Suite.",
    toolsSubtext: "Explore powerful, single-purpose image editing tools built for speed and precision.",
    privacyBadge: "100% Client-Side Privacy",
    privacyQuote: "“Your images belong to you. Every pixel is processed right inside your browser memory with zero server uploads.”",
    privacySubtext: "Built with modern WebGL and HTML5 Canvas APIs, ensuring absolute privacy for personal, business, and biometric document photos.",
    privacyCta: "Learn About Security",
    featuresHeadline: "Engineered like an artifact.",
    seoArticleHeadline: "Everything you need to know about secure online image editing",
    seoArticles: [
      {
        title: "Why Client-Side Image Processing is the Future of Privacy",
        content: [
          "When you search for an online image resizer, photo cropper, or image compressor, most websites require you to upload your personal files to their remote servers. This poses a significant privacy risk, especially when dealing with sensitive biometric photos for passports, visas, or IDs.",
          "Our AI-powered platform changes the paradigm by utilizing advanced HTML5 Canvas and WebGL APIs. This means your photos never leave your device. The cropping, resizing, and AI enhancement happen entirely within your local browser memory (RAM). Once you close the tab, the data is completely gone. Zero uploads, zero server logs, and zero risk of your private photos being leaked or used to train external AI models."
        ]
      },
      {
        title: "Create Perfect Biometric Passport Photos Online",
        content: [
          "Navigating the strict requirements for government documents can be stressful. Whether you need a US 2x2 inch passport photo, a Schengen 35x45mm visa photo, or a specific resolution for a corporate ID, precision is mandatory. Our built-in biometric alignment guidelines help you position the face, eyes, and chin perfectly within official government specifications.",
          "Because the editor provides lossless exports, you won't suffer from compression artifacts that often cause official passport photo applications to be rejected. You can easily adjust the DPI and pixel dimensions to ensure your printed or digital photos meet the exact criteria of any global embassy or official institution."
        ]
      },
      {
        title: "Lightning-Fast Image Compression and Format Conversion",
        content: [
          "Website owners and digital creators constantly need to optimize images for faster loading times and better SEO. Heavy PNG and JPG files can slow down your site. Our suite includes advanced, lossless, and lossy image compression tools that drastically reduce file sizes without sacrificing visual fidelity.",
          "Convert your traditional JPEGs into next-generation WebP formats instantly. Because it leverages your device's CPU/GPU rather than waiting in a server queue, the conversion is practically instantaneous. Whether you are resizing a batch of product photos for an e-commerce store or formatting a hero image for a blog, the streamlined interface guarantees a friction-free workflow."
        ]
      }
    ]
  },
  pt: {
    badge: "Estúdio Web com IA",
    headline: "Estúdio de Imagem Pro. Inteligência e Privacidade.",
    tagline: "Corte, redimensione, compacte e crie fotos biométricas com 100% de privacidade no seu navegador.",
    toolsHeadline: "A Suíte de Imagem.",
    toolsSubtext: "Explore ferramentas poderosas criadas para velocidade e máxima precisão visual.",
    privacyBadge: "100% Privacidade no Cliente",
    privacyQuote: "“Suas imagens pertencem a você. Cada pixel é processado na memória do seu navegador com zero uploads.”",
    privacySubtext: "Desenvolvido com APIs modernas de HTML5 Canvas e WebGL, garantindo privacidade total para documentos e fotos pessoais.",
    privacyCta: "Saiba Mais Sobre Segurança",
    featuresHeadline: "Projetado com excelência.",
    seoArticleHeadline: "Tudo o que você precisa saber sobre edição segura de imagens online",
    seoArticles: [
      {
        title: "Por que o Processamento Local é o Futuro da Privacidade",
        content: [
          "Quando você procura um redimensionador de imagens online, cortador de fotos ou compressor, a maioria dos sites exige que você faça o upload de seus arquivos para servidores remotos. Isso representa um risco de privacidade significativo, especialmente ao lidar com fotos biométricas sensíveis para passaportes, vistos ou RG.",
          "Nossa plataforma alimentada por IA muda esse paradigma utilizando APIs avançadas de HTML5 Canvas e WebGL. Isso significa que suas fotos nunca saem do seu dispositivo. O corte, o redimensionamento e as melhorias acontecem inteiramente na memória local do seu navegador. Zero uploads, zero logs de servidor e risco zero de vazamento."
        ]
      },
      {
        title: "Crie Fotos Biométricas Perfeitas para Passaporte e RG",
        content: [
          "Lidar com os requisitos rígidos para documentos governamentais pode ser difícil. Quer você precise de uma foto 3x4 padrão brasileiro, foto para visto americano 5x5 cm ou foto Schengen 35x45mm, a precisão é obrigatória. Nossas diretrizes de alinhamento biométrico integradas ajudam a posicionar o rosto, os olhos e o queixo perfeitamente.",
          "Como o editor oferece exportações sem perdas, você não sofrerá com artefatos de compressão que frequentemente causam a rejeição de fotos oficiais. Ajuste facilmente o DPI e as dimensões de pixels para garantir que suas fotos digitais ou impressas atendam aos critérios exatos das instituições oficiais."
        ]
      },
      {
        title: "Compressão de Imagem Ultrarrápida e Conversão de Formato",
        content: [
          "Criadores digitais precisam otimizar imagens para tempos de carregamento mais rápidos e melhor SEO. Nossa suíte inclui ferramentas de compressão de imagem avançadas que reduzem drasticamente o tamanho dos arquivos sem sacrificar a qualidade visual.",
          "Converta JPEGs tradicionais em formatos WebP de última geração instantaneamente. Como a ferramenta utiliza a CPU/GPU do seu próprio dispositivo, a conversão é instantânea. Seja para redimensionar fotos de produtos para e-commerce ou formatar imagens para um blog, nosso editor garante um fluxo de trabalho perfeito."
        ]
      }
    ]
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
    seoArticleHeadline: "Alles, was Sie über sichere Online-Bildbearbeitung wissen müssen",
    seoArticles: [
      {
        title: "Warum clientseitige Bildverarbeitung die Zukunft des Datenschutzes ist",
        content: [
          "Wenn Sie nach einem Online-Bildverkleinerer, Foto-Cropper oder Bildkompressor suchen, verlangen die meisten Websites, dass Sie Ihre Dateien auf deren Server hochladen. Dies stellt ein erhebliches Datenschutzrisiko dar, insbesondere bei sensiblen biometrischen Fotos für Pässe und Visa.",
          "Unsere KI-gestützte Plattform ändert dies durch den Einsatz fortschrittlicher HTML5 Canvas- und WebGL-APIs. Das bedeutet, dass Ihre Fotos Ihr Gerät niemals verlassen. Das Zuschneiden, Ändern der Größe und die KI-Verbesserung erfolgen vollständig in Ihrem lokalen Browserspeicher (RAM). Keine Uploads, keine Serverprotokolle und absolut DSGVO-konform."
        ]
      },
      {
        title: "Erstellen Sie perfekte biometrische Passbilder online",
        content: [
          "Die strengen Anforderungen an Regierungsdokumente können stressig sein. Egal, ob Sie ein biometrisches Passbild (35x45 mm) für Deutschland, ein US-Visum-Foto (2x2 Zoll) oder ein Unternehmens-ID-Foto benötigen, Präzision ist Pflicht. Unsere integrierten biometrischen Ausrichtungslinien helfen Ihnen, das Gesicht perfekt zu positionieren.",
          "Da der Editor verlustfreie Exporte bietet, leiden Sie nicht unter Kompressionsartefakten. Sie können die DPI und Pixelabmessungen einfach anpassen, um sicherzustellen, dass Ihre gedruckten oder digitalen Fotos den genauen Kriterien der Ämter entsprechen."
        ]
      },
      {
        title: "Blitzschnelle Bildkomprimierung und Formatkonvertierung",
        content: [
          "Website-Betreiber müssen Bilder ständig für schnellere Ladezeiten und besseres SEO optimieren. Unsere Suite enthält fortschrittliche Werkzeuge zur verlustfreien und verlustbehafteten Bildkomprimierung, die Dateigrößen drastisch reduzieren, ohne die visuelle Qualität zu beeinträchtigen.",
          "Konvertieren Sie herkömmliche JPEGs sofort in WebP-Formate der nächsten Generation. Da das Tool die CPU/GPU Ihres Geräts nutzt, erfolgt die Konvertierung praktisch verzögerungsfrei. Ob E-Commerce-Produktfotos oder Blog-Bilder – diese Tools optimieren Ihren Workflow."
        ]
      }
    ]
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

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-body selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
      {/* Inject Structured Data Schemas */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />

      {/* Apple Global Header */}
      <AppleNav currentLocale={validLocale} />

      {/* Hero Section */}
      <section className="w-full bg-[#272729] text-white py-[64px] md:py-[80px] px-6 text-center overflow-hidden min-h-[640px] flex flex-col items-center justify-between">
        <div className="max-w-[840px] mx-auto z-10 flex flex-col items-center">
          <span className="font-caption text-[14px] text-[#2997ff] font-semibold uppercase tracking-wider mb-2 inline-block bg-[#2997ff]/10 px-3.5 py-1 rounded-full border border-[#2997ff]/20">
            {i18n.badge}
          </span>
          <h1 className="font-hero-display text-[40px] sm:text-[52px] md:text-[64px] font-semibold tracking-[-0.28px] leading-[1.05] mb-4 text-white">
            {i18n.headline}
          </h1>
          <p className="font-lead text-[21px] md:text-[26px] font-normal tracking-[0.196px] text-white/80 max-w-[680px] mb-8 leading-[1.35]">
            {i18n.tagline}
          </p>

          <div className="flex items-center gap-4">
            <a href="#editor-container" className="btn-apple-primary text-[17px] py-3 px-8">
              Launch Live Studio
            </a>
          </div>
        </div>

        {/* Live Interactive Editor */}
        <div id="editor-container" className="mt-12 w-full max-w-[1024px] mx-auto">
          <ImageEditor preset="full" locale={validLocale} />
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="w-full py-20 px-6 bg-[#f5f5f7]">
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
                title={page.frontmatter.title}
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

      {/* Feature Highlights Section */}
      <section className="w-full py-20 px-6 bg-white">
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

      {/* Comprehensive SEO Content Section (Rich Text) */}
      <section className="w-full py-20 px-6 bg-[#f5f5f7] border-t border-[#e0e0e0]">
        <article className="max-w-[840px] mx-auto prose prose-lg prose-headings:font-semibold prose-headings:text-[#1d1d1f] prose-p:text-[#424245] prose-p:leading-relaxed">
          <h2 className="text-[32px] md:text-[40px] font-display-lg mb-10 text-center tracking-tight">
            {i18n.seoArticleHeadline}
          </h2>
          
          <div className="space-y-12">
            {i18n.seoArticles.map((article, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm border border-[#e0e0e0]">
                <h3 className="text-[22px] md:text-[26px] mb-4 text-[#1d1d1f] tracking-tight font-body-strong">
                  {article.title}
                </h3>
                <div className="space-y-4">
                  {article.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[17px] text-[#424245] leading-[1.6]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Privacy Quote Card */}
      <section className="w-full py-24 px-6 bg-[#272729] text-white flex flex-col items-center text-center">
        <div className="max-w-[840px] flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2997ff] inline-block shadow-[0_0_8px_rgba(41,151,255,0.6)]" />
            <span className="font-caption text-[14px] text-white font-medium">
              {i18n.privacyBadge}
            </span>
          </div>

          <h2 className="font-display-lg text-[32px] md:text-[44px] font-semibold leading-[1.12] mb-6 tracking-tight">
            {i18n.privacyQuote}
          </h2>
          <p className="font-lead-airy text-[22px] font-light text-white/80 max-w-[680px] mb-10">
            {i18n.privacySubtext}
          </p>

          <a href="#editor-container" className="btn-apple-primary font-body text-[17px] py-3.5 px-8 transition-transform hover:scale-105">
            {i18n.privacyCta}
          </a>
        </div>
      </section>

      {/* Localized Apple Footer */}
      <AppleFooter locale={validLocale} />
    </div>
  );
}