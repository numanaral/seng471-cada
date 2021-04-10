import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { propTypes, defaultProps } from './types';

const StyledLink = styled(Typography)`
	${({ theme, $arrow, $color }) => `
		position: relative;
		display: inline-block;
		color: ${$color || theme.palette.primary.main};
		text-decoration: none;
		${
			$arrow
				? `
					&::after {
						position: absolute;
						margin-left: 5px;
						transition: margin 0.25s ease-out;
						content: '→';
					}
					&:hover::after {
						margin-left: 10px;
					}
				`
				: ''
		}
				

		&::before {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1.5px;
			background-color: ${$color || theme.palette.primary.main};
			transform: scaleX(0);
			transform-origin: bottom right;
			transition: transform 0.25s ease-out;
			content: '';
		}
		&:hover::before {
			height: 1.5px;
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	`}
`;

const PrettyLink = ({ external, to, arrow, ...props }) => (
	<StyledLink
		$arrow={arrow}
		{...((external && { component: 'a', href: to, target: '_blank' }) || {
			to,
			component: Link,
		})}
		{...props}
	/>
);

PrettyLink.propTypes = propTypes;
PrettyLink.defaultProps = defaultProps;

export default PrettyLink;
