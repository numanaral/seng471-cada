import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {
	AccountIcon,
	Vehicle1Icon,
	Vehicle2Icon,
	Vehicle3Icon,
	Vehicle4Icon,
	InteriorIcon,
	PaletteIcon,
} from 'icons';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Spacer from 'components/Spacer';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import VerticalTabs from 'components/VerticalTabs';
import { getElementFromElementOrType } from 'utils/react';
import useWatchColors from 'store/firebase/hooks/colors/useWatchColors';

const StyledTypography = styled(Typography)`
	width: 100%;
	font-size: 50px;
	text-align: center;
`;

const VehicleSvgContainer = styled(ContainerWithCenteredItems)`
	width: 50%;
`;

const Container = styled.div`
	box-sizing: border-box;
	display: none;
	width: 100%;
	padding: 0 10px 10px;

	display: flex;
	align-items: center;
	justify-items: center;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
`;

const VehicleThumbnail = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin: 5px;
	height: 100px;
	width: 100px;
	cursor: pointer;

	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[3]};
		transition: ${theme.transitions.create(
			['transform', 'box-shadow', 'background-color'],
			{
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}
		)};

		:hover, &.active {
			box-shadow: ${theme.shadows[5]};
			&:hover {
				transform: scale(1.2);
				background-color: ${
					theme.palette.primary[
						(theme.palette.type === 'dark' && 'dark') || 'light'
					]
				};
			}
			&.active {
				background-color: ${
					theme.palette.secondary[
						(theme.palette.type === 'dark' && 'dark') || 'light'
					]
				};
			}
		}
	`}
`;

const ColorThumbnail = styled.div`
	display: inline-block;
	height: 100px;
	width: 100px;
	margin: 5px;
	cursor: pointer;

	[color='#FFFFFF'] {
		border: 1px solid #ccc;
	}

	${({ theme, $color }) => `
		background-color: ${$color};
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[3]};
		transition: ${theme.transitions.create(
			['transform', 'box-shadow', 'background-color'],
			{
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}
		)};

		:hover {
			transform: scale(1.2);
			box-shadow: ${theme.shadows[5]};
		}
	`}
`;

const vehicles = [Vehicle1Icon, Vehicle2Icon, Vehicle3Icon, Vehicle4Icon];

const SelectorItem = ({ type, ind, selected, setSelected, item }) => {
	const onSelect = selectInd => () => {
		if (selectInd === selected) return;
		setSelected(selectInd);
	};

	return type === 'color' ? (
		<ColorThumbnail
			{...(selected === ind && { className: 'active' })}
			key={ind}
			onClick={onSelect(ind)}
			$color={item}
		/>
	) : (
		<VehicleThumbnail
			{...(selected === ind && { className: 'active' })}
			key={ind}
			onClick={onSelect(ind)}
		>
			{getElementFromElementOrType(item)}
		</VehicleThumbnail>
	);
};

const Selector = ({ type, items, selected, setSelected }) => {
	return (
		<Container>
			{items.map((item, ind) => (
				<SelectorItem
					key={ind}
					{...(selected === ind && { className: 'active' })}
					ind={ind}
					type={type}
					selected={selected}
					setSelected={setSelected}
					item={item}
				/>
			))}
		</Container>
	);
};

const UserInfo = () => {
	return <div>UserInfo</div>;
};

const Home = () => {
	const { exterior, interior, pending, error } = useWatchColors();
	const [selectedVehicle, setSelectedVehicle] = useState(0);
	const [selectedExteriorColor, setSelectedExteriorColor] = useState(0);
	const [selectedInteriorColor, setSelectedInteriorColor] = useState(0);

	const Vehicle = vehicles[selectedVehicle];
	const exteriorColor = exterior[selectedExteriorColor];
	const interiorColor = interior[selectedInteriorColor];

	const list = [
		{
			label: 'Vehicle Model',
			panel: (
				<Selector
					type="vehicle"
					items={vehicles}
					selected={selectedVehicle}
					setSelected={setSelectedVehicle}
				/>
			),
			icon: Vehicle1Icon,
		},
		{
			label: 'Exterior Color',
			panel: (
				<Selector
					type="color"
					items={exterior}
					selected={selectedExteriorColor}
					setSelected={setSelectedExteriorColor}
				/>
			),
			icon: PaletteIcon,
		},
		{
			label: 'Interior Color',
			panel: (
				<Selector
					type="color"
					items={interior}
					selected={selectedInteriorColor}
					setSelected={setSelectedInteriorColor}
				/>
			),
			icon: PaletteIcon,
		},
		{ label: 'User Info', panel: <UserInfo />, icon: AccountIcon },
	];

	return (
		<>
			<Spacer direction="bottom" spacing="5" />
			<ContainerWithCenteredItems>
				<VehicleSvgContainer>
					<StyledTypography> Exterior </StyledTypography>
					<Vehicle style={{ fontSize: 100, fill: exteriorColor }} />
				</VehicleSvgContainer>
				<VehicleSvgContainer>
					<StyledTypography> Interior </StyledTypography>
					<InteriorIcon
						style={{ fontSize: 100, fill: interiorColor }}
					/>
				</VehicleSvgContainer>
			</ContainerWithCenteredItems>
			<Spacer direction="bottom" spacing="5" />
			<PaperContainerWithSpacing>
				<Spacer direction="top" />
				<ContainerWithCenteredItems>
					<VerticalTabs list={list} />
				</ContainerWithCenteredItems>
				<Spacer direction="bottom" />
			</PaperContainerWithSpacing>
		</>
	);
};

export default Home;
