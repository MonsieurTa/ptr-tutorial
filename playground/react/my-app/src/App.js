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
		this.winner = null;
		this.state = {
			squares: Array(9).fill(null)
		}
	}

	updateBoard(id, value) {
		const board = [...this.state.squares];
		let square = board[id];

		square = value;
		board[id] = square;
		this.setState({squares: board}, () => {
				this.winner = this.checkBoard(this.state.squares)
			});
		}
	checkBoard(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			  return squares[a];
			}
		}
		return null;
	}

	renderSquare(id) {
		return (
			<Square
				id={id}
				player={this.props.player}
				playerHandler={this.props.onClick}
				updateBoard={this.updateBoard.bind(this)}/>
		);
	}

	render () {
		return (
			<div>
				<div className='board-row'>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
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
				<p>Current player: {this.state.player}</p>
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
