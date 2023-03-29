<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Badges page components
import BadgesGradient from "./components/BadgesGradient.vue";
import BadgesSimple from "./components/BadgesSimple.vue";
import BadgesSimpleRounded from "./components/BadgesSimpleRounded.vue";

// Badges page components codes
import {
  badgesGradientCode,
  badgesSimpleCode,
  badgesRoundedCode,
} from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Current Site Status Christ The King School"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Badges' }]"
  >
    <View
      title="Current site use"
      :code="badgesGradientCode"
      id="Current site use"
    >
      <BadgesGradient />
    </View>

    <View title="Christ The King Site" :code="badgesSimpleCode" id="badges-simple">
      <BadgesSimple />
    </View>

    <View
      title="Car park"
      :code="badgesRoundedCode"
      id="badges-rounded"
    >
      <BadgesSimpleRounded />
    </View>

    <View title="Early Pictures" :code="inputIconCode" id="Early Pictures">
      <InputIcon />
    </View>

    <View title=" Infastructure Pictures" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Near Completition" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Completed" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
