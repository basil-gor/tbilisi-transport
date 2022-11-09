<template>
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
import { ref } from "vue";
import type { ArrivingInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";
import { useRoute } from "vue-router";

const route = useRoute();
const stopId: string = route.params.stopId.toString(); // TODO

const arrivalTable = ref<ArrivingInfoDTO[]>();
ArrivingApi.getArrivalTime(stopId).then(
  (value) => (arrivalTable.value = value)
);
</script>
