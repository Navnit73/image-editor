import { ToolPageData } from "../types/markdown";

export function generateSoftwareApplicationSchema(pageData: ToolPageData, baseUrl: string) {
  const url = `${baseUrl}/${pageData.locale}/${pageData.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: pageData.frontmatter.seoTitle || pageData.frontmatter.title,
    description: pageData.frontmatter.seoDescription || pageData.frontmatter.description,
    url: url,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "photoresizerai.com",
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
        name: "Tools",
        item: `${baseUrl}/${pageData.locale}#tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageData.frontmatter.title,
        item: `${baseUrl}/${pageData.locale}/${pageData.slug}`,
      },
    ],
  };
}
