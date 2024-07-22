import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  site: 'https://new-hexlab.vercel.app/',
  integrations: [tailwind(), sitemap(), astroImageTools],
  output: "server",
  adapter: vercel()
});