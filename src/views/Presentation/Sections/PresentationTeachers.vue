
<script setup>
import CenteredBlogCard from "../../../examples/cards/blogCards/CenteredBlogCard.vue";
import data from "./Data/designBlocksData";
defineProps({
  data: {
    type: Array,
    required: true,
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  },
})
</script>
<template>
    <div
      class="col-md-4 mt-md-0"
      v-for="{ image, title, subtitle, route } in items"
      :key="title"
    >
        <CenteredBlogCard
            :image="image"
            :title="title"
            :description="subtitle"
            :action="route">
        </CenteredBlogCard>
    </div>
</template>