import React from 'react';
import { Link } from 'react-router-dom';

import PATH from '../constant/route';

const Error404 = () => {
	return (
		<React.Fragment>
			<h3>This is Error 404 page</h3>
			<Link to={PATH.HOME}>Home</Link>
		</React.Fragment>
	);
};

export default Error404;
