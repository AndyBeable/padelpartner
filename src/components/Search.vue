<template>
  <div class="mx-auto max-w-4xl py-40">
    <div>
      <h1 class="text-4xl font-bold text-center">Find a court now</h1>
    </div>
    <div class="relative mt-2 flex items-center">
      <input type="text" name="search" id="search"
        class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      <button type="button"
        class="relative -ml-px inline-flex items-center gap-x-1.5  border-l-0 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <BarsArrowUpIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Sort
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BarsArrowUpIcon } from '@heroicons/vue/24/solid'

</script>
