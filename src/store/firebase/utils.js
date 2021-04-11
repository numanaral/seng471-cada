import firebase from 'firebase/app';

const sortByFirebaseDate = (sort = 'desc') => (a, b) =>
	((sort === 'desc' && -1) || 1) *
	(a.updatedOn.seconds - b.updatedOn.seconds);

// Can be resolved with const date = updatedOn.toDate();
// const getDateFromFirebaseObject = obj => new Date(obj.seconds * 1000);

/**
 * Stringifies objects before sending them to firebase
 * @param {Object} props Properties to be passed into the firebase request
 */
const toFirestore = props =>
	Object.keys(props).reduce((acc, key) => {
		const value = props[key];
		// eslint-disable-next-line no-param-reassign
		acc[key] =
			// eslint-disable-next-line no-nested-ternary
			value === null
				? null
				: typeof value === 'object' && !(value instanceof Date)
				? JSON.stringify(value)
				: value;
		return acc;
	}, {});

/**
 * Parses stringified objects before passing them to the client
 * @param {Object} props Properties returned from the firebase request
 * @param {Array<String>} keys List of keys that need their value string parsed as JSON object
 */
const fromFirestore = (props, keys = []) =>
	Object.keys(props).reduce((acc, key) => {
		const value = props[key];
		// eslint-disable-next-line no-param-reassign
		acc[key] =
			(keys.includes(key) && JSON.parse(value)) ||
			(value instanceof firebase.default.firestore.Timestamp &&
				value.toDate()) ||
			value;
		return acc;
	}, {});

const mapFromFireStore = (keys = []) => props => fromFirestore(props, keys);

// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
const fallbackCopyTextToClipboard = (
	text,
	postSuccess = null,
	postFailure = null
) => {
	const textArea = document.createElement('textarea');
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.top = '0';
	textArea.style.left = '0';
	textArea.style.position = 'fixed';

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand('copy');
		if (successful) {
			postSuccess?.();
			return;
		}
		postFailure?.();
	} catch (err) {
		postFailure?.();
	}

	document.body.removeChild(textArea);
};

// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
const copyToClipboard = (text, postSuccess = null, postFailure = null) => {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text, postSuccess, postFailure);
		return;
	}
	navigator.clipboard.writeText(text).then(
		() => {
			postSuccess?.();
		},
		() => {
			postFailure?.();
		}
	);
};

export {
	sortByFirebaseDate,
	// getDateFromFirebaseObject,
	toFirestore,
	fromFirestore,
	mapFromFireStore,
	copyToClipboard,
};
