<template>
  <v-card class="py-5" min-height="200">
    <v-card-subtitle
      class="text-center"
      v-if="store.status === 'init'"
      data-test="init"
    >
      Your search results will be shown here
    </v-card-subtitle>
    <v-card-subtitle
      class="text-center"
      data-test="loading"
      v-else-if="store.status === 'progress'"
    >
      <v-progress-circular indeterminate />
      Loading...
    </v-card-subtitle>

    <v-card-subtitle
      class="justify-center"
      data-test="empty"
      v-else-if="store.status === 'ready' && store.results.data.length === 0"
    >
      No results found
    </v-card-subtitle>
    <div class="px-3" v-else>
      <v-list data-test="results">
        <v-list-item
          v-for="movie in store.results.data"
          :key="movie.imdbID"
          data-test="record"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                data-test="favourite-add"
                small
                icon
                v-bind="attrs"
                v-on="on"
                class="mr-3"
                @click="store.addFavourite(movie)"
                ><v-icon>mdi-star-plus</v-icon></v-btn
              >
            </template>
            <span>Add to favourites</span>
          </v-tooltip>
          <div class="text-left">
            <v-list-item-title class="results__movie-title">{{
              movie.Title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <PaginationButtons data-test="pagination-buttons" />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { useStore } from "@/composables/useStore";
import PaginationButtons from "@/components/PaginationButtons.vue";
const store = useStore();
</script>

<style scoped>
.results__movie-title {
  white-space: normal;
}
</style>
