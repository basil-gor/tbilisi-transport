<template>
  <button :class="['favorite-button', { 'favorite-button_full': isFull }]">
    ☆
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isFull: boolean;
}>();
</script>

<style scoped>
.favorite-button {
  color: #0aa0c9;
  font-size: inherit;
  position: relative;
  cursor: pointer;

  /* clear default button styles */
  background: none;
  outline: none;
  user-select: none;
  border: none;
  margin: 0;
  padding: 0;
}

.favorite-button:hover {
  transform: scale(1.05);
  text-shadow: 0 0 4px rgba(122, 111, 111, 0.9);
}

.favorite-button_full:before {
  text-shadow: 0 0 2px rgba(122, 111, 111, 0.7);
  color: #0aa0c9;
  content: "\2605"; /* Full star in UTF-8 */
  position: absolute;
  left: 0;
}
</style>
