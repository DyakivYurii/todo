import firebase from 'firebase/app';

import { DB } from '../config/firebaseConfig';

export const getAllEventsAsync = (userId) => {
	return DB.collection('users')
		.doc(userId)
		.collection('event')
		.orderBy('time')
		.get()
		.then((snapshot) => {
			return snapshot.docs.map((event) => {
				return {
					id: event.id,
					...event.data(),
					time: event.data().time.toDate(),
					timestamp: event.data().timestamp.toDate()
				};
			});
		})
		.catch((error) => {
			return error;
		});
};

export const getOneEventAsync = (userId, id) => {
	return DB.collection('users')
		.doc(userId)
		.collection('event')
		.doc(id)
		.get()
		.then((snapshot) => {
			return {
				...snapshot.data(),
				id: snapshot.id,
				time: snapshot.data().time.toDate(),
				timestamp: snapshot.data().timestamp.toDate()
			};
		})
		.catch((error) => {
			return error;
		});
};

export const addEventAsync = (userId, event) => {
	return DB.collection('users')
		.doc(userId)
		.collection('event')
		.add({
			...event,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
};

export const deleteEventAsync = (userId, id) => {
	return DB.collection('users')
		.doc(userId)
		.collection('event')
		.doc(id)
		.delete();
};

export const changeDoneEventAsync = (userId, id, status) => {
	return DB.collection('users')
		.doc(userId)
		.collection('event')
		.doc(id)
		.update({ done: status });
};

export const updateEventAsync = (userId, id, event) => {
	console.log(userId, id, event);
	return DB.collection('users')
		.doc(userId)
		.collection('event')
		.doc(id)
		.update(event);
};
