import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Jumbotron from '../components/Jumbotron';
import RecentGrid from '../components/recent/RecentGrid';
import FeatureGrid from '../components/FeatureGrid';

class Home extends Component {
	render() {
		return (
			<Box>
				<Jumbotron />
				<Box className='container'>
					<RecentGrid sx={{ marginBottom: '4%' }} />
					<FeatureGrid />
				</Box>
			</Box>
		);
	}
}

export default Home;
