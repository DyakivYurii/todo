import React from 'react';

const ProfileNavigation = (props) => {
	return (
		<ul className="navigation__list">
			<li className="navigation__item">
				<button
					type="button"
					name="tasks"
					className="navigation__button navigation__button--active"
				>
					Tasks
				</button>
			</li>
			<li className="navigation__item">
				<button type="button" name="statistic" className="navigation__button">
					Statistic
				</button>
			</li>
			<li className="navigation__item">
				<button type="button" name="profile" className="navigation__button">
					Profile
				</button>
			</li>
		</ul>
	);
};

export default ProfileNavigation;
