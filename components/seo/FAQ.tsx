import React from 'react';
import { FAQItem } from '../../lib/types/seo';

export function FAQ({ faq }: { faq: FAQItem[] }) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faq.map((item, idx) => (
          <details key={idx} className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-800 dark:text-slate-200 marker:content-none">
              {item.question}
              <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
