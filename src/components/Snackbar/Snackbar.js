import React, { forwardRef, useEffect } from 'react';
import { Snackbar as MuiSnackbar, Typography } from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';

import { propTypes, defaultProps } from './types';

const Alert = forwardRef((props, ref) => (
	<MuiAlert elevation={6} variant="filled" {...props} ref={ref} />
));

const Snackbar = ({ open, autoHideDuration, onClose, severity, message }) => {
	// ??!!: I don't know what's going on, I have to manually handle this
	useEffect(() => {
		if (open && autoHideDuration) {
			setTimeout(() => {
				onClose();
			}, autoHideDuration);
		}
	}, [open, autoHideDuration, onClose]);

	return (
		<MuiSnackbar
			open={open}
			// autoHideDuration={autoHideDuration}
			// onClose={onClose}
		>
			<Alert onClose={onClose} severity={severity}>
				<Typography component="pre">{message}</Typography>
			</Alert>
		</MuiSnackbar>
	);
};

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default Snackbar;
