import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, _from, _savedPosition) {
    return to.hash
      ? { el: to.hash, behavior: 'smooth' }
      : { top: 0 }
  }
}
