<template>
  <h2>
    Route {{ routeId }}
    <FavoriteButton
      v-if="currentRoute !== undefined"
      :is-full="isRouteInFavorites(currentRoute.routeNumber)"
      style="margin: 5px"
      @click="addOrRemoveRouteInFavorites(currentRoute.routeNumber)"
    />
  </h2>
  <br />
  <template v-if="schemeForward !== undefined">
    Forward:
    <div v-if="schemeForward.directionDescription">
      {{ schemeForward.directionDescription }}
    </div>
    <div v-for="stop in schemeForward.stops" :key="stop.code">
      <RouterLink :to="`/stop/${stop.code}`"
        >{{ stop.code }}: {{ stop.name }}
      </RouterLink>
    </div>
    <br />
  </template>

  <template v-if="schemeBackward !== undefined">
    Backward:
    <div v-if="schemeBackward.directionDescription">
      {{ schemeBackward.directionDescription }}
    </div>
    <div v-for="stop in schemeBackward.stops" :key="stop.code">
      <RouterLink :to="`/stop/${stop.code}`"
        >{{ stop.code }}: {{ stop.name }}
      </RouterLink>
    </div>
    <br />
  </template>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { RouteSchemeDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";
import { computed, ref } from "vue";
import FavoriteButton from "@/components/FavoriteButton.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";

const route = useRoute();
const routeNumber: string = route.params.routeNumber.toString(); // TODO

const { addOrRemoveRouteInFavorites, isRouteInFavorites, getRouteByNumber } =
  useTransportRoutesStore();

const currentRoute = computed(() => getRouteByNumber(routeNumber)); // TODO

const schemeForward = ref<RouteSchemeDTO>();
const schemeBackward = ref<RouteSchemeDTO>();
ArrivingApi.getRouteScheme(routeNumber, true).then(
  (res) => (schemeForward.value = res)
);
ArrivingApi.getRouteScheme(routeNumber, false).then(
  (res) => (schemeBackward.value = res)
);
</script>
