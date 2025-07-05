export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    cdnURL: 'https://microcmstest.klavier.page/'
  },
  nitro: {
    preset: 'static'
  },
  css: ['~/assets/scss/main.scss'],
  modules: [
    'nuxt-microcms-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/eslint'
  ],
  microCMS: {
    serviceDomain: process.env.MICRO_CMS_DOMAIN,
    apiKey: process.env.MICRO_CMS_API_KEY,
    target: 'server'
  }
})
