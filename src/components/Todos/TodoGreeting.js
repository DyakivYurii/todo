import React from 'react';

import { months, weekDays } from '../../constant/time';

class TodoGreeting extends React.PureComponent {
	constructor() {
		super();
		this.date = new Date();
	}

	render() {
		const dateYear = this.date.getFullYear();
		const dateMounth = months[this.date.getMonth()];
		const dateDayNumber = this.date.getDate();
		const dateDay = weekDays[this.date.getDay()];

		return (
			<React.Fragment>
				<h2 className="greeting__name">Hello</h2>
				<p className="greeting__data">{dateDayNumber}</p>
				<p className="greeting__day">{dateDay}</p>
				<p className="greeting__mounth">
					{dateYear}, {dateMounth}
				</p>
			</React.Fragment>
		);
	}
}

export default TodoGreeting;
