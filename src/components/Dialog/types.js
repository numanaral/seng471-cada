import {
	element,
	bool,
	string,
	oneOfType,
	arrayOf,
	shape,
	func,
	elementType,
	oneOf,
	node,
} from 'prop-types';

import PrettyPre from 'components/PrettyPre';
import { color } from 'components/types';

const propTypes = {
	/**
	 * Title of the modal
	 */
	title: string.isRequired,
	/**
	 * Content of the modal.
	 * - Can be string or a node
	 */
	content: oneOfType([string, node]),
	/**
	 * Body wrapper component to wrap the children in.
	 * - Defaults to PrettyPre
	 */
	bodyComponent: oneOfType([string, elementType]),
	/**
	 * Popover component that will appear in the header that can give details for the modal.
	 */
	infoComponent: element,
	/**
	 * Action buttons that will appear on the modal footer.
	 * - ```js
	 * [
	 * 	{
	 *		text: 'Submit',
	 *		callback: onSubmit,
	 *	}
	 * ]
	 */
	actionButtons: arrayOf(
		shape({
			text: string.isRequired,
			callback: func.isRequired,
		})
	),
	/**
	 * Callback for when  when cancel button is clicked or backdrop action ocurred.
	 */
	onCancel: func.isRequired,
	/**
	 * - Background color variant
	 * - 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
	 */
	bg: color,
	/**
	 * Type of the modal.
	 * - 'html' | 'component' | 'text'
	 */
	type: oneOf(['html', 'component', 'text']),
	/**
	 * Container for the scroll.
	 * - 'body' | 'paper'
	 * - Defaults to paper
	 */
	scroll: oneOf(['body', 'paper']),
	/**
	 * Is the modal open.
	 */
	isOpen: bool.isRequired,
	/**
	 * Should we enable full screen button?
	 */
	hasFullScreenButton: bool,
	/**
	 * Is full screen toggled via the full screen button - if enabled.
	 */
	isFullScreenToggled: bool,
	/**
	 * Callback for when  when full screen button is clicked.
	 */
	onFullScreenToggle: func,
	/**
	 * Enabling this will automatically make the modal full screen on smAndDown.
	 * - Defaults to true
	 */
	hasDynamicWidth: bool,
	/**
	 * The modal is in full screen mode if:
	 * - isFullScreenToggled is true.
	 * - hasDynamicWidth && smAndDown are true.
	 * - manually set via this prop, "fullScreen".
	 */
	fullScreen: bool,
	/**
	 * If pending, the buttons are disabled.
	 */
	pending: bool,
	/**
	 * Should we set a max height of 75vh?
	 */
	maxHeight: bool,
	/**
	 * Allow backdrop click?
	 */
	enableBackdropClick: bool,
	/**
	 * Allow other items to get focus over the modal?
	 */
	disableEnforceFocus: bool,
};

const defaultProps = {
	title: 'Preview',
	content: '',
	bodyComponent: PrettyPre,
	infoComponent: null,
	actionButtons: [],
	bg: 'default',
	type: 'text',
	scroll: 'paper',
	isOpen: false,
	hasFullScreenButton: false,
	isFullScreenToggled: false,
	onFullScreenToggle: false,
	hasDynamicWidth: true,
	fullScreen: false,
	pending: false,
	maxHeight: false,
	enableBackdropClick: false,
	disableEnforceFocus: false,
};

export { propTypes, defaultProps };
