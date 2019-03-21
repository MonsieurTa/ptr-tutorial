import React, { Component } from 'react';
import './tictactoe.css'

class Square extends Component {
	constructor(props) {
		super(props);
		this.id = props.id;
		this.state = {
			value: null
		}
	}

	fillSquare(id) {
		this.props.playerHandler(this.state.value);
		if (this.state.value === null) {
			this.setState({value: this.props.player});
			this.props.updateBoard(id, this.props.player);
		}
	}

	render () {
		return (
			<button className='Square' onClick={() => this.fillSquare(this.id)}>
			{this.state.value}
			</button>
		);
	}
}

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		}
	}

	updateBoard(id, value) {
		const board = [...this.state.squares];
		let square = board[id];

		square = value;
		board[id] = square;
		this.setState({squares: board});
	}

	render () {
		const	currPlayer = this.props.player;

		return (
			<div>
				<div className='board-row'>
					<Square
						id='0'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
					<Square
						id='1'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
					<Square
						id='2'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
				</div>
				<div className='board-row'>
					<Square
						id='3'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
					<Square
						id='4'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
					<Square
						id='5'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
				</div>
				<div className='board-row'>
					<Square
						id='6'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
					<Square
						id='7'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
					<Square
						id='8'
						player={currPlayer}
						playerHandler={this.props.onClick}
						updateBoard={this.updateBoard.bind(this)}/>
				</div>
			</div>
		);}
}

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: 'X'
		}
	}

	playerTurnHandler(squareValue) {
		const currPlayer = this.state.player;

		if (squareValue === null)
			this.setState({player: currPlayer === 'X' ? 'O' : 'X'});
	}

	render () {
		return (
			<div>
				<p>Next turn: {this.state.player}</p>
				<Board 
					player={this.state.player}
					onClick={this.playerTurnHandler.bind(this)} />
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Game />
			</div>
		);
	}
}

export default App;
