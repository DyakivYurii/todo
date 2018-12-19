import React from 'react';

import ListItem from './ListItem';

const List = ({
	userId,
	elements,
	type,
	chosingElement,
	APIDelete,
	APIChangeDone,
	changeTabState,
	tabFormState
}) => {
	return (
		<ul className="task__list">
			{elements.map((item) => {
				return (
					<li key={item.id} className="task__event" data_d={item.id}>
						<ListItem
							userId={userId}
							type={type}
							task={item}
							chosingElement={chosingElement}
							APIDelete={APIDelete}
							APIChangeDone={APIChangeDone}
							changeTabState={changeTabState}
							tabFormState={tabFormState}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
