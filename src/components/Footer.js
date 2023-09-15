import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config.json';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class Footer extends Component {
	render() {
		return (
			<Box component="footer" sx={{ mt: 12, py: [3, 6], backgroundColor: "#1a1b1d", ul: { margin: 0, padding: 0, listStyle: 'none' } }}>
				<Grid container spacing={4} justifyContent="space-evenly">
					<Grid item order={{ xs: 1, sm: 1 }}>
						<Typography variant="h6" color="text.primary" fontWeight="bold" textTransform="uppercase" gutterBottom>
            				Site Map
            			</Typography>
						<ul>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/'>
									Home
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/leaderboard'>
									Leaderboard
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/staff'>
									Staff
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/rules'>
									Server Rules
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/screenshare'>
									Screenshare Policy
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/privacy'>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</Grid>
					<Grid item order={{ xs: 3, sm: 2, userSelect: 'none' }} align="center">
						<Box sx={{
    						"@keyframes spin": {
      							"100%": {
        							transform: "rotate(360deg)",
      							},
    						},
    						"& > img:hover": {
      							animation: "spin 1.5s linear infinite",
    						},
  						}}>
							<img src='/img/warzone.svg' width="40" alt='Warzone logo'/>
						</Box>
						<Typography variant="body2" color="text.primary" fontWeight="bold" sx={{ mt: 1.8 }}>
							{'© '}{new Date().getUTCFullYear()}{' '}{config.NAME}
						</Typography>
						<Typography variant="body2" color="text.secondary" >
							{'Not an official Minecraft service.'}
							<br />
							{'Not approved by or associated with Mojang or Microsoft'}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
							{'Originally made by '}
							<Link className='normalize-link' target='_blank' rel='noreferrer' to="https://github.com/lukechatton">
								Luke Chatton
							</Link>
							{' in 2014.'}
    					</Typography>
					</Grid>
					<Grid item order={{ xs: 2, sm: 3 }} align="right">
						<Typography variant="h6" color="text.primary" fontWeight="bold" textTransform="uppercase" gutterBottom>
            				Useful Links
            			</Typography>
						<ul>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='/play'>
									Play
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to={config.DISCORD}>
									Discord
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to={`https://twitter.com/${config.TWITTER}`}>
									Twitter
								</Link>
							</li>
							<li>
								<Link variant="subtitle1" color="text.secondary" to='https://github.com/Warzone/'>
									GitHub
								</Link>
							</li>
						</ul>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

export default Footer;
