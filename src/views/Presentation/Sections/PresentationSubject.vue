
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  
  <h1>{{ this.subject.title }}</h1>
  <img :src="this.subject.image" :title="this.subject.title" />
  <h3>{{ this.subject.subtitle }}</h3>
  <h4>{{ this.subject.headertext }}</h4>
  <div class="subjectText" v-html=this.subject.text1></div>

</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      subject: {}
    }
  },
  mounted() {
    var items = data[1].items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == this.id) {
        this.subject = items[i]
      }
    }
    console.log(this.subject)
  },
};
</script>
<style scoped>
.subjectsubtitle { text-align: center;}
.subjectText {font-size: 1.2em;}
.subjectText {text-align: center;}
</style>