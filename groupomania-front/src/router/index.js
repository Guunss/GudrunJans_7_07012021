import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Signup from "../components/Signup";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import NewPost from "../components/NewPost";
import Post from "../components/Post";

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/new-post",
    name: "newPost",
    component: NewPost,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: {
      beforeRouteEnter(to, from, next) {
        const destination = {
          path: from.path || "/",
          query: from.query,
          params: from.params,
        };
        store.dispatch("auth/logout");
        next(destination);
      },
    },
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.state.auth.status.loggedIn) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
