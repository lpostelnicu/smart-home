<script>
import axiosInstance from "../config/axios.js";
import Button from "primevue/button"

export default {
  name: 'HousePage',
  components: {
    
  },
  props: {
    id: String
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      houseData: null
    }
  },
  computed: {
    
  },
  methods: {
    async fetchHouseData(id) {
      this.isLoading = true;
      // console.log("accessing with id ==== ", id);
      try {
        // const response = await axiosInstance.get('/house', {
        //   params: {
        //     id: id
        //   }
        // });
        const response = await axiosInstance.get(`/houses/${id}`);
        console.log("House data ==== ", response.data);
        this.houseData = response.data;
      } catch (error) {
        console.debug(error);
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    }
  },
  async created() {
    await this.fetchHouseData(this.id);
  }
}
</script>

<template>
  <div class="houseWraper">
    <router-link :to="{ name: 'home' }">
      <Button label="Zurück" icon="pi pi-arrow-left" />
    </router-link>
    <div class="houseContainer">
      <h1 class="houseTitleName"><strong>Name:</strong> {{ this.houseData.name }}</h1>
      <p class="houseTitleDesc"><strong>Description:</strong> {{ this.houseData.description }}</p>
    </div>
    <pre>{{ this.houseData }}</pre>
  </div>
</template>

<style scoped>
.backBtn {
  margin: 15px 0;
}
.houseTitleName {
  font-size: 24px;
  line-height: 24px;
  margin: 15px 0;
}
.houseTitleDesc {
  font-size: 18px;
  line-height: 22px;
  margin: 0 0 15px 0;
}
</style>