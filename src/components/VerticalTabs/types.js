import { string, shape, arrayOf, node, any } from 'prop-types';

import { elementOrType, icon } from 'components/types';

const verticalTabsPropTypes = {
	list: arrayOf(
		shape({
			label: string.isRequired,
			panel: elementOrType.isRequired,
			icon,
		})
	),
};

const verticalTabsDefaultProps = {
	list: [],
};

const tabPanelPropTypes = {
	children: node,
	index: any.isRequired,
	value: any.isRequired,
};

const tabPanelDefaultProps = {
	children: null,
};

export {
	verticalTabsPropTypes,
	verticalTabsDefaultProps,
	tabPanelPropTypes,
	tabPanelDefaultProps,
};
