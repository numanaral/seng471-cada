import { element, bool, objectOf, string, node } from 'prop-types';

import { icon } from 'components/types';

const propTypes = {
	component: element.isRequired,
	passDownOnCloseProp: bool,
	anchorOrigin: objectOf(string),
	transformOrigin: objectOf(string),
	tooltip: string,
	text: string,
	icon,
	buttonComponent: node,
};

const defaultProps = {
	passDownOnCloseProp: false,
	anchorOrigin: {
		vertical: 'bottom',
		horizontal: 'center',
	},
	transformOrigin: {
		vertical: 'top',
		horizontal: 'center',
	},
	tooltip: '',
	text: null,
	icon: null,
	buttonComponent: null,
};

export { propTypes, defaultProps };
