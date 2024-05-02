import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom';

let basename = '/';

const Routing = () => {
	const publicRoot = './pages/public/';
	const privateRoot = './pages/private/';

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" exact element={<Navigate to="auth/signin" />} />

				<Route path="auth/*" lazy={() => import(`${publicRoot}Public`)}>
					<Route path="signin" lazy={() => import(`${publicRoot}signin/Signin`)} />
				</Route>

				<Route lazy={() => import(`${privateRoot}Private.jsx`)}>
					<Route path="project" lazy={() => import(`${privateRoot}project/Project`)} />
					<Route path="developer" lazy={() => import(`${privateRoot}developer/Developer`)} />
				</Route>
			</>
		),
		{ basename: basename }
	);

	return <RouterProvider router={router} />;
};

export default Routing;
