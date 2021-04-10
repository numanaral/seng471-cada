import React from 'react';
import styled from 'styled-components';
import { Divider, Grid, Typography } from '@material-ui/core';
import * as yup from 'yup';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import LoadingIndicator from 'components/LoadingIndicator';
import { SadIcon } from 'icons';
import ResponsiveCenteredContainer from 'components/ResponsiveCenteredContainer';
import TooltipButton from 'components/TooltipButton';
import useLogin from 'store/firebase/hooks/useLogin';
import Spacer from 'components/Spacer';
import { BASE_PATH } from 'routes/constants';
import PrettyLink from 'components/PrettyLink';
import Form, { FORM_COMPONENT_TYPES } from 'components/Form';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const StyledSadIcon = styled(SadIcon)`
	font-size: 3rem;
	margin-left: 10px;
`;

const loginSchema = yup.object().shape({
	email: yup.string().email().label('Email').required(),
	password: yup.string().label('Password').required(),
});

const StyledDivider = styled(Divider)`
	width: 40%;
	${({ theme }) => `
		margin: ${theme.spacing(5, 0)};
	`}
`;
const StyledSpan = styled(Typography)`
	text-align: center;
	width: 20%;
`;

const StyledPaperContainerWithSpacing = styled(PaperContainerWithSpacing)`
	${({ theme }) => `
		background-color: ${theme.palette.background.level2};
	`}
`;

const Login = ({ location, error, authorizing }) => {
	const { googleLogin, githubLogin, emailLogin } = useLogin();
	const onSubmit = data => emailLogin(data);
	const returnUrl = location?.search.replace('?returnUrl=', '');

	return (
		<ContainerWithCenteredItems horizontal vertical>
			{(authorizing && (
				<Grid container alignItems="center" justify="center">
					<Typography variant="h3" component="h1">
						{(error && 'AUTHENTICATION FAILED') || 'AUTHENTICATING'}
					</Typography>
					{(error && <StyledSadIcon />) || <LoadingIndicator />}
				</Grid>
			)) || (
				<ResponsiveCenteredContainer>
					<StyledPaperContainerWithSpacing padding="80px">
						<Spacer direction="top" spacing="4" />
						<ContainerWithCenteredItems>
							<Typography component="h1" variant="h5">
								Login
							</Typography>
							<Spacer direction="top" spacing="2" />
						</ContainerWithCenteredItems>
						{/* LOGIN */}
						<Form
							items={[
								{
									type: FORM_COMPONENT_TYPES.TEXT,
									label: 'Email',
									name: 'email',
									required: true,
								},
								{
									type: FORM_COMPONENT_TYPES.PASSWORD,
									label: 'Password',
									name: 'password',
									required: true,
								},
							]}
							schema={loginSchema}
							onSubmit={onSubmit}
							submitText="Login"
						/>
						{/* FORM */}
						<Spacer direction="bottom" spacing="4" />
						<ContainerWithCenteredItems>
							<Typography component="span">
								Don&apos;t have an account yet? You can sign up
								{` `}
								<Typography
									component={PrettyLink}
									to={`${BASE_PATH}/signup?returnUrl=${returnUrl}`}
								>
									{' '}
									here{' '}
								</Typography>
								.
							</Typography>
						</ContainerWithCenteredItems>
						<Spacer direction="bottom" spacing="4" />
					</StyledPaperContainerWithSpacing>
				</ResponsiveCenteredContainer>
			)}
			{error && (
				<Grid>
					<br />
					<Divider />
					<br />
					<Typography>{error}</Typography>
					<br />
					<Divider />
				</Grid>
			)}
		</ContainerWithCenteredItems>
	);
};

Login.propTypes = routerBasePropTypes;
Login.defaultProps = routerBaseDefaultProps;

export default Login;
