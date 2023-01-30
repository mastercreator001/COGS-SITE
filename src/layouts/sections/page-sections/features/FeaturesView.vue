<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Features page components
import FeatureOne from "./components/FeatureOne.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Teachers Features "
    :breadcrumb="[
      { label: 'Page Section', route: '/sections/page-sections/page-headers' },
      { label: 'School teachers' },
    ]"
  >
    <View title="School teachers" :code="feature1Code" id="feature-1">
      <FeatureOne />
    </View>
  </BaseLayout>
</template>
