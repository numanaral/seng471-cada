import { bool } from 'prop-types';

const propTypes = {
	topBottom: bool,
	rightLeft: bool,
};

const defaultProps = {
	topBottom: false,
	rightLeft: false,
};

export { propTypes, defaultProps };
