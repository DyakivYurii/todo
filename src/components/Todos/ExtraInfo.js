import React from 'react';
import { Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { APIGetOne } from '../../actions/eventActions';

import ItemInfo from './ItemInfo';

class ExtraInfo extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		this.props.APIGetOne(this.props.userId, this.props.match.params.id);
	}

	render() {
		return (
			<Row>
				<Col xs="12" className="todo-header">
					<h2 className="todo-header__name">Work Project</h2>
					<p className="todo-header__date">
						<span className="todo-header__date--dark">Tuesday,</span> 12nd March
					</p>
				</Col>
				<Col>
					{this.props.currentEvent ? (
						<ItemInfo currentElement={this.props.currentEvent} />
					) : (
						<p className="todo__loading">Loading</p>
					)}
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return { currentEvent: state.events.currentElement };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ APIGetOne }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExtraInfo);
