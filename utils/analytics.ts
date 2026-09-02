const ANALYTICS_PREFERENCE = 'g-analytics'
const CONSENT_STORAGE_KEY = 'cookie-comply'

const firebaseConfig = {
  apiKey: 'AIzaSyAexQd5CyMoltq3sv7J234F2TpVf8TZtLM',
  authDomain: 'nuxt-folio-c9389.firebaseapp.com',
  projectId: 'nuxt-folio-c9389',
  storageBucket: 'nuxt-folio-c9389.firebasestorage.app',
  messagingSenderId: '582904324625',
  appId: '1:582904324625:web:cef2eeb77c47d82f3607b0',
  measurementId: 'G-7EX1879VXF'
}

let started = false

/**
 * Loads Firebase and starts analytics. The SDK is ~110 kB gzipped, so it is
 * imported dynamically and only once the visitor has actually opted in —
 * previously it shipped in the main bundle on every visit just to sit there
 * with `analytics_storage: 'denied'`.
 */
export async function enableAnalytics() {
  if (started || !import.meta.client) {
    return
  }
  started = true

  const [{ initializeApp }, { getAnalytics, setConsent }] = await Promise.all([
    import('firebase/app'),
    import('firebase/analytics')
  ])

  setConsent({ analytics_storage: 'granted', ad_storage: 'denied' })
  getAnalytics(initializeApp(firebaseConfig))
}

/** True when a previous visit already opted in to analytics. */
export function hasStoredAnalyticsConsent() {
  if (!import.meta.client) {
    return false
  }
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
    return !!stored && JSON.parse(stored)?.includes(ANALYTICS_PREFERENCE)
  }
  catch {
    return false
  }
}

export { ANALYTICS_PREFERENCE }
