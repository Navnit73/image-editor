import React from 'react';
import { SeoSection as SeoSectionType } from '../../lib/types/seo';

export function SeoSection({ section }: { section: SeoSectionType }) {
  return (
    <section className="py-8 border-b border-slate-200 dark:border-slate-800 last:border-0">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        {section.heading}
      </h2>
      <div 
        className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: section.content }} 
      />
    </section>
  );
}
