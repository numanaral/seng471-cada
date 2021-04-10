import React from 'react';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import LoadingIndicator from 'components/LoadingIndicator';
import { mapFromFireStore, sortByFirebaseDate } from 'store/firebase/utils';
import useAuth from '../useAuth';

const NotFound = () => <Typography>You don&apos;t have any slides.</Typography>;

const useWatchSlides = () => {
	const { userId } = useAuth();

	/** @see https://react-redux-firebase.com/docs/queries.html#types-of-queries */
	useFirestoreConnect({
		collection: 'slides',
		// Need composite indexing, single indexing doesn't work
		// TODO: Check when you have time
		// orderBy: ['updatedOn', 'asc'],
		where: ['userId', '==', userId],
	});
	const slidesFromFirestore = useSelector(
		state => state.firestore.ordered.slides
	);

	const pending = !isLoaded(slidesFromFirestore) && (
		<LoadingIndicator size="xlarge" fullWidth />
	);
	const error = isEmpty(slidesFromFirestore) && <NotFound key={-2} />;

	const slides =
		(slidesFromFirestore &&
			[...slidesFromFirestore]
				.sort(sortByFirebaseDate())
				.map(mapFromFireStore())) ||
		[];

	return {
		slides,
		pending,
		error,
	};
};

export default useWatchSlides;
