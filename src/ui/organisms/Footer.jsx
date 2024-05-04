import { Typography } from '@mui/material';

import LogoFooter from './../../assets/logo-footer.png';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="logo">
					<img src={LogoFooter} />
				</div>
				<Typography>© Copyright 2024 NXLog Ltd.</Typography>
			</div>
		</footer>
	);
};

export default Footer;
