import React from 'react';
import { LinearProgress, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

import { propTypes, defaultProps } from './types';

const StyledDiv = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	vertical-align: middle;
	${({ $fullSize, $fullWidth }) => `
		${
			($fullSize &&
				`
					width: 100%;
					height: 100%;
					position: fixed;
					left: 0;
					top: 0;
					background: #000 !important;
					opacity: 0.8;
					z-index: 99999;
		`) ||
			($fullWidth &&
				`
					width: 100%;
		`) ||
			''
		}
	`}
`;

const LoadingIndicator = ({ type, size, fullSize, fullWidth, ...rest }) => {
	const iconSize =
		(fullSize && 150) ||
		(size === 'small' && 20) ||
		(size === 'large' && 40) ||
		(size === 'xlarge' && 100) ||
		40;

	return (
		<StyledDiv
			$fullSize={(fullSize && 1) || 0}
			$fullWidth={(fullWidth && 1) || 0}
		>
			{type === 'linear' ? (
				<LinearProgress size={iconSize} {...rest} />
			) : (
				<CircularProgress size={iconSize} {...rest} />
			)}
		</StyledDiv>
	);
};

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
