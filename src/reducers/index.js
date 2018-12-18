import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import APIReducer from './APIReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import tabFormReducer from './tabFormReducer';

export default combineReducers({
	events: APIReducer,
	auth: authReducer,
	user: userReducer,
	form: formReducer,
	tab: tabReducer,
	tabForm: tabFormReducer
});
