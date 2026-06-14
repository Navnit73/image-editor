import { MetadataRoute } from 'next';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imageeditor.studio';

export function generateSitemaps() {
  return [
    { id: 'en' },
    { id: 'de' },
    { id: 'fr' },
    { id: 'es' },
  ];
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  if (id === 'en') {
    return [
      { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
      ...enPages.map((p) => ({
        url: `${baseUrl}/${p.slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ];
  }
  
  if (id === 'de') {
    return [
      { url: `${baseUrl}/de`, changeFrequency: 'weekly', priority: 0.9 },
      ...dePages.map((p) => ({
        url: `${baseUrl}/de/${p.slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ];
  }

  if (id === 'fr') {
    return [
      { url: `${baseUrl}/fr`, changeFrequency: 'weekly', priority: 0.9 },
      ...frPages.map((p) => ({
        url: `${baseUrl}/fr/${p.slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ];
  }

  if (id === 'es') {
    return [
      { url: `${baseUrl}/es`, changeFrequency: 'weekly', priority: 0.9 },
      ...esPages.map((p) => ({
        url: `${baseUrl}/es/${p.slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    ];
  }

  return [];
}
