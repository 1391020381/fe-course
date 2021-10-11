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
      import(
        /* webpackChunkName: "LinkedListInversion" */ "../views/LinkedListInversion.vue"
      ),
  },
  {
    path: "/monaco-editor",
    name: "monaco-editor",
    component: () =>
      import(
        /* webpackChunkName: "monaco-editor" */ "../views/monaco-editor.vue"
      ),
  },
  {
    path: "/CompilerSingleVueComponent",
    name: "CompilerSingleVueComponent",
    component: () =>
      import(
        /* webpackChunkName: "monaco-editor" */ "../views/CompilerSingleVueComponent.vue"
      ),
  },
  {
    path: "/WebRTC-Local",
    name: "WebRTC-Local",
    component: () =>
      import(/* webpackChunkName: "WebRTC" */ "../views/WebRTC/local.vue"),
  },
  {
    path: "/Decorator",
    name: "Decorator",
    component: () =>
      import(/* webpackChunkName: "Decorator" */ "../views/Decorator.vue"),
  },
  {
    path: "/JSX",
    name: "JSX",
    component: () => import(/* webpackChunkName: "JSX" */ "../views/JSX.vue"),
  },
  {
    path: "/Directive",
    name: "Directive",
    component: () =>
      import(/* webpackChunkName: "JSX" */ "../views/Directive.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
