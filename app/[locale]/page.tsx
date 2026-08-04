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
import { ArrowRight, ShieldCheck, Zap, Sparkles, Lock, Check } from "lucide-react";

interface LocaleHomeProps {
  params: Promise<{
    locale: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

// Expanded dictionary with long-form, keyword-targeted SEO articles injected directly into the page architecture.
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
    seoArticles: Array<{ title: string; content: string[] }>;
  }
> = {
  en: {
    badge: "AI Powered Web Studio",
    headline: "The Photo & Image Resizer That Never Uploads Your Files",
    tagline:
      "Resize image online, compress photo size, and reduce image size instantly — plus a dedicated passport photo resizer — all inside your browser. No uploads, ever.",
    trustPills: ["No uploads, ever", "No account needed", "Free, unlimited exports"],
    secondaryCta: "See how it works",
    editorLabel: "Local session — nothing leaves this tab",
    toolsHeadline: "The Image Suite.",
    toolsSubtext:
      "From a free photo resizer and image size converter to a bulk image resizer and passport photo editor, each tool does one job well.",
    privacyBadge: "100% Client-Side Privacy",
    privacyQuote: "“Your images belong to you. Every pixel is processed right inside your browser memory with zero server uploads.”",
    privacySubtext: "Built with modern WebGL and HTML5 Canvas APIs, ensuring absolute privacy for personal, business, and biometric document photos.",
    privacyCta: "Learn About Security",
    featuresHeadline: "Built for speed, precision, and privacy.",
    seoArticleHeadline: "Everything You Need to Know About Resizing, Compressing, and Enlarging Photos Online",
    seoArticles: [
      {
        title: "Why a Browser-Based Photo Resizer Is Safer Than Any Upload",
        content: [
          "Most online photo resizer tools ask you to hand over your files before they'll do anything. You upload a photo, it disappears onto someone else's server, and you're left hoping it gets deleted afterward. For a casual snapshot, that might not matter much. For a passport photo, a government ID, or a scan of a legal document, it matters a great deal.",
          "Photo Resizer AI works differently. This image resizer runs every crop, resize, and compression step inside your own browser, using the HTML5 Canvas and WebGL engines already built into Chrome, Safari, Firefox, and Edge. Your image is decoded into your device's memory, edited there, and encoded back into a file you download directly — it never touches a server, a database, or a processing queue. Close the tab, and the working copy is gone.",
          "There's no private mode to remember to switch on and no upload step to skip past. The architecture itself rules out server-side storage, because the code doing the editing runs on your machine, not ours. If you're handling a child's ID photo, a biometric visa application, or any image you'd rather not see swept up in a data breach, that distinction is the whole point — and it's what makes this a genuinely free image resizer, not a free trial with a catch.",
        ],
      },
      {
        title: "Passport Photo Resizer: Meet Every Country's Requirements",
        content: [
          "A passport photo resizer only earns its name when it gets the numbers exactly right, and every country's passport office measures photos differently. A US passport photo needs to be exactly 2x2 inches with the head sized within a specific range. A Schengen visa photo follows the 35x45mm standard used across the EU. Submit a photo that's a few millimeters off, or with a shadow behind the head, and the application can bounce back weeks later.",
          "Our passport photo editor builds these specifications directly into the cropping tool instead of leaving you to measure by eye. Pick a document type, and the canvas locks to the correct aspect ratio, with alignment guides for eye height, chin position, and head width drawn from official guidelines. You position the photo, the tool checks it against the spec, and you export a file sized to the exact pixel dimensions and DPI the application requires.",
          "Because everything exports as a lossless file, you avoid the compression artifacts that are one of the most common reasons government photo uploads get rejected. Print the result at a photo kiosk, or upload it directly to an online visa portal — either way, it matches the file the office is expecting.",
        ],
      },
      {
        title: "Resize, Compress, and Convert Images Without Losing Quality",
        content: [
          "A slow website loses visitors before they even see it, and oversized images are usually the reason why. A single uncompressed product photo can weigh several megabytes — more than an entire page should cost to load. Our compression tools reduce image size and compress photo size by a wide margin while keeping files visually indistinguishable from the original, so you can resize image without losing quality and still cut the file down to a fraction of its starting weight.",
          "Format conversion works as a built-in image size converter alongside compression. Convert a batch of files to WebP, the format most modern browsers now prefer, or resize jpg and resize png files to a specific target — say, reducing a photo to under 200KB for an upload limit — in a couple of clicks. Because the conversion runs on your own device, there's no waiting in a shared queue.",
          "Resizing follows the same logic. Change image size to exact pixel dimensions for a specific placement — a square post sized to resize image for instagram without cropping the shot, a 1200x630px social share image, or a 16:9 thumbnail. Need to process a folder at once? The bulk image resizer applies the same settings across every file, so a batch of listing photos finishes in seconds instead of one edit at a time.",
        ],
      },
      {
        title: "Enlarge Photos and Increase Resolution Without Losing Quality",
        content: [
          "Sometimes the problem runs the other way: a photo is too small for what you need it for. Print a low-resolution snapshot as a poster, or drop a small product shot into a large banner, and the pixelation shows immediately. Our image enlarger online fills in missing detail as it scales, instead of simply stretching the pixels you already have.",
          "The result lets you enlarge photos and increase image size while preserving edges, text, and fine texture — a genuine way to enlarge image without losing quality, not just a blurrier, bigger version of the original. Scale a source photo up toward 3000x3000 pixels for large-format printing, or increase photo resolution online free for a screen that simply needs more pixels to look sharp.",
        ],
      },
    ],
  },
  pt: {
    badge: "Estúdio Web com IA",
    headline: "O Redimensionador de Fotos Que Nunca Envia Seus Arquivos",
    tagline:
      "Redimensionar imagem, comprimir imagem e criar fotos biométricas — 100% no seu navegador, sem upload.",
    trustPills: ["Sem uploads", "Sem cadastro", "Exportações gratuitas e ilimitadas"],
    secondaryCta: "Veja como funciona",
    editorLabel: "Sessão local — nada sai desta aba",
    toolsHeadline: "A Suíte de Imagem.",
    toolsSubtext:
      "Do redimensionar foto ao redimensionar jpg ou png, cada ferramenta faz uma única tarefa com precisão.",
    privacyBadge: "100% Privacidade no Cliente",
    privacyQuote: "“Suas imagens pertencem a você. Cada pixel é processado na memória do seu navegador com zero uploads.”",
    privacySubtext: "Desenvolvido com APIs modernas de HTML5 Canvas e WebGL, garantindo privacidade total para documentos e fotos pessoais.",
    privacyCta: "Saiba Mais Sobre Segurança",
    featuresHeadline: "Projetado com excelência.",
    seoArticleHeadline: "Tudo sobre Redimensionar Imagem Online com Segurança",
    seoArticles: [
      {
        title: "Por que Redimensionar Foto Online no Navegador É Mais Seguro",
        content: [
          "A maioria das ferramentas de redimensionar imagem online pede que você envie o arquivo primeiro. A foto sai do seu aparelho, vai para um servidor desconhecido, e você não sabe ao certo se ela será apagada depois. Para uma foto qualquer, isso talvez não importe. Para um documento, um RG ou uma foto de passaporte, faz toda a diferença.",
          "O Photo Resizer AI redimensiona a imagem direto no seu navegador. O corte, o redimensionamento e a compressão acontecem com HTML5 Canvas e WebGL, tecnologias já presentes no Chrome, no Safari, no Firefox e no Edge. A foto é processada na memória do seu próprio aparelho e baixada direto — sem passar por nenhum servidor.",
          "Isso também deixa tudo mais rápido. Sem upload e sem fila de processamento, o resultado aparece na hora, usando o processador do seu próprio dispositivo.",
        ],
      },
      {
        title: "Redimensionador de Fotos para Passaporte e Documentos, Sem Erros",
        content: [
          "Cada país exige medidas diferentes para fotos de documentos, e um erro de poucos milímetros pode causar rejeição. Uma foto de passaporte dos EUA precisa ter exatamente 2x2 polegadas. Um visto Schengen exige 35x45mm. Cada aplicação oficial segue sua própria régua.",
          "Nosso editor aplica essas medidas automaticamente. Escolha o tipo de documento, e a área de corte já ajusta a proporção certa, com guias de altura dos olhos, do queixo e da largura do rosto. Você posiciona a foto, o sistema confere as medidas, e você exporta no tamanho exato de pixels e DPI exigido.",
          "Como a exportação é sem perdas, você evita os artefatos de compressão que costumam causar a rejeição de fotos oficiais. Assim, seja para imprimir ou enviar num portal online, o arquivo final atende exatamente ao que o órgão pede.",
        ],
      },
      {
        title: "Comprimir Imagem, Diminuir o Tamanho da Foto e Converter Formatos",
        content: [
          "Redimensionar foto, comprimir imagem ou diminuir o tamanho da foto — cada ferramenta cuida de uma única tarefa, sem enrolação. Uma foto de produto sem compressão pode pesar vários megabytes e deixar o site lento. Nossa compressão reduz o tamanho de arquivos JPG e PNG sem perda visível de qualidade.",
          "A conversão de formato também está incluída: transforme JPEGs em WebP, o formato preferido pelos navegadores modernos, em poucos cliques. Como o processamento roda no seu próprio aparelho, a conversão é praticamente instantânea — sem fila de espera.",
          "Seja para redimensionar jpg, redimensionar png ou preparar fotos para uma loja online, o fluxo é sempre o mesmo: solte a imagem, ajuste o tamanho, baixe o resultado. Sem conta, sem marca d'água e sem limite de uso.",
        ],
      },
    ],
  },
  de: {
    badge: "KI-Webstudio",
    headline: "Bild verkleinern, ohne es je hochzuladen",
    tagline:
      "Bildgröße ändern, Bild skalieren, Bild komprimieren und Foto skalieren für Passfotos — 100% privat im Browser, ganz ohne Upload.",
    trustPills: ["Keine Uploads", "Kein Konto nötig", "Kostenlos, unbegrenzt exportieren"],
    secondaryCta: "So funktioniert's",
    editorLabel: "Lokale Sitzung — nichts verlässt diesen Tab",
    toolsHeadline: "Die Bildbearbeitungs-Suite.",
    toolsSubtext:
      "Vom Bild verkleinern bis zum Foto verkleinern für Social Media — jedes Werkzeug erledigt genau eine Aufgabe.",
    privacyBadge: "100% Client-Side Datenschutz",
    privacyQuote: "„Ihre Bilder gehören Ihnen. Jeder Pixel wird direkt in Ihrem Browser verarbeitet – ohne Server-Uploads.“",
    privacySubtext: "Erstellt mit modernen HTML5 Canvas & WebGL Technologien für absoluten Schutz Ihrer persönlichen Fotos.",
    privacyCta: "Mehr Über Sicherheit Erfahren",
    featuresHeadline: "Präzise entwickelt.",
    seoArticleHeadline: "Alles, was Sie über Bildgröße Ändern, Komprimieren und Skalieren Wissen Müssen",
    seoArticles: [
      {
        title: "Warum ein Bildverkleinerer im Browser Sicherer Ist als Jeder Upload",
        content: [
          "Die meisten Online-Tools zum Bild verkleinern verlangen zuerst einen Upload. Ihr Foto verlässt Ihr Gerät, landet auf einem fremden Server, und Sie wissen nicht sicher, ob es dort wirklich gelöscht wird. Bei einem Urlaubsfoto mag das egal sein. Bei einem Passfoto, einem Ausweisdokument oder einer sensiblen Datei ist das ein echtes Risiko.",
          "Photo Resizer AI verkleinert Bilder direkt in Ihrem Browser. Zuschneiden, Bildgröße ändern und Komprimieren laufen vollständig über HTML5 Canvas und WebGL – Technologien, die bereits in Chrome, Safari, Firefox und Edge eingebaut sind. Ihr Foto wird lokal im Arbeitsspeicher Ihres Geräts bearbeitet und direkt heruntergeladen. Kein Server, keine Datenbank und keine Warteschlange bekommt Ihre Daten je zu sehen.",
          "Das macht die Verarbeitung nicht nur privater, sondern auch schneller. Ohne Upload und ohne Wartezeit auf einen fremden Server nutzt Ihr eigenes Gerät seine volle Rechenleistung — Bild verkleinern, komprimieren oder skalieren geschieht praktisch in Echtzeit.",
        ],
      },
      {
        title: "Passfoto Größe Ändern: So Erfüllen Sie Jede Anforderung",
        content: [
          "Jedes Land misst Passfotos anders, und die Toleranz ist gering. Ein deutsches biometrisches Passfoto muss 35x45mm groß sein, mit exakt definierter Kopfhöhe. Ein Foto für ein US-Visum braucht 2x2 Zoll bei 600x600 Pixel. Schon wenige Millimeter Abweichung oder ein Schatten im Hintergrund können zur Ablehnung führen.",
          "Wenn Sie die Passfoto Größe ändern, übernimmt unser Editor die Vorgaben automatisch. Wählen Sie den Dokumenttyp, und die Arbeitsfläche stellt sich auf das richtige Seitenverhältnis ein — inklusive Ausrichtungslinien für Augenhöhe, Kinn und Kopfbreite nach offiziellen Vorgaben. Sie positionieren das Foto, das Tool prüft die Maße, und Sie exportieren die Datei in exakter Pixelgröße und DPI.",
          "Da der Export verlustfrei erfolgt, vermeiden Sie Kompressionsartefakte, die häufig zur Ablehnung amtlicher Fotos führen. Ob Sie das Ergebnis zu Hause ausdrucken oder online hochladen — es entspricht exakt den Vorgaben der jeweiligen Behörde.",
        ],
      },
      {
        title: "Bildgröße Ändern, Bild Skalieren und JPG oder PNG Größe Ändern in Sekunden",
        content: [
          "Ob Sie die Bildgröße ändern, ein Bild skalieren oder eine Datei komprimieren möchten — jedes Werkzeug erledigt genau eine Aufgabe, ohne Umwege. Ein unkomprimiertes Produktfoto kann mehrere Megabyte wiegen und Ihre Website spürbar verlangsamen. Unsere Kompression reduziert die Dateigröße von JPG und PNG deutlich, ohne dass ein sichtbarer Qualitätsverlust entsteht.",
          "Auch die Formatumwandlung ist eingebaut: Wandeln Sie JPG in das schlankere WebP-Format um, oder ändern Sie gezielt die JPG Größe oder die PNG Größe für eine bestimmte Auflösung. Weil die Berechnung direkt auf Ihrem Gerät läuft, ist die Umwandlung praktisch verzögerungsfrei — kein Warten in einer Server-Warteschlange.",
          "Zum Ausdrucken, für Social Media oder für den Online-Shop lässt sich die Bildgröße online ändern, ohne dass sich das Seitenverhältnis verzerrt. Ziehen Sie das Bild einfach in den Editor, passen Sie die Maße an, und laden Sie das Ergebnis herunter — ganz ohne Konto, ganz ohne Limit.",
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

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-body selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
      {/* Inject Structured Data Schemas */}
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />

      {/* Apple Global Header */}
      <AppleNav currentLocale={validLocale} />

      {/* Hero Section (Tile 1: Dark Canvas #272729) */}
      <section className="relative w-full bg-[#272729] text-white pt-[88px] pb-[64px] md:pt-[112px] md:pb-[88px] px-6 overflow-hidden">
        {/* Ambient grid, quiet by default — reads as a studio backdrop, not a decoration */}
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

        <div className="relative z-10 max-w-[840px] mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-caption text-[13px] text-[#2997ff] uppercase tracking-wider mb-5 bg-white/[0.06] border border-white/10 rounded-full py-1.5 px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
            {i18n.badge}
          </span>

          <h1 className="font-hero-display text-[38px] sm:text-[52px] md:text-[60px] font-semibold tracking-[-0.28px] leading-[1.08] mb-5 text-white">
            {i18n.headline}
          </h1>

          <p className="font-lead text-[19px] md:text-[23px] font-normal tracking-[0.196px] text-white/70 max-w-[640px] mb-9 leading-[1.4]">
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

        {/* Live Interactive Editor, framed as a native app window — the signature moment of the page */}
        <div id="editor-container" className="relative z-10 mt-16 w-full max-w-[1000px] mx-auto">
          <div className="rounded-[18px] product-shadow overflow-hidden bg-[#1d1d1f] border border-white/10">
           
        
              <div className="flex-1 flex items-center justify-center gap-1.5 text-[12px] text-white/50 font-caption">
              
              
            </div>
            <ImageEditor preset="full" locale={validLocale} />
          </div>
        </div>
      </section>

      {/* Tools Grid Section (Tile 2: Parchment Canvas #f5f5f7) */}
      <section className="w-full py-[80px] md:py-[100px] px-6 bg-[#f5f5f7]">
        <div className="max-w-[1024px] mx-auto">
          <div className="mb-14 text-center">
            <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold uppercase tracking-wider block mb-2">
              {i18n.toolsHeadline}
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[40px] font-semibold text-[#1d1d1f] leading-[1.1]">
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

      {/* Feature Highlights Section (Tile 3: Light Canvas #ffffff) */}
      <section className="w-full py-[80px] md:py-[100px] px-6 bg-white">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-14">
            <span className="font-caption text-[14px] text-[#7a7a7a] font-semibold uppercase tracking-wider block mb-2">
              Architectural Pillars
            </span>
            <h2 className="font-display-lg text-[36px] md:text-[40px] font-semibold text-[#1d1d1f] leading-[1.1]">
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
                <p className="font-body text-[17px] text-[#7a7a7a] leading-[1.47] tracking-[-0.374px]">
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
                <p className="font-body text-[17px] text-[#7a7a7a] leading-[1.47] tracking-[-0.374px]">
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
                <p className="font-body text-[17px] text-[#7a7a7a] leading-[1.47] tracking-[-0.374px]">
                  Integrated alignment guidelines for US 2x2", Schengen 35x45mm, and Brazil RG passport requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section (Tile 4: Parchment Canvas #f5f5f7) */}
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
                    <p key={pIndex} className="font-body text-[17px] text-[#333333] leading-[1.47] tracking-[-0.374px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Privacy Quote Section (Tile 5: Dark Canvas #272729) */}
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

      {/* Localized Apple Footer */}
      <AppleFooter locale={validLocale} />
    </div>
  );
}