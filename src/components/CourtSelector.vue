<template>
  <h2 class="text-lg font-semibold mb-4">Available Courts</h2>
  <div v-if="courts.length > 0 && selectedDate" class="flex flex-col gap-4">
    <div v-for="court in sortedCourts" :key="court.court_id" class="bg-white p-4 rounded-lg shadow">
      <p class="font-medium">Court {{ court.court_number }}</p>
      <div v-if="getAvailableSlots(court.court_id).length > 0" class="flex flex-wrap gap-2">
        <button v-for="slot in getAvailableSlots(court.court_id)" :key="slot" @click="book(court.court_id, slot)"
          class="mt-2 bg-sky-500 text-white px-4 py-2 rounded">
          {{ slot }}
        </button>
      </div>
      <div v-else class="mt-2 text-gray-500">
        No available slots for this court today.
      </div>
    </div>
  </div>
  <div v-else class="mt-4 text-gray-500">
    Select a date to see available courts.
  </div>

  <!-- <Modal :open="modalOpen" @close="modalOpen = false" /> -->
</template>


<script lang="ts" setup>
import { defineProps, ref, watch, computed } from 'vue';
import { supabase } from '../lib/supabaseClient.js';
import Court from '../views/VenueDetailsView.vue';
import { useBooking } from '../views/composables/useBooking';

const props = defineProps({
  courts: {
    type: Array<typeof Court>,
    required: true
  },
  selectedDate: {
    type: String,
    required: true
  },
  venueId: {
    type: Number,
    required: true
  }
});

const bookings = ref<any[]>([]);

const getAvailableSlots = (courtId: number) => {
  const court = props.courts.find(court => court.court_id === courtId);
  const availableSlots = court?.available_time_slots || [];
  const courtBookings = bookings.value.filter(booking => booking.court_id === courtId);

  const filteredSlots = availableSlots.filter((time: string) => !courtBookings.some(booking => booking.start_time === time));

  return filteredSlots;
}

const sortedCourts = computed(() => {
  return [...props.courts].sort((a, b) => a.court_number - b.court_number);
});

const { bookCourt } = useBooking();

const book = async (courtId: number, selectedSlot: string) => {
  if (!props.selectedDate) return;

  const result = await bookCourt(1, courtId, props.venueId, props.selectedDate, selectedSlot, '60');

  bookings.value.push(...result);
};

watch(() => props.selectedDate, async (newDate) => {
  const response = await supabase.from('booking').select('*').eq('venue_id', props.venueId).eq('booking_date', newDate);

  bookings.value = response.data || [];
});
</script>
