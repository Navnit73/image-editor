import matter from "gray-matter";
import { ToolFrontmatterZodSchema, ToolPageData } from "../types/markdown";

export function parseMarkdownContent(
  fileContent: string,
  locale: string,
  slug: string
): ToolPageData {
  const { data, content } = matter(fileContent);

  // Validate frontmatter with Zod schema
  const parsedFrontmatter = ToolFrontmatterZodSchema.parse(data);

  return {
    frontmatter: parsedFrontmatter,
    contentHtml: content, // Raw markdown string for client/server rendering
    rawMarkdown: content,
    locale,
    slug,
  };
}
