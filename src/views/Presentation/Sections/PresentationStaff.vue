
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  
  <h1>{{ this.teacher.title }}</h1>
  <img :src="this.teacher.image" :title="this.teacher.title" />
  <div class="teacherSubtitle">{{ this.teacher.subtitle }}</div>
  <h4>{{ this.teacher.headertext }}</h4>
  <div class="teacherText" v-html=this.teacher.text1></div>
  
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
    console.log(this.staff)
  },
};
</script>
<style scoped>
.teacherSubtitle { text-align: center;}
.teacherText {font-size: 1.2em; text-align: center}

</style>