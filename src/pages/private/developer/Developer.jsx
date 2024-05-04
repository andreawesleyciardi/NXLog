import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';

import PhotoAvatar from './../../../assets/avatar.jpeg';
import CV from './../../../assets/Andrea_Wesley_Ciardi_-_Resume.pdf';

export function Component() {
	return (
		<div id="developer" className="container">
			<Stack spacing={5}>
				<Stack direction="row" spacing={3} sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
					<Avatar src={PhotoAvatar} alt="Andrea Ciardi" sx={{ width: 80, height: 80 }} />
					<Typography variant="h2">Andrea Wesley Ciardi</Typography>
				</Stack>

				<Typography variant="body1">
					Brasilian / Italian <strong>Senior Frontend Developer</strong> (15 years of working experience) based in Athens, Greece.
				</Typography>

				<Stack spacing={3}>
					<Typography variant="body1">
						Email: <a href="mailto:developer@andreaciardi.com">developer@andreaciardi.com</a>
					</Typography>
					<Typography variant="body1">
						Phone: <a href="tel:+306945051674">+30 6945051674</a>
					</Typography>
					<Typography variant="body1">
						Curriculum Vitae:
						<a href={CV} download style={{ marginLeft: '10px' }}>
							Download
						</a>
					</Typography>
				</Stack>
			</Stack>
		</div>
	);
}
