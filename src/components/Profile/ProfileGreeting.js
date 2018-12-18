import React from 'react';

const ProfileGreeting = (props) => {
	return (
		<React.Fragment>
			<h2 className="greeting__name">Hello, this.state.user.name</h2>
			<p className="greeting__data">12</p>
			<p className="greeting__day">Tuesday</p>
			<p className="greeting__mounth">2018, March</p>
		</React.Fragment>
	);
};

export default ProfileGreeting;
