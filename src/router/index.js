import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import Index from "../components/Index.vue"
const routes = [{
        path: "/account/login",
        name: "index",
        component: Index,
    },
    {
        path: "/",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;