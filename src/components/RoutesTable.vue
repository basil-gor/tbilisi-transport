<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th style="width: 60px">Number</th>
        <th class="table-middle-td">Route</th>
        <th style="width: 50px"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="route in routes" :key="route.id">
        <td style="width: 60px">
          <RouterLink :to="`/route/${route.routeNumber}`"
            >{{ route.routeNumber }}
          </RouterLink>
        </td>
        <td class="table-middle-td">
          <RouterLink :to="`/route/${route.routeNumber}`"
            >{{
              route.stopA === route.stopB
                ? route.stopA
                : `${route.stopA} - ${route.stopB}`
            }}
          </RouterLink>
        </td>
        <td style="text-align: center">
          <FavoriteButton
            :is-full="isRouteInFavorites(route.routeNumber)"
            @click="addOrRemoveRouteInFavorites(route.routeNumber)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { RouteInfoDTO } from "@/api/arriving";
import type { PropType } from "vue";
import FavoriteButton from "@/components/FavoriteButton.vue";
import { useTransportRoutesStore } from "@/stores/transport-routes";

defineProps({
  routes: {
    type: Array as PropType<RouteInfoDTO[]>,
    required: true,
  },
});

const { addOrRemoveRouteInFavorites, isRouteInFavorites } =
  useTransportRoutesStore();
</script>

<style scoped>
.table-middle-td {
  min-width: 50vw;
}
</style>
