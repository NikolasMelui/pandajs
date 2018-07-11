import Vue from 'vue';
import Vuex from 'vuex';

import firebase from '../firebase/index.js';

Vue.use(Vuex);

const store = () =>
	new Vuex.Store({
		state: {},
		mutations: {},
		actions: {
			send({ commit }, data) {
				firebase
					.auth()
					.createUserWithEmailAndPassword(data.email, data.password)
					.then(userkey => {
						console.log(userkey);
					})
					.catch(err => console.log(err));
				console.log(data);
			},
		},
		getters: {},
	});

export default store;
