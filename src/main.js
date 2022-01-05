import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './module/auth.js'
loadFonts();
const store = createStore({
    modules: {
        auth
    },
    plugins: [createPersistedState({
        storage: window.localStorage,
        reducer(val) {
            return {
                auth: val.auth
            }
        }
    })],
    state() {
        return {
            count: 0,
            login: false
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        login(state) {
            state.login = true
            console.log(state.login)
        },
        logout(state) {
            state.login = false;
            console.log(state.login)
        }
    }
})
const app = createApp(App);
app.use(store)
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(loadFonts);
app.mount("#app");