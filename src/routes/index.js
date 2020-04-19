import {
	NotFound,
	Admin,
	Login,
	Setting,
	Article,
	Posts,
	Dashboard,
} from '../pages';

export const mainRouter = {
	admin: {
		pathName: '/admin',
		component: Admin,
	},
	notFound: {
		pathName: '/404',
		component: NotFound,
	},
	login: {
		pathName: '/login',
		component: Login,
	},
};

export const subRouter = {
	setting: {
		pathName: '/admin/setting',
		component: Setting,
	},
	article: {
		pathName: '/admin/article',
		component: Article,
	},
	posts: {
		pathName: '/admin/posts',
		component: Posts,
	},
	dashboard: {
		pathName: '/admin/dashboard',
		component: Dashboard,
	},
};
