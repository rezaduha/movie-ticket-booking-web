<template>
  <div class="history-container">
    <div v-for="i in 10" class="movie-item-list">
      <img class="movie-item__poster" src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg" alt="">
      <div class="attribute">
        <h2 class="movie-item__title">Movie {{ i }}</h2>
        <p class="movie__content-seat">
          Seats : <span>A1, A2, A3</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.history-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;

  .movie-item-list {
    cursor: default;
  }

  .movie-item-list {
    display: flex;
    gap: 16px;
    width: 100%;

    .movie-item {
      &__poster {
        width: 96px;
        height: 120px;
        object-fit: cover;
        border-radius: 12px;

        &:hover {
          transform: none;
        }
      }

      &__title {
        width: fit-content;
        font-size: 12px;
        font-weight: 700;
        margin: 12px 0  4px 0;
        white-space: normal;
        text-overflow: none;
      }
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
  }
}
</style>
