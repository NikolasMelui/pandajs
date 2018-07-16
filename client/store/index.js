import axios from 'axios';

export const state = () => ({
	sidebar: false,
	notification: null,
});

export const mutations = {
	setNotification(state, payload) {
		state.notification = payload;
	},
};

export const actions = {
	send({ commit }, data) {
		axios
			.post('https://pandajs.now.sh/createnewuser', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})
			.then(res => {
				console.log(res.data[0].status);
				switch (res.data[0].status) {
					case 200:
						commit('setNotification', {
							status: 'success',
							message: res.data[0].message,
						});
						break;
					case 'auth/email-already-in-use':
						commit('setNotification', {
							status: 'error',
							message: res.data[0].message,
						});
						break;
					default:
						commit('setNotification', {
							status: 'success',
							message: res.data[0].message,
						});
				}
			})
			.catch(err => {
				commit('setNotification', {
					status: 'error',
					message: err.message,
				});
			});
	},
};

export const getters = {
	getNotification(state) {
		return state.notification;
	},
};
