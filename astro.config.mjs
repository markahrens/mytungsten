import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mytungsten.net',
  integrations: [sitemap(), metaTags()]
});