import { string, func } from 'prop-types';

const propTypes = {
	color: string,
	onColorChange: func.isRequired,
};

const defaultProps = {
	color: '',
};

export { propTypes, defaultProps };
