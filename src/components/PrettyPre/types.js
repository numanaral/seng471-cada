import { string, oneOf } from 'prop-types';

const propTypes = {
	children: string,
	variant: oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'subtitle1',
		'subtitle2',
		'body1',
		'body2',
		'caption',
		'button',
		'overline',
	]),
};

const defaultProps = {
	children: '',
	variant: 'subtitle1',
};

export { propTypes, defaultProps };
