const { send, json } = require('micro');
const { router, post } = require('microrouter');
const cors = require('micro-cors')();
const { auth, firestore, initializeApp } = require('firebase');

const config = require('./config');

initializeApp(config);

const createNewUser = async (email, password) => {
	const response = [];
	try {
		const userKey = await auth().createUserWithEmailAndPassword(email, password);
		const newUser = {
			id: userKey.user.uid,
			email: userKey.user.email,
		};
		await firestore()
			.collection('users')
			.add(newUser);
		response.push({
			status: 200,
			message: userKey.additionalUserInfo.isNewUser,
		});
	} catch (err) {
		response.push({
			status: err.code,
			message: err.message,
		});
	}
	return response;
};

const createNewUserHandler = async (req, res) => {
	const curReq = await json(req);
	return send(res, 200, await createNewUser(curReq.email, curReq.password));
};

module.exports = router(
	post('/createnewuser', cors(createNewUserHandler)),
	async (req, res) => await send(res, 200, 'Hello, Panda.')
);
