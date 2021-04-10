import React from 'react';
import { Typography } from '@material-ui/core';

import { propTypes, defaultProps } from './types';

const PrettyPre = ({ children, variant }) => (
	<Typography variant={variant} component="pre">
		{children}
	</Typography>
);

PrettyPre.propTypes = propTypes;
PrettyPre.defaultProps = defaultProps;

export default PrettyPre;
