import React, { Component } from 'react';

class Timer extends Component {
	constructor(props){
    super(props) 
    this.state = 
    {
    count : 0,
    }
	  this.increaseCount = this.increaseCount.bind(this)
	}

	increaseCount(){
		const { count } = this.state
		this.setState({count: count + 1 })
	}

	componentDidMount() {
		setInterval( this.increaseCount, 1000)
	}

	componentDidUpdate() {
        	console.log('un update a eu lieu');
        }
	
	render() {
		return (
		<div>
			{this.state.count}
		</div>
		);
	}
}

export default Timer;
  