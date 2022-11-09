<template>This is Route page. Not implemented. {{ routeId }}</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const routeId: string = route.params.routeId.toString(); // TODO
</script>
