import React from 'react';

const NavigationTask = ({ changeTab }) => {
	return (
		<ul className="navigation__list">
			<li className="navigation__item">
				<button
					type="button"
					name="tasks"
					className="navigation__button navigation__button--active"
					onClick={() => changeTab('TASKS')}
				>
					Tasks
				</button>
				<button
					type="button"
					name="complete"
					className="navigation__button navigation__button"
					onClick={() => changeTab('COMPLETE')}
				>
					Complete
				</button>
			</li>
		</ul>
	);
};

export default NavigationTask;
