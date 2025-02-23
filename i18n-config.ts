export const i18n = {
  locales: [
    { code: "en-US", name: "English", icon: "🇺🇸" },
    { code: "cn", name: "Chinese", icon: "cn" },
    { code: "th", name: "Thailand", icon: "th" },
  ],
  defaultLocale: "en-US",
};

export const getDirection = (locale: string) => {
  return locale === "th" ? "rtl" : "ltr";
};
export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
