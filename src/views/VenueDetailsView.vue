<template>
  <div v-if="venue" class="pb-10">
    <!-- Venue Header -->
    <div class="relative w-full h-[200px] bg-cover bg-center mb-10"
      :style="{ backgroundImage: `url(${venue.image_url})` }">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white px-8">
        <h1 class="text-4xl font-bold">{{ venue.name }}</h1>
        <p class="text-lg">Address: {{ venue.street }}, {{ venue.postcode }}</p>
        <p class="text-lg">Phone: {{ venue.phone_number }}</p>
      </div>
    </div>

    <!-- Club Description -->
    <div class="px-8 mt-4 max-w-5xl flex flex-col mx-auto">
      <h2 class="text-3xl font-bold mb-4">The Club</h2>
      <p>{{ venue.description }}</p>
    </div>

    <!-- Booking Section -->
    <div class="px-8 mt-4 max-w-5xl flex flex-col mx-auto">
      <div>
        <h2 class="text-3xl font-bold mb-4">Book a court</h2>
      </div>
      <div>
        <div class="mt-6 flex flex-col lg:flex-row justify-around">
          <!-- Date Selection -->
          <div class="md:max-w-full lg:w-1/2">
            <h2 class="text-lg font-semibold mb-4">Select Date</h2>
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" id="date" v-model="selectedDate"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
            </div>
          </div>

          <div class="min-w-60 max-w-80 flex flex-col">
            <CourtSelector v-if="venue?.court" :courts="venue?.court" :selectedDate="selectedDate || ''"
              :venueId="venue?.venue_id" />
          </div>

        </div>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto min-h-lvh flex flex-col items-center justify-center">
    Loading your venue...
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../lib/supabaseClient.js';
import CourtSelector from '@/components/CourtSelector.vue';

interface Court {
  court_id: number;
  court_number: number;
  venue_id: number;
  capacity: number;
}

const route = useRoute();
const venue_id = route.params.venue_id;
const venue = ref(null);
const selectedDate = ref<string | null>(null);

const fetchVenueData = async () => {
  const { data: venueData, error: venueError } = await supabase
    .from('venue')
    .select(`*, court(*)`)
    .eq('venue_id', venue_id)
    .single();

  if (venueError) {
    console.error('Error fetching venue:', venueError);
  } else {
    venue.value = venueData;
  }
};


onMounted(() => {
  fetchVenueData();
});
</script>

<style></style>
