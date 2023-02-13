<template>
  <Teleport to="#app">
    <v-snackbar v-model="toastActive" :timeout="20000"
      ><div class="text-center">{{ toastMessage }}</div></v-snackbar
    >
  </Teleport>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/composables/useStore";
const store = useStore();
const { toastActive, toastMessage } = storeToRefs(store);
</script>

<style scoped></style>
