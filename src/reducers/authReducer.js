import { AUTH } from '../actions/types';

const initialState = {
	error: null,
	action: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH.SIGN_IN_REQUEST: {
			return { ...state, error: null, action: 'Pending' };
		}
		case AUTH.SIGN_IN_SUCCESS: {
			localStorage.setItem('userId', action.userId);
			return {
				...state,
				error: null,
				action: 'Authorized'
			};
		}
		case AUTH.SIGN_IN_FAILURE: {
			return {
				...state,
				error: action.error.message,
				action: 'Error'
			};
		}

		case AUTH.SIGN_OUT_REQUEST: {
			return { ...state, error: null, action: 'Pending' };
		}
		case AUTH.SIGN_OUT_SUCCESS: {
			localStorage.clear();
			return { ...state, error: null, action: 'SignOut' };
		}
		case AUTH.SIGN_OUT_FAILURE: {
			return { ...state, error: action.error.message, action: 'Error' };
		}

		case AUTH.SIGN_UP_REQUEST: {
			return { ...state, error: null, action: 'Pending' };
		}
		case AUTH.SIGN_UP_SUCCESS: {
			return { ...state, error: null, action: 'Registered' };
		}
		case AUTH.SIGN_UP_FAILURE: {
			return { ...state, error: action.error.message, action: 'Error' };
		}

		case AUTH.SIGN_UP_CLEAR: {
			return { ...state, error: null, action: 'Pending' };
		}

		default: {
			return state;
		}
	}
};

export default authReducer;
