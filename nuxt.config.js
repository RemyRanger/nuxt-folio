import { defineNuxtConfig } from 'nuxt/config'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }]
  ],

  components: [
    'node_modules/@ipaat/vue3-tailwind3-cookie-comply'
  ],

  sitemap: {
    hostname: 'https://remy-ranger.raveon.fr/'
  },

  vite: {
    plugins: [
      eslintPlugin()
    ]
  },

  app: {
    /* baseURL: base, */
    head: {
      title: 'Rémy Ranger | Software Developer',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Rémy Ranger | Software Developer' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
      ]
    }
  },

  css: ['~/assets/css/style.css', 'aos/dist/aos.css'],
  compatibilityDate: '2025-07-13'
})
