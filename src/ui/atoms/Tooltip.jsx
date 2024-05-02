import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MuiTooltip } from '@mui/material';
import Menu from '@mui/material/Menu';

const Tooltip = ({ children, id, menu, title, ...props }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const triggerTooltip = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<MuiTooltip title={title}>{children(triggerTooltip)}</MuiTooltip>
			{menu(Menu, {
				anchorEl: anchorEl,
				id: id,
				open: open,
				onClose: handleClose,
				onClick: handleClose,
				PaperProps: {
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&::before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				},
				transformOrigin: { horizontal: 'right', vertical: 'top' },
				anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
			})}
		</>
	);
};

Tooltip.defaultProps = {
	title: '',
};

Tooltip.propTypes = {
	children: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	menu: PropTypes.func.isRequired,
	title: PropTypes.string,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
