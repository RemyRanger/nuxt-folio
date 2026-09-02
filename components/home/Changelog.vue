<template>
  <section class="relative">
    <div class="max-w-8xl mx-auto px-4 sm:px-6">
      <div class="pt-4 pb-20">
        <!-- Section header -->
        <div class="text-center pb-12 md:pb-20">
          <div class="inline-flex font-medium text-teal-400 pb-3">
            {{ $t('changelog-intro') }}
          </div>
          <h2 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
            {{ $t('changelog-title') }}
          </h2>
        </div>

        <!-- Timeline -->
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div
              class="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.teal.500/.65)_25%,_theme(colors.teal.200)_50%,_theme(colors.teal.500/.65)_75%,_transparent)] after:animate-shine"
              aria-hidden="true"
            />
            <article
              v-for="entry in entries"
              :key="entry.id"
              class="pt-12 first-of-type:pt-0 group"
            >
              <div class="md:flex">
                <div class="w-48 shrink-0">
                  <time class="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500 before:ring-4 before:ring-teal-500/30 mb-3">
                    <span class="ml-[1.625rem] md:ml-5">{{ $t(`changelog-section-${entry.id}-date`) }}</span>
                  </time>
                </div>
                <div class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                  <header>
                    <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                      {{ $t(`changelog-section-${entry.id}-title`) }}
                    </h3>
                  </header>
                  <figure
                    class="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8"
                    :class="{ 'flex justify-center items-center': entry.contain }"
                  >
                    <img
                      class="rounded-[inherit]"
                      :class="{ 'w-full': !entry.contain }"
                      :src="entry.logo"
                      :width="entry.width"
                      :height="entry.height"
                      :alt="$t(`changelog-section-${entry.id}-title`)"
                      loading="lazy"
                      decoding="async"
                    >
                  </figure>
                  <div class="space-y-5 leading-relaxed text-slate-400">
                    <p>{{ $t(`changelog-section-${entry.id}-description`) }}</p>
                    <p
                      v-for="field in fields"
                      :key="field.key"
                    >
                      <span class="font-medium text-gray-200">{{ $t(field.label) }} :</span>
                      <span class="text-slate-400">
                        {{ $t(`changelog-section-${entry.id}-${field.key}`) }}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Newest first; `id` keys into the `changelog-section-<id>-*` translations.
const entries = [
  { id: 5, logo: '/ovh_logo.webp', width: 574, height: 326 },
  { id: 4, logo: '/dawex_logo.webp', width: 574, height: 326 },
  { id: 3, logo: '/cdv_logo.webp', width: 220, height: 180, contain: true },
  { id: 2, logo: '/thales_logo.webp', width: 574, height: 326 },
  { id: 1, logo: '/thales_logo.webp', width: 574, height: 326 },
  { id: 0, logo: '/atos_logo.webp', width: 574, height: 326 }
]

const fields = [
  { key: 'project-management', label: 'project-management' },
  { key: 'technical-stack', label: 'technical-stack' }
]
</script>
