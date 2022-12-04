import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { RouteInfoDTO, StopInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";

export const useTransportStore = defineStore("transport", () => {
  const favoritesStops = useStorage("favoritesStops", new Set<StopInfoDTO>());
  const favoritesRoutes = useStorage(
    "favoritesRoutes",
    new Set<RouteInfoDTO>()
  );

  function addOrRemoveStopInFavorites(stop: StopInfoDTO) {
    isStopInFavorites(stop)
      ? favoritesStops.value.delete(stop)
      : favoritesStops.value.add(stop);
  }

  function isStopInFavorites(stop: StopInfoDTO) {
    return favoritesStops.value.has(stop);
  }

  function addOrRemoveRouteInFavorites(route: RouteInfoDTO) {
    isRouteInFavorites(route)
      ? favoritesRoutes.value.delete(route)
      : favoritesRoutes.value.add(route);
  }

  function isRouteInFavorites(route: RouteInfoDTO) {
    return favoritesRoutes.value.has(route);
  }

  function getStopByCode(stopCode: string) {
    return allStops.value.find((stop) => stop.code === stopCode);
  }

  // TODO на самом деле номер маршрута
  function getRouteById(routeId: string) {
    return allRoutes.value.find((route) => route.routeNumber === routeId);
  }

  const allRoutes = ref<RouteInfoDTO[]>([]);
  ArrivingApi.getAllRoutes().then((value) => (allRoutes.value = value));

  const allStops = ref<StopInfoDTO[]>([]);
  ArrivingApi.getAllStops().then(
    (value) =>
      (allStops.value = value.sort((a, b) =>
        parseInt(a.code) > parseInt(b.code) ? 1 : -1
      ))
  );

  return {
    allRoutes,
    allStops,
    favoritesStops,
    addOrRemoveStopInFavorites,
    isStopInFavorites,
    getRouteById,
    favoritesRoutes,
    addOrRemoveRouteInFavorites,
    isRouteInFavorites,
    getStopByCode,
  };
});
