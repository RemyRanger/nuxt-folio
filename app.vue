<template>
  <ClientOnly>
    <div class="font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight">
      <!-- Markup shared across all pages, ex: NavBar -->
      <NuxtPage />
      <notifications position="bottom right" />
    </div>
  </ClientOnly>
</template>

<script>

export default {
}
</script>
