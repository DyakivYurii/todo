import { EVENT } from '../actions/types';

const eventReducer = (state = {}, action) => {
	switch (action.type) {
		case EVENT.ADD: {
			return { ...state };
		}
		case EVENT.DELETE: {
			return { ...state };
		}
		case EVENT.CHANGE_DONE: {
			return { ...state };
		}
		default: {
			return state;
		}
	}
};

export default eventReducer;
