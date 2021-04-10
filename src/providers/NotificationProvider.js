import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Snackbar from 'components/Snackbar';
import makeSelectSnackbarProps from 'store/redux/reducers/snackbar/selector';
import { hideNotification } from 'store/redux/reducers/snackbar/actions';

const NotificationProvider = () => {
	const snackbarProps = useSelector(makeSelectSnackbarProps());
	const dispatch = useDispatch();
	const hideSnackbar = useCallback(() => dispatch(hideNotification()), [
		dispatch,
	]);

	return <Snackbar {...snackbarProps} onClose={hideSnackbar} />;
};

export default NotificationProvider;
