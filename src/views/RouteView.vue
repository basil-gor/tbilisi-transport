<template>
  <h2>
    Route {{ routeId }}
    <FavoriteButton
      v-if="currentRoute !== undefined"
      :is-full="isRouteInFavorites(currentRoute)"
      style="margin: 5px"
      @click="addOrRemoveRouteInFavorites(currentRoute)"
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
import { useTransportStore } from "@/stores/transport";
import FavoriteButton from "@/components/FavoriteButton.vue";

const route = useRoute();
const routeId: string = route.params.routeId.toString(); // TODO

const { addOrRemoveRouteInFavorites, isRouteInFavorites, getRouteById } =
  useTransportStore();

const currentRoute = computed(() => getRouteById(routeId)); // TODO

const schemeForward = ref<RouteSchemeDTO>();
const schemeBackward = ref<RouteSchemeDTO>();
ArrivingApi.getRouteScheme(routeId, true).then(
  (res) => (schemeForward.value = res)
);
ArrivingApi.getRouteScheme(routeId, false).then(
  (res) => (schemeBackward.value = res)
);
</script>
