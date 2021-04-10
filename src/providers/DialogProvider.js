import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	hideDialog,
	toggleFullScreen,
} from 'store/redux/reducers/dialog/actions';
import makeSelectDialogProps from 'store/redux/reducers/dialog/selectors';
import Dialog from 'components/Dialog';

const DialogProvider = () => {
	const dialogProps = useSelector(makeSelectDialogProps());
	const dispatch = useDispatch();
	const onFullScreenToggle = useCallback(() => dispatch(toggleFullScreen()), [
		dispatch,
	]);
	const onCancel = useCallback(() => dispatch(hideDialog()), [dispatch]);

	return (
		<Dialog
			onFullScreenToggle={onFullScreenToggle}
			onCancel={onCancel}
			{...dialogProps}
		/>
	);
};

export default DialogProvider;
