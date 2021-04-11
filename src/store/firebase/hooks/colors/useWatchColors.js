import React from 'react';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import LoadingIndicator from 'components/LoadingIndicator';
import { fromFirestore } from 'store/firebase/utils';
import { THIS_YEAR, doc } from './constants';

const NotFound = () => (
	<Typography>You haven&apos;t added colors for {THIS_YEAR} yet.</Typography>
);

const useWatchColors = () => {
	/** @see https://react-redux-firebase.com/docs/queries.html#types-of-queries */
	useFirestoreConnect({
		collection: 'colors',
		doc,
	});
	const colorsFromFirestore = useSelector(
		state => state.firestore.data.colors
	);

	const pending = !isLoaded(colorsFromFirestore) && (
		<LoadingIndicator size="xlarge" fullWidth />
	);
	const error = isEmpty(colorsFromFirestore) && <NotFound key={-2} />;

	const { exterior = [], interior = [] } =
		(colorsFromFirestore &&
			fromFirestore(colorsFromFirestore[doc], [
				'exterior',
				'interior',
			])) ||
		[];

	return {
		exterior,
		interior,
		pending,
		error,
	};
};

export default useWatchColors;
