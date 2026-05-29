// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "http://www.isaf.ro",
  i18n: {
    locales: ["ro", "en"],
    defaultLocale: "ro",
    routing: "manual",
  },
});
