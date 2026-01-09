<script>
import { mapState, mapActions } from "pinia"
import { useHousesStore } from "../store/houses"
import Button from "primevue/button"

export default {
  name: 'HomeView',
  components: {
    
  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useHousesStore, ['housesListing'])
  },
  methods: {
    ...mapActions(useHousesStore, ['fetchHouses'])
  },
  async created() {
    console.log(`The component ${this.$options.name} is created ......`);
    await this.fetchHouses();
  },
  mounted() {
    console.log(`The component ${this.$options.name} was mounted.`);
  }
}
</script>

<template>
  <div class="houseListingWrap">
    <div class="titlePageHead">
      <h2 class="titlePageHeading">Dashboard</h2>
      <Button class="titlePageBtn" label="Add Haus" icon="pi pi-plus-circle" />
    </div>
    <div class="houseListingContainer">
      <div class="houseListingRow houseListingHead">
        <div class="houseListingItem houseListingHeadName">Hausname</div>
        <div class="houseListingItem houseListingHeadLocation">Standort</div>
        <div class="houseListingItem houseListingHeadRooms">Zimmer</div>
      </div>
      <div class="" v-for="h in housesListing" :key="h._id">
        <router-link 
          :to="{ name: 'house', params: { id: h._id } }"
          class="houseListingRow"
        >
        <div class="houseListingItem houseListingItemName">{{ h.name }}</div>
        <div class="houseListingItem houseListingItemLocation">{{ h.address.city }}, {{ h.address.country }}</div>
        <div class="houseListingItem houseListingItemRooms">{{ h.rooms }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titlePageHead {
  margin: 10px 0 0 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  /* align-items: flex-start; */
  /* align-content: flex-start; */
}
.titlePageHeading {
  width: 60%;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  align-self: center;
}
.titlePageBtn {
  /* align-self: flex-end; */
}
.houseListingContainer {
  background-color: rgb(248 250 252);
  border: 0 solid rgb(248 250 252);
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0 0 0;
}
.houseListingRow {
  display: block;
  background-color: #ffffff;
  color: #000;
  border: 1px solid rgb(229 231 235);
  border-radius: 8px;
  margin: 0 0 10px 0;
  vertical-align: text-bottom;
}
.houseListingRow:hover {
  background-color: #e4e4e4;
}
.houseListingHead {
  background-color: rgb(248 250 252);
  border: 0 solid rgb(248 250 252);
  font-weight: bold;
  margin: 0;
}
.houseListingItem {
  display: inline-block;
  padding: 10px 10px;
}
.houseListingItemName {
  width: 55%;
}
.houseListingItemLocation {
  width: 35%;
  color: #585454;
}
.houseListingItemRooms {
  width: 10%;
  text-align: right;
  color: #585454;
}
.houseListingHeadName {
  width: 55%;
}
.houseListingHeadLocation {
  width: 35%;
  color: #000;
}
.houseListingHeadRooms {
  width: 10%;
  text-align: right;
  color: #000;
}
</style>