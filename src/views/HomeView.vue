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
    <div v-for="i in 10" class="movie-item">
      <img class="movie-item__poster" src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg" alt="">
      <div class="attribute">
        <h2 class="movie-item__title">Movie {{ i }}</h2>
      </div>
    </div>
  </div>
  <div class="action-bar">
    <button class="base-button">
      History
    </button>
  </div>
</template>

<script setup lang="ts">
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

.action-bar {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(to top, rgba(28, 28, 39, 0.9) 40%, rgba(0, 0, 0, 0));
  padding: 16px;
  width: 100%;
  z-index: 99;

  .base-button {
    color: white;
    font-weight: 600;
    background-color: #f17707;
    box-shadow: 0 2px 12px 2px rgba(241, 119, 7, 0.35);
    width: 68%;
    padding: 8px;
    border-radius: 50px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #bf5c00;
    }
  }
}

@media only screen and (min-width: 480px) {
  .action-bar {
    width: 320px;
    margin-bottom: 5vh;
    border-radius: 0 0 16px 16px;
  }
}
</style>
