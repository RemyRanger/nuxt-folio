<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <!-- Particles animation -->
    <Particles
      class="absolute inset-0 h-full"
      :quantity="100"
    />

    <!-- Page content -->
    <main class="grow">
      <Hero />
      <FeaturesHero />
      <Changelog />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
