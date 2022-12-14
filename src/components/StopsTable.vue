<template>
  <table style="text-align: left; width: 100%">
    <thead>
      <tr>
        <th style="width: 60px">Code</th>
        <th class="table-middle-td">Name</th>
        <th style="width: 50px"></th>
      </tr>
    </thead>
    <tbody>
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
      <!--      <tr v-if="isBigStopsCount">
        <td
          style="text-align: center; cursor: pointer; color: lightblue"
          colspan="3"
          @click="showMore"
        >
          Show More
        </td>
      </tr>-->
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { StopInfoDTO } from "@/api/arriving";
import { useTransportStopsStore } from "@/stores/transport-stops";
import { ref, toRefs, watch } from "vue";
import FavoriteButton from "@/components/FavoriteButton.vue";
import { useInfiniteScroll } from "@vueuse/core";

const props = defineProps<{
  stops: StopInfoDTO[];
}>();

const { stops } = toRefs(props);

// TODO update this ugly logic
const isBigStopsCount = ref(false);

const offset = 50;
let lastVirtualPageIndex = 1;
const stopsToView = ref<StopInfoDTO[]>([]);

watch(
  stops,
  () => {
    isBigStopsCount.value = stops.value.length > 100;
    stopsToView.value = isBigStopsCount.value
      ? stops.value.slice(0, offset)
      : stops.value;
  },
  {
    deep: true,
    immediate: true,
  }
);

const showMore = () => {
  const lastAddItemIndex = lastVirtualPageIndex * offset;
  lastVirtualPageIndex += 1;
  const dataToAdd = stops.value.slice(
    lastAddItemIndex,
    lastVirtualPageIndex * offset
  );
  stopsToView.value.push(...dataToAdd);
};

useInfiniteScroll(
  ref(document),
  () => {
    if (!isBigStopsCount.value) {
      return;
    }
    showMore();
  },
  { distance: 10 }
);

const { addOrRemoveStopInFavorites, isStopInFavorites } =
  useTransportStopsStore();
</script>

<style scoped>
.table-middle-td {
  min-width: 50vw;
}
</style>
