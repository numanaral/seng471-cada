import { createSelector } from 'reselect';
import { DEFAULT_VALUES, KEY } from './constants';

// Direct selector to the visible state
const selectDialogProps = state => state[KEY] || DEFAULT_VALUES;

// Other specific selectors

// Default selector
const makeSelectDialogProps = () =>
	createSelector(selectDialogProps, modalPropsState => modalPropsState);

export { selectDialogProps };
export default makeSelectDialogProps;
