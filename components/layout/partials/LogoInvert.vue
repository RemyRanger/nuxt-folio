<template>
  <div class="brand">
    <h1 class="m-0">
      <NuxtLink to="/">
        <c-image
          :src="require('@/assets/images/logo-invert.svg')"
          alt="Evelyn"
          :width="32"
          :height="32"
        />
      </NuxtLink>
    </h1>
  </div>
</template>

<script>
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CLogo',
  components: {
    CImage
  }
}
</script>
