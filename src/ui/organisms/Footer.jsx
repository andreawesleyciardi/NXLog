import { Typography } from '@mui/material';

import LogoFooter from './../../assets/logo-footer.png';

const Footer = () => {
	return (
		<footer>
			<img src={LogoFooter} />
			<Typography>© Copyright 2024 NXLog Ltd.</Typography>
		</footer>
	);
};

export default Footer;
