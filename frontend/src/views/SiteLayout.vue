<script>
import SiteHeader from '../components/SiteHeader.vue'

export default {
  name: 'SiteLayout',
  components: {
    SiteHeader
  },
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
  <div class="siteLayout relative pb-20">
    <site-header></site-header>
    <div class="viewContainer">
      <router-view></router-view>
    </div>
  </div>
</template>
