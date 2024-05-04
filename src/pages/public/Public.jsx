import { useEffect, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import './Public.scss';

export function Component() {
	useEffect(() => {
		localStorage.removeItem('user');
	}, []);

	useLayoutEffect(() => {
		document.body.classList.add('public');
		document.body.classList.remove('private');
	}, []);

	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	);
}
