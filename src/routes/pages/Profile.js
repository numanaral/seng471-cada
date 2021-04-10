import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import React from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';

import { ThemeIcon, AnimationIcon, PaletteIcon, AnalyticsIcon } from 'icons';
import LazyList from 'components/List/Lazy';
import { itemTypes, SPACER } from 'components/List/constants';
import ThemeToggle from 'containers/ThemeToggle';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';
import ThemeColorPicker from 'containers/ThemeColorPicker';
import useRoles from 'store/firebase/hooks/useRoles';
import AnalyticsToggle from 'containers/AnalyticsToggle';

const Switch = () => <MuiSwitch disabled />;

const PREFERENCE_LIST = [
	{
		type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
		primaryText: 'VIEW SETTINGS',
	},
	{
		primaryText: 'Theme',
		icon: ThemeIcon,
		// TODO: If I decide to add redux, won't need this complication here
		// but it's not needed right now
		secondaryAction: <ThemeToggle />,
	},
	{
		primaryText: 'Primary Color',
		icon: PaletteIcon,
		secondaryAction: <ThemeColorPicker type="primary" />,
	},
	{
		primaryText: 'Secondary Color',
		icon: PaletteIcon,
		secondaryAction: <ThemeColorPicker type="secondary" />,
	},
	SPACER,
	{
		type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
		primaryText: 'ANIMATIONS',
		secondaryText: 'Disable/Modify animations',
	},
	{
		primaryText: 'Animations',
		secondaryText: 'Turns on/off all the animations',
		icon: AnimationIcon,
		secondaryAction: Switch,
		disabled: true,
	},
];

const getPreferenceList = (isDevUser = false) => [
	...((isDevUser && [
		{
			type: itemTypes.SECTION_TITLE_WITH_DIVIDER,
			primaryText: 'DEV SETTINGS',
		},
		{
			primaryText: 'Analytics',
			icon: AnalyticsIcon,
			// TODO: If I decide to add redux, won't need this complication here
			// but it's not needed right now
			secondaryAction: <AnalyticsToggle />,
		},
		SPACER,
	]) ||
		[]),
	...PREFERENCE_LIST,
];

const Profile = () => {
	const { isDevUser } = useRoles();
	return (
		<ContainerWithCenteredItems vertical horizontal>
			<PaperContainerWithSpacing padding="50px !important">
				<LazyList list={getPreferenceList(isDevUser)} />
			</PaperContainerWithSpacing>
		</ContainerWithCenteredItems>
	);
};

export default Profile;
