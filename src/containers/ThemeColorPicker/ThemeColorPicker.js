import ColorPicker from 'components/ColorPicker';
import React from 'react';
import useProfile from 'store/firebase/hooks/useProfile';
import { propTypes, defaultProps } from './types';

const ThemeColorPicker = ({ type }) => {
	const {
		primaryColor,
		secondaryColor,
		updatePrimaryColor,
		updateSecondaryColor,
	} = useProfile();
	const isPrimary = type === 'primary';

	const onColorChange = v => {
		if (isPrimary) {
			updatePrimaryColor(v);
			return;
		}

		updateSecondaryColor(v);
	};

	const color = (isPrimary && primaryColor) || secondaryColor;

	return <ColorPicker color={color} onColorChange={onColorChange} />;
};

ThemeColorPicker.propTypes = propTypes;
ThemeColorPicker.defaultProps = defaultProps;

export default ThemeColorPicker;
