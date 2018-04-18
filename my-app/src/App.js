import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginControl from './LoginControl'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello, {formatName(user)}</p>
        <Clock time="北京时间"/>
        <Toggle />
        <LoginControl />
      </div>
    );
  }
}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {data: new Date()};
  }
  componentDidMount() {
    this.timeId = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick () {
    this.setState({
      data: new Date()
    });
  }
  render() {
    return (
      <div>
        <p>{this.props.time}</p>
        <p>现在时间: {this.state.data.toLocaleTimeString()}.</p>
      </div>
    )
  }
}
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    );
  }
}

function formatName (user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

export default App;
