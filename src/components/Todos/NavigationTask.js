import React from 'react';

const NavigationTask = ({ changeTab, currentTab }) => {
	return (
		<ul className="navigation__list">
			<li className="navigation__item">
				<button
					type="button"
					name="tasks"
					className={
						currentTab === 'TASKS'
							? `navigation__button navigation__button--active`
							: `navigation__button`
					}
					onClick={() => changeTab('TASKS')}
				>
					Tasks
				</button>
				<button
					type="button"
					name="complete"
					className={
						currentTab === 'COMPLETE'
							? `navigation__button navigation__button--active`
							: `navigation__button`
					}
					onClick={() => changeTab('COMPLETE')}
				>
					Complete
				</button>
			</li>
		</ul>
	);
};

export default NavigationTask;
