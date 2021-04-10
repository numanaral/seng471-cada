import { Link } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { NAV_LIST } from 'routes/constants';

import styled from 'styled-components';

const StyledLink = styled(Link)`
	margin-left: 20px;
	&.active {
		font-weight: bold;
		${({ theme }) => `
			border-bottom: 2px solid ${theme.palette.primary.main};
		`}
	}
`;

// TODO: When user roles are created, ensure the links
// don't show up if the user doesn't have the role
const Links = () =>
	// Ignore home as we got the logo link
	NAV_LIST.filter(link => link.label !== 'Home').map(link => (
		<StyledLink
			component={NavLink}
			variant="h6"
			underline="none"
			color="textPrimary"
			activeClassName="active"
			// activeStyle={{
			// 	fontWeight: 'bold',
			// 	color: 'red',
			// }}
			key={link.to}
			to={link.to}
		>
			{link.text}
		</StyledLink>
	));

export default Links;
