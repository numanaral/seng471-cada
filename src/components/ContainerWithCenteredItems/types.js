import { bool, node } from 'prop-types';

const propTypes = {
	children: node,
	horizontal: bool,
	vertical: bool,
};

const defaultProps = {
	children: '',
	horizontal: true,
	vertical: false,
};

export { propTypes, defaultProps };
