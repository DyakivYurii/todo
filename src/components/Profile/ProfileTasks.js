import React from 'react';

import '../../styles/ProfileTasks.css';

const ProfileTasks = (props) => {
	return (
		<div className="profile__tasks tasks">
			<ul className="tasks__list">
				<li className="tasks__item">
					<h3 className="tasks__title">All Schedule</h3>
					<p className="tasks__sum">43 tasks</p>
				</li>
				<li className="tasks__item">
					<h3 className="tasks__title">Work Project</h3>
					<p className="tasks__sum">21 tasks</p>
				</li>
				<li className="tasks__item">
					<h3 className="tasks__title">Personal Errands</h3>
					<p className="tasks__sum">5 tasks</p>
				</li>
				<li className="tasks__item">
					<h3 className="tasks__title">Univversity</h3>
					<p className="tasks__sum">7 tasks</p>
				</li>
				<li className="tasks__item">
					<h3 className="tasks__title">Jym</h3>
					<p className="tasks__sum">2 tasks</p>
				</li>
			</ul>
			<button type="button" name="addElement" className="tasks__add-category">
				+
			</button>
		</div>
	);
};

export default ProfileTasks;
