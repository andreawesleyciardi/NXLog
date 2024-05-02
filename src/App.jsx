import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import NXlogo from "./assets/logo.png";
import { theme } from './ui/UI';
import Routing from './Routing';

import './App.scss';

function App() {
	const customTheme = createTheme(theme);

	return (
		<ThemeProvider theme={customTheme}>
			<Routing />
		</ThemeProvider>
	);
}

export default App;
