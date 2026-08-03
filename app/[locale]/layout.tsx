import React from "react";
import { LOCALES, Locale } from "@/lib/types/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const validLocale = (LOCALES[locale as Locale] ? locale : "en") as Locale;

  return (
    <div lang={validLocale} data-locale={validLocale} className="w-full">
      {children}
    </div>
  );
}
