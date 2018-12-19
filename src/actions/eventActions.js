import { API } from './types';

// Asynchronus functions ---------------------------------

export const APIGetAll = (userId) => {
	return { type: API.GET_ALL_REQUEST, userId };
};

export const APIGetOne = (userId, itemId) => {
	return { type: API.GET_ONE_REQUEST, userId, id: itemId };
};

export const APIAdd = (userId, event, events) => {
	return { type: API.ADD_REQUEST, userId, event, events };
};

export const APIDelete = (userId, id, types) => {
	return { type: API.DELETE_REQUEST, userId, id, types };
};

export const APIUpdate = (userId, id, updatedParametr) => {
	return { type: API.UPDATE_REQUEST, userId, id, updatedParametr };
};

export const APIChangeDone = (userId, id, status, elements, doneElements) => {
	return { type: API.CHANGE_STATUS_REQUEST, userId, id, status };
};

// Synchronus functions ---------------------------------

export const chosingElement = (id) => {
	return { type: API.CLICKED_ELEMENT, id };
};

export const clearChosingElement = () => {
	return { type: API.CLICKED_ELEMENT_CLEAR };
};

export const filteringEvent = (events) => {
	const eventsProces = events.filter((element) => {
		return element.done === false;
	});

	const eventsDone = events.filter((element) => {
		return element.done === true;
	});

	return { eventsProces, eventsDone };
};
