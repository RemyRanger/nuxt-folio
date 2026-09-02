<template>
  <div class="font-inter antialiased bg-slate-900 text-slate-100 tracking-tight">
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
    <ClientOnly>
      <VueCookieComply
        :preferences="preferences"
        :banner-background-color="['bg-gray-200', 'dark:bg-gray-800', 'z-20']"
        @on-accept-all="enableAnalytics"
        @on-save-preferences="onSavePreferences"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import VueCookieComply from '@ipaat/vue3-tailwind3-cookie-comply'
import { ANALYTICS_PREFERENCE, enableAnalytics, hasStoredAnalyticsConsent } from '~/utils/analytics'

const preferences = [
  {
    title: 'Google Analytics',
    description: 'Google Analytics stores this cookie to track your usage of the website. Your IP address is not stored.',
    items: [
      {
        label: 'Google Analytics',
        value: ANALYTICS_PREFERENCE
      }
    ]
  }
]

const onSavePreferences = (accepted) => {
  if (accepted?.includes(ANALYTICS_PREFERENCE)) {
    enableAnalytics()
  }
}

// Returning visitors who already opted in never see the banner again.
onMounted(() => {
  if (hasStoredAnalyticsConsent()) {
    enableAnalytics()
  }
})
</script>
