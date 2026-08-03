import { Metadata } from "next";
import { ToolPageData } from "../types/markdown";
import { getAlternateSlugs } from "../i18n/slugMap";
import { Locale } from "../types/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

export function constructToolMetadata(pageData: ToolPageData): Metadata {
  const { frontmatter, locale, slug } = pageData;
  const canonicalUrl = `${BASE_URL}/${locale}/${slug}`;

  // Get equivalent slugs for alternate languages
  const alternateSlugs = getAlternateSlugs(locale as Locale, slug);

  const languages: Record<string, string> = {
    en: `${BASE_URL}/en/${alternateSlugs.en}`,
    pt: `${BASE_URL}/pt/${alternateSlugs.pt}`,
    de: `${BASE_URL}/de/${alternateSlugs.de}`,
    "x-default": `${BASE_URL}/en/${alternateSlugs.en}`,
  };

  return {
    title: frontmatter.seoTitle || frontmatter.title,
    description: frontmatter.seoDescription || frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: languages,
    },
    openGraph: {
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.description,
      url: canonicalUrl,
      siteName: "photoresizerai.com",
      locale: locale === "pt" ? "pt_BR" : locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.description,
    },
  };
}
