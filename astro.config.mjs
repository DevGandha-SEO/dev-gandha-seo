// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  /**
   * Canonical production origin.
   *
   * Required, not optional: @astrojs/sitemap refuses to emit without it, and
   * `<SEO />` uses it to build absolute canonical and Open Graph URLs. Keep it
   * in step with SITE.url in src/config/site.ts.
   */
  site: 'https://devgandha.example.com',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
