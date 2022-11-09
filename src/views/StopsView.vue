<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="stop in allStops" :key="stop.id">
        <td>
          <RouterLink :to="`/stop/${stop.code}`">{{ stop.code }}</RouterLink>
        </td>
        <td>
          <RouterLink :to="`/stop/${stop.code}`">{{ stop.name }}</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useTransportStore } from "@/stores/transport";

const { allStops } = useTransportStore();
</script>
