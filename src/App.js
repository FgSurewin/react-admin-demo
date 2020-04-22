import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { mainRouter } from './routes';
import Frame from './Frame';

export default class App extends Component {
	render() {
		const { admin, notFound, login } = mainRouter;
		const { component: Component } = admin;
		return (
			<Switch>
				<Route
					path={admin.pathName}
					render={() => (
						<Frame>
							<Component />
						</Frame>
					)}
				/>
				<Route path={notFound.pathName} component={notFound.component} />
				<Route path={login.pathName} component={login.component} />
				<Redirect exact to={admin.pathName} from='/' />
				<Redirect to={notFound.pathName} />
			</Switch>
		);
	}
}
