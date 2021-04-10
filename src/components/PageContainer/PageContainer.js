import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const PageContainer = styled(Paper)`
	${({ theme }) => `
		width: 100%;
		height: 100%;
		padding: ${theme.spacing(2)}px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-y: auto;
		overflow-x: hidden;
		${theme.breakpoints.up('md')} {
			justify-content: center;
			padding: theme.spacing(10);
		}
	`}
`;

export default PageContainer;
