import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PATH from '../constant/route';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const userId = localStorage.getItem('userId');
	return (
		<Route
			{...rest}
			render={(props) => {
				return userId ? (
					<Component {...props} userId={userId} />
				) : (
					<Redirect to={PATH.HOME} />
				);
			}}
		/>
	);
};

export default PrivateRoute;
