import React, { Component } from 'react';
import config from '../config.json';
import SEO from '../components/SEO';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

class PrivacyPolicy extends Component {
	render() {
		return (
			<div className='page'>
				<SEO
					title="Privacy Policy"
					description="By using our Service, information may be collected and/or stored in numerous ways."
				/>
				<Container sx={{ ol: { li: { '&::marker': { fontWeight: 'bold' } } } }}>
					<Typography variant='h4' component='h1' fontWeight='bold'>
						Privacy Policy
					</Typography>
					<Typography fontWeight='bold'>
						{'This page was last updated on '}
						<time dateTime="2022-07-23">July 23rd, 2022</time>
						{' (updated policy regarding inventory data)'}
						{'.'}
					</Typography>
					<Typography sx={{ mt: 1.5, mb: 1.5 }}>
						By using our ({config.NAME}) Service, information may be collected
						and/or stored in numerous ways:
					</Typography>
					<hr />
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Information Collection
					</Typography>
					<ol>
						<li>
							Any statistics, participation in matches, and other
							gameplay-related events are compiled to allow for profile pages
							and match pages.
						</li>
						<li>
							Any changes in the player's inventory arrangement are saved every
							match to allow for preferences to be modeled and/or applied after
							each respawn. Saved data may be shared with third parties.
						</li>
						<li>
							Any messages you send to the server are stored on our Discord
							server and stored in match pages for moderation purposes.
						</li>
						<li>
							Any purchases made in our store are processed directly through
							3rd party services (PayPal, Stripe, and Xsolla) and not the{' '}
							{config.NAME} administration. We do not store your personal card
							information on our Services, nor do we have access to it.
							Additionally, we have a right to block you from using our
							Service if you charge back on our store without notifying a staff
							member.
						</li>
						<li>
							Any reports and appeals can be privately submitted on our
							forums. Moderators will respond accordingly to any reports
							and/or appeals you may make, and only staff members will have
							the ability to see them.
						</li>
						<li>
							We store a hash of your IP address in our database for
							moderation purposes.
						</li>
						<li>
							Any information you add to your Discord profile while on our
							Service is entirely optional and is handled by Discord
							exclusively: we will not infringe and/or change any of your
							information. To see Discord's privacy policy, please{' '}
							<a className='normalize-link' href='https://discord.com/privacy'>visit this page</a>.
						</li>
					</ol>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Policy Modification
					</Typography>
					<ol>
						<li>
							We reserve the right to update or modify this Privacy Policy
							with or without prior notice. It is your sole responsibility to
							stay updated with this page and to be responsible with any
							information that you may provide on our Services (such as being
							mindful of what you send). You will always be able to see the
							last revision to the Privacy Policy on the given date above, and
							by continuing usage of {config.NAME} Services, you are complying with
							the current revisions of our Privacy Policy.
						</li>
					</ol>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Contact Us
					</Typography>
					<Typography>
						If you have any questions or wish to seek clarification about our
						Privacy Policy, please contact an administrator in{' '}
						<a className='normalize-link' href={config.DISCORD}>our Discord server</a> or by email: <a className='normalize-link' href="mailto:support@warz.one">support@warz.one</a>.
					</Typography>
				</Container>
			</div>
		);
	}
}

export default PrivacyPolicy;
