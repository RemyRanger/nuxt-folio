<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroHome />
      <FeaturesHome />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'

import PageIllustration from '@/components/PageIllustration.vue'
import HeroHome from '@/components/home/HeroHome.vue'
import FeaturesHome from '@/components/home/FeaturesHome.vue'
import Footer from '@/components/Footer.vue'

import '@/assets/css/style.css'

export default {
  name: 'Home',
  components: {
    PageIllustration,
    HeroHome,
    FeaturesHome,
    Footer
  },
  mounted () {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine'
    })
  }
}
</script>
