import React from 'react';

import Toggle from 'components/Toggle';
import useAnalytics from 'store/redux/hooks/useAnalytics';

const AnalyticsToggle = () => {
	const { isAnalyticsEnabled, toggleAnalyticsSetting } = useAnalytics();

	return (
		<Toggle
			value={isAnalyticsEnabled}
			onChange={toggleAnalyticsSetting}
			options={[
				{
					value: true,
					label: 'Enabled',
				},
				{
					value: false,
					label: 'Disabled',
				},
			]}
		/>
	);
};

export default AnalyticsToggle;
