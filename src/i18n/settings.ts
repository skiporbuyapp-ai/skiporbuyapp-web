export const locales = ["en", "es", "fr", "de", "zh", "zh-HK", "ja", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "简体中文",
  "zh-HK": "繁體中文",
  ja: "日本語",
  it: "Italiano",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  zh: "🇨🇳",
  "zh-HK": "🇭🇰",
  ja: "🇯🇵",
  it: "🇮🇹",
};
