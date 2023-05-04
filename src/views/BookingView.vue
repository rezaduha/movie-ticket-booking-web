<template>
  <div class="screen">
    <img src="@/assets/image/screen.svg">
  </div>
  <div class="seat">
    <div class="seat__item" v-for="seat in seats">
      <input type="checkbox" :name="seat" :id="seat" :value="seat" v-model="checkedSeat">
      <label :for="seat">{{ seat }}</label>
    </div>
  </div>
  <div class="seat__description">
    <span class="seat__description-available">Available</span>
    <span class="seat__description-booked">Booked</span>
    <span class="seat__description-selected">Selected</span>
  </div>
  <LimitMessage v-if="checkedSeat.length > selectSeatAmount" class="error-limit" />
  <div class="action-bar">
    <select v-model="selectSeatAmount">
      <option v-for="i in 5" :value="i" :selected="i === 1">{{ i }}</option>
    </select>
    <BaseButton
      class="select-button" 
      label="Select"
      @onClick="handleBook()"
      :disabled="checkedSeat.length !== selectSeatAmount"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMovieStore } from '@/stores/movie';
import { useBookingStore } from '@/stores/booking';
import { storeToRefs } from 'pinia';

import BaseButton from '@/components/BaseButton.vue';
import LimitMessage from '@/components/LimitMessage.vue'


const route = useRoute()
const router = useRouter()

const seats = [
  'A1', 'A2', 'A3', 'A4', 'A5',
  'B1', 'B2', 'B3', 'B4', 'B5',
  'C1', 'C2', 'C3', 'C4', 'C5',
]
const checkedSeat = ref([])
const selectSeatAmount = ref(1)

const movieStore = useMovieStore()
const bookingStore = useBookingStore()
const { fetchDetailMovie } = movieStore
const { bookMovie } = bookingStore

const { detailMovie } = storeToRefs(movieStore)
const imdbID = route.params.id.toString()

function handleBook() {
  if (detailMovie.value) {
    bookMovie(
      detailMovie.value.imdbID,
      detailMovie.value.Title,
      detailMovie.value.Poster,
      checkedSeat.value
    )

    router.push('/history')
  }
}

watch(() => selectSeatAmount.value, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    checkedSeat.value = []
  }
})

onMounted(() => {
  fetchDetailMovie(imdbID)
})
</script>

<style lang="scss" scoped>
.screen {
  text-align: center;
  color: #ffffff;
  
  img {
    width: 72%;
    filter: drop-shadow(0px 8px 8px #f8c300);
  }
}

.seat {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 48px;
  gap: 8px;

  &__item {
    position: relative;
    margin: 18px;

    input {
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      appearance: none;
      background-color: #363740;
      border-radius: 6px;
      transition: all 0.1s ease-in;
    }

    input:checked {
      background-color: #f8c300;

      & + label {
        color: #000000;
      }
    }

    input:disabled {
      background-color: #999999;
    }

    label {
      font-size: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__description {
    display: flex;
    justify-content: space-evenly;
    font-size: 10px;
    color: #888888;
    margin-bottom: 24px;

    &-selected::before,
    &-booked::before,
    &-available::before {
      content: "";
      display: inline-block;
      margin-right: 4px;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      vertical-align: sub;
    }

    &-available::before {
      background-color: #363740;
    }

    &-booked::before {
      background-color: #999999;
    }

    &-selected::before {
      background-color: #f8c300;
    }
  }
}

.error-limit {
  margin-bottom: 72px;
}

.action-bar {
  gap: 16px;

  select {
    appearance: none;
    padding: 0 16px 0 4px;
    color: white;
    background-color: transparent;
    border: 2px solid #f17707;
    border-radius: 6px;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='white' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.25rem center;
    background-size: 8px 10px;

    option {
      background-color: #363740;
    }
  }

  .select-button {
    flex: 1;
  }
}
</style>
