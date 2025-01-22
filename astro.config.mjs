import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel';
const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      helloBanner: 'storyblok/HelloBanner',
      richText: 'storyblok/RichText',
    },
    apiOptions: {
      region: 'us',
    },
  }), tailwind(), react()],

  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },

  adapter: vercel(),
});