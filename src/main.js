import Vue from "vue";
import App from "./App.vue";

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.productionTip = false;

import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);
Vue.use(Ionic);

const router = new IonicVueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/tabs",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/components/HelloWorld.vue"),
      children: [
        {
          path: "tab1",
          name: "tab1",
          components: {
            tab1: () =>
              import(/* webpackChunkName: "tab1" */ "@/components/Tab1.vue")
          }
        },
        {
          path: "tab1/details",
          name: "tab1-details",
          components: {
            tab1: () =>
              import(
                /* webpackChunkName: "tab1" */ "@/components/Tab1Details.vue"
              )
          }
        },
        {
          path: "tab2",
          name: "tab2",
          components: {
            tab2: () =>
              import(/* webpackChunkName: "tab2" */ "@/components/Tab2.vue")
          }
        }
      ]
    },
    { path: "/", redirect: "tabs/tab1" }
  ]
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
