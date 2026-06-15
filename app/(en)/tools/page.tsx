import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { enPages } from '../../../content/en-pages';
import { Scissors, RefreshCw, Wand2, ArrowRight } from 'lucide-react';

export default function ToolsPage() {
  const validPages = enPages.filter(page => !['how-to-use', 'contact', 'terms', 'privacy'].includes(page.slug));

  const toolsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Free Image Tools",
    "description": "Explore our complete collection of secure, browser-based image editing utilities. No downloads or sign-ups required.",
    "url": "https://photoresizerai.com/tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": validPages.map((page, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://photoresizerai.com/${page.slug}`
      }))
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <Script id="tools-collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }} />
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          All Free Image Tools
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Explore our complete collection of secure, browser-based image editing utilities. No downloads or sign-ups required.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {validPages.map((page) => {
          const isPassport = page.showTool === 'passport-maker';
          const Icon = isPassport ? Scissors : (page.showTool === 'bg-remover' ? Wand2 : RefreshCw);

          return (
            <Link 
              key={page.slug} 
              href={`/${page.slug}`}
              className="group flex flex-col p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 hover:border-lime-300 dark:hover:border-lime-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-lime-50 dark:bg-lime-900/30 rounded-xl flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                {page.h1}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 line-clamp-3">
                {page.metaDescription}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-lime-600 dark:text-lime-400 group-hover:gap-3 transition-all">
                Use Tool <ArrowRight size={16} />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
