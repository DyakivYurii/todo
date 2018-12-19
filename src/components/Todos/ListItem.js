import React from 'react';
import { Link } from 'react-router-dom';

import PATH from '../../constant/route';
import { months, weekDays } from '../../constant/time';

class ListItem extends React.Component {
	constructor() {
		super();
		this.state = {
			currentDate: new Date()
		};
	}

	componentDidUpdate() {
		this.interval = setInterval(() => {
			this.setState({ currentDate: new Date() });
		}, 60000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const {
			type,
			task,
			chosingElement,
			APIDelete,
			userId,
			APIChangeDone,
			changeTabState,
			tabFormState
		} = this.props;
		const timeSnapshot = task.time;

		const dateMounth = months[timeSnapshot.getMonth()];
		const dateDayNumber = timeSnapshot.getDate();
		const dateDay = weekDays[timeSnapshot.getDay()];
		const dateHour = timeSnapshot.getHours();
		const dateMinute = timeSnapshot.getMinutes();

		const hours = parseInt(((timeSnapshot - this.state.currentDate) / (1000 * 60 * 60)) % 24);

		if (timeSnapshot - this.state.currentDate > 0) {
			return (
				<React.Fragment>
					<label className="task__label">
						{task.done ? (
							<input
								type="checkbox"
								className="task__checkbox"
								defaultChecked
								onClick={() => APIChangeDone(userId, task.id, !task.done)}
							/>
						) : (
							<input
								type="checkbox"
								className="task__checkbox"
								onClick={() => APIChangeDone(userId, task.id, !task.dne)}
							/>
						)}
						<span className="task__span" />
					</label>
					<div className="task__content">
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
							<h3 className="task__title">{task.title}</h3>
						</div>

						<button
							type="button"
							name="delete-task"
							className="task__delete"
							onClick={(event) => {
								event.stopPropagation();
								APIDelete(userId, task.id, type);
							}}
						/>

						<div className="task__options">
							<button
								type="button"
								name="change_info"
								className="task__button"
								onClick={() => {
									chosingElement(task.id);
									changeTabState(tabFormState);
								}}
							>
								Change
							</button>
							<Link to={`${PATH.TODOS}/${task.id}`} className="task__button">
								More Info
							</Link>
						</div>
					</div>
				</React.Fragment>
			);
		} else {
			APIDelete(userId, task.id, type);
		}
		return null;
	}
}

export default ListItem;
