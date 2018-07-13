const { send, json } = require('micro');
const { router, post } = require('microrouter');
const cors = require('micro-cors')();
const firebase = require('firebase');
const config = require('./config.js');

firebase.initializeApp(config.firebase);

const createNewUser = async (email, password) => {
	const response = [];
	await firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(async userKey => {
			const newUser = {
				id: userKey.user.uid,
				email: userKey.user.email,
			};
			await firebase
				.firestore()
				.collection('users')
				.add(newUser);
		})
		.then(() => {
			response.push({
				status: 200,
				message: 'The user was successfully added',
			});
			console.log('The user was added to db');
		})
		.catch(err => {
			console.log(`Error:\ncode: ${err.code}\nmessage: ${err.message}`);
			response.push({
				status: err.code,
				message: err.message,
			});
		});
	return response;
};

const createNewUserHandler = async (req, res) => {
	const curReq = await json(req);
	return send(res, 200, await createNewUser(curReq.email, curReq.password));
};

module.exports = router(
	post('/createnewuser', cors(createNewUserHandler)),
	async (req, res) => await send(await res, 404, 'Wrong request.')
);
