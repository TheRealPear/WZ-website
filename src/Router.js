import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import ServerRules from './pages/ServerRules';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Play from './pages/Play';
import Staff from './pages/Staff';
import ScrollToTopRoute from './components/ScrollToTopRoute';
import MatchInfo from './pages/MatchInfo';
import PlayerInfo from './pages/PlayerInfo';
import Screenshare from './pages/Screenshare';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='flex-wrapper'>
					<Navbar />
					
					<ScrollToTopRoute />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/leaderboard' element={< Leaderboard />} />
						<Route path='/rules' element={< ServerRules />} />
						<Route path='/privacy' element={< PrivacyPolicy />} />
						<Route path='/screenshare' element={< Screenshare />} />
						<Route path='/play' element={< Play />} />
						<Route path='/staff' element={< Staff />} />
						<Route path='/m/:mid' element={< MatchInfo />} />
						<Route path='/p/:pid' element={< PlayerInfo />} />
						<Route path='*' element={< NotFound />} />
					</Routes>

					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;
