// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      minify: "esbuild",
      target: "esnext", // Указание цели для компиляции
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  server: { port: 3000, host: true },
});
