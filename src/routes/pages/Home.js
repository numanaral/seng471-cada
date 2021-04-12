import { useEffect, useState } from 'react';
import { Vehicle1Icon } from 'icons';
import useWatchColors from 'store/firebase/hooks/colors/useWatchColors';
import PageContainer from 'components/page-components/PageContainer';
import VehicleSelector from 'containers/VehicleSelector';
import PageTitle from 'components/page-components/PageTitle';
import { Divider } from '@material-ui/core';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const Home = () => {
	const { pending, error } = useWatchColors();
	const { notifyInfo } = useNotificationProvider();
	const [vehicleSelection, setVehicleSelection] = useState({
		vehicleModel: null,
		exteriorColor: null,
		interiorColor: null,
	});
	const onVehicleSelectionUpdate = newSelection => {
		setVehicleSelection(newSelection.vehicleSelection);
	};

	useEffect(() => {
		notifyInfo(
			`Please select a vehicle model, then pick an exterior and interior color.`
		);
	}, [notifyInfo]);

	return (
		<PageContainer>
			<PageTitle icon={Vehicle1Icon}>Vehicle Selector</PageTitle>
			<Divider style={{ width: '100%' }} variant="middle" />
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
