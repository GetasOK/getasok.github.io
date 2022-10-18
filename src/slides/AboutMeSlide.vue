<template>
  <v-sheet color="transparent">
    <v-row>
      <v-col>
        <slide-header text="Обо мне" icon="account" />
      </v-col>
    </v-row>
    <v-row class="justify-center mt-10">
      <v-card class="w-75" flat color="transparent">
        <v-row class="d-none d-md-flex">
          <v-col cols="4">
            <v-img class="rounded" src="../assets/photo.jpg" />
          </v-col>
          <v-col class="ma-2">
            <v-card-text
              class="border-lg border-dashed border-red font-weight-thin text-h6 text-lg-h5 line-spacing-1 text-max-h-50"
            >
              {{ description }}
            </v-card-text>
            <v-card-text class="text-end">
              <v-row>
                <v-col cols="11">
                  <span>
                    Возраст: {{ ageInYears(birthday) }}
                    <v-tooltip activator="parent" location="top">
                      Дата рождения:
                      {{ new Date(birthday).toLocaleDateString() }}
                    </v-tooltip>
                  </span>
                  <p>Город: {{ town }}</p>
                </v-col>
                <v-col cols="1" class="align-self-center">
                  <v-icon size="x-large"> mdi-information-outline </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row class="d-md-none">
          <v-col>
            <div class="mb-3 text-center">
              <v-avatar size="128px">
                <v-img cover src="../assets/photo.jpg" />
              </v-avatar>
            </div>
            <v-card-text class="border-md border-red font-weight-thin text-h6">
              {{ description }}
            </v-card-text>
            <v-card-text class="text-end">
              <v-row>
                <v-col cols="11">
                  <span>
                    Возраст: {{ ageInYears(birthday) }}
                    <v-tooltip activator="parent" location="top">
                      Дата рождения:
                      {{ new Date(birthday).toLocaleDateString() }}
                    </v-tooltip>
                  </span>
                  <p>Город: {{ town }}</p>
                </v-col>
                <v-col cols="1" class="align-self-center pa-1">
                  <v-icon size="x-large"> mdi-information-outline </v-icon>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-sheet>
</template>

<script>
import SlideHeader from "../components/SlideHeader.vue";

export default {
  components: {
    SlideHeader,
  },
  props: {
    birthday: { required: true, type: String },
    town: { required: true, type: String },
    description: { required: true, type: String },
  },
  setup() {
    const ageInYears = (age) => {
      const now = new Date();
      age = new Date(age);

      if (isNaN(age)) {
        return "Incorrect date provided";
      }

      const diff =
        now.getFullYear() -
        age.getFullYear() -
        (now.getMonth() <= age.getMonth() && now.getDate() < age.getDate()
          ? 1
          : 0);

      return `${diff} ${
        diff % 10 == 1
          ? "год"
          : (diff % 100 > 10 && diff % 100 < 20) || diff % 10 > 4
          ? "лет"
          : "года"
      }`;
    };

    return {
      ageInYears,
    };
  },
};
</script>

<style scoped>
.border-red {
  border-color: #f44336 !important;
}
.text-max-h-50 {
  max-height: 50vh;
  overflow: hidden;
}
.line-spacing-1 {
  line-height: 1.2em;
}
.align-right {
  display: flex;
  justify-content: flex-end;
}
</style>
