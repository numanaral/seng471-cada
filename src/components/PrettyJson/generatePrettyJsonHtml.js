/**
 * Prettify json
 *
 * @src - https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
 * @param {String|JSON} j - JSON string or object
 * @returns {String} - Span element as a string
 */
const generatePrettyJsonHtml = j => {
	let json = j;

	// Nice stringify
	if (typeof j === 'string') {
		json = JSON.stringify(JSON.parse(j), 0, '\t');
	} else {
		json = JSON.stringify(j, 0, '\t');
	}

	json = json
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
	return json.replace(
		// eslint-disable-next-line no-useless-escape
		/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|,|{|}|\[|\]*)/g,
		match => {
			let cls = 'number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
				} else {
					cls = 'string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
			} else if (/null/.test(match)) {
				cls = 'null';
			} else if (/,|\{|\}|\[|\]/.test(match)) {
				cls = 'object';
			}
			return `<span class="${cls}">${match}</span>`;
		}
	);
};

export default generatePrettyJsonHtml;
