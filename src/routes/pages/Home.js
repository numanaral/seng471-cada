import { useState } from 'react';
import { Vehicle1Icon } from 'icons';
import useWatchColors from 'store/firebase/hooks/colors/useWatchColors';
import PageContainer from 'components/page-components/PageContainer';
import VehicleSelector from 'containers/VehicleSelector';
import PageTitle from 'components/page-components/PageTitle';

const Home = () => {
	const { pending, error } = useWatchColors();
	const [vehicleSelection, setVehicleSelection] = useState({
		vehicleModel: null,
		exteriorColor: null,
		interiorColor: null,
	});
	const onVehicleSelectionUpdate = newSelection => {
		setVehicleSelection(newSelection);
	};

	return (
		<PageContainer>
			<PageTitle icon={Vehicle1Icon}>Vehicle Selector</PageTitle>
			{pending || error || (
				<VehicleSelector
					vehicleSelection={vehicleSelection}
					onVehicleSelectionUpdate={onVehicleSelectionUpdate}
				/>
			)}
		</PageContainer>
	);
};

export default Home;
