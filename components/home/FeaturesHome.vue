<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-6 md:py-10 border-t border-gray-200 dark:border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-6 md:pb-10">
          <h2 class="h2 font-red-hat-display mb-4">
            Projects
          </h2>
        </div>

        <div class="relative max-w-6xl mx-auto">
          <div class="pb-2 md:pb-4">
            <div
              class="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-6 text-center"
              data-aos-id-stats
            >
              <div
                class="py-8 px-1 m-auto"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <img
                  format="svg"
                  src="/vuejs.svg"
                  alt="vuejs"
                  :width="125"
                  :height="75"
                >
              </div>
              <div
                class="py-8 px-1 m-auto"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <img
                  format="svg"
                  src="/golang.svg"
                  alt="golang"
                  :width="115"
                  :height="75"
                >
              </div>
              <div
                class="py-8 px-1 m-auto"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <img
                  format="svg"
                  src="/java.svg"
                  alt="java"
                  :width="115"
                  :height="75"
                >
              </div>
              <div
                class="py-8 px-1 m-auto"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <img
                  format="svg"
                  src="/openapi.svg"
                  alt="openapi"
                  :width="155"
                  :height="75"
                >
              </div>
              <div
                class="py-8 px-1 m-auto"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <img
                  class="mb-2 mt-4"
                  format="svg"
                  src="/git.svg"
                  alt="git"
                  :width="95"
                  :height="75"
                >
              </div>
              <div
                class="py-8 px-1 m-auto"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
              >
                <img
                  class="mb-2 mt-4"
                  format="svg"
                  src="/postgresql.svg"
                  alt="postgresql"
                  :width="155"
                  :height="75"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 my-12 pb-12">
          <div class="pb-12">
            <div class="max-w-4xl mx-auto">
              <!-- Article content -->
              <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">
                <figure class="mb-8 md:float-left md:max-w-sm md:mr-8 lg:max-w-none lg:-ml-32">
                  <img
                    class="mx-auto"
                    src="/cadredevie.jpg"
                    alt="cadre de vie"
                    :width="600"
                    :height="210"
                  >
                </figure>
                <h3 class="h4 font-red-hat-display text-gray-900 dark:text-gray-100">
                  Cadre De Vie
                </h3>
                <ul
                  class="
                    max-w-sm
                    sm:max-w-md
                    mx-auto
                    md:max-w-none
                    text-gray-600
                    dark:text-gray-400
                    mt-4
                    -mb-2
                  "
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Migrate old services from NodeJS to Golang.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Back-office development to manage apikey delivery and datas access for client/admin uses (Auth with firebase).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Unlink mongoDB from services to keep one database technology (postgres).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>New product development as a SaaS.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 my-12 pb-12">
          <div class="pb-12">
            <div class="max-w-4xl mx-auto">
              <!-- Article content -->
              <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
                <figure class="mb-8 md:float-right md:max-w-sm md:ml-8 lg:max-w-none lg:-mr-32">
                  <img
                    class="mx-auto"
                    src="/taktyl.jpg"
                    alt="taktyl"
                    :width="500"
                    :height="320"
                  >
                </figure>
                <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
                  Taktyl Mobile App
                </h3>
                <ul
                  class="
                    max-w-sm
                    sm:max-w-md
                    mx-auto
                    md:max-w-none
                    text-gray-600
                    dark:text-gray-400
                    mt-8
                    -mb-2
                  "
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Mobile app development with angular/ionic/capacitor.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Jhipster stack tests to automate cluster / micro-services creation.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Deployment on AWS Cloud (EKS service).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Authentication Front/Back with Cognito / Amplify.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 my-12 pb-12">
          <div class="pb-6">
            <div class="max-w-4xl mx-auto">
              <!-- Article content -->
              <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="300">
                <figure class="mb-8 md:float-left md:max-w-sm md:mr-8 lg:max-w-none lg:-ml-32">
                  <img
                    class="mx-auto"
                    src="/homeplus.jpg"
                    alt="homeplus"
                    :width="600"
                    :height="220"
                  >
                </figure>
                <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
                  HomePlus Urssaf
                </h3>
                <ul
                  class="
                    max-w-sm
                    sm:max-w-md
                    mx-auto
                    md:max-w-none
                    text-gray-600
                    dark:text-gray-400
                    mt-4
                    -mb-2
                  "
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Kafka cluster deployment on AWS (Event-Driven architecture).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Improve projects and ci/cd management focusing on MonoRepo and Jenkins pipelines.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Services deployment on Openshift and AWS lately.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>ESB development with Apache CAMEL.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Multi-threading optimisation for large datas set API processing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 my-12 pb-12">
          <div class="pb-12">
            <div class="max-w-4xl mx-auto">
              <!-- Article content -->
              <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
                <figure class="mb-8 md:float-right md:max-w-sm md:ml-8 lg:max-w-none lg:-mr-32">
                  <img
                    class="mx-auto"
                    src="/olympe.jpg"
                    alt="olympe"
                    :width="600"
                    :height="320"
                  >
                </figure>
                <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
                  Olympe
                </h3>
                <ul
                  class="
                    max-w-sm
                    sm:max-w-md
                    mx-auto
                    md:max-w-none
                    text-gray-600
                    dark:text-gray-400
                    mt-8
                    -mb-2
                  "
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Prototyping voice driven application.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Tests training IA for speech recognition with Deepspeech project (Mozilla).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Data cleaning for IA training to create corpus of voice and translation.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Learning IA tests on AWS compute engine (128 core GPU).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Benchmark response time for speech to text and Elastic search request.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 my-12 pb-12">
          <div class="pb-6">
            <div class="max-w-4xl mx-auto">
              <!-- Article content -->
              <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="300">
                <figure class="mb-8 md:float-left md:max-w-sm md:mr-8 lg:max-w-none lg:-ml-32">
                  <img
                    class="mx-auto"
                    src="/ci5.jpg"
                    alt="ci5"
                    :width="600"
                    :height="220"
                  >
                </figure>
                <h3 class="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
                  Ci5
                </h3>
                <ul
                  class="
                    max-w-sm
                    sm:max-w-md
                    mx-auto
                    md:max-w-none
                    text-gray-600
                    dark:text-gray-400
                    mt-4
                    -mb-2
                  "
                  data-aos="fade-down"
                  data-aos-delay="450"
                >
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Services deployment on AWS (own Kubernetes and lately EKS).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>ScrumMaster of the CORE team ( 7 persons).</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Back-End: Spring Boot Microservices, Hibernate, Odata, PostgreSQL, Flyway, Sonar.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>Front-End: AngularJS, TypeScript, VScode.</span>
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <span>CI/CD: GitLab, Kubernetes, Helm, Docker.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesHome'
}
</script>
