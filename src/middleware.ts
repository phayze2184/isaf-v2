import { middleware } from "astro:i18n";
import { sequence } from "astro:middleware";

export const onRequest = sequence(
  middleware({
    prefixDefaultLocale: false,
    redirectToDefaultLocale: false,
    fallbackType: "redirect",
  }),
);
