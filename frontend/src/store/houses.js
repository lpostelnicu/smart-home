import { defineStore } from "pinia";
import axiosInstance from "../config/axios.js";

export const useHousesStore = defineStore("housesStore", {
  state: () => ({
      isLoading: false,
      isError: false,
      housesListing: null,
  }),
  getters: {
    numberOfHouses: (state) => state.housesListing?.length,
  },
  actions: {
    async fetchHouses() {
      this.isLoading = true;
      try {
        const response = await axiosInstance.get('/houses');
        console.log("Houses data is ==== ", response.data);
        this.housesListing = response.data;
      } catch (error) {
        console.debug(error);
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
})