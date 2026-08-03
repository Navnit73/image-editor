import { MetadataRoute } from "next";
import { TOOL_SLUG_MAP } from "@/lib/i18n/slugMap";
import { LOCALES } from "@/lib/types/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://photoresizerai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const locales = Object.keys(LOCALES);

  // 1. Add Localized Homepages (/en, /pt, /de)
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}`,
      
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          pt: `${BASE_URL}/pt`,
          de: `${BASE_URL}/de`,
          "x-default": `${BASE_URL}/en`,
        },
      },
    });
  });

  // 2. Add Localized Tool Pages for every language and tool in TOOL_SLUG_MAP
  TOOL_SLUG_MAP.forEach((tool) => {
    locales.forEach((locale) => {
      const slug = tool.slugs[locale as keyof typeof tool.slugs];
      if (slug) {
        sitemapEntries.push({
          url: `${BASE_URL}/${locale}/${slug}`,
        
          changeFrequency: "weekly",
          priority: 0.9,
          alternates: {
            languages: {
              en: `${BASE_URL}/en/${tool.slugs.en}`,
              pt: `${BASE_URL}/pt/${tool.slugs.pt}`,
              de: `${BASE_URL}/de/${tool.slugs.de}`,
              "x-default": `${BASE_URL}/en/${tool.slugs.en}`,
            },
          },
        });
      }
    });
  });

  return sitemapEntries;
}
