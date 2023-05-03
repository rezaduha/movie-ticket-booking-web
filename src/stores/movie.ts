import { defineStore } from "pinia";
import { ref } from "vue";
import type { Movie } from "@/types/movie";
import { getListMovie, getMovieById } from "@/api/movie";

export const useMovieStore = defineStore('movie', () => {
  const listMovie = ref<Movie[]>()
  const detailMovie = ref<Movie>()

  async function fetchListMovie() {
    await getListMovie()
      .then(response => {
        listMovie.value = response.Search
      })
      .catch(error => {
        console.log(error);
      })
  }

  async function fetchDetailMovie(imdbId: string) {
    await getMovieById(imdbId)
      .then(response => {
        detailMovie.value = response
      })
      .catch(error => {
        console.log(error);
      })
  }

  return {
    listMovie,
    detailMovie,
    fetchListMovie,
    fetchDetailMovie
  }
})