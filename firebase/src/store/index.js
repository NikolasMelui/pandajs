import Vue from 'vue';
import Vuex from 'vuex';

import firebase from '../firebase/index.js';

Vue.use(Vuex);

const store = () =>
	new Vuex.Store({
		state: {
			notification: null,
		},
		mutations: {
			setNotification(state, payload) {
				state.notification = payload;
			},
		},
		actions: {
			send({ commit }, data) {
				firebase
					.auth()
					.createUserWithEmailAndPassword(data.email, data.password)
					.then(userkey => {
						commit('setNotification', { status: 'success', message: 'Registration success' });
						console.log(userkey);
					})
					.catch(err => {
						commit('setNotification', { status: 'error', message: err.message });
						console.log(err);
					});
				console.log(data);
			},
		},
		getters: {
			getNotification(state) {
				return state.notification;
			},
		},
	});

export default store;
