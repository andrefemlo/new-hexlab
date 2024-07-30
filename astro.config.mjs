import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import lenis from "astro-lenis";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: 'https://new-hexlab.vercel.app/',
  integrations: [tailwind(), sitemap(), astroImageTools, lenis(), (await import("@playform/inline")).default()],
  base: '/.',
  output: "static"
  // adapter: vercel()
});