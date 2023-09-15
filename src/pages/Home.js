import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import RecentGrid from '../components/recent/RecentGrid';
import FeatureGrid from '../components/FeatureGrid';

class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron />
				<div className='container'>
					<RecentGrid sx={{ marginBottom: '4%' }} />
					<FeatureGrid />
				</div>
			</div>
		);
	}
}

export default Home;
