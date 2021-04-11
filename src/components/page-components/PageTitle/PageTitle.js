import CenteredTypography from 'components/CenteredTypography';
import { cloneElement } from 'react';
import { getElementFromElementOrType } from 'utils/react';

const PageTitle = ({ icon, children, subtitle = false, ...rest }) => {
	let variant = 'h2';
	let fontSize = 70;

	if (subtitle) {
		variant = 'h5';
		fontSize = 50;
	}
	return (
		<CenteredTypography component="h1" variant={variant} {...rest}>
			{cloneElement(getElementFromElementOrType(icon), {
				style: { fontSize },
			})}
			&nbsp;{children}
		</CenteredTypography>
	);
};

export default PageTitle;
