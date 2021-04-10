import React, { forwardRef } from 'react';

import Text from './Text';

const Password = forwardRef((props, ref) => (
	<Text type="password" {...props} ref={ref} />
));

export default Password;
