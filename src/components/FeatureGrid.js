import React, { Component } from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import '../styles/components/feature-grid.css';

class FeatureGrid extends Component {
	render() {
		return (
			<Grid container direction='row' justifyContent='space-evenly' spacing={2}>
				<Grid item sm={4} align='center'>
					<Typography variant="h6" component="h3" fontWeight='bold' sx={{ mb: 2 }}>Automated Matches</Typography>
					<img
						src='/img/fg-open.webp'
						alt='A Warzone KOTH Map'
						className='feature-grid-image'
					/>
					<Typography sx={{ mt: 1 }}>
						The server is always open for you to come on
						and practice your skills with friends!
					</Typography>
				</Grid>
				<Grid item sm={4} align='center'>
					<Typography variant="h6" component="h3" fontWeight='bold' sx={{ mb: 2 }}>Match Details</Typography>
					<img
						src='/img/fg-match.webp'
						alt='Warzone Match Details Page'
						className='feature-grid-image'
					/>
					<Typography sx={{ mt: 1 }}>
						Relive past matches with our detailed match 
						tracking.
					</Typography>
				</Grid>
				<Grid item sm={4} align='center'>
					<Typography variant="h6" component="h3" fontWeight='bold' sx={{ mb: 2 }}>Player Stats</Typography>
					<img
						src='/img/fg-player.webp'
						alt='Warzone Player Stats Page'
						className='feature-grid-image'
					/>
					<Typography sx={{ mt: 1 }}>
						Comprehensive player stats that includes K/D and W/L
					</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default FeatureGrid;
