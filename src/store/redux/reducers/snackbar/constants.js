// Defaults
const KEY = 'NotificationProvider';
const DEFAULT_VALUES = {
	open: false,
	autoHideDuration: 2000,
	onClose: null,
	severity: 'success',
	message: 'Success!',
};

// Types
const SET_SNACKBAR_PROPS = `${KEY}/SET_SNACKBAR_PROPS`;

export { KEY, DEFAULT_VALUES, SET_SNACKBAR_PROPS };
