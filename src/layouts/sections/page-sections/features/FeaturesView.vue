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
    title="Teachers Feature "
    :breadcrumb="[
      { label: 'Page Section', route: '/sections/page-sections/page-headers' },
      { label: 'School teachers' },
    ]"
  >
  <img data-v-5bda1810="" src="/src/assets/img/headteachers/teachersgroupbw.jpg" title="Senoir Staff">
    <View title="School teachers" :code="FeatureOne" id="feature-1" >
      
  <FeatureOne />
  <Text>hellllo</Text>  
  </View>
  </BaseLayout>
</template>
