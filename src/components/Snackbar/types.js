import { number, bool, func, string } from 'prop-types';

import { severity } from 'components/types';

const propTypes = {
	open: bool,
	autoHideDuration: number,
	onClose: func,
	severity,
	message: string.isRequired,
};
const defaultProps = {
	open: false,
	autoHideDuration: 1500,
	onClose: null,
	severity: 'success',
};

export { propTypes, defaultProps };
