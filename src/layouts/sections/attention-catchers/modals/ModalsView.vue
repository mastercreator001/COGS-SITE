<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Modals page components
import SimpleModal from "./components/SimpleModal.vue";

// Modals page components codes
import { simpleModalCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="1980 onwards"
    :breadcrumb="[
      { label: '1980 onwards', route: '#' },
      { label: '1980 onwards' },
    ]"
  >
    <View title="1980 onwards" :code="simpleModalCode" id="simple-modal">
      <SimpleModal />
    </View>
  </BaseLayout>
</template>
