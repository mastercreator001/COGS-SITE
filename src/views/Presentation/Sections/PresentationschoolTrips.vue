
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  <h1>{{ this.schoolTrips.title }}</h1>
  <img :src="this.schoolTrips.image" :title="this.schoolTrips.title" />
  <h3>{{ this.schoolTrips.subtitle }}</h3>
  <div class="schoolTripsText" v-html=this.schoolTrips.text></div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      schoolTrips: {}
    }
  },
  mounted() {
    var items = data[5].items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == this.id) {
        this.schoolTrips = items[i]
      }
    }
  },
};
</script>
<style scoped>
.schoolTripsText {font-size: 1.2em;}
</style>