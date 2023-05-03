<template>
  <button class="go-back-button" @click="emitOnClick">
    <img class="icon__chevron-left" src="@/assets/image/icon-chevron-left.svg">
  </button>
  <h2 class="page-title">{{ title }}</h2>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
});

const emits = defineEmits(['onClick']);

function emitOnClick() {
  emits('onClick');
}
</script>

<style scoped lang="scss">
.go-back-button {
  background-color: transparent;
}

.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 700;
}
</style>