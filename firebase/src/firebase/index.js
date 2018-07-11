import * as firebase from 'firebase';
import config from './config.js';

firebase.initializeApp(config.firebase);

export default firebase;
