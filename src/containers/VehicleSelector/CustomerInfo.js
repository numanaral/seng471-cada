import Form, { FORM_COMPONENT_TYPES } from 'components/Form';
import { PanelContainer } from 'components/VerticalTabs';
import * as yup from 'yup';

/** @see https://stackoverflow.com/a/53210158/13161405 */
const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const customerSchema = yup.object().shape({
	firstName: yup.string().label('First Name').required(),
	lastName: yup.string().label('Last Name').required(),
	address: yup.string().label('Address').required(),
	phoneNumber: yup
		.string()
		.label('Phone Number')
		.matches(PHONE_REGEX, 'Phone number is not valid')
		.required(),
});

const CustomerInfo = ({
	firstName,
	lastName,
	address,
	phoneNumber,
	onSubmit,
	submitText,
	pending = false,
}) => {
	return (
		<PanelContainer>
			<Form
				ignoreAutocomplete
				style={{ width: '80%', maxWidth: 400 }}
				items={[
					{
						type: FORM_COMPONENT_TYPES.TEXT,
						label: 'First Name',
						name: 'firstName',
						required: true,
						defaultValue: firstName,
					},
					{
						type: FORM_COMPONENT_TYPES.TEXT,
						label: 'Last Name',
						name: 'lastName',
						required: true,
						defaultValue: lastName,
					},
					{
						type: FORM_COMPONENT_TYPES.TEXT,
						label: 'Address',
						name: 'address',
						required: true,
						defaultValue: address,
					},
					{
						type: FORM_COMPONENT_TYPES.TEXT,
						label: 'Phone Number',
						name: 'phoneNumber',
						required: true,
						defaultValue: phoneNumber,
					},
				]}
				schema={customerSchema}
				onSubmit={onSubmit}
				pending={pending}
				submitText={submitText}
			/>
		</PanelContainer>
	);
};

export default CustomerInfo;
