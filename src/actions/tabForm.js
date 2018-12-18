export const TAB_CLOSE_FORM = 'TAB_CLOSE_FORM';
export const TAB_CHANGE_FORM = 'TAB_CHANGE_FORM';

export const closeTab = () => {
	return { type: TAB_CLOSE_FORM, state: 'CLOSE' };
};

export const changeTabState = (currentState) => {
	const newState = currentState === 'OPEN' ? 'CLOSE' : 'OPEN';
	return { type: TAB_CHANGE_FORM, state: newState };
};
