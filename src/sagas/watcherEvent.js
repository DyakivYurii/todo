import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { API } from '../actions/types';

import {
	getAllEventsAsync,
	getOneEventAsync,
	addEventAsync,
	deleteEventAsync,
	changeDoneEventAsync,
	updateEventAsync
} from '../services/eventServer';

import { filteringEvent } from '../actions/APIActions';

function* watcherEvent() {
	yield takeLatest(API.GET_ALL_REQUEST, workerGetAllEventsAPI);
	yield takeLatest(API.GET_ONE_REQUEST, workerGetOneEventAPI);
	yield takeEvery(API.ADD_REQUEST, workerAddEventAPI);
	yield takeEvery(API.DELETE_REQUEST, workerDeleteEventAPI);
	yield takeEvery(API.UPDATE_REQUEST, workerUpdateEventAPI);
	yield takeLatest(API.CHANGE_STATUS_REQUEST, changeDoneEvent);
}

function* workerGetAllEventsAPI(action) {
	try {
		const result = yield call(getAllEventsAsync, action.userId);
		const filtered = yield call(filteringEvent, result);
		yield put({ type: API.GET_ALL_SUCCESS, filtered });
	} catch (error) {
		yield put({ type: API.GET_ALL_FAILURE, error });
	}
}

function* workerGetOneEventAPI(action) {
	try {
		const result = yield call(getOneEventAsync, action.userId, action.id);
		yield put({ type: API.GET_ONE_SUCCESS, currentEvent: { ...result, id: result.id } });
	} catch (error) {
		yield put({ type: API.GET_ONE_FAILURE, error });
	}
}

function* workerAddEventAPI(action) {
	try {
		const result = yield call(addEventAsync, action.userId, action.event);
		const newTask = yield call(getOneEventAsync, action.userId, result.id);
		yield put({ type: API.ADD_SUCCESS, newTask: { ...newTask, id: result.id } });
	} catch (error) {
		yield put({ type: API.ADD_FAILURE, error });
	}
}

function* workerDeleteEventAPI(action) {
	try {
		yield call(deleteEventAsync, action.userId, action.id);
		yield put({
			type: API.DELETE_SUCCESS,
			id: action.id,
			list: action.list,
			types: action.types
		});
	} catch (error) {
		yield put({ type: API.DELETE_FAILURE, error });
	}
}

function* changeDoneEvent(action) {
	try {
		yield console.log(action);
		yield call(changeDoneEventAsync, action.userId, action.id, action.status);
		const result = yield call(getAllEventsAsync, action.userId);
		const filtered = yield call(filteringEvent, result);
		yield put({ type: API.CHANGE_STATUS_SUCCESS, filtered });
	} catch (error) {
		yield put({ type: API.CHANGE_STATUS_FAILURE, error: error.message });
	}
}

function* workerUpdateEventAPI(action) {
	try {
		yield call(updateEventAsync, action.userId, action.id, action.updatedParametr);
		const result = yield call(getAllEventsAsync, action.userId);
		const filtered = yield call(filteringEvent, result);
		yield put({ type: API.UPDATE_SUCCESS, filtered });
	} catch (error) {
		yield put({ type: API.UPDATE_FAILURE, error });
	}
}

export default watcherEvent;
