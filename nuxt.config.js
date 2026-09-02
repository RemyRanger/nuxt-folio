import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { version } from './package.json'

const title = 'Rémy Ranger | Software Developer'
const description = 'Rémy Ranger — Software Engineer and Technical Leader.'
const hostname = 'https://remy-ranger.raveon.fr'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/eslint'
  ],

  components: [
    { path: '~/components', pathPrefix: false },
    'node_modules/@ipaat/vue3-tailwind3-cookie-comply'
  ],

  app: {
    head: {
      title,
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: description },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: hostname },
        { property: 'og:image', content: `${hostname}/me_cyber.webp` },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
        { rel: 'canonical', href: hostname },
        // Fetched in parallel with the stylesheet instead of being discovered
        // mid-parse, as an @import inside style.css would be.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/style.css'],

  site: {
    url: hostname
  },

  runtimeConfig: {
    public: {
      appVersion: version
    }
  },
  compatibilityDate: '2025-07-13',

  vite: {
    // Client-only: the browser bundle gets locales/*.json precompiled to render
    // functions and vue-i18n aliased to its runtime-only build, so the message
    // compiler is dropped. The Nitro/server build is left alone — the plugin
    // sets a bare `vue-i18n` resolve alias that Nitro cannot resolve, and the
    // server can compile messages at runtime at no cost to visitors.
    $client: {
      plugins: [
        VueI18nPlugin({
          include: [fileURLToPath(new URL('./locales/**', import.meta.url))],
          runtimeOnly: true,
          dropMessageCompiler: true
        })
      ]
    }
  },

  eslint: {
    // Keep the stylistic rules the old @nuxtjs preset enforced (no semicolons,
    // single quotes, 2-space indent) so the existing code style stays checked.
    config: {
      stylistic: {
        // Match the convention the old @nuxtjs preset enforced across this
        // codebase, rather than reformatting every file.
        commaDangle: 'never'
      }
    }
  },

  sitemap: {
    // 200.html is the SPA fallback and 404.html the error page; neither should
    // be advertised as indexable (the previous module listed both).
    exclude: ['/200.html', '/404.html'],
    // Fully prerendered site with no dynamic sources, so no runtime handler.
    zeroRuntime: true
  }
})
