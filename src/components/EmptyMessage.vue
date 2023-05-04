<template>
  <div class="empty-message">
    <h3 class="empty-message__title">Oops!</h3>
    <p class="empty-message__description">
      Your movie booking history is empty. Start booking your favorite movies and they will appear here for future reference.
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.empty-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 248px;

  &__title {
    color: #F8C300;
    margin-bottom: 4px;
    font-size: 16px;
  }

  &__description {
    color: #888888;
    font-size: 10px;
  }
}
</style>