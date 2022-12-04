<template>
  <h2>
    Stop {{ stopCode }}
    <FavoriteButton
      v-if="currentStop !== undefined"
      :is-full="isStopInFavorites(stopCode)"
      style="margin: 5px"
      @click="addOrRemoveStopInFavorites(stopCode)"
    />
  </h2>
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
import { useTransportStopsStore } from "@/stores/transport-stops";
import FavoriteButton from "@/components/FavoriteButton.vue";

const route = useRoute();
const stopCode: string = route.params.stopCode.toString(); // TODO

const { addOrRemoveStopInFavorites, isStopInFavorites, getStopByCode } =
  useTransportStopsStore();

const currentStop = computed(() => getStopByCode(stopCode)); // TODO

const arrivalTable = ref<ArrivingInfoDTO[]>();

ArrivingApi.getArrivalTime(stopCode).then(
  (value) => (arrivalTable.value = value)
);
</script>
