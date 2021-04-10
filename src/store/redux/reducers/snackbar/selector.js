import { createSelector } from 'reselect';
import { KEY, DEFAULT_VALUES } from './constants';

// Direct selector to the visible state
const selectSnackbarProps = state => state[KEY] || DEFAULT_VALUES;

// Other specific selectors

// Default selector
const makeSelectSnackbarProps = () =>
	createSelector(
		selectSnackbarProps,
		snackbarPropsState => snackbarPropsState
	);

export { selectSnackbarProps };
export default makeSelectSnackbarProps;
