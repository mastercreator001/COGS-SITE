<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Features page components
import FeatureOne from "./components/FeatureOne.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Teachers Feature "
    :breadcrumb="[
      { label: 'Page Section', route: '/sections/page-sections/page-headers' },
      { label: 'School teachers' },
    ]"
  >
  <img data-v-5bda1810="" src="/src/assets/img/headteachers/teachersgroupbw.jpg" title="Senoir Staff">
    <View title="School teachers" :code="FeatureOne" id="feature-1" >
      
  <FeatureOne />
  <Text>hellllo</Text>  
  </View>

  <View title="English Teachers" :code="inputIconCode" id="Early Pictures">
      <InputIcon />
    </View>

    <View title="Maths Teachers" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Science Teachers" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Physicial Education Teachers" :code="inputDisabledCode" id="input-disabled">
      <View title="Early Pictures of the Demolition" :code="inputIconCode" id="Early Pictures">
      <InputIcon />
    </View>

    <View title="French Teachers" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Geography Teachers" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Religious Education Teachers" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
      <InputDisabled />
    </View>
    <View title="Design And Technology Teachers" :code="inputIconCode" id="Early Pictures">
      <InputIcon />
    </View>

    <View title="Domestic Science Teachers" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Music Teachers" :code="inputErrorCode" id="input-error">
      <InputError />
  
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
