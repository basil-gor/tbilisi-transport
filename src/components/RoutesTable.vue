<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th>Number</th>
        <th>Route</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="route in routes" :key="route.id">
        <td>
          <RouterLink :to="`/route/${route.routeNumber}`"
            >{{ route.routeNumber }}
          </RouterLink>
        </td>
        <td>
          <RouterLink :to="`/route/${route.routeNumber}`"
            >{{
              route.stopA === route.stopB
                ? route.stopA
                : `${route.stopA} - ${route.stopB}`
            }}
          </RouterLink>
        </td>
        <td
          @click="addOrRemoveRouteInFavorites(route)"
          style="cursor: pointer; color: #0aa0c9"
        >
          {{
            isRouteInFavorites(route)
              ? "Remove from favorites"
              : "Add to favorites"
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { RouteInfoDTO } from "@/api/arriving";
import { useTransportStore } from "@/stores/transport";
import type { PropType } from "vue";

defineProps({
  routes: {
    type: Array as PropType<RouteInfoDTO[]>,
    required: true,
  },
});

const { addOrRemoveRouteInFavorites, isRouteInFavorites } = useTransportStore();
</script>
