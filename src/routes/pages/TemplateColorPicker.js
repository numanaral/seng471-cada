import { Vehicle1Icon as ExteriorIcon, InteriorIcon, PaletteIcon } from 'icons';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import ColorPicker from 'components/ColorPicker';
import { Box, Typography } from '@material-ui/core';

import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { getElementFromElementOrType } from 'utils/react';
import useWatchColors from 'store/firebase/hooks/colors/useWatchColors';
import useColors from 'store/firebase/hooks/colors/useColors';

const TemplateColorWrapper = styled.div`
	display: inline-block;
`;

const TemplateColor = ({ color, ind, onColorChange = console.log }) => {
	return (
		<TemplateColorWrapper key={color}>
			#C-{ind + 1}
			<ColorPicker
				color={color}
				onColorChange={onColorChange}
				size={40}
			/>
		</TemplateColorWrapper>
	);
};

const TemplateTitle = styled(Typography)`
	align-items: center;
	display: inline-flex;
`;

const TemplateColorPicker = () => {
	const { exterior, interior, pending, error } = useWatchColors();
	const { updateColors } = useColors();

	const onColorChange = (type, ind) => async color => {
		const newColors = {
			exterior: [...exterior],
			interior: [...interior],
		};
		newColors[type][ind] = color;
		await updateColors(newColors);
	};

	const body =
		pending ||
		error ||
		[
			{
				name: 'Exterior',
				list: exterior,
				icon: ExteriorIcon,
			},
			{
				name: 'Interior',
				list: interior,
				icon: InteriorIcon,
			},
		].map(({ name, list, icon }) => (
			<div style={{ width: '50%', textAlign: 'center' }}>
				<TemplateTitle variant="h5">
					{getElementFromElementOrType(icon)} &nbsp;
					{name}
					Colors
				</TemplateTitle>
				<Spacer direction="bottom" spacing="3" />
				{list.map((color, ind) => (
					<TemplateColor
						key={color}
						color={color}
						ind={ind}
						onColorChange={onColorChange(name.toLowerCase(), ind)}
					/>
				))}
			</div>
		));

	return (
		<ContainerWithCenteredItems vertical horizontal>
			<PaperContainerWithSpacing
				padding="50px !important"
				textAlign="center"
			>
				<TemplateTitle component="h1" variant="h2">
					<PaletteIcon style={{ fontSize: 70 }} /> &nbsp;Template
					Colors
				</TemplateTitle>
				<Spacer direction="bottom" spacing="15" />
				<Box display="flex" justifyContent="center">
					{body}
				</Box>
			</PaperContainerWithSpacing>
		</ContainerWithCenteredItems>
	);
};

export default TemplateColorPicker;
