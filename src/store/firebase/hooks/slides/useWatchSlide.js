import React from 'react';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

// import useAuth from 'store/firebase/hooks/useAuth';
import { fromFirestore } from 'store/firebase/utils';
import LoadingIndicator from 'components/LoadingIndicator';
import NoAccess from 'components/NoAccess';

const useWatchSlide = slideId => {
	// const { userId } = useAuth();
	useFirestoreConnect({
		collection: 'slides',
		doc: slideId,
		// where: [
		// 	[firebase.firestore.FieldPath.documentId(), '==', slideId],
		// 	['userId', '==', userId],
		// ],
	});

	const slideFromFirestore = useSelector(
		({ firestore: { data } }) => data.slides && data.slides[slideId]
	);

	const pending = !isLoaded(slideFromFirestore) && <LoadingIndicator />;
	const error = isEmpty(slideFromFirestore) && <NoAccess />;

	const slide =
		(slideFromFirestore && fromFirestore(slideFromFirestore, ['slides'])) ||
		[];

	return {
		slide,
		pending,
		error,
	};
};

export default useWatchSlide;
