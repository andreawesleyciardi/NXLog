import { queryOptions } from '@tanstack/react-query';

import { fetch, timeout } from './../services/Services';

export const signin = (data) =>
	queryOptions({
		queryKey: ['user', 'signin'],
		queryFn: async () => {
			await timeout(2000);
			let users = localStorage.getItem('users') ?? {};
			if (typeof users != 'object') {
				users = JSON.parse(users);
			}
			if (users?.[data.userName] !== undefined && users[data.userName] === data.password) {
				localStorage.setItem('user', { userName: data.userName, password: data.password });
				return { status: 200 };
			} else {
				return { status: 404 };
			}
		},
	});

export const signup = (data) =>
	queryOptions({
		queryKey: ['user', 'signup'],
		queryFn: async () => {
			await timeout(2000);
			let users = localStorage.getItem('users') ?? {};
			if (typeof users != 'object') {
				users = JSON.parse(users);
			}
			users[data.userName] = data.password;
			localStorage.setItem('users', JSON.stringify(users));
			return { status: 200 };
		},
	});

export const details = () =>
	queryOptions({
		queryKey: ['user', 'details'],
		queryFn: async () => {
			let user = localStorage.getItem('user');
			if (user != null && typeof user != 'object') {
				user = JSON.parse(user);
				return { status: 200, data: user };
			}
		},
	});
