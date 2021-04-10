import React from 'react';
import { Typography } from '@material-ui/core';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';

const NoAccess = () => (
	<ContainerWithCenteredItems vertical>
		<PaperContainerWithSpacing>
			<Typography variant="h3" component="h1">
				Either the slide is not found or you don&apos;t have access to
				it.
			</Typography>
		</PaperContainerWithSpacing>
	</ContainerWithCenteredItems>
);

export default NoAccess;
