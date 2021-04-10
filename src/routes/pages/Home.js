import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import TooltipButton from 'components/TooltipButton';
import { BASE_PATH } from 'routes/constants';
import Spacer from 'components/Spacer';

const StyledTypography = styled(Typography)`
	font-size: 150px;
`;

const GetStartedButton = styled(TooltipButton)`
	height: 90px;
	width: 350px;
`;

const TutorialButton = styled(TooltipButton)`
	height: 50px;
	width: 200px;
`;

const Home = () => {
	const { notifyInfo } = useNotificationProvider();
	const { push } = useHistory();
	return (
		<>
			<Spacer direction="bottom" spacing="5" />
			<ContainerWithCenteredItems>
				<StyledTypography variant="h1" component="h1" color="secondary">
					SlideScott
				</StyledTypography>
			</ContainerWithCenteredItems>
			<Spacer direction="bottom" spacing="5" />
			<ContainerWithCenteredItems>
				<GetStartedButton
					tooltip="Create an account and start creating slides."
					text="Get Started."
					onClick={() => push(`${BASE_PATH}/dashboard`)}
					bg="secondary"
				/>
			</ContainerWithCenteredItems>
			<Spacer direction="bottom" spacing="3" />
			<ContainerWithCenteredItems>
				<TutorialButton
					tooltip="Watch a tutorial on how to use SlideScott."
					text="Tutorial"
					onClick={() =>
						notifyInfo('Coming soon', { autoHide: false })
					}
					bg="primary"
				/>
			</ContainerWithCenteredItems>
		</>
	);
};

export default Home;
