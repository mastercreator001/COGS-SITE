<script setup>

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";
import imgschoolMap from "@/assets/img/school maps/SCHOOLPLANFINAL.png";

// Navbars page components
import NavbarDark from "./components/NavbarDark.vue";

// Headers page components
import HeaderOne from "./components/HeaderOne.vue";

// Headers page components codes
import { header1Code } from "./components/codes";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Docs/School Documents
All about maps of the school"
    :breadcrumb="[
      { label: 'School Documents', route: '/sections/page-sections/page-headers' },
      { label: 'All about maps of the school' },
    ]"
  >
    <View 
      title="School Documents Al about maps of the school" :code="header1Code" id="header-1">
      <HeaderOne />
      
      <a class="dropdown-item py-2 ps-3 border-radius-md" src="/src/main.js?t=1678137429864/"><h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"> School Documents </h6><span class="text-sm">All about maps of the school</span></a>
  
      <div id="app" data-v-app=""><h1>A reworked Image of the school in it's design phase</h1><img src="@/assets/img/school maps/SCHOOLPLANFINAL.png" title="A reworked Image of the school in it's design phase"><h3>Png hand drawn image in inkscape</h3>
      </div>

      <a class="dropdown-item py-2 ps-3 border-radius-md" src="/src/main.js?t=1678137429864/"><h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"> School Documents </h6><span class="text-sm">All about maps of the school</span></a>
        <schoolmap />
      </view>
  </BaseLayout>
</template>
