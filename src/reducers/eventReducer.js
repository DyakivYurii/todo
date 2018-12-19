import { API } from '../actions/types';

const initialState = {
	elements: [],
	doneEvents: [],
	clickedId: '',
	currentElement: null,
	error: null,
	getStatus: ''
};

const findIndex = (elements, id) => {
	return elements
		.map((item, index) => {
			if (item.id === id) {
				return index;
			}
		})
		.filter((item) => {
			return item || item === 0;
		});
};

const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		case API.GET_ALL_REQUEST: {
			return { ...state, getStatus: 'Loading' };
		}
		case API.GET_ALL_SUCCESS: {
			return {
				...state,
				elements: action.filtered.eventsProces,
				doneEvents: action.filtered.eventsDone,
				getStatus: 'Loaded'
			};
		}
		case API.GET_ALL_FAILURE: {
			console.error(action.error.message);
			return { ...state, error: action.error, getStatus: 'Error' };
		}

		case API.GET_ONE_REQUEST: {
			return { ...state };
		}
		case API.GET_ONE_SUCCESS: {
			return { ...state, currentElement: action.currentEvent };
		}
		case API.GET_ONE_FAILURE: {
			console.error(action.error.message);
			return { ...state, currentElement: null, error: action.error };
		}

		case API.ADD_REQUEST: {
			return state;
		}
		case API.ADD_SUCCESS: {
			const newElems = state.elements.slice();
			newElems.push(action.newTask);
			return { ...state, elements: newElems };
		}
		case API.ADD_FAILURE: {
			console.error(action.error.message);
			return { ...state, error: action.error };
		}

		case API.DELETE_REQUEST: {
			return state;
		}
		case API.DELETE_SUCCESS: {
			const index = findIndex(state[action.types], action.id);
			const newErray = state[action.types].slice();
			newErray.splice(index, 1);
			return { ...state, [action.types]: newErray };
		}
		case API.DELETE_FAILURE: {
			console.error(action.error.message);
			return { ...state, error: action.error };
		}

		case API.UPDATE_REQUEST: {
			return state;
		}
		case API.UPDATE_SUCCESS: {
			return { ...state, elements: action.filtered.eventsProces };
		}
		case API.UPDATE_FAILURE: {
			console.error(action.error.message);
			return { ...state, error: action.error.message };
		}

		case API.CHANGE_STATUS_REQUEST: {
			return state;
		}
		case API.CHANGE_STATUS_SUCCESS: {
			return {
				...state,
				elements: action.filtered.eventsProces,
				doneEvents: action.filtered.eventsDone
			};
		}
		case API.CHANGE_STATUS_FAILURE: {
			console.error(action.error.message);
			return { ...state, error: action.error.message };
		}

		case API.CLICKED_ELEMENT: {
			const clicked = state.clickedId !== action.id ? action.id : null;
			return { ...state, clickedId: clicked };
		}

		case API.CLICKED_ELEMENT_CLEAR: {
			return { ...state, clickedId: null };
		}

		default: {
			return state;
		}
	}
};

export default eventReducer;
