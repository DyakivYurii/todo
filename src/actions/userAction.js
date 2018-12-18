import { USER } from './types';

export const getUserInfo = (userId) => {
	return { type: USER.GET_INFO_REQUEST, userId };
};
