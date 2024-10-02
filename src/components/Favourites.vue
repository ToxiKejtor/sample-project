<template>
  <v-card class="text-center py-5" min-height="200">
    <v-card-title class="d-flex align-center justify-center"
      ><v-icon icon="mdi-star" />Favourites</v-card-title
    >
    <v-card-subtitle data-cy="empty" v-if="store.favourites.length === 0">
      Your favourites will be displayed here
    </v-card-subtitle>
    <v-list v-else data-cy="favourites">
      <v-list-item
        v-for="movie in store.favourites"
        :key="movie.imdbID"
        data-cy="favourite"
      >
        <v-tooltip top text="Remove from favourites">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              size="small"
              icon
              class="mr-3"
              v-bind="attrs"
              v-on="on"
              @click="store.removeFavourite(movie.imdbID)"
              data-cy="favourite-remove"
              ><v-icon icon="mdi-star-minus-outline"
            /></v-btn>
          </template>
        </v-tooltip>
        <div class="text-left">
          <v-list-item-title class="favourites__movie-title">{{
            movie.Title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
import { useStore } from "@/composables/useStore";
const store = useStore();
</script>

<style scoped>
.favourites__movie-title {
  white-space: normal;
}
</style>
