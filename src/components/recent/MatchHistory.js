import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
import TableRow from '@mui/material/TableRow';
import People from '@mui/icons-material/People';
import Timer from '@mui/icons-material/Timer';
import { Link } from 'react-router-dom';
import '../../styles/components/recent/match-history.css';
import { gamemodes_short, formatTime, getStatusColor, getElapsedTime } from '../../utils';

class MatchHistory extends Component {
	render() {
		return (
			<div className='match-history'>
				<h4>{this.props.title}</h4>
				{/* <hr /> */}
				{!this.props.matches && (
					<div className='center'>
						<span className='red'>No matches to show :(</span>
					</div>
				)}
				{this.props.matches && this.props.matches.length === 0 && (
					<div className='center'>
						<CircularProgress />
					</div>
				)}
				{this.props.matches && this.props.matches.length > 0 && (
					<Table className='match-history-table'>
						<TableBody>
							{this.props.matches.map((match) => {
								let timeElapsed = getElapsedTime(match);
								const color = getStatusColor(match);
								return (
									<TableRow key={match._id}>
										<TableCell
											align='left'
											className='match-history-table-cell'
										>
											<a href={`/m/${match._id}`} className='bold'>
												{match.level.name}
											</a>
										</TableCell>
										<TableCell
											className='match-history-table-cell'
											align='left'
										>
											{gamemodes_short[match.level.gamemodes[0]]}
										</TableCell>
										<TableCell
											className='match-history-table-cell'
											align='left'
										>
											<Timer className='match-history-table-cell-icon' />{' '}
											<span style={{ color }}>{formatTime(timeElapsed)}</span>
										</TableCell>
										<TableCell
											className='match-history-table-cell'
											align='left'
										>
											{Object.keys(match.participants).length}{' '}
											<People className='match-history-table-cell-icon' />
										</TableCell>
										<TableCell
											className='match-history-table-cell'
											component='th'
											scope='row'
										>
											<Button
												component={Link}
												to={`/m/${match._id}`}
												variant='contained'
												className='match-history-view-button white'
											>
												View
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				)}
			</div>
		);
	}
}

export default MatchHistory;
