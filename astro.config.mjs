import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://smartcloud.uz',
  vite: {
    build: {
      minify: "esbuild",
    },
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
