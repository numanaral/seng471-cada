import { useFirebase } from 'react-redux-firebase';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const useLogin = () => {
	const firebase = useFirebase();
	const { notifySuccess, notifyError } = useNotificationProvider();

	const logOut = () => firebase.logout();

	const emailLogin = credentials =>
		firebase.login(credentials).then(notifySuccess).catch(notifyError);

	const emailSignUp = credentials =>
		firebase.createUser(credentials).then(notifySuccess).catch(notifyError);

	return {
		emailLogin,
		emailSignUp,
		logOut,
	};
};

export default useLogin;
