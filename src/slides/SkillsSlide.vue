<template>
  <v-sheet color="transparent">
    <v-row>
      <v-col>
        <slide-header text="Навыки" icon="wrench-outline" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-5">
      <v-card
        flat
        width="75vw"
        color="transparent"
        class="border-md border-dashed border-red"
      >
        <v-card-title
          class="text-center font-weight-thin text-h5 text-md-h4 text-lg-h3"
        >
          Hard Skills
        </v-card-title>
        <v-card-text>
          <div v-for="(skill, index) in skills" :key="skill">
            <p>{{ skill.name }}:</p>
            <span v-for="element in skill.elements" :key="element">
              <v-chip
                class="ma-1"
                :color="element.color ?? null"
                :prepend-icon="element.icon ?? null"
                :size="isMobile ? 'default' : 'large'"
              >
                {{ element.name }}
              </v-chip>
            </span>
            <v-divider v-if="index + 1 !== skills.length" class="my-2" />
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-sheet>
</template>

<script>
import { useDisplay } from "vuetify";
import SlideHeader from "../components/SlideHeader.vue";

export default {
  components: {
    SlideHeader,
  },
  props: {
    skills: { required: true, type: Array },
  },
  setup() {
    const { mobile: isMobile } = useDisplay();

    return {
      isMobile,
    };
  },
};
</script>

<style scoped>
.border-red {
  border-color: #f44336 !important;
}
</style>
