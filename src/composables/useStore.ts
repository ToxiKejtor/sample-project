import { defineStore } from "pinia";
import type { MoviesResult, Params, Record } from "../composables/useMovieApi";
import useMovieApi from "../composables/useMovieApi";

const { fetchMovies } = useMovieApi();

type Status = "init" | "progress" | "ready";

interface State {
  params: Params;
  results: MoviesResult;
  favourites: Record[];
  status: Status;
  toastMessage: string;
  toastActive: boolean;
}

export const useStore = defineStore("counter", {
  state: (): State => ({
    status: "init",
    params: {
      title: "",
      page: 1,
    },
    results: {
      page: 0,
      per_page: 0,
      total: 0,
      total_pages: 0,
      data: [],
    },
    favourites: [],
    toastMessage: "",
    toastActive: false,
  }),
  getters: {
    isNextPage: (state) => state.results.page < state.results.total_pages,
    isPreviousPage: (state) => state.results.page > 1,
  },
  actions: {
    addFavourite(item: Record): void {
      if (!this.favourites.includes(item)) {
        this.favourites.push(item);
        this.toastMessage = "Added!";
        this.toastActive = true;
      }
    },
    removeFavourite(id: string): void {
      this.favourites = this.favourites.filter((item) => item.imdbID !== id);
      this.toastMessage = "Removed!";
      this.toastActive = true;
    },

    async fetchMovies(): Promise<void> {
      this.status = "progress";
      this.results = await fetchMovies(this.params);
      this.status = "ready";
    },
  },
});
