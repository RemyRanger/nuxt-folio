<template>
  <div>
    <c-hero-full invert-color class="illustration-section-01" />
    <c-clients top-divider bottom-divider />
    <c-features-tiles />
    <c-roadmap top-divider />
    <c-features-split invert-mobile image-fill top-divider />
    <c-cta has-bg-color invert-color split />
  </div>
</template>

<script>
// import sections
import CHeroFull from '@/components/sections/HeroFull.vue'
import CClients from '@/components/sections/Clients.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
import CRoadmap from '@/components/sections/Roadmap.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'

export default {
  name: 'HomeBlog',
  components: {
    CHeroFull,
    CClients,
    CFeaturesTiles,
    CRoadmap,
    CFeaturesSplit
  }
}
</script>
