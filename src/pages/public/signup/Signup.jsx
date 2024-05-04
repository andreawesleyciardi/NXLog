import React, { useState } from 'react';
import { redirect, NavLink } from 'react-router-dom';
import { Alert, Paper, Stack, Typography } from '@mui/material';

import NXIcon from './../../../assets/icon.png';
import { ButtonsStack, Form, Generator, Input, Submit } from './../../../ui/UI';
import { queryClient } from './../../../services/Services';
import { users } from './../../../apis/Apis';

export async function action({ request }) {
	const formData = Object.fromEntries(await request.formData());
	if (formData.userName !== '' && formData.password !== '') {
		const response = await queryClient.fetchQuery(users.signup(formData));
		if (response.status != 200) {
			return false;
		}
		return redirect('/auth/signin');
	} else {
		return false;
	}
}

export function Component() {
	const [copyStatus, setCopyStatus] = useState(null);

	const handleGeneratedPasswordCopy = (status) => {
		if (status != copyStatus) {
			setCopyStatus(status);
		}
	};

	return (
		<div id="signin" className="sign container">
			<Paper elevation={0} sx={{ width: '424px', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
				<img id="icon" src={NXIcon} />
				<Form method="post" defaultValues={{ userName: '', password: '' }}>
					{(register, control, formState, extraFormState) => (
						<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
							<Stack sx={{ gap: '15px', marginTop: '1rem' }}>
								<Input name="userName" label="Username or email" control={control} {...register('userName', { required: true, minLength: 4 })} placeholder="Enter username or email" minLength="4" autoFocus={true} />

								<Stack sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
									<Generator name="password" label="Password" control={control} {...register('password', { required: true })} placeholder="Password" onCopy={handleGeneratedPasswordCopy} />
									{copyStatus != null && (
										<Alert severity={copyStatus === true ? 'success' : 'error'}>
											{copyStatus === true ? (
												<>The Password was copied successfully in the clipboard.</>
											) : (
												<>
													It was not possible to copy the Password.
													<br />
													Please, try again.
												</>
											)}
										</Alert>
									)}
								</Stack>
							</Stack>
							<ButtonsStack sx={{ marginTop: '1rem' }}>
								<Submit size="large" formState={formState} extraFormState={extraFormState}>
									Sign up
								</Submit>
							</ButtonsStack>
							<Typography variant="body2">
								You already have an account?
								<NavLink to="/auth/signin">
									<Typography variant="button" sx={{ marginLeft: '5px' }}>
										Go to Log in.
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
