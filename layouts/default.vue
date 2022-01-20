<template>
  <fragment>
    <c-header nav-position="right" class="invert-color reveal-from-top" />
    <main class="site-content">
      <Nuxt />
    </main>
    <c-footer />
  </fragment>
</template>

<script>

import CHeader from '@/components/layout/Header.vue'
import CFooter from '@/components/layout/Footer.vue'

import '@/assets/scss/style.scss'

export default {
  name: 'DefaultLayout',
  components: {
    CHeader,
    CFooter
  },
  mounted () {
    document.body.classList.add('is-loaded')
    document.body.classList.add('has-animations')
  }
}
</script>
