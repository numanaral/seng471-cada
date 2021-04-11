import { USER_ROLES } from 'routes/constants';
import { hasAnyFrom } from 'utils/object';
import useProfile from './useProfile';

const { DEV, OWNER, DESIGNATED_SALESPERSON, GENERIC_SALESPERSON } = USER_ROLES;

const useRoles = () => {
	const { roles } = useProfile();

	const hasAccess = rolesToCheck => hasAnyFrom(rolesToCheck, roles);
	const isDevUser = hasAccess([DEV]);
	const isOwner = hasAccess([DEV, OWNER]);
	const isDesignatedSalesperson = hasAccess([DESIGNATED_SALESPERSON]);
	const isGenericSalesperson = hasAccess([GENERIC_SALESPERSON]);
	const isSalesperson =
		isOwner || isDesignatedSalesperson || isGenericSalesperson;

	return {
		hasAccess,
		isDevUser,
		isOwner,
		isDesignatedSalesperson,
		isGenericSalesperson,
		isSalesperson,
	};
};

export default useRoles;
