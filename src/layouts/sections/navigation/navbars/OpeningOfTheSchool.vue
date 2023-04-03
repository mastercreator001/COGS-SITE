<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";
import imgschoolMap from "@/assets/img/school maps/SCHOOLPLANFINAL.png";
// Navbars page components
import NavbarDark from "./components/NavbarDark.vue";

// Navbars page components codes
import { navbarDarkCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Opening of the School early map"
    :breadcrumb="[{ label: 'Navigation', route: '#' }]"
  >
  <img src="/src/assets/img/school maps/SCHOOLPLANFINAL.png" title="A reworked Image of the school in it's design phase">
    <View
      title="A reworked Image of the school in it's design phase, built from an original image in Inkscape and created into a svg image"
      id="School map 1"
      height="300  position-relative"
    >
      <schoolmap  />
    </View>

    <img src="/src/assets/img/school maps/advancedMap.jpg" title=" an early iamge of the school post construction">
    <View title="The School as any would have been well planned for and as such plans were generated to faciltate a well administered school built within approvals from the local council. As you can see above with the map recreated from an original the basic layout of the school was decided years previously. ">
      <inputOutlined />
    </View>

    <img src="/src/assets/img/school maps/bookMap.jpg" title="A map from the opening informatio leaflet given to staff and visitors upon opening">
  
    <View title="Decisions Decisions the school was ahead of it's time and was as you'd expect fairly innovative in regards to it's technology and design boasting A new computer room and study areas and a full library or as they are now termed a resource center.    " :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>

    <img src="src/assets/imgschool maps/schoolOpeningPamphlet.png" title="school opening pamphlet">
    <View title="Many changes undoubtely were decided before the school inception but some such as landscaping were although mostly preplanned were finally decided rather later. All part of the design procees but the school was to be a natural wondrland as well as a school. Indeed it its later days it actually had a nature reserve and a pond to compliment all the extra trees and predetermined landscaping already decided upon in the planning phase. " :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <img src="/src/assets/img/school maps/finalMapCTK.png" title="A final map of the school in it's pre demolition phase">
    <View title="A rather local affair, although the school had influence from the Diosease of Portsmouth and indeed The Church Of England it was designed by local architects and the materials where pratical were also sourced locally. The builders then would naturally be local as well as was the case in this construction effort. Although the school was new it had the innovations to stand above the rest with a new modern design and all the sports and gym equiptment to match any of the leading schools  " :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Funding was a joint venture for the school with assets being relaised and matched between IWCC and the Doisease Of Portsmouth as the main fund contributers. There was also a round of funding to keep the school ahead of the rest as parents were also asked to add into the schools funds for general repair maintenance and upkeep anoung other things. Primarily by the time parents were asked to assist the school had been finished and was in general use. " :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
