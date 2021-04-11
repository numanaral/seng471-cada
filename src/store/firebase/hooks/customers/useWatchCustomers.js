import React from 'react';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import LoadingIndicator from 'components/LoadingIndicator';
import { mapFromFireStore } from 'store/firebase/utils';
import useAuth from '../useAuth';
import useRoles from '../useRoles';

const NotFound = () => <Typography>There are no users.</Typography>;

const useWatchCustomers = () => {
	const { userId } = useAuth();
	const { isDesignatedSalesperson } = useRoles();
	console.log(userId);

	/** @see https://react-redux-firebase.com/docs/queries.html#types-of-queries */
	useFirestoreConnect({
		collection: 'customers',
		// orderBy: ['firstName'],
		// owner can see everyone
		// designated salesperson will have his customers linked
		...(isDesignatedSalesperson && {
			where: ['designatedSalespersonId', '==', userId],
		}),
	});
	const customersFromFirestore = useSelector(
		state => state.firestore.data.customers
	);

	const pending = !isLoaded(customersFromFirestore) && (
		<LoadingIndicator size="xlarge" fullWidth />
	);
	const error = isEmpty(customersFromFirestore) && <NotFound key={-2} />;

	const customers =
		(customersFromFirestore &&
			Object.keys(customersFromFirestore)
				.map(key => {
					return {
						...customersFromFirestore[key],
						id: key,
					};
				})
				.map(mapFromFireStore())) ||
		[];

	return {
		customers,
		pending,
		error,
	};
};

export default useWatchCustomers;
