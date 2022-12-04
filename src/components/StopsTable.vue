<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody ref="tbodyElement">
      <tr v-for="stop in stopsToView" :key="stop.id">
        <td>
          <RouterLink :to="`/stop/${stop.code}`">{{ stop.code }}</RouterLink>
        </td>
        <td>
          <RouterLink :to="`/stop/${stop.code}`">{{ stop.name }}</RouterLink>
        </td>
        <td
          @click="addOrRemoveStopInFavorites(stop)"
          style="cursor: pointer; color: #0aa0c9"
        >
          {{
            isStopInFavorites(stop)
              ? "Remove from favorites"
              : "Add to favorites"
          }}
        </td>
      </tr>
      <tr v-if="isBigStopsCount">
        <td
          style="text-align: center; cursor: pointer; color: lightblue"
          colspan="3"
          @click="showMore"
        >
          Show More
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { StopInfoDTO } from "@/api/arriving";
import { useTransportStore } from "@/stores/transport";
import { ref } from "vue";

const props = defineProps<{
  stops: StopInfoDTO[];
}>();

// TODO
const isBigStopsCount = props.stops.length > 100;

const tbodyElement = ref<HTMLElement>();
const offset = 100;
let lastVirtualPageIndex = 1;
const stopsToView = ref(
  isBigStopsCount ? props.stops.slice(0, offset) : props.stops
);

const showMore = () => {
  const lastAddItemIndex = lastVirtualPageIndex * offset;
  lastVirtualPageIndex += 1;
  const dataToAdd = props.stops.slice(
    lastAddItemIndex,
    lastVirtualPageIndex * offset
  );
  stopsToView.value.push(...dataToAdd);
};

const { addOrRemoveStopInFavorites, isStopInFavorites } = useTransportStore();
</script>
