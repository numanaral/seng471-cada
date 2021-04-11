import { useFirestore } from 'react-redux-firebase';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import { toFirestore } from 'store/firebase/utils';
import { doc } from './constants';

const useColors = () => {
	const {
		notifySuccess,
		notifyInfo,
		notifyError,
	} = useNotificationProvider();

	const firestore = useFirestore({
		collection: 'colors',
		doc,
	});

	const updateColors = async props => {
		try {
			notifyInfo('Updating color...');
			await firestore.update(`colors/${doc}`, toFirestore(props));
			notifySuccess();
		} catch (err) {
			notifyError(err.message);
		}
	};

	return {
		updateColors,
	};
};

export default useColors;
