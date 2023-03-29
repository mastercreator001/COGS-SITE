<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Avatars page components
import AvatarGroup from "./components/AvatarGroup.vue";
import AvatarSize from "./components/AvatarSize.vue";

// Avatars page components codes
import { avatarGroupCode, avatarSizeCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="School Demolition in pictures"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Demolition of the iconic School' }]"
  >
    <View title="Demolition of the iconic School" :code="avatarGroupCode" id="avatar-group">
      <AvatarGroup />
    </View>
    <View title="School Demolition" :code="avatarSizeCode" id="avatar-size">
      <AvatarSize />
    </View>

    <View title="Early Pictures of the Demolition" :code="inputIconCode" id="Early Pictures">
      <InputIcon />
    </View>

    <View title="Mid progess of school removal" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Final Clearance" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Foundations Removed Every trace" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>


  </BaseLayout>
</template>
