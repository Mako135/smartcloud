import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
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
});
