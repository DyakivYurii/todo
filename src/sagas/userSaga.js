import { takeLatest, call, put } from 'redux-saga/effects';

import { USER } from '../actions/types';

function* watcherUser() {
	yield takeLatest(USER.GET_INFO_REQUEST, getUserInfo);
}

function* getUserInfo(action) {
	try {
		yield console.log(`get data about user`);
	} catch (error) {}
}

export default watcherUser;
