import { useMediaQuery } from '@material-ui/core';
import useNotificationProvider from 'store/redux/hooks/useNotificationProvider';

const useIsNotMobileFriendly = () => {
	const { notifyWarning } = useNotificationProvider();
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('xs'));

	if (smAndDown) {
		notifyWarning(
			`This website was not intended to be mobile friendly for its initial purpose. Please use on a larger screen until this changes in the future!`
		);
	}
};

export default useIsNotMobileFriendly;
