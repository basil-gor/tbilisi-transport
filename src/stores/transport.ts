import { ref } from "vue";
import { defineStore } from "pinia";
import type { RouteInfoDTO, StopInfoDTO } from "@/api/arriving";
import { ArrivingApi } from "@/api/arriving";

export const useTransportStore = defineStore("transport", () => {
  const allRoutes = ref<RouteInfoDTO[]>([]);
  ArrivingApi.getAllRoutes().then((value) => (allRoutes.value = value));

  const allStops = ref<StopInfoDTO[]>([]);
  ArrivingApi.getAllStops().then(
    (value) =>
      (allStops.value = value.sort((a, b) =>
        parseInt(a.code) > parseInt(b.code) ? 1 : -1
      ))
  );

  const count = ref(0);

  function increment() {
    count.value++;
  }

  return { allRoutes, allStops, increment };
});
