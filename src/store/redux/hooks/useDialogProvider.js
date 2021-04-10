import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
	displayTextDialog,
	displayComponentDialog,
	displayConfirmDialog,
	displayHtmlDialog,
	hideDialog,
	displayFormDialog,
} from 'store/redux/reducers/dialog/actions';
import LoadingIndicator from 'components/LoadingIndicator';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { getErrorMessageFromFetch } from 'utils';

const useDialogProvider = () => {
	const dispatch = useDispatch();

	const openTextDialog = useCallback(
		(title, content, options = {}) =>
			dispatch(displayTextDialog(title, content, options)),
		[dispatch]
	);

	const openComponentDialog = useCallback(
		(title, content, options = {}) =>
			dispatch(displayComponentDialog(title, content, options)),
		[dispatch]
	);

	const openHtmlDialog = useCallback(
		(title, content, options = {}) =>
			dispatch(displayHtmlDialog(title, content, options)),
		[dispatch]
	);

	const openFormDialog = useCallback(
		(title, formProps, options = {}) =>
			dispatch(displayFormDialog(title, formProps, options)),
		[dispatch]
	);

	const openConfirmDialog = useCallback(
		(
			title,
			callback,
			onError = null,
			confirmText = 'Yes',
			cancelText = 'No',
			rest = {}
		) =>
			dispatch(
				displayConfirmDialog(
					title,
					callback,
					onError,
					confirmText,
					cancelText,
					rest
				)
			),
		[dispatch]
	);

	const openLoadingDialog = useCallback(
		async (successCalback = null) => {
			openComponentDialog(
				'Loading...',
				<ContainerWithCenteredItems>
					<LoadingIndicator size="large" />
				</ContainerWithCenteredItems>
			);
			try {
				await successCalback?.();
			} catch (err) {
				openTextDialog(getErrorMessageFromFetch(err));
			}
		},
		[openComponentDialog, openTextDialog]
	);

	const closeDialog = useCallback(() => dispatch(hideDialog()), [dispatch]);

	const getCallbackMethod = useCallback(
		type => {
			let cb = openTextDialog;
			if (type === 'html') cb = openHtmlDialog;
			else if (type === 'component') cb = openComponentDialog;
			return cb;
		},
		[openComponentDialog, openHtmlDialog, openTextDialog]
	);

	const displayError = useCallback(
		(title = 'Error', content = '', type = 'text') => {
			getCallbackMethod(type)(title, content);
		},
		[getCallbackMethod]
	);

	const displaySuccess = useCallback(
		(title = 'Success', content = '', type = 'text') => {
			getCallbackMethod(type)(title, content);
		},
		[getCallbackMethod]
	);

	return {
		openTextDialog,
		openComponentDialog,
		openHtmlDialog,
		openFormDialog,
		openConfirmDialog,
		openLoadingDialog,
		closeDialog,
		getCallbackMethod,
		displayError,
		displaySuccess,
	};
};

export default useDialogProvider;
