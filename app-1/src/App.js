import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      userInput: "",
    }
  }
  changeState(val) {
    this.setState({
      userInput: val,
    })
  }
  render() {
    return (
      <div className="App">
          <h2>Here is an awesome TEXTBOX</h2>
          <input onChange={e => this.changeState(e.target.value)}></input>
          <p>{this.state.userInput}</p>
          {console.log(this.state.userInput)}
      </div>
    );
  }
}

export default App;
