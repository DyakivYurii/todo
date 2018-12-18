import React from 'react';

const Button = ({ changeTabState, tabFormState }) => {
	return (
		<button
			type="button"
			name="task_add"
			className="task__add"
			onClick={() => changeTabState(tabFormState)}
		>
			+
		</button>
	);
};

export default Button;
