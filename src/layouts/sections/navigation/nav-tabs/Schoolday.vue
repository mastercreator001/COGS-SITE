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
    :breadcrumb="[{ label: 'Navigation', route: 'school' }, { label: 'School day' }]"
  ><img src="src/assets/img/schoolhistorictotaloverview1.png" title="School day itinerary">

    <View title="School Day structure"   
    subtitle="The structure of the school day "
    :code="TabsSimpleCode" id="tabs-simple">
      
    
    <TabsSimple />
    </View>

    <View title="School Start time 0910 or was it 0900">
      <inputOutlined />
    </View>

    <View title="Early Morning break 10 am for 10 minutes or 20 minutes">
      <inputOutlined />
    </View>

    <View title="Lunchtime 12:30 or 1pm" :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>

    <View title="Was the lunch break split up to allow for space in the dinning hall?" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="No Afternoon break but do you remember the school finish time? 15:40 seems correct to me" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="How was the lunchtime started? and the home time given, not that we need any asking to head home" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
