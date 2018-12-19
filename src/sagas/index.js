import { fork } from 'redux-saga/effects';

import authSaga from './authSaga';
import eventSaga from './eventSaga';

export default function* rootSaga() {
	yield [fork(authSaga), fork(eventSaga)];
}
