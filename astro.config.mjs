import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH || '/',
  site: process.env.SITE_URL || 'https://11111000000.github.io/projects'
});
