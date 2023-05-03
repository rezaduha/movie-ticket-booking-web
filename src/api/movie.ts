import axiosInstance from "@/utils/axiosInstance"
import type { Movies } from "@/types/movies"
import type { Movie } from "@/types/movie"

export const getListMovie = async (): Promise<Movies> => {
  const response = await axiosInstance.get<Movies>('/?s=movie')
  return response.data
}

export const getMovieById = async (imdbId: string): Promise<Movie> => {
  const response = await axiosInstance.get<Movie>(`/?i=${imdbId}`)
  return response.data
}
