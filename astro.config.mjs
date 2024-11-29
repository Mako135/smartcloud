// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    build: {
      minify: "esbuild",
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  server: { port: 4000, host: true },
});
