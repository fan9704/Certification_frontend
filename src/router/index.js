import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import Index from "../components/Index.vue"
import Certilist from "../views/Certilist.vue"
import Settings from "../components/Settings.vue"
const routes = [{
        path: "/",
        name: "index",
        component: Index,
    },
    {
        path: "/account/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/certification/list",
        name: "Certilist",
        component: Certilist,
    },
    {
        path: "/account/setting",
        name: "Settings",
        component: Settings,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;