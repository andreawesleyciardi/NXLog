import React, { useState } from 'react';
import { redirect, NavLink } from 'react-router-dom';
import { Alert, Box, Button, Paper, Stack, Typography } from '@mui/material';

import NXIcon from './../../../assets/icon.png';
import { ButtonsStack, Form, GeneratorBase, Input, Submit } from './../../../ui/UI';
import { queryClient } from './../../../services/Services';
import { users } from './../../../apis/Apis';

export function Component() {
	return (
		<div id="project" className="container">
			<Paper elevation={0} sx={{ padding: '25px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
				<Typography variant="body2">PROJECT</Typography>
			</Paper>
		</div>
	);
}
