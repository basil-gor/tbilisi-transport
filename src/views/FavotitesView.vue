<template>
  <h2>Stops:</h2>
  <StopsTable :stops="Array.from(favoritesStops)"></StopsTable>
  <br />
  <br />
  <h2>Routes:</h2>
  <RoutesTable :routes="Array.from(favoritesRoutes)"></RoutesTable>
</template>

<script setup lang="ts">
import { useTransportStore } from "@/stores/transport";
import { storeToRefs } from "pinia";
import StopsTable from "@/components/StopsTable.vue";
import RoutesTable from "@/components/RoutesTable.vue";

const { favoritesStops, favoritesRoutes } = storeToRefs(useTransportStore());
</script>
