import { TAB } from './types';

export const changeTab = (element) => {
	return { type: TAB.CHANGE, element };
};
