import React from 'react';
import { SeoPage, Language } from '../../lib/types/seo';
import { Breadcrumb } from './Breadcrumb';
import { SeoSection } from './SeoSection';
import { FAQ } from './FAQ';
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from '../../lib/schema';
import Script from 'next/script';
import PhotoEditor from '../../app/components/editor/PhotoEditor';
import PassportMakerApp from '../../app/components/passport_photo/PassportMakerApp';
import BgRemoverApp from '../../app/components/bg_removal/BgRemoverApp';

interface Props {
  page: SeoPage;
  lang: Language;
}

export function SeoPageRenderer({ page, lang }: Props) {
  const faqSchema = generateFAQSchema(page);
  const breadcrumbSchema = generateBreadcrumbSchema(page, lang);
  const webPageSchema = generateWebPageSchema(page, lang);

  return (
    <main className="w-full pb-8 md:pb-12">
      {/* JSON-LD Structured Data */}
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Top Header Content - Wide Width to match Editor */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-8 md:pt-12">
        <Breadcrumb page={page} lang={lang} />

        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {page.h1}
          </h1>
          {page.subtitle && (
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
              {page.subtitle}
            </p>
          )}
        </header>
      </div>

      {/* Dynamic Tool Rendering - Wide Width */}
      {page.showTool && (
        <div className="max-w-[1400px] mx-auto px-2 md:px-6 mb-16">
          {page.showTool === 'photo-editor' && <PhotoEditor />}
          {page.showTool === 'passport-maker' && <PassportMakerApp />}
          {page.showTool === 'bg-remover' && <BgRemoverApp />}
        </div>
      )}

      {/* Bottom SEO Content - Constrained Width */}
      <div className="max-w-5xl mx-auto px-4">
        {page.sections && page.sections.length > 0 && (
          <div className="flex flex-col gap-8 mb-16">
            {page.sections.map((section, idx) => (
              <SeoSection key={idx} section={section} />
            ))}
          </div>
        )}

        {/* FAQ */}
        <FAQ faq={page.faq || []} />
      </div>
    </main>
  );
}
