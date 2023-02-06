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
    title="The Upgraded Computer"
    :breadcrumb="[{ label: 'Input Areas', route: '#' }, { label: 'Forms' }]"
  >
    <View
      title="The actual Killer computer"
      :code="formSimpleCode"
      id="form-simple"
      height="600"
    >
      <FormSimple />
    </View>
  </BaseLayout>
</template>
