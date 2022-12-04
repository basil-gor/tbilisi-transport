<template>
  <RoutesTable :routes="allRoutes"></RoutesTable>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import RoutesTable from "@/components/RoutesTable.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";

const { allRoutes } = storeToRefs(useTransportRoutesStore());
</script>
