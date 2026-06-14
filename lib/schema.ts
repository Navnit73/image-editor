import { SeoPage, Language } from './types/seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export function generateFAQSchema(page: SeoPage) {
  if (!page.faq || page.faq.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(page: SeoPage, lang: Language) {
  const langPrefix = lang === 'en' ? '' : `/de`; // Needs dynamic fixing, but keeping simple for now
  const actualPrefix = lang === 'en' ? '' : `/${lang}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}${actualPrefix}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.h1,
        item: `${baseUrl}${actualPrefix}/${page.slug}`
      }
    ]
  };
}

export function generateWebPageSchema(page: SeoPage, lang: Language) {
  const type = page.structuredDataOverrides?.webPageType || 'WebPage';
  const orgName = page.structuredDataOverrides?.organizationName || 'ExampleOrg';
  
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: page.metaTitle,
    description: page.metaDescription,
    publisher: {
      '@type': 'Organization',
      name: orgName,
    }
  };
}
