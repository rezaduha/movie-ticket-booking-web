<template>
  <div class="greet-container">
    <div class="greet">
      <span class="greet__welcome">
        Welcome Folks 👋
      </span>
      <span class="greet__message">Let's relax and watch a movie !</span>
    </div>
  </div>
  <div class="movie-container">
    <MovieCard
      v-for="item in listMovie" 
      :title="item.Title"
      :poster="item.Poster"
      @onClick="goToDetail(item.imdbID)"
    />
  </div>
  <div class="action-bar">
    <BaseButton label="History" @onClick="goToHistory()" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useMovieStore } from '@/stores/movie';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import BaseButton from '@/components/BaseButton.vue';
import MovieCard from '@/components/MovieCard.vue';


const router = useRouter()
const movieStore = useMovieStore()
const { fetchListMovie } = movieStore
const { listMovie } = storeToRefs(movieStore)

function goToDetail(imdbId: string) {
  router.push(`/movie/${imdbId}`)
}

function goToHistory() {
  router.push('/history')
}

onMounted(() => {
  fetchListMovie()
})
</script>

<style scoped lang="scss">
.greet-container {
  padding: 24px 16px;

  .greet {
    display: flex;
    flex-direction: column;

    &__welcome {
      font-size: 12px;
      font-weight: 200;
    }

    &__message {
      font-size: 14px;
      font-weight: 500;
    }
  }
}

.movie-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 16px;
  padding: 16px;
  margin-bottom: 72px;

  .movie-item {
    cursor: pointer;

    &__poster {
      height: 164px;
      width: 100%;
      object-fit: cover;
      border-radius: 16px;
      margin-bottom: 2px;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.04);
      }
    }

    &__title {
      font-size: 10px;
      font-weight: 700;
      white-space: nowrap; 
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
  }
}
</style>
