import axios from 'axios';

export const fetch = (customHeaders) => {
	const client = () => {
		const token = localStorage.getItem('token');

		let headers = {
			Accept: 'application/json text/plain, */*',
			Authorization: token != null ? `Bearer ${token}` : '',
			'Content-Type': 'application/json',
		};

		headers = Object.assign(headers, customHeaders || {});

		// axios.defaults.headers = headers;

		return axios.create({
			baseURL: 'https://mitroo-klirikon-backend.azurewebsites.net/api/',
			// baseURL: 'http://localhost:8080/api/',
			withCredentials: false,
			timeout: 31000,
			headers: headers,
		});
	};

	const formatPath = (path) => {
		return path;
	};

	const formatOptions = (params, headers) => {
		return { params, headers };
	};

	const customGET = (path, params, headers) => {
		return client().get(formatPath(path), formatOptions(params, headers));
	};

	const get = (params, headers) => {
		return customGET(null, params, headers);
	};

	const customPOST = async (path, data, params, headers) => {
		return client().post(formatPath(path), data, formatOptions(params, headers));
	};

	const post = async (data, params, headers) => {
		return customPOST(null, data, params, headers);
	};

	return {
		get: get,
		customGET: customGET,
		post: post,
		customPOST: customPOST,
	};
};
