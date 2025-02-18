export const copyToClipboard = async (text) => {
	if ('clipboard' in navigator) {
		return await navigator.clipboard.writeText(text);
	} else {
		return false;
	}
};

export const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
