import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () =>
      import(/* webpackChunkName: "pricing" */ "@/views/Pricing.vue")
  },
  {
    path: "/cv",
    name: "Cv",
    component: () => import(/* webpackChunkName: "cv" */ "@/views/Cv.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
