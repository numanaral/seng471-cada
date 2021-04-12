import PageTitle from 'components/page-components/PageTitle';
import PageContainer from 'components/page-components/PageContainer';
import Spacer from 'components/Spacer';
import { AddIcon, CustomersIcon } from 'icons';
import Autocomplete from 'components/Autocomplete';
import useWatchCustomers from 'store/firebase/hooks/customers/useWatchCustomers';
import { useHistory } from 'react-router-dom';
import { BASE_PATH } from 'routes/constants';
import TooltipButton from 'components/TooltipButton';
import { Grid, useMediaQuery } from '@material-ui/core';
import useCustomer from 'store/firebase/hooks/customers/useCustomer';
import useDialogProvider from 'store/redux/hooks/useDialogProvider';
import CustomerInfo from 'containers/VehicleSelector/CustomerInfo';

const Customers = () => {
	const { error, pending, customers } = useWatchCustomers();
	const { createCustomer } = useCustomer();
	const { openComponentDialog, closeDialog } = useDialogProvider();
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

	const customerList = customers.map(({ firstName, lastName, id }) => ({
		title: `${firstName} ${lastName}`,
		value: id,
	}));

	const { push } = useHistory();

	const goToCustomer = id => {
		push(`${BASE_PATH}/customers/${id}`);
	};

	const onCustomerSelect = (_, { value }) => {
		goToCustomer(value);
	};

	const openCustomerAddDialog = ({
		onSubmit,
		props = {},
		isPending = false,
	}) => {
		openComponentDialog(
			'Add new customer',
			<CustomerInfo
				onSubmit={onSubmit}
				pending={isPending}
				submitText="Add"
				{...props}
			/>,
			{ pending: isPending }
		);
	};

	const onCustomerAddSubmit = async props => {
		openCustomerAddDialog({ props, isPending: true });
		const id = await createCustomer(props);
		goToCustomer(id);
		closeDialog();
	};

	const onCustomerAdd = () => {
		openCustomerAddDialog({ onSubmit: onCustomerAddSubmit });
	};

	return (
		<PageContainer>
			<PageTitle icon={CustomersIcon}>Customers</PageTitle>
			<Spacer direction="bottom" spacing="15" />
			{pending || error || (
				<Grid container justify="center" alignItems="center">
					<Autocomplete
						options={customerList}
						onChange={onCustomerSelect}
						label="Customers"
					/>
					&nbsp;&nbsp;
					<TooltipButton
						tooltip="Add new customer"
						{...(smAndDown && {
							text: 'Add new customer',
							style: {
								width: '95%',
								marginTop: 10,
							},
						})}
						onClick={onCustomerAdd}
						icon={AddIcon}
						bg="primary"
					/>
				</Grid>
			)}
		</PageContainer>
	);
};

export default Customers;
