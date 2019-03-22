import React, { Component } from 'react';
import './calculator.css'

class CalcKey extends Component {
	constructor(props) {
		super(props);
		this.value = this.props.value;
	}

	render() {
		return (<button className={this.props.style}>{this.value}</button>);
	}
}

class Calculator extends Component {
	generateKey(value) {
		let num = new RegExp('^[0-9]$');

		return (<CalcKey value={value} style={
			num.test(value) === true ? 'CalcNum' : 'CalcOp'}/>);
	}
	
	generatePad() {
		return (
			<div className='Pad'>
				<div className='KeyRow'>
					{this.generateKey('AC')}
					{this.generateKey('+/-')}
					{this.generateKey('%')}
					{this.generateKey('/')}
				</div>
				<div className='KeyRow'>
					{this.generateKey('7')}
					{this.generateKey('8')}
					{this.generateKey('9')}
					{this.generateKey('X')}
				</div>
				<div className='KeyRow'>
					{this.generateKey('4')}
					{this.generateKey('5')}
					{this.generateKey('6')}
					{this.generateKey('-')}
				</div>
				<div className='KeyRow'>
					{this.generateKey('1')}
					{this.generateKey('2')}
					{this.generateKey('3')}
					{this.generateKey('+')}
				</div>
			</div>
		);
	}

	render () {
		return (
			<div className='Calculator'>
				{this.generatePad()}
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
