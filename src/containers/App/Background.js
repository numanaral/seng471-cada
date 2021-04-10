import { Grid } from '@material-ui/core';
import { NAVIGATION_BAR_HEIGHT } from 'components/NavigationBar/NavigationBar';
import styled from 'styled-components';

const Background = styled(Grid)`
	overflow: auto;
	${({ theme }) => `
		height: calc(100% - ${NAVIGATION_BAR_HEIGHT}px);
		padding-bottom: ${theme.spacing(2)}px;
	`}
`;

export default Background;
