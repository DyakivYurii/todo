import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import PATH from './constant/route';
import store from './store/store';

import AppLayer from './components/AppLayer';
import Error404 from './components/Error404';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Todos from './containers/Todos';
import ExtraInfo from './components/Todos/ExtraInfo';

import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Container>
					<BrowserRouter>
						<AppLayer>
							<Switch>
								<Route path={PATH.ERROR_404} component={Error404} />
								<Route path={PATH.SIGN_IN} component={SignIn} />
								<Route path={PATH.SIGN_UP} component={SignUp} />
								<PrivateRoute path={PATH.TODOS_ITEM_ID} component={ExtraInfo} />
								<PrivateRoute path={PATH.TODOS} component={Todos} />

								<Redirect from={PATH.HOME} to={PATH.SIGN_IN} />
								<Redirect from="*" to={PATH.ERROR_404} />
							</Switch>
						</AppLayer>
					</BrowserRouter>
				</Container>
			</Provider>
		);
	}
}

export default App;
