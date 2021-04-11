import { AccountIcon, Vehicle1Icon, PaletteIcon } from 'icons';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Spacer from 'components/Spacer';
import VerticalTabs from 'components/VerticalTabs';
import styled from 'styled-components';
import Selector from './Selector';
import CustomerInfo from './CustomerInfo';

const Wrapper = styled.div`
	width: 75%;

	& > .MuiGrid-root {
		height: 100%;
	}
`;

const EditorTabs = ({
	customerInfo,
	interiorColors,
	exteriorColors,
	vehicleModels,
	onVehicleSelectionUpdate,
	...vehicleSelection
}) => {
	const {
		vehicleModel: vehicleModelIndex,
		exteriorColor: exteriorColorIndex,
		interiorColor: interiorColorIndex,
	} = vehicleSelection;

	const onSelectionChange = type => value => {
		const newSelection = {
			...vehicleSelection,
		};
		newSelection[type] = value;
		onVehicleSelectionUpdate({ vehicleSelection: newSelection });
	};

	const onCustomerUpdate = values => {
		onVehicleSelectionUpdate({ ...values });
	};

	const list = [
		{
			label: 'Vehicle Model',
			panel: (
				<Selector
					type="vehicle"
					items={vehicleModels}
					selected={vehicleModelIndex}
					setSelected={onSelectionChange('vehicleModel')}
				/>
			),
			icon: Vehicle1Icon,
		},
		{
			label: 'Exterior Color',
			panel: (
				<Selector
					type="color"
					items={exteriorColors}
					selected={exteriorColorIndex}
					setSelected={onSelectionChange('exteriorColor')}
				/>
			),
			icon: PaletteIcon,
		},
		{
			label: 'Interior Color',
			panel: (
				<Selector
					type="color"
					items={interiorColors}
					selected={interiorColorIndex}
					setSelected={onSelectionChange('interiorColor')}
				/>
			),
			icon: PaletteIcon,
		},
		...((customerInfo && [
			{
				label: 'Customer Info',
				panel: (
					<CustomerInfo
						{...customerInfo}
						onSubmit={onCustomerUpdate}
						submitText="Update"
					/>
				),
				icon: AccountIcon,
			},
		]) ||
			[]),
	];

	return (
		<Wrapper>
			<Spacer direction="top" />
			<ContainerWithCenteredItems>
				<VerticalTabs list={list} />
			</ContainerWithCenteredItems>
			<Spacer direction="bottom" />
		</Wrapper>
	);
};

export default EditorTabs;
