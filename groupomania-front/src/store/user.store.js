import UserService from "../services/user.service";

const initialState = {
  user: null,
};

export const user = {
  namespaced: true,
  state: initialState,
  actions: {
    getUser({ commit }) {
      return UserService.getUser().then(
        (user) => {
          commit("getUserSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("getUserFailure");
          return Promise.reject(error);
        }
      );
    },
    deleteUser({ commit }) {
      return UserService.deleteUser().then(
        (response) => {
          commit("deleteUserSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("deleteUserFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    getUserSuccess(state, user) {
      state.user = user;
    },
    getUserFailure(state) {
      state.user = null;
    },
    deleteUserSuccess() {},
    deleteUserFailure() {},
  },
};
