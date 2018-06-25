import React, { Component } from 'react';
import './App.css';
import CleanTheRoom from './components/CleanTheRoom';
import AddTwoForTarget from './components/AddTwoForTarget';
import HexToRgb from './components/HextToRgb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        This is app-intro
        </p>
        <CleanTheRoom />
        <AddTwoForTarget />
        <HexToRgb />
      </div>
    );
  }
}

export default App;
