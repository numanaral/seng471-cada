// import { createSelector, createStructuredSelector } from 'reselect';

// Direct selector to the userPreferences state
const selectFirestore = state => state.firestore;

// // Other specific selectors
// const makeSelectAuth = () =>
// 	createSelector(selectFirestore, ({ auth }) => auth);

// // Combined selector
// const makeSelectFirestore = () =>
// 	createStructuredSelector({
// 		auth: makeSelectAuth(),
// 	});

export { selectFirestore };
// export { selectFirestore, makeSelectAuth };

// export default makeSelectFirestore;
