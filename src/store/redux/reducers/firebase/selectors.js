import { createSelector, createStructuredSelector } from 'reselect';

// Direct selector to the userPreferences state
const selectFirebase = state => state.firebase;

// Other specific selectors
const makeSelectAuth = () => createSelector(selectFirebase, ({ auth }) => auth);

const makeSelectProfile = () =>
	createSelector(selectFirebase, ({ profile }) => profile);

// Combined selector
const makeSelectFirebase = () =>
	createStructuredSelector({
		auth: makeSelectAuth(),
		profile: makeSelectProfile(),
	});

export { selectFirebase, makeSelectAuth, makeSelectProfile };

export default makeSelectFirebase;
