import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>DPRN BOILERPLATE</div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));