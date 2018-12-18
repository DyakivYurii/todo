import { TAB } from '../actions/types';

const initialState = {
	element: 'TASKS'
};

const tabReducer = (state = initialState, action) => {
	switch (action.type) {
		case TAB.CHANGE: {
			return { ...state, element: action.element };
		}
		default: {
			return state;
		}
	}
};

export default tabReducer;
