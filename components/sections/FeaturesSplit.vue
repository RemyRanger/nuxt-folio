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
              <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                Migrate old services from NodeJS to Golang.
              </p>
              <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                Back-office development to manage apikey delivery and datas access for client/admin uses (Auth with firebase).
              </p>
              <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                Unlink mongoDB from services to keep one database technology (postgres).
              </p>
              <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                New product development as a SaaS.
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
                Mobile app development with angular/ionic/capacitor.
              </p>
              <p class="m-0 reveal-from-right" data-reveal-delay="200" data-reveal-container=".split-item">
                Jhipster stack tests to automate cluster / micro-services creation.
              </p>
              <p class="m-0 reveal-from-right" data-reveal-delay="300" data-reveal-container=".split-item">
                Deployment on AWS Cloud (EKS service).
              </p>
              <p class="m-0 reveal-from-right" data-reveal-delay="400" data-reveal-container=".split-item">
                Authentication Front/Back with Cognito / Amplify.
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
                Kafka cluster deployment on AWS (Event-Driven architecture).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="200" data-reveal-container=".split-item">
                Improve projects and ci/cd management focusing on MonoRepo and Jenkins pipelines.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="300" data-reveal-container=".split-item">
                Services deployment on Openshift and AWS lately.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="400" data-reveal-container=".split-item">
                ESB development with Apache CAMEL.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="500" data-reveal-container=".split-item">
                Multi-threading optimisation for large datas set API processing.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="600" data-reveal-container=".split-item">
                Back-End: Spring Boot Microservices, PostgreSQL, Liquibase, Sonar, Kafka.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="700" data-reveal-container=".split-item">
                Front-End: Angular8, TypeScript, VScode.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="800" data-reveal-container=".split-item">
                CI/CD: GitLab, Kubernetes, Helm, Docker, Jenkins.
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
              <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                Prototyping voice driven application.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="200" data-reveal-container=".split-item">
                Tests training IA for speech recognition with Deepspeech project (Mozilla).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="300" data-reveal-container=".split-item">
                Data cleaning for IA training to create corpus of voice and translation.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="400" data-reveal-container=".split-item">
                Learning IA tests on AWS compute engine (128 core GPU).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="600" data-reveal-container=".split-item">
                Benchmark response time for speech to text and Elastic search request.
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
                Services deployment on AWS (own Kubernetes and lately EKS).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="200" data-reveal-container=".split-item">
                Optimisation (SQL, process ..).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="300" data-reveal-container=".split-item">
                In charge of penalty phone 24h/24h for system checking.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="400" data-reveal-container=".split-item">
                ScrumMaster of the CORE team ( 7 persons).
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="500" data-reveal-container=".split-item">
                Back-End: Spring Boot Microservices, Hibernate, Odata, PostgreSQL, Flyway, Sonar.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="600" data-reveal-container=".split-item">
                Front-End: AngularJS, TypeScript, VScode.
              </p>
              <p class="m-0 reveal-from-left" data-reveal-delay="700" data-reveal-container=".split-item">
                CI/CD: GitLab, Kubernetes, Helm, Docker.
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
