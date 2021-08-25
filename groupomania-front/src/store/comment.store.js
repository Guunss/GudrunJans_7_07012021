import CommentService from "../services/comment.service";

const initialState = {};

export const comment = {
  namespaced: true,
  state: initialState,
  actions: {
    createComment({ commit }, comment) {
      return CommentService.createComment(comment).then(
        (comment) => {
          commit("createCommentSuccess", comment);
          return Promise.resolve(comment);
        },
        (error) => {
          commit("createCommentFailure");
          return Promise.reject(error);
        }
      );
    },
    deleteComment({ commit }, id) {
      return CommentService.deleteComment(id).then(
        (response) => {
          commit("deleteCommentSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("deleteCommentFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    createCommentSuccess() {},
    createCommentFailure() {},
    deleteCommentSuccess() {},
    deleteCommentFailure() {},
  },
};
