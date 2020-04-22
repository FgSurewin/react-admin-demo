import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { mainRouter, subRouter } from '../../routes';

function Admin() {
	const { notFound } = mainRouter;
	const { setting, article, posts, dashboard } = subRouter;
	return (
		<Switch>
			<Route exact path={dashboard.pathName} component={dashboard.component} />
			<Route exact path={setting.pathName} component={setting.component} />
			<Route exact path={article.pathName} component={article.component} />
			<Route exact path={posts.pathName} component={posts.component} />
			<Redirect exact to={dashboard.pathName} from='/admin' />
			<Redirect to={notFound.pathName} />
		</Switch>
	);
}

export default Admin;
