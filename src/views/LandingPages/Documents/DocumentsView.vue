<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import Footer from "./Sections/DocumentsFooter.vue";
// image
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <View 
      title="School Documents All about maps of the school" :code="header1Code" id="header-1">
      <HeaderOne />
      
      <a class="dropdown-item py-2 ps-3 border-radius-md" src="/src/main.js?t=1678137429864/"><h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"> School Documents </h6><span class="text-sm">All about maps of the school</span></a>
  
      <div id="app" data-v-app=""><h1>A reworked Image of the school in it's design phase</h1><img src="/src/assets/img/school maps/SCHOOLPLANFINAL.png" title="A reworked Image of the school in it's design phase"><h3>Png hand drawn image in inkscape</h3>
      </div>

      <a class="dropdown-item py-2 ps-3 border-radius-md" src="/src/main.js?t=1678137429864/"><h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"> School Documents </h6><span class="text-sm">All about maps of the school</span></a>
        <schoolmap />
      </view>
  </div>
  <Contact />
  <Footer />
</template>
