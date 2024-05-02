import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

import { Tooltip } from './../UI';

const Header = ({ user, ...props }) => {
	return (
		<header>
			HEADER
			{/* Breadcrumbs --> https://reactrouter.com/en/main/hooks/use-matches */}
			{/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>[Breadcrumbs]</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
					{user.role !== 'admin' && <Typography sx={{ minWidth: 100 }}>Text Here</Typography>}
					<Tooltip
						id="account"
						title="Account"
						menu={(Menu, menuProps) => (
							<Menu {...menuProps}>
								<MenuItem>
									<NavLink to={`${linksRoot}/users/${user?.id}/read`}>
										<Avatar /> <Typography>Προφίλ</Typography>
									</NavLink>
								</MenuItem>
								<Divider />
								<MenuItem>
									<NavLink to={`${linksRoot}/password`}>
										<ListItemIcon>
											<PersonAdd fontSize="small" />
										</ListItemIcon>
										<Typography>Αλλαγή Κωδικού</Typography>
									</NavLink>
								</MenuItem>
								<MenuItem>
									<NavLink to="auth/signout">
										<ListItemIcon>
											<Logout fontSize="small" />
										</ListItemIcon>
										<Typography>Αποσύνδεση</Typography>
									</NavLink>
								</MenuItem>
							</Menu>
						)}
					>
						{(triggerTooltip) => (
							<>
								<Typography>{user?.userName}</Typography>
								<IconButton onClick={triggerTooltip} size="small" sx={{ ml: 2 }}>
									{user?.firstName && <Avatar sx={{ width: 32, height: 32 }}>{user.firstName.slice(0, 1).toUpperCase()}</Avatar>}
								</IconButton>
							</>
						)}
					</Tooltip>
				</Box>
			</Box> */}
		</header>
	);
};

Header.defaultProps = {
	user: null,
	// linksRoot: '',
};

Header.propTypes = {
	user: PropTypes.object,
	// linksRoot: PropTypes.string,
};

export default Header;
