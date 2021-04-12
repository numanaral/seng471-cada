import { Grid } from '@material-ui/core';
import { NAVIGATION_BAR_HEIGHT } from 'components/NavigationBar/NavigationBar';
import styled from 'styled-components';

const Background = styled(Grid)`
	overflow: auto;
	height: calc(100% - ${NAVIGATION_BAR_HEIGHT}px);
`;

export default Background;
