<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Nav tabs page components
import TabsSimple from "./components/TabsSimple.vue";
import imgschoolhistorictotaloverview1 from "@/assets/img/schoolhistorictotaloverview1.png";
// Nav tabs page components codes
import { TabsSimpleCode } from "./components/Codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";


//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="School Day"
    subtitle="The structure of the school day "
    text="Start time"
    :breadcrumb="[{ label: 'Navigation', route: 'school' }, { label: 'Nav Tabs' }]"
  ><img src="src/assets/img/schoolhistorictotaloverview1.png" title="More detailed map">

    <View title="School Day structure"   
    subtitle="The structure of the school day "
    :code="TabsSimpleCode" id="tabs-simple">
      
    
    <TabsSimple />
    </View>
  </BaseLayout>
</template>
