import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styled from 'styled-components';
import { getElementFromElementOrType } from 'utils/react';
import { verticalTabsPropTypes, verticalTabsDefaultProps } from './types';

import TabPanel from './TabPanel';

const a11yProps = index => ({
	id: `vertical-tab-${index}`,
	'aria-controls': `vertical-tabpanel-${index}`,
});

const Wrapper = styled.div`
	flex-grow: 1;
	display: flex;
	height: 100%;
	${({ theme }) => `
		background-color: ${theme.palette.background.level1};
	`}
`;

const StyledTabs = styled(Tabs)`
	overflow: initial;
	${({ theme }) => `
		border-right: 1px solid ${theme.palette.divider};
	`}
`;

/**
 * @component
 *
 * @example
 * ```js
 * 	const list = [
 * 			{ label: 'Slideshows', panel: <Slideshows />, icon: LayerIcon },
 * 			{ label: 'Analytics', panel: <Analytics />, icon: AnalyticsIcon },
 * 			{ label: 'Resources', panel: <Resources />, icon: BookmarksIcon },
 * 	];
 * ```
 */
const VerticalTabs = ({ list, ...rest }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const tabs = [];
	const panels = [];

	list.forEach(({ label, panel, icon }, ind) => {
		tabs.push(
			<Tab
				key={label}
				icon={getElementFromElementOrType(icon)}
				label={label}
				{...a11yProps(ind)}
			/>
		);
		panels.push(
			<TabPanel key={label} value={value} index={ind}>
				{getElementFromElementOrType(panel)}
			</TabPanel>
		);
	});

	return (
		<Wrapper {...rest}>
			<StyledTabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs"
				indicatorColor="secondary"
				textColor="secondary"
			>
				{tabs}
			</StyledTabs>
			{panels}
		</Wrapper>
	);
};

VerticalTabs.propTypes = verticalTabsPropTypes;
VerticalTabs.defaultProps = verticalTabsDefaultProps;

export default VerticalTabs;
