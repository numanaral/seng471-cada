import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const Text = styled(TextField)`
	${({ theme }) => `
		margin-bottom: ${theme.spacing(2)}px;
	`}
`;

export default Text;
