import { USER } from '../actions/types';

const initialState = {
	email: ``,
	firstName: ``,
	secondName: ``,
	errorMessage: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER.GET_INFO_REQUEST: {
			return { ...state, errorMessage: null };
		}
		case USER.GET_INFO_SUCCESS: {
			return { ...state, ...action.userInfo, errorMessage: null };
		}
		case USER.GET_INFO_FAILURE: {
			return { ...state, errorMessage: action.userInfo.errorMessage };
		}
		default: {
			return initialState;
		}
	}
};

export default userReducer;
