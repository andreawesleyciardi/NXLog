import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel as MuiInputLabel } from '@mui/material';

const FieldLabel = ({ children, name, sx = {}, ...props }) => {
	return (
		<MuiInputLabel shrink={false} htmlFor={name} sx={Object.assign({ position: 'relative', transform: 'none' }, sx)}>
			{children}
		</MuiInputLabel>
	);
};

FieldLabel.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node], PropTypes.string).isRequired,
	name: PropTypes.string,
	sx: PropTypes.object,
};

FieldLabel.displayName = 'FieldLabel';

export { FieldLabel };
