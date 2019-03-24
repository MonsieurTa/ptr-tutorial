import React, { Component } from 'react';
import './calculator.css'

const regDigit = new RegExp('^[0-9]$');
const rows = [
	['AC', 'CE', '%', '/'],
	['7', '8', '9', 'X'],
	['4', '5', '6', '-'],
	['1', '2', '3', '+'],
	['0', '.', '=']
];

const operations = [
	{op: '+', func: (a, b) => a + b},
	{op: '-', func: (a, b) => a - b},
	{op: 'X', func: (a, b) => a * b},
	{op: '/', func: (a, b) => a / b},
	{op: '%', func: (a, b) => a % b},
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
			width: (value === '0') ? '50%' : '25%',
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
		let displayValueStyle = {
			position: 'absolute',
			color: 'white',
			fontSize: '50px',
			marginTop: '-25px',
			lineHeight: '100%',
			top: '50%',
			right: '0px'
		}
		return (
			<div className='Display'>
				<div style={displayValueStyle}>
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
			input: "",
			operation: undefined,
			result: 0,
			displayValue: '0'
		}
	}

	clearAll() {
		this.setState({
			input: "",
			operation: undefined,
			result: 0,
			displayValue: '0'
		});
	}

	inputClickHandler(input) {
		let currInput = this.state.input;
		let currOperation = this.state.operation;
		let currResult = this.state.result;
		let currDisplayValue = this.state.displayValue;
		let obj = operations.find(operation => operation.op === input);

		if (regDigit.test(input) === true || input === '.') {
			currInput += (currInput === '0' || currInput === "") ? input === '0' ? "" : input : input;
			currDisplayValue = (currInput === "") ? '0' : currInput;
		}
		else if ((currInput.length > 0 && obj !== undefined) || input === '='){
			if (currOperation === undefined) {
				currResult = Number(currInput);
			}
			else {
				currResult = currOperation.func(currResult, Number(currInput));
			}
			currInput = (input === '=') ? currInput : "";
			currDisplayValue = String(currResult);
			currOperation = (input === '=') ? currOperation : obj;
		}
		else if (input === 'AC') {
			this.clearAll();
			return ;
		}
		else if (input === 'CE') {
			currInput = "";
			currDisplayValue = '0';
		}
		this.setState({
			input: currInput,
			operation: currOperation,
			result: currResult,
			displayValue: currDisplayValue
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
