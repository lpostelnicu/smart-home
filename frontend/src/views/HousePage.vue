<script>
import axiosInstance from "../config/axios.js";
import Button from "primevue/button"

export default {
  name: 'HousePage',
  components: {
    
  },
  props: {
    houseId: String
  },
  data() {
    return {
      isLoading: false,
      isError: false
    }
  },
  computed: {
    
  },
  methods: {
    async fetchHouseData(id) {
      this.isLoading = true;
      try {
        const response = await axiosInstance.get('/house', {
          params: {
            id: id
          }
        });
        console.log("House data ==== ", response.data);
        this.housesListing = response.data;
      } catch (error) {
        console.debug(error);
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    }
  },
  async created() {
    await this.fetchHouseData();
  },
  mounted() {
    
  }
}
</script>

<template>
  <div class="houseListingWrap">
    <div class="houseListingWrap">
      <h2>Dashboard</h2>
      <Button label="Zurück" icon="pi pi-arrow-left" />
    </div>
    <div class="houseListingContainer">
      <div class="houseListingRow houseListingHead">
        <div class="houseListingItem houseListingHeadName">Hausname</div>
        <div class="houseListingItem houseListingHeadLocation">Standort</div>
        <div class="houseListingItem houseListingHeadRooms">Zimmer</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>