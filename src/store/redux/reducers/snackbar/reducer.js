import produce from 'immer';

import { updateImmerDraft } from 'utils';
import { SET_SNACKBAR_PROPS, DEFAULT_VALUES } from './constants';

const modalProviderReducer = (state = DEFAULT_VALUES, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_SNACKBAR_PROPS:
				updateImmerDraft(draft, action.payload);
				break;
			default:
				// No default
				break;
		}
	});

export default modalProviderReducer;
