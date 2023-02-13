<template>
  <div>
    <div class="d-flex justify-space-between">
      <v-btn
        data-test="button-previous"
        elevation="2"
        class="justify-self-start"
        v-if="store.isPreviousPage"
        icon
        @click="fetchPaginated('prev')"
      >
        <v-icon icon="mdi-arrow-left" />
      </v-btn>
      <v-spacer v-else></v-spacer>
      <v-btn
        data-test="button-next"
        elevation="2"
        class="justify-self-end"
        v-if="store.isNextPage"
        icon
        @click="fetchPaginated('next')"
      >
        <v-icon icon="mdi-arrow-right" />
      </v-btn>
      <v-spacer v-else></v-spacer>
    </div>
    <div class="text-center">
      {{ store.results.page }} / {{ store.results.total_pages }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Params } from "@/composables/useMovieApi";

import { useStore } from "@/composables/useStore";

const store = useStore();

const fetchPaginated = (direction: "next" | "prev"): void => {
  let newParams: Params;
  direction === "next"
    ? (newParams = { ...store.params, page: store.params.page + 1 })
    : (newParams = { ...store.params, page: store.params.page - 1 });
  store.setParams(newParams);
  store.fetchMovies();
};
</script>

<style scoped></style>
