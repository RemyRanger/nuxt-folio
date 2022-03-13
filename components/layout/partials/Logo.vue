<template>
  <div class="brand">
    <h1 class="m-0">
      <NuxtLink to="/">
        <c-image
          :src="require('@/assets/images/logo.svg')"
          alt="Evelyn"
          :width="62"
          :height="62"
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
