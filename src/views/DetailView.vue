<template>
  <div class="movie-container">
    <div class="movie-content">
      <img class="movie-content__poster" src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg" alt="">
      <div class="poster-overlay"></div>
      <div class="movie-content-body">
        <p class="movie-content__rating">
          <span>IMDB 7.7</span>
          <span>123,000 votes</span>
        </p>
        <h3 class="movie-content__title">Movie Title</h3>
        <p class="movie-content__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum eos, consectetur voluptates ad, recusandae, delectus inventore consequatur esse vitae aspernatur suscipit. Tenetur, culpa. Animi commodi excepturi reiciendis dolorum fugit est blanditiis autem tenetur labore! Exercitationem ipsa architecto placeat fugiat blanditiis illum nobis, eos tempora! Quia dolore hic est repudiandae!
        </p>
      </div>
    </div>
  </div>
  <div class="action-bar">
    <button class="base-button">
      Book
    </button>
  </div>
</template>

<script setup lang="ts">
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
