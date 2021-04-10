import { bool, object } from 'prop-types';

const propTypes = {
	containerProps: object,
	paperProps: object,
	noBg: bool,
};

const defaultProps = {
	containerProps: {},
	paperProps: {},
	noBg: false,
};

export { propTypes, defaultProps };
