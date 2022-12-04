<template>
  <RoutesTable :routes="allRoutes"></RoutesTable>
</template>

<script setup lang="ts">
import { useTransportStore } from "@/stores/transport";
import { storeToRefs } from "pinia";
import RoutesTable from "@/components/RoutesTable.vue";

const { allRoutes } = storeToRefs(useTransportStore());
</script>
