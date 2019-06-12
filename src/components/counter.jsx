import React, { Component } from 'react';

class Counter extends Component {
	state = { 
		count: 0,
	};


	fontStyle1 = {
		fontSize: 20,
		fontWeight: 'bold'
	};

	render() {

		return (
			<div>
				<span style={this.fontStyle1} className="">{this.formatCount()}</span>
				<button style={{fontSize: 40}}>Increment</button>
			</div>
		);
	}

		formatCount() {
			const { count } = this.state;
			return count === 0 ? <h1>Zero</h1> : count;
	}
}

export default Counter;