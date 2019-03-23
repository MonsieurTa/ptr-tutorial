import React, { Component } from 'react';
import './calculator.css'

const regDigit = new RegExp('^[0-9]$');
const rows = [
	['AC', '+/-', '%', '/'],
	['7', '8', '9', 'X'],
	['4', '5', '6', '-'],
	['1', '2', '3', '+'],
	['0', '.', '=']
];

const op = [
	{op: '+', func: (a, b) => a + b},
	{op: '-', func: (a, b) => a - b},
	{op: 'X', func: (a, b) => a * b},
	{op: '/', func: (a, b) => a / b},
	{op: '%', func: (a, b) => a % b}
];

class CalcKey extends Component {
	constructor(props) {
		super(props);
		this.value = this.props.value;
	}

	render() {
		return (<button
			style={this.props.style}
			onClick={() => this.props.inputClickHandler(this.value)}>{this.value}</button>);
	}
}

class CalcPad extends Component {
	constructor(props){
		super(props);
		this.height = String(parseInt(100 / rows.length)) + '%';
	}

	generateRow(row, id) {
		let rowStyle = {
			width: '100%',
			height: this.height
		}

		return (
			<div style={rowStyle} key={id}>
				{row.map(elem => this.generateKey(elem))}
			</div>
		);
	}
	generateKey(value) {
		let keyStyle = {
			width: value === '0' ? '50%' : '25%',
			height: '100%',
			border: '1px solid',
			fontSize: '100%',
			background: (regDigit.test(value) === true || value === '.') ? '#fff' : '#ffa500'
		}

		return (<CalcKey
			value={value}
			style={keyStyle}
			key={value}
			inputClickHandler={this.props.inputClickHandler}/>);
	}

	render () {
		let padStyle = {
			position: 'absolute',
			bottom: '0px',
			width: '100%',
			height: '80%'
		}

		return (
			<div style={padStyle}>
				{rows.map((row, id) => this.generateRow(row, id))}
			</div>
		);
	}
}

class Display  extends Component {
	render() {
		return (
			<div className='Display'>
				<div className='DisplayValue'>
					{this.props.displayValue}
				</div>
			</div>
		);
	}
}

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: [],
			operation: [],
			result: 0,
			displayValue: '0'
		}
	}

	inputClickHandler(input) {
		let currInput = [...this.state.input];

		if (regDigit.test(input) === true || input === '.')
			currInput.push(input);
		currInput.join('');
		this.setState({
			input: currInput,
			displayValue: currInput
		});
	}

	render () {
		return (
			<div className='Calculator'>
				<Display displayValue={this.state.displayValue}/>
				<CalcPad
					inputClickHandler={this.inputClickHandler.bind(this)}/>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div id='wrapper'>
				<div className='App'>
					<Calculator />
				</div>
			</div>
		);
	}
}

export default App;
