<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <v-list nav class="d-flex">
        <v-list-item>
          <RouterLink to="/" class="text-h6">Home</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/search" class="text-h6">Search</RouterLink>
        </v-list-item>
      </v-list>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
