<template>
  <div v-for="stop in allStops" :key="stop.id">
    {{ stop.id }}: {{ stop.name }}
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { StopResponse } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";

const allStops = ref<StopResponse[]>([]);
ArrivingApi.getAllStops().then((value) => (allStops.value = value));
</script>
