import { defineStore } from "pinia";
import { ref } from "vue";
import type { Booking } from "@/types/booking";

export const useBookingStore = defineStore('booking', () => {
  const listBookedMovie = ref<Booking[]>([])
  const bookedMovieSeats = ref<string[]>([])

  function bookMovie(imdbId: string, title: string, poster: string, seat: string[]) {
    let booking: Booking = {
      imdbID: imdbId,
      Title: title,
      Poster: poster,
      Seat: seat
    }

    listBookedMovie.value?.push(booking)
  }

  function getBookedSeats(imdbId: string) {
    bookedMovieSeats.value = listBookedMovie.value
      .filter(movie => movie.imdbID === imdbId)
      .map(movie => movie.Seat)
      .reduce((acc, seats) => acc.concat(seats), []);
  }

  return {
    listBookedMovie,
    bookMovie,
    bookedMovieSeats,
    getBookedSeats
  }
})
