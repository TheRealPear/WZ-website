import React, { Component } from 'react';
import config from '../config.json';
import SEO from '../components/SEO'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip'
import '../styles/pages/play.css';

class Play extends Component {
	async copyHostToClipboard(text) {
		if (!navigator.clipboard) return this.fallbackCopyHostToClipboard(text);
		await navigator.clipboard.writeText(text);
		console.log('Copied address to clipboard');
	}

	fallbackCopyHostToClipboard(text) {
		var textArea = document.createElement('textarea');
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try {
			document.execCommand('copy');
		} catch (err) {
			console.error('Unable to copy', err);
		}
		document.body.removeChild(textArea);
	}

	render() {
		return (
			<div className='page play'>
				<SEO
					title="Play"
					description="Join Warzone to play anytime!"
				/>
				<Container maxWidth={false} className='play-background' align='center' sx={{ mb: -12 }}>
					<Typography variant="h3" component="h1" fontWeight='bold' sx={{ mb: 3 }}>Join {config.NAME} to play anytime!</Typography>
					<Container sx={{ mb: 1 }}>
						<Typography variant="h5" component="h2" fontWeight='500'>
							Connect to{' '}
							<Tooltip
								disableFocusListener
								disableTouchListener
								title='Click to copy'
								placement='right'
								arrow
							>
								<Button variant="contained"
								sx={{ fontWeight: 'bold' }}
								onClick={() => {
									this.copyHostToClipboard(config.SERVER_ADDRESS)
								  }}
								>
									{config.SERVER_ADDRESS}
								</Button>
							</Tooltip>
						</Typography>
					</Container>
					<Typography variant="h6" component="h3" fontWeight='250' sx={{ verticalAlign: 'center' }}>
						with Minecraft{' '}
						<Chip label="1.8+" sx={{ backgroundColor: '#1e2c35', fontSize: '1rem' }} />
					</Typography>
				</Container>
			</div>
		);
	}
}

export default Play;
