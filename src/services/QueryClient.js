import { QueryClient } from '@tanstack/react-query';

const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60 * 5;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			retry: 0,
			staleTime: 0,
			cacheTime: 0,
			refetchInterval: FIVE_MINUTES_IN_MILLISECONDS,
		},
	},
});

export { queryClient };

// Reference: https://github.com/cliffordfajardo/react-query-with-react-router-loader/blob/main/src/utils/queryClient.ts
