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
  {
    id: "decrease-pic-size",
    slugs: {
      en: "decrease-pic-size",
      pt: "diminuir-tamanho-da-foto",
      de: "foto-verkleinern",
    },
  },
  {
    id: "reduce-image-dimensions",
    slugs: {
      en: "reduce-image-dimensions",
      pt: "reduzir-dimensoes-da-imagem",
      de: "bildabmessungen-reduzieren",
    },
  },
  {
    id: "photo-image-resizer",
    slugs: {
      en: "photo-image-resizer",
      pt: "redimensionador-de-fotos",
      de: "foto-resizer-online",
    },
  },
  {
    id: "increase-image-dimensions",
    slugs: {
      en: "increase-image-dimensions",
      pt: "aumentar-dimensoes-da-imagem",
      de: "bildgroesse-erhoehen",
    },
  },
  {
    id: "decrease-image-size-in-kb",
    slugs: {
      en: "decrease-image-size-in-kb",
      pt: "diminuir-tamanho-da-imagem-em-kb",
      de: "bildgroesse-in-kb-verringern",
    },
  },
  {
    id: "adobe-express-image-resize",
    slugs: {
      en: "adobe-express-image-resize",
      pt: "adobe-express-redimensionar-imagem",
      de: "adobe-express-bildgroesse-aendern",
    },
  },
  {
    id: "contact-us",
    slugs: {
      en: "contact-us",
      pt: "fale-conosco",
      de: "kontakt",
    },
  },
  {
    id: "privacy-policy",
    slugs: {
      en: "privacy-policy",
      pt: "politica-de-privacidade",
      de: "datenschutz",
    },
  },
  {
    id: "faq",
    slugs: {
      en: "faq",
      pt: "perguntas-frequentes",
      de: "faq",
    },
  },
  {
    id: "gdpr-data-security",
    slugs: {
      en: "gdpr-data-security",
      pt: "gdpr-seguranca-de-dados",
      de: "dsgvo-datensicherheit",
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
