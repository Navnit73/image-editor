import { ToolPageData } from "../types/markdown";

export function generateSoftwareApplicationSchema(pageData: ToolPageData, baseUrl: string) {
  const url = `${baseUrl}/${pageData.locale}/${pageData.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: pageData.frontmatter.seoTitle || pageData.frontmatter.title,
    description: pageData.frontmatter.seoDescription || pageData.frontmatter.description,
    url: url,
    image: `${baseUrl}/og-image.png`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All Browser Platforms",
    softwareVersion: "1.0",
    inLanguage: pageData.locale,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "photoresizerai.com",
      url: baseUrl,
    },
    featureList: pageData.frontmatter.features?.map((f) => f.title) || [
      "Zero Server Upload Privacy",
      "Lossless Export",
      "Browser RAM Processing",
    ],
  };
}

export function generateHomeSoftwareApplicationSchema(baseUrl: string, locale: string) {
  const titles: Record<string, string> = {
    en: "Free Online AI Image Editor & Photo Resizer",
    pt: "Editor de Imagem IA Grátis e Redimensionador de Fotos",
    de: "Kostenloser KI Bildeditor & Foto Resizer Online",
  };

  const descriptions: Record<string, string> = {
    en: "Free online AI image editor and photo resizer. Crop, resize, compress, convert formats, and generate passport photos with 100% browser-based privacy. Zero server uploads.",
    pt: "Editor de imagem online grátis e redimensionador de fotos. Corte, redimensione, compacte, converta formatos e crie fotos para passaporte com 100% de privacidade no navegador.",
    de: "Kostenloser Online KI-Bildeditor und Foto Resizer. Bilder zuschneiden, verkleinern, komprimieren, Formate umwandeln und Passfotos erstellen mit 100% Datenschutz.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/og-image.png`,
    applicationCategory: "DesignApplication",
    operatingSystem: "All Web Browsers (Chrome, Safari, Firefox, Edge)",
    softwareVersion: "2.5",
    inLanguage: locale,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "PhotoResizer AI",
      url: baseUrl,
    },
    featureList: [
      "AI Image Editor",
      "Zero Server Upload Privacy",
      "Batch Image Resizer",
      "Format Converter (PNG to JPG / WebP)",
      "Passport Photo Generator (US 2x2, Schengen 35x45mm)",
      "Lossless Quality Preservation",
    ],
  };
}

export function generateWebSiteSchema(baseUrl: string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PhotoResizer AI",
    url: `${baseUrl}/${locale}`,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: "PhotoResizer AI",
      url: baseUrl,
    },
  };
}

export function generateOrganizationSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PhotoResizer AI",
    url: baseUrl,
    logo: `${baseUrl}/file.svg`,
    description: "Free online AI image editor & photo resizer with 100% browser-based privacy. Zero server uploads.",
    foundingDate: "2026",
    sameAs: [
      "https://twitter.com/photoresizerai",
      "https://github.com/photoresizerai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@photoresizerai.com",
      availableLanguage: ["English", "Portuguese", "German"],
    },
  };
}

export function generateFaqSchema(pageData: ToolPageData) {
  if (!pageData.frontmatter.faq || pageData.frontmatter.faq.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.frontmatter.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateHomeFaqSchema(faqList: Array<{ question: string; answer: string }>) {
  if (!faqList || faqList.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(pageData: ToolPageData, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${pageData.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageData.frontmatter.title,
        item: `${baseUrl}/${pageData.locale}/${pageData.slug}`,
      },
    ],
  };
}
