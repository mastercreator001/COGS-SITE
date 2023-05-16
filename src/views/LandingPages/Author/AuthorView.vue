<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import imgschoolhistorictotaloverview1 from"@/assets/img/schoolhistorictotaloverview1.png";

// sections
import Footer from "./Sections/AuthorFooter.vue";
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";

// image
</script>
<template>
  <DefaultNavbar  />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${imgschoolhistorictotaloverview1})` }"
      loading="lazy"
    >    
     
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Profile />
    <Posts />
  </div>
  <Contact />
  <Footer />
</template>
