import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/Books.vue"),
  },
  {
    path: "/books/:isbn",
    name: "BookDetail",
    component: () =>
      import(/* webpackChunkName: "bookDetail" */ "../views/BookDetail.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
