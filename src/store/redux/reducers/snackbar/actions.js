import { SET_SNACKBAR_PROPS, DEFAULT_VALUES } from './constants';

/*
	FOR REFERENCE:
	==============
	{
		open: false,
		autoHideDuration: 1500,
		onClose: null,
		severity: 'success',
		message: 'Success!',
	};
*/

const setSnackbarProps = payload => ({
	type: SET_SNACKBAR_PROPS,
	payload,
});

/**
 * Display a success notification
 *
 * @param {Object} payload message
 * @return {object} An action object with a type of SET_SNACKBAR_PROPS
 */
const displaySuccessMessage = message => ({
	type: SET_SNACKBAR_PROPS,
	payload: {
		...DEFAULT_VALUES,
		...(message ? { message } : {}),
		open: true,
	},
});

/**
 * Display an error notification
 *
 * @param {Object} payload message
 * @return {object} An action object with a type of SET_SNACKBAR_PROPS
 */
const displayErrorMessage = message => ({
	type: SET_SNACKBAR_PROPS,
	payload: {
		...DEFAULT_VALUES,
		autoHideDuration: null,
		severity: 'error',
		message,
		open: true,
	},
});

/**
 * Display an error notification
 *
 * @param {Object} payload message
 * @return {object} An action object with a type of SET_SNACKBAR_PROPS
 */
const displayWarningMessage = message => ({
	type: SET_SNACKBAR_PROPS,
	payload: {
		...DEFAULT_VALUES,
		autoHideDuration: 15000,
		severity: 'warning',
		message,
		open: true,
	},
});

/**
 * Display an error notification
 *
 * @param {Object} payload message
 * @return {object} An action object with a type of SET_SNACKBAR_PROPS
 */
const displayInfoMessage = message => ({
	type: SET_SNACKBAR_PROPS,
	payload: {
		...DEFAULT_VALUES,
		autoHideDuration: 2500,
		severity: 'info',
		message,
		open: true,
	},
});

/**
 * Hides the notification
 *
 * @return {object} An action object with a type of SET_SNACKBAR_PROPS
 */
const hideNotification = () => ({
	type: SET_SNACKBAR_PROPS,
	payload: {
		open: false,
	},
});

export {
	setSnackbarProps,
	displaySuccessMessage,
	displayErrorMessage,
	displayWarningMessage,
	displayInfoMessage,
	hideNotification,
};
