const useMenu = ({
	label,
	options,
	onClick,
	selected = '',
	icon = null,
	displaySelected = false,
	small = false,
	iconMenu = false,
	menuProps = {},
}) => {
	// TODO: Document this and add other necessary options
	const props = {
		label,
		options,
		onClick,
		selected,
		icon,
		displaySelected,
		small,
		iconMenu,
		menuProps,
	};

	return props;
};

export default useMenu;
