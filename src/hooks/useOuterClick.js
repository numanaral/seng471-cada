import { useRef, useEffect } from 'react';

/** @see https://stackoverflow.com/a/54292872/13161405 */
const useOuterClick = (cb, exc) => {
	const callbackRef = useRef(); // initialize mutable callback ref
	const innerRef = useRef(); // returned to client, who sets the "border" element

	// update callback on each render, so second useEffect has most recent callback
	useEffect(() => {
		callbackRef.current = cb;
	});
	useEffect(() => {
		const handleClick = e => {
			if (
				innerRef.current &&
				callbackRef.current &&
				!innerRef.current.contains(e.target) &&
				innerRef.current.classList.contains('isFocused')
			) {
				if (exc) {
					// eslint-disable-next-line no-restricted-syntax
					for (const elm of document.querySelectorAll(exc)) {
						if (elm.contains(e.target)) {
							return;
						}
					}
				}
				callbackRef.current(e);
			}
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return innerRef; // convenience for client (doesn't need to init ref himself)
};

export default useOuterClick;
