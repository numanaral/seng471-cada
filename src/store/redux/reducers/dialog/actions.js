import { isPromise } from 'utils';
import {
	displayErrorMessage,
	displaySuccessMessage,
} from 'store/redux/reducers/snackbar/actions';
import {
	SET_DIALOG_PROPS,
	HIDE_DIALOG,
	TOGGLE_FULL_SCREEN,
	SET_CONFIRM_PENDING,
	DEFAULT_VALUES,
} from './constants';

/*
	FOR REFERENCE:
	==============
	{
		isOpen: bool || false,
		title: string || 'Preview',
		content: string || elementType || element || null,
		type: string || 'text',
		dynamicWidth: bool || true,
		actionButtons: array || [],
		infoComponent: elementType || null,
	};
*/

const setDialogProps = payload => ({
	type: SET_DIALOG_PROPS,
	payload,
});

/**
 * Hides the modal
 *
 * @return {object} An action object with a type of HIDE_DIALOG
 */
const hideDialog = () => ({
	type: HIDE_DIALOG,
});

/**
 * Sets loading icon on the confirm button and disables the options
 *
 * @return {object} An action object with a type of TOGGLE_FULL_SCREEN
 */
const setConfirmPending = confirmPendingState => ({
	type: SET_CONFIRM_PENDING,
	confirmPendingState,
});

/**
 * Display a text modal
 *
 * @requires {Object} payload { title, content }
 * @param {Object} payload { title, content, dynamicWidth, actionButtons, infoComponent }
 * @return {object} An action object with a type of SET_DIALOG_PROPS
 */
const displayTextDialog = (title, content = '', rest = {}) => ({
	type: SET_DIALOG_PROPS,
	payload: {
		...DEFAULT_VALUES,
		isOpen: true,
		title,
		content,
		...rest,
	},
});

/**
 * Display a component modal
 *
 * @requires {Object} payload { title, content }
 * @param {Object} payload { title, content, dynamicWidth, actionButtons, infoComponent }
 * @return {object} An action object with a type of SET_DIALOG_PROPS
 */
const displayComponentDialog = (title, content, rest = {}) => ({
	type: SET_DIALOG_PROPS,
	payload: {
		...DEFAULT_VALUES,
		isOpen: true,
		type: 'component',
		title,
		content,
		...rest,
	},
});

/**
 * Display a component modal
 *
 * @requires {Object} payload { title, content }
 * @param {Object} payload { title, content, dynamicWidth, actionButtons, infoComponent }
 * @return {object} An action object with a type of SET_DIALOG_PROPS
 */
const displayHtmlDialog = (title, content, rest = {}) => ({
	type: SET_DIALOG_PROPS,
	payload: {
		...DEFAULT_VALUES,
		isOpen: true,
		type: 'html',
		title,
		content,
		...rest,
	},
});

/**
 * Display a component modal
 *
 * @requires {Object} payload { title, content }
 * @param {Object} payload { title, content, dynamicWidth, actionButtons, infoComponent }
 * @return {object} An action object with a type of SET_DIALOG_PROPS
 */
const displayFormDialog = (title, formProps, rest = {}) => ({
	type: SET_DIALOG_PROPS,
	payload: {
		...DEFAULT_VALUES,
		isOpen: true,
		type: 'form',
		title,
		formProps,
		...rest,
	},
});

/**
 * Display a component modal
 *
 * @requires {Object} payload { title, content }
 * @param {Object} payload { title, content, dynamicWidth, actionButtons, infoComponent }
 * @return {object} An action object with a type of SET_DIALOG_PROPS
 */
const displayConfirmDialog = (
	title,
	callback,
	onError = null,
	confirmText = 'Yes',
	cancelText = 'No',
	rest = {}
) => dispatch =>
	dispatch({
		type: SET_DIALOG_PROPS,
		payload: {
			...DEFAULT_VALUES,
			isOpen: true,
			title,
			actionButtons: [
				{
					text: cancelText,
					callback: () => dispatch(hideDialog()),
				},
				{
					text: confirmText,
					isConfirm: true,
					callback: async () => {
						dispatch(setConfirmPending(true));

						try {
							if (isPromise(callback)) await callback();
							else callback();
							dispatch(hideDialog());
							dispatch(displaySuccessMessage('Success!'));
						} catch (err) {
							if (onError) {
								onError(err);
								return;
							}
							dispatch(displayErrorMessage(err.message));
						} finally {
							dispatch(setConfirmPending(false));
						}
					},
				},
			],
			...rest,
		},
	});

/**
 * Toggles to go into/exit full screen
 *
 * @return {object} An action object with a type of TOGGLE_FULL_SCREEN
 */
const toggleFullScreen = () => ({
	type: TOGGLE_FULL_SCREEN,
});

export {
	setDialogProps,
	displayTextDialog,
	displayComponentDialog,
	displayHtmlDialog,
	displayFormDialog,
	displayConfirmDialog,
	toggleFullScreen,
	setConfirmPending,
	hideDialog,
};
