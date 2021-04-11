import { useFirestore } from 'react-redux-firebase';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useAuth from 'store/firebase/hooks/useAuth';
import { toFirestore } from 'store/firebase/utils';

const useCustomer = id => {
	const { notifyError } = useNotificationProvider();
	const { userId: designatedSalespersonId } = useAuth();

	const firestore = useFirestore({
		collection: 'customers',
		doc: id,
	});

	const createCustomer = async props => {
		try {
			const date = new Date();
			const { id: newId } = await firestore.add(
				'customers',
				toFirestore({
					...props,
					createdOn: date,
					updatedOn: date,
					vehicleSelection: {
						vehicleModel: null,
						exteriorColor: null,
						interiorColor: null,
					},
					designatedSalespersonId,
				})
			);
			return newId;
		} catch (err) {
			notifyError(err);
			return '';
		}
	};

	const updateCustomer = async props => {
		try {
			await firestore.update(`customers/${id}`, toFirestore(props));
		} catch (err) {
			notifyError(err);
		}
	};

	const deleteCustomer = async (customerId = id) => {
		try {
			await firestore.delete(`customers/${customerId}`);
		} catch (err) {
			notifyError(err);
		}
	};

	return {
		createCustomer,
		updateCustomer,
		deleteCustomer,
	};
};

export default useCustomer;
