import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), sitemap({
    filter: page => !page.includes('/partials/')
  })],
  site: 'https://lebocabinet.com'
});