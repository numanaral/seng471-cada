const firstCapital = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case#comment-70645327
const toCamelCase = str =>
	str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) =>
			idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()
		)
		.replace(/\s+/g, '');

// https://stackoverflow.com/a/26188910/13161405
const pascalToSentence = str =>
	str
		// Look for long acronyms and filter out the last letter
		.replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
		// Look for lower-case letters followed by upper-case letters
		.replace(/([a-z\d])([A-Z])/g, '$1 $2')
		// Look for lower-case letters followed by numbers
		.replace(/([a-zA-Z])(\d)/g, '$1 $2')
		.replace(/^./, s => s.toUpperCase())
		// Remove any white space left around the word
		.trim();

const getImmerState = (draft, key) => JSON.parse(JSON.stringify(draft))[key];

const updateImmerDraft = (draft, payload) => {
	Object.keys(payload).forEach(key => {
		draft[key] = payload[key];
	});
};

const getNiceDateVanilla = d => {
	if (!d) return d;

	return new Date(d).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});
};

const getNiceDateTimeVanilla = d => {
	if (!d) return d;

	return new Date(d).toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	});
};

const smoothScroll = element =>
	element?.scrollIntoView({
		block: 'center',
		behavior: 'smooth',
		// inline: 'end',
	});

/**
 * Grab the appropriate error message from the Error
 *
 * @param {Error} err - Caught error object
 * @param {String} fallbackError - Default error message
 * @returns - Error message
 */
const getErrorMessageFromFetch = (
	err,
	fallbackError = '',
	returnHtmlBody = false
) => {
	const { response } = err;
	const _error = err.message || 'There was an error with your request';
	if (!response) return _error;
	const responseData = response.data?.Data || response.data;
	if (
		typeof responseData === 'string' &&
		responseData.indexOf('<!DOCTYPE') === 0 &&
		returnHtmlBody
	) {
		return responseData;
	}
	return responseData.Message || fallbackError || _error;
};

/** @see https://github.com/then/is-promise/blob/master/index.js */
const isPromise = obj =>
	!!obj &&
	(typeof obj === 'object' || typeof obj === 'function') &&
	typeof obj.then === 'function';

const doesNotExist = value => value === null || value === undefined;

export {
	firstCapital,
	toCamelCase,
	pascalToSentence,
	getImmerState,
	updateImmerDraft,
	getNiceDateVanilla,
	getNiceDateTimeVanilla,
	smoothScroll,
	getErrorMessageFromFetch,
	isPromise,
	doesNotExist,
};
