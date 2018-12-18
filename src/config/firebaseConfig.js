import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyDxNnB8WUGLpRBpyjMPtLwD83qAnBbsMJs',
	authDomain: 'todo-app-fb5a1.firebaseapp.com',
	databaseURL: 'https://todo-app-fb5a1.firebaseio.com',
	projectId: 'todo-app-fb5a1',
	storageBucket: 'todo-app-fb5a1.appspot.com',
	messagingSenderId: '111932587246'
};

firebase.initializeApp(config);
const DB = firebase.firestore();
DB.settings({ timestampsInSnapshots: true });

const auth = firebase.auth();

export { DB, auth };
