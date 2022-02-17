import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/food-at-home",
    name: "FoodAtHome",
    component: () => import("../views/Food-home.vue"),
  },
  {
    path: "/food-at-shop",
    name: "FoodAtShop",
    component: () => import("../views/Food-shop.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
