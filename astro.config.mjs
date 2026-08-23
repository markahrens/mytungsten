import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import icon from 'astro-icon';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mytungsten.net',
  integrations: [sitemap(), react(), icon()],

  fonts: [
    {
      name: "Hanken Grotesk",
      cssVariable: "--font-hanken-grotesk",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800, 900],
    }
  ],

  adapter: cloudflare({
    prerenderEnvironment: 'node'
  }),

  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/cloudflare'],
    },
  },
  
});