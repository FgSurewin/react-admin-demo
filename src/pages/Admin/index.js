import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { mainRouter, subRouter } from '../../routes';

export default function Admin() {
	const { notFound } = mainRouter;
	const { setting, article, posts, dashboard } = subRouter;
	return (
		<Switch>
			<Route path={dashboard.pathName} component={dashboard.component} />
			<Route path={setting.pathName} component={setting.component} />
			<Route path={article.pathName} component={article.component} />
			<Route path={posts.pathName} component={posts.component} />
			<Redirect exact to={dashboard.pathName} from='/admin' />
			<Redirect to={notFound.pathName} />
		</Switch>
	);
}
