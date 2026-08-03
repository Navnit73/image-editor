import { z } from "zod";
import { EditorPreset } from "./editor";

export const EditorPresetZodSchema = z.enum([
  "crop",
  "resize",
  "compress",
  "rotate",
  "passport",
  "background",
  "watermark",
  "filters",
  "full",
]);

export const FaqItemZodSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const FeatureItemZodSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const ToolFrontmatterZodSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  seoTitle: z.string(),
  seoDescription: z.string(),
  keywords: z.array(z.string()).default([]),
  editorPreset: EditorPresetZodSchema,
  toolCategory: z.string().default("general"),
  hero: z.object({
    badge: z.string().optional(),
    headline: z.string(),
    subheadline: z.string(),
    primaryCta: z.string().default("Start Editing"),
  }),
  features: z.array(FeatureItemZodSchema).optional(),
  faq: z.array(FaqItemZodSchema).optional(),
  cta: z
    .object({
      title: z.string(),
      description: z.string(),
      buttonText: z.string(),
    })
    .optional(),
  relatedSlugs: z.array(z.string()).optional(),
});

export type ToolFrontmatter = z.infer<typeof ToolFrontmatterZodSchema>;

export interface ToolPageData {
  frontmatter: ToolFrontmatter;
  contentHtml: string;
  rawMarkdown: string;
  locale: string;
  slug: string;
}
