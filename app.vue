<template>
  <ClientOnly>
    <div class="font-inter antialiased bg-slate-900 text-slate-100 tracking-tight">
      <!-- Markup shared across all pages, ex: NavBar -->
      <NuxtPage />
      <notifications
        position="bottom right"
        :duration="4000"
      />
      <VueCookieComply
        :preferences="preferences"
        :banner-background-color="['bg-gray-200', 'dark:bg-gray-800', 'z-20']"
        @on-accept-all="onAccept"
        @on-save-preferences="onSavePreferences"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
import VueCookieComply from '@ipaat/vue3-tailwind3-cookie-comply'
import { setConsent } from 'firebase/analytics'

const preferences = [
  {
    title: 'Google Analytics',
    description: 'Google Analytics stores this cookie to track your usage of the website. Your IP address is not stored.',
    items: [
      {
        label: 'Google Analytics',
        value: 'g-analytics'
      }
    ]
  }
]

const onAccept = () => {
  setConsent({
    analytics_storage: 'granted'
  })
}

const onSavePreferences = (accepted) => {
  if (accepted[0] === 'g-analytics') {
    setConsent({
      analytics_storage: 'granted'
    })
  }
}
</script>
