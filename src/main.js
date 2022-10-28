import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

//Fonts
import "@fontsource/roboto";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";

createApp(App).use(router).use(vuetify).mount("#app");
