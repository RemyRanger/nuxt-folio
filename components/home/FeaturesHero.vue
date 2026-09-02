<template>
  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="py-10 md:py-20">
        <div class="flex flex-col items-center justify-between md:flex-row md:gap-8 md:pb-20 lg:gap-16">
          <!-- Left content -->
          <div class="shrink-0 md:w-[540px]">
            <div class="after:animate-shine relative mb-6 after:opacity-0">
              <div class="mb-4">
                <h2 class="pb-4 text-3xl font-semibold md:text-4xl">
                  {{ $t('feature-hero-title') }}
                </h2>
                <p>
                  {{ $t('feature-hero-description') }}
                </p>
              </div>

              <!-- Skills -->
              <ul class="space-y-2">
                <li
                  v-for="n in featureCount"
                  :key="n"
                  class="-mx-2 flex gap-2 p-2 text-left"
                >
                  <svg
                    class="shrink-0 fill-teal-500 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="m14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z" />
                  </svg>
                  <span>
                    <span class="font-medium text-gray-200">
                      {{ $t(`feature-hero-sub-title-${n}`) }}
                    </span>
                    <span class="text-gray-700"> - </span>
                    <span class="text-slate-400">
                      {{ $t(`feature-hero-sub-description-${n}`) }}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right content -->
          <div class="flex flex-col items-center justify-center text-center p-4">
            <img
              width="400"
              height="400"
              src="/me_cyber.webp"
              alt="Rémy Ranger"
              class="rounded-full z-10"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featureCount = 7
</script>
