<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 h-256 mb-64 box-content">
      <HeroHomeSVG />
      <div
        class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
        aria-hidden="true"
      />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div class="pt-16 pb-10 md:pt-20 md:pb-16">
        <!-- Hero content -->
        <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
          <!-- Content -->
          <div class="md:col-span-8 lg:col-span-8 text-center md:text-left">
            <img
              class="rounded-full mx-auto md:mx-0"
              format="webp"
              src="/me.jpeg"
              alt="Rémy Ranger"
              :width="300"
              :height="300"
            >
          </div>
          <div
            class="md:col-span-8 lg:col-span-8 text-center md:text-left"
          >
            <h1
              class="h2 lg:text-5xl mb-4 font-red-hat-display font-extrabold"
              data-aos="fade-down"
            >
              I'm Rémy ✌️
            </h1>
            <p
              class="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Fullstack Software Engineer
            </p>
            <!-- Social links -->
            <div class="inline-flex mt-4 md:order-2">
              <a class="mr-4 h-16 w-16 flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="https://www.linkedin.com/in/r%C3%A9my-ranger-94b81a134/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style="display: inline-block;"
                >
                  <title>LinkedIn</title>
                  <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
              <a class="h-16 w-16 flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="https://github.com/RemyRanger">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style="display: inline-block;"
                >
                  <title>Github</title>
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-10 pb-12 md:pb-20">
        <div
          class="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3 text-center"
          data-aos-id-stats
        >
          <!-- 1 item -->
          <div
            class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-stats]"
          >
            <div
              class="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1"
              style="text-align: -webkit-center"
            >
              <img
                class="mb-2 mx-auto"
                format="svg"
                src="/frontend.svg"
                alt="frontend dev"
                :width="180"
              >
            </div>
            <div
              class="font-red-hat-display text-2xl md:text-2xl tracking-tighter mb-1 mt-4"
            >
              Frontend
            </div>
          </div>
          <!-- 2 item -->
          <div
            class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-stats]"
            data-aos-delay="100"
          >
            <div
              class="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1"
              style="text-align: -webkit-center"
            >
              <img
                class="mb-2 mx-auto"
                format="svg"
                src="/backend.svg"
                alt="backend dev"
                :width="180"
              >
            </div>
            <div
              class="font-red-hat-display text-2xl md:text-2xl tracking-tighter mb-1 mt-4"
            >
              Backend
            </div>
          </div>
          <!-- 3 item -->
          <div
            class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-stats]"
            data-aos-delay="200"
          >
            <div
              class="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1"
              style="text-align: -webkit-center"
            >
              <img
                class="mb-2 mx-auto"
                format="svg"
                src="/process.svg"
                alt="process"
                :width="180"
              >
            </div>
            <div
              class="font-red-hat-display text-2xl md:text-2xl tracking-tighter mb-1 mt-4"
            >
              Workflow
            </div>
          </div>
          <!-- 4 item -->
          <div
            class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-stats]"
            data-aos-delay="300"
          >
            <div
              class="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1"
              style="text-align: -webkit-center"
            >
              <img
                class="mb-2 mx-auto"
                format="svg"
                src="/security.svg"
                alt="security"
                :width="180"
              >
            </div>
            <div
              class="font-red-hat-display text-2xl md:text-2xl tracking-tighter mb-1 mt-4"
            >
              Security
            </div>
          </div>
          <!-- 5 item -->
          <div
            class="bg-white dark:bg-gray-800 py-4 px-1 shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-stats]"
            data-aos-delay="400"
          >
            <div
              class="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1"
              style="text-align: -webkit-center"
            >
              <img
                class="mb-2 mx-auto"
                format="svg"
                src="/team.svg"
                alt="team leader"
                :width="180"
              >
            </div>
            <div
              class="font-red-hat-display text-2xl md:text-2xl tracking-tighter mb-1 mt-4"
            >
              Team leader
            </div>
          </div>
          <!-- 6 item -->
          <div
            class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-stats]"
            data-aos-delay="500"
          >
            <div
              class="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1"
              style="text-align: -webkit-center"
            >
              <img
                class="mb-2 mx-auto"
                format="svg"
                src="/creative.svg"
                alt="creative mind"
                :width="180"
              >
            </div>
            <div
              class="font-red-hat-display text-2xl md:text-2xl tracking-tighter mb-1 mt-4"
            >
              Creative Minded
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroHomeSVG from '@/components/home/HeroHomeSVG.vue'

export default {
  name: 'HeroHome',
  components: {
    HeroHomeSVG
  }
}
</script>
