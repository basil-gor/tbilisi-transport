<template>
  <div v-for="route in infoRoutes" :key="route.Id">
    {{ route.RouteNumber }}: {{ route.StopA }} - {{ route.StopB }}
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { RouteInfo } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";

const infoRoutes = ref<RouteInfo[]>([]);
ArrivingApi.getAllRoutes().then((value) => (infoRoutes.value = value));
</script>
