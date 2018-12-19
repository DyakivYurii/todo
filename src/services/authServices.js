import { DB, auth } from '../config/firebaseConfig';

export const authSignInAsync = ({ email, password }) => {
	return auth.signInWithEmailAndPassword(email, password);
};

export const authSingOutAsync = () => {
	return auth.signOut();
};

export const authSignUpAsync = ({ email, password }) => {
	return auth.createUserWithEmailAndPassword(email, password);
};

export const addUserExtraInfo = (userId, { email, firstName, secondName }) => {
	return DB.collection('users')
		.doc(userId)
		.set({ email, firstName, secondName });
};
