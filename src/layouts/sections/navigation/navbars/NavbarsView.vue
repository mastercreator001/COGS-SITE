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
    <View
      title="A reworked Image of the school in it's design phase, built from an original image in Inkscape and created into a svg image"
      id="School map 1"
      height="300  position-relative"
    >
      <schoolmap  />
    </View>
  </BaseLayout>
</template>
