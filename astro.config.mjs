import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import lenis from "astro-lenis";


// https://astro.build/config
export default defineConfig({
  site: 'https://new-hexlab.vercel.app/',
  integrations: [tailwind(), sitemap(), astroImageTools, lenis()],
  base: '/.',
  output: "static",
  // adapter: vercel()
});