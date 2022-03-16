<template>
  <section
    class="clients section reveal-fade"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="clients-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <ul class="list-reset">
          <li class="reveal-from-bottom">
            <img
              :src="require('@/assets/images/tech/vuejs.jpg')"
              alt="Client 01"
              :width="124"
              :height="24"
            >
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="150">
            <img
              :src="require('@/assets/images/tech/golang.jpg')"
              alt="Client 02"
              :width="124"
              :height="24"
            >
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="300">
            <img
              :src="require('@/assets/images/tech/openapi.jpg')"
              alt="Client 03"
              :width="124"
              :height="24"
            >
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="450">
            <img
              :src="require('@/assets/images/tech/postgres.jpg')"
              alt="Client 04"
              :width="124"
              :height="24"
            >
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="600">
            <img
              :src="require('@/assets/images/tech/git.jpg')"
              alt="Client 05"
              :width="124"
              :height="24"
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'

export default {
  name: 'CClients',
  mixins: [SectionProps]
}
</script>
