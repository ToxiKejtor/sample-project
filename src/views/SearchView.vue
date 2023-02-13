<template>
  <main>
    <v-container>
      <v-row>
        <v-spacer />
        <v-col :cols="12">
          <Search />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-col :cols="12" :sm="6" :md="8"><Results /></v-col>
        <v-col :cols="12" :sm="6" :md="4"><Favourites /></v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script lang="ts" setup>
import Search from "@/components/Search.vue";
import Results from "@/components/Results.vue";
import Favourites from "@/components/Favourites.vue";
</script>

<style scoped></style>
