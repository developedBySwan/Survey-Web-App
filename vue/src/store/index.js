import axios from "axios";
import { createStore } from "vuex";
import axiosClient from "../axios.js";

const tmpSurveys = [
  {
    id: 1,
    title: "This is Title",
    slug: "This is Slug",
    status: "draft",
    img: "https://picsum.photos/200",
    description:
      "lorem epsona dsjfl;kakdj kl kjf klaj k <b> klajfkdl <b> klafj kj <i>Itac </i>kljak flj",
    created_at: "2021",
    updaded_at: "2021",
    expire_at: "2021",
    questions: [
      {
        id: 1,
        type: "select",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "USA",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "Georgia",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Germay",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "India",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "JavaScript",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "PHP",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Ruby",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "All of Above",
            },

            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "None Of then",
            },
          ],
        },
      },
      {
        id: 3,
        type: "radio",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "JavaScript",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "PHP",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Ruby",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "All of Above",
            },

            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "None Of then",
            },
          ],
        },
      },
      {
        id: 3,
        type: "textarea",
        question: "What is This?",
        description: null,
        data: {},
      },
      {
        id: 4,
        type: "textarea",
        question: "What is This?",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 2,
    title: "This is Title",
    slug: "This is Slug",
    status: "draft",
    img: "https://picsum.photos/200",
    description:
      "lorem epsona dsjfl;kakdj kl kjf klaj k <b> klajfkdl <b> klafj kj <i>Itac </i>kljak flj",
    created_at: "2021",
    updaded_at: "2021",
    expire_at: "2021",
    questions: [
      {
        id: 1,
        type: "select",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "USA",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "Georgia",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Germay",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "India",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "JavaScript",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "PHP",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Ruby",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "All of Above",
            },

            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "None Of then",
            },
          ],
        },
      },
      {
        id: 3,
        type: "radio",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "JavaScript",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "PHP",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Ruby",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "All of Above",
            },

            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "None Of then",
            },
          ],
        },
      },
      {
        id: 3,
        type: "textarea",
        question: "What is This?",
        description: null,
        data: {},
      },
      {
        id: 4,
        type: "textarea",
        question: "What is This?",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 3,
    title: "This is Title",
    slug: "This is Slug",
    status: "draft",
    img: "https://picsum.photos/200",
    description:
      "lorem epsona dsjfl;kakdj kl kjf klaj k <b> klajfkdl <b> klafj kj <i>Itac </i>kljak flj",
    created_at: "2021",
    updaded_at: "2021",
    expire_at: "2021",
    questions: [
      {
        id: 1,
        type: "select",
        question: "What is This?",
        description: "lorema loerm aiodfu oidfdsj kj",
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "USA",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "Georgia",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Germay",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "India",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "JavaScript",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "PHP",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Ruby",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "All of Above",
            },

            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "None Of then",
            },
          ],
        },
      },
      {
        id: 3,
        type: "radio",
        question: "What is This?",
        description: null,
        data: {
          options: [
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew90329909",
              text: "JavaScript",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew903289899",
              text: "PHP",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sewasdfwer19909",
              text: "Ruby",
            },
            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "All of Above",
            },

            {
              uuid: "f3afeixo300x303303-3kajkvjxc-sew9faexzxsdd909",
              text: "None Of then",
            },
          ],
        },
      },
      {
        id: 3,
        type: "textarea",
        question: "What is This?",
        description: null,
        data: {},
      },
      {
        id: 4,
        type: "textarea",
        question: "What is This?",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 4,
    title: "This is Title",
    slug: "This is Slug",
    status: "draft",
    img: "https://picsum.photos/200",
    description:
      "lorem epsona dsjfl;kakdj kl kjf klaj k <b> klajfkdl <b> klafj kj <i>Itac </i>kljak flj",
    created_at: "2021",
    updaded_at: "2021",
    expire_at: "2021",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
  },
  getters: {},
  actions: {
    saveSurvey({ commit }, survey) {
      delete survey.image_url;
      let response;
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit("updateSurvey", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/survey", survey).then((res) => {
          commit("saveSurvey", res.data);
          return res;
        });
      }
    },
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
    saveSurvey(state, survey) {
      console.log(survey.data);
      state.surveys = [...state.surveys, survey.data];
    },
    updateSurvey(state, survey) {
      state.surveys = state.surveys.map((s) => {
        if (s.id == survey.data.id) {
          return survey;
        }
        return s;
      });
    },
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
