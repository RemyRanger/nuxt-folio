<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Blocks -->
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
          <div class="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
            <div class="max-w-[150px] mb-2">
              <label
                class="sr-only"
                for="language"
              >{{ $t('language') }}</label>
              <select
                id="language"
                v-model="$i18n.locale"
                class="form-select w-full text-gray-200 bg-gray-800"
              >
                <option
                  :label="$t('english')"
                  value="en"
                />
                <option
                  :label="$t('french')"
                  value="fr"
                />
              </select>
            </div>
            <div class="text-sm text-slate-300">
              &copy; Rémy Ranger <span class="text-slate-500">-</span> {{ $t('reserved-rights') }}
            </div>
            <div class="text-sm text-slate-300">
              v{{ appVersion }}
            </div>
          </div>
        </div>

        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app'

const { appVersion } = useRuntimeConfig().public
</script>
