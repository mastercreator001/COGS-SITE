<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Headers page components
import HeaderOne from "./components/HeaderOne.vue";

// Headers page components codes
import { header1Code } from "./components/codes";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Head Teachers Section"
    :breadcrumb="[
      { label: 'Page Section', route: '/sections/page-sections/page-headers' },
      { label: 'Head teachers' },
    ]"
  >
    <View title="All heads of School 1971-2009" :code="header1Code" id="header-1">
      <HeaderOne />
    </View>
  </BaseLayout>
</template>
