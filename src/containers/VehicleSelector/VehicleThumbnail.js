import styled from 'styled-components';

const VehicleThumbnail = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin: 5px;
	height: 75px;
	width: 75px;
	cursor: pointer;

	${({ theme }) => `
		background-color: ${theme.palette.background.paper};
		border-radius: ${theme.shape.borderRadius}px;
		box-shadow: ${theme.shadows[3]};
		transition: ${theme.transitions.create(
			['transform', 'box-shadow', 'background-color', 'border-radius'],
			{
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}
		)};

		:hover, &.active {
			box-shadow: ${theme.shadows[5]};
			&:hover {
				transform: scale(1.2);
				background-color: ${
					theme.palette.primary[
						(theme.palette.type === 'dark' && 'dark') || 'light'
					]
				};
			}
			&.active {
				background-color: ${
					theme.palette.secondary[
						(theme.palette.type === 'dark' && 'dark') || 'light'
					]
				};
				border: 3px dashed #000;
				border-radius: 35%;
			}
		}
	`}
`;

export default VehicleThumbnail;
