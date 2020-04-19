import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { mainRouter } from './routes';

const { admin, notFound, login } = mainRouter;
export default class App extends Component {
	render() {
		return (
			<div>
				<p>public area</p>
				<Switch>
					<Route path={admin.pathName} component={admin.component} />
					<Route path={notFound.pathName} component={notFound.component} />
					<Route path={login.pathName} component={login.component} />
					<Redirect exact to={admin.pathName} from='/' />
					<Redirect to={notFound.pathName} />
				</Switch>
			</div>
		);
	}
}
