import { defineNuxtConfig } from 'nuxt/config'
import eslintPlugin from 'vite-plugin-eslint'

/* const { CI_PAGES_URL } = process.env
const base = CI_PAGES_URL && new URL(CI_PAGES_URL).pathname */

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }]
  ],

  sitemap: {
    hostname: 'https://remy-ranger.raveon.fr/'
  },

  vite: {
    plugins: [
      eslintPlugin()
    ]
  },

  /* router: {
    base
  }, */

  app: {
    /* baseURL: base, */
    head: {
      title: 'Rémy Ranger - Fullstack Software Engineer',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Rémy Ranger - Software Engineer' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/style.css']
})
