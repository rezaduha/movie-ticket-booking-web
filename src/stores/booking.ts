import { defineStore } from "pinia";
import { ref } from "vue";
import type { Booking } from "@/types/booking";

export const useBookingStore = defineStore('booking', () => {
  const listBookedMovie = ref<Booking[]>([])

  function bookMovie(imdbId: string, title: string, poster: string, seat: string[]) {
    let booking: Booking = {
      imdbID: imdbId,
      Title: title,
      Poster: poster,
      Seat: seat
    }

    listBookedMovie.value?.push(booking)
  }

  return {
    listBookedMovie,
    bookMovie
  }
})
