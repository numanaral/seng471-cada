import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

import { tabPanelPropTypes, tabPanelDefaultProps } from './types';

const Wrapper = styled.div`
	width: 100%;
	overflow: auto;
`;

const TabPanel = ({ children, value, index, ...other }) => (
	<Wrapper
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
	>
		{value === index && <Box p={3}>{children}</Box>}
	</Wrapper>
);

TabPanel.propTypes = tabPanelPropTypes;
TabPanel.defaultProps = tabPanelDefaultProps;

export default TabPanel;
