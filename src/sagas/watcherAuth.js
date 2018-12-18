import { takeLatest, call, put } from 'redux-saga/effects';

import { AUTH } from '../actions/types';
import {
	authSignInAsync,
	authSingOutAsync,
	authSignUpAsync,
	addUserExtraInfo
} from '../services/authServices';

function* watcherAuth() {
	yield takeLatest(AUTH.SIGN_IN_REQUEST, signIn);
	yield takeLatest(AUTH.SIGN_OUT_REQUEST, signOut);
	yield takeLatest(AUTH.SIGN_UP_REQUEST, signUp);
}

function* signIn(action) {
	try {
		const result = yield call(authSignInAsync, action.data);
		yield put({ type: AUTH.SIGN_IN_SUCCESS, userId: result.user.uid });
	} catch (error) {
		yield put({ type: AUTH.SIGN_IN_FAILURE, error });
	}
}

function* signOut() {
	try {
		yield call(authSingOutAsync);
		yield put({ type: AUTH.SIGN_OUT_SUCCESS });
	} catch (error) {
		yield put({ type: AUTH.SIGN_OUT_FAILURE, error });
	}
}

function* signUp(action) {
	try {
		const result = yield call(authSignUpAsync, action.userInfo);
		yield call(addUserExtraInfo, result.user.uid, action.userInfo);
		yield put({ type: AUTH.SIGN_UP_SUCCESS });
	} catch (error) {
		yield put({ type: AUTH.SIGN_UP_FAILURE, error });
	}
}

export default watcherAuth;
