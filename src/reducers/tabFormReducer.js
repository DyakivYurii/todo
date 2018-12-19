import { TAB_FORM } from '../actions/types';

const initialState = {
	tabState: 'CLOSE'
};

const tabFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case TAB_FORM.CHANGE: {
			return { ...state, tabState: action.state };
		}
		case TAB_FORM.CLOSE: {
			return { ...state, tabState: action.state };
		}
		default: {
			return state;
		}
	}
};

export default tabFormReducer;
