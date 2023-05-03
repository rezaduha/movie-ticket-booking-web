import { defineStore } from "pinia";
import { ref } from "vue";
import type { Movie } from "@/types/movie";
import { getListMovie } from "@/api/movie";

export const useMovieStore = defineStore('movie', () => {
  const listMovie = ref<Movie[]>()

  async function fetchListMovie() {
    await getListMovie()
      .then(response => {
        listMovie.value = response.Search
      })
      .catch(error => {
        console.log(error);
      })
  }

  return {
    listMovie,
    fetchListMovie
  }
})