<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div
      class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none w-[600px] aspect-square"
      aria-hidden="true"
    >
      <div class="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-30" />
      <div class="absolute w-64 h-64 translate-z-0 bg-teal-400 rounded-full blur-[80px] opacity-70" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-20 md:pt-40 md:pb-30">
        <!-- Hero content -->
        <div class="text-center items-center">
          <div class="inline-flex font-medium text-teal-400 pb-3">
            Software Engineer | Technical Leader
          </div>
          <h1 class="h1 pb-6">
            Rémy Ranger
          </h1>

          <SocialLinks class="justify-center" />
        </div>
      </div>
    </div>
  </section>
</template>
