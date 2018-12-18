import React from 'react';

import List from './List';
import Button from './Button';

const TaskTab = ({
	changeTabState,
	tabFormState,
	getStatus,
	list,
	chosingElement,
	APIDelete,
	APIChangeDone,
	userId
}) => {
	return (
		<React.Fragment>
			{getStatus === 'Loaded' ? (
				<React.Fragment>
					<List
						elements={list}
						type="elements"
						chosingElement={chosingElement}
						APIDelete={APIDelete}
						APIChangeDone={APIChangeDone}
						userId={userId}
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
