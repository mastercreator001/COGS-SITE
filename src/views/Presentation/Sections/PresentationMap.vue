
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  <h1>{{ this.map.title }}</h1>
  <img :src="this.map.image" :title="this.map.title" />
  <h3>{{ this.map.subtitle }}</h3>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      map: {}
    }
  },
  mounted() {
    var items = data[2].items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == this.id) {
        this.map = items[i]
      }
    }
    console.log(this.map)
  },
};
</script>