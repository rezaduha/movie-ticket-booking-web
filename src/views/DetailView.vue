<template>
  <div class="movie-container">
    <div class="movie-content">
      <img class="movie-content__poster" :src="detailMovie?.Poster" alt="">
      <div class="poster-overlay"></div>
      <div class="movie-content-body">
        <p class="movie-content__rating">
          <span>IMDB {{ detailMovie?.imdbRating }}</span>
          <span>{{ detailMovie?.imdbVotes }} votes</span>
        </p>
        <h3 class="movie-content__title">{{ detailMovie?.Title }}</h3>
        <p class="movie-content__description">
          {{ detailMovie?.Plot }}
        </p>
      </div>
    </div>
  </div>
  <div class="action-bar">
    <BaseButton label="Book" @onClick="goToBooking()" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMovieStore } from '@/stores/movie';
import { storeToRefs } from 'pinia';

import BaseButton from '@/components/BaseButton.vue';


const route = useRoute()
const router = useRouter()

const movieStore = useMovieStore()
const { fetchDetailMovie } = movieStore
const { detailMovie } = storeToRefs(movieStore)
const imdbID = route.params.id.toString()

function goToBooking() {
  router.push(`/movie/${imdbID}/booking`)
}

onMounted(() => {
  fetchDetailMovie(imdbID)
})
</script>

<style lang="scss" scoped>
.movie-content {
  width: 100%;
  position: absolute;
  top: 0;

  .poster-overlay {
    position: absolute;
    top: 0;
    height: 296px;
    width: 100%;
    background: linear-gradient(rgba(28, 28, 39, 0.8), rgba(0, 0, 0, 0), rgba(28, 28, 39, 0.4));
  }

  &-body {
    transform: translateY(-32px);
    padding: 16px 16px 48px;
    background-color: #1c1c27;
    border-radius: 24px 24px 0 0;
    height: 100%;
  }

  &__poster {
    position: relative;
    width: 100%;
    height: 296px;
    object-fit: cover;
  }

  &__rating {
    margin-bottom: 4px;
    
    span:first-of-type {
      font-size: 12px;
      color: black;
      font-weight: 500;
      background-color: #f8c300;
      border-radius: 50px;
      padding: 0 4px;
      margin-right: 8px;
    }

    span:last-of-type {
      font-size: 10px;
      color: #888888;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 700;

    &::after {
      content: "";
      display: block;
      width: 100%;
      border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
      border-radius: 100%;
      margin: 8px 0 16px 0;
    }
  }

  &__description {
    font-size: 12px;
    font-weight: 300;

    &::before {
      content: "Synopsis";
      display: block;
      font-weight: 600;
      margin-bottom: 8px;
    }

  }
}
</style>
