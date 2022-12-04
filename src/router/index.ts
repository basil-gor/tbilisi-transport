import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/favorites",
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("@/views/FavotitesView.vue"),
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
      path: "/stop/:stopCode",
      name: "stop",
      component: () => import("@/views/StopView.vue"),
    },
    {
      path: "/route/:routeNumber",
      name: "route",
      component: () => import("@/views/RouteView.vue"),
    },
  ],
});

export default router;
