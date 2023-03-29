<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";
import imgschoolMap from "@/assets/img/school maps/SCHOOLPLANFINAL.png";
// Navbars page components
import NavbarDark from "./components/NavbarDark.vue";

// Navbars page components codes
import { navbarDarkCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="SVG School Map"
    :breadcrumb="[{ label: 'Navigation', route: '#' }]"
  >
  <img src="/src/assets/img/school maps/SCHOOLPLANFINAL.png" title="A reworked Image of the school in it's design phase">
    <View
      title="A reworked Image of the school in it's design phase, built from an original image in Inkscape and created into a svg image"
      id="School map 1"
      height="300  position-relative"
    >
      <schoolmap  />
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
