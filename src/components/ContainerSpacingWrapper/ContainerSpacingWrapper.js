import React from 'react';
import styled from 'styled-components';

import FullSizeGrid from 'components/FullSizeGrid';
import { propTypes, defaultProps } from './types';

const Wrapper = styled(FullSizeGrid)`
	${({ theme, $topBottom, $rightLeft, $spacing }) => {
		const spacing = `${theme.spacing($spacing || 1)}px`;
		const topBottom = ($topBottom && spacing) || '0';
		const rightLeft = ($rightLeft && spacing) || '0';
		return `
			padding: ${topBottom} ${rightLeft};
		`;
	}}
`;

const ContainerSpacingWrapper = ({
	topBottom,
	rightLeft,
	spacing,
	...rest
}) => (
	<Wrapper
		$topBottom={topBottom}
		$rightLeft={rightLeft}
		$spacing={spacing}
		{...rest}
	/>
);

ContainerSpacingWrapper.propTypes = propTypes;
ContainerSpacingWrapper.defaultProps = defaultProps;

export default ContainerSpacingWrapper;
