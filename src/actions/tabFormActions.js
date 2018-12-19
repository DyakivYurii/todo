import { TAB_FORM } from './types';

export const closeTab = () => {
	return { type: TAB_FORM.CLOSE, state: 'CLOSE' };
};

export const changeTabState = (currentState) => {
	const newState = currentState === 'OPEN' ? 'CLOSE' : 'OPEN';
	return { type: TAB_FORM.CHANGE, state: newState };
};
