<template>
  <h2 class="text-lg font-semibold mb-4">Available Courts</h2>
  <div v-if="courts.length > 0" class="flex flex-col gap-4">
    <div v-for="court in courts" :key="court.court_id" class="bg-white p-4 rounded-lg shadow">
      <p class="font-medium">Court {{ court.court_number }}</p>
      <div class="flex flex-wrap gap-2">
        <button v-for="slot in courtSlots[court.court_id]" :key="slot" @click="bookCourt(court.court_id, slot)"
          class="mt-2 bg-sky-500 text-white px-4 py-2 rounded">
          {{ slot }}
        </button>
      </div>
    </div>
  </div>
  <div v-if="!selectedDate" class="mt-4 text-gray-500">
    Select a date to see available courts.
  </div>
</template>


<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient.js';
import Court from '../views/VenueDetailsView.vue';

const props = defineProps({
  courts: {
    type: Array<typeof Court>,
    required: true
  },
  selectedDate: {
    type: String,
    required: true
  }
});

const courtSlots = ref<string[]>([]);

const emit = defineEmits(['courtBooked']);

const fetchAvailableTimeSlots = async (courtId: number) => {
  const { data, error } = await supabase
    .from('court')
    .select('*')
    .eq('court_id', courtId);

  if (error) {
    console.error('Error fetching available time slots:', error);
  } else {
    courtSlots.value[courtId] = data[0]?.available_time_slots || [];
  }
};

const bookCourt = (courtId: number, selectedSlot: string) => {
  emit('courtBooked', courtId, selectedSlot);
};

watch(() => props.selectedDate, (newDate) => {
  if (newDate) {
    courtSlots.value = [];

    props.courts.forEach(court => {
      fetchAvailableTimeSlots(court.court_id);
    });
  }
});


onMounted(() => {
  props.courts.forEach(court => {
    fetchAvailableTimeSlots(court.court_id);
  });
});

</script>
