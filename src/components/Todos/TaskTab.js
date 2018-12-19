import React from 'react';

import List from './List';
import Button from './Button';

const TaskTab = ({
	userId,
	changeTabState,
	tabFormState,
	getStatus,
	list,
	chosingElement,
	APIDelete,
	APIChangeDone
}) => {
	return (
		<React.Fragment>
			{getStatus === 'Loaded' ? (
				<React.Fragment>
					<List
						userId={userId}
						elements={list}
						type="elements"
						chosingElement={chosingElement}
						APIDelete={APIDelete}
						APIChangeDone={APIChangeDone}
						changeTabState={changeTabState}
						tabFormState={tabFormState}
					/>
					<Button changeTabState={changeTabState} tabFormState={tabFormState} />
				</React.Fragment>
			) : (
				<p className="todo__loading">Loading</p>
			)}
		</React.Fragment>
	);
};

export default TaskTab;
