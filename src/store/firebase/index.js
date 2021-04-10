import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
import { createFirestoreInstance } from 'redux-firestore';
import { DARK_THEME } from 'store/redux/reducers/userPreference/constants';
import { PRIMARY_COLOR, SECONDARY_COLOR } from 'theme';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

console.log(process.env);
console.log(firebaseConfig);

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore();

/** @type {import('react-redux-firebase').ReactReduxFirebaseConfig} */
const reactReduxFirebaseConfig = {
	userProfile: 'users',
	profileParamsToPopulate: [
		{ child: 'role', root: 'roles' }, // populates user's role with matching role object from roles
	],
	// Add "User" role to the user on signUp
	profileFactory: user => {
		const _user = user?.user || user;
		const profile = {
			email: _user.email || _user.providerData[0].email,
			roles: ['User'],
			theme: DARK_THEME,
			primaryColor: PRIMARY_COLOR,
			secondaryColor: SECONDARY_COLOR,
		};
		if (_user.providerData && _user.providerData.length) {
			profile.providerData = _user.providerData;
		}
		return profile;
	},
};

const getReactReduxFirebaseProps = store => ({
	firebase,
	config: reactReduxFirebaseConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
});

export { firebaseConfig, reactReduxFirebaseConfig, getReactReduxFirebaseProps };
