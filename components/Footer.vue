<template>
  <footer class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between">
          <!-- Social links -->
          <ul class="flex mb-4 md:order-2 md:ml-4 md:mb-0">
            <li class="ml-4">
              <a class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="https://www.linkedin.com/in/rémy-ranger-94b81a134" aria-label="Linkedin">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </a>
            </li>
          </ul>

          <!-- Copyrights note -->
          <div class="text-gray-600 dark:text-gray-400 text-sm mr-4">
            &copy; {{ new Date().getFullYear() }} remy-ranger.raveon.fr, all rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
