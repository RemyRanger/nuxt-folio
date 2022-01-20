<template>
  <div>
    <c-hero-full invert-color class="illustration-section-01" />
    <c-clients top-divider bottom-divider />
    <c-features-tiles />
    <c-features-split invert-mobile image-fill top-divider />
    <c-pricing top-divider pricing-slider />
    <c-cta has-bg-color invert-color split />
  </div>
</template>

<script>
// import sections
import CHeroFull from '@/components/sections/HeroFull.vue'
import CClients from '@/components/sections/Clients.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
import CPricing from '@/components/sections/Pricing.vue'
import CCta from '@/components/sections/Cta.vue'

export default {
  name: 'HomeBlog',
  components: {
    CHeroFull,
    CClients,
    CFeaturesTiles,
    CFeaturesSplit,
    CPricing,
    CCta
  }
}
</script>
