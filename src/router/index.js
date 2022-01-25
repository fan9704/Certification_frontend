import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import Index from "../components/Index.vue"
import Certilist from "../views/Certilist.vue"
import Settings from "../components/Settings.vue"
import ChatroomView from "../views/ChatRoom.vue"
import FileConverterView from "../views/FileConverter.vue"
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
    {
        path: "/chat",
        name: "ChatroomView",
        component: ChatroomView,
    },
    {
        path: "/file",
        name: "FileConverterView",
        component: FileConverterView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;