import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { fromFirestore } from 'store/firebase/utils';
import LoadingIndicator from 'components/LoadingIndicator';
import NoAccess from 'components/NoAccess';
import useAuth from '../useAuth';
import useRoles from '../useRoles';

const useWatchCustomer = id => {
	const { userId: designatedSalespersonId } = useAuth();
	const { isDesignatedSalesperson } = useRoles();

	useFirestoreConnect({
		collection: 'customers',
		doc: id,
		// owner can see everyone
		// designated salesperson will have his customers linked
		// ...(isDesignatedSalesperson && {
		// 	where: ['designatedSalespersonId', '==', userId],
		// }),
	});

	const customerFromFirestore = useSelector(
		state => state.firestore.data.customers
	);

	const customer =
		(customerFromFirestore?.[id] &&
			fromFirestore(customerFromFirestore[id], ['vehicleSelection'])) ||
		{};

	const pending = !isLoaded(customerFromFirestore) && <LoadingIndicator />;
	const error =
		// empty
		(isEmpty(customerFromFirestore?.[id]) && (
			<NoAccess>
				Either the customer is not found or you don&apos;t have access
				to this page.
			</NoAccess>
		)) ||
		//  designated person is not linked to this customer
		(isDesignatedSalesperson &&
			customer?.designatedSalespersonId !== designatedSalespersonId && (
				<NoAccess>
					You don&apos;t have access to view or update this customer.
				</NoAccess>
			));
	return {
		customer,
		pending,
		error,
	};
};

export default useWatchCustomer;
