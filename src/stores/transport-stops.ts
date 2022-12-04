import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { StopInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";

export const useTransportStopsStore = defineStore("transport-stops", () => {
  const allStops = ref<StopInfoDTO[]>([]);
  ArrivingApi.getAllStops().then(
    (value) =>
      (allStops.value = value.sort((a, b) =>
        parseInt(a.code) > parseInt(b.code) ? 1 : -1
      ))
  );

  function getStopByCode(stopCode: string) {
    return allStops.value.find((stop) => stop.code === stopCode);
  }

  const favoritesStopsCodes = useStorage(
    "favoritesStopsCodes",
    new Set<StopInfoDTO["code"]>()
  );

  function isStopInFavorites(stopCode: string) {
    return favoritesStopsCodes.value.has(stopCode);
  }

  function addOrRemoveStopInFavorites(stopCode: string) {
    isStopInFavorites(stopCode)
      ? favoritesStopsCodes.value.delete(stopCode)
      : favoritesStopsCodes.value.add(stopCode);
  }

  const favoritesStops = computed<StopInfoDTO[]>(
    () =>
      Array.from(favoritesStopsCodes.value)
        .map((stopCode) => getStopByCode(stopCode))
        .filter((stop) => stop !== undefined) as StopInfoDTO[]
  );

  return {
    allStops,
    getStopByCode,
    isStopInFavorites,
    addOrRemoveStopInFavorites,
    favoritesStops,
  };
});
