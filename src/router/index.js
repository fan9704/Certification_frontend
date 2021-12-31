import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import Index from "../components/Index.vue"
import Certilist from "../views/Certilist.vue"
const routes = [{
        path: "/certification/list",
        name: "index",
        component: Index,
    },
    {
        path: "/account/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/",
        name: "Certilist",
        component: Certilist,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;