import { createStore } from "vuex";

import { auth } from "./auth.store";
import { user } from "./user.store";
import { post } from "./post.store";
import { comment } from "./comment.store";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    user,
    post,
    comment,
  },
});
