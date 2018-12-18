import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { signOut } from '../actions/authActions';
import { getUserInfo } from '../actions/userAction';
import PATH from '../constant/route';

import ProfileTasks from '../components/Profile/ProfileTasks';
import ProfileNavigation from '../components/Profile/ProfileNavigation';
import ProfileGreeting from '../components/Profile/ProfileGreeting';

import '../styles/profile.css';
import '../styles/greeting.css';
import '../styles/navigation.css';

class Profile extends React.Component {
	componentDidMount() {
		this.props.getUserInfo('KR3dORtNPLe0oo9Ca19juzSPmrf1');
	}

	componentDidUpdate() {
		if (!localStorage.getItem('userId')) {
			this.props.history.push(PATH.SIGN_IN);
		}
	}

	render() {
		console.log(this.props);
		return (
			<Row>
				<Col xs="12">
					<button className="profile__sign-out" onClick={this.props.signOut}>
						Sign Out
					</button>
				</Col>
				<Col xs="12" className="profile__greeting greeting">
					<ProfileGreeting />
				</Col>
				<Col xs="12" className="profile__navigation navigation">
					<ProfileNavigation />
				</Col>
				<Col xs="12" className="profile__content">
					<ProfileTasks />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ signOut, getUserInfo }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
