import React, { Component } from 'react';
import Router from './Router';
import config from './config.json';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#3f51b5',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: '#303030',
		},
		toolbar: {
			main: '#282a2d',
		}
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'"Open Sans"',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
});

const helmetContext = {};

class App extends Component {
	render() {
		return (
			<HelmetProvider context={helmetContext}>
				<Helmet defaultTitle={config.NAME} titleTemplate={`%s - ${config.NAME}`}>
					<link rel="canonical" href={window.location.href}/>
					{/* OpenGraph */}
					<meta property="og:title" content={config.NAME}/>
					<meta property="og:url" content={window.location.href}/>
					{/* Twitter Cards */}
					<meta name="twitter:site" content={`@${config.TWITTER}`} />
				</Helmet>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Router />
				</ThemeProvider>
			</HelmetProvider>
		);
	}
}

export default App;
