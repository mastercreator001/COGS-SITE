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
    <View title="">
      <inputOutlined />
    </View>
    
    <View title="Input with icon" :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>

    <View title="Input success" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Input error" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Input disabled" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
