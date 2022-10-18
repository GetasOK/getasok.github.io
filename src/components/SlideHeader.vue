<template>
  <div class="text-h4 text-sm-h3 text-md-h2 mt-4 fit-content">
    <p class="font-weight-thin ml-10">
      {{ text }}
      <v-icon v-if="icon" size="small">mdi-{{ icon }}</v-icon>
    </p>
    <v-divider color="red" thickness="4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "SlideHeader",
  props: {
    text: { required: true, type: String },
    icon: { required: false, type: String },
  },
};
</script>

<style scoped>
.fit-content {
  width: fit-content;
}
</style>
