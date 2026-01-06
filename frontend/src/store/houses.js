import { defineStore } from "pinia";

export const useHousesStore = defineStore("housesStore", {
  state: () => ({
      housesListing: [],
  }),
  getters: {
    numberOfHouses: (state) => state.housesListing.length,
  },
  actions: {
    async fetchHouses () {

    },
  },
})