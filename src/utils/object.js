/**
 * Returns true if at least one source value is contained in the
 * from array
 *
 * @example
 * // Does user have any roles that match access roles?
 * const userRoles = ['A'];
 * const canAccessRoles = ['A', 'B'];
 * hasAnyFrom(canAccessRoles, userRoles) === true // true
 * @param {Array} source - List to match at least 1 element with
 * @param {Array} list - List to check if the element exists
 */
const hasAnyFrom = (source, from) =>
	source?.length === 0 || source.some(e => from.indexOf(e) >= 0);

const addToArray = (arr, item, where = 'first') =>
	where === 'first' ? [item, ...arr] : [...arr, item];

const editItemInArray = (arr, ind, newItem) => [
	...arr.slice(0, ind),
	newItem,
	...arr.slice(ind + 1),
];

const removeItemInArray = (arr, ind) => [
	...arr.slice(0, ind),
	...arr.slice(ind + 1),
];

export { hasAnyFrom, addToArray, editItemInArray, removeItemInArray };
