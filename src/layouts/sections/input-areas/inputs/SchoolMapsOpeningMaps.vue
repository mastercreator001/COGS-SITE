<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Inputs page components
import InputStatic from "./components/InputStatic.vue";
import InputDynamic from "./components/InputDynamic.vue";
import inputOutlined from "./components/InputOutlined.vue";
import InputIcon from "./components/InputIcon.vue";
import InputSuccess from "./components/InputSuccess.vue";
import InputError from "./components/InputError.vue";
import InputDisabled from "./components/InputDisabled.vue";

// Inputs page components codes
import {
  inputStaticCode,
  inputOutlinedCode,
  inputDynamicCode,
  inputSuccessCode,
  inputIconCode,
  inputErrorCode,
  inputDisabledCode,
} from "./components/codes";

//nav-pills & material-input
import setNavPills from "@/assets/js/nav-pills";
import setMaterialInput from "@/assets/js/material-input";

//hook
onMounted(() => {
  setNavPills();
  setMaterialInput();
});
</script>
<template>
  <BaseLayout
    title="Opening Map of the School Concept art"
    :breadcrumb="[{ label: 'Opening map', route: '#' }, { label: 'A more detailed map featuring landscaping elements' }]"
  ><img src="/src/assets/img/school maps/advancedMap.jpg" title="More detailed map">
    <View title="Opening map Concept" :code="inputDynamicCode" id="input-dynamic">
      <InputDynamic />
    </View>

    <View title="🌐 Opening map" :code="inputStaticCode" id="input-static">
      <InputStatic />
    </View>
    <img src="/src/assets/img/school maps/advancedMap.jpg" title="More detailed map">
    <View title="Lanscaping">
      <inputOutlined />
    </View>

    <View title="An artists interpretation " :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>

    <View title="A view of the future" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="How did the map compare to the actual design" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>
  </BaseLayout>
</template>
