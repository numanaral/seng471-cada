import styled from 'styled-components';

const ColorThumbnail = styled.div`
	display: inline-block;
	height: 75px;
	width: 75px;
	margin: 5px;
	cursor: pointer;

	[color='#FFFFFF'] {
		border: 1px solid #ccc;
	}

	${({ theme, $color }) => `
		background-color: ${$color};
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
			}
			&.active {
				border: 3px dashed #000;
				border-radius: 35%;
			}
		}
	`}
`;

export default ColorThumbnail;
