import { Metadata } from "next";
import { ToolPageData } from "../types/markdown";
import { getAlternateSlugs } from "../i18n/slugMap";
import { Locale, LOCALES } from "../types/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

const HOME_I18N_METADATA: Record<string, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "photoresizerai.com — Free Online AI Image Resizer, Cropper & Studio",
    description: "Crop, resize, compress, watermark, and generate passport photos with 100% browser-based privacy. Zero server uploads.",
    keywords: ["photo resizer ai", "free image editor", "crop image online", "compress photo", "passport photo maker"],
  },
  pt: {
    title: "photoresizerai.com — Redimensionador de Fotos IA Grátis e Estúdio",
    description: "Corte, redimensione, compacte e crie fotos biométricas com 100% de privacidade no seu navegador. Zero uploads.",
    keywords: ["redimensionar foto ia", "cortar imagem online", "foto passaporte 3x4", "compactar foto gratis"],
  },
  de: {
    title: "photoresizerai.com — Kostenloses KI Bildstudio & Zuschneider",
    description: "Bildgröße ändern, zuschneiden, komprimieren und biometrische Passfotos erstellen mit 100% Browser-Datenschutz.",
    keywords: ["bildgroesse aendern ki", "bild zuschneiden online", "passfoto generator", "bild komprimieren"],
  },
};

/**
 * Metadata generator for Tool Pages ([locale]/[slug])
 */
export function constructToolMetadata(pageData: ToolPageData): Metadata {
  const { frontmatter, locale, slug } = pageData;
  const canonicalUrl = `${BASE_URL}/${locale}/${slug}`;
  const alternateSlugs = getAlternateSlugs(locale as Locale, slug);

  const languages: Record<string, string> = {
    en: `${BASE_URL}/en/${alternateSlugs.en}`,
    pt: `${BASE_URL}/pt/${alternateSlugs.pt}`,
    de: `${BASE_URL}/de/${alternateSlugs.de}`,
    "x-default": `${BASE_URL}/en/${alternateSlugs.en}`,
  };

  const ogImageUrl = `${BASE_URL}/og-image.png`;

  return {
    title: frontmatter.seoTitle || frontmatter.title,
    description: frontmatter.seoDescription || frontmatter.description,
    keywords: frontmatter.keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.description,
      url: canonicalUrl,
      siteName: "photoresizerai.com",
      locale: locale === "pt" ? "pt_BR" : locale === "de" ? "de_DE" : "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.description,
      images: [ogImageUrl],
    },
  };
}

/**
 * Metadata generator for Homepages ([locale])
 */
export function constructHomeMetadata(locale: string): Metadata {
  const validLocale = (LOCALES[locale as Locale] ? locale : "en") as string;
  const meta = HOME_I18N_METADATA[validLocale] || HOME_I18N_METADATA.en;
  const canonicalUrl = `${BASE_URL}/${validLocale}`;

  const languages: Record<string, string> = {
    en: `${BASE_URL}/en`,
    pt: `${BASE_URL}/pt`,
    de: `${BASE_URL}/de`,
    "x-default": `${BASE_URL}/en`,
  };

  const ogImageUrl = `${BASE_URL}/og-image.png`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "photoresizerai.com",
      locale: validLocale === "pt" ? "pt_BR" : validLocale === "de" ? "de_DE" : "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImageUrl],
    },
  };
}
