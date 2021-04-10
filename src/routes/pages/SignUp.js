import React from 'react';
import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';
import * as yup from 'yup';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import ResponsiveCenteredContainer from 'components/ResponsiveCenteredContainer';
import TooltipButton from 'components/TooltipButton';
import useLogin from 'store/firebase/hooks/useLogin';
import Spacer from 'components/Spacer';
import { BASE_PATH } from 'routes/constants';
import PrettyLink from 'components/PrettyLink';
import Form, { FORM_COMPONENT_TYPES } from 'components/Form';
import { routerBasePropTypes, routerBaseDefaultProps } from './types';

const signUpSchema = yup.object().shape({
	email: yup.string().email().label('Email').required(),
	password: yup
		.string()
		.label('Password')
		.min(8)
		// .max(16)
		// .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
		.required(),
	confirmPassword: yup
		.string()
		.label('Confirm Password')
		.min(8)
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		// .max(16)
		// .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
		.required(),
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

const SignUp = ({ location }) => {
	const { googleLogin, githubLogin, emailSignUp } = useLogin();
	const onSubmit = data => emailSignUp(data);
	const returnUrl = location?.search.replace('?returnUrl=', '');

	return (
		<ContainerWithCenteredItems horizontal vertical>
			<ResponsiveCenteredContainer>
				<StyledPaperContainerWithSpacing padding="80px">
					<Spacer direction="top" spacing="4" />
					<ContainerWithCenteredItems>
						<Typography component="h1" variant="h5">
							Sign Up
						</Typography>
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
							{
								type: FORM_COMPONENT_TYPES.PASSWORD,
								label: 'Confirm Password',
								name: 'confirmPassword',
								required: true,
							},
						]}
						schema={signUpSchema}
						onSubmit={onSubmit}
						submitText="Sign Up"
					/>
					{/* FORM */}
					<Spacer direction="bottom" spacing="4" />
					<ContainerWithCenteredItems>
						<Typography component="span">
							Already have an account? Login{' '}
							<Typography
								component={PrettyLink}
								to={`${BASE_PATH}/login?returnUrl=${returnUrl}`}
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
		</ContainerWithCenteredItems>
	);
};

SignUp.propTypes = routerBasePropTypes;
SignUp.defaultProps = routerBaseDefaultProps;

export default SignUp;
