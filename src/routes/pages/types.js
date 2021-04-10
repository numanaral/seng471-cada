import { shape, string } from 'prop-types';

const routerBasePropTypes = {
	location: shape({
		search: string,
		state: shape({
			referrer: string,
			to: string,
		}),
	}).isRequired,
	error: string,
};

const routerBaseDefaultProps = {
	error: '',
};

const singleViewRouterPropTypes = {
	match: shape({
		params: shape({
			id: string.isRequired,
		}),
	}),
};

const singleViewRouterDefaultProps = {};

export {
	routerBasePropTypes,
	routerBaseDefaultProps,
	singleViewRouterPropTypes,
	singleViewRouterDefaultProps,
};
