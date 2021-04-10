import produce from 'immer';

import { updateImmerDraft } from 'utils';
import { updateLocalStorageItem } from 'utils/localStorage';

import {
	DARK_THEME,
	LIGHT_THEME,
	DEFAULT_VALUES,
	SET_USER_PREFERENCES,
	TOGGLE_THEME,
	LOCAL_STORAGE_THEME_KEY,
} from './constants';

const userPreferenceReducer = (state = DEFAULT_VALUES, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_USER_PREFERENCES:
				updateImmerDraft(draft, action.payload);
				break;
			case TOGGLE_THEME:
				draft.theme =
					draft.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

				updateLocalStorageItem(LOCAL_STORAGE_THEME_KEY, draft.theme);
				break;
			default:
				// No default
				break;
		}
	});

export default userPreferenceReducer;
