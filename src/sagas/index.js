import { fork } from 'redux-saga/effects';

import watcherEvent from './watcherEvent';
import watcherAuth from './watcherAuth';
import watcherUser from './userSaga';

export default function* rootSaga() {
	yield [fork(watcherEvent), fork(watcherAuth), fork(watcherUser)];
}
