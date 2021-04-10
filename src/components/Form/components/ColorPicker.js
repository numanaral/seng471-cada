import React, { forwardRef } from 'react';
import { FormControlLabel } from '@material-ui/core';
import { string } from 'prop-types';

import ColorPickerComponent from 'components/ColorPicker';

const ColorPicker = forwardRef(({ label, ...props }, ref) => (
	<FormControlLabel
		control={<ColorPickerComponent {...props} ref={ref} />}
		label={label}
	/>
));

ColorPicker.propTypes = {
	label: string.isRequired,
};

export default ColorPicker;
