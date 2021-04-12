import { Redirect } from 'react-router-dom';

import loadable from 'utils/loadable';

const USER_ROLES = {
	DEV: 'Developer',
	OWNER: 'Owner',
	DESIGNATED_SALESPERSON: 'Designated Salesperson',
	GENERIC_SALESPERSON: 'Generic Salesperson',
};

const { DEV, OWNER, DESIGNATED_SALESPERSON, GENERIC_SALESPERSON } = USER_ROLES;

const PAGE_ROLES = {
	// PUBLIC: '*',
	LOGGED_IN: [DEV, OWNER, DESIGNATED_SALESPERSON, GENERIC_SALESPERSON],
	OWNER: [DEV, OWNER],
	SALESPERSON: [DEV, OWNER, DESIGNATED_SALESPERSON, GENERIC_SALESPERSON],
};

// This is kinda required for gh-pages and SPA to work well together
const BASE_PATH = '/seng471-cada';

// const mapRoles = roles => route => ({
// 	...route,
// 	roles,
// });

const mapBasePathForRoutes = route => ({
	...route,
	...(route.path !== '/' && { path: BASE_PATH + route.path }),
});

const mapBasePathForLinks = link => ({
	...link,
	...(link.to && { to: BASE_PATH + link.to }),
});

/* eslint-disable prettier/prettier */
// Public routes
const LazyHome = loadable(() => import(`routes/pages/Home`));

// Private routes
const LazyTemplateColorPicker = loadable(() =>
	import(`routes/pages/TemplateColorPicker`)
);
const LazyProfile = loadable(() => import(`routes/pages/Profile`));
const LazyCustomers = loadable(() => import(`routes/pages/Customers`));
const LazyCustomerManager = loadable(() =>
	import(`routes/pages/CustomerManager`)
);

// Handler Pages
const LazyNotFound = loadable(() => import(`./pages/NotFound`));
const LazyUnauthorized = loadable(() => import(`./pages/Unauthorized`));
const LazyLogin = loadable(() => import(`./pages/Login`));
const LazySignUp = loadable(() => import(`./pages/SignUp`));
/* eslint-enable prettier/prettier */

const PRIVATE_ROUTES = [
	{
		title: 'Colors',
		description: `Pick template colors`,
		path: '/colors',
		component: <LazyTemplateColorPicker />,
		roles: PAGE_ROLES.OWNER,
	},
	{
		title: 'Customers',
		description: `List of customers`,
		path: '/customers',
		component: <LazyCustomers />,
		roles: PAGE_ROLES.SALESPERSON,
	},
	{
		title: 'Customer Manager',
		description: `Manage customer`,
		path: '/customers/:id',
		component: <LazyCustomerManager />,
		roles: PAGE_ROLES.SALESPERSON,
	},
	// {
	// 	title: 'Slide Builder',
	// 	description: `Build your slides!`,
	// 	path: '/create/:id',
	// 	component: <LazySlideBuilder />,
	// },
	{
		title: 'Profile',
		description: `Adjust your app profile.`,
		path: '/profile',
		component: <LazyProfile />,
		roles: PAGE_ROLES.LOGGED_IN,
	},
];
// ].map(mapRoles(PAGE_ROLES.LOGGED_IN));

const ROUTE_LIST = [
	{
		title: 'Home | Slide Scott',
		description: `Learn new characters along with their translations and pinyin. Check details for more examples and practice writing using your mouse/fingers!`,
		path: '',
		component: <LazyHome />,
	},
	{
		path: '/',
		component: <Redirect to={BASE_PATH} />,
	},
	...PRIVATE_ROUTES,
	{
		title: 'Login',
		description: `Login to the app.`,
		path: '/login',
		component: <LazyLogin />,
	},
	{
		title: 'SignUp',
		description: `Sign up for an account.`,
		path: '/signup',
		component: <LazySignUp />,
	},
	{
		title: 'Unauthorized',
		description: `User does not have access to the following page.`,
		path: '/unauthorized',
		component: <LazyUnauthorized />,
	},
	{
		title: 'Not Found',
		description: `The page you are looking for might have been removed had its name changed or is temporarily unavailable.`,
		path: '/not-found',
		component: <LazyNotFound />,
	},
].map(mapBasePathForRoutes);

// const MENU_PAGES = [];

const SHARED_DISPLAY_PAGES = [
	// Public Paths
	...[
		{
			label: 'Home',
			tooltip: `Landing Page`,
			to: '/',
			// icon: HomeIcon
		},
	],
	// Private Paths
	...[
		{
			label: 'Colors',
			tooltip: 'Colors',
			text: 'Colors',
			to: '/colors',
			roles: PAGE_ROLES.OWNER,
		},
		{
			label: 'Customers',
			tooltip: 'Customers',
			text: 'Customers',
			to: '/customers',
			roles: PAGE_ROLES.SALESPERSON,
		},
		// {
		// 	label: 'Slide Builder',
		// 	tooltip: 'Slide Builder',
		// 	text: 'Slide Builder',
		// 	to: '/slide-builder',
		// },
	],
	// ].map(mapRoles(PAGE_ROLES.LOGGED_IN)),
	// {
	// 	label: 'Account',
	// 	tooltip: 'Account',
	// 	icon: AccountIcon,
	// 	disabled: true,
	// },
	// {
	// 	label: 'Profile',
	// 	tooltip: 'Profile',
	// 	text: 'Profile',
	// 	to: '/profile',
	// },
].map(mapBasePathForLinks);

const NAV_LIST = [...SHARED_DISPLAY_PAGES];

const NAV_LIST_MOBILE = [
	...SHARED_DISPLAY_PAGES,
	// {
	// 	label: 'Menu',
	// 	tooltip: 'Other pages',
	// 	menuItems: MENU_PAGES,
	// },
	// {
	// 	label: 'Account',
	// 	tooltip: 'Account',
	// 	// icon: AccountIcon,
	// 	disabled: true,
	// },
].map(mapBasePathForLinks);

export { BASE_PATH, USER_ROLES, ROUTE_LIST, NAV_LIST, NAV_LIST_MOBILE };
