import produce from 'immer';

import { updateImmerDraft } from 'utils';
import {
	DEFAULT_VALUES,
	SET_DIALOG_PROPS,
	HIDE_DIALOG,
	TOGGLE_FULL_SCREEN,
	SET_CONFIRM_PENDING,
} from './constants';

const modalProviderReducer = (state = DEFAULT_VALUES, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_DIALOG_PROPS:
				updateImmerDraft(draft, action.payload);
				break;
			case HIDE_DIALOG:
				draft.isOpen = false;
				break;
			case TOGGLE_FULL_SCREEN:
				draft.fullScreenToggled = !draft.fullScreenToggled;
				break;
			case SET_CONFIRM_PENDING:
				draft.isConfirmPending = action.confirmPendingState;
				break;
			default:
				// No default
				break;
		}
	});

export default modalProviderReducer;
