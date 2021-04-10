import React, { forwardRef } from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import { string } from 'prop-types';

const Checkbox = forwardRef(({ label, ...props }, ref) => (
	<FormControlLabel
		control={<MuiCheckbox color="primary" {...props} ref={ref} />}
		label={label}
	/>
));

Checkbox.propTypes = {
	label: string.isRequired,
};

export default Checkbox;
