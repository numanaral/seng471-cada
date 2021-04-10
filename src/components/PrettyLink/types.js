import { bool, string } from 'prop-types';

const propTypes = {
	to: string.isRequired,
	external: bool,
	arrow: bool,
};

const defaultProps = {
	external: false,
	arrow: false,
};

export { propTypes, defaultProps };
