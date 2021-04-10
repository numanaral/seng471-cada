import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { useFirestore } from 'react-redux-firebase';

import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import useAuth from 'store/firebase/hooks/useAuth';
import LoadingIndicator from 'components/LoadingIndicator';
import NoAccess from 'components/NoAccess';
import { toFirestore } from 'store/firebase/utils';

const useSlide = slideId => {
	const { notifyError } = useNotificationProvider();
	const [isPending, setIsPending] = useState(false);
	const [hasError, setHasError] = useState('');
	const [currentSlideBuilderSlide, setCurrentSlideBuilderSlide] = useState(
		null
	);
	const { userId } = useAuth();

	const firestore = useFirestore({
		collection: 'slides',
		where: ['userId', '==', userId],
	});

	useEffect(() => {
		const getCurrentSlideBuilderSlide = async () => {
			setIsPending(true);
			try {
				const slide = await firestore
					.collection('slides')
					.where(
						firebase.firestore.FieldPath.documentId(),
						'==',
						slideId
					)
					.where('userId', '==', userId)
					.get();

				setCurrentSlideBuilderSlide(slide.docs);
			} catch (err) {
				setHasError(err);
			} finally {
				setIsPending(false);
			}
		};
		getCurrentSlideBuilderSlide();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const createSlideshow = async props => {
		try {
			const date = new Date();
			const { id } = await firestore.add(
				'slides',
				toFirestore({
					...props,
					createdOn: date,
					updatedOn: date,
					userId,
				})
			);
			return id;
		} catch (err) {
			notifyError(err);
			return '';
		}
	};

	const updateSlideshow = async props => {
		try {
			await firestore.update(`slides/${slideId}`, toFirestore(props));
		} catch (err) {
			notifyError(err);
		}
	};

	const deleteSlideshow = async (id = slideId) => {
		try {
			await firestore.delete(`slides/${id}`);
		} catch (err) {
			notifyError(err);
		}
	};

	const pending = isPending && <LoadingIndicator />;
	const error = hasError && <NoAccess />;

	const hasEditAccess = !!currentSlideBuilderSlide?.length;

	const canEdit = () => {
		if (!hasEditAccess) {
			notifyError('Missing or insufficient permissions.');
			return false;
		}
		return true;
	};

	return {
		pending,
		error,
		hasEditAccess,
		canEdit,
		createSlideshow,
		updateSlideshow,
		deleteSlideshow,
	};
};

export default useSlide;
