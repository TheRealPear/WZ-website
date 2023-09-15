import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import '../styles/components/jumbotron.css';

class Jumbotron extends Component {
	state = {
		heading: 'Play'
	};

	async initialiseSlideChanger() {
		if (window.location.pathname !== '/') return;
		if (this.slideChanger) clearInterval(this.slideChanger);
		var headingElement = document.getElementById('jumbotron-header');
		headingElement.classList.add('jumbotron-slide-in-right');
		this.slideChanger = setInterval(() => {
			let newHeading;
			switch (this.state.heading) {
				case 'Play':
					newHeading = 'Compete';
					console.log(newHeading);
					break;
				case 'Compete':
					// newHeading = '???';
					newHeading = 'Play';
					console.log(newHeading);
					headingElement.classList.add('jumbotron-slide-in-right');
					break;
				// case '???':
				// 	newHeading = 'Play';
				// 	console.log(newHeading);
				// 	break;
				default:
					newHeading = 'Play';
			}
			headingElement.classList.remove('jumbotron-slide-in-right');
			this.setState({ heading: newHeading });
			console.log('set state');
		}, 15000);
	}

	tryDisableSlideChanger() {
		if (this.slideChanger) {
			clearInterval(this.slideChanger);
			return true;
		}
		return false;
	}

	async componentDidMount() {
		await this.initialiseSlideChanger();
		document.addEventListener('visibilitychange', (e) => {
			if (document.hidden) return this.tryDisableSlideChanger();
			return this.initialiseSlideChanger();
		});
	}

	componentWillUnmount() {
		this.tryDisableSlideChanger();
	}

	render() {
		return (
			<Box align='center' sx={{ minHeight: '300px', mb: '20px', backgroundPosition: 'center', backgroundSize: 'cover' }} className='jumbotron'>
				<Typography id='jumbotron-header' fontSize="4.68rem" fontWeight="500" sx={{ mb: 2.6, pt: '52px', userSelect: 'none' }}>
					{this.state.heading}
				</Typography>
				<Tooltip
					disableFocusListener
					disableTouchListener
					title='Minecraft 1.8+'
					arrow
				>
					<Button
						variant='contained'
						color='primary'
						component={Link}
						to='/play'
					>
						Join a match
					</Button>
				</Tooltip>
				<div className='jumbotron-button-divider' />
				<Tooltip
					disableFocusListener
					disableTouchListener
					title='View the leaderboard'
					arrow
				>
					<Button
						variant='contained'
						color='secondary'
						component={Link}
						to='/leaderboard'
					>
						View top players
					</Button>
				</Tooltip>
			</Box>
		);
	}
}

export default Jumbotron;
