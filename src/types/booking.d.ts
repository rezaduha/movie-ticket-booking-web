import type { Movie } from "./movie";

export interface Booking extends Movie {
  Seat: string[]
}
