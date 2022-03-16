<template>
  <div class="brand">
    <h1 class="m-0">
      <NuxtLink to="/">
        <img
          :src="require('@/assets/images/logo.svg')"
          alt="Evelyn"
          :width="62"
          :height="62"
        >
      </NuxtLink>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'CLogo'
}
</script>
