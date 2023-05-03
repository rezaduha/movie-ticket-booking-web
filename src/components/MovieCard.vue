<template>
  <div :class="`movie-item ${isFull ? 'inline' : ''}`" @click="emitOnClick">
    <img class="movie-item__poster" :src="poster">
    <div class="attribute">
      <h2 class="movie-item__title">{{ title }}</h2>
      <slot v-if="isFull" name="seat"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true,
  },
  isFull: {
    type: Boolean,
    required: false
  },
});

const emits = defineEmits(['onClick']);

function emitOnClick() {
  emits('onClick');
}
</script>

<style scoped lang="scss">
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

.movie-item.inline {
  cursor: default;
}

.movie-item.inline {
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
}
</style>
