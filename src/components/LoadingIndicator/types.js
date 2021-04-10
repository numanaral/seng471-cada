import { bool, oneOf } from 'prop-types';

const propTypes = {
	size: oneOf(['small', 'medium', 'large', 'xlarge']),
	type: oneOf(['linear', 'circular']),
	fullSize: bool,
	fullWidth: bool,
};
const defaultProps = {
	size: 'medium',
	type: 'circular',
	fullSize: false,
	fullWidth: false,
};

export { propTypes, defaultProps };
