<template>
  <h2>Stop {{ stopCode }}</h2>
  <template v-if="currentStop !== undefined">
    <div
      @click="
        () =>
          currentStop !== undefined && addOrRemoveStopInFavorites(currentStop)
      "
      style="cursor: pointer; color: #0aa0c9"
    >
      {{
        isStopInFavorites(currentStop)
          ? "Remove from favorites"
          : "Add to favorites"
      }}
    </div>
  </template>
  <br />
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th>Number</th>
        <th>Destination</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(routeArriving, index) in arrivalTable"
        :key="routeArriving.routeNumber + index"
      >
        <td>{{ routeArriving.routeNumber }}</td>
        <td>{{ routeArriving.destinationStopName }}</td>
        <td>{{ routeArriving.arrivalTime }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ArrivingInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";
import { useRoute } from "vue-router";
import { useTransportStore } from "@/stores/transport";

const route = useRoute();
const stopCode: string = route.params.stopCode.toString(); // TODO

const { addOrRemoveStopInFavorites, isStopInFavorites, getStopByCode } =
  useTransportStore();

const currentStop = computed(() => getStopByCode(stopCode)); // TODO

const arrivalTable = ref<ArrivingInfoDTO[]>();

ArrivingApi.getArrivalTime(stopCode).then(
  (value) => (arrivalTable.value = value)
);
</script>
