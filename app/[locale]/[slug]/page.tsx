import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getToolPageData } from "@/lib/markdown/getContent";
import { getAllLocaleSlugParams } from "@/lib/markdown/getSlugs";
import { constructToolMetadata } from "@/lib/seo/generateMetadata";
import {
  generateSoftwareApplicationSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/schemas";

import { JsonLd } from "@/components/seo/JsonLd";
import { AppleNav } from "@/components/AppleNav";
import { ToolHero } from "@/components/content/ToolHero";
import { ImageEditor } from "@/components/editor/ImageEditor";
import { ToolFeatures } from "@/components/content/ToolFeatures";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import { ToolFaq } from "@/components/content/ToolFaq";
import { ToolCta } from "@/components/content/ToolCta";
import { RelatedTools } from "@/components/content/RelatedTools";
import { AppleFooter } from "@/components/AppleFooter";

interface ToolPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://apple-image-editor.com";

// Next.js static params generation for all markdown files
export async function generateStaticParams() {
  const paramsList = getAllLocaleSlugParams();
  return paramsList.map((param) => ({
    locale: param.locale,
    slug: param.slug,
  }));
}

// Next.js Metadata API implementation
export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const pageData = await getToolPageData(locale, slug);
  if (!pageData) {
    return {
      title: "Tool Not Found",
    };
  }
  return constructToolMetadata(pageData);
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { locale, slug } = await params;
  const pageData = await getToolPageData(locale, slug);

  if (!pageData) {
    notFound();
  }

  const { frontmatter, contentHtml } = pageData;

  // Generate structured data schemas
  const appSchema = generateSoftwareApplicationSchema(pageData, BASE_URL);
  const faqSchema = generateFaqSchema(pageData);
  const breadcrumbSchema = generateBreadcrumbSchema(pageData, BASE_URL);

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-body selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
      {/* Inject JSON-LD Schemas */}
      <JsonLd data={appSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Global Apple Header */}
      <AppleNav />

      {/* Hero Section */}
      <ToolHero
        badge={frontmatter.hero.badge}
        headline={frontmatter.hero.headline}
        subheadline={frontmatter.hero.subheadline}
        primaryCtaText={frontmatter.hero.primaryCta}
      />

      {/* Filerobot Image Editor Container */}
      <section id="editor-container" className="w-full py-12 px-4 sm:px-6 md:px-12 bg-[#f5f5f7]">
        <div className="max-w-[1024px] mx-auto">
          <ImageEditor preset={frontmatter.editorPreset} locale={locale} />
        </div>
      </section>

      {/* Features Grid */}
      <ToolFeatures features={frontmatter.features} />

      {/* Markdown Rich Content */}
      <MarkdownRenderer contentHtml={contentHtml} />

      {/* FAQ Section */}
      <ToolFaq faq={frontmatter.faq} />

      {/* Related Tools Recommendation */}
      <RelatedTools currentLocale={locale} relatedSlugs={frontmatter.relatedSlugs} />

      {/* Bottom CTA */}
      <ToolCta cta={frontmatter.cta} />

      {/* Apple Directory Footer */}
      <AppleFooter />
    </div>
  );
}
