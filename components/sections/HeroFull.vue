<template>
  <section
    style="overflow:hidden"
    class="hero section center-content"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container-sm">
      <div
        class="hero-inner section-inner pb-0"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <div class="hero-content">
          <h1 class="mt-0 mb-12 reveal-from-top" data-reveal-delay="150">
            I'm Rémy !
          </h1>
          <div class="container-xs">
            <p class="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
              A fullstack software Engineer.
            </p>
          </div>
        </div>
        <div class="hero-figure reveal-from-bottom" data-reveal-delay="600">
          <img
            class="has-shadow"
            :src="require('@/assets/images/hero-image.svg')"
            alt="Hero"
            :width="546"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'

export default {
  name: 'CHeroFull',
  mixins: [SectionProps]
}
</script>
