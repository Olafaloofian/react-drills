import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    }
  }
  changeUsername(val) {
    this.setState ({
      username: val
    })
  }
  changePassowrd(val) {
    this.setState ({
      password: val
    })
  }
  alertMessage() {
    alert("Username: "+this.state.username+" Password: "+this.state.password)
  }
  render() {
    return (
      <div className="App">
      <input onChange = {e => this.changeUsername(e.target.value)}/>
      <input onChange = {e => this.changePassowrd(e.target.value)}/>
      <button onClick = {() => this.alertMessage()}>Login</button>
      </div>
    );
  }
}

export default App;
