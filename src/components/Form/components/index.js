import Text from './Text';
import Password from './Password';
import Checkbox from './Checkbox';
import ColorPicker from './ColorPicker';

const FORM_COMPONENT_TYPES = {
	TEXT: 'text',
	PASSWORD: 'password',
	CHECKBOX: 'checkbox',
	COLOR_PICKER: 'colorPicker',
};

const { TEXT, PASSWORD, CHECKBOX, COLOR_PICKER } = FORM_COMPONENT_TYPES;

const COMPONENTS = {
	[TEXT]: Text,
	[PASSWORD]: Password,
	[CHECKBOX]: Checkbox,
	[COLOR_PICKER]: ColorPicker,
};

export { FORM_COMPONENT_TYPES };
export default COMPONENTS;
