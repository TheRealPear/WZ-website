import React, { useState } from 'react';
import config from '../config.json';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'
import SvgIcon from '@mui/material/SvgIcon';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import { ListItemIcon } from '@mui/material';

// Menu link goes here, make sure to follow JS syntax to avoid breaking things.
const NavLinkList = [{
	id: 0,
	label: "Play",
	path: "/play",
	icon: <SportsEsportsRoundedIcon />,
  }, {
	id: 1,
	label: "Leaderboard",
	path: "/leaderboard",
	icon: <EmojiEventsRoundedIcon />,
  }, {
	id: 2,
	label: "Store",
	path: config.STORE,
	icon: <ShoppingCartRoundedIcon />,
  }, {
	id: 3,
	label: "Discord",
	path: config.DISCORD,
	icon: <SvgIcon><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></SvgIcon>,  
  }, {
	id: 4,
	label: "Staff",
	path: "/staff",
	icon: <GroupsRoundedIcon />,
  }];

export default function Navbar() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const toggleDrawer = (open) => (event) => {
		if (
		  event.type === "keydown" &&
		  (event.key === "Tab" || event.key === "Shift")
		) {
		  return;
		}
		setDrawerOpen(open);
	  };
	return (
		<>
			<AppBar position='sticky' component="nav" elevation={1}>
				<Toolbar variant='dense' sx={{ bgcolor: 'toolbar.main', userSelect: 'none' }}>
					<img
						src='/img/warzone.svg'
						alt='Logo'
						width="25px"
						height="auto"
					/>
					<Typography variant='h6' fontWeight="700" sx={{ ml: 1 }}>
						<Link to='/'>
							{config.NAME}
						</Link>
					</Typography>
					<Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
						{NavLinkList.map((item) => (
							<Button key={item.id} color="inherit" size="large" sx={{ textTransform: "none" }} startIcon={item.icon} component={Link} to={item.path}>
    							{item.label}
    						</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
        				<IconButton size="large" aria-label="Open navigation" aria-controls="drawer-appbar" aria-haspopup="true" color="inherit" onClick={toggleDrawer(true)}>
        					<MenuIcon />
        				</IconButton>
      				</Box>
				</Toolbar>
			</AppBar>
			<Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{ sx: { width: "42%" } }}>
				<Box role="presentation" onClick={toggleDrawer(false)}>
					<Box>
						<Toolbar variant="dense">
							<Typography variant="h6" sx={{ flexGrow: 1 }}>Menu</Typography>
							<IconButton size="large" edge="end" aria-label="Close navigation" onClick={toggleDrawer(false)}>
								<CloseRoundedIcon/>
							</IconButton>
						</Toolbar>
					</Box>
					<Divider />
					{/* Add a Home button for better accessibility on mobile screens */}
					<ListItem disableGutters>
						<ListItemButton component={Link} to="/">
							<ListItemIcon sx={{ minWidth: '36px' }}><HomeRoundedIcon /></ListItemIcon>
							<ListItemText primary="Home"/>
						</ListItemButton>
					</ListItem>
					{NavLinkList.map((item) => (
						<ListItem key={item.id} component={Link} to={item.path} disableGutters>
							<ListItemButton>
								<ListItemIcon sx={{ minWidth: '36px' }}>{item.icon}</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItemButton>
    					</ListItem>
					))}
				</Box>
    		</Drawer>
		</>
	);
}
