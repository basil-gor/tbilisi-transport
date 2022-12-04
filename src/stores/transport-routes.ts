import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { RouteInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";

export const useTransportRoutesStore = defineStore("transport-routes", () => {
  const allRoutes = ref<RouteInfoDTO[]>([]);
  ArrivingApi.getAllRoutes().then((value) => (allRoutes.value = value));

  function getRouteByNumber(routeNumber: string) {
    return allRoutes.value.find((route) => route.routeNumber === routeNumber);
  }

  const favoritesRoutesNumbers = useStorage(
    "favoritesRoutesNumbers",
    new Set<RouteInfoDTO["routeNumber"]>()
  );

  function isRouteInFavorites(routeNumber: string) {
    return favoritesRoutesNumbers.value.has(routeNumber);
  }

  function addOrRemoveRouteInFavorites(routeNumber: string) {
    isRouteInFavorites(routeNumber)
      ? favoritesRoutesNumbers.value.delete(routeNumber)
      : favoritesRoutesNumbers.value.add(routeNumber);
  }

  const favoritesRoutes = computed<RouteInfoDTO[]>(
    () =>
      Array.from(favoritesRoutesNumbers.value)
        .map((routeNumber) => getRouteByNumber(routeNumber))
        .filter((route) => route !== undefined) as RouteInfoDTO[]
  );

  return {
    allRoutes,
    getRouteByNumber,
    isRouteInFavorites,
    addOrRemoveRouteInFavorites,
    favoritesRoutes,
  };
});
