import React from 'react';
import DatePicker from 'react-datepicker';

class ChangeTask extends React.PureComponent {
	constructor(props) {
		super(props);
		this.initialState = {};
		this.state = {
			title: '',
			group: '',
			content: '',
			time: new Date(),
			done: false,
			priority: 'normal',
			wasInitialised: false
		};
		this.handleChangeTime = this.handleChangeTime.bind(this);
	}

	componentDidMount() {
		this.props.APIGetOne(this.props.userId, this.props.taskId);
	}

	componentDidUpdate() {
		if (this.props.element && !this.state.wasInitialised) {
			const { title, group, content, time, done, priority } = this.props.element;
			this.setState({
				title,
				group,
				content,
				time,
				done,
				priority,
				wasInitialised: true
			});

			this.initialState = { title, group, content, time, done, priority };
		}
	}

	handleChange = () => (event) => {
		return this.setState({ [event.target.name]: event.target.value });
	};

	handleChangeTime(date) {
		this.setState({
			time: date
		});
	}

	handleSubmit = () => (event) => {
		event.preventDefault();
		const change = {};
		for (let prop in this.state) {
			if (this.initialState[prop] !== this.state[prop] && prop !== 'wasInitialised') {
				change[prop] = this.state[prop];
			}
		}
		if (Object.keys(change).length) {
			this.props.APIUpdate(this.props.userId, this.props.taskId, change);
		}
	};

	render() {
		return (
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
					className="tab__input"
					showTimeSelect
					timeFormat="HH:mm"
					timeIntervals={15}
					dateFormat="MMMM d, yyyy h:mm aa"
					timeCaption="time"
				/>
				<select
					name="priority"
					className="tab__input"
					value={this.state.priority}
					onChange={this.handleChange()}
				>
					<option value="normal">Normal</option>
					<option value="high">High</option>
				</select>
				<button className="tab__submit" type="submit">
					Change Task
				</button>
				<button
					type="button"
					name="close-tab"
					className="tab__blue"
					onClick={this.props.clearChosingElement}
				>
					Go to create event
				</button>
			</form>
		);
	}
}

export default ChangeTask;
