<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Tooltips And Popovers page components
import Popovers from "./components/Popovers.vue";
import Tooltips from "./components/Tooltips.vue";

// Tooltips And Popovers page components codes
import { popoversCode, tooltipsCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Trips"
    :breadcrumb="[
      { label: 'Trips', route: '#' },
      { label: 'Trips for the school' },
    ]"
  >
    <View title="Singleton 1st years, Mainland day trip" :code="popoversCode" id="Singleton Trip">
      <Popovers />
    </View>

    <View title="Totland 2nd years, Island based stay over" :code="tooltipsCode" id="tooltips">
      <Tooltips />
    </View>
    <View title="Malham in Yorkshire trip 3rd Years, a week away" :code="inputIconCode" id="Malham in Yorkshire">
      <InputIcon />
    </View>

    <View title="Poole in Dorset Adventure center 4th years" :code="inputSuccessCode" id="Poole in Dorset">
      <InputSuccess />
    </View>

    <View title="Carisbrooke Castle " :code="inputErrorCode" id="Carisbrooke Castle">
      <InputError />
    </View>

    <View title="Roman Villa Newport, mutiple years" :code="inputDisabledCode" id="Newport, Roman Villa ">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
