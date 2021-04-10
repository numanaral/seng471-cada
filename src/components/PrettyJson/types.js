import { string, oneOfType, object, array } from 'prop-types';

const codeType = oneOfType([string, object, array]);

const propTypes = {
	json: codeType.isRequired,
	rel: string,
};

const defaultProps = {
	rel: 'json',
};

export { codeType, propTypes, defaultProps };
