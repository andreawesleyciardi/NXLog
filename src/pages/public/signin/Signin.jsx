import React from 'react';
import { redirect } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

import NXIcon from './../../../assets/icon.png';
import { ButtonsStack, Form, Input, Submit } from './../../../ui/UI';
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
	return (
		<div id="signin" className="container">
			<Paper elevation={0} sx={{ borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
				<img id="icon" src={NXIcon} />
				<Form method="post">
					{(register, control, formState, extraFormState) => (
						<>
							<Input name="userName" label="Username or email" control={control} {...register('userName', { required: true })} placeholder="Enter username or email" />
							<Input name="password" label="Password" control={control} {...register('password', { required: true })} placeholder="Password" />
							<ButtonsStack sx={{ marginTop: '1rem' }}>
								<Submit formState={formState} extraFormState={extraFormState}>
									Log in
								</Submit>
							</ButtonsStack>
						</>
					)}
				</Form>
			</Paper>
		</div>
	);
}
