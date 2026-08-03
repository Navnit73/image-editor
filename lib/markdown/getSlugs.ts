import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface LocaleSlugParam {
  locale: string;
  slug: string;
}

/**
 * Returns all [locale, slug] combinations present in /content for Next.js generateStaticParams.
 */
export function getAllLocaleSlugParams(): LocaleSlugParam[] {
  const params: LocaleSlugParam[] = [];

  if (!fs.existsSync(CONTENT_DIR)) {
    return params;
  }

  const locales = fs.readdirSync(CONTENT_DIR).filter((item) => {
    const fullPath = path.join(CONTENT_DIR, item);
    return fs.statSync(fullPath).isDirectory();
  });

  for (const locale of locales) {
    const localeDir = path.join(CONTENT_DIR, locale);
    const files = fs.readdirSync(localeDir).filter((file) => file.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(/\.md$/, "");
      params.push({ locale, slug });
    }
  }

  return params;
}
