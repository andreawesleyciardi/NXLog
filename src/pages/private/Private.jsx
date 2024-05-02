import React, { useLayoutEffect } from 'react';
import { Navigate, Outlet, useLoaderData, useLocation, useRevalidator } from 'react-router-dom';

import { users } from './../../apis/Apis';
import { isAuthenticated, queryClient } from './../../services/Services';

import { Footer, Header } from './../../ui/UI';

import './Private.scss';

export async function loader() {
	return queryClient.ensureQueryData(users.details());
}

export function Component() {
	let location = useLocation();
	const loaderData = useLoaderData();
	let revalidator = useRevalidator();

	useLayoutEffect(() => {
		document.body.classList.add('private');
		document.body.classList.remove('public');
	}, []);

	if (revalidator.state === 'loading') {
		return null;
	}

	if (revalidator.state === 'idle' && isAuthenticated() == false) {
		return <Navigate to="/auth/signin" state={{ from: location }} />;
	}

	return (
		<>
			<Header user={loaderData?.data} />
			<main id="wrapper-page">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export function ErrorBoundary() {
	let location = useLocation();
	return <Navigate to="/auth/signin" state={{ from: location }} />;
}
