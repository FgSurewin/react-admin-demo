// import NotFound from './NotFond'
// import NotFound from './NotFond';
// import Admin from './Admin';
// import Login from './Login';
// import Setting from './Setting';
// import Article from './Article';
// import Posts from './Posts';
// import Dashboard from './Dashboard';
import { Loading } from '../components';
import Loadable from '../Loadable';

const NotFound = Loadable({
	loader: () => import('./NotFound'),
	loading: Loading,
});
const Admin = Loadable({
	loader: () => import('./Admin'),
	loading: Loading,
});
const Login = Loadable({
	loader: () => import('./Login'),
	loading: Loading,
});
const Setting = Loadable({
	loader: () => import('./Setting'),
	loading: Loading,
});
const Article = Loadable({
	loader: () => import('./Article'),
	loading: Loading,
});
const Posts = Loadable({
	loader: () => import('./Posts'),
	loading: Loading,
});

const Dashboard = Loadable({
	loader: () => import('./Dashboard'),
	loading: Loading,
});

export { NotFound, Admin, Login, Setting, Article, Posts, Dashboard };
