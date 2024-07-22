import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://hexlab.online/',
  integrations: [tailwind(), sitemap(), astroImageTools, mdx()],
  output: "server",
  adapter: vercel()
});