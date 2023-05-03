import { defineStore } from "pinia";
import { ref } from "vue";
import type { Movie } from "@/types/movie";
import { getListMovie, getMovieById } from "@/api/movie";

export const useMovieStore = defineStore('movie', () => {
  const onProgress = ref(false)
  const listMovie = ref<Movie[]>()
  const detailMovie = ref<Movie>()

  async function fetchListMovie() {
    onProgress.value = true
    await getListMovie()
      .then(response => {
        listMovie.value = response.Search
        onProgress.value = false
      })
      .catch(error => {
        console.log(error);
      })
  }

  async function fetchDetailMovie(imdbId: string) {
    onProgress.value = true
    await getMovieById(imdbId)
      .then(response => {
        detailMovie.value = response
        onProgress.value = false
      })
      .catch(error => {
        console.log(error);
      })
  }

  return {
    onProgress,
    listMovie,
    detailMovie,
    fetchListMovie,
    fetchDetailMovie
  }
})