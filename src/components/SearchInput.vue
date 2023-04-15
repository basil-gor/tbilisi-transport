<template>
  <input
    class="button"
    type="text"
    v-model="inputModel"
    :placeholder="placeholder ?? 'Search'"
  />
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  value: string;
  placeholder: string;
}>();
const emit = defineEmits(["update:value"]);

const inputModel = useVModel(props, "value", emit);
</script>

<style scoped>
.search-input {
  color: #0aa0c9;
}

.button {
  color: var(--color-heading);
  border: 1px solid #0aa0c9;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 16px;
  background: transparent;
  /*  filter: drop-shadow(0 0 5px #0aa0c9) drop-shadow(0 0 5px #0aa0c9) contrast(2)
          brightness(2);*/
  /*filter: drop-shadow(0 0 5px #0aa0c9) contrast(2) brightness(2) opacity(0.5);*/
  box-shadow: 0px 0px 5px 1px #0aa0c980;
  transition: 0.5s;
  margin: 10px 0px 15px;
}

.button:hover,
.button:focus {
  /*filter: drop-shadow(0 0 5px #0aa0c9) contrast(2) brightness(2);*/
  box-shadow: 0px 0px 5px 2px #0aa0c9;
  outline: none;
}
</style>
