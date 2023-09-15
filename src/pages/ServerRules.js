import React, { Component } from 'react';
import config from '../config.json';
import SEO from '../components/SEO'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

class ServerRules extends Component {
	render() {
		return (
			<div className='page'>
				<SEO
					title="Server Rules"
					description="These rules are subject to change at any time, without notice."
				/>
				<Container sx={{ ol: { li: { '&::marker': { fontWeight: 'bold' } } }, ul: { listStyleType: 'disc' } }}>
					<Typography variant='h4' component='h1' fontWeight='bold'>
						Server Rules
					</Typography>
					<Typography fontWeight='bold'>
						{'This page was last updated on '}
						<time dateTime="2023-09-08">September 8th, 2023</time>
						{'.'}
					</Typography>
					<Typography sx={{ mt: 1.5, mb: 1.5 }}>
						Failure to abide by any of the rules listed on this page may
						result in a punishment for your Minecraft or Discord account. If
						you have questions about a rule, please contact a staff member on
						our Discord server for more information.
					</Typography>
					<hr />
					<Typography variant='h5' component='h2' fontWeight='bold'>
						General Composure
					</Typography>
					<ol>
						<li>
							Use and practice common sense. If it sounds questionable or
							excessive, it's probably not allowed. Consult with one of our
							staff members for rules or behavior not listed on this page.
						</li>
						<li>
							The server's official language is English, so we ask that you
							use English when communicating with the players on the server
							and in the community.
						</li>
						<li>
							Ensure that you are respectful to all players and are
							maintaining a calm and positive atmosphere while on our server.
							Harassment and bullying are not allowed.
						</li>
						<li>
							Toxic behavior such as acting negatively towards others, being a
							bad sportsman, and disrespecting others is not allowed. We aim
							to provide all players with a safe and relaxed environment;
							toxicity has no place on {config.NAME}.
						</li>
						<li>
							Inappropriate behavior is not allowed. This includes, but is not
							limited to, linking, posting or sending not safe for work (NSFW) content,
							making sexual comments or innuendos, and posting any other statement
							of that nature.
						</li>
						<li>
							Leaking players' personal information is not allowed. This
							includes, but is not limited to, IP addresses, home addresses,
							and phone numbers. Moreover, sharing confidential information
							related to {config.NAME} and its services is also not allowed.
						</li>
						<li>
							Be aware that others may find excessive profanity repulsive and
							disrespectful. While we're lenient when it comes to swearing, we
							ask that you do not direct profanity toward other players.
						</li>
						<li>
							Advertising and self-promoting are not allowed. This includes
							promoting Minehut servers, external Minecraft servers, YouTube
							channels, and Discord servers. Additionally, indirect
							advertising by inviting other players to come along with you or
							comparing {config.NAME}'s characteristics to another server
							to draw attention to it is not allowed.
						</li>
						<li>
							Keep in mind that {config.NAME} is not a market. To protect
							our players from scams and other financial offenses, selling,
							soliciting, and/or buying anything through our services (that is
							not from our official store) is not allowed. By extension,
							scamming or defrauding other players is not allowed.
						</li>
						<li>
							Discrimination of any kind is not allowed. This includes
							discrimination based on gender, race, disability, religion,
							sexual orientation, and other protected groups.
						</li>
						<li>
							Suicidal encouragement and encouraging self-harm are strictly
							forbidden.
						</li>
						<li>
							Using excessive capitalization in chat, flooding the chat, and
							spamming the chat are all not allowed.
						</li>
						<li>
							Evading punishments is not allowed. This includes using
							alternate accounts to join our Discord or Minecraft server when
							banned. Users who are muted in-game are not permitted to chat in
							our #server-chat Discord bridging channel.
						</li>
						<li>
							We ask that you are respectful toward members of the staff team,
							as you would be to normal players. Make sure to follow
							instructions from staff.
						</li>
						<li>
							Encouraging other players to break rules is not allowed.
							Additionally, raiding, rioting, violently protesting, or
							intentionally provoking any kind of disruption within our
							community is not allowed.
						</li>
						<li>
							Impersonating staff members on any platform by rank,
							association, or name is not allowed.
						</li>
						<li>
							Threatening other players or the server is not allowed. This
							includes (D)DoS threats, Dox threats, death threats, and other
							threats of that nature.
						</li>
					</ol>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						General Gameplay
					</Typography>
					<ol>
						<li>
							You must have an appropriate username, skin, and cape.
						</li>
						<li>
							Do not attempt to harm your team. This includes the following:
							<ul>
								<li>
									Game throwing - intentionally losing a game or not attempting to win.
								</li>
								<li>
									Team griefing - breaking blocks under teammates, stealing from chests,
									sabotaging your team's defenses, preventing your team from
									achieving objectives.
								</li>
								<li>
									Cross teaming - teaming up with a player of the opposite or different team.
								</li>
							</ul>
						</li>
						<li>
							Do not share information with players as a spectator to offer an
							advantage over other teams, otherwise known as <i>ghosting</i>.
						</li>
						<li>
							Map and statistic abuse are not allowed. This includes the following:
							<ul>
								<li>
									Grinding alternate accounts
								</li>
								<li>
									Spawn killing
								</li>
								<li>
									Leaving the game just before being killed.
								</li>
								<li>
									Switching teams just before you lose.
								</li>
								<li>
									Team stacking
								</li>
								<li>
									Anything similar that may positively affect your 
									stats above other players on the server.
								</li>
							</ul>
						</li>
						<li>
							Do not abuse gameplay bugs, glitches, or exploits 
							for your own advantage.
						</li>
						<li>
							The building of inappropriate structures will not be tolerated.
							This includes, but is not limited to genitalia, swastikas,
							insults, and inappropriate signs.
						</li>
						<li>
							Do not publicly hackusate other players. Also, do not
							intentionally play in such a way that aims to get hackusations
							from other players. This means that intentionally looking to be
							falsely punished is not allowed.
							<ul>
								<li>
									If you believe someone is breaking server rules, use /report in-game
									or open a ticket in our Discord to privately discuss with server 
									staff instead. This will allow them to investigate the situation
									without attracting unnecessary public attention. 
								</li>
							</ul>
						</li>
						<li>
							Client modifications that give you an unfair advantage over
							other players are not allowed. 
							<ul>
								<li>
									Unofficial clients such as Lunar Client and Badlion Client 
									are considered "use at your own risk."
								</li>
								<li>
									Purely aesthetic mods such as OptiFine, 5zig, and LabyMod
									are allowed, but minimaps with radars enabled, health
									indicators, skin blinkers, waypoints, etc; are not.
								</li>
							</ul>
						</li>
						<li>
							Macros, autoclickers, multiple attack functions, physical
							hardware or software modifications to allow automated clicking,
							modifications of standard hardware limitations, etc. are not
							allowed. Any number of clicks beyond one click at a time is not
							allowed, which means butterfly clicking and drag clicking are
							both not allowed.
							<ul>
								<li>
									Mouse debounce time should not be lower than
									10 milliseconds.
								</li>
							</ul>
						</li>
						<li>
							Bedrock Edition players must refrain from using unfair build
							mechanics that allow for scaffold-like bridging (otherwise known
							as Bedrock Bridging). For more information, contact a staff
							member.
						</li>
					</ol>
					<Typography variant='h5' component='h2' fontWeight='bold'>
						Discord & Forums
					</Typography>
					<ol>
						<li>
							Please keep all Discord channels on topic. Be sure to check
							the description and pinned messages in each channel you use.
						</li>
						<li>
							You must maintain an appropriate Discord profile. This includes,
							but is not limited to:
							<ul>
								<li>
									Usernames and nicknames
								</li>
								<li>
									Profile pictures and banners
								</li>
								<li>
									"About Me" content
								</li>
							</ul>
						</li>
						<li>
							Using your Discord profile to advertise, link, or otherwise
							refer to external Minecraft or Discord servers is not allowed.
						</li>
						<li>
							Linking social media accounts in your Discord profile is allowed
							and is not considered advertising.
						</li>
						<li>
							The use of voice changers and soundboards in voice channels is not allowed.
							<ul>
								<li>
									Additionally, turn on Push to Talk when necessary for
									consideration of other players.
								</li>
							</ul>
						</li>
						<li>
							Forging or falsifying evidence when appealing or submitting a report
							will result in an instant denial. A punishment might follow
							depending on the severity of the offense.
						</li>
						<li>
							When reporting a player, make sure to do so with sufficient
							evidence. Joke reports will be dismissed and will likely lead to a
							ban on our Discord and the forums.
						</li>
					</ol>
					<hr />
					<Typography sx={{ mt: 1.5 }}>
						Please note that if you are IP banned in-game or on our Discord
						server, all users associated with that IP address will also be
						banned. Additionally, these rules are subject to change at any time,
						without notice. It is your responsibility to keep up-to-date with
						the rules.
					</Typography>
				</Container>
			</div>
		);
	}
}

export default ServerRules;
