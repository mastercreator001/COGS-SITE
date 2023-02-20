
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  <h1>{{ this.computer.title }}</h1>
  <img :src="this.computer.image" :title="this.computer.title" />
  <h3>{{ this.computer.subtitle }}</h3>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      computer: {}
    }
  },
  mounted() {
    var items = data[3].items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == this.id) {
        this.computer = items[i]
      }
    }
    console.log(this.computer)
  },
};
</script>