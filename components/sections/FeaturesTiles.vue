<template>
  <section
    class="features-tiles section center-content"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="features-tiles-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <c-section-header :data="sectionHeader" class="center-content" />
        <div
          class="tiles-wrap"
          :class="[
            pushLeft && 'push-left',
          ]"
        >
          <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    :src="require('@/assets/images/split/frontend.svg')"
                    alt="Feature tile icon 01"
                    :width="208"
                    :height="208"
                  >
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">
                  Frontend
                </h4>
                <p class="m-0 text-sm">
                  Widely using VueJs for SPA development, i'm familiar with Angular too. Focusing on JAM stack requirements. Mobile experience with Ionic project.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="100">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    :src="require('@/assets/images/split/backend.svg')"
                    alt="Feature tile icon 02"
                    :width="208"
                    :height="208"
                  >
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">
                  Backend
                </h4>
                <p class="m-0 text-sm">
                  Very interrested by Golang development, i'm used to work with Java and NodeJS. API definition first, i love to use Openapi documentation and code generation.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    :src="require('@/assets/images/split/process.svg')"
                    alt="Feature tile icon 03"
                    :width="208"
                    :height="208"
                  >
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">
                  Workflow
                </h4>
                <p class="m-0 text-sm">
                  CI/CD interrested, i'm looking for the best suitable workflow for code release and safe auto-deployment. I'm gitlab lover, scripting and working with pipeline for years !
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    :src="require('@/assets/images/split/security.svg')"
                    alt="Feature tile icon 04"
                    :width="208"
                    :height="208"
                  >
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">
                  Cyber-defense
                </h4>
                <p class="m-0 text-sm">
                  Keep libraries updated as much as possible, practicing security basic knowloedge, code optimisation, API protection (Auth, JWT). Using cloudflare as firewall and so much .. :)
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    :src="require('@/assets/images/split/team.svg')"
                    alt="Feature tile icon 05"
                    :width="208"
                    :height="208"
                  >
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">
                  Team leader
                </h4>
                <p class="m-0 text-sm">
                  A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="500">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    :src="require('@/assets/images/split/creative.svg')"
                    alt="Feature tile icon 06"
                    :width="208"
                    :height="208"
                  >
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">
                  Creative Minded
                </h4>
                <p class="m-0 text-sm">
                  A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'

export default {
  name: 'CFeaturesTiles',
  components: {
    CSectionHeader
  },
  mixins: [SectionTilesProps],
  data () {
    return {
      sectionHeader: {
        title: '',
        paragraph: ''
      }
    }
  }
}
</script>
