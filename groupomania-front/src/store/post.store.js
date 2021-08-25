import PostService from "../services/post.service";

const initialState = {
  posts: [],
  post: null,
};

export const post = {
  namespaced: true,
  state: initialState,
  actions: {
    getAllPosts({ commit }) {
      return PostService.getAllPosts().then(
        (posts) => {
          commit("getAllPostsSuccess", posts);
          return Promise.resolve(posts);
        },
        (error) => {
          commit("getAllPostsFailure");
          return Promise.reject(error);
        }
      );
    },
    createPost({ commit }, post) {
      return PostService.createPost(post).then(
        (post) => {
          commit("createPostSuccess", post);
          return Promise.resolve(post);
        },
        (error) => {
          commit("createPostFailure");
          return Promise.reject(error);
        }
      );
    },
    getPost({ commit }, id) {
      return PostService.getPost(id).then(
        (post) => {
          commit("getPostSuccess", post);
          return Promise.resolve(post);
        },
        (error) => {
          commit("getPostFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    getAllPostsSuccess(state, posts) {
      state.posts = posts;
    },
    getUserFailure(state) {
      state.user = [];
    },
    createPostSuccess() {},
    createPostFailure() {},
    getPostSuccess(state, post) {
      state.post = post;
    },
    getPostFailure(state) {
      state.post = null;
    },
  },
};
