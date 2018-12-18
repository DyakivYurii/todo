import React from 'react';

import ListItem from './ListItem';

const List = ({ elements, type, chosingElement, APIDelete, APIChangeDone, userId }) => {
	return (
		<ul className="task__list">
			{elements.map((item) => {
				return (
					<li key={item.id} className="task__event" data_d={item.id}>
						<ListItem
							type={type}
							task={item}
							chosingElement={chosingElement}
							APIDelete={APIDelete}
							APIChangeDone={APIChangeDone}
							userId={userId}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
