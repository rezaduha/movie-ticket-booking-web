<template>
  <button class="base-button" @click="emitOnClick" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
  }
});

const emits = defineEmits(['onClick']);

function emitOnClick() {
  emits('onClick');
}
</script>

<style scoped lang="scss">
.base-button {
  color: white;
  font-weight: 600;
  background-color: #f17707;
  box-shadow: 0 2px 12px 2px rgba(241, 119, 7, 0.36);
  width: 68%;
  padding: 8px;
  border-radius: 50px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #bf5c00;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(129, 129, 129, 0.624);
    color: #363740;
    box-shadow: none;
  }
}
</style>
