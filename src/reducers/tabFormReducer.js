import { TAB_CHANGE_FORM, TAB_CLOSE_FORM } from '../actions/tabForm';

const initialState = {
	tabState: 'CLOSE'
};

const tabFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case TAB_CHANGE_FORM: {
			return { ...state, tabState: action.state };
		}
		case TAB_CLOSE_FORM: {
			return { ...state, tabState: action.state };
		}
		default: {
			return state;
		}
	}
};

export default tabFormReducer;
