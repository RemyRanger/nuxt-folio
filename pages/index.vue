<template>
  <div
    className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Particles animation -->
    <Particles class="absolute inset-0 h-full" :quantity="100" />

    <!-- Page content -->
    <main class="grow">
      <Hero />
      <FeaturesHero />
      <Changelog />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import AOS from 'aos'

import Hero from '@/components/home/Hero.vue'
import FeaturesHero from '~/components/home/FeaturesHero.vue'
import Footer from '@/components/Footer.vue'
import Changelog from '~/components/home/Changelog.vue'
import Particles from '@/components/Particles.vue'

export default {
  name: 'Home',
  components: {
    Particles,
    Hero,
    FeaturesHero,
    Changelog,
    Footer
  },
  mounted () {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-cubic'
    })
  }
}
</script>
