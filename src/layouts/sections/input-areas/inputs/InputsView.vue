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
    title="Opening map"
    :breadcrumb="[{ label: 'Opening map', route: '#' }, { label: 'Floopy revolution' }]"
  >
    <View title="opening map" :code="inputDynamicCode" id="input-dynamic">
      <InputDynamic />
    </View>

    <View title="🌐 opening map" :code="inputStaticCode" id="input-static">
      <InputStatic />
    </View>

    <View title="To equal 1 Gigabyte, you would need 1,456 720 KB floppy disks. In the late 80's, the 5.25-inch floppy disk was on its way out and in 1987 the 3.5-inchfloppy disk had moved into the high density category with a capacity of 1.44 MB." :code="inputOutlinedCode" id="input-outlined">
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
