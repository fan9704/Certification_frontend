import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(loadFonts);
app.mount("#app");