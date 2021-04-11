import useWatchColors from 'store/firebase/hooks/colors/useWatchColors';
import styled from 'styled-components';
import VehicleDisplay from './VehicleDisplay';
import EditorTabs from './EditorTabs';
import { VEHICLES } from './constants';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const VehicleSelector = ({
	vehicleSelection,
	onVehicleSelectionUpdate,
	customerInfo,
}) => {
	const {
		exterior: exteriorColors,
		interior: interiorColors,
		pending,
		error,
	} = useWatchColors();

	const modelsAndColors = {
		interiorColors,
		exteriorColors,
		vehicleModels: VEHICLES,
	};

	return (
		<>
			{pending || error || (
				<Wrapper>
					<EditorTabs
						customerInfo={customerInfo}
						{...modelsAndColors}
						{...vehicleSelection}
						onVehicleSelectionUpdate={onVehicleSelectionUpdate}
					/>
					<VehicleDisplay
						{...modelsAndColors}
						{...vehicleSelection}
					/>
				</Wrapper>
			)}
		</>
	);
};

export default VehicleSelector;
