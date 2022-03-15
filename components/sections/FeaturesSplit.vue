<template>
  <section
    class="features-split section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="features-split-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <c-section-header :data="sectionHeader" class="center-content" />
        <div
          class="split-wrap"
          :class="[
            invertMobile && 'invert-mobile',
            invertDesktop && 'invert-desktop',
            alignTop && 'align-top'
          ]"
        >
          <div class="split-item">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                Cadre De Vie Data provider startup
              </h3>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              class="split-item-image reveal-from-bottom"
              data-reveal-container=".split-item"
              data-reveal-delay="200"
              :class="imageFill && 'split-item-image-fill'"
            >
              <img
                :src="require('@/assets/images/project/cadredevie.png')"
                class="has-shadow"
                alt="Features split image 01"
                :width="328"
                :height="296"
              >
            </div>
          </div>

          <div class="split-item">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                Taktyl Mobile App for events
              </h3>
              <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              class="split-item-image reveal-from-bottom"
              data-reveal-container=".split-item"
              data-reveal-delay="200"
              :class="imageFill && 'split-item-image-fill'"
            >
              <img
                :src="require('@/assets/images/project/taktyl.png')"
                class="has-shadow"
                alt="Features split image 02"
                :width="528"
                :height="396"
              >
            </div>
          </div>

          <div class="split-item">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                HomePlus HeathCare Services.
              </h3>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Réalisation des évolutions techniques.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Déploiement d'un Cluster Kafka sur AWS et mise en place de l'Event-driven Architecture.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Amélioration et implémentation de la chaine CI/CD Gitlab Jenkins, mise en place du processs de livraison (MonoRepo).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Déploiement de version sur cluster Openshift puis Kubernetes (AWS).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Développement d'un ESB de type Camel.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Optimisation des APIs par multi-threading et formation des équipes.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Back-End: Spring Boot Microservices, PostgreSQL, Liquibase, Sonar, Kafka.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Front-End: Angular8, TypeScript, VScode.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Environnement de déploiement: GitLab, Kubernetes, Helm, Docker, Jenkins.
              </p>
            </div>
            <div
              class="split-item-image reveal-from-bottom"
              data-reveal-container=".split-item"
              data-reveal-delay="200"
              :class="imageFill && 'split-item-image-fill'"
            >
              <img
                :src="require('@/assets/images/project/homeplus.png')"
                class="has-shadow"
                alt="Features split image 03"
                :width="528"
                :height="396"
              >
            </div>
          </div>

          <div class="split-item">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                Olympe Voice drived interface
              </h3>
              <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              class="split-item-image reveal-from-bottom"
              data-reveal-container=".split-item"
              data-reveal-delay="200"
              :class="imageFill && 'split-item-image-fill'"
            >
              <img
                :src="require('@/assets/images/project/olympe.png')"
                class="has-shadow"
                alt="Features split image 02"
                :width="528"
                :height="396"
              >
            </div>
          </div>

          <div class="split-item">
            <div class="split-item-content center-content-mobile">
              <h3 class="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                Ci5 Cargo Intelligent System
              </h3>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Réalisation des évolutions techniques
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Déploiement d'un Cluster Kafka sur AWS et mise en place de l'Event-driven Architecture
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Amélioration et implémentation de la chaine CI/CD Gitlab Jenkins, mise en place du processs de livraison (MonoRepo)
              </p>
            </div>
            <div
              class="split-item-image reveal-from-bottom"
              data-reveal-container=".split-item"
              data-reveal-delay="200"
              :class="imageFill && 'split-item-image-fill'"
            >
              <img
                :src="require('@/assets/images/project/ci5.png')"
                class="has-shadow"
                alt="Features split image 03"
                :width="528"
                :height="396"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CSectionHeader
  },
  mixins: [SectionSplitProps],
  data () {
    return {
      sectionHeader: {
        title: 'Projects'
      }
    }
  }
}
</script>
