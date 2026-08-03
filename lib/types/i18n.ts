export type Locale = "en" | "pt" | "de";

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  targetAudience: string;
  defaultLocale?: boolean;
}

export const LOCALES: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    targetAudience: "Entire World",
    defaultLocale: true,
  },
  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇧🇷",
    targetAudience: "Brazil",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    targetAudience: "Germany, Austria, Switzerland",
  },
};
