<template>
  <v-sheet color="transparent">
    <v-row>
      <v-col>
        <slide-header text="Контакты" icon="account-box-outline" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center mt-16">
        <v-card flat color="transparent" width="75vw">
          <v-card-text>
            <div v-for="(contact, index) in contacts" :key="contact">
              <div class="d-flex justify-space-between">
                <span class="text-h6 text-md-h4 font-weight-thin">
                  {{ contact.name }}
                </span>
                <v-btn
                  target="_blank"
                  variant="outlined"
                  :href="
                    contact.type == 'email' ? 'mailto:' : '' + contact.link
                  "
                >
                  {{ contact.profile ?? contact.link }}
                  <v-tooltip
                    v-if="contact.hint"
                    activator="parent"
                    location="top"
                  >
                    {{ getHint(contact) }}
                  </v-tooltip>
                </v-btn>
              </div>
              <v-divider
                v-if="index + 1 !== contacts.length"
                class="my-10 border-dashed border-red"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
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
    contacts: { required: true, type: Object },
  },
  setup() {
    const getHint = (contact) => {
      return contact.type == "email"
        ? "Отправить письмо"
        : contact.type == "link"
        ? contact.link.includes("https://t.me/")
          ? "Написать в Telegram"
          : contact.link.includes("https://github.com/")
          ? "Открыть профиль в GitHub"
          : "Открыть ссылку"
        : "";
    };

    return {
      getHint,
    };
  },
};
</script>

<style scoped>
.border-red {
  border-color: #f44336 !important;
}
</style>
