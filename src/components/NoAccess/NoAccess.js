import React from 'react';
import { Typography } from '@material-ui/core';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';

const NoAccess = ({ children }) => (
	<ContainerWithCenteredItems vertical>
		<PaperContainerWithSpacing>
			<Typography variant="h3" component="h1">
				{children}
			</Typography>
		</PaperContainerWithSpacing>
	</ContainerWithCenteredItems>
);

export default NoAccess;
