import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import lenis from "astro-lenis";
import playformInline from "@playform/inline";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://new-hexlab.vercel.app/',
  integrations: [tailwind(), sitemap(), astroImageTools, lenis(), playformInline(), mdx()],
  base: '/.',
  output: "static"
  // adapter: vercel()
});