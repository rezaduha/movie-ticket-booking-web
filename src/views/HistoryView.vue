<template>
  <div class="history-container">
    <MovieCard
      v-for="i in 5"
      :title="`Movie ${i}`"
      poster="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
      isFull>
      <template #seat>
        <p class="movie__content-seat">
          Seats : <span v-for="seat in 3">A{{ seat }}</span>
        </p>
      </template>
    </MovieCard>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue';
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
