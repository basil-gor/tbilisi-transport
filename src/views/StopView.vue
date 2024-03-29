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
  <h4 v-if="currentStop !== undefined" style="opacity: 0.7">
    {{ currentStop.name }}
  </h4>
  <br />
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th>Number</th>
        <th>Destination</th>
        <th style="text-align: right">Time</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(routeArriving, index) in arrivalTable"
        :key="routeArriving.routeNumber + index"
      >
        <td>
          <RouterLink :to="`/route/${routeArriving.routeNumber}`"
            >{{ routeArriving.routeNumber }}
          </RouterLink>
        </td>
        <td>{{ routeArriving.destinationStopName }}</td>
        <td style="text-align: right">{{ routeArriving.arrivalTime }}</td>
      </tr>
    </tbody>
  </table>
  <br />
  <h3>Routes on this stop:</h3>
  <div class="routes-block">
    <span
      v-for="(route, index) in routesAtStop"
      :key="route.id"
      class="routes-block__route-item"
    >
      <RouterLink :to="`/route/${route.routeNumber}`"
        >{{ route.routeNumber }}
      </RouterLink>
      {{ index + 1 === routesAtStop?.length ? "." : "," }}
    </span>
  </div>
  <div
    style="
      font-size: 10px;
      font-style: italic;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    "
  >
    <span style="color: #ff7758"> Note: </span>
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 10px;
      "
    >
      <span> There are more routes possible. </span>
      <span>We have no more actual available data. </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { ArrivingInfoDTO, RouteInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";
import { useRoute } from "vue-router";
import { useTransportStopsStore } from "@/stores/transport-stops";
import FavoriteButton from "@/components/FavoriteButton.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";

const route = useRoute();
const stopCode: string = route.params.stopCode.toString(); // TODO

const { addOrRemoveStopInFavorites, isStopInFavorites, getStopByCode } =
  useTransportStopsStore();
const { getRouteByNumber } = useTransportRoutesStore();

const currentStop = computed(() => getStopByCode(stopCode)); // TODO

const arrivalTable = ref<ArrivingInfoDTO[]>([]);
const routesIdsAtStop = ref<string[]>([]);
const routesAtStop = ref<RouteInfoDTO[]>([]);

const arrivalTableUpdaterId = ref<number>();

const updateArrivalTable = () => {
  return ArrivingApi.getArrivalTime(stopCode).then((value) => {
    arrivalTable.value = value;
  });
};

onMounted(() => {
  updateArrivalTable().then(() => {
    arrivalTableUpdaterId.value = setInterval(updateArrivalTable, 15000);
  });
});

onBeforeUnmount(() => {
  clearInterval(arrivalTableUpdaterId.value);
});

watch(
  currentStop,
  (currentStopValueNew, currentStopValueOld) => {
    if (
      currentStopValueNew === undefined ||
      currentStopValueNew.id === currentStopValueOld?.id
    ) {
      return;
    }
    ArrivingApi.getRoutesNumbersAtStop(currentStopValueNew.id).then(
      (routesNumbers) => {
        routesIdsAtStop.value = routesNumbers;
        routesAtStop.value = routesNumbers
          .map((routeNumber) => getRouteByNumber(routeNumber))
          .filter((route) => route !== undefined) as RouteInfoDTO[];
      }
    );
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.routes-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.routes-block__route-item {
  margin-right: 5px;
  flex-wrap: nowrap;
}
</style>
