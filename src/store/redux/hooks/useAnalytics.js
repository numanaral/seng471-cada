import useLocalStorage from 'hooks/useLocalStorage';

const IS_ANALYTICS_ENABLED_LOCAL_STORAGE_KEY = 'is-analytics-enabled';
const useAnalytics = () => {
	const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useLocalStorage(
		IS_ANALYTICS_ENABLED_LOCAL_STORAGE_KEY,
		true
	);

	// We are not really "toggling" but since we have a mechanism to
	// detect the previous state, this is fine!
	const toggleAnalyticsSetting = () => setIsAnalyticsEnabled(v => !v);

	return { isAnalyticsEnabled, toggleAnalyticsSetting };
};

export default useAnalytics;
