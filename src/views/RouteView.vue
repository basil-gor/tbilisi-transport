<template>
  <div class="route-view-header">
    <h2 class="route-view-header__title">
      Route {{ routeNumber }}
      <FavoriteButton
        v-if="currentRoute !== undefined"
        :is-full="isRouteInFavorites(routeNumber)"
        style="margin: 5px"
        @click="addOrRemoveRouteInFavorites(routeNumber)"
      />
    </h2>
    <label
      v-if="!isOnewayDirectionRoute"
      class="route-view-header__direction-switcher"
    >
      <!-- TODO fix this hack -->
      <input
        type="checkbox"
        :checked="isShowOnlyForwardDirection"
        @input="isShowOnlyForwardDirection = !isShowOnlyForwardDirection"
        v-show="false"
      />
      <span>{{
        isShowOnlyForwardDirection
          ? "⬇ Forward direction showed"
          : "⬆ Backward direction showed"
      }}</span>
    </label>
  </div>

  <br />
  <template
    v-if="
      schemeForward !== undefined &&
      stopsForward.length !== 0 &&
      (isShowOnlyForwardDirection || isOnewayDirectionRoute)
    "
  >
    <h3 v-if="!isOnewayDirectionRoute">Forward:</h3>
    <!--    <div v-if="schemeForward.directionDescription">
          {{ schemeForward.directionDescription }}
        </div>-->
    <StopsTable
      v-if="stopsForward.length !== 0"
      :stops="stopsForward"
    ></StopsTable>
    <br />
  </template>

  <template
    v-if="
      schemeBackward !== undefined &&
      stopsBackward.length !== 0 &&
      (!isShowOnlyForwardDirection || isOnewayDirectionRoute)
    "
  >
    <h3 v-if="!isOnewayDirectionRoute">Backward:</h3>
    <!--    <div v-if="schemeBackward.directionDescription">
          {{ schemeBackward.directionDescription }}
        </div>-->
    <StopsTable
      v-if="stopsBackward.length !== 0"
      :stops="stopsBackward"
    ></StopsTable>
    <br />
  </template>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { RouteSchemeDTO, StopInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";
import { computed, ref } from "vue";
import FavoriteButton from "@/components/FavoriteButton.vue";
import StopsTable from "@/components/StopsTable.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";
import { useTransportStopsStore } from "@/stores/transport-stops";

const route = useRoute();
const routeNumber: string = route.params.routeNumber.toString(); // TODO

const { addOrRemoveRouteInFavorites, isRouteInFavorites, getRouteByNumber } =
  useTransportRoutesStore();
const { getStopByCode } = useTransportStopsStore();

const currentRoute = computed(() => getRouteByNumber(routeNumber)); // TODO

const schemeForward = ref<RouteSchemeDTO>();
const schemeBackward = ref<RouteSchemeDTO>();

const stopsForward = ref<StopInfoDTO[]>([]);
const stopsBackward = ref<StopInfoDTO[]>([]);
ArrivingApi.getRouteScheme(routeNumber, true).then((res) => {
  schemeForward.value = res;
  stopsForward.value = schemeForward.value?.stops
    .map((stop) => getStopByCode(stop.code))
    .filter((stop) => stop !== undefined) as StopInfoDTO[];
});
ArrivingApi.getRouteScheme(routeNumber, false).then((res) => {
  schemeBackward.value = res;
  stopsBackward.value = schemeBackward.value?.stops
    .map((stop) => getStopByCode(stop.code))
    .filter((stop) => stop !== undefined) as StopInfoDTO[];
});

const isShowOnlyForwardDirection = ref(true);
const isOnewayDirectionRoute = computed(
  () => stopsForward.value.length === 0 || stopsBackward.value.length === 0
);
</script>

<style scoped>
.route-view-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.route-view-header__title {
  margin-right: 50px;
}

.route-view-header__direction-switcher {
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  color: #0aa0c9;
  font-size: 16px;
  width: 225px;
}

.route-view-header__direction-switcher:hover {
  text-shadow: 0 0 4px rgba(122, 111, 111, 0.9);
}
</style>
