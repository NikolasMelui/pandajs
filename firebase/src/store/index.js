import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      send({ commit }, data) {
        console.log(data);
      },
    },
    getters: {},
  });

export default store;
