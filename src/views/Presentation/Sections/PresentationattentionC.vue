
<script setup>
import data from "./Data/designBlocksData";
</script>
<template>
  <h1>{{ this.attentionC.title }}</h1>
  <img :src="this.attentionC.image" :title="this.attentionC.title" />
  <h3>{{ this.attentionC.subtitle }}</h3>
  <div class="attentionCText" v-html=this.attentionC.text1></div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      attentionC: {}
    }
  },
  mounted() {
    var items = data[4].items
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == this.id) {
        this.attentionC = items[i]
      }
    }
  },
};
</script>
<style scoped>
.attentionCText {font-size: 1.2em;}
</style>