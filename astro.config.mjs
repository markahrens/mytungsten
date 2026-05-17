import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mytungsten.net',
  integrations: [sitemap(), react()],
  fonts: [
    {
      name: "Geom",
      cssVariable: "--font-geom",
      provider: fontProviders.google(),
      weights: [400, 700],
    },
    {
      name: "Zalando Sans",
      cssVariable: "--font-zalando-sans",
      provider: fontProviders.google(),
      weights: [400, 700],
    }
  ]
});