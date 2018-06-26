import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      taskArray: []
    }
    this.clickButton = this.clickButton.bind(this);
    this.changeUserInput = this.changeUserInput.bind(this);
  }
  changeUserInput(val) {
    this.setState({
      userInput: val,
    })
  }
  clickButton() {
    this.setState({
      userInput: "",
      taskArray: [...this.state.taskArray, this.state.userInput]
    })
  }
  render() {
    let display = this.state.taskArray.map( (e, i) => {
      return(
      <Todo key={ i } task={ e } />
      )
  })
    return (
      <div className="App">
       <h1>My to-do list:</h1>
       <input value={this.state.userInput} onChange = {(e => this.changeUserInput(e.target.value))}/>
       <button onClick = {this.clickButton}>Add</button>
       <h1>{display}</h1>
     
      </div>
    );
  }
}

export default App;
