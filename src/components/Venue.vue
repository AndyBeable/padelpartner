<template>
  <article class="mx-4 shadow-md">
    <div class="relative w-full">
      <img :src="`${venue.image_url}`" alt="" class="w-full rounded-md bg-gray-100 object-cover" />
    </div>
    <div class="max-w-xl p-6">
      <div class="group relative">
        <router-link :to="{ name: 'venue-details', params: { venue_id: venue.venue_id } }">
          {{ venue.name }}
        </router-link>
      </div>
      <div class="relative mt-8 gap-x-4">
        <div class="text-lg flex flex-col">
          <div class="flex">
            <div class="mb-2">
              <MapPinIcon class="size-6 text-sky-600" />
            </div>
            <p class="mb-2 text-gray-600">{{ venue.street }}, {{ venue.postcode }}</p>
          </div>
          <div>
            <p class="mb-2 text-gray-600">{{ venue.phone }}</p>
          </div>
          <Button @click.prevent="book">Book a court</Button>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { supabase } from '../lib/supabaseClient.js'
import { defineProps } from 'vue'
import { MapPinIcon } from '@heroicons/vue/24/solid'
import Button from '@/components/base/Button.vue'

const props = defineProps({
  venue: {
    type: Object,
    required: true
  }
})

const book = async () => {
  const { error } = await supabase.from('booking').insert({ customer_id: 1, court_id: 3, venue_id: 2, booking_date: '2024-09-20', start_time: '10:00:00', duration: 60 })

  if (error) {
    console.error('Error inserting booking:', error);
  } else {
    console.log('Booking successful!');
  }
}
</script>

<style></style>
