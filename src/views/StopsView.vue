<template>
  <StopsTable v-if="allStops.length !== 0" :stops="allStops"></StopsTable>
</template>

<script setup lang="ts">
import { useTransportStore } from "@/stores/transport";
import { storeToRefs } from "pinia";
import StopsTable from "@/components/StopsTable.vue";

const { allStops } = storeToRefs(useTransportStore());
</script>
