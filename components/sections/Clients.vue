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
            <c-image
              :src="require('@/assets/images/tech/vuejs.png')"
              alt="Client 01"
              :width="124"
              :height="24"
            />
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="150">
            <c-image
              :src="require('@/assets/images/tech/golang.png')"
              alt="Client 02"
              :width="124"
              :height="24"
            />
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="300">
            <c-image
              :src="require('@/assets/images/tech/openapi.png')"
              alt="Client 03"
              :width="124"
              :height="24"
            />
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="450">
            <c-image
              :src="require('@/assets/images/tech/postgres.png')"
              alt="Client 04"
              :width="124"
              :height="24"
            />
          </li>
          <li class="reveal-from-bottom" data-reveal-delay="600">
            <c-image
              :src="require('@/assets/images/tech/git.png')"
              alt="Client 05"
              :width="124"
              :height="24"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CClients',
  components: {
    CImage
  },
  mixins: [SectionProps]
}
</script>
