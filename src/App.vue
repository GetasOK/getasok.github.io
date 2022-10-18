<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <v-slide-y-transition mode="out-in">
        <component :is="Component" />
      </v-slide-y-transition>
    </router-view>
    <footer-layout></footer-layout>
  </v-app>
</template>

<script>
import FooterLayout from "./layouts/FooterLayout.vue";

export default {
  components: {
    FooterLayout,
  },
};
</script>
