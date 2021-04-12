import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { InteriorIcon, QuestionIcon } from 'icons';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import { doesNotExist } from 'utils';

const StyledTypography = styled(Typography)`
	width: 100%;
	font-size: 40px;
	text-align: center;
`;

const VehicleSvgContainer = styled(ContainerWithCenteredItems)`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	justify-content: center;
	align-items: center;

	${({ theme }) => theme.breakpoints.down('sm')} {
		flex-direction: row;
	}
`;

const WHITE = '#FFF';
const VehicleDisplay = ({
	interiorColors,
	exteriorColors,
	vehicleModels,
	vehicleModel: vehicleModelIndex,
	exteriorColor: exteriorColorIndex,
	interiorColor: interiorColorIndex,
}) => {
	let Vehicle = QuestionIcon;
	let Interior = QuestionIcon;
	let exteriorFill = WHITE;
	let interiorFill = WHITE;

	if (!doesNotExist(vehicleModelIndex)) {
		Vehicle = vehicleModels[vehicleModelIndex];
		Interior = InteriorIcon;
		exteriorFill = exteriorColors[exteriorColorIndex];
		interiorFill = interiorColors[interiorColorIndex];
	}

	return (
		<Wrapper>
			<VehicleSvgContainer>
				<StyledTypography> Exterior </StyledTypography>
				<Vehicle style={{ fontSize: 80, fill: exteriorFill }} />
			</VehicleSvgContainer>
			<VehicleSvgContainer>
				<StyledTypography> Interior </StyledTypography>
				<Interior style={{ fontSize: 80, fill: interiorFill }} />
			</VehicleSvgContainer>
		</Wrapper>
	);
};

export default VehicleDisplay;
