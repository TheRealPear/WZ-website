import React, { Component } from 'react';
import config from '../config.json';
import SEO from '../components/SEO'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

class Screenshare extends Component {
	render() {
		return (
			<div className='page'>
				<SEO
					title="Screenshare Policy"
					description="In an effort to combat cheating, Warzone is utilizing screensharing with privacy in mind."
				/>
				<Container sx={{ ol: { li: { '&::marker': { fontWeight: 'bold' } } } }}>
					<Typography variant='h4' component='h1' fontWeight='bold'>
						Screenshare Policy
					</Typography>
					<Typography fontWeight='bold'>
						{'This page was last updated on '}
						<time dateTime="2021-07-15">July 15th, 2021</time>
						{'.'}
					</Typography>
					<Typography sx={{ mt: 1.5, mb: 1.5 }}>
						In an effort to combat cheating, {config.NAME} is utilizing
						"screensharing." Screensharing is the process of scanning and
						searching through a suspected cheater's computer in order to
						detect client modifications that violate {config.NAME}'s rules.
					</Typography>
					<hr />
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Privacy Statement
					</Typography>
					<Typography>
						Player privacy is prioritized during a screenshare. Staff members
						conducting screenshares will not look for any information that does
						not pertain to cheat detection. That being said, {config.NAME} does not
						guarantee sensitive information will not be encountered in the
						screenshare process. Players are expected to make sure that
						sensitive information is not stored in any folders that are related
						to Minecraft or similar. In the event that sensitive information is
						discovered, it will be kept private within the screenshare and senior
						staff.
					</Typography>
					<Typography sx={{ mt: 2 }}>
						If a player requires any clarification about programs or methods
						during a screenshare, the screenshare will be paused and questions
						will be answered. Players may request to pause or stop the
						screenshare at any time.
					</Typography>
					<Typography sx={{ mt: 2 }}>
						Note that all screenshares are recorded to be reviewed by senior
						staff members for quality assurance and to be referenced in the
						event of an abuse report.
					</Typography>
					<Alert variant="outlined" severity="info" color="error" sx={{ mt: 2, mb: 2 }}>
						<AlertTitle>Attention</AlertTitle>
						<strong>
							If you feel like your privacy has been violated in a Warzone
							screenshare, or have any complaints about a screenshare, please
							contact a senior staff member immediately. For more information,
							read <a className='normalize-link' href="#abuse">Abuse</a>.
						</strong>
					</Alert>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Process
					</Typography>
					<ol>
						<li>
							A suspicious player will be asked to submit to a screenshare by
							a {config.NAME} staff member.
						</li>
						<li>
							The player will join a public voice channel in the {config.NAME}{' '}
							Discord server, to be moved into a private voice channel with
							staff.
						</li>
						<li>
							Once the player and screenshare staff are in the voice channel,
							the player will be asked to share their entire screen on Discord.
						</li>
						<li>
							The player will be asked to install AnyDesk, a program that
							provides remote desktop access to the staff member performing
							the screenshare.
						</li>
						<li>
							During the screenshare, the screenshare staff may install
							trusted programs listed on this page that aid in the cheat
							detection process.
						</li>
						<li>
							Once the {config.NAME} staff members have come to a conclusion, the
							screenshare will end, and further information will be given by
							the screenshare staff.
						</li>
					</ol>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Failure
					</Typography>
					<Typography>
						Doing or being caught with any of the following during a screenshare
						without staff approval will result in an automatic screenshare
						failure and consequently a ban from the server:
					</Typography>
					<ul>
						<li>
							Using a FAT filesystem.
						</li>
						<li>
							Using VeraCrypt or equivalent disk encryption programs.
						</li>
						<li>
							Found traces of clients or autoclickers used before or while
							playing on {config.NAME}.
						</li>
						<li>
							Having Windows or equivalent operating system services disabled.
						</li>
						<li>
							Failing to join the Discord voice channel within five minutes of
							being asked.
						</li>
						<li>
							Logging out of the server after being asked to screenshare (up
							to staff discretion).
						</li>
						<li>
							Clearing or modifying your Recycle Bin/Trash folder immediately before a
							screenshare.
						</li>
						<li>
							Deleting, modifying, or moving files that screenshare staff deem
							suspicious.
						</li>
						<li>
							Configuring antivirus or firewall settings.
						</li>
						<li>
							Opening or closing programs.
						</li>
						<li>
							Configuring game settings.
						</li>
						<li>
							Configuring controls, key bindings or peripherals (e.g. mouse
							sensitivity).
						</li>
						<li>
							Connecting or disconnecting external devices.
						</li>
						<li>
							Stalling the screenshare or failing to comply with instructions
							from the screenshare staff.
						</li>
						<li>
							Restarting Windows or equivalent operating system services or processes in an attempt to
							obstruct the screenshare.
						</li>
						<li>
							Using applications that interfere with screenshare tools.
						</li>
						<li>
							Recording the screenshare (after one warning from staff);
							passive recording programs such as NVIDIA Shadowplay are also
							not allowed.
						</li>
						<li>
							Leaving the screenshare.
						</li>
						<li>
							Admitting to cheating.
						</li>
					</ul>
					<Typography sx={{ mb: 2 }}>
						Sharing information about the screenshare process that is not
						publicly available on this page at any point may result in a
						punishment.
					</Typography>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Who We Screenshare
					</Typography>
					<ul>
						<li>
							{config.NAME} staff will not screenshare players upon player request.
						</li>
						<li>
							A player who has already been screenshared may be screenshared
							again in the future.
						</li>
						<li>
							{config.NAME} staff may screenshare suspicious players who have been
							reported if there is insufficient evidence to issue a punishment.
						</li>
						<li>
							The {config.NAME} staff team maintains sole discretion in regards to
							deciding which players will be asked to submit to a screenshare.
						</li>
					</ul>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Software Used
					</Typography>
					<Typography>
						The following is a list of trusted software that may be
						used in a screenshare.
					</Typography>
					<ul>
						<li>
							<a className='bold normalize-link' href='https://paladin.ac/'>
								Paladin
							</a>{' '}
							— Investigate the Minecraft Java client (
							<a className='normalize-link' href='https://dl.pld.ac/'>
								Download Paladin
							</a>
							)
						</li>
						<li>
							<a className='bold normalize-link' href='https://avenge.ac/'>
								Avenge
							</a>{' '}
							— Investigate the Minecraft Java client (
							<a className='normalize-link' href='https://dl.avenge.ac/'>
								Download Avenge
							</a>
							)
						</li>
						<li>
							<a className='bold normalize-link' href='https://echo.ac/'>
								Echo
							</a>{' '}
							— Investigate the Minecraft Java client (
							<a className='normalize-link' href='https://dl.echo.ac/'>
								Download Echo
							</a>
							)
						</li>
						<li>
							<a className='bold normalize-link' href='https://safeshare.solutions/'>
								Safeshare
							</a>{' '}
							— Variety of bundled utilities designed to investigate program
							activity and the Minecraft Java client (
							<a className='normalize-link' href='https://safeshare.solutions/'>
								Download Safeshare
							</a>
							)
						</li>
						<li>
							<a className='bold normalize-link' href='https://anydesk.com/'>
								AnyDesk
							</a>{' '}
							— Provide remote desktop access to staff during screenshare (
							<a className='normalize-link' href='https://anydesk.com/en/downloads/'>
								Download AnyDesk
							</a>
							)
						</li>
					</ul>
					<Typography sx={{ mb: 2 }}>
						This list does not include every program that may be used by staff
						in a screenshare, but screenshare staff are bound by an internal
						list of allowed programs. Players are encouraged to research these
						programs in advance.
					</Typography>
					<Typography id="abuse" variant='h5' component='h2' fontWeight='bold'>
						Abuse
					</Typography>
					<Typography>
						Screenshares are regulated internally within the {config.NAME} staff team
						and screenshare staff are held to a high standard.
					</Typography>
					<Typography sx={{ mt: 2 }}>
						If you believe a {config.NAME} screenshare staff member has violated your
						privacy or acted contrary to this Screenshare Policy, please contact
						a senior staff member <strong>not involved in your screenshare</strong> immediately
						on Discord.
					</Typography>
					<hr />
					<Typography sx={{ mt: 1.5 }}>
						Our Screenshare Policy may be updated at any time, with or without
						notice. It is your responsibility to keep up-to-date with the content
						on this page.
					</Typography>
				</Container>
			</div>
		);
	}
}

export default Screenshare;
