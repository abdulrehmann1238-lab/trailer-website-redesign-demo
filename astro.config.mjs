import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://trailercommerce.demo',
  output: 'static',
  build: {
    format: 'directory'
  }
});
