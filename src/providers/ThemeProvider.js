import React from 'react';
import { node } from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

import getMuiTheme, {
	ConstGlobalStyle,
	VariantGlobalStyle,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
} from 'theme';
import useProfile from 'store/firebase/hooks/useProfile';
import { DARK_THEME } from 'store/redux/reducers/userPreference/constants';
import LoadingIndicator from 'components/LoadingIndicator';

export const ThemeProvider = ({ children }) => {
	const { isAuthorizing, theme, primaryColor, secondaryColor } = useProfile();
	const themeConfig = getMuiTheme(theme || DARK_THEME, {
		primaryColor: primaryColor || PRIMARY_COLOR,
		secondaryColor: secondaryColor || SECONDARY_COLOR,
	});

	return (
		(isAuthorizing && <LoadingIndicator fullSize />) || (
			<StylesProvider injectFirst>
				<MuiThemeProvider theme={themeConfig}>
					<ScThemeProvider theme={themeConfig}>
						<CssBaseline />
						{children}
					</ScThemeProvider>
				</MuiThemeProvider>
				<ConstGlobalStyle />
				<VariantGlobalStyle $theme={themeConfig} />
			</StylesProvider>
		)
	);
};

ThemeProvider.propTypes = {
	children: node.isRequired,
};

export default ThemeProvider;
