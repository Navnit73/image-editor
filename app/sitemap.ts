import { MetadataRoute } from 'next';
import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { frPages } from '../content/fr-pages';
import { esPages } from '../content/es-pages';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic pages for all languages
  enPages.forEach((p) => {
    routes.push({ url: `${baseUrl}/${p.slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  });

  dePages.forEach((p) => {
    routes.push({ url: `${baseUrl}/de/${p.slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  });

  frPages.forEach((p) => {
    routes.push({ url: `${baseUrl}/fr/${p.slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  });

  esPages.forEach((p) => {
    routes.push({ url: `${baseUrl}/es/${p.slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  });

  return routes;
}
