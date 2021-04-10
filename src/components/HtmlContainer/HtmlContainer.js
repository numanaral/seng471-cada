import React from 'react';
import styled from 'styled-components';

import { propTypes, defaultProps } from './types';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	& > * {
		max-height: 100%;
		max-width: 100%;
		/* max-height: 70vh; */
		overflow: auto;
	}
`;

const HtmlContainer = ({ html, component, ...rest }) => (
	<Wrapper>
		{(component === 'div' && (
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: html }}
				{...rest}
			/>
		)) || (
			<pre
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: html }}
				{...rest}
			/>
		)}
	</Wrapper>
);

HtmlContainer.propTypes = propTypes;
HtmlContainer.defaultProps = defaultProps;

export default HtmlContainer;
