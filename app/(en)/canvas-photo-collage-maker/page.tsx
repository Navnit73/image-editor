import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StickyToolNav from '@/components/canvas-collage/StickyToolNav';

import FAQAccordion from '@/components/canvas-collage/FAQAccordion';
import { enPages } from '@/content/en-pages';
import { generateSeoMetadata } from '@/lib/seo';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';

// Dynamically import heavy interactive tools
const CollageMakerTool = dynamic(() => import('@/components/canvas-collage/CollageMakerTool'), {
  loading: () => (
    <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-3xl flex items-center justify-center">
      <p className="text-slate-500 font-medium">Loading Collage Maker...</p>
    </div>
  ),
});

const PosterPrintTool = dynamic(() => import('@/components/canvas-collage/PosterPrintTool'), {
  loading: () => (
    <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-3xl mt-20 flex items-center justify-center">
      <p className="text-slate-500 font-medium">Loading Poster Splitter...</p>
    </div>
  ),
});

// Find the page content
const pageIndex = enPages.findIndex(p => p.slug === 'canvas-photo-collage-maker');
const pageData = enPages[pageIndex];

export function generateMetadata(): Metadata {
  return generateSeoMetadata(pageData, 'en', pageIndex);
}

export default function CanvasPhotoCollageMakerPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizerai.com';
  
  // Custom schema generation for the tools
  const toolsSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Canvas Photo Collage Maker',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Free Poster Splitter',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    }
  ];

  const faqSchema = generateFAQSchema(pageData);
  const breadcrumbSchema = generateBreadcrumbSchema(pageData, 'en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      <div className="w-full relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <img src="/hero-collage.png" alt="Collage maker background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
            Canvas Photo Collage Maker — Turn Your Photos into a Custom Canvas Print
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Welcome to the ultimate canvas photo collage experience. Whether you want to design a stunning canvas collage maker project from your favorite memories or you're looking for picture collage canvas prints to decorate your home, our free tools make it simple.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#collage-maker"
              className="px-8 py-3.5 bg-accent-main hover:bg-accent-hover text-white font-bold rounded-xl transition-colors text-center text-lg"
            >
              Start a Collage
            </Link>
            <Link 
              href="#poster-splitter"
              className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-colors dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 text-center border border-slate-200 dark:border-slate-700 text-lg"
            >
              Make a Poster
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 py-8 md:py-12">

        <StickyToolNav />

        <CollageMakerTool />
        
        <PosterPrintTool />



        <FAQAccordion faq={pageData.faq} />

        {/* Related Tools Section */}
        <section className="my-16 border-t border-slate-200 dark:border-slate-800 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Related Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="block p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Free Photo Resizer</h3>
              <p className="text-sm text-slate-500 mt-2">Resize images instantly without uploading to a server.</p>
            </Link>
            <Link href="/passport-photo-maker" className="block p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Passport Photo Maker</h3>
              <p className="text-sm text-slate-500 mt-2">Create perfectly sized passport and ID photos for any country.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
