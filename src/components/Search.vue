<template>
  <div class="d-flex align-center">
    <v-text-field
      class="input__search"
      label="Search movies..."
      v-model="search"
      @keydown.enter="store.fetchMovies()"
      data-test="search"
    ></v-text-field>
    <v-btn
      size="large"
      class="ml-2"
      @click="store.fetchMovies()"
      :loading="store.status === 'progress'"
      :disabled="search === ''"
      data-test="submit"
      >Search</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/composables/useStore";
import { computed } from "vue";
const store = useStore();
const search = computed({
  get: () => store.params.title,
  set: (val) => (store.params = { ...store.params, title: val }),
});
</script>

<style>
.input__search .v-input__details {
  display: none;
}
</style>
