import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['camaro', 'mustang', 'corvette', 'challenger', 'el camino', 'solstice', 'g6'],
      userInput: ""
    }
  }

  makeChange(val) {
    this.setState ({
      userInput: val
    })
  }

  render() {
    console.log(this.state.userInput)
    const filteredArray = this.state.array.filter(e => {
      return e.includes(this.state.userInput);
    }).map( (e, i) => {
      return (
        <h2 key = { i }>{ e }</h2>
      )
    }
  )
    return (
      <div className="App">
          <h2>Cool Cars List</h2>
          <input onChange = {e => this.makeChange(e.target.value)} />
          {filteredArray}
      </div>
    );
    console.log(this.state.userInput)
  }
}

export default App;
