// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/phayze2184/",
  base: "isaf-v2",
  i18n: {
    locales: ["ro", "en"],
    defaultLocale: "ro",
    routing: "manual",
  },
});
