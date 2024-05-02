import { queryOptions } from '@tanstack/react-query';

import { fetch } from './../services/Services';

export const signin = (data) =>
	queryOptions({
		queryKey: ['user', 'signin'],
		queryFn: async () => {
			const response = await fetch().customPOST('auth/signin/local', data);
			localStorage.setItem('token', response.data);
			return response;
		},
	});

export const details = () =>
	queryOptions({
		queryKey: ['user', 'details'],
		queryFn: async () => {
			const response = await fetch().customGET('auth/me');
			return response;
		},
	});
