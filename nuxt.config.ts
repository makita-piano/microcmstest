export default defineNuxtConfig({
  app: {
    baseURL: '/',
    cdnURL: 'https://microcmstest.klavier.page/' // ← これを追加
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    preset: 'static',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    [
      'nuxt-microcms-module',
      {
        serviceDomain: process.env.MICRO_CMS_DOMAIN,
        apiKey: process.env.MICRO_CMS_API_KEY,
        target: 'server'
      },
    ]
  ],
  css: ['~/assets/scss/main.scss']
});
