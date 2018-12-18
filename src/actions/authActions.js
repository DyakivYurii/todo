import { AUTH } from './types';

export const signIn = (email, password) => {
	return { type: AUTH.SIGN_IN_REQUEST, data: { email, password } };
};

export const signOut = () => {
	return { type: AUTH.SIGN_OUT_REQUEST };
};

export const signUp = (userInfo) => {
	return { type: AUTH.SIGN_UP_REQUEST, userInfo: { ...userInfo } };
};

export const clearSignUpState = () => {
	return { type: AUTH.SIGN_UP_CLEAR };
};
