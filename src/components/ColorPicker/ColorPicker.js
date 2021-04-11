import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TwitterPicker } from 'react-color';

import Popover from 'components/Popover';
import { CheckboxIcon } from 'icons';
import TooltipButton from 'components/TooltipButton';
import { PRIMARY_COLOR, SECONDARY_COLOR } from 'theme';
import { propTypes, defaultProps } from './types';

const ColoredIcon = styled(CheckboxIcon)`
	margin-left: -2px;
	${({ theme, $bg, $size }) =>
		($bg &&
			`
				// & .MuiSvgIcon-root {

					border-radius: ${theme.shape.borderRadius}px;
					width: ${$size}px;
					height: ${$size}px;
					fill: ${$bg} !important;
					color: ${$bg} !important;
					background-color: ${$bg} !important;
				// }
		`) ||
		''};
`;
const ColorPicker = forwardRef(
	({ color, onColorChange, size = 20, ...rest }, ref) => {
		const onClick = cb => {
			cb();
		};
		return (
			<Popover
				buttonComponent={
					<TooltipButton
						tooltip="Pick a color"
						onClick={onClick}
						icon={<ColoredIcon $size={size} $bg={color} />}
					/>
				}
				component={
					<TwitterPicker
						colors={[
							PRIMARY_COLOR,
							SECONDARY_COLOR,
							'#f44336',
							'#ff9800',
							'#2196f3',
							'#4caf50',

							// '#FCB900',
							// '#7BDCB5',
							// '#00D084',
							// '#8ED1FC',
							// '#0693E3',
							// '#ABB8C3',
							// '#EB144C',
							// '#F78DA7',
							// '#9900EF',
						]}
						color={color}
						onChangeComplete={colors => onColorChange(colors.hex)}
						{...rest}
						ref={ref}
					/>
				}
				passCallback
			/>
		);
	}
);

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;

export default ColorPicker;
