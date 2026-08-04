import { Metadata } from "next";
import { ToolPageData } from "../types/markdown";
import { getAlternateSlugs } from "../i18n/slugMap";
import { Locale, LOCALES } from "../types/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

const HOME_I18N_METADATA: Record<string, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "Free Online AI Image Editor & Photo Resizer — PhotoResizer AI",
    description: "Free online AI image editor & photo resizer. Crop, resize, compress photos, convert formats, and create passport photos with 100% browser privacy. Zero server uploads.",
    keywords: ["AI Image Editor", "Free Photo Editor", "Online Image Editor", "Resize Image Online", "Photo Resizer", "Crop Image Online", "Compress Photo", "Passport Photo Maker", "PNG to JPG"],
  },
  pt: {
    title: "Editor de Imagem IA Grátis e Redimensionador de Fotos — PhotoResizer AI",
    description: "Editor de imagem online grátis. Corte, redimensione, compacte fotos, converta formatos e crie fotos de passaporte com 100% de privacidade no navegador. Zero uploads.",
    keywords: ["Editor de Imagem IA", "Editor de Fotos Grátis", "Redimensionar Foto Online", "Cortar Imagem", "Compactar Foto", "Foto Passaporte 3x4", "PNG para JPG"],
  },
  de: {
    title: "Kostenloser KI Bildeditor & Foto Resizer Online — PhotoResizer AI",
    description: "Kostenloser Online KI-Bildeditor & Foto Resizer. Bilder zuschneiden, verkleinern, komprimieren, Formate umwandeln und Passfotos erstellen mit 100% Datenschutz.",
    keywords: ["KI Bildeditor", "Kostenloser Foto Editor", "Bildgröße ändern online", "Bild zuschneiden", "Passfoto Generator", "PNG in JPG"],
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
