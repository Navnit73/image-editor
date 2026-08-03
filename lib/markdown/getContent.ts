import fs from "fs";
import path from "path";
import { parseMarkdownContent } from "./parseMarkdown";
import { ToolPageData } from "../types/markdown";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Fetch a specific tool markdown file by locale and slug.
 */
export async function getToolPageData(
  locale: string,
  slug: string
): Promise<ToolPageData | null> {
  try {
    const filePath = path.join(CONTENT_DIR, locale, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    return parseMarkdownContent(fileContent, locale, slug);
  } catch (error) {
    console.error(`Error loading tool page data for locale=${locale}, slug=${slug}:`, error);
    return null;
  }
}

/**
 * Get all tool pages for a given locale.
 */
export async function getAllToolPagesForLocale(locale: string): Promise<ToolPageData[]> {
  try {
    const localeDir = path.join(CONTENT_DIR, locale);
    if (!fs.existsSync(localeDir)) {
      return [];
    }

    const filenames = fs.readdirSync(localeDir).filter((file) => file.endsWith(".md"));

    const pages: ToolPageData[] = [];
    for (const filename of filenames) {
      const slug = filename.replace(/\.md$/, "");
      const pageData = await getToolPageData(locale, slug);
      if (pageData) {
        pages.push(pageData);
      }
    }

    return pages;
  } catch (error) {
    console.error(`Error loading all tool pages for locale=${locale}:`, error);
    return [];
  }
}
