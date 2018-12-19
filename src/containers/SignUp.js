import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';

import PATH from '../constant/route';
import { signIn, signOut, signUp, clearSignUpState } from '../actions/authActions';

import AuthError from '../components/AuthError';

import '../styles/sign.css';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			email: ``,
			password: ``,
			firstName: ``,
			secondName: ``
		};
	}

	componentDidUpdate() {
		if (this.props.auth.action === 'Registered') {
			this.props.clearSignUpState();
			return this.props.history.push(PATH.SIGN_IN);
		}
	}

	handleSubmitForm = () => (event) => {
		event.preventDefault();
		this.props.signUp(this.state);
	};

	handleChange = () => (event) => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { error } = this.props.auth;

		if (localStorage.getItem('userId')) {
			return <Redirect to={PATH.PROFILE} />;
		}

		return (
			<Row className="main">
				<Col xs="12" className="sign__screen">
					<h1 className="sign__logo">
						To<span className="sign__logo--bold">Do</span>
					</h1>
					<p className="sign__desctiption">
						Start sceduling your time. Loggin to continue.
					</p>
				</Col>
				<Col xs="12" className="sign__main">
					<form className="sign__form flex-container" onSubmit={this.handleSubmitForm()}>
						<input
							type="email"
							value={this.state.email}
							name="email"
							placeholder="E-mail Address"
							onChange={this.handleChange()}
							className="sign__input sign__email"
						/>
						<input
							type="password"
							value={this.state.password}
							name="password"
							placeholder="Password"
							onChange={this.handleChange()}
							className="sign__input sign__password"
						/>
						<input
							type="text"
							name="firstName"
							value={this.state.firstName}
							placeholder="First name"
							className="sign__input sign__first-name"
							onChange={this.handleChange()}
						/>
						<input
							type="text"
							name="secondName"
							value={this.state.secondName}
							placeholder="Last name"
							onChange={this.handleChange()}
							className="sign__input sign__last-name"
						/>
						{error ? <AuthError error={error} /> : null}
						<button type="submit" className="sign__submit sign-up__submit">
							Sing Up
						</button>
					</form>
				</Col>
				<Col className="sign__footer">
					<p className="sign__text-change-page">
						Already had an acount?{' '}
						<Link to={PATH.SIGN_IN} className="sign__link-change-page">
							Sign In
						</Link>
					</p>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ signIn, signOut, signUp, clearSignUpState }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
