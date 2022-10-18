<template>
  <v-sheet color="transparent">
    <v-row>
      <v-col>
        <slide-header text="Опыт работы" icon="briefcase-outline" />
      </v-col>
    </v-row>
    <v-row v-if="!isMobile" class="mt-5 mr-5">
      <v-col>
        <v-timeline
          side="end"
          truncate-line="end"
          direction="horizontal"
          line-color="red-lighten-2"
        >
          <v-timeline-item
            v-for="job in jobs"
            :key="job"
            fill-dot
            dot-color="red-lighten-1"
          >
            <template v-slot:opposite>
              <div class="text-center font-weight-light">
                <p class="text-h5">{{ job.company }}</p>
                <p class="text-h5">{{ job.position }}</p>
                <p class="font-weight-thin">
                  {{ job.startDate }} - {{ job.endDate }}
                </p>
                <p class="font-weight-thin">
                  ({{ workDuration(job.startDate, job.endDate) }})
                </p>
              </div>
            </template>
            <v-card>
              <v-card-text>
                {{ job.duties }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row v-else class="mt-5">
      <v-col>
        <v-timeline side="end" truncate-line="start" line-color="red-lighten-2">
          <v-timeline-item
            v-for="job in [...jobs].reverse()"
            :key="job"
            fill-dot
            dot-color="red-lighten-1"
          >
            <v-card class="mr-4">
              <v-card-subtitle class="mt-2">
                <div class="font-weight-light">
                  <p class="text-h5">{{ job.company }}</p>
                  <p class="text-h6">{{ job.position }}</p>
                  <p>
                    {{ job.startDate }} - {{ job.endDate }} ({{
                      workDuration(job.startDate, job.endDate)
                    }})
                  </p>
                </div>
              </v-card-subtitle>
              <v-card-text>
                {{ job.duties }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
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
    jobs: { required: true, type: Array },
  },
  setup() {
    const { mobile: isMobile } = useDisplay();

    const workDuration = (startDate, endDate) => {
      startDate = new Date(startDate);
      endDate = new Date(endDate);

      if (isNaN(startDate) || isNaN(endDate)) {
        return "Incorrect dates provided";
      }

      const diff = Math.floor(
        (endDate - startDate) / (1000 * 60 * 60 * 24 * 30)
      );

      return `${diff} ${
        diff % 10 == 1
          ? "месяц"
          : (diff % 100 > 10 && diff % 100 < 20) || diff % 10 > 4
          ? "месяцев"
          : "месяца"
      }`;
    };

    return {
      isMobile,
      workDuration,
    };
  },
};
</script>

<style scoped>
.v-timeline :deep(.v-timeline-item__body) {
  align-self: unset !important;
}
</style>
