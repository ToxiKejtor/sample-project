<template>
  <v-card class="py-5" min-height="200">
    <v-card-subtitle
      class="text-center"
      v-if="store.status === 'init'"
      data-cy="init"
    >
      Your search results will be shown here
    </v-card-subtitle>
    <v-card-subtitle
      class="text-center"
      data-cy="loading"
      v-else-if="store.status === 'progress'"
    >
      <v-progress-circular indeterminate />
      Loading...
    </v-card-subtitle>

    <v-card-subtitle
      class="justify-center"
      data-cy="empty"
      v-else-if="store.status === 'ready' && store.results.data.length === 0"
    >
      No results found
    </v-card-subtitle>
    <div class="px-3" v-else>
      <v-list data-cy="results" tag="ul">
        <v-list-item
          v-for="movie in store.results.data"
          :key="movie.imdbID"
          tag="li"
          data-cy="result"
        >
          <v-tooltip top text="Add to favourites">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                data-cy="favourite-add"
                size="small"
                icon
                v-bind="attrs"
                v-on="on"
                class="mr-3"
                @click="store.addFavourite(movie)"
                ><v-icon icon="mdi-star-plus"
              /></v-btn>
            </template>
          </v-tooltip>
          <div class="text-left">
            <v-list-item-title class="results__movie-title">{{
              movie.Title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <PaginationButtons data-cy="pagination-buttons" />
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
