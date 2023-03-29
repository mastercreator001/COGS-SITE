<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Alerts page components
import SimpleAlerts from "./components/SimpleAlerts.vue";

// Alerts page components codes
import { simpleAlertsCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Memories Gallery"
    :breadcrumb="[
      { label: 'Attention Catchers', route: '#' },
      { label: 'Gallery1971' },
    ]"
  >
    <View
      title="Old Photos 1971 Onwards"
      :code="simpleAlertsCode"
      id="Gallery 1971 old Pictures"
      height="600"
    >
      <SimpleAlerts />
    </View>

    <View title="">
      <inputOutlined />
    </View>

    <View title="Early Pictures" :code="inputIconCode" id="Early Pictures">
      <InputIcon />
    </View>

    <View title="School Pictures" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Trips Away" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Events" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
