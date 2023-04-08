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
    <View title="All head teachers of Church Of Englaand Middle School 1971-2008 Welly Road ">
      <HeaderOne />
    </View>

    <img src="/src/assets/img/Headteachers/mrKnightlarge.png" alt="Mr Knight large">
    <View title="Mr Knight" id="Church Of England Middle School">
    </View>

  
    <View title="Mr Knight was as many have said firm fair and strict which you would expect of a school master or headteacher. Having started the school and selected many of the original staff he created the school and it's success. 
    His passing is at the grand old age of 93 with his family around him to comfort him into his new life beyond ours. 
    We can no longer see him or feel him but he is still with us all. 
    I have had the privilege to speak to Mrs Hilary Knight and she has asked me to pass along her thanks for all the kind messages but has also written a short piece that has been included below.
    AS WRITTEN BY Mrs Hilary Knight 
    It is 50 years since Tony Knight came to The Isle of Wight and was privileged to start the C of E Middle School and to guide it’s early years and it’s wonderful dedicated and carefully picked staff. He was deeply committed to its aims and always concerned to make Welly Road the best he could for each and all. 
    He had so may proud and happy memories. 
    Sadly he has departed this world after 93 well lived and enjoyed years. This photo was taken on his 90 th birthday.
    By Hilary Knight wife and lifetime partner of Mr Tony Knight. 
    Please any thoughts comments and memories can be added and I'm sure will be read by the family. 
    As usual like post comment and discuss, we are all Trinity. — with Hilary Knight." id="Church Of England Middle School">
    </View>

    <img src="/src/assets/img/Headteachers/harrisionLarge.png" alt="Large Mr Harrision on sxhool trip">
    <View title="Mr Harrision" id="Trinity Church Of England Aided Middle School">
    </View>
    <View title="Mr Harrision was an amazing headteacher he was the second head for the school but had a instant calmness about him that would easily set you at ease. He was my headteacher in my stint at C Of E Middle between 1986 and 1990 as well as being my second headteacher he was also the best in my opinion. Mr Harrision was always to be found around the schoo either filling in or looking after the important bits for the interest of the school and you can bet he would have a grey suit or very close and some super shiny shoes as I remember. As roll models go he was one of the best for me as I always found him very fair midly manoured and never on the scarey end of intimidating. Mr Harrision was appointed Lay Cannon at Portsmouth catherdral in 1992 and after 10 happy years at welly road he left to take up a new position at County Hall sadly it did not last long as he took early retirement. Although he was offered a maths teaching job at welly road he wanted to retire and enjoy his golden years with his wife Judith. Mr Harrison has sadly left us now but he will forever be in our hearts and minds a s a reassuringly pulse of the school always willing to help.  I find his loss very sad as he such a gentle and kind soul R.I.P  Mr Harrision"  id="Church Of England Middle School">
    </View>

    

    <img src="/src/assets/img/Headteachers/mrBloomfieldlarge.png" alt="Mr Bloomfield Large">
    <View title="Mr Bloomfield" id="Church Of England Aided Middle School">
    </View>
    <View title="Mr Bloomfield was the new headteacher and the third to take up the gauntlet after Mr Harrision for former headteacher moved to pastures new. Mr Bloomfield arrived in late 1992 and was taking a position in a well established school and had the benefit of a fantastic teaching staff to assist him in delivering a outstanding sylabus to the students. I can't speak personally about Mr Bloomfied as I never actully met him but He was a well liked head teacher and delivered on his leadership roll frequently filling the shoes of the former heads. In the picture you can see thim attending a red nose fundraiser for the charity Comic Relief." id="Church Of England Middle School">
    </View>

    <img src="/src/assets/img/Headteachers/mrspGoodheadlarge.png" alt="Pat goodhead unknown no image">
    <View title="Mrs P Goodhead, Christ The King Merger"  id="Christ The King, Lower Campus ">
    </View>
    <View title="Mrs P Goodhead was appointed headteacher of both sites in the early days before the merger was finaised.The desire to expand beyond the then-current age range of 9–13 years was first registered in December 2004, shortly after a new headteacher, Pat Goodhead, was appointed. In 2006, after outstanding Ofsted inspections for Trinity, and the need for a new headteacher for Archbishop King, a joint governing body committee was formed and Goodhead was appointed headteacher of both Trinity and Archbishop King. Amalgamation of the two schools moved on as there were positive responses from all involved, including clergy, parents and staff, which was confirmed during an official review. The schools were fully amalgamated in September 2008, resulting in the closure of Trinity and Archbishop King middle schools an the creation of Chist The King College. Mrs Good head continued to oversee both schools throught their tranisition phases. Formelry C Of E Middle (Trinty) was refered to as the lower campus closed in August 2008 reopening as Christ the King Lower campus in September of the same year. Pupils from the previous term who were in year 8 were retained and transferred into year 9's of CTKC. Any photos or links to images of Mrs Goodhead would be most appreciated. ">
    id="Christ The King, Lower Campus "></View>
  </BaseLayout>
</template>
