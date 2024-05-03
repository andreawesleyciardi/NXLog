import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

import NXIcon from './../../../assets/icon.png';
import { ButtonsStack, Form, GeneratorBase, Input, Submit } from './../../../ui/UI';
import { queryClient } from './../../../services/Services';
import { users } from './../../../apis/Apis';

import './Signin.scss';

export async function action({ request }) {
	// const formData = Object.fromEntries(await request.formData());
	// const response = await queryClient.fetchQuery(users.signin(formData));
	// if (response.status != 200) {
	// 	return false;
	// }
	// await queryClient.invalidateQueries({ queryKey: ['user', 'details'] });
	// const loggedUser = await queryClient.ensureQueryData(users.details());
	// return redirect(`/${loggedUser?.data?.role === 'admin' ? 'admin' : loggedUser?.data?.metropoli_id}/dashboard`);
}

export function Component() {
	const [iHavePassword, setIHavePassword] = useState(true);

	const handleChangePasswordField = () => {
		setIHavePassword(!iHavePassword);
	};

	return (
		<div id="signin" className="container">
			<Paper elevation={0} sx={{ width: '424px', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
				<img id="icon" src={NXIcon} />
				<Form method="post">
					{(register, control, formState, extraFormState) => (
						<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
							<Stack sx={{ gap: '15px', marginTop: '1rem' }}>
								<Input name="userName" label="Username or email" control={control} {...register('userName', { required: true })} placeholder="Enter username or email" />

								<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
									{iHavePassword == true ? (
										<Input name="password" label="Password" control={control} {...register('password', { required: true })} placeholder="Password" />
									) : (
										<Stack sx={{ display: 'flex', flexDirection: 'column' }}>
											<GeneratorBase />
										</Stack>
									)}
									<Typography variant="body2">
										{iHavePassword == true ? `Don't have a password?` : `Do you have a password?`}
										<Button onClick={handleChangePasswordField}>{iHavePassword == true ? `Generate one.` : `Log in with it.`}</Button>
									</Typography>
								</Stack>
							</Stack>
							<ButtonsStack sx={{ marginTop: '1rem' }}>
								<Submit size="large" formState={formState} extraFormState={extraFormState}>
									Log in
								</Submit>
							</ButtonsStack>
						</Stack>
					)}
				</Form>
			</Paper>
		</div>
	);
}
