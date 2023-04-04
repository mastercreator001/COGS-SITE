<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Pagination page components
import PaginationSimple from "./components/PaginationSimple.vue";

// Pagination page components codes
import { paginationSimpleCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="School Closure"
    :breadcrumb="[{ label: 'School', route: '#' }, { label: 'History' }]"
  ><img src="/src/assets/img/schoolClosing/schoolClosing1.png" alt="front of school shot">
    <View
      title="The closing of the School"
      :code="paginationSimpleCode"
      id="The Closing down of the School site 2009 "
    >
      <PaginationSimple />
    </View>
    <img src="/src/assets/img/schoolClosing/schoolClosing2.png" alt="Classroom picture">
    <View title="Slow Closure">
      <inputOutlined />
    </View>

    <View title="With the Amalmation of Church Of England Middle School and Arch Bishop King into the Newly formed Christ The King Amalgmation the site was probably already doomed in it's current form having been a functional site for 7-10 year olds it was to serve a older student making the size and proportion of the classes unstatinable on the site in it's current format." :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>
    <img src=" /src/assets/img/schoolClosing/schoolClosure5.png " alt="School fire credit Island Echo">
    <View title="New site in the future ,credit Island Echo" >
    </View>
 
    <View title="Fundamently after the councils decimation of middle school's on the Island and the subseqent redundancy of the middles amalgamtion set about making a new site by redevloping the Former ABK site to house the new Christ The King complex. C of E Middle had it's uses in the mean time as while construction was happening a temporary base was need for the schols day to day functions And the sit was referred to as the lowe campus, a reflection on the ages rather than the location. ">
    </View>
    <img src="/src/assets/img/schoolClosing/schoolClosing3.png" alt="School signs of neglect">
    <View title="Inevitable Neglect" >
      <InputDisabled />
    </View>

    <img src="/src/assets/img/schoolClosing/schoolClosing4.png" alt=" front view of the school">
    <View title="The Old school's future was decided from the decision to the choose the former ABK site for new campus and thus the slow degredation started as maintenance was of limited use on a site which was destined to be demolished. With all resources focused on the new campus only essential maintence was done and the school started to show it's age and fragility. A final farewell was kindly given by Christ The King to allow old students to visit the site before it was handed to contractors before demolition in late 2009 the site was finally closed and the contractors took control.">
    </View>
  </BaseLayout>
</template>
