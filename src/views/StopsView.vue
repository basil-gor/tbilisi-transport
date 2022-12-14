<template>
  <SearchInput
    v-model:value="stopSearchName"
    placeholder="Find stop"
  ></SearchInput>
  <StopsTable :stops="filteredStops"></StopsTable>
</template>

<script setup lang="ts">
import { useTransportStopsStore } from "@/stores/transport-stops";
import { storeToRefs } from "pinia";
import StopsTable from "@/components/StopsTable.vue";
import { computed, ref } from "vue";
import SearchInput from "@/components/SearchInput.vue";

const { allStops } = storeToRefs(useTransportStopsStore());

const stopSearchName = ref("");
const filteredStops = computed(() =>
  allStops.value.filter(
    (stop) =>
      stop.code.toLowerCase().includes(stopSearchName.value.toLowerCase()) ||
      stop.name.toLowerCase().includes(stopSearchName.value.toLowerCase())
  )
);
</script>
