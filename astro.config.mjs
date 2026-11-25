// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://karim.one",
  integrations: [react(), mdx(), sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  markdown: {
    shikiConfig: { theme: "tokyo-night", wrap: false },
  },
});
