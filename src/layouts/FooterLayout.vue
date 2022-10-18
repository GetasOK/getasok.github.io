<template>
  <v-footer id="actions" color="transparent">
    <!-- TODO: Realize resume download -->
    <!-- <v-btn icon color="primary" class="float-end ml-3" @click="downloadResume">
      <v-icon>mdi-file-download-outline</v-icon>
      <v-tooltip activator="parent" location="top">
        Скачать резюме в PDF
      </v-tooltip>
    </v-btn> -->
    <v-switch
      v-model="theme.global.name.value"
      inset
      hide-details
      class="float-end"
      true-value="dark"
      false-value="light"
      true-icon="mdi-weather-night"
      false-icon="mdi-white-balance-sunny"
    />
  </v-footer>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  setup() {
    return {
      theme: useTheme(),
    };
  },
};
</script>

<style scoped>
#actions {
  right: 1em;
  bottom: 2em;
  width: 100%;
  display: block;
  position: fixed;
}
</style>
