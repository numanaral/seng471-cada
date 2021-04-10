import PrettyPre from 'components/PrettyPre';

// Defaults
const KEY = 'DialogProvider';
// Have all of these to trigger a reset effect
// when the next action is dispatched;
const DEFAULT_VALUES = {
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
	onFullScreenToggle: null,
	hasDynamicWidth: true,
	fullScreen: false,
	pending: false,
	maxHeight: false,
	enableBackdropClick: false,
	disableEnforceFocus: false,
};

// Types
const SET_DIALOG_PROPS = `${KEY}/SET_DIALOG_PROPS`;
const HIDE_DIALOG = `${KEY}/HIDE_DIALOG`;
const TOGGLE_FULL_SCREEN = `${KEY}/TOGGLE_FULL_SCREEN`;

const SET_VISIBILITY = `${KEY}/SET_VISIBILITY`;
const SET_TITLE = `${KEY}/SET_TITLE`;
const SET_CONTENT = `${KEY}/SET_CONTENT`;
const SET_TYPE = `${KEY}/SET_TYPE`;
const SET_DYNAMIC_WIDTH = `${KEY}/SET_DYNAMIC_WIDTH`;
const SET_ACTION_BUTTONS = `${KEY}/SET_ACTION_BUTTONS`;
const SET_INFO_COMPONENT = `${KEY}/SET_INFO_COMPONENT`;
const SET_CONFIRM_PENDING = `${KEY}/SET_CONFIRM_PENDING`;

export {
	KEY,
	DEFAULT_VALUES,
	SET_DIALOG_PROPS,
	HIDE_DIALOG,
	TOGGLE_FULL_SCREEN,
	SET_VISIBILITY,
	SET_TITLE,
	SET_CONTENT,
	SET_TYPE,
	SET_DYNAMIC_WIDTH,
	SET_ACTION_BUTTONS,
	SET_INFO_COMPONENT,
	SET_CONFIRM_PENDING,
};
