// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thetrailsofceylon.com',
  trailingSlash: 'always',
  integrations: [sitemap({
    serialize(item) {
      if (item.url === 'https://thetrailsofceylon.com/') {
        item.changefreq = 'daily';
        item.priority = 1.0;
      } else if (/\/places\/[^/]+\/$/.test(item.url)) {
        item.changefreq = 'monthly';
        item.priority = 0.8;
      } else if (/\/(guides|things-to-do)\/[^/]+\/$/.test(item.url)) {
        item.changefreq = 'monthly';
        item.priority = 0.7;
      } else if (/\/blog\/[^/]+\/$/.test(item.url)) {
        item.changefreq = 'monthly';
        item.priority = 0.6;
      } else {
        item.changefreq = 'monthly';
        item.priority = 0.5;
      }
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
