<template>{{ info }}</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrivingApi } from "@/api/arriving";

const info = ref();
ArrivingApi.getArrivalTime().then((value) => (info.value = value));
</script>
