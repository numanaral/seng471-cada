import { useSelector } from 'react-redux';

import { useFirebase } from 'react-redux-firebase';
import { makeSelectProfile } from 'store/redux/reducers/firebase/selectors';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const useProfile = () => {
	/** @type {{import('react-redux-firebase').FirebaseReducer.Profile<{}>}} */
	const {
		isLoaded,
		isEmpty,
		theme,
		bitmoji,
		primaryColor,
		secondaryColor,
		...profile
	} = useSelector(makeSelectProfile());

	const { notifySuccess, notifyError } = useNotificationProvider();

	const firebase = useFirebase();

	const updateProfile = async props => {
		try {
			await firebase.updateProfile({ ...props });
			notifySuccess('Profile has been updated successfully!');
		} catch (err) {
			notifyError(err);
		}
	};

	const updateTheme = t => {
		updateProfile({ theme: t });
	};

	const updateBitmoji = b => {
		updateProfile({ bitmoji: b });
	};

	const updatePrimaryColor = b => {
		updateProfile({ primaryColor: b });
	};

	const updateSecondaryColor = b => {
		updateProfile({ secondaryColor: b });
	};

	const isAuthorizing = !isLoaded;

	const roles = profile.roles || [];

	return {
		isAuthorizing,
		roles,
		theme,
		bitmoji,
		profile,
		primaryColor,
		secondaryColor,
		updateProfile,
		updateTheme,
		updateBitmoji,
		updatePrimaryColor,
		updateSecondaryColor,
	};
};

export default useProfile;
