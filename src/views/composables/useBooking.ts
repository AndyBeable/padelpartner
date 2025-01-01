import { ref } from 'vue';
import { supabase } from '../../lib/supabaseClient.js';

export const useBooking = () => {
  const bookingError = ref<string | null>(null);
  const bookingSuccess = ref(false);

  const bookCourt = async (customerId: number, courtId: number, venueId: number, bookingDate: string, startTime: string, duration: string) => {
    bookingError.value = null; // Reset error state
    bookingSuccess.value = false; // Reset success state

    const { error } = await supabase.from('booking').insert({
      customer_id: customerId,
      court_id: courtId,
      venue_id: venueId,
      booking_date: bookingDate,
      start_time: startTime,
      duration: duration
    });

    if (error) {
      console.error('Error inserting booking:', error);
      bookingError.value = error.message; // Set error message
      return { success: false, error: error.message };
    } else {
      console.log('Booking successful!');
      bookingSuccess.value = true; // Set success state
      return { success: true };
    }
  };

  return {
    bookingError,
    bookingSuccess,
    bookCourt
  };
};

