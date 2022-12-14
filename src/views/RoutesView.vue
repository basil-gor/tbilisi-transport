<template>
  <SearchInput
    v-model:value="routeSearchName"
    placeholder="Find route"
  ></SearchInput>
  <RoutesTable :routes="filteredRoutes"></RoutesTable>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import RoutesTable from "@/components/RoutesTable.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";
import { computed, ref } from "vue";
import SearchInput from "@/components/SearchInput.vue";

const { allRoutes } = storeToRefs(useTransportRoutesStore());

const routeSearchName = ref("");
const filteredRoutes = computed(() =>
  allRoutes.value.filter(
    (route) =>
      route.routeNumber
        .toLowerCase()
        .includes(routeSearchName.value.toLowerCase()) ||
      route.longName.toLowerCase().includes(routeSearchName.value.toLowerCase())
  )
);
</script>
