<template>
  <h2>Stops:</h2>
  <StopsTable :stops="favoritesStops"></StopsTable>
  <br />
  <br />
  <h2>Routes:</h2>
  <RoutesTable :routes="favoritesRoutes"></RoutesTable>
</template>

<script setup lang="ts">
import { useTransportStopsStore } from "@/stores/transport-stops";
import { storeToRefs } from "pinia";
import StopsTable from "@/components/StopsTable.vue";
import RoutesTable from "@/components/RoutesTable.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";

const { favoritesStops } = storeToRefs(useTransportStopsStore());
const { favoritesRoutes } = storeToRefs(useTransportRoutesStore());
</script>
