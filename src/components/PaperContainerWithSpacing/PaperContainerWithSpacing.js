import React, { useState } from 'react';
import { Box, Paper } from '@material-ui/core';
import styled from 'styled-components';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { propTypes, defaultProps } from './types';

const PaperWrapper = styled(Paper)`
	width: 100%;
	text-align: left;
	${({ theme, $bg }) => `
		// margin-bottom: ${theme.spacing(2)}px;
		background-color: ${
			($bg &&
				(theme.palette[$bg]?.main ||
					theme.palette.background[$bg] ||
					$bg)) ||
			theme.palette.background.paper
		};
	`}
`;

const NoBgWrapper = styled.div`
	${({ theme }) => `
		& * {
			border-radius: ${theme.shape.borderRadius}px;
		}
	`}
`;

const PaperContainerWithSpacing = ({
	containerProps,
	paperProps,
	noBg,
	...boxProps
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const onEnter = () => setIsHovering(true);
	const onLeave = () => setIsHovering(false);

	const child = <Box py={2} px={4} textAlign="left" {...boxProps} />;

	return (
		<ContainerWithCenteredItems {...containerProps}>
			{(noBg && <NoBgWrapper>{child}</NoBgWrapper>) || (
				<PaperWrapper
					elevation={(isHovering && 3) || 1}
					onMouseEnter={onEnter}
					onMouseLeave={onLeave}
					{...paperProps}
				>
					{child}
				</PaperWrapper>
			)}
		</ContainerWithCenteredItems>
	);
};

PaperContainerWithSpacing.propTypes = propTypes;
PaperContainerWithSpacing.defaultProps = defaultProps;

export default PaperContainerWithSpacing;
