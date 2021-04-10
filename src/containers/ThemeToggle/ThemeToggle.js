import React from 'react';
import { yellow, indigo } from '@material-ui/core/colors';

import Toggle from 'components/Toggle';
import { LightThemeIcon, DarkThemeIcon } from 'icons';
import useProfile from 'store/firebase/hooks/useProfile';

const ThemeToggle = () => {
	const { theme, updateTheme } = useProfile();

	return (
		<Toggle
			value={theme}
			onChange={updateTheme}
			options={[
				{
					value: 'dark',
					label: 'Dark',
					icon: <DarkThemeIcon style={{ color: indigo.A700 }} />,
				},
				{
					value: 'light',
					label: 'Light',
					icon: <LightThemeIcon style={{ color: yellow[500] }} />,
				},
			]}
		/>
	);
};

export default ThemeToggle;
