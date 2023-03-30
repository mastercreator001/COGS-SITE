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
    title="Construction map ready"
    :breadcrumb="[{ label: 'Construction map', route: '#'}, { label: 'Construction map' }]"
  >Construction map
    <View
      title="Construction map"
      :code="formSimpleCode"
      id="ddh - "
      height="600">
      <FormSimple />
    </View>
    
    <View title="An enviable project, A new school a new vision and a new challenge ahead." :code="inputIconCode" id="Project">
      <InputIcon />
    </View>

    <View title="Built with a vision " :code="inputSuccessCode" id="Vision">
      <InputSuccess />
    </View>

    <View title="Innovation and tech" :code="inputErrorCode" id="Modern">
      <InputError />
    </View>

    <View title="Glimpses of future design" :code="inputDisabledCode" id="Asbestos usage">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
