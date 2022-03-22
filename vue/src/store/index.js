import { createStore } from "vuex";
import axiosClient from "../axios.js";

// const tmpSurveys = [
//   {
//     id: 100,
//     title: "This is Title",
//     status: "draft",
//     img: "https://picsum.photos/200/300",
//     description:
//       "lorem epsona dsjfl;kakdj kl kjf klaj k <b> klajfkdl <b> klafj kj <i>Itac </i>kljak flj",
//     created_at:
//   },
// ];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => {
          commit("setUser", res);
          return res;
        });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      (state.user.data = {}), (state.user.token = null);
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
