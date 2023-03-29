<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Modals page components
import SimpleModal from "./components/SimpleModal.vue";

// Modals page components codes
import { simpleModalCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="1980 onwards"
    :breadcrumb="[
      { label: '1980 onwards', route: '#' },
      { label: '1980 onwards' },
    ]"
  >
    <View title="1980 onwards" :code="simpleModalCode" id="simple-modal">
      <SimpleModal />
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
