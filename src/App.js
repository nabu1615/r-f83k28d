import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			value: 0
		}
	}


  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.increaceValue.bind(this)}>Incrementa</button>
      </div>
    );
  }

  increaceValue() {
  	let data = this.state.value
  	this.setState({
  		value: data + 1
  	})
  }
}

export default App;
