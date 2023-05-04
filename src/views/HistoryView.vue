<template>
  <EmptyMessage v-if="listBookedMovie.length === 0"  />
  <div class="history-container">
    <MovieCard
      v-for="movie in listBookedMovie"
      :title="movie.Title"
      :poster="movie.Poster"
      isFull>
      <template #seat>
        <p class="movie__content-seat">
          Seats : <span v-for="seat in movie.Seat">{{ seat }}</span>
        </p>
      </template>
    </MovieCard>
  </div>
</template>

<script setup lang="ts">
import { useBookingStore } from '@/stores/booking';
import { storeToRefs } from 'pinia';

import MovieCard from '@/components/MovieCard.vue';
import EmptyMessage from '@/components/EmptyMessage.vue'


const bookingStore = useBookingStore()
const { listBookedMovie } = storeToRefs(bookingStore)
</script>

<style scoped lang="scss">
.history-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
}

.movie__content-seat {
  font-size: 10px;

  span {
    &::after {
      content: ", ";
    }

    &:last-of-type::after {
      content: ".";
    }
  }
}
</style>
