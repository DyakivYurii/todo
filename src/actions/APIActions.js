import { API } from './types';

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

// ---------------------------------------------------------------------

export const chosingElement = (id) => {
	return { type: API.CLICKED_ELEMENT, id };
};

export const clearChosingElement = () => {
	return { type: API.CLICKED_ELEMENT_CLEAR };
};

export const filteringEvent = (events) => {
	const eventsProces = events.filter((element) => {
		return element.done == false;
	});

	const eventsDone = events.filter((element) => {
		return element.done == true;
	});

	return { eventsProces, eventsDone };
};

// ----------------------------------------

// const findIndex = (elements, id) => {
// 	return elements
// 		.map((item, index) => {
// 			if (item.id === id) {
// 				return index;
// 			}
// 		})
// 		.filter((item) => {
// 			return item || item === 0;
// 		});
// };

// ---------------------------------------------------------------------

// export const addElement = (element, state) => {};

// export const changeState = (id, status, event, eventsProces, eventsDone) => {
// 	if (status) {
// 		const index = findIndex(eventsProces, id);
// 		const newEventsProces = eventsProces.slice();
// 		newEventsProces.splice(index, 1);

// 		const newDoneEvents = eventsDone.slice();
// 		newDoneEvents.unshift(event);
// 		return { newEventsProces, newDoneEvents };
// 	} else if (!status) {
// 		const index = findIndex(eventsDone, id);
// 		const newDoneEvents = eventsDone.slice();
// 		newDoneEvents.splice(index, 1);

// 		const newEventsProces = eventsProces.slice();
// 		newEventsProces.unshift(event);
// 		return { newEventsProces, newDoneEvents };
// 	}
// };
