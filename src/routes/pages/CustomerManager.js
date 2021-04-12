import PageContainer from 'components/page-components/PageContainer';
import { CustomersIcon } from 'icons';
import PageTitle from 'components/page-components/PageTitle';
import VehicleSelector from 'containers/VehicleSelector';
import useWatchCustomer from 'store/firebase/hooks/customers/useWatchCustomer';
import useCustomer from 'store/firebase/hooks/customers/useCustomer';
import { Divider } from '@material-ui/core';

const CustomerManager = ({
	match: {
		params: { id },
	},
}) => {
	const { error, pending, customer } = useWatchCustomer(id);
	const { updateCustomer } = useCustomer(id);

	const { firstName, lastName, vehicleSelection } = customer;
	let fullName;
	if (firstName && lastName) {
		fullName = `${firstName} ${lastName}`;
	}

	const onVehicleSelectionUpdate = newSelection => {
		updateCustomer(newSelection);
	};

	return (
		<PageContainer>
			<PageTitle icon={CustomersIcon}>{fullName || 'Customer'}</PageTitle>
			<Divider style={{ width: '100%' }} variant="middle" />
			{pending || error || (
				<VehicleSelector
					vehicleSelection={vehicleSelection}
					onVehicleSelectionUpdate={onVehicleSelectionUpdate}
					customerInfo={customer}
				/>
			)}
		</PageContainer>
	);
};

export default CustomerManager;
