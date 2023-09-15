import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

class NotFound extends Component {
	render() {
		return (
			<div className='page'>
				<Helmet>
					<title>404 Not Found</title>
					<meta name="robots" content="noindex"/>
				</Helmet>
				<Container align='center'>
					<Typography variant='h4' component='h1' color='crimson' fontWeight='bold'>
						Error 404
					</Typography>
					<Typography sx={{ mt: 3, mb: 3 }}>
						The page you are looking for may have been removed, is temporarily 
						unavailable, or does not exist.<br /> 
						Please check that you have typed the URL correctly or try again later.
					</Typography>
					<Button variant="contained" size='large' component={Link} to="/">Return to safety!</Button>
				</Container>
			</div>
		);
	}
}

export default NotFound;
