import { createStore, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const initialState = {
	events: {
		elements: [],
		doneEvents: [],
		clickedId: null,
		currentElement: null,
		error: null,

		getStatus: '',
		addingStatus: ''
	},
	auth: { error: null, action: null },
	user: {
		email: ``,
		firstName: ``,
		secondName: ``,
		errorMessage: null
	},
	tab: {
		element: `TASKS`
	},
	tabForm: {
		tabState: 'CLOSE'
	}
};

const sagaMiddelware = createSagaMiddelware();

const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddelware));

sagaMiddelware.run(rootSaga);

export default store;
