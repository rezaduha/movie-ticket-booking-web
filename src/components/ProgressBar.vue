<template>
  <div class="progress-bar">
    <div class="progress-bar__progress"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.progress-bar {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  &__progress {
    border: 4px solid #eeeeee; 
    border-top: 4px solid #3498db; 
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 1.8s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>