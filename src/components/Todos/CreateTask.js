import React from 'react';

import DatePicker from 'react-datepicker';

import '../../styles/tab.css';

class CreateTask extends React.PureComponent {
	constructor() {
		super();

		this.state = {
			title: '',
			group: '',
			content: '',
			time: new Date(),
			done: false,
			priority: 'normal'
		};

		this.handleChangeTime = this.handleChangeTime.bind(this);
	}

	handleChange = () => (event) => {
		return this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = () => (event) => {
		event.preventDefault();
		this.props.APIAdd(this.props.userId, this.state, this.props.events);
		this.setState({
			title: '',
			group: '',
			content: '',
			time: new Date(),
			done: false,
			priority: 'normal'
		});
	};

	handleChangeTime(date) {
		this.setState({
			time: date
		});
	}

	render() {
		console.log(this.state);
		return (
			<React.Fragment>
				<form className="tab__flex" onSubmit={this.handleSubmit()}>
					<button
						type="button"
						name="close-tab"
						className="tab__input--close"
						onClick={this.props.closeTab}
					>
						x
					</button>
					<input
						type="text"
						value={this.state.title}
						name="title"
						className="tab__input"
						placeholder="Title"
						onChange={this.handleChange()}
					/>
					<input
						type="text"
						value={this.state.content}
						name="content"
						className="tab__input"
						placeholder="Description"
						onChange={this.handleChange()}
					/>
					<input
						type="text"
						value={this.state.group}
						name="group"
						className="tab__input"
						placeholder="Group"
						onChange={this.handleChange()}
					/>
					<DatePicker
						selected={this.state.time}
						onChange={this.handleChangeTime}
						name="thisisdatepicker"
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={15}
						dateFormat="MMMM d, yyyy h:mm aa"
						timeCaption="time"
					/>
					<select
						name="priority"
						value={this.state.priority}
						onChange={this.handleChange()}
					>
						<option value="normal">Normal</option>
						<option value="high">High</option>
					</select>
					<button className="tab__submit" type="submit">
						Add Task
					</button>
				</form>
			</React.Fragment>
		);
	}
}

export default CreateTask;
