// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
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
