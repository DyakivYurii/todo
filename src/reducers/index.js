import { combineReducers } from 'redux';

import eventReducer from './eventReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import tabReducer from './tabReducer';
import tabFormReducer from './tabFormReducer';

export default combineReducers({
	events: eventReducer,
	auth: authReducer,
	user: userReducer,
	tab: tabReducer,
	tabForm: tabFormReducer
});
