<script>
export default {
  name: 'SiteHeader',
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<template>
  <header class="header">
    <a class="logo" href="#">
      Smart H<span class="oLetter">o</span>me
    </a>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 160px;
  padding: 10px;
  background-color: #4F5052;
  background: center center / cover no-repeat url("../assets/houses-optimised-3.jpg") #4F5052;
  box-shadow: inset 0 -50px 60px #292828;
  text-align: center;
}
.logo {
  font-family: Blinker, Arial, sans-serif;
  font-size: 50px;
  line-height: 50px;
  font-weight: 700;
  display: inline-block;
  padding: 15px;
  color: #05a42f;
  -webkit-text-stroke: 1px #fff;
}
@media (min-width: 768px) {
  .logo {
    font-size: 90px;
    line-height: 90px;
  }
}
.logo:hover .oLetter {
  -webkit-text-fill-color: #fff; /* Will override color (regardless of order) */
  -webkit-text-stroke: 1px #fff;
  text-shadow: 3px 0px 0 #fff, 0px 3px 0 #fff, -3px 0px 0 #fff, 0px -3px 0 #fff, 0 0 22px #fff;
}
</style>
