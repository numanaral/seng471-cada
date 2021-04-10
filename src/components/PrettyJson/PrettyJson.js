import React from 'react';
import styled from 'styled-components';

import HtmlContainer from 'components/HtmlContainer';
import generatePrettyJsonHtml from './generatePrettyJsonHtml';
import { propTypes, defaultProps } from './types';

const PrettyHtmlContainer = styled(HtmlContainer)`
	height: 100%;
	width: 100%;
	padding: 0.8rem;
	background-color: #272c34;
	white-space: pre;
	tab-size: 4;
	border-radius: 10px;
	overflow: auto;

	&::after {
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: #2196f3;
		content: attr(rel);
	}

	.string {
		color: #98c379;
	}
	.number {
		color: #d19a66;
	}
	.boolean {
		color: #56b6c2;
	}
	.null {
		color: #56b6c2;
	}
	.key {
		color: #e06c75;
	}
	.object {
		color: #fff;
	}
`;

const PrettyJson = ({ json, rel, ...rest }) => (
	<PrettyHtmlContainer
		rel={(rel === 'json' && 'JSON') || rel}
		component="pre"
		html={generatePrettyJsonHtml(json)}
		{...rest}
	/>
);

PrettyJson.propTypes = propTypes;
PrettyJson.defaultProps = defaultProps;

export default PrettyJson;
