import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';

import {
	APIGetAll,
	APIGetOne,
	APIAdd,
	APIDelete,
	APIUpdate,
	APIChangeDone,
	chosingElement,
	clearChosingElement
} from '../actions/eventActions';
import { changeTab } from '../actions/tabActions';
import { closeTab, changeTabState } from '../actions/tabFormActions';
import { signOut } from '../actions/authActions';

import PATH from '../constant/route';

import NavigationTask from '../components/Todos/NavigationTask';
import TaskTab from '../components/Todos/TaskTab';
import Completed from '../components/Todos/Completed';
import TodoGreeting from '../components/Todos/TodoGreeting';
import TabForm from '../components/Todos/tabForm';

import '../styles/todo.css';
import '../styles/navigation.css';
import '../styles/task.css';
import '../styles/tab.css';
import '../styles/greeting.css';
import 'react-datepicker/dist/react-datepicker.css';

class Todos extends React.Component {
	constructor() {
		super();

		this.userId = localStorage.getItem('userId');
	}

	componentDidMount() {
		this.props.APIGetAll(this.userId);
	}

	componentDidUpdate() {
		if (!localStorage.getItem('userId')) {
			this.props.history.push(PATH.SIGN_IN);
		}
	}

	render() {
		const { getStatus } = this.props.events;
		const { element } = this.props.tab;

		return (
			<Row className="todo">
				<Col xs="12">
					<button className="profile__sign-out" onClick={this.props.signOut}>
						Sign Out
					</button>
				</Col>
				<Col xs="12" className="todo-header">
					<TodoGreeting />
				</Col>
				<Col xs="12" className="todo-navigation navigation">
					<NavigationTask changeTab={this.props.changeTab} currentTab={element} />
				</Col>
				<Col xs="12" className="todo__content task">
					{element === 'TASKS' ? (
						<TaskTab
							userId={this.props.userId}
							list={this.props.events.elements}
							getStatus={getStatus}
							chosingElement={this.props.chosingElement}
							changeTabState={this.props.changeTabState}
							tabFormState={this.props.tabForm.tabState}
							APIDelete={this.props.APIDelete}
							APIChangeDone={this.props.APIChangeDone}
						/>
					) : element === 'COMPLETE' ? (
						<Completed
							userId={this.props.userId}
							list={this.props.events.doneEvents}
							getStatus={getStatus}
							chosingElement={this.props.chosingElement}
							APIDelete={this.props.APIDelete}
							APIChangeDone={this.props.APIChangeDone}
						/>
					) : (
						<p>Something happened wrong</p>
					)}
					<TabForm
						userId={this.props.userId}
						events={this.props.events}
						currentElement={this.props.events.currentElement}
						clickedId={this.props.events.clickedId}
						clearChosingElement={this.props.clearChosingElement}
						closeTab={this.props.closeTab}
						tabFormState={this.props.tabForm.tabState}
						changeTabState={this.props.changeTabState}
						APIGetOne={this.props.APIGetOne}
						APIUpdate={this.props.APIUpdate}
						APIAdd={this.props.APIAdd}
					/>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events,
		user: state.user,
		auth: state.auth,
		tab: state.tab,
		tabForm: state.tabForm
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			APIGetAll,
			APIGetOne,
			APIAdd,
			APIDelete,
			APIUpdate,
			APIChangeDone,
			chosingElement,
			changeTab,
			signOut,
			closeTab,
			changeTabState,
			clearChosingElement
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todos);
