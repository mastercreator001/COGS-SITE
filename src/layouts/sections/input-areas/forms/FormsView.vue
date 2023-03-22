<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Forms page components
import FormSimple from "./components/FormSimple.vue";

// Forms page components codes
import { formSimpleCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Construction map"
    :breadcrumb="[{ label: 'Construction map', route: '#' }, { label: 'Construction map' }]"
  >Construction map
    <View
      title="Construction map"
      :code="formSimpleCode"
      id="ddh - "
      height="600"
    >
      <FormSimple />
    </View>
  </BaseLayout>
</template>
