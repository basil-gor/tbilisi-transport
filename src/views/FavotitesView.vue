<template>
  <h2>Stops:</h2>
  <StopsTable
    v-if="favoritesStops.length !== 0"
    :stops="favoritesStops"
  ></StopsTable>
  <div v-else>You have no favorites stops</div>
  <br />
  <br />
  <br />
  <h2>Routes:</h2>
  <RoutesTable
    v-if="favoritesRoutes.length !== 0"
    :routes="favoritesRoutes"
  ></RoutesTable>
  <div v-else>You have no favorites routes</div>
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
