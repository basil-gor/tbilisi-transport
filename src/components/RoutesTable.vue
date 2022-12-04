<template>
  <table style="text-align: left">
    <thead>
      <tr>
        <th>Number</th>
        <th class="table-middle-td">Route</th>
        <th style="width: 50px"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="route in routes" :key="route.id">
        <td>
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
            :is-full="isRouteInFavorites(route)"
            @click="addOrRemoveRouteInFavorites(route)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { RouteInfoDTO } from "@/api/arriving";
import { useTransportStore } from "@/stores/transport";
import type { PropType } from "vue";
import FavoriteButton from "@/components/FavoriteButton.vue";

defineProps({
  routes: {
    type: Array as PropType<RouteInfoDTO[]>,
    required: true,
  },
});

const { addOrRemoveRouteInFavorites, isRouteInFavorites } = useTransportStore();
</script>

<style scoped>
.table-middle-td {
  min-width: 50vw;
}
</style>
