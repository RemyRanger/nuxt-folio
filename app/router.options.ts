import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior (to, from, _savedPosition) {
    if (to.path !== from.path) {
      window.scrollTo(0, 0)
    }

    return to.hash
      ? {
          el: to.hash,
          behavior: 'smooth'
        }
      : { top: 0 }
  }
}
