import { createSelector, createStructuredSelector } from 'reselect';
import { KEY, DEFAULT_VALUES } from './constants';

// Direct selector to the userPreferences state
const selectUserPreferences = state => state[KEY] || DEFAULT_VALUES;

// Other specific selectors
const makeSelectTheme = () =>
	createSelector(selectUserPreferences, ({ theme }) => theme);

// Combined selector
const makeSelectUserPreferences = () =>
	createStructuredSelector({
		theme: makeSelectTheme(),
	});

export { selectUserPreferences, makeSelectTheme };

export default makeSelectUserPreferences;
