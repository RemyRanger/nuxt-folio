<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <!-- Page content -->
    <main class="grow">
      <!-- Content -->
      <section class="relative">
        <div class="max-w-8xl mx-auto px-4 sm:px-6">
          <div class="pt-4 pb-20">
            <!-- Page header -->
            <div class="text-center pb-12 md:pb-20">
              <div class="inline-flex font-medium text-teal-400 pb-3">
                {{ $t('changelog-intro') }}
              </div>
              <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                {{ $t('changelog-title') }}
              </h1>
            </div>

            <!-- Content -->
            <div class="max-w-4xl mx-auto">
              <div class="relative">
                <div class="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.teal.500/.65)_25%,_theme(colors.teal.200)_50%,_theme(colors.teal.500/.65)_75%,_transparent)] after:animate-shine" aria-hidden="true" />
                <!-- Post -->
                <article class="pt-12 first-of-type:pt-0 group">
                  <div class="md:flex">
                    <div class="w-48 shrink-0">
                      <time class="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500 before:ring-4 before:ring-teal-500/30 mb-3">
                        <span class="ml-[1.625rem] md:ml-5">{{ $t('changelog-section-4-date') }}</span>
                      </time>
                    </div>
                    <div class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                      <header>
                        <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                          {{ $t('changelog-section-4-title') }}
                        </h2>
                      </header>
                      <figure class="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        <img class="w-full rounded-[inherit]" src="/dawex_logo.png" width="574" height="326" alt="Changelog 01">
                      </figure>
                      <div class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                        <p>{{ $t('changelog-section-4-description') }}</p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('project-management') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-4-project-management') }}
                          </span>
                        </p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('technical-stack') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-4-technical-stack') }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Post -->
                <article class="pt-12 first-of-type:pt-0 group">
                  <div class="md:flex">
                    <div class="w-48 shrink-0">
                      <time class="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500 before:ring-4 before:ring-teal-500/30 mb-3">
                        <span class="ml-[1.625rem] md:ml-5">{{ $t('changelog-section-3-date') }}</span>
                      </time>
                    </div>
                    <div class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                      <header>
                        <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                          {{ $t('changelog-section-3-title') }}
                        </h2>
                      </header>
                      <figure class="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8 flex justify-center items-center">
                        <img class="rounded-[inherit]" src="/cdv_logo.jpeg" width="220" height="180" alt="Changelog 02">
                      </figure>
                      <div class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                        <p>{{ $t('changelog-section-3-description') }}</p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('project-management') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-3-project-management') }}
                          </span>
                        </p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('technical-stack') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-3-technical-stack') }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Post -->
                <article class="pt-12 first-of-type:pt-0 group">
                  <div class="md:flex">
                    <div class="w-48 shrink-0">
                      <time class="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500 before:ring-4 before:ring-teal-500/30 mb-3">
                        <span class="ml-[1.625rem] md:ml-5">{{ $t('changelog-section-2-date') }}</span>
                      </time>
                    </div>
                    <div class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                      <header>
                        <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                          {{ $t('changelog-section-2-title') }}
                        </h2>
                      </header>
                      <figure class="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        <img class="w-full rounded-[inherit]" src="/thales_logo.png" width="574" height="326" alt="Changelog 01">
                      </figure>
                      <div class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                        <p>{{ $t('changelog-section-2-description') }}</p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('project-management') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-2-project-management') }}
                          </span>
                        </p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('technical-stack') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-2-technical-stack') }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Post -->
                <article class="pt-12 first-of-type:pt-0 group">
                  <div class="md:flex">
                    <div class="w-48 shrink-0">
                      <time class="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500 before:ring-4 before:ring-teal-500/30 mb-3">
                        <span class="ml-[1.625rem] md:ml-5">{{ $t('changelog-section-1-date') }}</span>
                      </time>
                    </div>
                    <div class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                      <header>
                        <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                          {{ $t('changelog-section-1-title') }}
                        </h2>
                      </header>
                      <figure class="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        <img class="w-full rounded-[inherit]" src="/thales_logo.png" width="574" height="326" alt="Changelog 01">
                      </figure>
                      <div class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                        <p>{{ $t('changelog-section-1-description') }}</p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('project-management') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-1-project-management') }}
                          </span>
                        </p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('technical-stack') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-1-technical-stack') }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Post -->
                <article class="pt-12 first-of-type:pt-0 group">
                  <div class="md:flex">
                    <div class="w-48 shrink-0">
                      <time class="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500 before:ring-4 before:ring-teal-500/30 mb-3">
                        <span class="ml-[1.625rem] md:ml-5">{{ $t('changelog-section-0-date') }}</span>
                      </time>
                    </div>
                    <div class="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                      <header>
                        <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
                          {{ $t('changelog-section-0-title') }}
                        </h2>
                      </header>
                      <figure class="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        <img class="w-full rounded-[inherit]" src="/atos_logo.png" width="574" height="326" alt="Changelog 01">
                      </figure>
                      <div class="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-teal-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                        <p>{{ $t('changelog-section-0-description') }}</p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('project-management') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-0-project-management') }}
                          </span>
                        </p>
                        <p>
                          <span class="font-medium text-gray-200">
                            {{ $t('technical-stack') }} :
                          </span>
                          <span class="text-slate-400">
                            {{ $t('changelog-section-0-technical-stack') }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Changelog'
}
</script>
