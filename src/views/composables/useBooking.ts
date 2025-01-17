import { ref } from 'vue';
import { supabase } from '../../lib/supabaseClient.js';

export const useBooking = () => {
  const bookingError = ref<string | null>(null);
  const bookingSuccess = ref(false);

  const bookCourt = async (customerId: number, courtId: number, venueId: number, bookingDate: string, startTime: string, duration: string) => {
    bookingError.value = null;
    bookingSuccess.value = false;

    const { data } = await supabase.from('booking').insert({
      customer_id: customerId,
      court_id: courtId,
      venue_id: venueId,
      booking_date: bookingDate,
      start_time: startTime,
      duration: duration
    }).select();

    return data || [];
  };

  return {
    bookingError,
    bookingSuccess,
    bookCourt
  };
};

