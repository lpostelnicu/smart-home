<script>
import { mapState, mapActions } from "pinia"
import { useHousesStore } from "../store/houses"

export default {
  name: 'HomeView',
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
  <h1>Home View</h1>
  <h2>Here will be the list of houses.</h2>
  <p>{{ housesListing }}</p>
  <ol>
    <li>House 1</li>
    <li>House number 2</li>
    <li>House Three</li>
  </ol>
</template>

<style scoped>

</style>