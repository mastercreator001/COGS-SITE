
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  <h1>{{ this.teacher.title }}</h1>
  <img :src="this.teacher.image" :title="this.teacher.title" />
  <h3>{{ this.teacher.subtitle }}</h3>
  <div class="teacherText" v-html=this.teacher.text></div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      teacher: {}
    }
  },
  mounted() {
    var items = data[0].items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == this.id) {
        this.teacher = items[i]
      }
    }
  },
};
</script>
<style scoped>
.teacherText {font-size: 1.2em;}
</style>