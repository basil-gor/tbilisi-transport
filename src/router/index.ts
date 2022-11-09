import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/stops",
      name: "stops",
      component: () => import("@/views/StopsView.vue"),
    },
    {
      path: "/routes",
      name: "routes",
      component: () => import("@/views/RoutesView.vue"),
    },
    {
      path: "/route",
      name: "route",
      component: () => import("@/views/RouteView.vue"),
    },
  ],
});

export default router;
