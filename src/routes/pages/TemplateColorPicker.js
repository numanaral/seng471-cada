import { Vehicle1Icon as ExteriorIcon, InteriorIcon, PaletteIcon } from 'icons';
import PageContainer from 'components/page-components/PageContainer';
import ColorPicker from 'components/ColorPicker';
import { Box } from '@material-ui/core';

import styled from 'styled-components';
import Spacer from 'components/Spacer';
import useWatchColors from 'store/firebase/hooks/colors/useWatchColors';
import useColors from 'store/firebase/hooks/colors/useColors';
import PageTitle from 'components/page-components/PageTitle';

const TemplateColorWrapper = styled.div`
	display: inline-block;
`;

const TemplateColor = ({ color, ind, onColorChange }) => {
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

	const body = [
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
		<div key={name} style={{ width: '50%', textAlign: 'center' }}>
			<PageTitle icon={icon} subtitle>
				{name} Colors
			</PageTitle>
			<Spacer direction="bottom" spacing="3" />
			{pending ||
				error ||
				list.map((color, ind) => (
					<TemplateColor
						key={name + color + ind}
						color={color}
						ind={ind}
						onColorChange={onColorChange(name.toLowerCase(), ind)}
					/>
				))}
		</div>
	));

	return (
		<PageContainer>
			<PageTitle icon={PaletteIcon}>Template Colors</PageTitle>
			<Spacer direction="bottom" spacing="15" />
			<Box display="flex" width="100%">
				{body}
			</Box>
		</PageContainer>
	);
};

export default TemplateColorPicker;
