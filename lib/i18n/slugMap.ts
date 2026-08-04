import { Locale } from "../types/i18n";

/**
 * Universal Tool ID mapped to localized slugs across all supported languages.
 * This enables cross-locale matching for hreflang tags, canonical URLs, and language switchers.
 */
export interface ToolSlugMapItem {
  id: string;
  slugs: Record<Locale, string>;
}

export const TOOL_SLUG_MAP: ToolSlugMapItem[] = [
  {
    id: "image-cropper",
    slugs: {
      en: "image-cropper",
      pt: "cortar-imagem",
      de: "bild-zuschneiden",
    },
  },
  {
    id: "passport-photo-maker",
    slugs: {
      en: "passport-photo-maker",
      pt: "foto-passaporte",
      de: "passfoto-generator",
    },
  },
];

/**
 * Given a locale and slug, find the matching ToolSlugMapItem.
 */
export function getToolSlugItemBySlug(locale: Locale, slug: string): ToolSlugMapItem | undefined {
  return TOOL_SLUG_MAP.find((item) => item.slugs[locale] === slug);
}

/**
 * Given a tool ID, return all localized slugs.
 */
export function getLocalizedSlugsForTool(toolId: string): Record<Locale, string> | undefined {
  const item = TOOL_SLUG_MAP.find((t) => t.id === toolId);
  return item?.slugs;
}

/**
 * Given a current locale & slug, resolve equivalent slugs for all alternate locales.
 */
export function getAlternateSlugs(currentLocale: Locale, currentSlug: string): Record<Locale, string> {
  const item = getToolSlugItemBySlug(currentLocale, currentSlug);
  if (!item) {
    return {
      en: currentSlug,
      pt: currentSlug,
      de: currentSlug,
    };
  }
  return item.slugs;
}
