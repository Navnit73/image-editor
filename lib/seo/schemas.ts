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

export function generateWebSiteSchema(baseUrl: string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "photoresizerai.com",
    url: `${baseUrl}/${locale}`,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: "photoresizerai.com",
      url: baseUrl,
    },
  };
}

export function generateOrganizationSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "photoresizerai.com",
    url: baseUrl,
    logo: `${baseUrl}/file.svg`,
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
