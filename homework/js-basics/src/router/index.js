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
    component: () =>
      import(/* webpackChunkName: "arraysort" */ "../views/to64.vue"),
  },
  {
    path: "/monaco-editor",
    name: "monaco-editor",
    component: () =>
      import(/* webpackChunkName: "arraysort" */ "../views/monaco-editor.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
