<template>
  <div class="container mx-auto min-h-lvh flex flex-col items-center lg:flex-row lg:justify-around mb-6">
    <div v-for="venue in venues" :key="venue.id" class="w-full lg:w-auto">
      <Venue :venue="venue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import Venue from './Venue.vue'

const venues = ref([])

async function getVenues() {
  const { data } = await supabase.from('venue').select()
  venues.value = data
}

onMounted(() => {
  getVenues()
})
</script>

<style></style>
