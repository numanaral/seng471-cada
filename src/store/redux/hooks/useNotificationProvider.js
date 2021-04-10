import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
	displayErrorMessage,
	displaySuccessMessage,
	displayWarningMessage,
	displayInfoMessage,
} from 'store/redux/reducers/snackbar/actions';

const useNotificationProvider = () => {
	const dispatch = useDispatch();

	const notifySuccess = useCallback(
		message =>
			dispatch(
				displaySuccessMessage(
					(message && typeof message === 'string' && message) ||
						'Success!'
				)
			),
		[dispatch]
	);
	const notifyError = useCallback(
		errorOrMessage =>
			dispatch(
				displayErrorMessage(errorOrMessage?.message || errorOrMessage)
			),
		[dispatch]
	);
	const notifyWarning = useCallback(
		message => dispatch(displayWarningMessage(message)),
		[dispatch]
	);
	const notifyInfo = useCallback(
		message => dispatch(displayInfoMessage(message)),
		[dispatch]
	);

	return { notifySuccess, notifyError, notifyWarning, notifyInfo };
};

export default useNotificationProvider;
