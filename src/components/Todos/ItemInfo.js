import React from 'react';

import { months, weekDays } from '../../constant/time';

const ItemInfo = ({ currentElement: { title, group, content, time } }) => {
	const dateMounth = months[time.getMonth()];
	const dateDayNumber = time.getDate();
	const dateDay = weekDays[time.getDay()];
	const dateHour = time.getHours();
	const dateMinute = time.getMinutes();

	const hours = parseInt(((time - new Date()) / (1000 * 60 * 60)) % 24);
	console.log(`Time for element`, time);
	return (
		<div className="task__list">
			<div className="task__event">
				<div className="task__info">
					{hours > 2 ? (
						<div className="task__time-indicator green" />
					) : hours > 1 ? (
						<div className="task__time-indicator orange" />
					) : (
						<div className="task__time-indicator red" />
					)}

					<p className="task__time">
						{`${dateHour}:`}
						{dateMinute === 0
							? `00`
							: dateMinute < 10
							? `0${dateMinute}`
							: dateMinute}{' '}
						{`${dateDay} ${dateDayNumber} ${dateMounth}`}
					</p>
					<h3 className="task__title">{title}</h3>
					<p className="task__text">
						<span className="task__text--bold">Description: </span>
						{content}
					</p>
					<p className="task__text">
						<span className="task__text--bold">Group: </span>
						{group}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemInfo;
