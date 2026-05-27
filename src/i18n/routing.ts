import { getRelativeLocaleUrl } from "astro:i18n";

export const locales = ["ro", "en"] as const;
export const defaultLocale = "ro";

export type Locale = (typeof locales)[number];
export type RouteKey = keyof typeof localizedRoutes;

const localizedRoutes = {
  home: {
    ro: "",
    en: "",
  },
  certifications: {
    ro: "certificari",
    en: "certifications",
  },
} as const;

export const isLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);

export const normalizeLocale = (locale: string | undefined): Locale =>
  locale && isLocale(locale) ? locale : defaultLocale;

export const getLocalizedPath = (
  locale: Locale,
  route: RouteKey = "home",
  hash?: string,
) => {
  const routePath = localizedRoutes[route][locale];
  const path = getRelativeLocaleUrl(locale, routePath);

  return hash ? `${path}#${hash}` : path;
};

export const getAlternateLocale = (locale: Locale): Locale =>
  locale === "en" ? "ro" : "en";
