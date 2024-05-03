import React from 'react';

const theme = {
	palette: {
		primary: {
			main: '#051f39',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#0086c5',
			contrastText: '#ffffff',
		},
		text: {
			primary: '#212529',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true,
			},
			styleOverrides: {
				root: {
					borderRadius: '10px',
					fontSize: '1rem',
					letterSpacing: '0.1em',
					textTransform: 'none',
					transition: 'color .3s ease, background .3s ease',
					'&.MuiButton-sizeLarge': {
						height: '46px',
						padding: '13px 48px',
					},
				},
				text: {
					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					marginBottom: '0.5rem',
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: 'inherit',
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				body2: ({ theme }) => ({
					color: theme.palette.primary.main,
				}),
			},
		},
	},
	typography: {
		fontFamily: `"Poppins", "Monserrat"`,
		fontSize: 14,
		body1: {
			fontWeight: 400,
		},
		body2: {
			fontWeight: 400,
			fontSize: 16,
		},
		button: {
			fontWeight: 600,
		},
	},
};

export default theme;
