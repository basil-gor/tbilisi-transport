import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/stops",
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
      path: "/stop/:stopId",
      name: "stop",
      component: () => import("@/views/StopView.vue"),
    },
    {
      path: "/route/:routeId",
      name: "route",
      component: () => import("@/views/RouteView.vue"),
    },
  ],
});

export default router;
