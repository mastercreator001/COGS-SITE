<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Tooltips And Popovers page components
import Popovers from "./components/Popovers.vue";
import Tooltips from "./components/Tooltips.vue";

// Tooltips And Popovers page components codes
import { popoversCode, tooltipsCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Trips"
    :breadcrumb="[
      { label: 'Trips', route: '#' },
      { label: 'Trips for the school' },
    ]"
  >
    <View title="Singleton, totland, Malham, Poole" :code="popoversCode" id="popovers">
      <Popovers />
    </View>

    <View title="Tooltips" :code="tooltipsCode" id="tooltips">
      <Tooltips />
    </View>
  </BaseLayout>
</template>
