<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th style="width: 60px">Code</th>
        <th class="table-middle-td">Name</th>
        <th style="width: 50px"></th>
      </tr>
    </thead>
    <tbody ref="tbodyElement">
      <tr v-for="stop in stopsToView" :key="stop.id">
        <td style="width: 60px">
          <RouterLink :to="`/stop/${stop.code}`">{{ stop.code }}</RouterLink>
        </td>
        <td class="table-middle-td">
          <RouterLink :to="`/stop/${stop.code}`">{{ stop.name }}</RouterLink>
        </td>
        <td style="text-align: center">
          <FavoriteButton
            :is-full="isStopInFavorites(stop.code)"
            @click="addOrRemoveStopInFavorites(stop.code)"
          />
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
import { useTransportStopsStore } from "@/stores/transport-stops";
import { ref } from "vue";
import FavoriteButton from "@/components/FavoriteButton.vue";

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

const { addOrRemoveStopInFavorites, isStopInFavorites } =
  useTransportStopsStore();
</script>

<style scoped>
.table-middle-td {
  min-width: 50vw;
}
</style>
