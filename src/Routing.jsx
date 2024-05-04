import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom';

import { Component as PublicComponent } from './pages/public/Public.jsx';
import { Component as SigninComponent, action as SigninAction } from './pages/public/signin/Signin.jsx';
import { Component as SignupComponent, action as SignupAction } from './pages/public/signup/Signup.jsx';

import { Component as PrivateComponent, loader as PrivateLoader } from './pages/private/Private.jsx';
import { Component as ProjectComponent } from './pages/private/project/Project.jsx';
import { Component as DeveloperComponent } from './pages/private/developer/Developer.jsx';

let basename = '/';

const Routing = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" exact element={<Navigate to="auth/signin" />} />

				<Route path="auth/*" Component={PublicComponent}>
					<Route path="signin" Component={SigninComponent} action={SigninAction} />
					<Route path="signup" Component={SignupComponent} action={SignupAction} />
				</Route>

				<Route Component={PrivateComponent} loader={PrivateLoader}>
					<Route path="project" Component={ProjectComponent} />
					<Route path="developer" Component={DeveloperComponent} />
				</Route>
			</>
		),
		{ basename: basename }
	);

	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<>
	// 			<Route path="/" exact element={<Navigate to="auth/signin" />} />

	// 			<Route path="auth/*" lazy={() => import(`${publicRoot}Public.jsx`)}>
	// 				<Route path="signin" lazy={() => import(`${publicRoot}signin/Signin.jsx`)} />
	// 				<Route path="signup" lazy={() => import(`${publicRoot}signup/Signup.jsx`)} />
	// 			</Route>

	// 			<Route lazy={() => import(`${privateRoot}Private.jsx`)}>
	// 				<Route path="project" lazy={() => import(`${privateRoot}project/Project.jsx`)} />
	// 				<Route path="developer" lazy={() => import(`${privateRoot}developer/Developer.jsx`)} />
	// 			</Route>
	// 		</>
	// 	),
	// 	{ basename: basename }
	// );

	return <RouterProvider router={router} />;
};

export default Routing;
