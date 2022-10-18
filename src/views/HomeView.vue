<template>
  <v-carousel
    v-model="currentSlide"
    height="100%"
    tabindex="-1"
    hide-delimiter-background
    @wheel="onWheel"
    @keyup.up.left="switchSlide(-1)"
    @keyup.down.right="switchSlide(1)"
  >
    <template v-slot:prev="{ props }">
      <div v-if="!isFirstSlide">
        <v-btn icon variant="tonal" @click="props.onClick">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    </template>
    <template v-slot:next="{ props }">
      <div :class="{ 'nav-button-right': isFirstSlide }">
        <v-btn icon variant="tonal" @click="props.onClick">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </template>
    <v-carousel-item v-for="slide in slides" :key="slide">
      <component :is="slide.component" v-bind="slide.data"></component>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { ref, computed } from "vue";
import debounce from "lodash.debounce";

import resume from "../assets/resume.json";

import HomeSlide from "../slides/HomeSlide.vue";
import SkillsSlide from "../slides/SkillsSlide.vue";
import AboutMeSlide from "../slides/AboutMeSlide.vue";
import ContactsSlide from "../slides/ContactsSlide.vue";
import WorkExpirienceSlide from "../slides/WorkExpirienceSlide.vue";

export default {
  components: {
    HomeSlide,
    SkillsSlide,
    AboutMeSlide,
    ContactsSlide,
    WorkExpirienceSlide,
  },
  setup() {
    const currentSlide = ref(0);
    const slides = [
      {
        component: HomeSlide,
        data: {
          fullname: resume.fullname,
          position: resume.position,
        },
      },
      {
        component: AboutMeSlide,
        data: {
          birthday: resume.birthday,
          town: resume.town,
          description: resume.description,
        },
      },
      { component: SkillsSlide, data: { skills: resume.skills } },
      { component: WorkExpirienceSlide, data: { jobs: resume.workExpirience } },
      { component: ContactsSlide, data: { contacts: resume.contacts } },
    ];

    const isFirstSlide = computed(() => {
      return currentSlide.value == 0;
    });

    const switchSlide = (direction = 0) => {
      const targetSlide = currentSlide.value + direction;

      currentSlide.value =
        targetSlide > slides.length - 1 || targetSlide < 0 ? 0 : targetSlide;
    };

    const onWheel = debounce(
      (event) => {
        if (event instanceof WheelEvent === false) {
          return;
        }

        const direction =
          event.deltaX < 0 || event.deltaY > 0
            ? 1
            : event.deltaX > 0 || event.deltaY < 0
            ? -1
            : 0;

        switchSlide(direction);
      },
      100,
      {
        leading: true,
        trailing: false,
      }
    );

    return {
      slides,
      onWheel,
      switchSlide,
      currentSlide,
      isFirstSlide,
    };
  },
};
</script>

<style scoped>
.v-carousel {
  outline: none;
}
.nav-button-right {
  width: 100%;
  text-align: end;
}
.v-carousel :deep(.v-window__controls) {
  position: fixed;
}
.v-carousel :deep(.v-carousel__controls) {
  padding-bottom: 1em;
  position: fixed;
}
</style>
