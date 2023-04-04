<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Nav tabs page components
import TabsSimple from "./components/TabsSimple.vue";
import imgschoolhistorictotaloverview1 from"@/assets/img/schoolhistorictotaloverview1.png";
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
  >
  
  <img src="/src/assets/img/schoolDay/schoolDiary.png" alt="My school diary ">
    <View title="School Day structure"   
    subtitle="The structure of the school day all started with your time table, do you still have yours? "
    >
      </View>
    <img src="/src/assets/img/schoolDay/09.10Clock.png" alt="09.10">
    <View title="School Start time 
    1) 09:10  was registration, in form class">
      <inputOutlined />
    </View>
    
    <img src="/src/assets/img/schoolDay/09.15Clock.png" alt="09.15">
    <View title="School 1st lesson period
    2) 09:15 to 10.25 1st lesson dependant on your diary and the day dictated your class or form group.">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/schoolDay/10.25Clock.png" alt="10.25">
    <View title="School 2nd lesson period
    3) 10.25 to 11.35  2nd lesson dependant on your diary and the day dictated your class or form group.">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/schoolDay/11.35Clock.png" alt="11.35">
    <View title="School morning break time 20 minutes
    4) 11.35 to 11.55 and break time had arrived, for 20 minutes.">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/schoolDay/11.55Clock.png" alt="11.55">
    <View title="School 3rd lesson period
    5) 11.55 to 13.05 3rd lesson dependant on your diary and the day dictated your class or form group.">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/schoolDay/14.05Clock.png" alt="14.05">
    <View title="School 4th lesson period
    6) 14.05 to 1500 4th lesson dependant on your diary and the day dictated your class or form group.">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/schoolDay/hometime.png" alt="home time">
    <View title="Home time and awaiting the bell.
    4) 15.00 was home time, bus walk car? whichever you did it was a relief.">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/schoolDay/assemblyTime.png" alt="Assembly">
    <View title="School assemblies ? once a week or more ">
      <inputOutlined />
    </View>

    <View title="Lunchtime 12:30 or 1pm or did you have a different time ?">
    </View>

    <View title="Was the lunch break split up to allow for space in the dinning hall?" >
      
    </View>

    <View title="No Afternoon break but do you remember the school finish time? 15:40 seems correct to me or perhaps as per my school diary it was 15.00 or shortly after." >
    </View>

    <img src="/src/assets/img/schoolhistorictotaloverview1.png" title="School day itinerary">
    <View title="How was the lunchtime started? and the home time given, not that we need any asking to head home">
    </View>
  </BaseLayout>
  </template>
