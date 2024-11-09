import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Route typing with TypeScript
interface RouteMetaInterface {
  requiresAuth: boolean;
  title?: string;
}

declare module "vue-router" {
  interface RouteMeta extends RouteMetaInterface {}
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../views/Welcome.vue"),
    meta: {
      requiresAuth: false,
      title: "Welcome",
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
    meta: {
      requiresAuth: false,
      title: "Shop",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    meta: {
      requiresAuth: false,
      title: "404 Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation guards
router.beforeEach(async (to, _from) => {
  // Example auth check - replace with your auth logic
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login page if authentication is required
    return { name: "Login", query: { redirect: to.fullPath } };
  }

  // Update document title
  document.title = `${to.meta.title || "App"} - My Vue App`;
});

export default router;
