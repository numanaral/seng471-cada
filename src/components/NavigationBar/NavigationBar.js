import React from 'react';
import {
	AppBar,
	Link,
	Toolbar,
	useTheme,
	useMediaQuery,
} from '@material-ui/core';
import { Link as ReactRouterLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Menu from 'components/Menu';
import useMenu from 'components/Menu/useMenu';
import useLogin from 'store/firebase/hooks/useLogin';
import useAuth from 'store/firebase/hooks/useAuth';
import { BASE_PATH } from 'routes/constants';
import { AccountIcon } from 'icons';
import Links from './Links';

const StyledAppBar = styled(AppBar)`
	${({ theme }) => `
		background-color: ${
			theme.palette.secondary[
				(theme.palette.type === 'dark' && 'dark') || 'main'
			]
		};
	`}
`;

const StyledLink = styled(Link)`
	color: #fff;
	padding: 5px;
	${({ theme }) => `
		border: 1px solid ${theme.palette.primary.main};
		border-radius: ${theme.shape.borderRadius}px;
	`}
`;

const NAVIGATION_BAR_HEIGHT = 60;

const TopNavigationBar = () => {
	const { logOut } = useLogin();
	const { isLoggedIn, user } = useAuth();
	const { push } = useHistory();
	const theme = useTheme();
	const smAndDown = useMediaQuery(t => t.breakpoints.down('xs'));

	const onLogOut = () => {
		logOut();
		// TODO: Have a global PATH mapper/object....
		// Don't know why I didn't do this in the beginning
		push(`${BASE_PATH}/`);
	};

	let accountName;

	if (user.displayName || user.email) {
		accountName = user.email;
		if (user.displayName) {
			const nameSplit = user.displayName.split(' ');
			accountName = `${nameSplit[0][0]} ${
				nameSplit[nameSplit.length - 1][0]
			}`;
		}
	}

	const menuProps = useMenu({
		label: smAndDown ? '' : (!isLoggedIn && 'Account') || accountName,
		small: true,
		menuProps: {
			PaperProps: {
				style: {
					backgroundColor:
						theme.palette.secondary[
							(theme.palette.type === 'dark' && 'dark') || 'main'
						],
				},
			},
		},
		icon: (
			<AccountIcon
				{...(isLoggedIn && {
					style: { fill: theme.palette.primary.main },
				})}
			/>
		),
		options: (isLoggedIn && [
			{ label: 'Profile', value: '/profile' },
			{ label: 'Log Out', value: 'logout' },
		]) || [
			{ label: 'Log In', value: '/login' },
			{ label: 'Sign Up', value: '/signup' },
		],
		onClick: v => {
			if (v === 'logout') {
				onLogOut();
				return;
			}
			push(BASE_PATH + v);
		},
		...(!isLoggedIn && { iconMenu: true }),
	});

	return (
		<StyledAppBar position="sticky" color="secondary">
			<Toolbar>
				<StyledLink component={ReactRouterLink} variant="h6" to="/">
					CADA
				</StyledLink>
				{isLoggedIn && (
					<>
						{/* <div style={{ flexGrow: 1 }} /> */}
						<Links />
					</>
				)}
				<div style={{ flexGrow: 1 }} />
				<Menu {...menuProps} />
			</Toolbar>
		</StyledAppBar>
	);
};

export { NAVIGATION_BAR_HEIGHT };
export default TopNavigationBar;
