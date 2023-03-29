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
    title="School closure"
    :breadcrumb="[{ label: 'Navigation', route: '#' }, { label: 'History' }]"
  >
    <View
      title="The closing of the School"
      :code="paginationSimpleCode"
      id="The Closing of the School "
    >
      <PaginationSimple />
    </View>

    <View title="Stealth Closure">
      <inputOutlined />
    </View>

    <View title="With the Amalmation of Church Of England Middle School and Arch Bishop King into the Newly formed Christ The King Amalgmation the site was probably already doomed in it's current for having been a functional site for 7-10 year olds it was to serve a older student making the size and proportion of the classes unstatinable on the site." :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>

    <View title="New site in the future" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Fundamently after the councils shake of middle school's on th island and the subseqent redundancy of middles the amalgamtion set about making a new site by redevloping the Former ABK site to house the new Christ The King complex. C of E Middle had it's uses in the mean time as while construction was happening a temporary base was need for the schols day to day functions. " :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Inevitable Neglect" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
    <View title="The Old school was doomed from the decission to the choose the former ABK site for work and thus the slow degredation started as maintenance was of limited use on a site which was destined to be demolished. With all resources focused on the new campus on;y essential maintence was done and the school started to shpw it's age and fragility. A final farewell was kindly given by Christ The King to allow old students to visit the site before it was handed to contractors before demolition." :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>
  </BaseLayout>
</template>
