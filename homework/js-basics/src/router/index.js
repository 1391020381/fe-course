import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/to64",
    name: "to64",
    component: () => import(/* webpackChunkName: "to64" */ "../views/to64.vue"),
  },
  {
    path: "/fileApi",
    name: "fileApi",
    component: () =>
      import(/* webpackChunkName: "fileApi" */ "../views/FileApi.vue"),
  },
  {
    path: "/LinkedListInversion",
    name: "LinkedListInversion",
    component: () =>
      import(/* webpackChunkName: "LinkedListInversion" */ "../views/LinkedListInversion.vue"),
  },
  {
    path: "/monaco-editor",
    name: "monaco-editor",
    component: () =>
      import(
        /* webpackChunkName: "monaco-editor" */ "../views/monaco-editor.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
