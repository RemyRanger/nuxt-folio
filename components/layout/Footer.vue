<template>
  <footer class="site-footer invert-color center-content-mobile" :class="topOuterDivider && 'has-top-divider'">
    <div class="container">
      <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
        <div class="footer-top space-between text-xxs">
          <c-logo />
          <c-footer-social />
        </div>
        <div class="footer-bottom space-between text-xxs invert-order-desktop">
          <div class="footer-copyright">
            &copy; 2022 Rémy Ranger, all rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'
import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterSocial
  },
  props: {
    topOuterDivider: {
      type: Boolean,
      default: false
    },
    topDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>
