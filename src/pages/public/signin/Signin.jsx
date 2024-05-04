import React, { useState } from 'react';
import { redirect, NavLink } from 'react-router-dom';
import { Alert, Box, Button, Paper, Stack, Typography } from '@mui/material';

import NXIcon from './../../../assets/icon.png';
import { ButtonsStack, Form, GeneratorBase, Input, Submit } from './../../../ui/UI';
import { queryClient } from './../../../services/Services';
import { users } from './../../../apis/Apis';

export async function action({ request }) {
	const formData = Object.fromEntries(await request.formData());
	if (formData.userName !== '' && formData.password !== '') {
		const response = await queryClient.fetchQuery(users.signin(formData));
		if (response.status != 200) {
			return false;
		}
		await queryClient.invalidateQueries({ queryKey: ['user', 'details'] });
		return redirect('/project');
	} else {
		return false;
	}
}

export function Component() {
	return (
		<div id="signin" className="sign container">
			<Paper elevation={0} sx={{ width: '424px', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
				<img id="icon" src={NXIcon} />
				<Form method="post" defaultValues={{ userName: '', password: '' }}>
					{(register, control, formState, extraFormState) => (
						<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
							<Stack sx={{ gap: '15px', marginTop: '1rem' }}>
								<Input name="userName" label="Username or email" control={control} {...register('userName', { required: true })} placeholder="Enter username or email" autoFocus={true} />
								<Input name="password" type="password" label="Password" control={control} {...register('password', { required: true })} placeholder="Password" />
							</Stack>
							<ButtonsStack sx={{ marginTop: '1rem' }}>
								<Submit size="large" formState={formState} extraFormState={extraFormState}>
									Log in
								</Submit>
							</ButtonsStack>
							<Typography variant="body2">
								{`Don't have an account?`}
								<NavLink to="/auth/signup">
									<Typography variant="button" sx={{ marginLeft: '5px' }}>
										Go to Sign up.
									</Typography>
								</NavLink>
							</Typography>
						</Stack>
					)}
				</Form>
			</Paper>
		</div>
	);
}
