import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'
import NewTask from './NewTask.js'
import List from './List.js'

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

        <div>
        <List doChange={this.changeUserInput} input={this.state.userInput}/>
        <NewTask click={this.clickButton}/>
        </div>

        <br />
       {display}
      </div>
    );
  }
}

export default App;
