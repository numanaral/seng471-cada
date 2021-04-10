import { getOrSetLocalStorageItem } from 'utils/localStorage';

// Defaults
const KEY = 'UserPreference';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const LOCAL_STORAGE_THEME_KEY = 'theme';
const DEFAULT_VALUES = {
	theme: getOrSetLocalStorageItem(LOCAL_STORAGE_THEME_KEY, DARK_THEME),
};

// Types
const SET_USER_PREFERENCES = `${KEY}/SET_USER_PREFERENCES`;
const TOGGLE_THEME = `${KEY}/TOGGLE_THEME`;

export {
	KEY,
	DARK_THEME,
	LIGHT_THEME,
	LOCAL_STORAGE_THEME_KEY,
	DEFAULT_VALUES,
	SET_USER_PREFERENCES,
	TOGGLE_THEME,
};
