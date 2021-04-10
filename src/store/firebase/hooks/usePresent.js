import React from 'react';
import {
	isEmpty,
	isLoaded,
	useFirebase,
	useFirebaseConnect,
} from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import useAuth from 'store/firebase/hooks/useAuth';
import { fromFirestore, toFirestore } from 'store/firebase/utils';
import LoadingIndicator from 'components/LoadingIndicator';
import NoAccess from 'components/NoAccess';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const DRAWING_BASE = '{"lines": [],"width": "100%","height": "100%"}';
const usePresent = slideId => {
	const { notifyError } = useNotificationProvider();
	const { userId } = useAuth();
	// const { userId } = useAuth();
	const firebase = useFirebase({
		path: `live/${slideId}`,
	});
	useFirebaseConnect({
		path: `live/${slideId}`,
	});

	const liveOptionsFromFirebase = useSelector(
		({
			firebase: {
				data: { live },
			},
		}) => live && live[slideId]
	);

	const pending = !isLoaded(liveOptionsFromFirebase) && <LoadingIndicator />;
	const error = isEmpty(liveOptionsFromFirebase) && <NoAccess />;

	const liveOptions =
		(liveOptionsFromFirebase && fromFirestore(liveOptionsFromFirebase)) ||
		[];

	const presenterCoordinates = { ...liveOptions };

	const createLiveOptions = async (props, id = slideId) => {
		try {
			if (!pending && !error && !!presenterCoordinates.x) return;
			await firebase.set(
				`live/${id}`,
				toFirestore({
					...props,
					userId,
					x: '400',
					y: '400',
					page: 0,
					drawing: DRAWING_BASE,
				})
			);
		} catch (err) {
			notifyError(err);
		}
	};

	const updateLiveOptions = async (x, y) => {
		try {
			await firebase.update(`live/${slideId}`, toFirestore({ x, y }));
		} catch (err) {
			notifyError(err);
		}
	};
	const updatePage = async (page = null) => {
		try {
			await firebase.update(`live/${slideId}`, toFirestore({ page }));
		} catch (err) {
			notifyError(err);
		}
	};
	const updateDrawing = async drawing => {
		try {
			await firebase.update(`live/${slideId}`, toFirestore({ drawing }));
		} catch (err) {
			notifyError(err);
		}
	};
	const clearDrawing = async () => {
		try {
			await firebase.update(
				`live/${slideId}`,
				toFirestore({ drawing: DRAWING_BASE })
			);
		} catch (err) {
			notifyError(err);
		}
	};

	const deleteLiveOptions = async () => {
		try {
			await firebase.remove(`live/${slideId}`);
		} catch (err) {
			notifyError(err);
		}
	};

	return {
		presenterCoordinates,
		createLiveOptions,
		updateLiveOptions,
		updatePage,
		updateDrawing,
		clearDrawing,
		deleteLiveOptions,
		liveOptions,
		pending,
		error,
	};
};

export default usePresent;
