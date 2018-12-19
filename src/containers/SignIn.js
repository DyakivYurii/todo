import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import PATH from '../constant/route';
import { signIn } from '../actions/authActions';

import AuthError from '../components/AuthError';

import '../styles/sign.css';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: ``,
			password: ``
		};
	}

	handleChange = () => (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = () => (event) => {
		event.preventDefault();
		this.props.signIn(this.state.email, this.state.password);
	};

	render() {
		const { error } = this.props.auth;

		if (localStorage.getItem('userId')) {
			return <Redirect to={PATH.TODOS} />;
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
					<form className="sign__form flex-container" onSubmit={this.handleSubmit()}>
						<input
							type="email"
							name="email"
							value={this.state.email}
							placeholder="E-mail Address"
							className="sign__input sign__email"
							onChange={this.handleChange()}
						/>
						<input
							type="password"
							name="password"
							value={this.state.password}
							placeholder="Password"
							className="sign__input sign__password"
							onChange={this.handleChange()}
						/>
						{error ? <AuthError error={error} /> : null}
						<button type="submit" className="sign__submit sign-in__submit">
							Sing In
						</button>
					</form>
				</Col>
				<Col xs="12" className="sign__footer">
					<p className="sign__text-change-page">
						New user?{' '}
						<Link to={PATH.SIGN_UP} className="sign__link-change-page">
							Sign Up
						</Link>
					</p>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			signIn
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignIn);
