<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th>Number</th>
        <th>Route</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="route in allRoutes" :key="route.id">
        <td>{{ route.routeNumber }}</td>
        <td>
          {{
            route.stopA === route.stopB
              ? route.stopA
              : `${route.stopA} - ${route.stopB}`
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useTransportStore } from "@/stores/transport";

const { allRoutes } = useTransportStore();
</script>
