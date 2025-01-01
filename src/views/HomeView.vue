<template>
  <main>
    <div class="relative">
      <div class="lg:hidden">
        <img class="w-full h-[300px] object-cover"
          src="https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mobile Image" />
      </div>

      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-2 sm:py-2 lg:px-8 lg:py-56 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 class="text-4xl font-bold tracking-tight sm:text-6xl first-letter:text-sky-600">
                Padel<span class="text-sky-600">P</span>artner - book courts, find
                players and more...
              </h1>
              <div class="mt-10 flex items-center gap-x-6">
                <Button class="">Book a court</Button>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Desktop Image" />
      </div>
    </div>
    <Search />
  </main>
</template>

<script setup lang="ts">
import Button from '@/components/base/Button.vue'
import Search from '@/components/Search.vue'

</script>
