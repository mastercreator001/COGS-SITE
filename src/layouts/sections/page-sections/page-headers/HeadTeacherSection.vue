<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Headers page components
import HeaderOne from "./components/HeaderOne.vue";

// Headers page components codes
import { header1Code } from "./components/codes";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";
import imgfelton from "@/assets/img/Headteachers/feltonimg.jpg";
// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>

  <BaseLayout
    title="Head Teachers Section"
    :breadcrumb="[
      { label: 'Heads Of School', route: '/sections/page-sections/page-headers' },
      { label: 'Head teachers' },
    ]"
  >
  <img  src="/src/assets/img/Headteachers/harrison.jpg" title="Head Teachers">
    <View title="All head teachers of C Of E Middle School 1971-2009" :code="header1Code" id="header-1">
      <HeaderOne />
    </View>
    <View title="Mr Knight" :code="inputIconCode" id="Church Of England Middle School">
      <InputIcon />
    </View>

    <View title="Mr Harrision" :code="inputSuccessCode" id="Church Of England Middle School">
      <InputSuccess />
    </View>

    <View title="Mr Bloomfield" :code="inputErrorCode" id="Church Of England Middle School">
      <InputError />
    </View>

    <View title="Mr P Goodhead, Christ The King Merger" :code="inputDisabledCode" id="Christ The King, Lower Campus ">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
add text box and text