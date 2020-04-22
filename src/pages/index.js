// import NotFound from './NotFond'
// import NotFound from './NotFond';
// import Admin from './Admin';
// import Login from './Login';
// import Setting from './Setting';
// import Article from './Article';
// import Posts from './Posts';
// import Dashboard from './Dashboard';
import React from 'react';
import { Loading } from '../components';
//import loadable from '../loadable';
import loadable from '@loadable/component';

const NotFound = loadable(() => import('./NotFound'), {
	fallback: <Loading />,
});
const Admin = loadable(() => import('./Admin'), { fallback: <Loading /> });
const Login = loadable(() => import('./Login'), { fallback: <Loading /> });
const Setting = loadable(() => import('./Setting'), { fallback: <Loading /> });
const Article = loadable(() => import('./Article'), { fallback: <Loading /> });
const Posts = loadable(() => import('./Posts'), { fallback: <Loading /> });

const Dashboard = loadable(() => import('./Dashboard'), {
	fallback: <Loading />,
});

export { NotFound, Admin, Login, Setting, Article, Posts, Dashboard };
