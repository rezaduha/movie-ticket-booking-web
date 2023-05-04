<template>
  <p class="limit-message">
    <span>Oops!</span> You have selected more seats than the select limit. Please review your selection or try to change your select amount.
  </p>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.limit-message {
  font-size: 10px;
  transition: opacity 1s ease;
  width: 72%;
  margin: auto;

  span {
    font-size: 12px;
    display: block;
    color: #ff0000;
    font-weight: 700;
    margin-bottom: 2px;
  }
}
</style>
