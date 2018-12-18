import React from 'react';

import List from './List';

const CompletedTab = ({ getStatus, list, chosingElement, APIDelete, APIChangeDone, userId }) => {
	return (
		<React.Fragment>
			{getStatus === 'Loaded' ? (
				<List
					elements={list}
					type="doneEvents"
					chosingElement={chosingElement}
					APIDelete={APIDelete}
					APIChangeDone={APIChangeDone}
					userId={userId}
				/>
			) : (
				<p>Loading</p>
			)}
		</React.Fragment>
	);
};

export default CompletedTab;
