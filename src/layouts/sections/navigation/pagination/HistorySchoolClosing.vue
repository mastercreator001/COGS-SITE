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
    
    </View>

    <View title="Previous middle schools below have now been phased out during the transition to a two-tier education system. Education on the Island has really suffered since this happened and most of the secondary schools are now deemed unsatisfactory or have gone into special measures.
    The lower campus of Christ the King College (formerly Trinity Church of England Middle School).
    There were originally 16 state-maintained middle schools on the Isle of Wight, including two voluntary aided church schools (which were the foundation for the new Christ the King College) and two controlled church schools. In July 2008, the two voluntary aided middle schools (Archbishop King Catholic Middle School and Trinity Church of England Middle School), which are both located on Wellington Road in Carisbrooke, closed and reopened in September of the same year as Christ the King College, and from September 2009, kept on its Year 8 pupils of the previous academic year as Year 9 pupils and started the transition from middle school to secondary school age range. In line with the rest of the Island, September 2009 was the last year in which a Year 5 was admitted to the Christ the King College. Instead, all Year 5 pupils, and then consequently Year 6 pupils, on the island remained in primary schools from September 2010 onwards. With the Amalmation of Church Of England Middle School and Arch Bishop King into the Newly formed Christ The King College the site was probably already doomed in it's current form having been a functional site for 6-9 year olds it was to serve a older student making the size and proportion of the classes unstatinable on the site in it's current format." >
    
    </View>
    <img src=" /src/assets/img/schoolClosing/schoolClosure5.png " alt="School fire credit Island Echo" class="center">
    <View title="New site in the future ,credit Island Echo" >
    </View>
 
    <View title="Fundamently after the councils decimation of middle school's on the Island and the subseqent redundancy of the middles amalgamtion set about making a new site by redevloping the Former ABK site to house the new Christ The King complex. C of E Middle had it's uses in the mean time as while construction was happening a temporary base was need for the schools day to day functions And the site was referred to as the lowe campus, a reflection on the ages rather than the location on the road. ">
    </View>
    <img src="/src/assets/img/schoolClosing/schoolClosing3.png" alt="School signs of neglect" class="center">
    <View title="Inevitable Neglect" >
    </View>

    <img src="/src/assets/img/schoolClosing/schoolClosing4.png" alt=" front view of the school">
    <View title="The Old school's future was decided from the decision to the choose the former ABK site for new campus and thus the slow degredation started as maintenance was of limited use on a site which was destined to be demolished. With all resources focused on the new campus only essential maintence was done and the school started to show it's age and fragility. A final farewell was kindly given by Christ The King to allow old students to visit the site before it was handed to contractors before demolition in late 2009 the site was finally closed and the contractors took control.">
    </View>
  </BaseLayout>
</template>
