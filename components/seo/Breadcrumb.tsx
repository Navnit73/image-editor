import React from 'react';
import Link from 'next/link';
import { SeoPage, Language } from '../../lib/types/seo';

export function Breadcrumb({ page, lang }: { page: SeoPage, lang: Language }) {
  const langPrefix = lang === 'en' ? '' : `${lang}`;
  
  return (
    <nav className="flex text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href={`/${langPrefix}`} className="hover:text-slate-800 dark:hover:text-slate-300">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-slate-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-400 dark:text-slate-500 ml-1 md:ml-2">
              {page.h1}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
