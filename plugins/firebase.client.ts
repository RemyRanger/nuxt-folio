import { initializeApp } from 'firebase/app'
import { setConsent, getAnalytics } from 'firebase/analytics'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAexQd5CyMoltq3sv7J234F2TpVf8TZtLM',
    authDomain: 'nuxt-folio-c9389.firebaseapp.com',
    projectId: 'nuxt-folio-c9389',
    storageBucket: 'nuxt-folio-c9389.firebasestorage.app',
    messagingSenderId: '582904324625',
    appId: '1:582904324625:web:cef2eeb77c47d82f3607b0',
    measurementId: 'G-7EX1879VXF'
  }

  const app = initializeApp(firebaseConfig)

  // Analytics is disable by default (GDPR)
  getAnalytics(app)
  setConsent({
    analytics_storage: 'denied',
    ad_storage: 'denied'
  })
})
